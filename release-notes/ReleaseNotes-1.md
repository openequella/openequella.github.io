# Release Notes for the open source version of Equella
## PLEASE NOTE:  The major.minor version number for the 'open source' version of Equella has not been decided yet.

*_In Progress_*

6.5-GA is the initial Open Source version of Equella.  Changes have focused on scrubbing the code to align with open source licensing.  The build process was also overhauled to use sbt (Simple Build Tool) and not require an IDE (Integrated Development Environment) to build / develop code.  No new features or bug fixes were included.

This is meant to detail the functional changes exposed to the user experience.  Backend changes and testing notes are in the release-testing-guides for this release.

### Office Integration Download Removed
Tracked in issues #98 and #102.  Equella has the ability integrate with Microsoft Office products to enable a smoother editing experience.  Due to licensing issues, and the inherit issues of using an older interop DLL on more modern installs of Office, the download of the Office Integration msi package has been removed from the Equella Web UI, and the DLLs in question have been removed from the git repo.  The functionality is still useful, so documentation has been provided for users to build and access this functionality as needed.

### Centralized Documentation
Tracked partially in issues #25, #101, and #104.  All documentation for Equella and Equella-related applications (anything under the 'equella' github project) has been moved into the equella.github.io repo.  This includes the integration / scripting pack historically available from the Server Admin Download page.  

### HTML Editor Plugins
Tracked in issue #100. ....Working pending...

### Start Scripts are by Default, Executable
Tracked in issue #96.  The Linux scripts to run Equella now automatically are set to be executable.

### Backend changes to build process, dependencies, and commercial terminology
In order to create a more streamlined application that is not tied to an IDE, the Equella build process has been changed from ANT to SBT.  In order to align with the open source model, several dependencies were removed or changed, as well as hard-coded words denoting the last commercial owner and last commercial website of Equella were removed.  Any functional differences have been called out below.

### Conversion Service Library Changed
Tracked in issue #56.  The conversion service for Office MIME types has been switched to a different solution (Tika) to align with overall licensing goals.  The conversion results are not as clean as they used to be, so enhancements are welcome!

### The 'do not reply' Email Address of the Equella Mailer can now be Configured
Tracked in issue #72.  System admins now configure the 'do not reply' email address via the Server admin pages

### Custom Server Hosting Upgrade Binaries Removed 
Tracked in issue #74.  Historically, the Equella Manager had the option to pull Equella upgrade binaries from a centralized, custom hosting server.  This functionality has been removed.  Upgrade binaries will be tracked in the github Equella releases tab.

### Default LTI External Tool Contact for Equella is now Configurable
Tracked in issue #71.  When an LTI attachment that added to an item, at times it's considered 'default', and historically, a default consumer contact email of support@equella.com was used.  Now, you can configure this behavior by adding external.tool.contact.email into optional-config.properties.

### Kaltura Turned into an Optional Dependency
Tracked in issue #55.  The Kaltura Java client API is not Apache-license-friendly.  It was moved into it's own repo, but can easily be integrated back into Equella per client.  Additional effort is noted to turn this into truly a 'drop in' plugin.

### Oracle DB Driver is Optional
Due to licensing issues, the Oracle DB Driver cannot be included in the standard build process.  Use of an Oracle DB can be achieved by editing the build configuration, and then generating a new set of Equella binaries.

### Equella No Longer Supports eCommerce
eCommerce has been removed from Equella.

### Custom Salt for Passwords
Equella now supports passing in the equella.salt property to salt passwords with.  The default is the original, hardcoded salt.

### No License Needed
Equella no longer requires an 'Equella License Key' to run.

### LMS
* Canvas integration now uses Canvas content item placements which allows Equella links to open in a new window
* Users can edit the names of selected resources that will be added to the LMS in a selection session
* A new checkbox "Select all attachments" has been added to the "Add to External System" page.
* Links to content on the Find Uses page will open in a new window.
* Within the Course Builder in Brightspace, the user must select a module to edit before launching the integration 
session in Equella. Equella did not automatically select the module selected in Brightspace in the Equella selection session.
* A new permission is required to start an integration selection session in Equella (still buggy).  This permission will be granted to logged in users by default.

### Server Admin / Backend
* Admins can alter the number of attempts the URL checker task will make before it marks a URL as disabled. urlChecker.triesUntilDisabled = 1000 in optional config properties.
* Fix concurrency issue when importing an institution (primarily an issue with SQL Server).  This has been in release notes as fixed before, but it was still an issue.
* The TLE_ADMINISTRATOR account is not required to accept DRM agreements.

### Misc
* Users were able to access inactive copyright attachments via using a direct URL (e.g. a link was obtained when the attachment was active -> that link still works for the user when the attachment becomes inactive)
* The item moderation REST API would return a random workflow node status each time it was invoked.
* On the DRM acceptance page, links to item history and item versions no longer show.
