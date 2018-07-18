[Home](https://equella.github.io/)

# Administration Overview Guide

Table of Contents
* [Administration Overview](#administration-overview)
* [Administration Console](#administration-console)
* [Institution Manager](#institution-manager) 
* [Settings](#settings)  
* [Active caching](#active-caching)  
* [Content restrictions and quotas](#content-restrictions-and-quotas)
* [Course defaults](#course-defaults)
* [Custom links](#custom-links)
* [Dashboard](#dashboard)
* [Diagnostics](#diagnostics)
* [Display date format](#display-date-format)
* [Google Analytics configuration](#google-analytics-configuration)
* [Google API](#google-api)
* [Harvester](#harvester)
* [Kaltura](#kaltura)
* [Languages](#languages)
* [Logged in users](#logged-in-users)
* [Login](#login)
* [Mail](#mail)
* [Manual data fixes](#manual-data-fixes)
* [MIME types](#mime-types)
* [OAI identifier](#oai-identifier)
* [Scheduled tasks](#scheduled-tasks)
* [Searching and content indexing](#searching-and-content-indexing)
* [Selection sessions](#selection-sessions)
* [Shortcut URLs](#shortcut-urls)
* [User scripts](#user-scripts)
* [Recipient selector](#recipient-selector)

## Administration Overview

This guide provides system administrators with an understanding of the openEquella administration and management tools. 

The tools described in this document include the:
* Administration Console—for managing openEquella institution content, users and security.
* Institution Manager—for managing multiple openEquella institutions on the same server.
* Settings page—to manage various parts of the openEquella institution. 


## Administration Console

The openEquella Administration Console provides a range of tools and plug-ins that simplify the management and configuration of openEquella.

To access openEquella and open the Administration Console
1. Open a browser and enter your openEquella URL (e.g.‘http://equella.myequellainstitution.edu’).
2. Log in to openEquella as an administrator, select Settings then Administration console
The Administration console displays in a new window.

### Administration Console tools
Each Administration Console tool provides an interface to edit or configure a series of openEquella properties. The following is an overview of the Administration Console tools:
* **Metadata Schemas**—enables the creation of schemas that are used to hold the metadata for collections. One schema can be used in multiple collections. 
* **Collection Definitions**—the type of resources stored in the openEquella Digital Repository. A collection represents a unique container to store resources within openEquella and provides information about the resource, assisting in activities such as searching, storage, collaboration and contribution.
* **Advanced Searches**—creates custom searches by searching specified metadata nodes and collections. 
* **Taxonomies**—enables the creation and use of large taxonomies for improved resource classification.
* **Dynamic Collections**—the openEquella implementation of OAI Sets based on collection resources from one or more collections. 
* **Workflow Templates**—allows content moderation and quality assurance processes to be customised and automated for each associated collection.
* **Hierarchy Editor**—configures the display of resources in hierarchies to make them more discoverable to users.
Reporting—manages openEquella Digital Repository report availability, import and export. 
* **Harvester Profiles**—manages the configuration of Harvesters for harvesting of resources into selected collections. 
* **Remote Repositories**—configures external repositories which allow users to search for external resources and import results directly into a contribution wizard.
* **Courses**—configures a list of courses for use with a copyright or integrated third-party system. 
* **User Management**—configures the plug-ins for user management in openEquella. 
* **Security Manager**—manages the privileges associated with users and groups allowing fine-grained control of user privileges for all areas of openEquella. 
#### Opening the Administration console tools
The administration console tools behave in different ways when selected:
* Hierarchy Editor and Security Manager display an editor. 
* User Management displays a list that appears as a pane on the right-hand side of the page and a Configure button. 
* Metadata Schemas, Collection Definitions, Advanced Searches, Taxonomies, Dynamic Collections, Harvester Profiles, Workflow Templates, Reporting, Remote Repositories or Courses enables:

-- A list that appears as a pane on the right-hand side of the page. 

-- The Add, Edit, Remove, Clone, Import and Export buttons. The Courses tool also has Bulk, Archive and Unarchive buttons (providing the correct privileges have been granted) 

#### Administration Console buttons
The following action buttons can be displayed:
* **Add** - Click Add to display an editor and create a new object for the openEquella instance.
* **Edit**  - Select an object and click Edit  (or double-click the object) to open the editor and make changes.  If the selection is being edited by another user a Locked dialog displays.
* **Open as read-only** — Disables the Save button so that no changes can be made. 
* **Forcefully unlock** — Unlocks the entity from the previous owner. Editing can occur but changes can be lost from one or other user.
* **Do not open** — The selected editor is not opened.
* **Delete** - Click Remove to delete the selection. Click Yes to confirm and display a confirmation dialog then click OK to close the dialog.
* **Clone** - Click Cone  to copy an existing selection. Click Yes to confirm and display a confirmation dialog then click OK to close the dialog. The cloned instance can then be modified by selecting it and clicking Edit.
* **Import** - Click Import to import a selection that has previously been exported from the Administration Console. A warning dialog displays. Only import ZIP files that have been exported from the Administration Console with the current version of EQUELLA—other ZIP files can adversely affect the stability of the system.
* **Export** - Click Export to export the selection as a ZIP file. Select a location and File name then click Save. An Export Security dialog displays. Click Yes or No to export the security rules and display a confirmation dialog. Click OK to close the dialog.
* **Bulk** - Click Bulk to import multiple courses as a CSV file. Click Yes or No to display a confirmation dialog then click OK to close the dialog.
* **Archive** - Click Archive to store selected courses for future use. This toggles the Archived property of the course. Click Yes to confirm and display a confirmation dialog then click OK to close the dialog.
* **Unarchive** - Click Unarchive  to reinstate a previously archived course. This toggles the Archived property of the course. Click Yes to confirm and display a confirmation dialog then click OK to close the dialog. 
* **Configure** -  Click Configure to display the selected plug-in’s dialog.

### Courses
Courses in openEquella are used for copyright license activation and for third-party integrations such as Blackboard™ or Moodle™. Courses can be archived for future use or multiple courses can be imported with a bulk upload.

To access an openEquella course
1. Select Courses from the Administration Console to display a list of courses. 

To import multiple courses
1. Click Bulk to display a Select an Option dialog.
2. Choose Yes to overwrite any conflicting entries with new entries that have the same name, or No to leave the original entries.
3. Choose Yes or No to display a Bulk Import... dialog.
4. Select the relevant CSV file from the local computer or network then click Open to display a confirmation dialog. Click OK to display the courses in the Courses pane. (NOTE: Archived courses can be included by using an Archived column with true or false values.)

To archive courses
1. Select the courses to store for future use.
2. Click Archive to display an Archive dialog. 
3. Click Yes to confirm and display a confirmation dialog then click OK to close the dialog.

To unarchive courses
1. Select the archived courses to restore.
2. Click Unarchive to display an Unarchive dialog. 
3. Click Yes  to confirm and display a confirmation dialog then click OK to close the dialog.

To add a new course
1. Click Add  to display the Course Editor.

To edit a course
1. Select a course (e.g. EQUELLA101).
2. Click Edit to display the Course Editor.

### The Course Editor
The Course Editor provides an interface for course configuration with the following tabs:
* Details—includes general information for a course.
* Resource Selection—provides choices for viewing resources.
* Access Control—controls access to a course.
### Details tab
The Details page elements include:
* **Course Name**—enter an appropriate course name (e.g. openEquella 101). This name is displayed to users when activating and managing copyright resources.
* **Description**—enter an appropriate course description. This description is displayed on the resource’s Copyright tab when a resource is activated. An email address or URL can be entered and are displayed as a clickable link.
* **Department**—enter the name of the department responsible for material (e.g. Sample Department).
* **Course Owner**—defaults to the course creator. Clicking Search displays the Select Recipients... dialog where a new owner can be selected.
* **Code**—enter an ID for linking the course to third-party integrations such as Blackboard™ or Moodle™. (NOTE: The openEquella course code should be exactly the same as the course code used in the integrated system.)
* **Start Date**—selecting the course start date is optional. If this field is blank the course start date is determined by the System Settings Course Defaults.
* **End Date**—selecting the course end date is optional. If this field is blank the course end date is determined by the System Settings Course Defaults.
* **Unique Individuals**—enter the number of participants for the course (e.g. 25).
* **Citation**—select a style from the drop-down list (e.g. Generic) to be used when citing licensed material (optional). The citation styles are configured during metadata schema creation. 
* **Course Type**—select an appropriate course type from the drop-down list (e.g. Internal). This is used in CAL reporting.
* **Archived**—check to prevent a course from displaying to users when activating and managing copyright items.
### Resource selection tab
The Resource Selection configurable options include:
* **Use the institution wide settings** (default option)—select to apply the configured settings from the System Settings Version Selection plug-in. 
* **Force selection to be the resource version the user is viewing**—select to display the saved version of a resource.
* **Force selection to always be the latest live resource version** —select to display the most recent live version of a resource even if the saved resource is for an older version.
* **Select the resource version the user is currently viewing**—select to allow the user to choose between the saved resource version and most recent live version. This option defaults to the saved resource version.
* **Always use the latest live resource version**—select to allow the user to choose between the saved resource version and most recent version. This option defaults to the most recent resource version.
### Access control tab
The Access Control page allows configuration of security properties associated with the selected course.
The three privileges for courses are: 
* CREATE_COURSE_INFO = create a course
* DELETE_COURSE_INFO = delete this course
* EDIT_COURSE_INFO = edit this course.

These privileges are typically granted to Administrators.

If delete or edit privileges are not specified on the Access Control page of the Course Editor, users and collaborators associated with this particular course will inherit the privileges that are set at the Courses level in the Administration Console Security Manager. 

To save the course settings
1. Click Save to save the configuration details.
2. Click Close to close the Course Editor.

## Institution Manager

The Institution Manager allows hosting of openEquella institutions. Each institution can share the same database and parent filestore while being entirely independent of any other institution. Multiple databases can be installed so each institution can be associated with its own database. 
Institutions are created by cloning an existing server institution or importing an institution. Both processes create independent copies of the parent institution although initially the institutions may appear identical to the parent. Institutions can also be edited, exported, deleted or disabled. 
1. Open a browser and enter the openEquella address of the hosting server with ‘/institutions.do?method=admin’ appended to the URL. (e.g. ‘http://equella.myinstitution.edu/logon.do’ would become ‘http://equella.myinstitute.edu/institutions.do?method=admin’) to display the Server administration Authentication page.,
2. Enter the Password used by the openEquella server administrator. (This is set on the Server Settings page after installation) Then click Log In. The Institution Manager page displays. 

## Settings
The openEquella Settings page allows suitably privileged users to setup, configure and edit a number of openEquella administration functions that affect the way openEquella behaves. It also has a link to the Administration console.
1. Open a browser and enter your openEquella URL (e.g.‘http://equella.myequellainstitution.edu’).
2. Log in to openEquella as an administrator then select Settings from the navigation menu. The Setting page displays. 
3. Enter the start of a search term in the Enter text to filter table rows edit box to show only Settings categories that contain the entered search term in the title or description.

(NOTE: This edit box only displays if there are 10 or more Settings categories displayed).

The Settings categories displayed depend on the privileges granted to the user, and can include:
* **Active caching**—configures caching schedules.
* **Administration console**—click the link to open the Administration console.
* **Approvals and payments** – used with the openEquella Content Exchange – Store front functionality. 
* **Content restrictions and quotas** —manages the common virus-carrying files types banned from the repository and user upload limits. 
* **Course defaults**—configures default start and end dates for courses.
* **Custom links**—allows the setup of external links to be accessed from the openEquella system. 
* **Dashboard**—enables the management and configuration of user Dashboard portlets. 
* **Diagnostics** – gives access to basic tools including finding groups for a user and users for a group. 
* **Display date format** – enables administration users to configure the default system display date format.
* **Echo360 EchoSystem servers** – configures EchoSystem servers for Echo360 integrations. 
* **External system connectors**—enables the creation and management of connectors for Push to LMS functionality. 
* **External tool providers (LTI)** – configures external LTI tool providers. 
* **Google analytics**—provides a link to the Google Analytics function. 
* **Google API** – configures the Google API used for YouTube videos. 
* **Harvester**—configures the DRM acceptance setting for harvesters. 
* **HTML editor** – provides the ability for users to customize the HTML Editor, including advanced customizations, adding and editing styles, customizing the toolbar and uploading third-party plug-ins. 
* **Kaltura**—configures the Kaltura server settings. 
* **Languages**—configures the languages used by openEquella. 
* **Logged in users**—allows the user to view a list of all logged in users. 
* **Login**—configures logins and authentication options. 
* **LTI consumers** – enables the creation and maintenance of LTI consumers. Additionally, users can map LTI roles to openEquella roles. 
* **Mail**—enables the configuration of email settings. 
* **Manual data fixes**—provides access to data fix applications that may need to be run under instruction from openEquella support. 
* **MIME types**—enables the adding, editing or deleting of MIME types within the openEquella system to control the way different file types are displayed. 
* **OAI identifier**—enables the editing of identifier attributes. 
* **OAuth** —configures OAuth client applications and lists associated tokens. 
* **Scheduled tasks** —configures the times scheduled tasks should be executed. 
* **Searching and content indexing**—enables the configuration of options for searching, filtering and sorting as well as content indexing.
* **Selection sessions**—configures the Quick Contribute control in integrated third-party systems and the document version defaults. 
* **Shortcut URLs**—enables the creation of URL shortcuts. 
* **Store front setup** - used with the openEquella Content Exchange – Store front functionality. 
* **Themes**—enables the uploading of theme files to change the openEquella ‘look and feel’. 
* **User scripts** – allows users to create and save JavaScript and FreeMarker scripts for use in the system. 


## Active caching

Active caching is used to improve repository access for low bandwidth users. Active caching allows a cache server to download repository resources from the central server during low usage times so local users can have improved responsiveness when using and viewing the cached items. 

A cache configuration requires the following to be configured:
* Enable and configure remote caching on the central server (covered in the following section). 
* Convert local times to GMT.
* Create client remote cache users on the central server. 
* Configure each client remote cache server. 

To configure Active caching
1. Select the Active caching link from the Settings page. 
2. Select the Enable clients to use active caching checkbox. The Active caching page has three sections:
User hierarchy—used to add User hierarchy * groups (unrelated to User Management groups) and users.
* Collections for (x) to include—select the required collections to be cached to the selected users.
* Collections for (x) to exclude—select the required collections to be excluded from 
* caching for the selected users.
To add a group
3. Highlight the required parent node then click Add Group to display the Create a grouping dialog.
4. Enter a name then click OK. The new group appears as a child of the selected parent node.
5. Click Save.

To add a user
1. Highlight the required parent node then click Add User to display the Select user(s) dialog.
2. Select the required users then click Select these users to add them to the selected parent node as child nodes.
3. Click Save.

To remove a user or group
1. Highlight the required user or group then click Remove. 
2. Click Save.

To configure the collections the cache server user to group can access
1. Highlight the required group or user then select the required collections in the Collections for (x) to include.  Selected included and excluded collections are inherited by child nodes.
2. Click Save.

To exclude collections from a group or user
1. Highlight the required group or user then select the required collections in the Collections for (x) to exclude. Selected included and excluded collections are inherited by child nodes.
2. Click Save.

## Content restrictions and quotas

The Content restrictions and quotas page has two sections:
* **Banned file extensions** —useful for prohibiting specific file types that are common virus carriers from being uploaded to the repository. Users are prevented from uploading file types listed in the Banned file extensions list.
* **User content quotas** —configures the amount of storage available to openEquella users. The default value is to allow all users unlimited storage. Users with quotas will have all uploads monitored to ensure the quota is not exceeded. Any attempt to exceed the quota will cause the upload to fail. When a user is listed in more than one quotas group they will be allocated the larger amount.

### Configure Content restrictions and quotas
1. Click the Content restrictions and quotas link from the Settings page. The Content restrictions and quotas page displays.
2. To add a banned file extension, click the Add banned extension link to display the 

a. Enter banned extension dialog. 
Enter the File extension to be banned, then click OK. The file extension now displays in the Banned file extension list. 

b. Click the Add banned extension link to add further file extensions.

3. To remove a banned file extension, click beside the required Banned file extension.
To configure user content quotas, click the Add user content quota link to open the Add user content quota page. 

a. Enter quota size (in MB). 

b. Click Select User. The Recipient selector dialog displays. 

c. Select the required Users, Groups and/or Roles to which the entered quota is to be applied then click OK.

d. Click Add user content quota. The new Content quota now displays in the User content quotas list. 

e. Click the Add user content quota link to add further user content quotas.

4. To edit a User content quota, click the Edit link beside the required User content quota to open the Edit user content quota details page.

a. Make the required changes, then click Add user content quota.

5. To remove a user content quota, click the Delete link beside the required User content quota.
6. To reorganize the user content quota list, use the Up Arrow to move the selected User content quota up one place in the list, or use the Down Arrow button to move the selected User content quota down one place in the list.

## Course defaults

The Course Defaults page configures start and end dates for copyright activation. These values are used as default values for all course activations and can be changed when a course is being configured. 
1. Select the Course Defaults link from the Settings page. The Course defaults page displays.
2. Click the calendar icon next to the Start date to display a calendar
3. Select the month from the month drop-down list.
4. Select the year from the year drop down list.
5. Click the required day on the calendar.
6. Repeat for the End date.
7. Click Save.

## Custom links

The Custom links function enables administrators to configure, reorder, assign viewing rights and attach an icon to external web page links, which are displayed on the navigation menu. 
1. Select the Custom links link from the Settings page. The Custom links page displays. Existing links can be edited by clicking Edit or deleted by clicking Delete.
2. Click Add. The Create link page displays. 
3. Enter the Display text to show as the menu item (e.g. Google search).
4. Enter the URL of the required web page (e.g. http://google.com).
5. Select Open in a new window to open the page in separate window, or leave unchecked to open in the openEquella window.
6. Click Select User  to open the Select recipients dialog, and select the required users. 
7. If required, click Browse  to open a stored icon file on the hard disk or network, then click Upload. Alternatively, click Download  for the system to attempt to find the logo from the entered web page. The icon is displayed beside the link name.
8. Click Save.

## Dashboard

The Dashboard function enables administrators to create, disable and delete portlets that display on the openEquella Dashboard page.

Administrators can add portlets to users’ Dashboard pages. Portlets can be configured to show for all users, a group of users or a single user. Other properties, such as the ability for users to minimize or close the portlets, can also be set.

To add a portlet
1. Click the Dashboard link from the Settings page. The Dashboard administration page displays. 
2. To add a portlet, click Screen Options  at the top right of the Dashboard administration page. The What would you like to add to your Dashboard? section displays.
3. Select a portlet type from the list (e.g. Favorites). The relevant portlet editor displays. The screen elements are the same for the Favourites, Browse, Tasks, My Resources and Quick Search editors. 
4. Change the default Title, if required.
5. Leave the Disabled checkbox unchecked. This checkbox can be selected if the portlet needs to be disabled at some point in the future. Disabling the portlet will prevent it from displaying on the Dashboard page. Unchecking the box will reinstate the portlet.
6. Check the Show for other users checkbox. Selecting this option means that other users, in addition to the logged in administrator, will see this portlet. Left unchecked, only the logged in user can view the portlet. Additional options display once this box is selected.
7. Check the Users can close checkbox. This allows users to close the portlet from the Dashboard page by clicking Close Icon on the top right of the portlet. The Close Icon does not display if this option is left unchecked. 
8. Check the Users can minimize checkbox. This allows the user to click the down arrow to the left of the portlet name to minimize the portlet. Click side arrow to expand the portlet. The minimize and expand arrows do not display if this option is left unchecked.
9. In the Visible to field, click Change to display the Select recipients page. 
10. Select the users, groups, roles or other option to view the new portlet then click OK.
11. Click Save to save the portlet configuration. The portlet now displays on the Dashboard page for each selected user.

To edit a portlet
1. Click Edit for the required portlet. The relevant portlet editor displays. 
2. Make the required changed.
3. Click Save to save the changes.

#### Portlet editors
##### RSS or Atom feed
The RSS or Atom feed portlet allows users to have the feed displayed on the Dashboard page for easy viewing. The RSS or Atom feed portlet editor enables the configuration of the selected feed, including the URL, Default number of results to show and Display options (Show the title and description or Show only the title).

##### Recent contributions
The recent contributions portlet enables the user to view resources they have recently contributed to the openEquella repository. The Recent contributions portlet editor allows the user to configure viewing options, including specific collections, resources with a certain status, the maximum age in days and display options (Show the title and description or Show only the title). 

##### Formatted text
The Formatted text portlet enables the administrator to create a portlet containing formatted text, which displays on the Dashboard page for the selected users. An example is a welcome message. The Edit Formatted text portlet page contains an HTML Editor in addition to the standard elements. 

##### Scripted portlet
The Scripted portlet enables the user to create a custom display using advanced scripting. FreeMarker scripts can be saved prior then selected from the Load a Script drop-downs.

##### Task statistics portlet
The Task statistics portlet enables administrators to view statistics associated with Workflow moderation tasks. 

##### Web page portlet
The Web page portlet enables the administrator to create a portlet which shows a web page, and displays on the Dashboard page for the selected users. The Edit Web page portlet page contains a URL field in addition to the standard elements. 

### Filter results
The Filter tab  provides options for reducing the number of displayed results. 
1. To filter by owner, Click Select User  to display the Select user(s) dialog. 

a. Enter search terms and click Search to display a list of matching results. 

b. Select a user (e.g. equellademo) then click Select this user  to filter the results to those owned by the selected user. 

c. The selected owner is displayed in the Filter by owner pane.
The owner selected can be changed by clicking Change user, or removed by clicking Clear.

2. To filter by type, Select the required Type from the drop-down list to see only portlets of the selected type. Options are All, Favourites, Scripted, Web page, Browse, Quick search, Task statistics, My resources, RSS or Atom feed, Formatted text, Tasks and Recent contributions.
3. To filter by visibility, select the required option from the drop-down list. Options include All portlets, Portlets visible to others, User Portlets


## Diagnostics

The Diagnostics function allows administration users to view information about users and groups. 
1. Select the Diagnostics link from the Settings page. The Diagnostics page displays.
2. To view groups for a user, Click Select user  in the View groups for a user section to open the Select user dialog. 

a. Search for and select the required user, then click Select this user.  A table displays showing all groups that the selected user belongs to. 
b. Click Change user  to select a different user.

3. To view users in a group, Click Select group  in the View users in a group section to open the Select group dialog.

a. Search for and select the required group, then click Select this group. A table displays showing all users in the selected group.

b. Click Change group to select a different user.

## Display date format

The Display date format function allows administration users to configure the default system display date format for dates pertaining to resource activities. When one format is selected as the default, the other format displays on mouse-over of the date.

To set the display date format
1. Select the Display date format link from the Settings page. The Display date format page displays.
2. Select the required display date format to be used as a default

a. Use relative date format – e.g. about an hour ago 

b. Use exact date format – e.g. June 19, 2013 3:13 PM

3. Click Save.

## Google Analytics configuration

Google Analytics is a free service offered by Google™ that is used to monitor site traffic and provide metrics for site development. An example is shown below.

### Setting up Google Analytics
1. First you must register with Google Analytics by creating an account (e.g. googleanalytics@equella.com) at http://www.google.com/analytics/sign_up.html.
2. Sign up for a new Google Analytics account using the URL of your openEquella institution (e.g. ‘http://equella.myinstitution1.edu’ or ‘http://equella.edu/myinstitution1’). 
3. Complete the google account setup form and click Create Account.
4. An overview of your Analytics Account is provided with the Google Analytics Tracking ID (e.g. UA-123457678-1) in the Account ID field. This Account ID must be added to openEquella.
5. Return to openEquella, select the Google analytics link from the Settings page. The Google Analytics page displays.
6. Enter the Google Analytics Tracking ID (e.g. UA-12345678-1) created in the steps above. 
7. Click Save to change the Tracking Status to Tracking Enabled. 

#### View the analytics data
1. Log in to your Google Analytics Account (e.g. googleanalytics@equella.com) at http://www.google.com/analytics/reporting/ to display the data for your institution. It can take up to 24 hours before any data is available.
2. Click the View Report link to display the data.
### To Track multiple institutions add a new profile
1. Select the Add new profile link to display the Create New Website Profile page.
2. Select the Add a Profile for a new domain radio button in the Choose Website Profile Type section.
3. Enter the details using the URL of your openEquella institution (e.g. ‘http://equella.edu/myinstitution2’). 
4. Click the Continue button to display the Tracking Status Information.
5. Click the Save and Finish button to complete the setup.

## Google API

The Google API option allows a Google API key (with the YouTube Data API (v3) enabled) to be stored in openEquella. This allows users to search and select YouTube content from an attachment control during contribution. 


NOTE: If the Google API key is not configured in openEquella, existing YouTube links will continue to open and play. However, searching for new YouTube content during contribution or editing of resources will result in the following message being displayed:  “Google API key not configured - There is no Google API key configured for the institution. Please contact your system administrator.”

1. Select the Google API from the Settings page. The Google API page displays. 
2. Enter the Google API Key as provided by Google. API Keys can be obtained from the Developers Console  site after creating a project.
3. Click Save.

## Harvester

The Harvester page allows the user to set harvesters to ignore DRM acceptances when harvesting resources.
1. Select the Harvester link from the Settings page. The Harvester page displays
2. Check the Allow harvesters to skip DRM acceptances when harvesting items checkbox.
3. Click Save.

## Kaltura

The Kaltura server settings page allows the user to configure Kaltura-streaming media servers and their access details. Multiple Kaltura servers can be configured, which may include Kaltura SaaS servers and local Kaltura servers.

1. Select the Kaltura settings link from the Settings page. The Kaltura settings page displays with any current servers listed.
2. To add a Kaltura server, click the Add Kaltura server link.

a. Enter a Name (mandatory) and Description (optional) for the Kaltura server.

b. Enter the Kaltura Endpoint, which is the Kaltura server address. For example, the Kaltura SaaS server address is http://www.kaltura.com.

c. Enter your institution’s Partner ID, Sub partner ID (optional), Administrator secret and User secret

d. Click Test Connection.  The Test status changes from Not tested to “Successfully connected to Kaltura”.  If the test is not successful, go back and check your Kaltura details. Settings canot be saved until they have been tested successfully.

e. Once the connection is successful, Select default player for Kaltura resources accessed from this server from the drop-down list. The openEquella default player will always display in the list, along with other players that may be configured for your Kaltura instance.

f. Click Save. The Kaltura server now displays in the list. 

3. To edit a Kaltura server, click the Edit link beside the relevant Kaltura server. The Edit Kaltura server page displays.

a. Make the required changes, then click Save.

4. To delete a Kaltura server, click the Delete link beside the relevant Kaltura server. A confirmation dialog displays.

a. Click OK to proceed.

5. To disable a Kaltura server, click the Disable link beside the relevant Kaltura server. The server is disabled, and the link changes to Enable.  Disable servers are unavailable to users both for contributing and viewing Kaltura resources.
6. To enable a Kaltura server, click the Enable link beside the relevant Kaltura server. The server is disabled, and the link changes to Disable.

To access Kaltura details
1. Open a web browser and enter the Kaltura server address (e.g. http://www.kaltura.com for SaaS, or the local server address with /kmc appended. For example, http://myinstitution/equella/kalturaserver1/kmc.
2. Login using your institution’s Kaltura KMC (Kaltura Management Console) details.
3. Once successfully logged in, click the Settings tab, then the Integration Settings link. The Account Info displays. 
4. Note the Partner ID, Sub Partner ID (not currently used), Administrator secret and User secret details, which are the fields required to set up the Kaltura server in the openEquella system.

## Languages

The Languages page enables the use of multiple languages within openEquella and provides customization of openEquella labels and text (e.g. display titles and error messages) to specific locales. It provides controls for managing Language packs and Contribution languages. 
#### Language packs
Language packs allow the default controls in openEquella to display institution-specific text such as display titles or error messages and allow users to select a preferred language for the user interface display. 
#### Contribution languages 
Contribution languages are defined by country and locale to allow for variations in language or dialect in different regions, for example English (United States) (en-US), English (Australia) (en-AU) and English (United Kingdom) (en-GB). Selecting a contribution language allows the user to customize any content that is added or contributed to the openEquella Digital Repository.
####  Display languages
The default display language setting is that of the browser where the openEquella instance is being viewed. Languages imported as language packs can be selected in the openEquella Digital Repository as the preferred display language. Selecting a preferred display language will override the browser locale setting. 

Users can select their preferred display language on the Profile page accessed by clicking on their username at the top of openEquella pages. 

## Logged in users

The Logged in users page provides administrators with a list of all currently logged in users. 

To display a list of users currently logged in to the institution
1. To display a list of users currently logged into the institution, select the Logged in users link from the Settings page. The Logged in users page displays with list of logged in username, IPs addresses and log in datetimes.


## Login

The Login settings page comprises a series of controls for configuring login and authentication by IP address.

If SSL connections are to be used, it is important to note that the openEquella server must be configured to allow SSL connections prior to enabling SSL for the institution. Otherwise the institution will not be able to receive connections, thus effectively locking out all users. Ensure the Administration Console remains open until connections have been tested after this option has been enabled, to allow the disabling of SSL in the event of an error.

#### To enable SSL login 
1. Check the Enable SSL checkbox to enable SSL connections to the institution. Do not check this box unless SSL has been setup on the server.

The institution login URL will be redirected from, for example: ‘http://equella.myinstitution.edu/logon.do’ to ‘https://equella.myinstitution.edu/logon.do’.

#### To configure login by IP address
1. Check the Enable login via IP Address box to enable the login options. The relevant options display on the page.
2. Login as user: defaults to the current user. Click Change user to display the 
3. Select user(s) dialog.
4. Enter a search value then click Search.
Select the required user then click Select this user to populate the Login as user field.
5. Select any of the following options:

a. Disable automatic login (only provide link at login)—select this checkbox to display a link on the login page (rather than take the user to their home page).

b. Do not allow user to edit their details—select this checkbox to stop users from editing the login user details, reducing any administrative overhead.

c. Do not store DRM acceptances—select this checkbox to discard any acceptances created by this user.

6. Click the Add IP address link to open the Add IP address dialog and enter an IP address. Wildcards are permitted.
7. Click OK to add the IP address to the list of addresses. 
8. Click the Add IP address link to add another IP address if required. 
9. To remove an IP address, click X beside the IP address to be removed
10. To edit the login notice text that appears when users log in to openEquella.

a. Move the cursor to the position for the edit within the text editor

b. Enter, paste or delete the text as required

c. Deleting all the text prevents the login notice being displayed to users.

d. Users can conceal the login notice by checking the Hide login notice checkbox on the Profile page in the openEquella Digital Repository

11. Click Save to save all changes.

## Mail

The Mail settings page is where the mail server details are set up. openEquella uses the mail server to send internal emails, such as notifications.
To set up the mail server
1. To set up the mail server, select the Mail settings link from the Settings page. The Mail settings page displays
2. Enter the Email address to serve as the sender address.
3. Enter the Server address.
4. Enter a Display name for the sender name.
5. Enter a User name to authenticate to the mail server.
6. Enter the Password for the authenticating mail server.
7. Enter a valid Test email address to send the test email to.
8. Click Test Settings. A test email is sent the Test email address. If the mail settings are incorrect, an error message displays.
9. Once successfully tested, click Save.

## Manual data fixes
The Manual data fixes page provides the following three data fix functions:
* Generate thumbnails—generates missing thumbnails for resources with file attachments.
* Attachment hashing (MD5)—calculates missing md5 hashes for attachments.
* Refresh the content index—sets all resources for reindexing.

(These data fixes should only be run under closely monitored scenarios)

## MIME types

Administrators can search, add, delete and edit MIME types based on file extensions. The following MIME type properties can be configured:
* Descriptive name and icon.
* Add a template for embedding objects when using the HTML Editor.
* Enable multiple extractors to index items (for some items, such as html).
* Enable multiple viewers and choose a default viewer:

-To open in a new window and control the window sizes

-To force the user to download a file or package

-To add a single sign-on (SSO) token


To configure MIME types:
1. Select the MIME Types link from the Settings page. The MIME type editor page displays with MIME type results listed.

a. The number of results returned is displayed and the number of results displayed per page can be set to 10 (default), 50 or 100 by clicking Screen Options, with pages displayed at the bottom of the page when there are more results than can be displayed under the current setting. The results can be refined by entering a search term and clicking Search.

b. Each MIME type has an icon or a thumbnail depending on the MIME type, a title, a Delete and an Edit button. The exceptions are MIME types beginning with ‘equella’. New MIME types can also be added.

2. To add a new MIME Type click Add MINIM type to display the Add MIME type page. 

3. To edit a MIME Type, click Edit to display the Edit MIME Type page. The following elements can be edited:

a. Description—enter an individual description.

b. MIME Type—enter a MIME type (this is the only mandatory field). 

c. Extensions—type the required extension then click Add to add. Highlight an existing extension and click Remove to delete the selected extension. 

d. Current icon—displays the icon currently used for the selected MIME type.

e. Upload new icon—if required, click Browse to open a stored icon file on the hard disk or network, then click Upload.

4. To set viewers for a MIME type

a. Select a radio button to allocate a default viewer. When a user selects the attachment title, the attachment is displayed in the viewer selected as default.

b. Check Enable  to enable multiple viewers as required.

c. Click configure to open the applicable viewer dialog. 

d. Viewer lists the types of viewers available for the selected MIME type. These can include:
* Download File—forces the user to save rather than view the file.
* Download Package—for downloading IMS packages. This option is only available for equella/ims-package type and is not available in the Navigation Builder control.
* File Viewer—displays the attachment in the current browser window or native application.
* Large Image Viewer—displays all image types allowing the user to easily view very large, detailed images. 
* Pretty Photo—displays image/jpeg, image/png and image/gif types in a gallery style allowing the user to iterate through the images. This viewer option is not available in the Navigation Builder control.
* External Link Viewer—displays external links in openEquella. This option is only available for equella/link type.
* Embedded Movie Player—displays video/x-flv type in a flash video viewer.
* IE Mov Popup Fix Viewer—displays all video/* types in a new IE6 or IE7 browser window. 
* HTML Conversion—allows .doc, .xls or .ppt files to be converted to HTML. (Note: Office 2007 is not supported.)
* View as JPEG image—displays all the larger image formats (e.g. image/bitmap, image/x-portable-graymap) as a jpg. This viewer option is not available in the Navigation Builder control.

e. For the viewer you can configure the following
* Open in new window—select to display the attachment in a new window.
* Use fancybox—check to display the attachment in a window with a wide white border. Only available if Open in new window is checked.
* Window Width—enter the required width of the display window in pixels.
Window Height—enter the required height of the display window in pixels.
* Append SSO Token—select to add a single sign-on token. During contribution, when a file of that type is uploaded (e.g. wmv file), hovering over the link on the item’s confirmation page or summary page shows the token appended to the URL on the bottom bar of the browser. 

#### Embedding template section
The Embedding Template page allows the user to allocate the MIME types that can be embedded in the HTML Editor. The gif, jpeg, png, and quicktime types are embedded by default and can be overridden. 

#### Text Extractors section
The Text Extractors section provides a list of available text extractors to index attachments that are included in searches. An example of the text/html Text extractor section.

The Text Extractors section elements include:
* Enabled—check to enable multiple extractors as required. Some types are enabled by default. For example, the Plain Text Extractor is enabled for text/plain type or txt files.
* Extractor—lists the types of text extractors available for the selected MIME type. 

## OAI identifier

The OAI identifier page enables the editing of identifier attributes.
OAI (Open Archives Initiative) identifiers are persistent URN (Uniform Resource Name) identifiers, ensuring that OAI items can be uniquely identified.

To access the identifier the /p/oai?verb=Identify must be appended to the openEquella institution URL. (Note: The /oai endpoint is available for backwards compatibility.)

For example, the following URL:
‘http://equella.myinstitution.edu’ would become ‘http://equella.myinstitution.edu/p/oai?verb=Identify’

Further information for OAI Identifiers is provided at http://webservices.itcs.umich.edu/mediawiki/oaibp/index.php/OAIidentifiersAndRegistrationSection and http://www.openarchives.org/OAI/2.0/guidelines-oai-identifier.htm.

To configure OAI identifier settings
1. Select the OAI identifier link from the Settings page. The OAI identifier page displays
2. Enter or edit the OAI scheme when required for backward-compatibility.
3. Enter the Namespace identifier. Typically a domain name is used as these are unique. If no value is entered the default value will be the institution’s URL.
4. Enter the Email address for the user responsible for managing OAI compatibility. If no value is entered the default value will be the System Administrator’s email.
5. Click Save.

## Scheduled tasks

Scheduled tasks configures the start times for daily and weekly tasks. Daily tasks could include such items as checking for overdue moderation tasks, escalation of moderation tasks, notification creation for resources requiring review and new available resources, and harvester profiles. Weekly tasks could include such items as removing deleted items, checking URLs, checking for deleted users and Blackboard connector synchronization.

To configure Scheduled tasks
1. Select the Scheduled tasks link from the Settings page. The Scheduled tasks page displays. 
2. From the Run daily tasks at drop-down, select the required time.
3. From the Run weekly tasks at drop-down, select the required time, then from the on drop-down, select the required day of the week.
4. Click Save.

## Searching and content indexing

The Searching and content indexing page is where default searching options are set, additional search filters can be added or edited, searching boosting is configured and content indexing options are set. Users with administrator privileges would generally have access to these settings.

1. To access searching and context indexing setting, select Settings from the navigation menu. The Settings page displays. 
2. Select the Searching and content indexing link to display the Searching and content indexing page.
3. To configure searching options,  from the Default results order drop-down list, select the required default order resources will display on search results pages (Relevance, Date last modified, Title or User rating).
4. Select the Allow non-live results checkbox to show the ‘Include results that are not live’ checkbox in the Search page Screen options. 
5. Check the Authenticated feeds checkbox to default to authenticated RSS or Atom feeds. If this box is not checked, users can only see public items in their feed, rather than all the results generated
6. Click Save.

### Searching terms boost
When the results sort order is set to Relevance, and search terms are entered, the results display a relevance score. Weights are adjustable, and attachment content is a separately configurable weight.Title, metadata and attachment content can all be adjusted from being not searched at all to being 8 times more relevant.  Different indexed metadata nodes cannot be made more or less relevant; they are all worth the same.

To configure Searching terms boost

1. To configure searching terms boost, drag the boost variables to the required values.

NOTE: Setting a boost value to Off will prevent the system from searching in that field. (e.g. If Attachment content is set to Off, the system will not look at attachment content for matches to the search criteria.)

2. Set a boost value to Off to prevent the system from searching in the field.  If attachment content is set to Off, the system will not look at attachment content for matches to the search criteria.
3. Click Save.

### Content indexing options
1. To configure content indexing options, select the required option from:
* Do not index attached web pages—select this option if it is not required for searches to return matching results on linked web pages.
* Index the linked web page only—select this option to index the web page of the linked URL, but no further linked web page levels. This means that searches will return matching results from the web page content.
* Index the linked web page and any secondary linked web pages—select this option to index the page of the linked URL and the next level of web pages (limit 0.5 Mb). This means that searches will return matching results from each level of web pages.
2. Click Save.

### Cloud
1. To disable/enable Cloud searching, select or unselect the Disable cloud searching checkbox in the Cloud section. 
2. Click Save.

### Gallery views
In some cases, administrators may wish to disable the Images and/or Videos views on openEquella results pages. This will remove the Images and/or Videos links at the top left of the results box. Thumbnails for image and video files will still be created in the background, so if the views are enabled, thumbnails will display immediately.

Additionally, the file count that shows to the top left of image and video thumbnails when there are multiple files can also be disabled.

1. To configure Gallery views options, In the Gallery views section, select from the following options:
* Disable Images – select to remove the Images link from the results box, or uncheck to add the Images link to the results box (default is unchecked).
* Disable Videos – select to remove the Videos link from the results box, or uncheck to add the Images link to the results box (default is unchecked). 
* Disable file count – select to remove the file count indicator that displays at the top left of thumbnails when there are multiple image or video attachments.
2. Click Save.

### Search filters
Adding one or more search filters adds those filters to the filter box on resource results screens. This allows the user more filtering options for their search results, enabling easier discovery of resources. 

Search filters are based on MIME types. For example, a filter might be required to show only resources that have image attachments. 

1. To add a Search filter, click the Add a new search filter link. The Create new search filter page displays.
2. Enter a name for the filter in the Name field (e.g. Image).
3. Select the MIME Types required (e.g. Image (image/gif, image/bmp etc.)).
4. Click Save. The Search setting page displays with the new filter listed. 
5. The search filter can be edited or removed by clicking the relevant link. 

The search filter displays at the bottom of the filter tab on resource results screens under the heading of Filter by resource type.


## Selection sessions
The Selection sessions page provides the Quick Contribute setting, as well as version defaults for resource version selection.

To configure Selection sessions

1. To configure selection sessions, select the Selection sessions link from the Settings page. The Selection sessions page displays.

### Quick Contribute
In integrated third-party systems such as Blackboard™ and Moodle™, the Integration screen Contribute page enables a Quick Contribute control. 

Users can navigate to and select a file that is automatically contributed as an openEquella resource into the chosen openEquella collection and added to the integration’s course list.

The Quick Contribute control prevents duplicate files being uploaded into openEquella. 
To select a collection for Quick Contribute
1. Select a collection from the Choose a collection drop-down list. 
2. Click Save.

### Version selection
The Version selection section of the Selection sessions page provides institution-wide settings for resource version selection. Course specific version selections can be managed using the Administration Console Courses tool.

Version selection configuration is used to determine which version of a resource is displayed when a resource link is selected.

Selecting the latest live version options displays the latest version of the resource when the link is selected even if the saved link is for an older version; otherwise the version associated with the link is displayed.

The options that allow a user to choose the version are enabled when adding an openEquella Resource to an item during contribution and when openEquella is integrated with a third party application such as Blackboard, Moodle or Canvas. 

#### To configure version selection

Select one of the following:
* Force selection to be the resource version the user is viewing—(default option) displays the originally linked resource.
* Force selection to always be the latest live resource version—displays the latest version of the originally linked resource.
* Select the resource version the user is currently viewing—allows the user to choose between the selected resource version and the latest version of that resource during contribution when selecting existing openEquella resources as attachments. When this option is selected, a drop-down list displays on the My selections page and the user selects the required option. Fixed to v(x) is shown as the default when this option is selected. 
* Always use the latest live resource version—allows the user to choose between the originally linked resource and the latest version of that resource during contribution when selecting existing openEquella resources as attachments. When this option is selected, a drop-down list displays on the My selections page and the user selects the required option. Latest available is shown as the default when this option is selected. 

#### Selection options
Select the Disable the ‘Select summary page’ button on results pages checkbox to stop the  +Select Summary Page button from displaying on the openEquella integration screen results pages. This prevents users from accidentally adding the summary page links whilst thinking they’re adding attachment links.



## Shortcut URLs

The Shortcut URLs page associates a text alias with a URL to create a shortcut for entering the URL. 

To configure Shortcut URLs
1. Select the Shortcut URLs link from the Settings page. The Shortcut URLs page displays with any current shortcut URLs listed. 

Shortcuts can be used by appending /s/shortcutname to the institution shortname in the institution URL. 

To create a shortcut
1. Click the Add shortcut link to open the Add shortcut URL dialog. 
2. Enter the Shortcut name (e.g. Support) and URL target (e.g. http://equella.custhelp.com) in the relevant fields.
3. Click OK to add the shortcut to the shortcut list. 

To remove a Shortcut URL
Click X beside the Shortcut URL to be removed.

## User scripts

The User scripts setting allows users to create and save FreeMarker and JavaScript scripts that can be run from various areas of openEquella.
Saved FreeMarker scripts can be accessed from Scripted portlets. 
Saved Javascripts can be accessed from the Manage resources, Execute script function.

To add a User script
1. Select the User scripts link from the Settings page. The User scripts page displays with any existing user scripts listed. 
2. Click the Create new script link to display the Create new script page. 
3. Enter a Title and Description (optional).
4. Select the Script type from the drop-down. Options are Display script (FreeMarker) or Executable script (JavaScript). 
5. Enter the Script body. Hover the mouse over the View available shortcuts link to see a list of scripting shortcuts.
For JavaScript scripts, click the Check Syntax  button. A Syntax OK message should display. 

NOTE: If an error occurs, check the JavaScript script syntax for errors then check the syntax again.
6. Click Save.

### Running user scripts
Saved FreeMarker scripts can be accessed from the Load a Script drop-down on the Create a new Scripted portlet page. 

Saved JavaScript scripts can be accessed and run from the Execute script bulk action accessed through the Manage resources function. 

## Recipient selector

The Recipient selector enables users to select users, groups and/or roles that can have access to areas in openEquella. It is used in the following functions:
* Approvals and payments – select the users, groups and/or roles that are part of an approval or payment rule for openEquella instances set up with the openEquella Content Exchange Store Front capability. 
* Content quotas – select the users, groups and/or roles to which a content quota applies.
* Custom links – select the users, groups and/or roles that can view a custom link.
* Create portlets – select the users, groups and/or roles that can view a portlet.

### Recipient selector elements
The Recipient selector is made up of the Home and Other tabs, and the User entity pane. 

### Home tab
The Home tab searches the selected user entity (Users, Groups or Roles) for the text entered in the search criteria.

#### To search for Users, Groups or Roles
1. Select Users, Groups or Roles using the radio button. 
2. If selecting Users or Groups, a group filter may be added by clicking the Filter by groups link. A Select group(s) dialog displays. 
3. Enter a search query (at least one letter or digit), then click Search.
4. Select the groups that the user or group search will be restricted to, the click Select Groups. The group filter displays, and applies to any searches based on users or groups, until the filter is cleared or the Recipient selector closed. 
* Click the Edit link to edit the group filter.
* Click the Clear link to remove the filter.
5. Enter a search query in the search text box then click Search.

NOTE: At least one letter or digit must be included in the search query. Partial names can be entered without the use of a wildcard.
The results display in the results panel. 

To select results

To select single results, click + , or to
select multiple results, select the checkboxes beside the required results, then click Add selected. The selections display in the User entity pane. 
* Selections can be removed from the User entity pane by clicking .
* Selected results can be cleared in the Results pane by clicking the Select none link.
* All results can be selected by clicking the Select all link.
Click OK  to save.
#### Other tab
The Other tab provides alternative options for selecting users. 

The Other tab entities represent groupings that cannot be easily specified using the Home tab. The options are:

##### Everyone
Represents everyone who can access this instance of openEquella. This group includes everyone who can access an openEquella URL and includes Guest and Logged in users. 

##### The owner of the targeted object
Represents object owners, typically object creators. 

##### Logged in users
Represents users who are logged in to this instance of openEquella. 

##### Guest users
Represents users who can access the openEquella URL without logging in. 

##### Single signed on with identifier
Represents users who are logged on using the Shared Secrets plug-in. This option is mainly for use with third-party integrations.

##### Add an IP Address
Enter an IP address in standard 255.255.255.255 format and a subnet mask in CIDR notation, a number between 0–32. The subnet mask represents the number of bits masked from the starting bit of the IP address.
##### Add a HTTP Referrer
Enter a text string that will be matched to the URL of the recipient. For example, http://institution.edu.au/equella/.
* Only match this exact referrer—the recipient URL must match the entered referrer URL exactly. 
* Match referrers containing this value—the recipient URL must contain the entered referrer text string. The entered text string does not need to be a resolvable URL.

##### To add an Other tab element to the User entity pane
1. Select the required element (e.g. Logged in users).
2. Click + Add.
3. Click OK to save.

##### Create advanced user entity lists
User entity lists are expressions whose evaluation for the current user determines access to objects. The user entity list consists of user and groupings (expression operators) that can be combined to create an expression of arbitrary complexity. User entity lists can be created by identifying a user or users to be matched using the default Match Any grouping but occasionally a more sophisticated list is required. Important considerations when creating user entity expressions are: 
* Readability—use the most readable expression. This makes maintenance by other users easier as the intent of the expression is clearly stated. 
* Simplicity—use the simplest possible expression to achieve the required user access. 
The available groupings are: 
* Match Any—equivalent to the Boolean OR operator. When used at the top level of a user expression, a user belonging to any one of the user entities in this group can use the associated privilege. 
* Match None—equivalent to the Boolean NOT operator. When used at the top level of a user expression, a user belonging to any one of the user entities in this group cannot use the associated privilege. 
* Match All—equivalent to the Boolean AND operator. When used at the top level of a user expression, a user must belong to all the user entities in this group to use the associated privilege.

#### Add Grouping button
Click Add grouping to add a new user entity grouping with the default Match Any operator.
