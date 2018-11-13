[Home](https://equella.github.io/)

# Manage openEQUELLA institutions

[Access the Server Administration Account](#access-the-server-administration-account)

[Passwords](#passwords)

[Import an Institution](#import-an-institution)

[Clone an Institution](#clone-an-institution)

[Edit an Institution](#edit-an-institution)

[Export an Institution](#export-an-institution)

[Delete an Institution](#delete-an-institution)

[Disable an Institution](#disable-an-institution)

[Set a filestore size limit](#set-a-filestore-size-limit)

[Display Server Message](#display-server-message)

[System Password](#system-password)

## Access the Server Administration Account

To access the Server administration account
1. Open a browser and enter the openEQUELLA address of the hosting server with ‘/institutions.do?method=admin’ appended to the URL. (e.g. ‘http://equella.myinstitution.edu/logon.do’ would become ‘http://equella.myinstitute.edu/institutions.do?method=admin’) to display the Log In page.
2. Enter the Password used by the openEQUELLA server administrator (this is set in the System password section after installation)
3. Click Log In to display the Server administration page.  Institutions can be imported or cloned to create a new institution. Once created the new institutions are independent of the parent institution.

## Passwords

There are two passwords that can be changed in the Server administration account.

* The server administrator password is changed in the System password section of the Settings dialog.
* The institution administrator (TLE_ADMINISTRATOR) password is set for each institution on the Institution Edit page.

## Import an Institution

openEQUELLA provides a facility for importing institutions to an openEQUELLA server. This facility is typically used for migrating institutions from test environments to staging or production by exporting the test institution and importing it to the staging or production server.

Importing an institution using the Server administration account is a simple process that comprises:
* selection of an institution file
* validation of the institution file
* creation of the institution using the provided data.

Configurations from the parent institution can be selectively exported or imported, allowing a complete copy of the parent institution or just replication of the data.


## Edit an Institution

1. Select Institutions to navigate to the Institutions page
2. Select Edit from the links beside the institution to display the editable institution values. The institution data comprises the:
* Institution name—is enabled by default and must be unique for the openEQUELLA server.
* URL—the URL is locked by default as changes to the URL will cause the server to modify all institution resource URLs with the new URL (invalidating external links to these resources). The processing time required for the URL modification is dependent on the number of items in the institution.
* Filestore – the Filestore is locked by default as an incorrect folder name could cause the content of the institution to become unavailable.
* Filestore size limit – a filestore size limit can be set per institution. Once the filestore exceeds the limit, the system administrator/s are notified by email.
* Approximate filestore usage – the approximate amount of space currently used in the filestore.
* Default time zone—a time zone can be set for each institution. Additionally, users can select an individual time zone. If the user has not selected a time zone, then the time zone chosen for the institution is used. If this has also not been chosen, then the application will fall back to the server time zone. All dates will be stored internally as Coordinated Universal Time (UTC) time.
A* dmin password—the institution administrator (TLE_ADMINISTRATOR) password, which only needs to be entered when it is being changed.
3. To edit the institution name, Enter the required name in the Name field.
4. To edit the URL, Click Unlock to display a warning dialog.  Confirm by clicking OK to enable the field; enter the new URL.
5. To alter the time zone, select the required time zone from the Default time zone drop-down list.
6. To edit the password, Enter a new Admin Password for the institution administrator; confirm the password.
7. To save the changes, click Save and confirm the save to complete editing these values.

Attempts to login after the institution URL has been modified may cause an error message to be displayed while the server is processing the URLs. When processing is complete, the error will no longer be displayed and users can login as usual.


## Clone an Institution

openEQUELLA provides a Clone option that condenses an institution’s export and import to the same openEQUELLA server, to a single step process.

It is advised that the institution be disabled before cloning. Doing so removes access to the institution. This reduces the chance of data becoming corrupted or lost while cloning, as changes cannot be made to the institution while it is disabled.

1. Select the Institutions link to navigate to the Institutions page
2. Select Disable from the links beside the relevant institution.
3. Select Clone from the links beside the relevant institution, to display the Clone institution dialog.
4. If multiple databases have been configured, click Select Database and select the required database in the Target database field. Otherwise the system defaults to the database set up during installation.
5. Enter a unique Institution name for the cloned institution.
6. Enter a unique Institution URL for the cloned institution.
7. Enter a unique Filestore folder name. This is optional. If a name is not entered a folder will be automatically generated for the institution in the path-to-equella\filestore\Institutions folder.
8. Enter a new Admin password for the institution administrator (TLE_ADMINISTRATOR). If left blank, the cloned institution will inherit the password from the original institution.
9. Confirm the password.
10. Check the Options checkboxes to include items, attachments and audit logs, if required.
11. Click Clone Institution then click OK to confirm. A Cloning… progress dialog indicates the cloning progress displays. When importation is complete the Return to Institution Management  button becomes active.
12. Click Return to Institution Management to view the cloned institution on the Institutions page.

NOTE: Users will not be able to access institution items until after all items of the cloned institution have been indexed. This process starts automatically and typically completes within several minutes of the institution being cloned.


## Export an Institution

openEQUELLA institutions can be exported as a single zip archive providing a simple method for reproducing institutions. The institution export archive contains a hierarchy of the data and configuration settings selected during the export process. Exported institutions can be imported to any openEQUELLA server that has enabled institutions.

It is advised that an institution be disabled before exporting. Doing so removes access to the institution. This reduces the chance of data becoming corrupted or lost during an export, as changes cannot be made to the institution while it is disabled.

1. Select the Institutions link to navigate to the Institutions dialog.
2. Select Disable from the links beside the institution to prevent changes to the institution corrupting the export. If this step is missed, a red warning is displayed at the top of the Export page.
3. Select the Export link beside the relevant institution to display the Export institution page with the data from the parent institution. The Institution Name and Institution URL fields are disabled during export. The fields contain the values that will be exported. The institution name and URL can be changed once the institution is imported.
4. If options must be removed: Uncheck the Options checkboxes to exclude items, attachments and audit logs, if required. Removing options from the exported file default options is only recommended for experienced administrators as many of the options are interdependent and will produce side effects in institutions created by importing this file.
5. Click Export then OK to confirm the export to display the Exporting… progress dialog.
The export process may take several minutes to complete and is dependent on how much data is being exported.

After the file has been created a link to the exported zip file is displayed at the bottom of the progress page.

6. Select the Download institution export file link to display the File Download dialog.
7. Select a download directory for the exported institution then click Save.
Once saved, the export process is complete.
8. Click Return to Institution Management to display the Institutions page.


## Delete an Institution

Deleting an institution is not reversible and a wise precaution is to backup your database and/or export the institution before deleting it.
1. Select the Institutions link to navigate to the Institutions dialog.
2. Select the Delete link beside the relevant institution.
3. Click OK to confirm the deletion and display a Delete… progress page. When complete the Return to Institution Management button is displayed.
4. Click Return to Institution Management to display the Institutions page.

## Disable an Institution
When an institution has been disabled, it is temporarily inoperative and is displayed on the Institutions dialog but cannot be accessed until it is enabled.

It is advised that an institution be disabled before cloning or exporting. Doing so removes access to the institution. This reduces the chance of data becoming corrupted or lost during an export, as work cannot be carried out in the institution while it is exporting.

A warning message will appear on the page if an export or clone is attempted without first disabling the institution.
1. From the Institutions page, select the Disable link beside the relevant institution to disable the institution and display an Enable link.
2. To re-enable an institution, select the Enable links beside the relevant institution to enable the institution and display a Disable link.



## Set a filestore size limit

Administrators can set a institution filestore size limit to monitor their usage and size. Setting a limit allows system administrators to be notified by email when the limit is exceeded. Additionally, the current filestore size can be monitored.
1. Select Institutions to navigate to the Institutions page.
2. Select Edit from the links beside the institution to display the editable institution values.
3. Enter the Filestore size limit (GB). An email notification is sent to the system administrators if this limit is exceeded
The Approximate filestore usage field shows the current usage.
4. Click Save.


## Display Server Message

The Server message section is optional. The administrator can enter a server message to be displayed at the top of each page of the openEQUELLA Digital Repository and the Server administration account.

1. Select Settings from the navigation menu to display the Server administration page.
2. Enter a Message then select the Enable message checkbox.
3. Click Save message  to save the settings.
4. To disable a server message, uncheck the Enable message checkbox.

The server message is displayed at the top of each page of the openEQUELLA Digital Repository and the Server administration account.

## System Password

The System password is the password used by the server administrator and is changed in the System password section.
1. Select Settings from the navigation menu to display the Server administration page.
2. Enter the current server administrator password in the Old password field.
3. Enter and confirm the new password.
4. Click Save Password to save the new password.

NOTE: The new password is required next time the server administrator logs in to the Server administration account.
