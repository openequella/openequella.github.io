# Testing Guide for Equella 6.5-GA

*_DRAFT_*

Please refer to the [6.5-GA Release Notes](https://github.com/equella/equella.github.io/blob/master/release-notes/ReleaseNotes-6.5-GA.md) for more details.

### #104 Scripting pack

Now in the master docs repo.  Self-creation of the javadoc in issues #105 and #106 (still pending)

__Testing:__
* TestLink: eqos-1936
* Ensure the [documentation](https://github.com/equella/equella.github.io/tree/master/example-scripts) is available and makes sense.

### #98 / #102 Office Integration

Equella has the ability integrate with Microsoft Office products to enable a smoother editing experience.  Due to licensing issues, and the inherit issues of using an older interop DLL on more modern installs of Office, the download of the Office Integration msi package has been removed from the Equella Web UI, and the DLLs in question have been removed from the git repo.  The functionality is still useful, so conceptual documentation has been provided for users to build this functionality.

__Testing:__
* TestLink: eqos-1937, eqos-1938
* Ensure the [documentation](https://github.com/equella/equella.github.io/blob/master/guides/OfficeIntegrationGuide.md) is available and makes sense.
* Ensure the download link has been removed from the Scrapbook > Upload files > 'blue pulldown' screen, and the new language makes sense.

### #101 / Documentation / example files moved to the master docs repo

__Testing:__
* TestLink eqos-1939, eqos-1940
* Ensure the [documentation](https://github.com/equella/equella.github.io/blob/master/README.md) is linked in the main readme guides and makes sense.

### #100 HTML Editor Plugins

Another documentation shift to the main docs repo.  

__Testing:__
* TestLink eqos-1941 + regression tests flagged
* Ensure the HTML plugins below are documented [here](https://github.com/equella/equella.github.io/tree/master/example-scripts/HTML-editor-plugin).
  * after the deadline
  * ice
  * wiris
  * example plugin

### #96 (Make installer set executable bit for files that need it)

After a Linux install, the sys admin no longer needs to chmod the jsvc, manager, and equellaserver scripts

__Regression testing:__
* TestLink:  Regression test flagged.
* Install a fresh Equella instance, and then ensure you can start / stop the equellaserver and manager with your typical 'Equella' user without needing to run chmod.

### #84 Re-implement file upload features

File uploads were re-implemented using AJAX instead of multipart and client side progress instead of server side.

__Regression testing:__
TestLink eqos-1687, eqos-1688, eqos-1689, eqos-1690, eqos-1691, eqos-1692, eqos-1693, eqos-1694, eqos-1695, eqos-1696, eqos-1697, eqos-1698 
* Ensure progress bars still work
* Make sure drag and drop still works
* Ensure that any restrictions on file size and mime type still work (wizard control)

### #56 (Remove dhfjava dependency)

The functionality was changed to not rely on dhfjava.  Instead it uses a Tika open source library.  The results are not as clean as dhfjava, so enhancements are welcome!

__Functional testing:__
* Confirm the conversion service can be disabled
* Confirm the conversion service can be enabled, and is usable

__Performance testing:__
* Try converting a 10 MB file on 6.4-QA3, and compare the speed of the same file converted on 6.5-GA.  

### #72 (Allow configuration of the historically hardcoded donotreply@equella.com email address)

System admins now configure the 'do not reply' email address via the Server admin pages.

__Functional testing:__
* Confirm the email address can be changed, and when an email is sent from Equella, the 'do not reply' sender field is set to the custom / configured email address.

### #74 (Remove the UpgradeProxyWeb python server)

The functionality point the Equella Manager at a server that provides the latest Equella update has been removed.

__Functional testing:__
* Ensure the Equella Manager has no mention of an 'upgrade server'

__Regression testing:__
* Ensure the Equella Manager can still perform updates from a local upgrade binary.

### #73 / #60 General build changes / scrubbing of commercial terminology

Hard-coded words denoting the last commercial owner and last commercial website of Equella were removed.  Generally, resources (lang bundles and images) functionally haven't changed, but how they are bundled into Equella did change.

__Functional testing:__
* Ensure 'Pearson', and 'equella.com' don't show up anywhere in the Equella application, and instead have been replaced by meaningful alternatives for the open source community.

__Regression testing:__
* Ideally, review all places strings and images are presented to the user, and ensure no missing language strings (???my.lang.string???) or errors finding images occur.

### #71 ( Allow configuration of LTI external tool contact for Equella )

When an LTI attachment was added to an item, at times it's considered 'default', and historically, a default consumer contact email of _support@equella.com_ was used.  Now, you can configure this behavior by adding external.tool.contact.email into _optional-config.properties_.

__Functional testing:__
* Ensure absent, blank, malformed email, and good email configured values work as expected in this userflow.

__Regression testing:__
* Ensure previously configured 'default' LTI attachments have the expected consumer contact email when being edited.

### #62 ( Upgrade flamingo )

Flamingo was upgraded to streamline dependencies from Maven.

__Functional testing:__
TestLink eqos-3813
* CRUD operations in the File Manager applet

### #59 ( Replace use of hibernate-beanlib )

```beanlib-hibernate``` was used for cloning a whole hibernate object tree but it had code which we no longer
had the source too, so it was replaced with the use of xstream + special hibernate converters.

__Regression testing:__
Regression tests tagged in TestLink
* Clone a workflow
* Clone an item (attachments and navigation tree in particular)
* Import/Export/Clone an institution

### #55 / #107 ( Kaltura licensing issues )

The Kaltura Java client API is not Apache-license-friendly.  It was moved into it's own repo, but can be integrated back into Equella per client by building the Equella and Kaltura source repos together into an upgrade binary.

__Functional testing:__
* Follow the tests here for Equella with and without Kaltura:  https://equella.github.io/tests/migration/64QA3-to-OS/TestEnablingKaltura.html
  * Note:  You'll need to rebuild Equella with the Kaltura code included

__Regression testing:__
* Start with Equella 6.4-QA3 (which has Kaltura enabled), upgrade to Equella without Kaltura, and then upgrade to Equella with Kaltura, following the guide here:  https://equella.github.io/tests/migration/64QA3-to-OS/TestEnablingKaltura.html

### #54 ( Make Oracle DB driver optional )

Oracle DB driver is no longer included by default.  To run these tests, you'll need a build of Equella with Oracle drivers included.

__Regression testing:__
* Ensure all DB operations using Oracle work.  These include:  CRUD operations for items, DB migrations, taking DBs offline, adding secondary DBs / reporting DBs, running reports in BIRT and in Equella.

### #44 / #46 ( Installer / Upgrader built via SBT )

Installers and upgraders are all built via SBT.  

__Regression testing:__
* Run the installer on each supported operating system.  Ensure you can launch Equella.
* Upgrade Equella from a previous (commercial) release to this release.  

### #41 ( Remove eCommerce )

eCommerce was never used by clients in Equella (since it was an option when generating commercial licenses).  

__Regression testing:__
* Ensure there is no mention of eCommerce features in the collection definition editors, Settings page, Admin Console, or ACLs; and all associated database tables have been removed.

### #33 ( Upgrade ROME )

__Regression testing:__
* Test RSS and ATOM feeds

### #27 ( Work out what to do about hardcoded SHA256 hash salt )

__Functional testing:__
* Set the ```equella.salt``` property to various values and test logging in with a
password

__Regression testing:__
* Ensure the default salt property is the original hardcoded salt by importing an
existing institution and logging in

### #5 ( Remove license validation components )

__Functional testing:__
* Ensure Equella runs without asking for a license
* Ensure no mention of licensing is in the Server Admin pages

### Fixes arising from cherry pick

https://github.com/equella/Equella/commit/64e85c2b4560580e517474c302b3d543ce79c34f

__Regression testing:__
* Ensure Course and Activation REST endpoints are available and a simple request works on either.
* Ensure the "self" link on an activation is correct.

### Upgrade javax.servlet, flickr, datatools, sqlserver jdbc, kalturaclient

https://github.com/equella/Equella/commit/2b18a3707c31a5c643803560570073db445e8d3c

__Regression testing:__
* Ensure the following work (can be at a high level):  Reporting, Flickr, Kaltura and SQL Server

### Upgrade srw servlet

https://github.com/equella/Equella/commit/e2ab5bd7a6574b77b3abddd91b2802574dd9ad71

__Regression testing:__  
* There is a known issue with SRW - https://github.com/equella/Equella/issues/115

### Use latest jna

https://github.com/equella/Equella/commit/be29f0e80e8db106216301aac21b7563e8ddbaa1

__Regression testing:__
* Test inplace editor applet

### Option to self-generate a keystore when building or use a previously

https://github.com/equella/Equella/commit/8f1201bf561bfbf340dbedcfa2f1c88d3f0888d7

__Regression testing:__
* Ensure you can use the existing keystore to sign jars

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

### Canvas integration now uses Canvas content item placements which allows Equella links to open in a new window
* Functional testing:
  * Add content to Canvas (from all available methods: push from Equella, navigation menu, resource selection, html editor button) and ensure the opened content opens up in a new browser tab

### Users can edit the names of selected resources that will be added to the LMS in a selection session
* Functional testing:
  * Edalex has already begun testing.  Need to test with Blackboard, Canvas, Brightspace, Moodle.  When adding content to the LMS (NOT via push from Equella method) the user is given the option to edit the names of the selected items and attachments that will appear in the LMS. For Moodle, the two main integration types should be tested (selectOrAdd and structured).

### A new checkbox "Select all attachments" has been added to the "Add to External System" page.
* Functional testing:
TestLink eqos-1945
  * On the "add to external system" item page there is a new checkbox to select all of the attachments on the item for pushing. Any LMS will do as it's just a client side script to check the boxes.

### Links to content on the Find Uses page will open in a new window.
* Functional testing:
  * Doesn't matter about which LMS is selected, just make sure that clicking on the link to the LMS content appears in a new tab.

### Course builder in brightspace not using selected module
* Functional testing:
  * Using the course builder in Brightspace, select a module/folder other than the top one.  When you launch the Equella tool, the folder list on the RHS should have the appropriate folder selected by default.

### New permission for selection sessions
* Functional testing:
TestLink eqos-1942
  * Using an LMS (should probably try all of them...) try to add content into the LMS without the INTEGRATION\_SELECTION\_SESSION permission granted. (it's actually granted by default when you upgrade to 6.5) -> should be presented with an error screen that does *not* include the Equella LHS menu.
  * Ensure that users with the permission can select and add Equella content into the LMS.
 * Regression testing:
   * After successfully adding content to the LMS, try to view the content in the LMS as a user that does *not* have the INTEGRATION\_SELECTION\_SESSION privilege (but does have relevant item viewing privs) -> Should succeed

### URL checker number of attempts
TestLink eqos-1943 eqos-1944
URL checker will disable links to external sites (e.g. Link attachments) if the URL check fails 10 times, and will send email notifications to item owners if the check fails 5 times.  This hard coded settings are now configurable in optional-config.properties
```
urlChecker.triesUntilWarning = 3
urlChecker.triesUntilDisabled = 5
```
* Functional testing:
  * Set the values to a low number and run the URL checker task several times (scheduledtasksdebug.do page).  Note that after each run you need to hack the database to set the last checked date of the URL (referenced\_url table) to something old as otherwise it will refuse to re-check. -> Ensure links are disabled and notifications are sent after the relevant number of tries.  Note that to send email notifications another task must be run to send the emails (CheckEmailsTask (?))

### SQL Server concurrency issue
* Functional testing:
  * Import institution containing referenced URLs (that don't already exist) but occur multiple times in the imported items into an Equella using a SQL Server database. -> Should succeed and not throw an error about deadlocks or stale URL objects etc
* Performance testing:
  * Unfortunately the only possible fix was to remove the concurrent import of 4 items at a time, so performance will be affected.  An institution import is not exactly something the user will sit an watch, but it should not blow out to take several hours. (unless it was already doing so...)

### The TLE\_ADMINISTRATOR account is not required to accept DRM agreements
* Functional testing:
  * When logged into Equella as TLE\_ADMINISTRATOR the user should never see a DRM agreement page on DRM protected items.

### Bypass copyright activation via direct URL bug
Users were able to access inactive copyright attachments via using a direct URL
* Functional testing:
  * Obtained a link to a copyright (e.g. CAL) protected attachment when it activated.  Then delete that activation and paste in the link copied earlier into the browser -> should receive an error saying that the attachment is not activated.

### The item moderation REST API would return a random workflow node status each time it was invoked
* Functional testing:
  * Using an item in moderation, visit the REST moderation endpoint (/api/item/[uuid]/[version]/moderation) and click the browser refresh several times ->  The returned content should stay the same and should be a valid representation of the item's current moderation status.

### On the DRM acceptance page, links to item history and item versions no longer show
* Functional testing:
  * Visit a DRM protected item in Equella and ensure there are no links on the RHS to view the item history and other similar links.

### Issues Covered in General Regression Test

* #95 (Scrub equella-deps)
* #83 (Upgrade commons-beanutils)
* #67 ( Guice recipes library changes )
* #61 ( SBT build loose ends )
* #52 ( Hibernate classloading issues )
* #51 ( Jafer z3950 / SRW library conflict )
* #64 ( Remove image processing from conversion service ) - dead code removal
* #37 ( Create a "learningedge-config" eclipse project and ant task for easier dev config setup )
