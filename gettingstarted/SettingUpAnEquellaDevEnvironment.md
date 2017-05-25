[Home](https://equella.github.io/)

# Setting Up an Equella Dev Environment 

* [Download required software](#download-required-software)
* [Get the code](#get-the-code)
* [Equella Configuration](#equella-configuration)
* [Installation of the Vanilla institution](#installation-of-the-vanilla-institution)

## Download required software

**Download and install Git**

<https://git-scm.com/downloads>

**Download and install SBT** 

<http://www.scala-sbt.org/>

**Download and install Java 8 JDK**

<http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

**Download and install Image Magick binaries** 

<http://www.imagemagick.org/script/binary-releases.php>

*Note: For ubuntu follow the install from Unix Source instructions:*
<https://www.imagemagick.org/script/install-source.php>

They are installed in /usr/local/lib

When installing in Windows, check “Install Legacy Utilities (e.g. convert)”.

**Download and install libav**

In ubuntu:

```
sudo apt-get install libav-tools
```

They are installed in /usr/lib


Once SBT and Java are installed, you may need to set a JAVA_HOME environment variable.

**Database**

* Either [PostgreSQL](https://www.postgresql.org/), SQLServer, or Oracle database.

## Get the code 

### Base code
**Git Clone** 

git clone git@github.com:equella/Equella.git

### Optional code
There is functionality that could not be included into the core Equella code repository, but based on your business needs, may be appropriate to include.
* Oracle DB Driver
* Kaltura
* ... others?

## Build configuration

Some aspects of the build can be configured by editing the `build.conf` file.

### Keystore

A keystore with a certificate is required to sign some of the jars in order for them to escape the Java sandbox.

By default the build will generate a self signed key which will show security warnings when launching.
In order to prevent this you will need to have a properly [signed certificate](https://www.digicert.com/code-signing/java-code-signing-guide.htm) and configure the build to use it.
In the `build.conf` file you can modify the parameters to configure your own keystore:

```conf
signer {
  keystore = "/path/to/.keystore"
  storePassword = "<storepasswd>"
  keyPassword = "<optional>" # defaults to storePassword
  alias = "<keyalias>"
}
```

**IMPORTANT**: A self registered certificate implies that the jars won't be secured and a security exception will appear when trying to launch the jars.
To avoid this it is needed to add the domain you want to trust as a security exception in your java configuration.
It can be done with the Java Control Panel or directly adding the domain in a new line in this file:
${user.home}/.java/deployment/security/exception.sites 

## Building the code

```bash
cd to the {Equella repo}/ directory
sbt compile
```

### Equella Configuration
Under the {Equella repo}/Dev/learningedge-config folder, you'll need several artifacts:
* Plugins folder
* mandatory-config.properties
** the plugins.location needs to point to your source tree.
* optional-config.properties
* ...

### Running a dev instance

Ensure you have your `Dev/learningedge-config` setup.  See [Equella Configuration](#equella-configuration).

```bash
sbt compile equellaserver/run
```

### Running a dev instance of the admin tool

Ensure you have your `Dev/learningedge-config` setup.  See [Equella Configuration](#equella-configuration).

```bash
sbt compile adminTool/run
```

## Installation of the Vanilla institution

Really any instituion is sufficient.  Under the 'Installing Equella' page, there is a guide to a 'Vanilla' institution that would be suitable for a development environment.
