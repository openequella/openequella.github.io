# Release Notes for the historically '6.5' changes of Equella
## PLEASE NOTE:  The major.minor version number for the '6.5' changes release of Equella has not been decided yet.
*_In Progress_*

This is targeted for 2017 Q4 or 2018 Q1. 

* Canvas integration now uses Canvas content item placements which allows Equella links to open in a new window
* Users can edit the names of selected resources that will be added to the LMS in a selection session
* Users were able to access inactive copyright attachments via using a direct URL (e.g. a link was obtained when the attachment was active -> that link still works for the user when the attachment becomes inactive)
* Admins can alter the number of attempts the URL checker task will make before it marks a URL as disabled.  urlChecker.triesUntilDisabled = 1000 in optional config properties.
* Fix concurrency issue when importing an institution (primarily an issue with SQL Server).  This has been in release notes as fixed before, but it was still an issue.
* The item moderation REST API would return a random workflow node status each time it was invoked.
* A new permission is required to start an integration selection session in Equella (still buggy).  This permission will be granted to logged in users by default.
* A new checkbox "Select all attachments" has been added to the "Add to External System" page.
* Links to content on the Find Uses page will open in a new window.
* Within the Course Builder in Brightspace, the user must select a module to edit before launching the integration session in Equella. Equella did not automatically select the module selected in Brightspace in the Equella selection session.
* The TLE_ADMINISTRATOR account is not required to accept DRM agreements.
* On the DRM acceptance page, links to item history and item versions no longer show.
