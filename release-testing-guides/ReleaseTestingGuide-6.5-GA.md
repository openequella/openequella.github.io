# Testing Guide for Equella 6.5-GA

*_In Progress_*

Please refer to the 6.5-GA release notes for more details.

### #104 Scripting pack
* Now in the master docs repo.
* self-creation of the javadoc in issues #105 and #106 (still pending)

### #98 / #102 Office Integration

* Equella has the ability integrate with Microsoft Office products to enable a smoother editing experience.  Due to licensing issues, and the inherit issues of using an older interop DLL on more modern installs of Office, the download of the Office Integration msi package has been removed from the Equella Web UI, and the DLLs in question have been removed from the git repo.  The functionality is still useful, so documentation has been provided for users to access this functionality.

### #101 / Documentation / example files moved to the master docs repo

### #100 HTML Editor Plugins

* Working pending...

### #96 (Make installer set executable bit for files that need it)

* After a Linux install, the sys admin no longer needs to chmod the jsvc, manager, and equellaserver scripts
* Functional testing:  N/A
* Performance testing: N/A
* Regression testing:  install Equella, and then ensure you can start / stop the equellaserver and manager with your typical 'Equella' user.

### #95 (Scrub equella-deps)
* Several dependencies had to be changed / removed
  * jnlp (admin console launcher) was included in a different way
  * reporting - an older 6.2 reporting-common dependency was removed.  
* Functional testing:  
  * Ensure the admin console launches and basic CRUD ops on entities (ie collections) work
  * Functional testing:  Confirm the reporting suite of tests to ensure all Data Source and Data Source types can be run, both from the BIRT Report Designer and directly from Equella.
* Performance testing: N/A
  * Confirm no lag in running reports
* Regression testing: N/A

### #84 Re-implement file upload features
File uploads were re-implemented using AJAX instead of multipart and client side progress instead of server side.
* Regression testing:
  * Ensure progress bars still work
  * Make sure drag and drop still works
  * Ensure that any restrictions on file size and mime type still work (wizard control)

### #83 (Upgrade commons-beanutils)
Need to review for testing impact.  No UI / functionality changes

### #56 (Remove dhfjava dependency)
The functionality was changed to not rely on dhfjava.  Instead it uses a Tika open source library.  The results are not as clean as dhfjava, so enhancements are welcome!
* Functional testing
  * Confirm the conversion service can be disabled
  * Confirm the conversion service can be enabled, and is usable
* Regression testing - N/A
* Performance testing
  * Try converting a 10 MB file on 6.4-QA3, and the same file on 6.5-GA.  

### #72 (Allow configuration of the historically hardcoded donotreply@equella.com email address)
System admins now configure the 'do not reply' email address via the Server admin pages
* Functionality testing:
  * Confirm the email address can be changed, and when an email is sent from Equella, the 'do not reply' sender field is set to the custom / configured email address.
* Regression testing - N/A
* Performance testing - N/A

### #74 (Remove the UpgradeProxyWeb python server)
The functionality point the Equella Manager at a server that provides the latest Equella update has been removed
* Functional testing
  * Ensure the Equella Manager has no mention of an 'upgrade server'
* Regression testing
  * Ensure the Equella Manager can still perform updates from a local upgrade binary.
* Performance testing - N/A

### #73 / #60 General build changes / scrubbing of commercial terminology
Hard-coded words denoting the last commercial owner and last commercial website of Equella were removed.  Generally, resources (lang bundles and images) functionally haven't changed, but how they are bundled into Equella did change.  
* Functional testing
  * Ensure 'Pearson', and 'equella.com' don't show up, and instead have been replaced by meaningful alternatives for the open source community.
* Regression testing
  * Ideally, review all places strings and images are presented to the user, and ensure no missing language strings (???my.lang.string???) or errors finding images occur.
* Performance testing - N/A

### #71 ( Allow configuration of LTI external tool contact for Equella )
When an LTI attachment that added to an item, at times it's considered 'default', and historically, a default consumer contact email of support@equella.com was used.  Now, you can configure this behavior by adding external.tool.contact.email into optional-config.properties.
* Functional testing
  * Ensure absent, blank, malformed email, and good email configured values work as expected in this userflow.
* Regression testing
  * Ensure previously configured 'default' LTI attachments have the expected consumer  contact email when being edited.
* Performance testing - N/A

### #67 ( Guice recipes library changes )
Looks like a Jsr250Module was added.  ??? What impact does this have?
* Functional testing - N/A
* Regression testing - N/A
* Performance testing - N/A

