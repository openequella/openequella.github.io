# Upgrade Guide Equella 6.4

Table of Contents

[Upgrade overview](#upgrade-overview)

[Upgrade preparation](#upgrade-preparation)

[Test server](test-server)

[Upgrade Java](#upgrade-java)

[Install Libav](#instal-libav)

[Upgrade EQUELLA](#upgrade-equella)

[EQUELLA 6.4 production server](#equella-6.4-production-server)

[Troubleshoot the upgrade](#troubleshoot-the-upgrade)

## Upgrade overview

New releases comprise new versions that contain significant new functionality and features, and new builds typically include improvements to existing functionality. Historically, EQUELLA releases have followed a common convention, using a version or release number combined with a build number to label releases. Example version numbers are 6.4 [6.4-GA r16541] and 6.4 [6.1-QA1 r18739] where:

- 6.4 is the version number;
- r16541 and r18739 are the build numbers.

Significant changes to existing functionality or the introduction of new functionality use a new version number and build number. These releases such as EQUELLA 6.4 are referred to as a major version release.

Changes of less significance retain the existing version number but have a new build number that is larger than the previous build. These releases are referred to as quality assurance or QA releases, for example, EQUELLA 6.4 QA1 Release.

This guide provides information on upgrading current installations to use the new functionality and is intended for system administrators who must deploy the upgrade.

## EQUELLA 6.4 upgrade-specific notes

Please note the following points specific to the EQUELLA 6.4 upgrade:

- EQUELLA 6.4 sees the separation of the LTI consumers configuration out of the Settings, OAuth function. It is now a separate LTI consumers option accessed from the Settings page, where the configuration and role mapping can be carried out in one function. LTI consumer registrations that were previously configured via the OAuth function are automatically transferred to the new LTI consumers section. The users, groups or roles granted the CREATE_OAUTH_CLIENT, EDIT_OAUTH_CLIENT and DELETE_OAUTH CLIENT privileges prior to the upgrade will automatically have the new CREATE_LTI_CONSUMER, EDIT_LTI_CONSUMER and DELETE_LTI_CONSUMER privileges granted after the upgrade.
- EQUELLA 6.4 introduces the Videos search results page. A one-off reindexing procedure needs to be run once the system is upgraded to 6.4 for existing streaming media thumbnails and previews to display in the Videos view.
- To display thumbnails and previews on the Videos view page for video files uploaded as attachments during contribution (for example, video files created on a camera), EQUELLA requires Libav, a free, third-party application to be installed and configured on the server. EQUELLA then uses Libav to produce video thumbnails and 10 second previews.
- Google has switched off their old YouTube search API and now require application developers to use the latest YouTube Data API (v3). A new Google API option on the Settings page allows a Google API key (with the new YouTube Data API (v3) enabled) to be stored in EQUELLA.
- hikari.properties – EQUELLA now uses Hikari (https://github.com/brettwooldridge/HikariCP) for database connection pooling to provide better recovery after database disconnections. The bonecp.properties file will no longer be read. Any custom changes that have been made to the bonecp.properties file will need to be recreated in the hikari.properties file. In particular, if the maxConnectionsPerPartition properties has been configured in bonecp.properties then the maximumPoolSize property will need to be configured in hikari.properties.

## Upgrade EQUELLA to version 6.4

EQUELLA 6.4 uses in-place upgrades, ensuring your institution’s decision to upgrade EQUELLA is faster, easier and cheaper. Any version from the latest EQUELLA 4.1 QA can be upgraded to any newer major version or QA release using the EQUELLA Manager.

NOTE: For EQUELLA versions prior to 6.0, it is recommended that an upgrade to 6.1 QA3 version is run first, then the upgrade to 6.4.

## Upgrade process

Upgrading involves the following steps:

1. Upgrade your existing version to the latest QA release version.
2. Obtain licence and upgrade details from Client Support.
3. Plan the upgrade and notify users that the server will not be available.
4. Backup existing databases and your EQUELLA filestore folder.
5. Update Java version to Java 8 JDK(if you haven’t already).
6. Install Libav for video file thumbnail and preview generation.
7. Test the upgrade process using a test server that is a clone of the production server.
8. Test the new version’s functionality using a test server that is a clone of the production server.
9. Repeat the upgrade process using the production server.

## Upgrade preparation

Planning the EQUELLA 6.4 version upgrade reduces:

- the time the system will be unavailable to users; and
- the risks associated with upgrading.

Institutions should consider the impact then test the required changes prior to attempting to deploy any new features to a production environment.

Testing the EQUELLA 6.4 version upgrade:

- identifies any potential issues with the upgrade process; and
- provides an indication of potential down-time for the production environment. (NOTE: The server upgrade downtime will vary from institution to institution depending on the features to be implemented and the size of the EQUELLA repository.)

## Upgrade prerequisites

Performing these preparatory tasks reduces the risk associated with upgrading an installation and enables easy restoration of the existing system if an intractable issue occurs.

### Prior to upgrading

The following actions should be completed:

1. Backup your existing database and be aware of the procedures required for restoring the database.
2. Backup your EQUELLA filestore folder.
3. Ensure that users are aware EQUELLA will be unavailable for the duration of the upgrade.

### Upgrades with Windows

When upgrading a system using a Windows environment, the EQUELLA Manager and application service must be run by a user with Administrator rights.

## Upgrade current version

Before upgrading to EQUELLA 6.4, your existing EQUELLA server may require upgrading to the most recent QA release for that version.

## Test server

Using an EQUELLA 6.4 test server is recommended so that:

- potential issues with the upgrade process can be identified;
- down-time of the production server is minimised;
- an accurate estimate of production server down-time can be made; and
- the stress of any new version deployment is reduced.
  (NOTE: Any upgrade completed using a test server will be invalid if the test server is not a clone of the production server.)

### Install a new test server

Administrators installing a fresh test server should follow the instructions in the EQUELLA Installation and Administration Guide.

1. Ensure the test environment is a clone of the production environment.
2. Perform all tasks described in the Upgrade preparation section.
3. Complete the relevant tasks described in the Upgrade EQUELLA section.

### Upgrade an existing test server

Existing EQUELLA test servers require upgrading to the most recent QA release.

1. Ensure the test environment is a clone of the production environment.
2. Perform all tasks described in the Upgrade preparation section.
3. Complete the relevant tasks described in the Upgrade EQUELLA section.

## Upgrade Java

EQUELLA 6.4 requires Oracle Java 8 JDK to be installed (EQUELLA 6.1 to 6.3 required Java 7), so a Java upgrade will need to be completed, and additionally some EQUELLA configuration file edits are required to complete the upgrade.

### Upgrading Java

To upgrade to the latest point release of Java 8 JDK

1. Go to http://www.oracle.com/technetwork/java/javase/downloads/index.html. Installation instructions are available for all platforms by following the appropriate Oracle documentation. We recommend installing the latest point release of Java 8 JDK.

NOTE: The name and location of the folder in which the JDK is installed is needed to update the EQUELLA configuration files.

### Editing the EQUELLA configuration files

1. Stop all services.
   To stop all services when running on Windows

a. Navigate to the Start menu and find Settings, then Control Panel.

b. Open the Administrative Tools panel and then Services.

c. Find EQUELLA in the list of services (by default the names are EQUELLA App Server and EQUELLA Manager) and select the Stop the service link on the left.

To stop all services on other platforms

a. Navigate to the Manager folder (the default installation folder is /usr/local/equella), open a command prompt and enter:

```
./manager stop
./equellaserver stop
```

The services are now stopped.

2. Edit the following files, found in path-to-equella, where xxx is the folder location of the Java JDK install:

```
learningedge-config/mandatory.properties java.home = xxx
```

**Windows system upgrading from EQUELLA version 5.0:**

Both manager/manager.conf and manager/equellaserver.conf

set wrapper.java.command=xxx

set wrapper.java.classpath.2=xxx

**Windows systems upgrading from EQUELLA version 5.1 and greater:**

Both manager/manager-config.bat and manager/equellaserver-config.bat set JAVA_HOME=xxx

**Unix system upgrading from EQUELLA version 5.0:**

Both manager/manager.conf and manager/equellaserver.conf

set wrapper.java.command=xxx

set wrapper.java.classpath.2=xxx

**Unix system upgrading from EQUELLA version5.1 and greater:**
Both manager/manager-config.sh and manager/equellaserver-config.sh
export JAVA_HOME=xxx

3. Reinstall the services Navigate to the manager folder (the default installation folder is c:\equella\manager) and open a command prompt and enter:

```
equellaserver remove
equellaserver install
manager remove
manager install
```

4. Restart all services

**To start the service without restarting the machine either**

a. Navigate to the manager folder (the default installation folder is C:\equella\manager), open a command prompt and enter:

```
manager start
equellaserver start
```

Or

a. In Windows™ on the EQUELLA server, go to the Start menu, Control Panel, Administrative Tools then double click Services.

b. Find the EQUELLA services (by default the names are EQUELLA App Server and EQUELLA Manager) in the list of services, right click and select Start.

## Install Libav

Video files uploaded to EQUELLA as file attachments require the free, third party product called Libav to be installed. EQUELLA uses this product to produce thumbnails and previews for video files uploaded to EQUELLA during contribution (that is, video files that are not streamed).

NOTE: This is not a compulsory step if video file attachments are not used in your institution or you don’t require them to display in the Videos view. You do not need to install Libav to display streaming media video (e.g. Kaltura, YouTube) thumbnails and previews on the Videos page.

#### To install and configure Libav for Windows

1. Go to http://builds.libav.org/windows/release-gpl/ and download the relevant release build. Contact EQUELLA support if you’re not sure which build to download.

2. Unzip to a directory of choice (e.g. Program Files) taking note of the name and location of the folder in which the avconv.exe and avprobe.exe files have been installed.

NOTE: Libav can be installed before or after the upgrade is run, but if installed separately from the upgrade, an EQUELLA server restart is required after editing the optional_config file.

3. Once Libav is installed, the optional-config file needs to be updated to reflect the libav path. An example (using Program Files as the Libav install directory) is shown below:

```
# Libav path. For example C:/Libav/usr/bin
libav.path = C:/Program Files/libav/libav-x86_64-w64-mingw32-11/usr/bin
```

Note: The libav.path needs to point to the directory that contains the avconv.exe and avprobe.exe files.

Once the upgrade has been completed, and the EQUELLA server restarted, a one-off process to generate thumbnails and previews for existing video file attachments needs to be run.

#### To install and configure Libav for Linux

1. Install Libav from https://libav.org/download.html libvo_aacenc and libx264 dependencies are also required for video previews to be generated correctly.

NOTE: Libav can be installed before or after the upgrade is run, but if installed separately from the upgrade, an EQUELLA server restart is required after editing the optional_config.

2. Once Libav is installed, the optional-config file needs to be updated to reflect the libav path. An example is shown below:

```
# Libav path. For example C:/Libav/usr/bin
libav.path = /usr/local/bin
```

Note: The libav.path needs to point to the directory that contains the a
vconv and avprobe executable files.

Once the upgrade has been completed, and the EQUELLA server restarted, a one-off process to generate thumbnails and previews for existing video file attachments needs to be run.

## Upgrade EQUELLA

EQUELLA 6.4 upgrades are completed using the EQUELLA Manager.

Before executing the upgrade it is recommended that you:

- Perform all tasks described in the Upgrade preparation section.
- Apply all upgrades to a test environment that is a clone of the production environment first.
- Refer to the Troubleshoot the upgrade section to resolve any issues.

### EQUELLA Manager

The EQUELLA Manager is accessed using the server port number. The server port can be found in the path-to-equella\manager\config.properties file.

#### To access the EQUELLA Manager:

1. Open a browser and enter the address of the hosting server with the port number (e.g. http://equella.myinstitute.edu:3000).
2. Log in using the EQUELLA Manager Username and Password to display the EQUELLA Manager. (The EQUELLA Manager password is set during the EQUELLA installation process.)

The EQUELLA Manager shows the current Deployed Version, the Server Status and has two tabbed pages:

- Downloaded Versions—provides access to all downloaded EQUELLA versions, allowing administrators to upgrade to any downloaded version.
- Get Other Versions—allows administrators to browse to and upload Manually Provided Versions of EQUELLA or to download any available Official Upgrades.

Once EQUELLA has been upgraded to version 6.4, the EQUELLA Manager includes a Configuration tab.

### Upgrade to EQUELLA 6.4

When upgrading to a major version such as EQUELLA 6.4, the upgrade file can be accessed by browsing to and uploading it via the Manually Provided Versions section of the Get Other Versions page.

The upgrade process includes the following steps:

1. Perform all tasks described in the Upgrade preparation section.
2. Download an upgrade file.
3. Upload the upgrade file.
4. Deploy the new version.
5. Restart the EQUELLA Manager.
   (NOTE: Not required if upgrading from EQUELLA 5.0, 5.1, 6.0 or 6.1. The EQUELLA Manager will restart automatically, and a browser refresh is required to update the screen.)
6. Restart the EQUELLA server.
7. Migrate existing repository data.
8. Older version of Equella may require entry of licence details.
9. Upgrade systems integrated with EQUELLA.
   10.Upgrade customisations.

The first step is to perform all tasks described in the Upgrade preparation section. The next step is to download the upgrade file.

### Upload the upgrade file

The upgrade file is uploaded in the Manually Provided Versions section of the Get Other Versions page in the EQUELLA Manager.

1. Select the Get Other Versions tab to display the Get Other Versions page.
2. Click Choose File in the Manually Provided Versions section.
3. Navigate to and select the tle-upgrade-6.4rXXXXX (branches+’VersionName’).zip file from your temporary directory. The file path is displayed in the Manually Provided Versions field.
4. Click Upload. When the upload is completed, the new version is displayed in the Newer Versions list on the Downloaded Versions page.

### Downloaded versions

The Downloaded Versions page displays any Newer Versions that have been downloaded but not deployed, the Current Version as well as any Older Versions that have been downloaded, whether they have been deployed or not.

The next step is to deploy the upgrade version.

### Deploy a new version

The upgrade version is deployed on the Downloaded Versions page.

1. Select the radio button next to the required version (e.g. 6.4.r1324) in the Newer Versions list.
2. Click Deploy Now to display a confirmation dialog that asks the user if they wish to proceed and warns that to do so will stop the EQUELLA App Server service.
3. Select OK to confirm the deployment. The App Server is stopped and the steps of the upgrade process are displayed.

### Deployment errors

Any errors that occur during upgrading are displayed in the dialog.

To attempt the deployment again

1. Resolve any issues associated with the error message. Further information is provided in the Troubleshoot the upgrade section.
2. Click "Click here to try again" to return to the Downloaded Versions page. (NOTE: Do not use the browser back button.)
3. Repeat the steps outlined in the Deploy a new version section.

### Successful deployment

When the deployment process is completed successfully a Click here to continue button is displayed.

#### To complete the deployment

1. Click to display the Downloaded Versions page.

The EQUELLA Manager restarts in the background.

### Start the EQUELLA server

The EQUELLA server is started in the EQUELLA Manager. When the Server Status is Stopped, a Start button is displayed.

2. Click Start to change the Server Status to Running.

The next step is to enter a licence key and migrate existing repository data. License key will be required for version prior to the open source version of Equella.

### Migrate existing data

The data migration process can take a significant amount of time and depends on the size of the EQUELLA repository.

1. Select Databases from the Server administration navigation menu (although the system should default to this page).

(NOTE: It is important that your system is backed up before executing the upgrade.)

2. Select Migrate to start the migration process. A confirmation dialog displays.
3. Click OK. A progress percentage displays.
   (NOTE: The data migration process can take a significant amount of time.)

When multiple databases are in use, the Databases screen lists each database with a checkbox. Check each checkbox then select the Migrate selected link to start the migration process. The databases are migrated sequentially and the progress percentage displays.

### Migration errors

When an error occurs during the migration process, a message and a Show migration error link display.
Select the Show migration error link to display the error report.

#### To attempt the migration again

1. Click the Migrate link next to the relevant database to retry the migration process. A progress percentage displays.

### Successful migration

When the migration process is completed successfully, the status of each database will display as Online.

#### To complete the migration

1. Select Settings from the navigation menu to display the Licence Management section on the Server Settings page.
2. Enter the EQUELLA Licence key supplied by EQUELLA Support, then click Save license. (Note: This will only be required for version prior to the open source release)

## Generate thumbnails and previews – streaming media files

EQUELLA 6.4 introduces the new Videos view, where streaming media resource links (e.g. YouTube, Kaltura) are represented by a thumbnail in a video grid view, which on mouse hover, plays a preview-sized version of the resource. A reindexing process needs
to be run after the EQUELLA 6.4 upgrade is complete to refresh the content index. Once this process is completed, all existing streaming media video links display with thumbnails in the Videos view. New links will generate thumbnails automatically.

#### To refresh the index

1. Login to EQUELLA as a user with administration permissions.
2. Go to Settings, Manual data fixes. The Manual data fixes page displays.
3. From the Manual data fixes page, click Refresh Index.

## Generate thumbnails and previews – video file attachments

Video files uploaded to EQUELLA as file attachments require the free, third party product called Libav to be installed. EQUELLA uses this product to produce thumbnails and previews for video files uploaded to EQUELLA during contribution (that is, video files that are not streamed). They will not display in the Videos view until the following steps are carried out:

1. Install Libav, a free, third-party product used by EQUELLA to produce thumbnails and previews for video files.
2. Once Libav is configured and the upgrade is complete, go to the Settings, Manual data fixes page. From the Generate thumbnails and previews section, select Missing thumbnails then click Generate Thumbnails.

Thumbnails and previews are created for all existing video file attachments, and display on the Videos view page. Thumbnails and previews for new files uploaded during contribution will be generated automatically.

Thumbnails are created from the 5th second of a video, and ten second previews are created from the 5th until the 15th second of a video. These previews can be played from the Video view.

### Upgrade systems integrated with EQUELLA

The systems that integrate with EQUELLA require upgrading, including:

- Blackboard Building Block
- Moodle Module

To obtain the latest version

1. Select the Downloads link from the navigation menu to display the Downloads page.
2. Select the required download link and save the files. Further information is provided in the relevant configuration guide (e.g. EQUELLA Moodle Configuration Guide).

The next step is to review customisations.

### Upgrade customisations

Institutions that have installed customised CSS styles, language packs and reports should refer to the EQUELLA 6.4 Release Notes for information on changes and upgrades that are required.

### Google API configuration

Google has switched off their old YouTube search API and now require application developers to use the latest YouTube Data API (v3). In their words:

```
The YouTube Data API (v3) lets you incorporate YouTube functionality into your own application. You can use the API to fetch search results and to retrieve, insert, update, and delete resources like videos or playlists.
```

A new Google API option on the Settings page allows a Google API key (with the new YouTube Data API (v3) enabled) to be stored in EQUELLA. This allows users to search and select YouTube content from an attachment control during contribution in the same manner as prior to the API change.

NOTE: If the Google API key is not configured in EQUELLA, existing YouTube links will continue to open and play. However, searching for new YouTube content during contribution or editing of resources will result in the following message being displayed: Google API Key not Configured"

#### To configure the Google API

1. Login to EQUELLA as a user with administration permissions.
2. Go to Settings, Google API. The Google API page displays.
3. Enter the Google API Key as provided by Google. API Keys can be obtained from the Developers Console site after creating a project. For step-by-step instructions to obtain a Google API Key (with YouTube Data API (v3) enabled), use the video link on the Google API page.

The major release upgrade process is now complete.

### Important information for test upgrades

When testing of the upgrade process is complete, the new version’s functionality should be tested to identify and resolve any issues associated with the upgrade. Once all issues have been resolved the upgrade process should be repeated using the production server. Further information is provided in the EQUELLA 6.4 production server section on page 35. (NOTE: If the test environment was not a clone of the production environment, any tested upgrade process will be invalid.)

## Quality assurance releases

#### To access the EQUELLA Manager

1. Open a browser and enter the address of the hosting server with the port number (e.g. http://equella.myinstitute.edu:3000).
2. Log in using the EQUELLA Manager Username and Password to display the EQUELLA Manager. The EQUELLA Manager shows the current Deployed Version, the Server Status and has three tabbed pages:

- Downloaded Versions—provides access to all downloaded EQUELLA versions, allowing administrators to upgrade to any downloaded version.
- Get Other Versions—allows administrators to browse to and upload Manually Provided Versions of EQUELLA or to download any available Official Upgrades.
- Configuration—enables Upgrade Server Authentication and Proxy Connection Details to be entered.

### QA release upgrade process

The QA Release upgrade process can include the following steps:

1. Perform all tasks described in the Upgrade preparation section.
2. Enter configuration details.
3. Download an official upgrade in the EQUELLA Manager.
4. Deploy the new version.
5. Restart the EQUELLA server.
6. Migrate existing repository data.
7. Upgrade systems integrated with EQUELLA.
8. Upgrade customisations.
9.

The first step is to perform all tasks described in the Upgrade preparation section. The next step is to enter the configuration details.

### Upgrade configuration details

To access the EQUELLA Upgrade Server and any official upgrades, username and password details must be added to the Upgrade Server Authentication section of the Configuration page.

If your installation is behind a proxy server, you will also need to fill out the Connection Proxy Details section of the Configuration page.

1. Select the Configuration tab to display the Configuration page.

#### To add the Upgrade Server Authentication details

3. Enter a Username and Password.
4. Click Save.

#### To add the Connection Proxy Details

1. Enter a Proxy Host, Port, Username and Password.
2. Click Save.
   The next step is to download the upgrade file.

## Official upgrade

For institutions that have upgraded to EQUELLA 6.4, when QA Release upgrades are available they are listed in the Official Upgrades section of the Get Other Versions page of the EQUELLA Manager.

### Official upgrade error messages

If the details are not provided or are incorrect the following messages are displayed in the Official Upgrades section:

- If upgrade server credentials are not supplied, a ‘No username or password set for the upgrade server’ message is displayed.
- If the credentials are incorrect, an ‘Invalid username and password for upgrade server’ message is displayed
- If any other unexpected error occurs, a message such as ‘Error while contacting upgrade server: Stream closed’ is displayed.

### Download an official upgrade

The upgrade file is downloaded from the Official Upgrades section of the Get Other Versions page.
(Note the process may differ for Open Source Versions)

1. Click Download Now adjacent to the required version in the Official Upgrades section to display a Preparing download… dialog. When the download is complete:
2. Click "click here to continue" to display the new version in the Newer Versions list of the Downloaded Versions page.
   (NOTE: Downloaded versions are stored in the path-to-equella\manager\updates folder.)

### Downloaded versions

The Downloaded Versions page displays any Newer Versions that have been downloaded but not deployed as well as the Current Version and any Older Versions that have been downloaded, whether they have been deployed or not.

The next step is to deploy the upgrade version.

### Deploy a new version

To deploy the upgrade version

1. Select the radio button next to the required version (e.g. 6.4-QA1) in the Newer Versions list.
2. Click Deploy Now to display a confirmation dialog that asks the user if they wish to proceed and warns that to do so will stop the EQUELLA App Server service.
3. Click OK to confirm the deployment. The App Server is stopped and the steps of the upgrade process display.

### Deployment errors

Any errors that occur during the upgrade are displayed in the dialog.

### Successful deployment

When the deployment process is completed successfully, a Click here to continue button is displayed.

To complete the deployment

1. Click "Click here to continue" to display the Downloaded Versions page with the deployed version listed as the Current Version. The next step is to restart the EQUELLA server.

### Start the server

The Server Status is displayed in the EQUELLA Manager.

1. Click the Start button to change the Server Status to Running.
   The next step is to login to the Server administration account. (NOTE: This step may or may not include the data migration step.)

### Login to EQUELLA

1. Open a browser and enter the EQUELLA address of the hosting server. If data migration is required a page is displayed .
   See the Migrate existing data section for more information.

### Important information for test upgrades

When testing of the upgrade process is complete, the new version’s functionality should be tested to identify and resolve any issues associated with the upgrade. Once all issues have been resolved the upgrade process should be repeated using the production server. (NOTE: If the test environment was not a clone of the production environment any tested upgrade will be invalid.)

## EQUELLA 6.4 production server

To avoid major problems and system disruptions, the recommended upgrade process is to test the upgrade and new version on a test server that is a clone of the production server before upgrading a production server.

### Install a new production server

Administrators installing a fresh production server should follow the instructions in the EQUELLA Installation and Administration Guide.

1. Ensure the upgrade process and new version’s functionality were previously tested using a test environment that is a clone of the production environment.
2. Perform all tasks described in the Upgrade preparation section.
3. Complete the relevant tasks described in the Upgrade EQUELLA section.

### Upgrade an existing production server

Existing EQUELLA test servers require upgrading to the most recent QA release.

1. Ensure the upgrade process and new version’s functionality were previously tested using a test environment that is a clone of the production environment.
2. Perform all tasks described in the Upgrade preparation section.
3. Complete the relevant tasks described in the Upgrade EQUELLA section.

## Troubleshoot the upgrade

Generally, upgrading an EQUELLA installation is uneventful but occasionally issues appear that require some troubleshooting assistance.

### Resolve issues

In most instances, a message describing why the upgrade cannot be completed is displayed. In this situation, resolving the issue then restarting the upgrade process allows the upgrade to successfully complete. The following sections can help resolve issues:

### Error during deployment

As mentioned in the Deployment errors section on page 18, problems during deployment will often be resolved by redeploying the upgrade file. In cases where this doesn’t work it is recommended that the upgrade file be downloaded again before attempting redeployment. Occasionally downloaded files can become corrupted and this approach reduces that effect.

### Manager file changes

Any changes made to the EQUELLA Manager details in the
path-to-equella\manager\config.properties file or the
path-to-equella\manager\users.properties file will require the EQUELLA Manager service to be restarted.

### Unable to access the EQUELLA Manager

Options:

- Ensure the correct server port number is used. The server port can be found in the path-to-equella\manager\config.properties file.
- Ensure the correct password is used.

### Unable to access the upgrade server

Options:

- Ensure the upgrade username and password are entered in the Configuration page of the EQUELLA Manager, it needed for your version.
- If your installation has a proxy server ensure the proxy settings are correctly entered in the Configuration page of the EQUELLA Manager
- Ensure firewalls allow access to the upgrade server.

### Unable to upgrade server on Linux™

New releases appear to download and install, but the system has not been upgraded.

Option:

- Ensure the EQUELLA Manager has read and write permissions for all folder and files in the installation directory.

### View the system logs

Search the following EQUELLA logs for clues:

```
<path-to-equella>\logs\
 resource-centre\20XX- xx-x\application.html
 equella-manager\20XX- xx-xx\services.html
 equella-upgrader\20XX-xx-xx\upgrader.html
 manager.log
 tomcat.log
• operating system logs (e.g. Event Viewer in Windows).
```
