# Additional Information on openEquella in general, how-tos, guides, etc.

[Turning An openEquella Institution Into An OAI Endpoint](#turning-an-equella-institution-into-an-oai-endpoint)

[Using openEquella to Harvest Another openEquella Via OAI](#using-equella-to-harvest-another-equella-via-oai)

[Bulk Update Of User Email Notification Option](#bulk-update-of-user-email-notification-option)

[Removing Rogue Attachments](#removing-rogue-attachments)

[Reset the Server Admin Pages Password](#reset-the-server-admin-pages-password)

[Reset the openEquella Manager Password](#reset-the-equella-manager-password)

[Adding Collaborators In Bulk](#adding-collaborators-in-bulk)

[Delete ALL notifications](#delete-all-notifications)

[Enable Remote Debugging via Eclipse](#enable-remote-debugging-via-eclipse)

## Turning An openEquella Institution Into An OAI Endpoint

While openEquella can consume OAI_DC compliant resources from third party sites, we can also configure openEquella to be an OAI_DC endpoint.

Setting up an example endpoint in your institution
1. Navigate to your metadata schema via the Admin Console, and click on the 'Transformations' tab.
2. Add an Export Transformation and select a non-empty xsl file. Here is an example: oai_dc1.xslt. A very basic identity transform such as iden
tity.xslt can also be used for testing purposes.
4. To verify openEquella is recognizing the new export, navigate to this link to list all Metadata Formats available on the site:
my equella institution/p/oai?verb=ListMetadataFormats
5. Next, create a Dynamic Collection via the Admin Console. Allow the collection to be available through the OAI_PMH Set service (the
Harvester Collection is not for the OAI harvesting setup).
6. Have it search against a collection that is based off the schema you added the export transform to.
8. Do a test pull of the data:
my equella institution/p/oai?verb=ListRecords&metadataPrefix=oai_dc&from=2010-09-03T05:30:19Z&until=2013-09-26T18:46:12Z
9. To test your setup, you can also use the following site (It may take a bit for the request to complete): http://re.cs.uct.ac.za/

Notes:
* From the example above, you don't need the 'HARVESTER' export transformation - but if/when you include other export transforms, they'll show up as metadata formats for the OAI compliant harvester to choose from.
* The export xslts are stored in the institution's Templates folder.
* The DISCOVER_ITEM ACL (granted to 'Everyone') is required to see which items are to be included in the harvest.
* The VIEW_ITEM ACL (granted to 'Everyone') is required to harvest the item metadata.
* If you delete the xsl export transform from the filestore without removing the schema export config, you an error message stating:  
```HTTP Status 500 - <error code="cannotDisseminateFormat">"oai_dc" is not supported by the item or by the repository</error>```


## Using openEquella to Harvest Another openEquella Via OAI

* The server url should be eqinstall /p/oai
* OAI harvesting only brings over the metadata - attachments are not included.
* The target schema will need a searchable (Indexed for advanced search) attribute at /xml/item/oai/@id
* The source schema / collection can also be setup to build the /xml/item/oai/@id from the item uuid and version 

## Bulk Update Of User Email Notification Option

Use with caution as this involves a direct DB modification

If you want to update the user email notification option for users in bulk, you can run the following:
```
INSERT INTO user_preference(
institution, preferenceid, userid, data)
VALUES (2, 'notification.email.disabled', 'ac3baa82-b812-432c-9ff2-4c5e3d93099b',
false);
```
And to mark a collection to watch for a user:
```
INSERT INTO user_preference(
institution, preferenceid, userid, data)
VALUES (2, 'watched.item.definitions', 'ac3baa82-b812-432c-9ff2-4c5e3d93099b',
'<list>
<string>6e85ce64-9a11-c5e7-69a4-bd30ec61007f</string>
</list>');
```
#### Removing Rogue Attachments
There are instances where an attachment is in the filestore under the item's version directory, but not in the custom item metadata. In order to
remove the attachment and have the item update properly, you'll need to get the wizard to recognize the deletion. The following was proven to
work:

1. Create a temporary metadata path.
2. Create a Attachments widget in the wizard pointing to the temporary path. Script it such that only you have access to see it.
```
var bRet = false;
//Replace with the username of the user making the change
if(user.getUsername() == 'cbeach') {
bRet = true;
}
return bRet;
```
3. In the Expert Save Script, add a line that sets the temp metadata node to the uuid of the rogue attachment. Ensure it will only run for your
user and for the given item.

```
//Rogue Attachment fix script
//Replace with the username of the user making the change
if(user.getUsername() == 'cbeach') {
//Replace with the uuid of the affected item
if(currentItem.getUuid() == '4bc89020-0a7c-405d-bf64-b0207dea455b') {
//Replace with the uuid of the rogue attachment
xml.set('/metadata/beachfix', '77ee0548-c933-47fe-8909-5a8a0015e8b8');
//xml.deleteNode('/metadata/beachfix');
}
}
```
4. Open and save the item.
5. Open the item (the attachment now will show in the wizard).
6. Delete the attachment via the control, and save the item.
7. Note the rogue attachment is removed.
8. In the expert save script, comment the xml.set function and uncomment xml.deleteNode function. Save the collection definition editor.
9. Open and save the item.
10. Remove the widget in the wizard.
11. Remove the fix script in the expert save script
12. Remove the temporary metadata node

## Reset the Server Admin Pages Password

Run the following DB query against the client's DB. The Server Admin Pages password will be reset to 'password'.
```
update sys_system_config set value =
'SHA256:4c7c92994b971053b8985adf19fbe24cf2b480e877aea39c29df44ac91788963' where key =
'admin.password'
```

Older versions of openEquella have used the following DB query to the same effect:
```
update configuration_property set value = '5f4dcc3b5aa765d61d8327deb882cf99' where
property = 'admin.password' and institution_id = 0
```
#### Reset the openEquella Manager Password

Replace the contents of eq install/manager/users.properties with:
```
admin = SHA256:c9cb02db972223b7d476c792f30c371b71cd0af9fb09c2d00e892ddf2b4d6729
```
Restart the openEquella Manager. Credentials are now:
username: admin
password: equella

## Delete ALL notifications
Disclaimer 1: This is NOT tested or guaranteed. Proceed at your own risk. No lifeguard on duty...
Disclaimer 2: Backup your filestore and DB - this is not a recommended operation.

1. Verify access to a user that has notifications to view.
2. Turn off openEquella
3. Run the following DB script:
```
delete from notification;
```
4. Delete the notifications index on all nodes in the cluster.
5. Start openEquella
6. Confirm that the notifications have indeed been removed from the UI.

## Enable Remote Debugging via Eclipse
**Setup**
Ensure the you've imported and built the tagged openEquella code base from GIT that is equal to the openEquella version you want to debug.
Enable remote debugging in openEquella install by adding the following to JAVA_ARGS and restart openEquella:
```
-Xdebug -Xrunjdwp:transport=dt_socket,address=1044,server=y,suspend=n
```
Such as:
```export JAVA_ARGS=" -Xrs -Xms96m -Xmx512m -XX:MaxPermSize=256m
-Djava.net.preferIPv4Stack=true -Djava.net.preferIPv6Addresses=false
-Djava.awt.headless=true -Djava.io.tmpdir=../server/temp -XX:MaxGCPauseMillis=500
-XX:NewRatio=3 -XX:GCTimeRatio=16 -XX:+DisableExplicitGC -XX:+UseConcMarkSweepGC
-XX:+UseParNewGC -XX:CMSInitiatingOccupancyFraction=70 -Xdebug
-Xrunjdwp:transport=dt_socket,address=1044,server=y,suspend=n"
```
To attach your local Eclipse Debugger to a given remote openEquella process, navigate to the Eclipse Debug Configurations, and setup a new remote
connection.

If you run into problems connecting, here are some troubleshooting steps:
* Request the client open up the specified debugging port to your external ip on their firewall.
* If you get an error stating "Problem Occurred:  'Launching 62gatest1-21sc has encountered a problem. Failed to connect to remote VM, Connection timed out.', try increasing your debugger timeout 