### #64 ( Remove image processing from conversion service )
??? What impact, if any, does this have?
* Functional testing - N/A
* Regression testing - N/A
* Performance testing - N/A

### #62 ( Upgrade flamingo )
Flamingo was upgraded to streamline dependencies from Maven.
* Functional testing
  * CRUD operations in the File Manager applet
  * ??? Specific browsers or other test cases?
* Regression testing - N/A
* Performance testing - N/A

### #61 ( SBT build loose ends )
Work on jar signing, in place editor applet, BIRT, dev config setup, and ant to sbt build process.
* Functional testing
  * CRUD operations in the Admin Console
  * BIRT testing is handled via #95.  No other changes in functionality.
  * Ensure a new commit bumps the rXYZ version number and can upgrade to that version.
  * ??? other test cases?
* Regression testing - N/A
* Performance testing - N/A

### #59 ( Replace use of hibernate-beanlib )
`beanlib-hibernate` was used for cloning a whole hibernate object tree but it had code which we no longer
had the source too, so it was replaced with the use of xstream + special hibernate converters.

* Regression testing:
  * Clone a workflow
  * Clone an item (attachments and navigation tree in particular)
  * Import/Export/Clone institution

### #55 ( Research need for Kaltura and replace/remove )
The Kaltura Java client API is not Apache-license-friendly.  It was moved into it's own repo, but can easily be integrated back into Equella per client.  Additional effort is noted to turn this into truly a 'drop in' plugin.
* Functional testing
  * Follow the tests here for Equella with and without Kaltura:  https://equella.github.io/tests/migration/64QA3-to-OS/TestEnablingKaltura.html
* Regression testing
  * Start with Equella 6.4-QA3 (which has Kaltura enabled), upgrade to Equella without Kaltura, and then upgrade to Equella with Kaltura, following the guide here:  https://equella.github.io/tests/migration/64QA3-to-OS/TestEnablingKaltura.html
* Performance testing - N/A

### #54 ( Make Oracle DB driver optional )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### #53 ( Make Blackboard dependencies optional )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### #52 ( Hibernate classloading issues )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### #51 ( Jafer z3950 / SRW library conflict )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### #44 / #46 ( Installer / Upgrader built via SBT )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing:
  * Installer works
  * Upgrade manager testing from pre 6.5-GA to 6.5-GA+ upgrades

### #42 ( Don't try to download reference-language-pack.zip from maestro.equella )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### #41 ( Remove eCommerce )
* Functional testing:
  * Upgrade/Import from an EQUELLA which had some eCommerce data
* Performance testing: TBD
* Regression testing: TBD

### #37 ( Create a "learningedge-config" eclipse project and ant task for easier dev config setup )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing:  TBD

### #33 ( Upgrade ROME )
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing:
  * Test RSS and ATOM feeds

### #27 ( Work out what to do about hardcoded SHA256 hash salt )
* Functional testing:
  * Set the equella.salt property to various values and test
* Performance testing: TBD
* Regression testing:
  * Ensure the default salt property is the original hardcoded salt.

### #5 ( Remove license validation components )
* Functional testing:  
  * Ensure Equella runs without asking for a license
* Performance testing: TBD
* Regression testing: TBD

### Fixes arising from cherry pick
https://github.com/equella/Equella/commit/64e85c2b4560580e517474c302b3d543ce79c34f
* Functional testing:  N/A
* Performance testing: N/A
* Regression testing: 
  * Ensure Course and Activation REST endpoints are available and a simple request works on either.
  * Ensure the "self" link on an activation is correct.

### Upgrade javax.servlet, flickr, datatools, sqlserver jdbc, kalturaclient
https://github.com/equella/Equella/commit/2b18a3707c31a5c643803560570073db445e8d3c
* Functional testing:  TBD
* Performance testing: N/A
* Regression testing: 
  * Very high level Reporting, Kaltura and SQL Server testing (ie. ensure they work at all)

### Upgrade srw servlet
https://github.com/equella/Equella/commit/e2ab5bd7a6574b77b3abddd91b2802574dd9ad71
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### Update hikaricp
https://github.com/equella/Equella/commit/ec46ea0b0eedd814e308cf5239b092f10a0d8111
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### Use latest jna
https://github.com/equella/Equella/commit/be29f0e80e8db106216301aac21b7563e8ddbaa1
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### Option to self-generate a keystore when building or use a previously
https://github.com/equella/Equella/commit/8f1201bf561bfbf340dbedcfa2f1c88d3f0888d7
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### "Use a custom param for the course ID" in Canvas
* Functional testing:  
  * Canvas integration using activations in Equella.  Ensure both the "course label" and "SIS ID" fields on the Canvas course are passed through to Equella (you will need to test one at a time since one overrides the other).  When activating an attachment the course will already be selected.
