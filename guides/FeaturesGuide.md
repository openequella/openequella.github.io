# Features Guide

Table of Content

[Attachment control restrictions](#attaching-control-restrictions)

[Attachment control display options](#attachment-control-display-options)

[Bulk Collaborators](#bulk-collaborators)

[Copyright activations enhancements](#copyright-activations-enhancements)

[Gallery views](#gallery-views)

[Google API](#google-api)

[Institution filestore size limit](#institution-filestore-size-limit)

[LTI consumer configuration](#lti-consumer-configuration)

[Online help for scripting](#online-help-for-scripting)

[Push to LMS restriction](#push-to-lms-restriction)

[Reporting enhancements](#reporting-enhancements)

[Search enhancements](#search-enhancements)

[Term Selector](#term-selector)

[View attachment privilege](view-attachment-privilege)

[Z39.50 configuration enhancements](#z39.50-configuration-enhancements)

## Features overview
This guide provides an overview of the features introduced in EQUELLA 6.4. For more information about each feature, and step by step instructions on how to use them, please see the relevant guides referenced at the end of each feature overview in this document.
EQUELLA version 6.4 introduces the following features:

* Attachment control restrictions – ability to apply file size, attachment number and MIME type restrictions on an attachment control.
* Attachment control display options – ability to display attachment controls in separate, user-titled sections on the Resource summary page. 
* Bulk collaborators – ability to add collaborators to multiple resources in one action. 
* Copyright activations enhancements – improvements to the functionality of copyright activations with the integration screen. 
* Gallery views – a new Videos search results view enabling video thumbnails and previews to be viewed. Additionally, files counts for both images and videos and configuration option to provide flexibility for these views. 
* Google API – a new option on the Settings page allows a Google API to be stored, so that YouTube Videos can be searched and selected. 
* Institution filestore size limit – a size limit can now be stored per institution. 
* LTI consumer configuration changes – changes and enhancements to the LTI consumer configuration allow for greater flexibility in role mapping and other areas. 
* Online help for scripting – the scripting shortcuts can now be viewed online. 
* Push to LMS restriction – ability to restrict resource availability for the Push to LMS function.
* Reporting enhancements – including the availability of MS Word as an output format and the publishing of an EQUELLA 6.4 interactive database map. 
* Search enhancements – a number of enhancements and new functionality have been added to search pages.
* Term selector – improvement to user experience. 
* View attachment ACL – a new ACL has been created to restrict access to resource metadata.
* Z39.50 configuration enhancements – changes have been made to the configuration of Z39.50 Remote Repositories. 

## Attachment control restrictions
A number of new restrictions can be configured at an attachment control level to allow administrators to better define and regulate content being added during contribution.

The following restrictions can now be set on the Attachments wizard control in the Collection Definition Editor:

### Maximum number of attachments
If multiple attachments are allowed for an attachments control during contribution, the administrator can now set the Maximum number of attachments allowed for this attachment control. This is the total number of attachments across all attachment types that are enabled for the control, including files, EQUELLA resources, YouTube video links, iTunes U links, Kaltura media links, URLs, web pages, Google book links, Flickr image links and External Tool Providers. 

Users will be prevented from adding more than the maximum allowed number of attachments when they are contributing to a collection with an attachment control that has a restriction set.

The Add a resource link displays when more attachments can be added. 

Once the maximum number of attachments has been added, the Add a resource link no longer displays.

If a user adds multiple files using the file drag and drop functionality that results in more than the maximum number of attachments allowed being added, a message displays asking the user to remove the excess files. The user cannot successfully save their contribution until the restriction is met. 

### Individual upload file size
A new Individual upload file size restriction can be set per file within an Attachments control’s General section of Files options. 

Users will be prevented from adding files larger than the restriction size when they are contributing to a collection with an attachment control that has file size restriction set. 


If a user adds multiple files using the file drag and drop functionality which include one or more files larger that the specified size restriction, a dialog box displays for each oversized file, informing the user that they will not be uploaded. 

### MIME type
Files to be uploaded via an attachments control can now be restricted to specific MIME types. An administration user can select the MIME types allowed from a list, and if files of other MIME types are attempted to be uploaded, the system displays a message to the user. The MIME types are selected from the new MIME type restrictions section in the Attachments control’s Files options. 


Users will be prevented from adding files where the MIME types don’t match those selected in the restriction list when they are contributing to a collection with an attachment control that has MIME type restrictions set. 

If a user adds multiple files using the file drag and drop functionality which include one or more files with MIME types which are not allowed, a dialog box displays for each file, informing the user that they will not be uploaded.

### Attachment control display options
Changes to the way attachment controls are displayed on the Resource summary page have been introduced in EQUELLA 6.4. In prior EQUELLA versions, all attachments and  links displayed in one section titled Links to resources on the Resource summary page regardless of the number of attachment controls. This title could not be edited. Administrators can now:
* enter a Title for the attachment section (defaults to Links to resources).
* display multiple separately titled sections on the summary page when there are multiple attachment controls in a contribution wizard.

### Attachment section titles
From the Collection Definitions Editor Display tab, the Resource Summary Display sub-tab shows the Resource summary sections currently displaying on the Resource summary page. Prior to 6.4, the Attachments section had a default title value of Attachments. This is now labelled (by default) Links to resources to match the heading section on the summary page. 

Administration users can now change the attachments section title to a user-defined value. For example, rather than Links to resources, the user may wish the section title to display as Documents and links. The user types in the required title on the Resource Summary Display Template tab for the attachment section in the Collection Definition Editor. 

Once saved, the Attachments section on the Resource summary page will display the new title. 

### Display multiple attachment sections on Resource summary page
EQUELLA 6.4 introduces the ability to display multiple attachment controls within a contribution wizard as separately titled sections on the Resource summary page, based on specified metadata nodes. Admin users can now display:
* a separate attachment section per attachment control
* user-defined groups of attachment controls
* all attachments in one section, as per prior versions of EQUELLA.

The configuration of the attachment sections is done from the Collection Definition Editor Display tab, on the Resource Summary Display sub-tab. An attachment section (which defaults to the title Links to resources when first added) is added for each separate section required on the Resource summary page. 

The attachment controls to be included in a section are defined in the Restrict attachment display section, where the attachment control metadata targets are selected. In the following example two attachment control metadata targets have been selected to display in the section titled Documents.


NOTE: To display all attachments for one or more attachment controls, leave this option blank.


## Bulk Collaborators
Collaborators can now be added to multiple resources in one process with the new Add collaborators bulk action accessed from the Manage resources page.

Once the required resources are selected and the Perform an Action button is clicked, an administrator can choose the new Add collaborators bulk action from the Bulk actions list. 

The user can then select the user/s to be added as collaborators to the selected resources.

Once executed, the users selected display as collaborators for each of the selected resources. 

### Copyright activations enhancements
Enhancements have been made to the behavior of copyright items when they are being added to LMS courses, both via the structured integration screen and the Push to LMS (Add to external system) function.

#### Integration screen
Many institutions have librarians to manage their copyright material. Often, librarians will go through and create all the activations for courses in EQUELLA, then instructors will add those activated copyright item links into their LMS courses when they set up the course content via the integration screen.

In EQUELLA versions previous to 6.4, activations created in native EQUELLA would not display and were not selectable from the integration screen. In EQUELLA 6.4, users can now:
* Select existing activations (pending and active) to add to a course, regardless of whether they have the COPYRIGHT_ITEM or VIEW_ACTIVATIONS privileges.
* Select existing activations, but also have access to the Activate and Add button during the selection session when users have the COPYRIGHT_ITEM privilege.

#### Users without the COPYRIGHT_ITEM privilege
When a user without the COPYRIGHT_ITEM privilege accesses the EQUELLA integration screen from an LMS course page, any copyright items that have been activated against that course display as selectable attachments on both the results page and the Resource summary page.

The Active or Pending attachments can be added to the course section by clicking the Plus button.

NOTE: Inactive attachments cannot be added to a course. Similarly, copyright attachments that have been activated against other courses cannot be added to the current course. In these cases, the attachment does not have the Plus button available. 

#### Users with the COPYRIGHT_ITEM privilege
When a user with the COPYRIGHT_ITEM privilege accesses the EQUELLA integration screen from an LMS course page, any copyright items that have been activated against that course display as selectable attachments on both the results page and the Resource summary page. The Resource summary page also displays an Activate and Add Plus button for each attachment. This buttons opens the Activate attachments page for the user to create new activations to add to the current course.


Hover over the plus button to view the Activate and Add label.

Click the plus button to open the Activate attachments page to create a new activation which will then be added to the course. 

Clicking the Activate and Add button creates the activation and adds it to the highlighted course section.

## Push to LMS
Copyright rules have been added to the Push to LMS (Add to external system) functionality to streamline the adding of copyright items to LMS courses via the Add to external system link available from the Actions menu of the Resource summary page.

The following rules now apply:
* Only Active or Pending attachments can be added to courses.
* Active and Pending attachments can be added only to the relevant courses they have been activated against.

In the Select the resources to add section, note that some resources can be selected, as there is an existing active activation, whereas other resources can’t be selected because they are currently inactive.

Once resource is selected, the Select the locations to add to section updates to display only those courses that the attachment has been activated against.

## Gallery views
EQUELLA 6.4 introduces the new Videos view search results page, which, similar to the Gallery view introduced in EQUELLA 6.3 (now renamed Images), displays video resources in a thumbnail format. A simple mouse-over enlarges the thumbnail instantaneously and displays options, including the ability to watch a preview.

### Generate video thumbnails and previews

#### youTube and Kaltura
After the EQUELLA 6.4 upgrade is run, a thumbnail will be automatically generated for any new youTube or Kaltura attachments and display in the Videos view, but a simple, one-off reindexing process needs to be completed for existing attachments to display. Once this process is completed, any resources that contain a youTube and Kaltura link as an attachment will display on the Video results page. Note that if a resource has multiple video links, the first video in the list of attachments is used as the default thumbnail on the Videos page.

For existing youTube and Kaltura videos to display in the Videos view, once the EQUELLA instance is upgraded to 6.4, the following steps need to be completed:
1. From the Settings, Manual data fixes page, in the Refresh the content index section, click Refresh Index.

Once this process is complete, all existing youTube and Kaltura videos display on the Videos results page, using the default youTube or Kaltura thumbnail.

#### Video files uploaded as file attachments
Video files uploaded to EQUELLA as file attachments do not display in the Video view until the following steps are carried out:
1. Install Libav, a free, third-party product used by EQUELLA to produce thumbnails and previews for video files. Libav needs to be installed on the EQUELLA server (or each EQUELLA server in a clustered environment).
2. Once Libav is installed, the optional-config file needs to be updated to reflect the libav path. An example is shown below:
```
# Libav path. For example C:/Libav/usr/bin
libav.path = C:/Program Files/libav/libav-x86_64-w64-mingw32-11/usr/bin
````
3. Upgrade to EQUELLA 6.4 (this step can also be carried out prior to steps 1 and 2).
Note: See the EQUELLA 6.4 Upgrade Guide for full instructions on installing and configuring Libav.
4. From the Settings, Manual data fixes page, in the Generate thumbnails and previews section, select Missing thumbnails then click Refresh Index. 

Thumbnails are created from the 5th second of a video, and ten second previews are created from the 5th until the 15th second of a video. These previews can be played from the Video view.

#### Videos view page
The Videos view is accessed by clicking the Videos link at the top-left of the Results box on the Search and Favourites pages. 

Click the Standard link to return to the standard results page format, or Images to go to the image results page format.

Up to 30 video thumbnails are displayed per page, with links to other pages if relevant.

#### Previewing videos
To preview a video file, hover the mouse over a specific video thumbnail to display a 320px X 180px preview frame. 

Select the Play button to play the preview. Kaltura and youTube videos can be previewed in their entirety, and ten second previews can be viewed for video files uploaded to EQUELLA as a file attachment. To stop the preview, move the mouse away from the preview frame.

While the mouse is hovering over a specific video thumbnail, a menu displays at the bottom of the thumbnail, containing the following icons:
* Star Icon - Click to open the Add to favourites dialog and add the resource to your Favourites.
* List Icon - Click to open the Modify key resource dialog to add or delete the resource as a key resource from a hierarchy.
* Comment Icon - Click to open the Resource summary page with a focus on the Comments section.

Click on the thumbnail image to open the Resource summary page.

#### Multiple video attachments
When there are multiple videos for a resource, the thumbnail of the first video in the attachments list is used to represent the resource on the Videos page. The Reorder attachments feature introduced in EQUELLA 6.3 can be used to change the order of the attachments, and placing a different video at the top of the list will change the thumbnail (and available preview) used on the Videos page.

On the Videos results page, resources with multiple videos display an icon indicating the number of attached video files or links in the top left of the thumbnail. This alerts users to the existence of other videos for which no thumbnail is available from the Videos view. The user can open the Resource summary page to view the other videos. 

#### Multiple image files
On the Images view results page (previously labelled Gallery view in 6.3), resources with multiple image files now display an icon indicating the number of attached images in the top left of the thumbnail. This alerts users to the existence of other image files for which no thumbnail is available from the Images view. The user can open the Resource summary page to view the other images. 

#### Gallery view configuration options
In some cases, administrators may wish to disable the Images and/or Videos views. This will remove the Images and/or Videos links at the top left of the results box. Thumbnails for image and video files will still be created in the background, so if the views are enabled at some point in the future, thumbnails will display immediately.

Additionally, the file count that shows to the top left of image and video thumbnails when there are multiple files can also be disabled.

Gallery views options are accessed from the Settings, Searching and content indexing page, in the Gallery views section, and include:
* Disable Images – select to remove the Images link from the results box, or uncheck to add the Images link to the results box (default is unchecked).
* Disable Videos – select to remove the Videos link from the results box, or uncheck to add the Videos link to the results box (default is unchecked).
* Disable file count – select to remove the file count indicator that displays at the top left of thumbnails when there are multiple image or video attachments.


## Google API
Google have switched off their old YouTube search API and now require application developers to use the latest YouTube Data API (v3). In their words:
```
The YouTube Data API (v3) lets you incorporate YouTube functionality into your own application. You can use the API to fetch search results and to retrieve, insert, update, and delete resources like videos or playlists.
```
A new Google API option on the Settings page allows a Google API key (with the new YouTube Data API (v3) enabled) to be stored in EQUELLA. This allows users to search and select YouTube content from an attachment control during contribution in the same manner as prior to the API change.

NOTE: If the Google API key is not configured in EQUELLA, existing YouTube links will continue to open and play. However, searching for new YouTube content during contribution or editing of resources will result in the following message being displayed:


### Google API configuration
The Google API option is accessed from Settings, Google API. The Google API page displays.

The Google API Key as provided by Google is entered. API Keys can be obtained from the Developers Console site after creating a project. For step-by-step instructions to obtain a Google API Key (with YouTube Data API (v3) enabled), use the video link on the Google API page.

## Institution filestore size limit
EQUELLA 6.4 allows administrators to set a filestore size limit per institution. This allows administrators to monitor the size of the filestore and receive warning emails once the size limit has been reached.

The new setting is accessed from the Server Administration, Institutions page. 

The Edit institution page displays.

Administrators can enter the required Filestore size limit in GB (e.g. 1.5). An email notification is sent to the system administrators if this limit is exceeded.

The Approximate filestore usage field shows the current usage.

When filestore size limits are set, the Health check page also displays filestore usage information. 

## LTI consumer configuration
In EQUELLA 6.4, the OAuth1 (LTI authentication) configuration that was included as an OAuth flow option in Settings, OAuth in prior versions, has been separated out into a new Settings option labelled LTI Consumer. Additionally, the LTI role mappings page (also accessed from Settings in EQUELLA 6.3) has been incorporated into the same function. A number of new configuration options have been introduced, to both match the Shared Secret functionality and enable more detailed role mapping.

After upgrading to EQUELLA 6.4, previously existing OAuth1 (LTI authentication) registrations display in the new LTI Consumer option, accessed from the Settings page. 

Users who have the equivalent OAuth privileges will automatically inherit the new CREATE_LTI_CONSUMER, EDIT_LTI_CONSUMER and DELETE_LTI_CONSUMER after the upgrade.

### LTI consumer configuration options
A number of configuration options have been added to create parity with Shared Secret functionality.

A detailed mapping section allows administrators to map both standard LTI roles and custom roles to existing EQUELLA roles. 

New options include:
* Username prefix – users can enter a prefix value that is added to the front of usernames to distinguish from other LTI consumers
* Username postfix – users can enter a postfix value that is added to the end of usernames to distinguish from other LTI consumers
* Usable by – administrators can select specific users, groups and/or roles that can use this LTI consumer registration.
  * Unknown user handling – choose how to handle logon attempts with a username that doesn’t exist in EQUELLA. Options are:
  * Deny access and present error message
  * Treat user as a guest
  * Create local user and add them to the following groups… - choosing this option displays a link to a group selector.
* LTI/LIS Role Mappings – this section enables standard LTI roles as well as other custom roles to be mapped to roles within EQUELLA. Included are:
  * Instructor role – click the Add roles link to select the EQUELLA role/s to which the Instructor role should be mapped.
  * Other roles – enables LTI and custom roles (other than the Instructor role) to be mapped to the required EQUELLA role/s. Typing a minimum of two characters in the Enter LTI/LIS role text field displays a list of standard LTI roles to select. Alternatively, if the source role is not a standard role, the role name can be entered in the field. Note that is must be an exact match to the source role (case sensitive and spelling). Once the source role is selected, click the Add roles link to select the EQUELLA role/s.
  * Unknown roles – click the Add roles link to select the EQUELLA role/s to be used for all unmapped LTI and custom roles.


## Online help for scripting

In the EQUELLA 6.3 release, scripting shortcuts were introduced. Those shortcuts are now available to view from the script editors within EQUELLA. To display the list of shortcuts, hover the mouse over the View available shortcuts text showing on the script editor page. 

## Push to LMS restriction
EQUELLA 6.4 sees the introduction of a new privilege, EXPORT_TO_LMS_ITEM, which, used in conjunction with the existing EXPORT_VIA_CONNECTOR privilege, allows administrators to restrict which resources can be added to external systems (LMSs), and can be set at Collection, Resource Status , Resource Metadata rule and individual resource levels.

After updating to EQUELLA 6.4, all users will be granted this privilege. Administrators will need to configure the privilege based on the requirements of the institution. When this privilege is not granted, the Add to external system option will not display in the Actions menu on the Resource summary page for affected resources.

## Reporting enhancements
To assist report writers creating reports against the EQUELLA database, an interactive EQUELLA 6.4 database map is available with the 6.4 release. Additionally, EQUELLA 6.4 also provides the ability for reports to be produced in MS Word format.

An EQUELLA 6.4 database map is available as part of the 6.4 release to assist those users who create reports to navigate and understand the EQUELLA database structure. This interactive map provides a snapshot of the EQUELLA database, and information about its tables and table relationships, constraints, columns and other details.

Text has been added to some of the table comments to explain what type of information is stored in tables that have unobvious titles.

The EQUELLA database map (equella_schema.zip) is available to download from github. Once the file is upzipped, open index.html to explore the EQUELLA database.

### Word output for reporting
Users can now select Word as an output format for reports (from the Show as… drop-down on the reporting page). Selecting this option downloads a .doc file that can then be opened in MS Word. 

## Search enhancements
A number of enhancements to EQUELLA’s search functionality have been added in 6.4. These include:
* Immediate display of search suggestion results once selected.
* Ability to default the Show attachments icon to open or closed 
* Sort by creation date
* Multiple image indicator for Images view
* Video view 
 
### Immediate display of search suggestion
In versions prior to EQUELLA 6.4, when a user starts typing a search term in the search edit box and resource title suggestions show, when clicking the required suggestion the user then had to click the search icon to view the selected result/s. EQUELLA 6.4 removes the requirement to click the search icon, displaying the selected result/s as soon as the user clicks on the suggestion. 

### Ability to default Show attachments icon to open
The Show attachments icon that displays to the right of the resource name on results pages in EQUELLA can now be configured at a collection level for both native EQUELLA and integration screen results pages to default to open or closed.

This granularity allows administrators to set the default value for the icon to be open for some collections and not others, taking into account the average number and type of attachments typical to those collections.

Additionally, they could set the default value for the icon to be open to display attachments automatically on integration screen results pages to improve the resource selection process for those who add resources to LMS courses, but leave it as closed on the searches within native EQUELLA.

The new Show attachments icon default value options are configured from the Collection Definition Editors Display tab, on the Search Results Template sub-tab. 

### Sort by creation date
Date created has now been added as a value in the Sort drop-down for all results pages. When selected, resources display based on the date they were created. 

## Term Selector
In EQUELLA 6.4, a user no longer needs to click the Select button after selecting a taxonomy result from the Auto-complete edit box drop-down list of a Term selector control. The selected result will be added to the table immediately.

A user selects the required term from the taxonomy results list.

## View attachment privilege
In EQUELLA 6.4, the new VIEW_ATTACHMENTS privilege allows administrators to restrict users that are provided a link to an attachment stored in EQUELLA to access only that attachment, and not the item metadata or list of attachments for that item.

For example, an administrator may wish to prevent students from being able to manipulate an attachment URL provided to them in an LMS course to gain access to the attachment’s associated Resource summary page. To achieve this, the administrator would revoke (or not grant) VIEW_ITEM and DISCOVER_ITEM for the relevant users, groups or roles, but grant VIEW_ATTACHMENTS. If access to the Resource summary page is attempted, an Access denied message displays and the user is prevented from viewing the page. 

## Z39.50 configuration enhancements
The Z39.50 Remote Repository type has been updated to allow administrators to configure desired advanced search fields.

Advanced search fields for Z39.50 searching were hard coded in previous releases, with fields mapped to return standard values such as Title, Author, Edition etc. In EQUELLA 6.4, administrators can choose to load EQUELLA Default, Bath level 0 or Bath level 1 profiles as the default attributes. Furthermore, additional fields can be added if required.

### Load default attributes
A new option on the Remote Repository Editor page (accessed from the Administration Console) allows administrators to select the search fields to be used for searching the selected library. The options are:
* EQUELLA Default – loads the default EQUELLA values (this is the default value).
* Bath level 0 – loads the Bath level 0 values.
* Bath level 1 – loads the Bath level 1 values.

Once the required field set has been selected, the Standard query attributes belonging to that set display (but can be edited), and the search fields and their attributes display in the table at the bottom of the screen.

### Adding additional search fields
Additional search fields and their attributes can be added to the table then used when searching the repository from the Search page (when Allow advanced searching is enabled).

A user can add a custom field by typing in the field Name and associated Attributes, then clicking Add. For information regarding Z39.50 attributes, see http://www.loc.gov/z3950/agency/defns/bib1.html.

The new search field is then added to the table, and appears as a search field on the Z39.50 search option from the Search page. 