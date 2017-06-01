[Home](https://equella.github.io/)

# EQUELLA Installer

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
If you don't have / don't want to use a pre-built binary, building Equella yourself is fairly straight forward:
1. Clone the Equella core repo ``` ~$ git clone git@github.com:equella/Equella.git ```.
1. Pull down the local Maven repo.
1. If you want to include any Optional Functionalities, please review the associated [documentation](https://github.com/equella/equella.github.io/tree/master/optional-functionality).
1. Git checkout the branch / tag you want to build off of.
1. Run ``` ~$ sbt installerZip ``` in the Equella root directory.  This produces an installer zip binary in the {Equella}/Installer/target directory.

## Install Equella
1. Unzip the equella install zip binary.
1. Run the GUI installer:
    ```bash
    cd ~/equella-installer-{VERSION}
    java -jar enterprise-install.jar
    ```
1.1. You'll need to know where you've installed imagemagick, libav, java, and your database.
1.1.1. Imagemagick in Ubuntu, run ```~$ whereis convert```.
1.1.1. Libav in Ubuntu, run ```~$ whereis avconv```.
### \*nix Install
Ensure that the manager and scripts are executable:
```bash
~$ cd {install_location}/manager
~$ chmod +x equellaserver manager jsvc
```
### Windows Install
Using the equellaserver and manager bat scripts, configure and install as Windows services.

## Starting Equella
### \*nix
```bash
~$ cd {install_location}/manager
~$ ./equellaserver start
and/or
~$ ./manager start
```
To stop Equella or the manager, run the same command to start the application, but pass in 'stop' instead of 'start'.

### Windows
Assuming Equella and the Equella Manager have been installed as services, navigate to your install services, and select Equella to start.

## Accessing Equella / Finish Setup
Use your browser to login to the EQUELLA manager (default is <http://localhost:3000>)
From here you can click the "start" button to start the EQUELLA app server if not already done from a Windows service or \*nix start script. 

Once Equella has started you can log in to the server admin pages using the hostname and port you configured in the installer.

The installation process will need to be completed in the server admin pages.  Please access the server admin pages, configure the fields presented, and once presented with the database screen, initialize the database.

At this point, Equella is 'running', but still needs an institution to be useful.

## Import an Institution
... todo

