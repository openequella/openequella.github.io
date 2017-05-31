# Zookeeper / EQUELLA Cluster Diagnostics

Table of Contents

* [Introduction](#introduction)
* [EQUELLA Network Failure](#equella-network-failure) 
* [Unique IDs for EQUELLA Nodes](#unique-ids-for-equella-nodes)
* [EQUELLA Session Failover](#equella-session-failover)
* [Failure to Connect to Zookeeper on Startup](#failure-to-connect-to-zookeeper-on-startup)
* [Rolling Restart of EQUELLA](#rolling-restart-of-equella)
* [Rolling Restart of Zookeeper](#rolling-restart-of-zookeeper)
* [Running Zookeeper in a Degraded State](#running-zookeeper-in-a-degraded-state)
* [Appendix: Healthy Cluster State](#appendix-healthy-cluster-state)

## Introduction
**Zookeeper failover:**  Zookeeper requires a majority of its quorum nodes to be responsive in order to be available to EQUELLA. For the following scenarios, we’ll assume the Zookeeper quorum has 3 nodes.

**EQUELLA failover:**  EQUELLA does not have a majority requirement for active nodes in its cluster. It does however have a delay of roughly 30 seconds to persist user sessions / state (such as wizards) to the database. Note that Bulk Operations will not failover to other EQUELLA nodes. For the following scenarios, we’ll assume the EQUELLA cluster has 2 nodes.

## Tests

## EQUELLA Network Failure 
### Less than 10 seconds

For a short network failure, no visible change should occur in EQUELLA.

1. Identify the EQUELLA node to create a network failure on (for example, on Linux, you can simulate this by pausing the EQUELLA Java process using ‘sudo kill -STOP [PID]’ and resume with a ‘sudo kill -CONT [PID]’).
2. Take note of the Active Tasks details.
3. Login to EQUELLA and ensure you’re on the targeted node.
4. Start a Bulk Op on the targeted node that will go for at least 30 seconds.
5. Simulate the network failure on the targeted EQUELLA node for less than 10 seconds.
6. Ensure the Active Tasks details remain as before, and that the Bulk Op task is on the list.
7. Ensure the Bulk Op dialog finishes successfully.
8. Ensure the Active Tasks details no longer shows the Bulk Op.
9. Check the EQUELLA logs - ensure no task failover was logged.
10. Verify cluster health.

### More than 10 seconds
For a longer network failure, the nodes that had trouble communicating with
Zookeeper will refresh its ‘Active Tasks’ state. To do so, any tasks on the affected
node(s) will be stopped (after completion of the current execution, provided the
EQUELLA node stays healthy). Then, only primary tasks (such as the Scheduler
Supervisor, Migration, and Institution tasks) will be restarted as per the state in
Zookeeper.

1. Identify the EQUELLA node to create a network failure on (on a Linux, you can simulate this by doing a ‘sudo kill -STOP [PID]’ and resume with a ‘sudo kill -CONT [PID]’).
2. Take note of the Active Tasks details.
3. Login to EQUELLA and ensure you’re on the targeted node.
4. Start a Bulk Op on the targeted node that will go for at least 2 minutes.
5. Simulate the network failure on the targeted EQUELLA node for ~45 seconds.
6. Quite possibly, the Bulk Op dialog will appear to cease functioning. Check the thread dumps of both servers - there should still be the Bulk Op running.
7. Ensure the Active Tasks details no longer shows the Bulk Op.
8. Let the Bulk Op complete - the logs will indicate this.
9. Check the EQUELLA logs - ensure the logs show that the primary Active Tasks were failed over. They might get failed over to the same node. This is appropriate behavior.
10. Verify cluster health.

## Unique IDs for EQUELLA Nodes
Covered in the EQUELLA Clustering Guide. 
Note that in 6.3+ the first part of the cluster id can be specified in optional-config.

## EQUELLA Session Failover
Covered in the EQUELLA Clustering Guide.

## Failure to Connect to Zookeeper On Startup
EQUELLA should wait for Zookeeper to start up and proceed as normal once connected to
Zookeeper.
1. Turn off EQUELLA (2 node cluster).
2. Turn off a majority of the Zookeeper nodes.
3. Turn on both EQUELLA nodes (should not fully start up - i.e. the website will not be accessible).
4. Turn on a majority of the Zookeeper nodes.
5. Verify the logs show Zookeeper is now CONNECTED.
6. Verify cluster health.

## Rolling Restart of EQUELLA
EQUELLA should operate as normal when performing rolling restarts for a majority of use cases, which includes cluster health.
1. Assuming a 2 node cluster, take note of the Active Tasks details.
2. Stop node A, wait 15 seconds, start node A, wait 30 seconds.
3. Verify the Active Tasks are now running on node B.
4. Stop node B, wait 15 seconds, start node B, wait 30 seconds.
5. Verify the Active Tasks are now running on node A.
6. Verify cluster health.

## Rolling Restart of Zookeeper
Zookeeper is highly robust in terms of failover, and as such, rolling restarts are appropriate. As long as the majority of the Zookeeper nodes are always active, EQUELLA should operate as normal, but will need to reconnect to Zookeeper when its current Zookeeper node is bounced. This is similar to the scenario of a network failure scenario lasting less than 10 seconds.
1. Take note of the Active Tasks details.
2. Login to EQUELLA and start a Bulk Op that will go for at least 30 seconds longer than the rolling restart of
Zookeeper will take.
3. Perform the rolling restart of Zookeeper (bounce a Zookeeper node, wait 30 seconds, continue). For testing failover, try to bounce the Zookeeper leader node if possible.
4. Ensure the Active Tasks details remain as before, and that the Bulk Op task is on the list.
5. Ensure the Bulk Op dialog completes.
6. Ensure the Active Tasks details no longer shows the Bulk Op, and the rest of the tasks are the same as the start of the test.
7. Check the EQUELLA logs - ensure no task failover was logged, and no Zookeeper connections were LOST (only SUSPENDED and RECONNECTED).
8. Verify cluster health.

## Running Zookeeper in a Degraded State
Zookeeper needs a majority of its nodes responding to have the quorum be available to
EQUELLA. Assuming a 3 node Zookeeper configuration, this means 2 nodes have to be
responsive. EQUELLA should run as normal as long as the quorum is available, even if not
all Zookeeper nodes are responsive.

1. Start with the Zookeeper quorum and EQUELLA cluster fully operational.
2. Turn off the Zookeeper node that is the ‘leader’.
3. Verify cluster health - let enough time pass that the hourly scheduled tasks run.

## Appendix Healthy Cluster State
To verify a ‘healthy’ EQUELLA cluster (assuming a 2 node cluster):

1. Verify scheduled tasks are running (via the logs) every hour.
Perform the add-item test:
2. Add an item (can be in draft) with an attachment on the first node
3. Access ‘Manage Resources’ from another node - ensure the item shows up
immediately after it’s created
4. Perform the add-item test for each node
5. Verify disabling / enabling an institution works on both nodes.
6. Verify the logged in users are roughly equivalent (can be up to a 60 second delay).
7. Run a bulk action (doesn’t have to be large - two items is sufficient). Ensure it completes and the Bulk Op task is removed from the Active Tasks details and no longer in the thread dumps.
8. Verify the ‘Active Tasks’ section on the cluster health page is as expected.

Monitor the logs:
  * Ensure EQUELLA isn’t reconnecting to Zookeeper or other EQUELLA nodes a lot
  (EQUELLA should rarely need to reconnect unless a network failure or app failure
  occurs)
  * Ensure the Zookeeper logs are clean (We’ve seen cases where the Zookeeper quorum
  had insufficient resources / configs, and was performing inter-quorum reconnections a
  lot)