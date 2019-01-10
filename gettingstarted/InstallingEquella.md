[Home](https://equella.github.io/)

# Installing openEQUELLA

## Environment setup
The following dependencies are required to successfully install openEQUELLA.

- [Java 8 JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (Latest version)

- [ImageMagick](https://www.imagemagick.org/script/download.php) (Tested with ImageMagick 6.9.8 Q8)

- [LibAV](https://libav.org/download/) (tested with 11.7)

  (**Note:** This is not a compulsory step if video file attachments will not be used in your institution or you don’t require them to display in the Videos gallery view.)

- Database Server

  - PostgreSQL (8 or higher)
  - Microsoft SQL (2008 or higher)
  - Oracle (11g or higher)



## Installation

1. Download and unzip the openEQUELLA installer from [Github]( https://github.com/equella/Equella/releases) 

1. Run installer:
    ```bash
    ~$ cd ~/equella-installer-{VERSION}
    ~$ java -jar enterprise-install.jar
    ```
    During the install process you will be asked to specify where you've installed imagemagick, libav, java, and your database. For Linux users run the following commands:
- Imagemagick in Ubuntu, run ```~$ whereis convert```.

- Libav in Ubuntu, run ```~$ whereis avconv```.



## Starting openEQUELLA

### Windows

1. In the windows command prompt, navigate to  **<install_location>/manager**
2. To register openEQUELLA as a windows service type **equellaserver install**
3. To start the openEQUELLA service type **equellaserver start**

### \*nix
```bash
~$ cd {install_location}/manager
~$ ./equellaserver start
and/or
~$ ./manager start
```
To stop openEQUELLA, run the same command to start the application, but pass in 'stop' instead of 'start'.

**Note:** The primary log to watch is located under: 

`{install_location}/logs/resource-centre/{current_date}/application.{X.}html`



## Accessing openEQUELLA / Finish Setup
Once openEQUELLA has started you can log into the server admin pages using the hostname and port you configured in the installer.

The installation process will need to be completed in the server admin pages. Please access the server admin pages, configure the fields presented, and once presented with the database screen, initialize the database.

At this point, openEQUELLA is 'running', but still needs an institution to be useful.



## Import an Institution
1. Download the preconfigured [institution](https://github.com/equella/equella.github.io/blob/master/guides/6.4VanillaReferenceInstitution.tgz).
1. Using the server admin pages, import the institution
1. After the import completes, click '**Return to Institution Management**'
1. Your newly imported institution should be enabled on the '**Institutions**' page.  Click '**Login**' under '**Actions**'
1. Login with the openEQUELLA super user **TLE_ADMINISTRATOR**, and use the institution password you set when configuring the institution import.



For further information about openEQUELLA installation, please refer to the [Full Installation Guide](http://equella.github.io/guides/InstallationAdminGuide.html).