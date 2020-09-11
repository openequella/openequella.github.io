### Contents

* Download Ubuntu Desktop Software
* Install Oracle Virtual Box VM Software
* Install sdkman to Run and Manage Java 8	
* Install Postgresql	
* Install Pgadmin4	
* Install libtinfo5	
* Install npm	
* Install Nodejs	
* Install ImageMagick	
* Install Git	
* Install Intellij	
* Generate an SSH key and Add it to the ssh-agent	
* Add the ssh key to your openEQUELLA GitHub Repository	
* Clone the openEQUELLA Repository	
* Install SBT	
* Create a New Branch of openEQUELLA in Git	
* Import sbt project into Intellij	
* Compile and Run openEQUELLA Server


***
	
### Download Ubuntu Desktop Software

1. Click here to download Ubuntu

![download ubuntu](images/13 Download Ubuntu.PNG)

2. Save the file to a location you will remember. You will need the install package later when you create the VM.

### Install Oracle Virtual Box VM Software

Before installing Virtual Box on Windows 10 you must change turn of the Containers and Hyper-V features.

1. To do this click on the Windows Start Menu and type “Turn Windows” which should bring up the option you see below.
2. Click on “Open.

[[images/01 turn windows features off.jpg]]

3. Now uncheck Containers and Hyper-V.

[[images/02 turn off hyperV and containers.jpg]]

Now you can download Oracle Virtual Box