* Performance testing: N/A
* Regression testing: N/A

### EQ-31 ensure IMS/SCORM resources containing query strings will work
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing: TBD

### EQ-32 batched audit log removal
* Functional testing:  N/A
* Performance testing: Generate a massive audit\_log\_entry table of old entries in 6.4 and run "delete audit logs" task.  See how responsive the login for other users is (login auditing must be turned on).  Do the same on 6.5.
* Regression testing:  Make sure it works :)  (ie audit log table is cleared of old entries)

### EQ-33 don't use the public bookmark, use the actual params
* Functional testing:  
  * Ensure permissions are setup so users must login to see search page.  Use Share functionality on a search page (try various filtering and advanced search options to generate a URL with many query string parameters).  Copy the URL, logout of Equella and paste the URL into the browser -> User is forced to login before being directed to search page with all the parameters maintained.
* Performance testing: N/A
* Regression testing: N/A

### EQ-34 use string URLs instead of URL URLs
* Functional testing:  TBD
* Performance testing: TBD
* Regression testing:
  * Access the file manager, and perform CRUD operations.

### EQ-2045 use LIST_COURSE_INFO priv, not LIST_COURSE
* Functional testing:  
  * On the Course REST endpoint, provide a "code" query string parameter and sure the relevant course is returned.  e.g. /api/Course/?code=EQ101  (user must have LIST\_COURSE\_INFO privilege)
* Performance testing: N/A
* Regression testing: N/A

### EQ-2038 course API refactor
Activation, Course,
* Functional testing:  N/A
* Performance testing: N/A
* Regression testing: 
  * General Course and Activation REST endpoint testing (covered by "Fixes arising from cherry pick" already)

### EQ-1045 (et al) refactors of entity rest services
One of [VIEW_SECURITY_TREE, EDIT_SECURITY_TREE] is required
* Functional testing:  
  * Pick an entity type (e.g. Collection) and test that error strings are being returned correctly on the REST endpoint.  Errors to test are: 404 on a collection, 404 on a collection lock, attempt to edit a locked collection, edit security on a collection and leave the "who" field on a permission blank.
* Performance testing: N/A
* Regression testing: N/A

### EQ-2026 Do some validation on entities. don't let entity editing be a free-for-all
* Functional testing:  
  * Pick an entity type (e.g. Collection) and try to change its UUID via the REST API -> Should error
  * Create an entity and try to set the owner, createdDate and modifiedDate fields. -> Creation should succeed, but when retrieving the collection again it should not show the values for those fields that you passed in (they should be the actual owner, modified date etc)
  * Do the same again, but pass in a parameter ?import=true (note: you need to be logged in as TLE\_ADMINISTRATOR to do this) ->  Fields should be set to the values you passed in.
  * Edit/create a course via the REST API but leave the code field blank. ->  Should receive a 400 response
* Performance testing: N/A
* Regression testing: TBD

### Still need to document...
* Canvas integration now uses Canvas content item placements which allows Equella links to open in a new window
* Users can edit the names of selected resources that will be added to the LMS in a selection session
* A new checkbox "Select all attachments" has been added to the "Add to External System" page.
* Links to content on the Find Uses page will open in a new window.
* Within the Course Builder in Brightspace, the user must select a module to edit before launching the integration
session in Equella. Equella did not automatically select the module selected in Brightspace in the Equella selection session.
* A new permission is required to start an integration selection session in Equella (still buggy).  This permission will be granted to logged in users by default.
* Admins can alter the number of attempts the URL checker task will make before it marks a URL as disabled. urlChecker.triesUntilDisabled = 1000 in optional config properties.
* Fix concurrency issue when importing an institution (primarily an issue with SQL Server).  This has been in release notes as fixed before, but it was still an issue.
* The TLE_ADMINISTRATOR account is not required to accept DRM agreements.
* Users were able to access inactive copyright attachments via using a direct URL (e.g. a link was obtained when the attachment was active -> that link still works for the user when the attachment becomes inactive)
* The item moderation REST API would return a random workflow node status each time it was invoked.
* On the DRM acceptance page, links to item history and item versions no longer show.
