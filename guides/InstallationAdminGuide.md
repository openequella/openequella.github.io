[Home](https://equella.github.io/)

# Open Source EQUELLA® Installation and Administration Guide

[Installation Prerequisities](#installation-prerequisites)

[Install a Database](#install-a-database)

[Install the Oracle Java SDK](#install-the-oracle-java-sdk)

[Install ImageMagick](#install-imagemagick)

[Install Libav](#install-libav)

[Install openEQUELLA](#install-openequella)

[Stop the openEQUELLA server](#stop-the-openequella-server)

[openEQUELLA Server Adminstration Account](#openequella-server-administration-account)

[Import a New Institution ](#import-a-new-institution)

[Manage Databases](#manage-databases)

[openEQUELLA Configs](#openequella-configs)

[Use a reverse proxy server](#use-a-reverse-proxy-server)

[Customize the openEQUELLA Digital Repository](#customize-the-openequella-digital-repository)

[Use Log Files](#use-log-files)

[Thread Dump](#thread-dump)

[Health Check](#health-check)

[Uninstall openEQUELLA](#uninstall-openequella)



openEQUELLA has a step-by-step wizard that guides administrators through the installation process. To run the installation wizard successfully, some preparatory work is required. openEQUELLA requires a server license, a graphical user interface, ImageMagick™ for images, Libav for video files, a database for storing information and Oracle Java JDK™ to provide the low level structure on which openEQUELLA runs.

## Installation prerequisites
openEQUELLA installation involves the following steps:
1. Ensure a graphical user interface (GUI) is available (Windows, X-windows or equivalent).
2. Ensure a suitable database or databases are available for openEQUELLA. openEQUELLA is supported on the following database servers:
* Oracle™ 10g, 11g and 12c
* Microsoft SQL Server™  2008, 2008 R2 or 2012 and 2014
* PostgreSQL™ 8 or higher.
3. Ensure that Oracle Java JDK 8 is installed on the server.
4. Ensure ImageMagick is installed on the server.
5. If using video file attachments (other than streaming media) and require thumbnails and previews for those files, ensure Libav is installed on the server.
6. Install openEQUELLA.
7. Ensure the installation is functioning correctly.


## Install a Database

All databases must be able to store character data using UTF-8 encoding.

A database must be configured for use by openEQUELLA with openEQUELLA being the owner or having complete control of the database. That means the openEQUELLA database user must have permission to:
* Create, modify and delete tables, indexes and constraints
* Perform select, insert, delete and update queries on the newly created databases.

You must also ensure the database user has a password as openEQUELLA will request it during installation.

NOTE: When using multiple databases, only databases from one vendor may be used. For example, two Microsoft SQL Server databases could be used, but NOT a Microsoft SQL Server and a PostgreSQL Server database. The database vendor is selected when the openEQUELLA system is first installed, and the database configured during the openEQUELLA installation wizard is the default system database.

### Create an Oracle database instance for openEQUELLA
Creating a database instance on Oracle should be managed by an experienced Oracle DBA. No step-by-step guide is provided, however to successfully install openEQUELLA on an Oracle database (10g, 11g and 12c) the openEQUELLA user (in the default install this is ‘equellauser’) must have the following:
* Database Name: the name must not exceed 20 characters.
* Database Username: the name must not exceed 20 characters.
* Character Encoding: the character encoding must be set to Use Unicode (AL32UTF8).

openEQUELLA will use the default schema for this user, which will be the same as the username unless configured. This can be changed by creating an AFTER LOGON trigger to run ALTER SESSION SET CURRENT_SCHEMA = myschema

openEQUELLA uses the default Users Tablespace that must have an <unlimited> Quota Size and the OPEN_CURSORS parameter should be set to 1000.

### Create a Microsoft SQL Server database instance for openEQUELLA

If you are using Microsoft SQL Server 2008, 2012 or 2014, please ensure that the TCP/IP protocol has been enabled. The openEQUELLA user (the installer default value is ‘equellauser’) must have the following:
* Database Name: the installer default name is ‘equella’.
* Database Role: the database user must be the database owner. For the openEQUELLA user login select ‘db_owner’.

It is required that Microsoft SQL Server databases have READ_COMMITTED_SNAPSHOT enabled to avoid possible deadlocks. See http://msdn.microsoft.com/en-us/library/ms173763.aspx for more information. The following statement will enable this setting for a given database:

```sql
ALTER DATABASE MyEquellaDatabase SET READ_COMMITTED_SNAPSHOT ON;
```

### Create a PostgreSQL database instance for openEQUELLA

Installations using a PostgreSQL (8.0 or higher) database must create an openEQUELLA database before installing openEQUELLA. The openEQUELLA user (in the default install this is ‘equellauser’) must have the following:
* Database Name: the default name used is ‘equella’.
* Database Owner: the default name used is ‘equellauser’.
* Tablespace:‘pg_default’.

These requirements are met by the following commands when run as the `postgresql` user from a terminal

```sh
createuser --pwprompt equellauser
createdb -O equellauser -D pg_default -E UTF-8 equella
```

The database can now be used for an installation of openEQUELLA.


## Install the Oracle Java SDK

The JDK can be obtained from Oracle at <http://www.oracle.com/technetwork/java/javase/downloads/index.html>. Installation instructions are available for all platforms by following the appropriate Oracle documentation. We recommend installing the latest point release of Java 8 JDK.

During installation the name and location of the folder in which the JDK is installed is needed to properly configure and run openEQUELLA.


## Install ImageMagick

NOTE: openEQUELLA requires Imagemagick version 6.4 or greater be installed; 6.8.9 or higher for digital camera RAW image files. ImageMagick can be obtained from <http://www.imagemagick.org/> ; download the platform-specific installer.  **If using a platform with package management check the available version of Imagemagick before installing from source; its highly likely packages exist already.**
Additionally, a third party plugin called Ghostscript is required by Imagemagick to enable the generation of thumbnails for some file types (for example, pdfs). Go to <http://ghostscript.com> to download and install. 

For a full list of image file types supported by Imagemagick, go to <http://imagemagick.sourceforge.net/http/www/formats.html>.

Install the program, taking note of the name and location of the folder in which ImageMagick is installed as the openEQUELLA installation will require these details to properly configure and run openEQUELLA.

## Install Libav

Install the program, taking note of the name and location of the folder in which the avconv and avprobe executable files have been installed, as the openEQUELLA installation will require these details to properly configure and run openEQUELLA.

### To install Libav for Windows
1. Go to <http://builds.libav.org/windows/release-gpl/> and download the relevant release build. (e.g. libav-11.3-win64.7z)
2. Unzip to a directory of choice (e.g. Program Files) taking note of the name and location of the folder in which the avconv.exe and avprobe.exe files have been installed, as the openEQUELLA installation will require these details to properly configure and run openEQUELLA.
3. You will use that folder location plus "win64/usr/bin/" to direct openEQUELLA to that version of libav (either via the installer or in optional-config.properties). Note: Make sure the path you enter in the installation contains the following avconv.exe and avprobe.exe

### To install and configure Libav for Linux - Ubuntu
Install Libav from <https://libav.org/download.html>. libvo_aacenc and libx264 dependencies are also required for video previews to be generated correctly.

1. Install required packages; here we install packages required for building, an assembler, the audio codec we need and the video codec we encode with.

```bash
sudo apt-get install build-essential pkg-config
sudo apt-get install yasm libvo-aacenc-dev libx264-dev
```

2. change to the directory you want to download libav into.
```bash
mkdir scratch
cd scratch
```

3. download and extract the tar.gz file, e.g
```bash
wget https://libav.org/releases/libav-11.3.tar.gz
tar -zxf libav-11.3.tar.gz
```

4. change into libav-11.3
```bash
cd libav-11.3
```

5. configure and make libav; these do NOT need sudo
```bash
./configure --enable-libvo-aacenc --enable-version3 --enable-libx264 --enable-gpl --prefix=/usr/local
make
```

Finally, with sudo, install libav.
```bash
sudo make install
```

To remove:
1. Remove the build dependencies
```bash
sudo apt-get remove libx264-dev libvo-aacenc-dev yasm
```

2. Remove libav
```bash
cd scratch/libav-11.3
sudo make uninstall
```

3. delete the libav-11.3 directory and libav-11.3.tar.gz file.
```bash
cd
rm -r scratch/libav*
```

### To install and configure Libav for Linux - CentOS 7

You should ensure compatibility of your
specific operating system and adherence to any applicable laws and regulations before downloading the packages outlined here.

* Confirm the 'extras' repo is enabled (sudo yum repolist)
* sudo yum install epel-release
* sudo yum install yasm
* Install aacenc (from https://underhost.com/blog/install-ffmpeg-on-centos/)
  * wget http://downloads.sourceforge.net/opencore-amr/vo-aacenc-0.1.3.tar.gz (md5 b574da1d92d75fc40b0b75aa16f24ac4)
  * tar xzvf vo-aacenc-0.1.3.tar.gz
  * cd vo-aacenc-0.1.3
  * ./configure –disable-shared
  * make
  * make install
* Install X264 (from https://underhost.com/blog/install-ffmpeg-on-centos/)
* git clone git://git.videolan.org/x264.git
* cd x264
* git checkout stable
* ./configure –enable-static
* make
* make install
* Download libav (For Example: 11.3 - libav-11.3.tar.gz, md5: 1a2eb461b98e0f1d1d6c4d892d51ac9b)
* Extract the tar ball, and cd to the directory
* Run
* Run 'avconv' from your home directory to ensure it's installed
* Tie in the libav install path to openEQUELLA via optional-config.properties > libav.path

Note:
* If you get an error about gcc not being able to make an executable file, run 'sudo yum install gcc'.
* If you get an error about x264 not found, make sure you have x264.pc install directory (mine was /usr/local/lib/pkgconfig) set in your
PKG_CONFIG_PATH environment variable. You  may have to explicitly export the path at the top of the configure script for libav to find x264.

## Install openEQUELLA

When installing openEQUELLA, a wizard is provided that gathers information for the installation and initiates the installation process once sufficient information has been provided. If the installation fails to complete due to inappropriate initialization of the wizard, all partially installed components are removed and the wizard closes leaving the system as it was, prior to the installation attempt.

### Before you install: important network configuration
openEQUELLA has an inbuilt web server that stores content, and as such requires a port number to listen on. Additionally, openEQUELLA needs to know the full URL by which linked content will be accessed.

When installing openEQUELLA on a server running another web server, there are two options:
1. Assign a second IP Address to the Server for openEQUELLA (recommended)—Assuming your machine already has one assigned IP address, such as 10.0.0.1, assign a second IP address to the same machine, for example 10.0.0.2, then create a DNS entry for this second IP address, such as openEQUELLA.myinstitute.edu.au. This enables both openEQUELLA and any other web server to run on port 80 and coexist on the same server.
2. Install openEQUELLA to another server port (not recommended)—EQUELLA can be installed on another port, however this is not recommended as many firewall/proxy configurations will prevent access to this port.

For either option, you will need to make sure that your firewall/proxy will let all users of the system have access to the chosen port on the assigned IP address.

Since material created in openEQUELLA is linked to content stored on the openEQUELLA server, students as well as educators will need indirect access to this server. Usually users will be unaware of this access.

### Installation procedures

openEQUELLA provides files for installation that can be used on all platforms. The installation process gathers the following information and settings:
* Directory in which to install openEQUELLA
* Database access information
* Web server information
* openEQUELLA administration settings

This information is required to successfully install openEQUELLA. Incomplete details will cause the installation to fail.

### Begin openEQUELLA Installation 

This procedure describes installing openEQUELLA using a graphical interface. The examples shown are using Windows although other GUIs such as X-windows will be similar. The wizard pages provide information on the required details. Read each page before entering information.

Note: It is possible to install without requiring a GUI.  While not widespread as a production installation method, it's consistently used in the docker logic; see https://groups.google.com/a/apereo.org/d/msg/equella-users/v-MMOuoa7mk/UDbmSkKRAwAJ for discussion if this is important to you.

1. Obtain an openEQUELLA installer. You can either download a demo installer from https://github.com/equella/Equella/releases or build a production installer via sbt. Demo installers do not contain Kaltura integration or Oracle DB drivers, and use a self-signed Java signing certificate. The file format is equella-installer-x.y.zip (substitute x for the current major version, and y for the current minor version)
2. Extract the equella-installer-x.x.zip file to a temporary directory.
3. Navigate to the installer temporary directory and double-click on the enterprise-install file to start the installation. 
4. Click Next to display the Java Development Kit selection screen.
5. If unset or incorrect, click Browse and navigate to the directory in which the JDK is installed.
6. Click Next to display the EQUELLA Install Directory page.
7. If the path is incorrect, either type in an updated location or click "Browse" to select the location where openEQUELLA will be installed (e.g. ‘c:\equella’).
8. Click Next to display the Database Server page.  The database server group and database type must be entered to configure openEQUELLA with an empty database ready for use. 
9. Select the database type from the drop-down list (e.g. ‘SQL Server’). 
10. Select a Database Server from the following options:
* This machine — select this option if the database server is on the local machine.
* A different server — select this option if the database server is not on this machine and enter the IP address or hostname of the server.
11. Click Next to display the Database Authentication page.
12. Enter the openEQUELLA Database Name (the default value is ‘equella’).
13. Enter the Database Username (the default value is ‘equellauser’).
(NOTE: For Oracle the database username must start with an alphabetic character.)
14. Enter the Database Password used to access the database. This is the password used to set up the database. A confirmation dialog is displayed.
15. Re-enter the password to confirm the password is correct.
16. Click Next to display the Web Server Settings page.  The web server settings are used to allow web access to openEQUELLA.
17. Enter the Institution Administration URL — enter the DNS name or IP address and port
18. Select an Address Binding from the following options:
* Bind to all network interfaces — select this option if openEQUELLA is the only web server running on the machine.
* Restrict to given hostname or IP address — select this option if openEQUELLA is sharing the machine with other web servers.
19. Click Next to display the openEQUELLA Manager page. The openEQUELLA Manager is a separate service with its own authentication and port number.
20. Enter the password for the openEQUELLA Manager website — choose a password to secure the openEQUELLA Manager and note the password for future upgrades.
21. Enter the openEQUELLA Manager website port number — 3000 is the default value. If this port is currently used set the port value to any unused port number.
22. Click Next to display the Proxy Server Settings page
23. Specify whether the openEQUELLA server uses a proxy server to provide external access. Select from the following options:
* Direct Connection — select if no proxy server is used then select the Next button to skip the Proxy Server Configuration page and display the Memory Management page
* Proxy Server — select then select the Next button to display the Proxy Server Settings page
24. Proxy Server Settings
* Enter the Proxy Host and Proxy Port.
* Enter the Proxy Username and Proxy Password for proxy authentication. Leave blank if there is none.
* Click Next to display the Memory Management page.
24. Memory Management page - The memory usage of openEQUELLA can be set on this page. It is recommended that the default settings Minimum Memory Usage: 96m (MB) and Maximum Memory Usage: 512m (MB) are used. These provide suitable settings for machines with 1024 MB of memory where openEQUELLA is the only application running. The Minimum Memory Usage should never be less than 96 MB nor should the Maximum Memory exceed the amount of physical RAM available on the server (the RAM used for the OS should be taken into consideration as well). Memory should be allocated to allow sufficient memory for all applications being run on the server.
(NOTE: For 32-bit systems, Java processes on Windows are limited to 1536 MB.)
25. Click Next to display the ImageMagick page.
26. Click Browse and navigate to the directory that contains the ImageMagick files.
27. Click Next to display the Libav page
28. If you have installed Libav to create thumbnails and previews for video files uploaded as attachments, click Browse and navigate to the directory that contains the Libav files avconv.exe and avprobe.exe. Otherwise leave the field blank. A confirmation dialog displays to confirm that Libav is not required.
29. Click Next display the Ready to Install page
30. Click Install to begin the installation process. The Installing… progress dialog may take a few moments to appear.
31. When completed select OK to confirm.
32. openEQUELLA is now installed and the server is ready to be registered and started.

### Run openEQUELLA

#### To Register the openEQUELLA server as a Windows service
1. Navigate to the Manager folder (the default installation folder is C:\openEQUELLA\manager). In the ‘config’ files, details for the services can be edited (this is optional). The details that can be changed include:
* logging properties
* service names and descriptions
* whether the service should auto start.
2. Optional: To change the details, navigate to the manager folder (<path-to-equella>\manager\) and edit the manager-config and/or equellaserver-config files as required.
3.  To register the openEQUELLA server with Windows: Open a command prompt in the Manager folder (Shift/right click, then Open command window here) and enter:
```
manager install
equellaserver install
```
4. To start the service without restarting the machine either navigate to the manager folder (the default installation folder is C:\equella\manager), open a command prompt (Shift/right click, then Open command window here) and enter:
```
manager start
equellaserver start
```
Or
In Windows™ on the openEQUELLA server, go to the Control Panel, Administrative Tools then double click Services.
Find the openEQUELLA services (by default the names are openEQUELLA App Server and openEQUELLA Manager) in the list of services, right click and select the Start.

The openEQUELLA server is now started but may take a few minutes to be operational.
Once the server has been registered and started, the success of the installation can be checked by opening the Server administration account.

#### Run openEQUELLA service for UNIX like Installations
1. To start the service, navigate to the openEQUELLA install directory, then the manager folder (e.g. path-to-equella/manager). From this folder, the server can be started by running the commands:
```
./manager start
./equellaserver start
```
Once the server has been started, the success of the installation can be checked by opening the Server administration account.

## Stop the openEQUELLA server


### To stop the openEQUELLA server using Windows
1. Go to the Start menu, Control Panel, Administrative Tools then double click Services.
2. Find openEQUELLA in the list of services (by default, the names are openEQUELLA App Server and openEQUELLA  Manager), right click and select Stop.

### To stop the openEQUELLA server on other platforms
1. Navigate to the Manager folder (the default installation folder is /usr/local/equella), open a command prompt and enter:
```
./manager stop
./equellaserver stop
```
2. The services have now stopped.


## openEQUELLA Server Administration Account

The openEQUELLA Server administration account is hidden from casual users and is displayed by entering a special URL. This URL is configured in `learningedge-config/mandatory-config.properties`
as `admin.url` and defaults to '/'. It is recommended `admin.url` be set to a different hostname or IP address to the domains used by institutions accessed by users.

### To open the Server administration account page
1. Open a browser and enter openEQUELLA's `admin.url` with

‘/institutions.do?method=admin’ appended to the URL. (e.g. ‘http://equella.myinstitution.edu/logon.do’ would become ‘http://equella.myinstitute.edu/institutions.do?method=admin’).
2. The Server administration - Welcome page displays
2. Enter Email addresses, SMTP, No reply mail, User, SMTP password, and Confirm SMTP password.
3. Enter a System password, then Confirm password. This password is used to access the Server administration function in the future.
4. Click Install. The Databases page displays, with the system database listed.
5. Click the Initialize link to start the database initialization process. The progress percentage displays on the page.  During the initialization process, the button changes to Progress. Click this button to view the progress dialog.
6.  When the initialization process is complete, the database status changes to ‘Online’.

## Import a New Institution
1. Select Import institution from the navigation menu to display the Import new institution page
2. Click Browse to select the institution zip file to import (e.g. institution-....tgz)
Note: If there is no current institution (for example on a test/demo server) download a vanilla reference institution from https://github.com/equella/equella.github.io/blob/master/guides/6.4VanillaReferenceInstitution.tgz
3. Click to start the import. The Import new institution page displays.
The Import New Institution page allows for arbitrary base URLs and the renaming of the institution.
4. To continue the import, if multiple databases have been configured, click Select Database and select the required database in the Target database field. Otherwise the system defaults to the database set up during installation.
5. Enter an Institution name for the institution. The institution name must be unique for the openEQUELLA server.
6. Enter an Institution URL for the institution.  Server administrators are able to give institutions an arbitrary base URL but it is suggested that they contain a context (`/something/` after the address) and be fully qualified (including both host and domain name).
For example, the following base URLs would be valid for institutions on the same server: 
  * http://some.host.com/  	(See note below)
  * http://another.host.com/ 	(See note below)
  * http://another.host.com/with/a/context/ 
  * http://another.host.com/with/another/context/ 
  * http://on.a.different.port:8080/ 

It is not possible to overwrite another institution’s URL space, for example: ‘http://equella.myinstitution:4012/doco/qa2/’ will conflict with  ‘http://equella.myinstitution:4012/doco/’. This will be disallowed and will result in the following message:
**‘URL must not 'overwrite' an existing institution's URL space, in this case http://equella.myinstitution:4012/doco/qa2/. This may cause this institution to work incorrectly’.**. 

Like institutions, the location specified by `admin.url` should be in its own context and not sit under an institution.

7. Enter a unique Filestore folder name. This is optional; if a name is not entered a folder with a randomly generated name will be automatically generated for the institution in the path-to-equella\filestore\Institutions folder.
8. Enter a new Admin password for the institution administrator. If left blank, the institution will inherit the password from the imported institution. (NOTE: This password is used to log in to the Institution using the TLE_ADMINISTRATOR login.)
9. Confirm the password.
10. Click Import new institution then click OK to confirm. An Importing… progress dialog that indicates the import progress is displayed. When the import is complete the Return to Institution Management button becomes active.
11. Click Return to Institution Management to view the new institution on the Institutions page.

Installation of the openEQUELLA server is now complete. Login to the institution as the TLE_ADMINISTRATOR to administer and configure the institution.

## openEQUELLA Configs

Note: When using openEQUELLA on Windows and changing the equellaserver or equellaserver-config properties, you'll need to reinstall the service.

### Available openEQUELLA Configs

* Config: freetextIndex.defaultOperator = AND
  * Release(s) Valid: 5.2? - 6.3+
  * Location: optional.properties in /plugins/com.tle.core.freetext
  * Comments: Indicates if default search terms should be performed with an implicit AND or OR. Defaults to AND

* Config: can.access.internet = true
  * Release(s) Valid: 6.1-QA2 - 6.3+
  * Location: optional-config.properties
  * Comments: Allows the URL checker to run. Defaults to true.

* Config: com.tle.core.tasks.RemoveOldAuditLogs.daysBeforeRemoval = 120
  * Release(s) Valid: At least 6.0-QA3,6.1-QA2, 6.2-GA+
  * Location: optional-config.properties
  * Comments: Set the number of days to keep audit logs in openEQUELLA before the scheduled task truncates them. Default is 120 days (~4 months).

* Config: com.tle.core.tasks.RemoveDeletedItems.daysBeforeRemoval = 7
  * Release(s) Valid: At least 6.4-QA3+
  * Location: optional-config.properties
  * Comments: Set the number of days to keep deleted items in openEQUELLA before the scheduled task purges them. Default is 7 days.

### Internal openEQUELLA Configs

These configurations should be used only with the utmost care.  

* Config: tomcat.useBio = false
  * Release(s) Valid: 6.4-GA +
  * Location: optional-config
  * Comments: Default is false (Tomcat will by default use the NIO connectors).

* Config: tomcat.maxThreads = 100
  * Release(s) 6.2-GA +
  * Location: optional-config
  * Comments: Default is 100.

* Config: sessions.neverPersist = false
  * Release(s) Valid: 6.3-GA +, 6.2-QA1 +
  * Location: optional-config
  * Comments: Default is 'false'. In 6.2-QA1 that setting this config to true will stop openEQUELLA from inserting data into tomcat_sessions.

### openEQUELLA URLs

* openEQUELLA inst_url/language/download/refresh : *Refreshes the language caches, but you'll have to hit it on each node*

* openEQUELLA inst_url/access/scheduledtasksdebug.do : *Landing page of the scheduled tasks in openEQUELLA allows the tasks to be manually kicked off by clicking on the task link.*

* openEQUELLA inst_url/some openEQUELLA tree?$DEBUG$ : *Displays the supported and unsupported parameters. Also displays the section tree structure*

* openEQUELLA inst_url/logon.do?NO_AUTO_LOGIN : *Bypasses auth redirections, for example, for CAS, and presents the normal openEQUELLA login page. The =true is optional - the key just needs to be present.*

* openEQUELLA inst_url/logon.do?NO_IP_LOGIN : *Bypasses IP login and presents the normal openEQUELLA login page. The =true is optional - the key just needs to be present.*

* openEQUELLA inst_url/logon.do?logout=true  : *Forces a user to log out.*


## Manage Databases

openEQUELLA provides the ability to use multiple databases, allowing each institution to have its own database. This improves both security and performance.

### Add a new database to openEQUELLA procedure
Configuring multiple databases involves the following steps:
1. Install a new database.
NOTE: When using multiple databases, only databases from one vendor may be used. For example, two Microsoft SQL Server databases could be used, but NOT a Microsoft SQL Server and a PostgreSQL Server database. The database vendor is selected when the openEQUELLA system is first installed.
2. Configure the new database in openEQUELLA. (See Add a database to openEQUELLA below.)
3. Clone or import an institution, specifying the new database.

### Add a database to openEQUELLA
Databases are managed through the Databases function, accessed from the Server Administration page.

To add a new database:
1. Select Databases from the Server Administration page navigation menu.
2. Click the Add database link to display the Add database dialog.
3. The Use system schema checkbox is only selected to default to the database specified in the hibernate.properties file. Selecting this checkbox disables the remaining fields.
4. Enter the new database JDBC URL. In this example, the existing openEQUELLA database is PostgresSQL, so the system prompts a PostgreSQL example. If using MS SQL or Oracle, a relevant example is shown.
The existing database JDBC URL can be found in path-to-equella\learningedge-config\hibernate.properties, and the structure is
```
jdbc:<databasetype>://<host>:<port>/<database_name>.
```
For example, jdbc:postgresql://localhost:5432/equella51.

Change the <database_name> to the new database name. For example, jdbc:postgresql://localhost:5432/Equella2

5. Enter the database Username and Password.
6. Click Add and bring online to save the Main connection details. The Database page displays, and the new database starts an automatic initialization process with a progress bar. Once completed, the new database displays with a status of Online.

### Reporting connection

The reporting connection section allows a separate database login for users who have reporting/read-only privileges.

To configure Reporting connection settings:
1. Enter the JDBC URL, if relevant.
NOTE: This would only be different from the Main connection JDBC URL if data was transferred to a separate database for reporting purposes. Leave blank to use the Main connection JDBC URL.
2. Enter the Username and Password.
3. Click Save to save the details.

### Take a database offline

Databases can be taken offline if required. For example, for database maintenance or to take down a group of institutions.
1. From the Databases page, click Take Offline. A warning/confirmation dialog displays.
2. Click OK  to confirm. The database Status is now Offline

### Bring a database online

If a database has been taken off-line, it must then be brought back online for use.
1. From the Databases page, click Bring Online. The database Status is now Online.

### Edit database settings
Database settings can be accessed for editing. Generally settings won’t be changed, but a Reporting connection or description might be added at a later date. The database must be Offline for the settings to be edited.
1. From the Databases page, click the drop-down in the relevant database’s Actions column to view menu options.
2. Select the Edit database settings link to display the Edit database page.
3. Make the relevant changes, then click Save.

### Delete a database
On rare occasions, it may be required to delete a database that may no longer be used. The database must be Offline before it can be deleted.
1. From the Databases page, click the drop-down in the relevant database’s Actions column to view menu options.
2. Select the Remove this database link. A warning/confirmation dialog displays.
3. Click OK to confirm.

### Reload database state
The Reload database state function checks the database state and reloads if required. This function might be used if changes had been made to a database, or if a database had become unavailable to openEQUELLA due to technical issues, but is again available.
1. From the Databases page, click the drop-down in the relevant database’s Actions column to view menu options.
2. Select the Reload database state link.


## Use a Reverse Proxy Server

This section describes how to configure openEQUELLA to run with a reverse proxy.

A reverse proxy is a gateway for servers enabling one web server to provide transparent access to content from multiple servers and also provides controlled access from the Internet. Possible reasons for running openEQUELLA from a reverse proxy include:
* providing all services through a single server
* providing an openEQUELLA service on the default HTTP port (or any below 1024) but running the service as a non-privileged user
* increasing the security of your services by running Apache or Squid
* you want to use SSL with openEQUELLA

The following section provides an example installation using Apache. This is indicative of the process required for other web servers.

### Configure a reverse proxy
1. Ensure the Apache modules mod_proxy and mod_proxy_http have been installed.
2. Open the Apache httpd.conf file and add a ‘ProxyPass’ directive to the VirtualHost element:

```apache
<VirtualHost *:80>
  ServerName {external-server-name}
  ProxyPass / http://{equella-host}:{http-port}/ nocanon
  ProxyPreserveHost On
</VirtualHost>
```

Where:
* ‘external-server-name’ must be either the hostname of an institution, or the hostname in mandatory-config.properties.
* ‘equellahost’ is the host with the openEQUELLA installation (if it is on the same machine as the apache server, this would normally be localhost).
* ‘http.port’ is the property specified in mandatory-config.properties (defaults to port 80).
* ‘nocanon’ ensures URLs are passed through to the host without processing.

An example directive is:

```apache
<VirtualHost *:80>
  ServerName {external-server-name}
  ProxyPass / http://{equella-host}:{http-port}/ nocanon
  ProxyPreserveHost On
</VirtualHost>
```

### Configure openEQUELLA with SSL

1. Open **mandatory-config.properties** and ensure the https.port is enabled (uncommented).
2. Open **optional-config.properties** and ensure the *userService.useXForwardedFor* is set to **true**.
3. Ensure the Apache *modules mod_proxy, mod_proxy_http, ssl and headers* have been installed and enabled.
4. Open the Apache **httpd.conf file** and add a **‘ProxyPass'** directive to the VirtualHost element, and the additional SSL directives:
​
```apache
<VirtualHost *:443>
  ServerName {external-server-name}
  ProxyPass / http://{equella-host}:{http-port}/ nocanon
  ProxyPreserveHost On
​
  RequestHeader set "X-Forwarded-Proto" "https"
​
  ## SSL
  SSLEngine on
  SSLProxyEngine on
  SSLCertificateFile    {path-to-cert.pem}
  SSLCertificateKeyFile {path-to-cert.key}
</VirtualHost>
```
​
Where:
* ‘external-server-name’ must be either the hostname of an institution, or the hostname in mandatory-config.properties.
* ‘equellahost’ is the host with the openEQUELLA installation (if it is on the same machine as the apache server, this would normally be localhost).
* ‘https.port’ is the property specified in mandatory-config.properties (defaults to port 8443).
* ‘nocanon’ ensures URLs are passed through to the host without processing.
​
An example directive is:
​
```apache
<VirtualHost *:443>
  ServerName equella.example.com
  ProxyPass / http://equella.example.com:8443/ nocanon
  ProxyPreserveHost On
​
  RequestHeader set "X-Forwarded-Proto" "https"
​
  ## SSL
  SSLEngine on
  SSLProxyEngine on
  SSLCertificateFile    /etc/ssl/mycert.crt
  SSLCertificateKeyFile /etc/ssl/mycert.key
</VirtualHost>
```
​
5. Update the institution URL for https://... (e.g. https://equella.com).

​
NOTE: The above examples are for Apache HTTPD, but hardware SSL terminators (e.g. F5 load balancer) or other software terminators (e.g. Nginx) may be used.


## Customize the openEQUELLA Digital Repository

After the initial setup, openEQUELLA features are managed through the Administration Console, a comprehensive tool that enables ongoing customization and administration of the openEQUELLA Digital Repository.

To access openEQUELLA:
1. Select the Login link for the new institution in the Institutions dialog to display the Welcome page.
2. Login to the institution using the institution administrator (TLE_ADMINISTRATOR) login and password (this is the login set when the institution was imported), then click Log In. The Dashboard page displays.
3. To open the Administration Console, select Settings from the navigation menu on the left-hand side of the page to display the Settings page.
4. Select the Administration console link.
5. To access the openEQUELLA Digital Repository, users, roles and groups will need to be defined.


## Use Log Files

openEQUELLA writes an extensive series of log files for events including the resource center, openEQUELLA services and the openEQUELLA conversion service. All log files can be found in directories bearing the date of the log file. Each directory contains one log file containing entries for all events logged on that date. A new log directory is created for every day the logged services are run. Log files may need to be archived from time to time to recover disk space.  The log directories and files are contained in the logs directory of openEQUELLA server.

Via the `HTMLLayout3` layout scheme, Error events are highlighted to simplify discovery as the files can contain many entries.

To view a resource centre log
1. Navigate to the logs directory on a given server, typically path-to-equella\logs\resource-centre.
2. Select the date directory and open the `application.html` (or similar) file within.

Logs are controlled with standard log4j technology, and you can change how logs are emitted to match your log monitoring setup.  For example, to emit a parser-oriented set of logs, add the following to your `learningedge-config/learningedge-log4j-config.properties` (and optionally, remove the previous configurations):

```properties
log4j.appender.FILE.File=path-to-equella\logs\app\app.log

log4j.rootLogger=INFO, FILE

log4j.appender.FILE=com.tle.core.equella.runner.DailySizeRollingAppender
log4j.appender.FILE.Threshold=TRACE
log4j.appender.FILE.ImmediateFlush=true
log4j.appender.FILE.Append=true
log4j.appender.FILE.layout=org.apache.log4j.PatternLayout
log4j.appender.FILE.layout.ConversionPattern=%d{ISO8601} [%p] [appX] [%t:%c.%M()] - %m%n
log4j.appender.FILE.layout.title=openEQUELLA Resource Center
```

## Thread Dump

The Thread Dump page provides information about the threads that are running, processing and being accessed. This information is used to help the system administrator identify problems.
1. Select Thread dump from the navigation menu to display the Thread dump page.

## Health Check

The Health check page provides system service information for services required by openEQUELLA, as well as a list of currently running tasks. If clustering is configured for a system, the service and task information is provided for each cluster node.  As well as the status of each service, the following information is provided:
* Filestore – location, total space and free space.
* Image Magick – location, version, copyright information and features.
* Lucene index – index location.

Additionally, where institution filestore size restrictions have been configured, an Institution filestore usage section displays, showing the Limit and the Approximate usage.

1. To access the Health check page from the navigation menu, select Health check. The Health check page displays.
2. Click the Services drop-down arrow to view the service details. The relevant Node ID displays beside each running task in the Running tasks section for clustered environments.
3. If there is a problem with one or more of the services for a node, a red cross icon displays in the Services column instead of the green tick icon, Click the down-arrow to view details of the error.
4. Select the Enable cluster debugging checkbox to display cluster node information at the bottom of each openEQUELLA page.

## Uninstall openEQUELLA

This section describes how to uninstall openEQUELLA. The re-installation process is the same as the installation process.

Uninstalling openEQUELLA is a three-stage process on Windows and two-stage process on other platforms:
1. Stop the openEQUELLA service.
2. Windows only: Run the Unregister service command to deregister the services manager.
3. Delete the directory that holds the openEQUELLA installation.

### Stop the openEQUELLA server
Using Windows
1. Navigate to the Start menu and find Settings, then Control Panel.
2. Open the Administrative Tools panel and then Services.
3. Find openEQUELLA in the list of services  and select the Stop the service link on the left.

On other platforms
1. Navigate to the Manager folder (the default installation folder is /usr/local/equella), open a command prompt and enter:
```
./manager stop
./equellaserver stop
```
The services have now stopped.

### De-register the services manager (Windows only)

The Windows service must be removed before deleting the installation.
1. Choose Run from the Start menu then enter:
```
<path-to-equella>\manager\manager remove
<path-to-equella>\manager\equellaserver remove
```
Now the installation directory can be deleted.

### Delete the installation directory
To delete the installation directory:
1. Navigate to and select the installation directory for your installation. (The default installation is C:\equella.)
2. Press the Delete key.
3. Confirm the deletion. The directory and all its contents are deleted.
4. Ensure the database administrator deletes the openEQUELLA database.
