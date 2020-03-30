# openEQUELLA Clustering

**Discover if a ZK node is the leader**
There is a set of four letter words that give insight into a ZK instance. The reference can be found here. Run the 'stat' command against the ZK
node, for example:

```echo stat | nc 192.168.1.245 2181```

**Session Persistance**
Session persistence is achieved through the database in the tomcat_sessions table of the system schema every 30 seconds. This could cause an issue at the time of failover. For example, if you kill a node before it has passed the 30 second window to persist the data, it will not be recoverable on the other nodes. This time is hard set at the moment.
