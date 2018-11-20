[Home](https://equella.github.io/)

# Installing openEQUELLA

## Environment setup

Assuming you are building and installing openEQUELLA in the same environment, the following should be setup. Details can be found in the [openEQUELLA Dev Setup](https://github.com/equella/Equella#download-required-software) guide.

- Java 8 (Oracle)
- ImageMagick
- Libav
- Database

Needed if you are building your own install binary:

- GIT
- SBT

## Build the Installer

If you don't have / don't want to use a pre-built binary, you can build openEQUELLA from source yourself by following the instructions on the main [openEQUELLA repo](https://github.com/equella/Equella).

## Install openEQUELLA

1. Unzip the openEQUELLA install zip binary.
1. Run the GUI installer:
   `bash ~$ cd ~/equella-installer-{VERSION} ~$ java -jar enterprise-install.jar`
   You'll need to know where you've installed imagemagick, libav, java, and your database.

- Imagemagick in Ubuntu, run `~$ whereis convert`.
- Libav in Ubuntu, run `~$ whereis avconv`.

The 'Institution Administration URL' for local testing can be as simple as `http://localhost:8080/admin/`

### Windows Install

Using the equellaserver and manager bat scripts, configure and install as Windows services.

## Starting openEQUELLA

The primary log to watch is located under `{install_location}/logs/resource-centre/{current_date}/application.{X.}html`

### \*nix

```bash
~$ cd {install_location}/manager
~$ ./equellaserver start
and/or
~$ ./manager start
```

To stop openEQUELLA or the manager, run the same command to start the application, but pass in 'stop' instead of 'start'.

### Windows

Assuming openEQUELLA and the openEQUELLA Manager have been installed as services, navigate to your services, and select openEQUELLA to start.

## Accessing openEQUELLA / Finish Setup

Use your browser to login to the openEQUELLA manager (default is <http://localhost:3000>)
From here you can click the "start" button to start the openEQUELLA app server if not already done from a Windows service or \*nix start script.

Once openEQUELLA has started you can log in to the server admin pages using the hostname and port you configured in the installer.

The installation process will need to be completed in the server admin pages. Please access the server admin pages, configure the fields presented, and once presented with the database screen, initialize the database.

At this point, openEQUELLA is 'running', but still needs an institution to be useful.

## Import an Institution

1. Download the [6.4 vanilla](https://github.com/equella/equella.github.io/blob/master/guides/6.4VanillaReferenceInstitution.tgz) institution.
1. Using the server admin pages, import the institution
1. After the import completes, click 'Return to Institution Management'
1. Your newly imported institution should be enabled on the 'Institutions' page. Click 'Login' under 'Actions'
1. Login with the openEQUELLA super user `TLE_ADMINISTRATOR`, and use the institution password you set when configuring the institution import.
