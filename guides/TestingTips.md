# Testing Tips
While not a recommendation for production use, the following are tips for sandbox and testing use.

[Zookeeper](#zookeeper)

[Build a ZK Quorum](#build-a-zk-quorum)

[Equella Clustering in a Sandbox](#equella-clustering-in-a-sandbox)

[Integrations](#integrations)

[Authentication](#authenication)

[Attachments](#attachments)


## Zookeeper

* Zookeeper's default logging will log messages to zookeeper.out in the directory that zookeeper is started from. 
* After installing Zookeeper, start via:
```bash
cd /usr/local/zookeeper-3.4.X
bin/zkServer.sh start
```

To shutdown Zookeeper:
```bash
cd /usr/local/zookeeper-3.4.X
bin/zkServer.sh stop
```

To check if Zookeeper is active:
```bash
echo stat | nc <<ZK IP>> 2181
```

## Build a ZK Quorum
To turn several standalone ZK nodes into a quorum:
* Spin up 3 ZK standalone nodes and take note of their IPs. For this example, the IPs are:
  * ```192.168.1.111```
  * ```192.168.1.112```
  * ```192.168.1.113```
* Add ```JVMFLAGS=-Xmx2048m``` to the top of each bin/zkEnv.sh.
* At the bottom of zoo.cfg in _/usr/local/zookeeper/conf/zoo.cfg_, add:
  * ```server.1=192.168.1.111:2888:3888```
  * ```server.2=192.168.1.112:2888:3888```
  * ```server.3=192.168.1.113:2888:3888```
* Assuming you've kept the Zookeeper dataDir to be ```/usr/local/zookeeper-3.4.5/dataDir```, add a file at ```/usr/local/zookeeper-3.4.5/dataDir/myid``` and put in the single digit server ID (1,2, or 3).

## Equella Clustering in a Sandbox

1. Filestore:
  1. Create a shared directory on one of the servers
  1. In mandatory-config on the sister node(s), use the path that shared path
1. DB:
  1. On the node your database is running on:
  1. In *pg_hba.conf*, add the following to the bottom of the file: Note - if your sister node IPs are not covered, adjust accordingly.
```
host all all 192.168.1.120/24 trust
host all all 192.168.1.121/24 trust
host all all 192.168.1.122/24 trust
```
  1.  In _postgresql.conf_, ensure the following is in place:
```
listen_addresses = '*'
```
1. Then it's just a matter of wiring in your nodes together via hibernate.properties, mandatory-config.properties, and
optional-config.properties.

## Integrations
### Blackboard Quick Start
In Equella:
1. Setup a Shared Secret. For the login, select 'create a local user' and add them to a group with enough ACLs (discover / view items).
1. If working with an Equella that supports LTI Auth (such as 6.3-QA2+), create an OAuth client following the LTI Auth flow, and setup the LTI Mappings. (both from the Web UI Settings page).
1. Ensure there are items / attachments available.

In Blackboard:
1. If EQ is http, ensure mixed content is allowed in the browser.
1. To test Bb / Equella from a student's point-of-view in a given course, using the Admin Bb user:
  1. Go to a course
  1. In the left hand nav menu under 'Course Management', select 'Users and Groups' > 'Users'
  1. Click 'Enroll User' > 'Create User'.
  1. Fill in the needful, and click 'Submit'.
1. Remove any old Equella WebService and Equella Building Blocks in Blackboard.
1. Upload your desired Equella Building Block. Set Available, and then configure the settings.
1. Go into 'System Admin' > 'Tools and Utilities' > 'Tools'. Search for the Equella plugin, and turn on the 3 Availability toggles.
Allow it to be available for new AND existing courses / etc.
1. If you want to test push-to-lms functionality, install the Web Service (jar can be obtained from the building block, or if a custom build, it's one of the two artifacts from running 'ant product'.
1. Equella should now be hooked up to Blackboard.  To test:
  1. Go into a course
  1. Select Information or Content from the left nav
  1. On the ribbon on top of the 'editable' area, click 'Tools' > 'Equella Object'. Select an item or attachment and enjoy!

### Canvas
The available Canvas site is hosted in the cloud by Instructure. Go to the website [https://canvas.instructure.com/login](https://canvas.instructure.com/login) and create a free account.

From there, you can setup an integration with a given Equella install.

1. Create a Canvas module before trying to select an Equella resource from Canvas or use the Push To LMS feature in Equella for Canvas.
1. There is a Canvas config guide in the docs repo.  It would be good to pull out the quick start details into here.

## Moodle
Same deal as Canvas...  Would be good to pull out the 'quick start' version here.


## Authentication

### External Authentication
TBD

### LDAP
Setup a default LDAP server. The following setup has been proven to work against the primary use cases (below):

### LDIF
Import these as ldif files into the o=equellasupport partition via Apache Studio

_groups.ldif_
```
dn: ou=people,o=equellasupport
objectclass: organizationalUnit
objectclass: top
description: Contains entries which describe users
ou: people
dn: ou=groups,o=equellasupport
objectclass: organizationalUnit
objectclass: top
description: Contains entries which describe groups
ou: groups
```

_users.ldif_
Password is ```pass```.
```
dn: cn=John Doe,ou=people,o=equellasupport
objectclass: person
objectclass: organizationalPerson
objectclass: inetOrgPerson
objectclass: top
cn: John Doe
description: cn=John Group,ou=groups,o=equellasupport
title: cn=John Doe,ou=people,o=equellasupport
givenname: John
sn: Doe
uid: jdoe
mail: jdoe@example.com
userpassword: {SHA}nU4eI71bcnBGqeO0t9tXvY1u5oQ=

dn: cn=Jo Smith,ou=people,o=equellasupport
objectclass: person
objectclass: organizationalPerson
objectclass: inetOrgPerson
objectclass: top
cn: Jo Smith
description: cn=Jo Group,ou=groups,o=equellasupport
title: cn=Jo Smith,ou=people,o=equellasupport
givenname: Jo
sn: Smith
uid: jsmith
mail: jsmith@example.com
userpassword: {SHA}nU4eI71bcnBGqeO0t9tXvY1u5oQ=
```


_mapUsersToNestedGroups.ldif_

Configure EQUELLA to use Apache DS as LDAP

General
* LDAPS URL: ```ldaps://<<LDAP IP>>:10636```
* Version: 3
* Admin Username : ```uid=admin,ou=system```
* Password: 

LDAP Mappings
* Personal Object Class : person
* Group Object class : groupOfUniqueNames
* Username : cn
* ID : uid
* Group ID : cn
* Group Name : cn
* Family Name : sn
* FirstName : givenname
* Email : mail
* member of : description (This is a hack since Apache DS doesn't look to have virtual attributes - ideally it's be memberof)
* Group members : uniquemember
* member key : title (This is a hack since Apache DS doesn't look to have virtual attributes - ideally it'd be cn or uid)

### Primary Use Cases
1. Login to Equella with an LDAP user
2. Confirm CREATE_ITEM ACL works when assigned to a specific user
3. Confirm CREATE_ITEM ACL works when assigned to a group that your logged in user is a part of
4. Confirm Diagnostics work to find groups by user
5. Confirm Diagnostics work to find users by group
6. Via the security manager, retrieve an LDAP group to grant ACLs against, and confirm it affects a member ldap user. (similar / same to #3, but good to call out)
7. Via the internal roles, search and add an LDAP group to grant ACLs, and confirm it affects a member ldap user.
8. Via the internal roles, browse for an LDAP group, highlight the group, and the browse for LDAP users. All LDAP users in that group
should display.
9. Probably more use cases would be good to confirm...

### Notes

General

Under 'LDAP Mappings', when the Personal object class is blank, Equella assumes 'person'. The 'Group Object Class' however, is not given a default. Plugging in 'groupOfUniqueNames' for group object class allows the group-centric use cases to work.

### Setup a partition
1. Open Apache Studio
2. Right click on the ''Equella LDAP connection' entry in the 'Connections' tab.
3. Select 'Open Configuration' > Partitions
* Click 'Add'
* Provide connection details:
* Partition Type: JDBM
* id: Equella Support
* Suffix: o=equellasupport
* Leave the rest as defaults
4. Restart LDAP Server from Apache Studio
5. You might need to reload the entities in the Root DSE - Eclipse (Studio) tends to cache these values.

#### RDS
RDS stands for Replication Data Store.  The Postgres backup file and Equella institution tgz provides a complete example (TODO - need to locate).  Inspecting the instition should give a good idea of how the RDS should be setup.
* replicated.backup
* institution.tgz

The basic concept is user, groups, and roles from the RDS will be available to Equella once the RDS UMP is configured and enabled - it'll behave similarly to Equella Internal Users / Groups / Roles.

Putting the following in learningedge-config/learningedge-log4j.properties will log all replicated datastore queries that are performed in the resource-centre logs (requires a restart though)
```
log4j.logger.com.tle.core.usermanagement.standard.ReplicatedUserPlugin=DEBUG
```

## Attachments
For an example set of attachments, the following has been historically useful for troubleshooting integration issues.

### LTI
The following is a set of directions on how to create an LTI attachment:
1. Configure an Attachments control to accept "ExternalToolProvider(LTI)" attachments.
1. Go to Settings/ExternalToolProviders(LTI) and create tool provider TestTP1 as follows.
  1. ```BaseURL=https://www.edu-apps.org/tool_redirect?id=wiktionary```
  1. ```IconURL=http://icons.iconarchive.com/icons/martin-berube/animal/32/pig-icon.png```
1. Make up a ConsumerKey, SharedSecret and CustomParams(such as dog=Fido,cat=Puss).
1. Tick both Privacy Options then Save.
1. Start to contribute an item with an LTI attachment, setting the attachment's properties as follows.
```
LTIProvider=TestTP1
LaunchURL blank
Display name=<make it up>
```
1. Finish the contribution process.
1. It should succeed. Attachment should be playable.
1. Contribute another item with LTI, details as follows.
1. Just check that it is playable.
1. In Equella create an LTI Consumer.
1. In Moodle go to SiteAdministration/plugins/plugins overview/LTI/Settings.
1. Start to add an external tool configuration.
1. Make up a ToolName, then point the ToolBaseURL to one of the LTI items you just contributed in Equella.
1. Set the ConsumerKey and SharedSecret to match the Equella settings, then Save.
1. Still in Moodle, go to a Course and click AddActivityOrResource/ExternalTool.
1. Fill in details as follows, then Save.
```
ActivityName=<make it up>
ExternalToolType=Automatic
LaunchURL=<the equella attachment URL>
```
1. You should be able to play the attachment from Moodle now.  

## SCORM
The SCORM version and edition is specified in the manifest:
```xml
<metadata>
  <schema>ADL SCORM</schema>
  <schemaversion>2004 4th Edition</schemaversion>
</metadata>
```
For examples, refer to [http://scorm.com/scorm-explained/technical-scorm/golf-examples/](http://scorm.com/scorm-explained/technical-scorm/golf-examples/)
