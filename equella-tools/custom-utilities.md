# Custom Utilities

Custom Utilities that may be valuable for supporting Equella include:

- Configuring Apache and Tomcat
- Equella Ping Utility
- Code Releases / Tags
- Institution Surgery
- Log Review 2
- OAuth Tester
- Referenced URL Remover
- Soap Item Resave
- Workaround to Untrusted SSL Certs
- Equella File and Directory Watcher
- Open File Count Tester
- CPU Load Logger

## Equella File and Directory Watcher

Eqwatcher is a daemon that watches specified files/folders for changes( Create and Delete for now) and logs these changes in the log file for review. It's configuration uses a .ini file. It can recursively monitor directories and It's written in Python.

**Requirements**
You need Python 2.7 and the pyinotify library.

In Ubuntu you can install these with:

```bash
sudo apt-get install python python-pyinotify* *
```

**Configuration**
eqwatcher.ini file contains configuration details. You can also specify the path to the config file as a command line parameter using the --config option.

If you edit the ini file you must restart the daemon for it to reload the configuration.

**Starting the Daemon**
Start the daemon with: ./eqwatcher.py start
Stop it with: ./eqwatcher.py stop
Restart it with: ./eqwatcher.py restart
If you don't want the daemon to fork to the background, start it with
./eqwatcher.py debug

## Open File Count Tester

Gives an idea of how the open file descriptor counts for Java are behaving.

Inputs:

- testdir: base directory for test file creation. Needs to exist.
- maxfiles: number of files to create (this is not the same as file descriptors - there's a correlation, but I couldn't find a direct correlation)

Sample execution:

```bash
java -jar openFileCountTester.jar testdir maxfiles
```

The latest jar is openFileCountTester.jar.

History:
Originally developed for support commercial Equella to help with the open file count issues.

It was on a local Ubuntu 12.04 install and it showed the following (note - even though 'ulimit -an' said I could have 1024 files on my local Ubuntu, my tester app showed it to actually be 4096). The method I used in the Java code does not give the same number of open files as lsof gives, but it looks to prove the ulimit config change, and app will fall over if you ask it to create too many files...

I suggest for each Ubuntu version in the specific environment (Prod, Staging, etc) that you plan to make the config change, use this tester jar to
confirm the ulimit config works:

- It sets the max open file config as expected (as per the tester app output)
- The tester app fails when the number of open test files is greater than the ulimit
- The tester app succeeds with a number of open test files somewhat less than the ulimit

Once you've confirmed the ulimit config change needed, add it near the top of the tomcat script (or equellaserver script depending on the EQ
version), and restart the node(s).

Examples of confirming the ulimit config works / fails:

```
beachy@devbox:/media/sf_sharedFolderUbuntu/openFileCountTester$ ulimit -Hn 1000; java
-jar openFileCountTester.jar ./test/ 1000
bash: ulimit: open files: cannot modify limit: Invalid argument <--- Shows that -Hn
fails to work.
Attempting to open up [1000] files (note - the resulting open file count will be
higher).
Number of open fd: 1005
Number of max fd: 4096
beachy@devbox:/media/sf_sharedFolderUbuntu/openFileCountTester$ ulimit -Sn 1000; java
-jar openFileCountTester.jar ./test/ 1000
Attempting to open up [1000] files (note - the resulting open file count will be
higher).
Number of open fd: 1005
Number of max fd: 4096 <--- Looks like -Sn doesn't work.
beachy@devbox:/media/sf_sharedFolderUbuntu/openFileCountTester$ ulimit -n 1000; java
-jar openFileCountTester.jar ./test/ 1000
Attempting to open up [1000] files (note - the resulting open file count will be
higher).
Exception in thread "main" java.lang.reflect.InvocationTargetException
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
at
sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
at java.lang.reflect.Method.invoke(Method.java:497)
at org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:58)
Caused by: java.io.IOException: Too many open files
at java.io.UnixFileSystem.createFileExclusively(Native Method)
at java.io.File.createNewFile(File.java:1012)
at com.pearson.eqas.utilities.open_file_count.Driver.main(Driver.java:34)
... 5 more <--- Shows that -n sets the value, and the Java app fails with the
expected error.
beachy@devbox:/media/sf_sharedFolderUbuntu/openFileCountTester$ ulimit -n 1000; java
-jar openFileCountTester.jar ./test/ 900
Attempting to open up [900] files (note - the resulting open file count will be
higher).
Number of open fd: 905
Number of max fd: 1000
beachy@devbox:/media/sf_sharedFolderUbuntu/openFileCountTester$
```

## CPU Load Logger

Takes 5 samplings of the total CPU usage, a snapshot of the system load, and outputs it to a file in /usr/local/eqsupport every minute. Meant to be run as a cron job, but you can uncomment the while loop and run the bash script manually.

To run it as a cron job on Ubuntu, add the following into /etc/crontab at the end of the file right before the '#' (it will run the script every minute):

```
* * * * * root bash /usr/local/eqsupport/cpu-load-logger.sh
```

The output of the file has the format

```
<<date>>,<<CPU Usage over 10 seconds>>, <<System Load - avg over 1 minute>>, <<System Load - avg
over 5 minutes>>, <<System Load - avg over 15 minutes>>, <<raw output of cat /proc/loadavg>>
```

```
Thu Jul 2 20:17:11 MDT 2015,1,0.01,0.02,0.11,0.01 0.02 0.11 1/280 11626
Thu Jul 2 20:18:11 MDT 2015,1,0.01,0.02,0.11,0.01 0.02 0.11 3/280 11661
Thu Jul 2 20:19:11 MDT 2015,2,0.00,0.01,0.10,0.00 0.01 0.10 2/280 11697
```
