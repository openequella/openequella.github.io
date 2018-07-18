# openEQUELLA Ping Utility 

Code:  [Equella-Tools/ping-utility](https://github.com/equella/Equella-Tools/tree/master/ping-equella)

*Recommended for use only with a strong understanding of the system and the potential impact of the utility*

This is a Java utility that loops through openEQUELLA items (optionally filtered by institution and/or collection), checking if the item's attachment exist.

There are three run modes:
* 'attachments' mode relies on the REST API and will check the attachments of each item via an HTTP GET call. Based on the response
code, it will decide if the attachment exists. This has some known concerns (such as a longer run duration and some false positives), but can be run from any computer that can access the external openEQUELLA site. It does not completely pull the content. It has only been tested on non-DRM items.
* 'direct-query-batched-items-attachments-per-item' mode uses the filestore and database via batched queries (ie your openEQUELLA install would not even need to be running to use this mode). It will make roughly (n/100)+n database calls, where n is number of items in your database.
* 'direct-query-all-items-all-attachments' is similar to 'direct-query-batched-items-attachments-per-item', but will make a single query for the items, and a single query for the attachments, for a total of 5 DB calls to build the report. This originally was developed as a workaround to an issue with pagination in SQL Server 2008.

### Setup

**Needed Files** 

Note: Releases of PingEquella and example properties files are stored in the openEQUELLA Tool Directory

* PingEquella jar
* ping-equella.properties (see Config Details for contents)
* log4j2.xml
* (Optional): start.sh (see Bitbucket repo)

**Direct* modes**
This mode requires direct access to the database and the filestore of the openEQUELLA install.

**Attachments mode**
The mode requires REST authentication to be setup in the given institution (CCG / LTI). You will you need to provide the client ID / secret in the properties file. It's been shown that there are some false positives and not all system collections are exposed through the REST API. It's recommended to use the direct* modes.

**General**
The utility outputs 3 files: A file with all the items / attachments and their statuses, a file with only the attachments which are considered missing, and the log4j file which details precisely when the utility decided the status of an item / attachment.

To invoke, run this ping utility jar as follows:
```
$ java -jar pingEquella_v[[latest version]].jar
````
You can also use this utility to compare reports, but the reports need to be in the format given by v1.4 or later (11 'columns' of data per row in the correct order). It's intended to compare two all_stat files or two error_stat files.
```
$ java -jar pingEquella_v[[latest version]].jar -compare filepath1.csv filepath2.csv
```
The utility can be configured to automatically compare the last report and the current report to highlight attachments that are no longer missing and attachments that are now missing.

The utility can be configured to email a report of the current run. The email will also include a list of any critical errors and the comparison results.

### Versions
**V1**
* Initial version

**V1.1**
* Tied in log4j to see precisely when an attachment failed to be retrieved; added better error handling when the item xml could not be retrieved (was causing a SO error); better String management.

**V1.2**
* Implemented a configurable retry scheme when a http request fails (Covers all requests - access key, search api, and files). For each failure of a
given http request, the ping utility will sleep for an extra second before it tries again (so if a request fails 5 times, it'll sleep for 5 seconds before
trying a 6th time).

**V1.3**
* Added ping.type = direct, and removed ping.type = items. Added JUnit test harness and test data.
* Release notes:
1. Upgraded to support a 'direct' approach using the filestore and DB. It will make roughly (n/100)+n DB calls, where n is the number of items in your DB.
2. File manager files (and folders) that are not shown in the resource summary cannot be checked in the attachments or direct ping reports.
3. Unzipped files that are not shown in the resource summary cannot be checked in the attachments or direct ping reports.
4. SCORM / IMS packages are not possible to completely check - currently unsupported in the ping utility, (there may be enough hooks to enhance the utility to check most of the package at a future date).
5. Removed the ping.type of 'items'. v1.3 only supports ping.type of 'attachments' or 'direct'.
6. The report has been simplified to allow for report comparisons
7. Response Code and Item Name will only be available for the ping.type of attachments and have been moved to the end of the report line.
8. Running the report with ping.type as 'attachments' can give a false positive on inactive CAL/CLA item.

**V1.4**
* Added a direct single query mode to support SQL Server 2008. Provides the ability to run on openEQUELLA installs with multiple institutions and filter by
an institution.

Release notes:
1. Users can configure PingEquella via ping.type to handle batching or single-query for items and attachments - allowed ping.type values are 'attachments', 'direct-query-all-items-all-attachments', or 'direct-query-batched-items-attachments-per-item'.
2. Users can configure PingEquella via direct.num.items.per.query on the number of items to query per batch. This only applies to direct-query-batched-items-attachments-per-item ping.type reports.
3. Users can run PingEquella on institutions whose shortnames are different then their filestore handles. PingEquella will not run if it can't resolve all institutions shortnames as filestore directories. If an institution filestore was changed, the user needs to include the following
line in the properties files for each different institution filestore:
direct.filestore.institution.handle.institutionShortname=institutionFilestoreName. This is expected to only be needed for development /
testing purposes. This only applies to direct* ping.type reports.
4. Users can filter PingEquella coverage by an institution shortname - filter.by.institution is the 'short_name of the institution (The 'Filestore'
value in the server admin pages)'. This only applies to direct* ping.type reports.
5. Users can see on reports which institution an item belongs to.

For direct* ping.types, this is automatic.

For the attachments ping.type, this needs to be specified via a new configuration key 'attachments.institution.shortname'. This
will allow attachments reports to match the format of direct* reports. Default value is 'DEFAULT'.

6. Users can run PingEquella on openEQUELLA clusters that have multiple institutions
7. Users have enhanced filtering-by-collection ability.

The parameter 'collection.uuid' has been replaced by 'attachments.filter.by.collection.uuid'. Only valid for ping.type = attachments , and ignored if ping.type is not attachments.

A new parameter is allowed: 'direct.filter.by.collection.id'. Only valid for ping.type = direct* and ignored otherwise. To find the ID
of the collection, run PingEquella with a direct* ping.type and inspect the log for a listing of all the institutions and collections
available.

A manual comparison feature is included. The reports to compare need to be in the format given by v1.4 (11 'columns' of data per row in the correct order). It's intended to compare two all_stat files or two error_stat files.

**V1.5**
* Bug fix.

Release notes:

The reporting feature of PingEquella would fail if an item / attachment had a percent sign in the name. This is now resolved. No change to the properties file from v1.4.

**V1.6**

Feature enhancements of auto comparison of last run and current run, and the ability to email a summary of the report.

Release notes:
1. Auto comparison: To configure, add compare.missing.attachments to the properties file and set it to true. The utility will look for the latest error report with the same client.name.
2. Email reports: The configure, add email.report to the properties file and set it to NORMAL or ONLY_NEW_MISSING_ATTACHMENTS_OR_ERRORS. Setting it to NONE or omitting the configuration will turn off email.

a) If email.report is configured and not set to NONE, the following properties need to be configured:
* email.smtp.server.port (The port for the email smtp server - Google's is 587)
* email.smtp.server (The email smtp server - Google's is smtp.gmail.com
* email.sender.display.name (Freeform - the name will appear as the sender of the email report)
* email.sender.username (The username of the email account used to send the email report from the specified smtp server)
* email.sender.password (The password of the email account used to send the email report from the specified smtp server)
* email.recipients (A semi-colon separated list of email addresses the report will be sent to)

b) In the case of a critical error (such as the utility cannot connect to the database), and if email is configured, the utility will send an email notification with the critical errors it captured.
c) The utility uses simple authentication for smtp servers. For example, if you choose to use a Google account for the smtp server,
you'll need to switch off 2-step verification for the utility to properly send emails. Since this is less secure, it's recommended to use a separate email account for this utility.

**V1.7alpha**

Bug fix for comparing reports. This has not been fully unit tested. v1.6 should be used for Production runs.

Release notes:
The "-compare file1 file2" invocation of PingEquella now sets the 'Attachment file path' of the comparison output. Due to time limitations and need, this is an alpha release meaning it's not been unit tested, but released when comparisons need to be made.

### Config Details

Reflects version 1.6.
```
# General note - If you're on Windows, you'll need to slash escape the slashes for any
directories.
# e.g. [E:\logs\here] should be [E:\\logs\\here]
##############
## Required ##
##############
# Can be 'attachments', 'direct-query-all-items-all-attachments', or
'direct-query-batched-items-attachments-per-item'
# 'attachments' uses the REST API / Web UI of openEQUELLA
# 'direct*' will query the DB, and check the filestore without using any openEQUELLA code.
No web UI calls.
# direct batched only works with SQL Server 2012 or newer.
ping.type=attachments
# This folder is an absolute path
output.folder=/path/to/ping/equella/output
# Freeform, though just characters that will play nice in a file name.
client.name=Acme
#################################
## For ping.type = attachments ##
#################################
institution.url=http://my.equella.cluster.com/vanilla-institution
client.id=aa9759a2-b544-4fae-b256-a7820ab01e12
client.secret=2f2cd73e-4ef2-461d-b18b-266ba7aad861
# Only used for ping.type = items or attachments
# Number of retries after receiving an exception (such as a connection timeout)
# before the ping utility will exit.
ping.max.tries=10
# Only used for ping.type = items or attachments
# For testing - number of tries to inject a 1 MS timeout limit before allowing
# the request to be normal. '0' will effectively disable this test. Only fully
# implemented for attachment ping types.
ping.test.times.to.inject.timeout=0
# Not required. Only for 'attachments' ping.type reports.
attachments.institution.shortname=
#############################
## For ping.type = direct* ##
#############################
# Should be the starting double slash like:
//10.52.81.7:2301;databaseName=eq;instanceName=EQDB
direct.db.url=//10.52.80.43:2301;databaseName=eq;instanceName=EQDB
direct.db.username=dbuser
direct.db.password=1234asdf
direct.db.type=SQLSERVER
#Specify an absolute path to the Institutions directory.
direct.filestore.dir=/my/filestore/dir/Institutions
# Required for ping.type of direct-query-batched-items-attachments-per-item and must
be a number greater than 1.
direct.num.items.per.query=50
# Not required. Only for 'direct*' ping.type reports. PingEquella will not run if it
can't resolve all institutions shortnames
# as filestore directories. If an institution filestore handle was changed, the user
needs to include the following line in the properties
# files for each different institution filestore. Expected to only be needed for
development / testing purposes.
direct.filestore.institution.handle.<<institutionShortname>>=institutionFilestoreName
######################
## Optional Filters ##
######################
# Not required. Only for 'attachments' ping.type reports. If blank or omitted, all
collections visible to the user will be searched.
attachments.filter.by.collection.uuid=
# Not required. Only for 'direct*' ping.type reports. If blank or omitted, all
collections visible to the user will be searched.
direct.filter.by.collection.id=
# Not required. This only applies to direct* ping.type reports. This is the
'short_name of the institution (The 'Filestore' value in the server admin pages)'.
filter.by.institution.shortname=
#####################
## Auto comparison ##
#####################
# Default is false. To enable, set to 'true'. Not required.
compare.missing.attachments=
###########
## Email ##
###########
# Not required, but if specified, must be NONE, NORMAL, or
ONLY_NEW_MISSING_ATTACHMENTS_OR_ERRORS
email.report=
# If email.report is configured and not set to NONE, the following are required.
email.smtp.server.port=587
email.smtp.server=smtp.gmail.com
email.sender.display.name=Ping Equella Mailer
email.sender.username=
email.sender.password=
email.recipients=
```