4. [Click here to download VirtualBox](https://www.virtualbox.org/wiki/Downloads)

5. Download the version for Windows hosts

[[images/03 Download Virtual Box for Windows.jpg]]

6. Once downloaded click on and run the installation file.

[[images/04 Run VB install.PNG]]

7. Complete the VirtualBox installation and start VirtualBox.

[[images/05 finish install.PNG]]

8. Click the “New” button to create a new VM.

[[images/06 Add New VM.PNG]]

9. Name the VM “ubu_equella”, type should be “Linux”, and version should be “Ubuntu (64-bit)”

[[images/07 Name VM.PNG]]

10. Set the memory size to at least 4 gigabytes. **Depending on your computer, it may not be able to handle more than this and will have to decrease the size**. Optimally 6 gigabytes would be better. If your VM fails to create, try lowering the amount of memory you allocate.

[[images/08 Set Memory.PNG]]

11. Select “Create a virtual hard disk now”

[[images/09 Create Virtual Hard Disk.PNG]]

12. Select VDI (VirtualBox Disk Image)

[[images/09.5 Create Virtual Hard Disk2.PNG]]

11. Select “Dynamically allocated”

[[images/09.7 Dynamic Allocation.PNG]]

12. Set disk size to at least 25 gigabytes.

[[images/10 Set disk size.PNG]]

13. The disk creation will take a few minutes to complete.

[[images/11 Creating Disk.PNG]]

14. Now that the VM has been created, click on Start -> Normal Start.

[[images/12 Start vm.PNG]]

15. Add a Ubuntu Image.

[[images/14 Add Ubuntu Image.PNG]]

15. Browse to and select the Ubuntu install you downloaded earlier.

[[images/15 choose ubuntu.PNG]]

16. Install Ubuntu

[[images/16 install ubuntu.PNG]]

17. Select the appropriate language.

[[images/17 Select English.PNG]]

18. Select Normal Installation

[[images/18 Normal Install.PNG]]

19. Select Erase disk and install Ubuntu. Note, this will not erase the hard disk of the host computer. It will simply use allocated disk space on the host computer.

[[images/19 Install Type.PNG]]

20. Press Continue.

[[images/20 Continue install.PNG]]

21. Select the appropriate time zone.

[[images/21 Time Zone.PNG]]

22. Set the name, computer name, username, and select an easy password you can remember. Require the password to login.

[[images/22 who are you.PNG]]

23. Let the installation run which will take a few minutes to complete.

[[images/23 installing.PNG]]

24. When prompted select Restart Now

[[images/24 Installation complete.PNG]]

25. At this screen, just click enter.

[[images/25 Click enter.PNG]]

26. Click on the account you created to login.

[[images/26 Login.PNG]]

27. Enter the password you created.

[[images/27 Enter Pasword.PNG]]

27. The installation is now complete.

[[images/28 Installation complete.PNG]]

28. Modify the display by clicking on the applications waffle menu

[[images/29 Show applications.png]]

29. Type displays in the applications search box. 

[[images/30 Type displays.png]]

30. Change the display to 1280 x 800

[[images/32 Change displayto 1280 x 800.png]]

### Install sdkman to Run and Manage Java 8

1. From the applications waffle menu type “terminal” in the search box. 

[[images/34 get terminal2.PNG]]

2. Right click on the terminal icon and select “Add to Favorites”

[[images/35 Add to favorites.PNG]]

3. Click on the terminal icon.

[[images/36 Open terminal.PNG]]

4. Now that the terminal is launched, open up a browser window and [Click here to download sdkman](https://sdkman.io/install).

5. This will show the commands to install sdkman and Java 8, but I will provide the commands below.

6. In the terminal window type the following command. 

`$ curl -s "https://get.sdkman.io" | bash`

[[images/37 get curl.PNG]]

7. You will get an error that curl is not install, but you can install it as prompted with the command. When prompted you will need to enter the administrator password you setup when you installed Ubuntu.

`$ sudo apt install curl`

[[images/38 run curl install.PNG]]

8. Curl will be installed. Now you can rerun the command below to install sdkman. When installed the output will look like the screen below.

`$ curl -s "https://get.sdkman.io" | bash`

[[images/39 Install sdkman.PNG]]

9. Now issue the command below.

`$ source "$HOME/.sdkman/bin/sdkman-init.sh"`

[[images/40 configure sdkman.PNG]]

10. Now run the command below. If it returns an sdkman version number, the installation and configuration were successful.

`$ sdk version`

11. If sdkman was correctly installed, the output will look like the screen below.

[[images/41 sdkman version.PNG]]

12. Now it’s time to install Java 8 using sdkman. In order to do this you will want to list the Java versions available in sdkman by typing the command below. From the output of the screen we want the Java 8 version from java.net. You will need to scroll up a little bit to see the correct Java version highlighted below.

`$ sdk list java`

[[images/42 SDK list java.PNG]]

13. Now that we have the correct version, we type the command as follows.

`$ sdk install java 8.0.265-open`

[[images/44 Install SDK java 8.PNG]]

14. Below is the output after installing the jdk.

[[images/45 Install output.PNG]]

15. Now type the command below to verify installation

`$ java -version`

[[images/46 Java version.PNG]]

### Install Postgresql

1. You can install PostgreSQL in a variety of ways. I will provide a set of instructions that can be referenced here:[Click to view PostgreSQL instructions from computing for geeks.](https://computingforgeeks.com/install-postgresql-12-on-ubuntu/)

2. Run the following command below from a command prompt. You will be prompted for your administrator password.

`$ sudo apt update`
`$ sudo apt -y install vim bash-completion wget`
`$ sudo apt -y upgrade`

3. You must reboot whenever you upgrade.

`$ sudo reboot`

4. Now add the repository.

`$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`

5. Install postgresql

`$ sudo apt update`
`$ sudo apt -y install postgresql-12 postgresql-client-12 postgresql-contrib-12`

6. Check to see that you can connect to postgresql using psql.

`$ sudo -u postgres psql -c "SELECT version();"`

[[images/pg 01 check version.png]]

7. Set the password for the use postgres. To do this follow the commands below.

`$ sudo -u postgres psql postgres`
`# \password postgres`

The output will look like this.

[[images/postgresql/01 change postgres password.png]]

8. Type “exit” to escape root.

### Install Pgadmin4

1. Now install the PostgreSQL admin tool. All of the command will be provided below. The website from where these commands were taken is found here:  [Click here to view Pgadmin Install for Ubuntu 20.40.4](https://yallalabs.com/linux/how-to-install-pgadmin4-ubuntu-20-04/)

2. Run the command below to install the pgAdmin4 key.

`$ curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add`

3. pgAdmin4 requires you to add an external repository.

`$ sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'`

4. Now install pgAdmin as server mode.

`$ sudo apt install pgadmin4-web`

5. Now configure pgAdmin by running the command below.

`$ sudo /usr/pgadmin4/bin/setup-web.sh`

`The output should look like what you see below. You will be prompted for an email address and password. You will also be prompted to restart the apache server. `

`Setting up pgAdmin 4 in web mode on a Debian platform...`
`Creating configuration database...`
`NOTE: Configuring authentication for SERVER mode.`

`Enter the email address and password to use for the initial pgAdmin user account:`

`Email address: salmon@salmon.com`
`Password:`
`Retype password:`
`pgAdmin 4 - Application Initialisation`
`======================================`

`Creating storage and log directories...`
`We can now configure the Apache Web server for you. This involves enabling the wsgi module and configuring the pgAdmin 4 application to mount at /pgadmin4. Do you wish to continue (y/n)? y`
`The Apache web server is running. A restart is required for the pgAdmin 4 installation to complete. Would you like to continue (y/n)? y`
`Apache successfully restarted. You can now start using pgAdmin 4 in web mode`

6. Now you can run pgAdmin by opening a web browser and entering the URL below.

[http://localhost/pgadmin4/](http://localhost/pgadmin4/)

7. Login with the email address and password you previously created in step 9.

[[images/pgadmin 01-1 login.PNG]]

8. Right click on Servers -> Create -> Server

[[images/pgadmin 02 server add.PNG]]

9. Add name to General tab.

[[images/pgadmin 03 Add Name.PNG]]

10. Fill out the fields in the Connection tab.

[[images/pgadmin 04 Add Connection.PNG]]

11. Right click on the Login/Group Roles icon.

[[images/pgadmin 05 Add User.PNG]]

12. On the General tab type “equellauser” for the Name field.

[[images/pgadmin 05 Add User Name gen.PNG]]

13. On the Definition tab enter the password.

[[images/pgadmin 05 Add password.PNG]]

14. On the Privileges tab make sure and enable login.

[[images/pgadmin 05 Add Role.PNG]]

15. Right click on the Databases icon => Create => Database.

[[images/pgadmin 06 Add Database.PNG]]

16. On the General tab type “equella” for Database field and select “equellauser” from the owner dropdown. Then click save.

[[images/pgadmin 07 Add Database name.PNG]]

### Install libtinfo5

1. Libtinfo5 is sometimes missing from the build.

`$ sudo apt install libtinfo5`

### Install npm

`$ sudo apt install npm`

### Install Nodejs

Nodejs is necessary for the project

`$ sudo apt install nodejs`

### Install ImageMagick

1. Open a terminal window and type the following.

`$ sudo apt update`

2. Make note of the location where ImageMagick was installed.

`$ whereis convert`

[[images/im 01 magick.png]]

### Install Git

Run the command. (Some of these instructions were copied directly from GitHub Docs.)
[Click here for Github docs](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

`$ sudo apt-get install git`

### Install Intellij

`$ sudo snap install intellij-idea-educational --classic`

### Generate an SSH key and Add it to the ssh-agent

1. Ask for access to the BYUI openEquella repository in GitHub or fork your own branch.

2. Generate a new SSH key (this is necessary to check the code in and out from GitHub. Open a terminal and run the command below.

`$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

output: `Generating public/private rsa key pair.`

3. When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

`> Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]`

4. At the prompt, type a secure passphrase. For more information, [see "Working with SSH key passphrases".](https://docs.github.com/en/articles/working-with-ssh-key-passphrases)

`> Enter passphrase (empty for no passphrase): [Type a passphrase]`
`> Enter same passphrase again: [Type passphrase again]`

5. Now you just add the SSH key to the ssh-agent. To do this start the ssh agent in the background.

`$ eval "$(ssh-agent -s)"`
`> Agent pid 59566`

6. Now add the SSH private key to the ssh-agent. Use the same name that you specified in step four (id_rsa)

`$ ssh-add ~/.ssh/id_rsa`
`> Enter passphrase for /home/developer/.ssh/id_rsa`

### Add the ssh key to your openEQUELLA GitHub Repository

1. Navigate to your .ssh directory and type the following:

`$ cat id_rsa.pub`

[[images/github/02 copy key.png]]

2. Highlight the ssh key, right click and select “copy”.

[[images/github/03 copy key2.png]]

3. Login to your GitHub account and go to the openEQUELLA GitHub repository. Then right click on the profile icon in the upper right hand corner of the screen and select “Settings”

[[images/github/01 settings.png]]

4. Click on SSH and GPG keys.

[[images/github/04 copy key2.png]]

5. Click on the “New SSH Key” button.

[[images/github/06 new key.png]]

6. Give the ssh key a name, and past the key into the Key field. Then click the “Add SSH key” button.

[[images/github/07 paste key.png]]

### Clone the openEQUELLA Repository

1. Navigate to the home page of the openEQUELLA repository and click on the green “Code” button. Then copy the git command to “Clone with SSH”.

[[images/clone/01 get code.png]]

2. From the command line:
a. Navigate to your home directory.
b. Create a directory where you will store your git repositories
c. Configure your git name and email
d. Clone the openEquella repository

`$ cd /home/developer`
`$ mkdir git_proj`
`$ git config --global user.name “mjm”`
`$ git config --global user.email matjmiles@gmail.com`
`$ git clone git@github.com:matjmiles/openEQUELLA.git `

[[images/clone/03 clone2.png]]

### Install SBT

SBT is used to make the project. Because we installed sdkman to install Java, we can also use sdkman to install SBT, follow the commands below.

`$ sdkman install sbt`

###Create a New Branch of openEQUELLA in Git

1. It’s best not to make changes directly to the develop branch. So create a new branch in Git.

Verify you are on currently on the develop branch.

`$ git branch --show-current`

[[images/clone/05 git ssh.png]]

2. Associate the originating openEQUELLA repo with your fork.

`$ git remote add upstream git@github.com:apereo/openEQUELLA.git`

3. Verify you are using SSH and have the upstream repository set.

`$ git remote -v`

[[images/clone/05 git ssh.png]]

4. Make sure your develop branch is up to date.

`$ git pull`
`$ git push`

5. Create the new branch and switch to the new branch in a single command.

`git checkout -b enhancement1`

[[images/clone/06 git new branch.png]]

`git remote set-url origin git@github.com:matjmiles/openEQUELLA.git`

### Import sbt project into Intellij

1. An easy way to make sure your dependencies are updated is to open the openEquella Respository as an sbt project. Intellij will prompt you to update your dependencies. To do this launch Intellij and click on “Open or Import.”

[[images/intellij/01 import proj.png]]

2. Navigate to build.sbt and click ok.

[[images/intellij/02 sbt file.png]]

3. Click “Open as Project”

[[images/intellij/03 open as project.png]]

4. If you have messages in the Event Log prompting you to update dependencies, go ahead and update them.

### Compile and Run openEQUELLA Server

1. In order to compile you will probably. If you don't have enough RAM on your host OS, please bring your max heap config down to 3G ( 3072 via the -mem in **.sbtopts** ). 

NOTE:  You cannot see **.sbtopts** from the file manager. You must access the file from a terminal windows. Navigate to the openEquella directory and type the command below.

[[images/intellij/04 sbtopts.png]]

2. Change the value of –mem to 2048 then cntr + o to save changes to the file. Then cntr + x to close the file.

[[images/intellij/05 set mem.png]]

3. cd to the {Equella repo} directory then run the command below.

`$ sbt installerZip`

4. Run the commands in the following order. 

`Sbt:Equella> compile`
`Sbt:Equella> prepareDevConfig`

5. (not in the sbt shell) access the Dev/learningedge-config folder using the file manager, and update **hibernate.properties** and **mandatory-config.properties** to match your environment (postgresql database and admin.url. You can edit the files by right clicking on each one and selected “Open With Text Editor.”

**hibernate.properties**
[[images/intellij/07 hibernate config.png]]

**mandatory-config.properties**
[[images/intellij/08 mand config.png]]

6. Go back to a terminal window and navigate to the root directory of the repository and type the command below.

`$ sbt equellaserver/run`

7. The Equella server has successfully started when the output from the terminal looks like the screen below.

[[images/intellij/09 equella server start.png]]

8. Access the URL you set for the admin.url in mandatory-config.properties in the browser. In this case I have set the admin.url to http://localhost:8080. Complete the setup screen (arbitrary values for email / smtp servers are ok).

[[images/postgresql/eq 01 install.png]]

9. You may have to wait a few minutes at this screen. If the screen does not refresh after 30 minutes, you may need to manually refresh.

[[images/postgresql/eq 02 install.png]]

10. On this screen click on the “Initialize Database” button.

[[images/postgresql/eq 03 initialize.png]]

11. You may have to wait 15 minutes or more on this screen. If after 30 minutes the screen does not change, shutdown the equellaserver process from the terminal and restart.

[[images/postgresql/eq 04 initialize.png]]

12. Download the sample institution file to your local machine. [Click here to download Sample Institution File](https://raw.githubusercontent.com/wiki/matjmiles/openEQUELLA/vanilla-scrubbed-institution.tgz)

13. Navigate to the location where you downloaded the institution file and import the file. Do not unzip or untar the file.

[[images/postgresql/add institution.png]]

14. Configure the institution. I have chosen port 8080 as to not conflict with port 80 which is the default port for http protocol. Add a password Click “Import new Institution.”
 
[[images/postgresql/eq 01 install.png]]

15. Enter the password you created previously when configuring the institution.

[[images/postgresql/eq 10 authenticate.png]]

16. Confirm password

[[images/postgresql/eq 10 confirm password.png]]

17. Institution will be imported. When completed scroll to the bottom of the screen and press “Return to System Management.”

[[images/postgresql/eq 11 return.png]]

18. Login

[[images/postgresql/eq 12 login.png]]

19. Use the login TLE_ADMINISTRATOR with the institution password you created previously.

[[images/postgresql/eq 13 TLE.png]]


