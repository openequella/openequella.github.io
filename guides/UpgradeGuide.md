# Upgrade openEQUELLA
openEQUELLA uses in-place upgrades, ensuring your institution’s decision to upgrade EQUELLA is faster, easier and cheaper. 

*NOTE: Never upgrade from an openEQUELLA beta version to an openEQUELLA stable verison.*

# Upgrade prerequisites
## Upgrades with Windows 
When upgrading a system using a Windows environment, the EQUELLA Manager and application service must be run by a user with Administrator rights.

# Upgrade openEQUELLA
openEQUELLA upgrades are completed using the **EQUELLA Manager**.
The **EQUELLA Manager** is accessed using the server port number. The server port can be found in the `<path-to-equella>`\manager\config.properties file.
### To access the EQUELLA Manager:
1.	Open a browser and enter the address of the hosting server with the port number (e.g. *equella.myinstitute.edu:3000*).
2.	Log in using the EQUELLA Manager **Username** and **Password** to display the **EQUELLA Manager**. The EQUELLA Manager shows the current **Deployed Version**, the **Server Status** and has two tabbed pages:
* **Downloaded Versions**—provides access to all downloaded EQUELLA versions, allowing administrators to upgrade to any downloaded version.
* **Get Other Versions**—allows administrators to browse to and upload Manually Provided Versions of EQUELLA or to download any available Official Upgrades.
When upgrading to a major version, the upgrade file can be accessed by browsing to and uploading it via the **Manually Provided Versions** section of the **Get Other Versions** page.
The upgrade process includes the following steps:
1.	Download an upgrade file.
2.	Upload the upgrade file to the EQUELLA Manager.
3.	Deploy the new version.
4.	Restart the EQUELLA Manager. 
5.	Restart the EQUELLA server.
6.	Migrate existing repository data.
7.	Upgrade systems integrated with EQUELLA.
## Download the upgrade file
1.	Download the upgrade file to a temporary directory.
The next step is to upload the upgrade file in the EQUELLA Manager. 
## Upload the upgrade file 
The upgrade file is uploaded in the **Manually Provided Versions** section of the **Get Other Versions** page in the EQUELLA Manager.
1.	Select the **Get Other Versions** tab to display the **Get Other Versions** page.
2.	Click **Choose File** in the **Manually Provided Versions** section.
3.	Navigate to and select the upgrade file from your temporary directory. The file path is displayed in the **Manually Provided Versions** field. 
4.	Click **Upload**. When the upload is completed, the new version is displayed in the **Newer Versions** list on the **Downloaded Versions** page.
### Downloaded versions
The **Downloaded Versions** page displays any **Newer Versions** that have been downloaded but not deployed, the **Current Version** as well as any **Older Versions** that have been downloaded, whether they have been deployed or not. 
The next step is to deploy the upgrade version. 
## Deploy a new version
The upgrade version is deployed on the **Downloaded Versions** page.
1.	Select the radio button next to the required version in the **Newer Versions** list.
2.	Click **Deploy Now** to display a confirmation dialog that asks the user if they wish to proceed and warns that to do so will stop the EQUELLA App Server service.
3.	Select **OK** to confirm the deployment. The App Server is stopped and the steps of the upgrade process are displayed. Deployment errors.
Any errors that occur during upgrading are displayed in the dialog. 
### Successful deployment
When the deployment process is completed successfully a **Click here to continue** button displays.
1.	Click **Click here to continue** to display the **Downloaded Versions page**. The EQUELLA Manager restarts in the background.
## Start the EQUELLA server
The EQUELLA server is started in the EQUELLA Manager. When the **Server Status** is *Stopped*, a **Start** button displays. Click **Start** to change the **Server Status** to *Running*.
The next step is to migrate existing repository data.
## Migrate existing data 
Some upgrades between major versions require a database migration. Minor upgrades within a stable release will not involve migrations.
The data migration process can take a significant amount of time and depends on the size of the EQUELLA repository.
1.	Open a browser and enter the address of the hosting server (e.g. *equella.myinstitute.edu*). The **Welcome** page displays, instructing the user to login to the **Server Administration** page displays.
2.	Click either the **login** or **Administer server** links to open the **Server administration** login page.
3.	Enter the administration password to display the **Databases** page.
4.	Select **Databases** from the Server administration navigation menu (although the system should default to this page). 
5.	Select **Migrate** to start the migration process. A confirmation dialog displays. 
6.	Click **OK**. A progress percentage displays. 
When multiple databases are in use, the Databases screen lists each database with a checkbox. Check each checkbox then select the **Migrate selected** link to start the migration process. The databases are migrated sequentially and the progress percentage displays. 
### Migration errors
When an error occurs during the migration process, a message and a **Show migration error** link display. 
Select the **Show migration error** link to display the error report. 
### Successful migration
When the migration process is completed successfully, the status of each database will display as *Online*. 
## View the system logs
System logs can be viewed at:
* `<path-to-equella>`\logs\ 
  * resource-centre\20XX- xx-xx\application.html
  * equella-manager\20XX- xx-xx\services.html
  * equella-upgrader\20XX-xx-xx\upgrader.html
  * manager.log
  * tomcat.log
* operating system logs (e.g. Event Viewer in Windows).
