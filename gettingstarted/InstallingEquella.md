[Home](https://equella.github.io/)

# Installing Equella

## Environment setup
Assuming you are building and installing Equella in the same environment, the following should be setup.  Details can be found in the [Equella Dev Setup](http://equella.github.io/gettingstarted/SettingUpAnEquellaDevEnvironment.html#download-required-software) guide.

- Java 8 (Oracle)
- ImageMagick
- Libav
- Database

Needed if you are building your own install binary:
- GIT
- SSH Key in Github
- SBT

## Build the Installer
*_NOTE:  Currently the build process requires a 'local maven' repo of 'equella-deps' that is not yet available to the community.  We are preparing those dependencies to be available to the community and the work should be completed soon._*

If you don't have / don't want to use a pre-built binary, building Equella yourself is fairly straight forward:
1. Clone the Equella core repo ``` ~$ git clone git@github.com:equella/Equella.git ```.
1. Pull down the local Maven repo.
1. If you want to include any Optional Functionalities, please review the associated [documentation](https://github.com/equella/equella.github.io/tree/master/optional-functionality).
1. Git checkout the branch / tag you want to build off of.
1. Run ``` ~$ sbt compile installerZip ``` in the Equella root directory.  This produces an installer zip binary in the {Equella}/Installer/target directory.

## Install Equella
1. Unzip the equella install zip binary.
1. Run the GUI installer:
    ```bash
    ~$ cd ~/equella-installer-{VERSION}
    ~$ java -jar enterprise-install.jar
    ```
You'll need to know where you've installed imagemagick, libav, java, and your database.
- Imagemagick in Ubuntu, run ```~$ whereis convert```.
- Libav in Ubuntu, run ```~$ whereis avconv```.

The 'Institution Administration URL' for local testing can be as simple as ```http://localhost:8080/admin/```

### \*nix Install
Ensure that the manager and scripts are executable:
```bash
~$ cd {install_location}/manager
~$ chmod +x equellaserver manager jsvc
```
### Windows Install
Using the equellaserver and manager bat scripts, configure and install as Windows services.

## Starting Equella
The primary log to watch is located under ```{install_location}/logs/resource-centre/{current_date}/application.{X.}html```

### \*nix
```bash
~$ cd {install_location}/manager
~$ ./equellaserver start
and/or
~$ ./manager start
```
To stop Equella or the manager, run the same command to start the application, but pass in 'stop' instead of 'start'.

### Windows
Assuming Equella and the Equella Manager have been installed as services, navigate to your services, and select Equella to start.

## Accessing Equella / Finish Setup
Use your browser to login to the EQUELLA manager (default is <http://localhost:3000>)
From here you can click the "start" button to start the EQUELLA app server if not already done from a Windows service or \*nix start script. 

Once Equella has started you can log in to the server admin pages using the hostname and port you configured in the installer.

The installation process will need to be completed in the server admin pages.  Please access the server admin pages, configure the fields presented, and once presented with the database screen, initialize the database.

At this point, Equella is 'running', but still needs an institution to be useful.

## Import an Institution
1. Download the [6.4 vanilla](https://github.com/equella/equella.github.io/blob/master/guides/6.4VanillaReferenceInstitution.tgz) institution.
1. Using the server admin pages, import the institution
1. After the import completes, click 'Return to Institution Management'
1. Your newly imported institution should be enabled on the 'Institutions' page.  Click 'Login' under 'Actions'
1. Login with the Equella super user ```TLE_ADMINISTRATOR```, and use the institution password you set when configuring the institution import.



