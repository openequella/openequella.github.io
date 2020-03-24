[Home](https://openequella.github.io/)

# Wizard Controls Reference Guide

Table of Contents

- [Wizard controls overview](#wizard-controls-overview)
- [Wizard controls](#wizard-controls)
- [Wizard control reference](#wizard-control-reference)
- [Advanced Scripting](#advanced-scripting)
- [Attachments](#attachments)
- [Button](#button)
- [Calendar](#calendar)
- [Check Box Group](#check-box-group)
- [DRM](#drm)
- [Edit Box](#edit-box)
- [Email Selector](#email-selector)
- [File Manager](#file-manager)
- [Group](#group)
- [Group Item](#group-item)
- [Group selector](#group-selector)
- [HTML Edit Box](#html-edit-box)
- [List Box](#list-box)
- [Multi-Language Edit Box](#multi-language-edit-box)
- [Navigation Builder](#navigation-builder)
- [Page](#page)
- [Radio Button Group](#radio-button-group)
- [Raw HTML](#raw-html)
- [Repeater](#repeater)
- [Role selector](#role-selector)
- [Shuffle Box](#shuffle-box)
- [Shuffle Group](#shuffle-group)
- [Shuffle List](#shuffle-list)
- [Static Metadata](#static-metadata)
- [Term Selector](#term-selector)
- [User Selector](#user-selector)

## Wizard controls overview

The openEQUELLA Administration Console enables the creation and customization of a variety of user wizards. Each of these wizards contains a range of controls that translate to checkboxes, buttons and fields etc. to prompt users to input text, make selections, upload files and various other actions.

The purpose of this reference guide is to describe the controls available to contribution wizards; where and why each control is used and how they are configured in the Administration Console Collection Definition Editor. Some of the wizard controls are also used to configure advanced searches in the Administration Console Advanced Search Editor and these controls are referenced accordingly.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA, and as such may differ in appearance to your own installation.

## Wizard controls

Wizard controls are configured in the Administration Console. A choice of controls can be added to:

- Contribution wizards—created in the Collection Definition Editor. Refer to the openEQUELLA Collection Definitions Configuration Guide for information on the editor.
- Advanced search wizards—created in the Advanced Searches Editor. Refer to the openEQUELLA Advanced Search Configuration Guide for information on the editor.

All wizard controls can be added to a contribution wizard while an Advanced search wizard can contain only the following controls:

- Calendar
- Check Box Group
- Edit Box
- Group Selector
- List Box
- Radio Button Group
- Raw HTML
- Role Selector
- Shuffle Box
- Shuffle List
- Term Selector
- User Selector

The Collection Definition Editor and the Advanced Search Editor contain common configuration elements such as the Hierarchy pane (also known as the Control list pane in the Advanced Search Editor) and the Control Editor pane.

### Hierarchy pane

Wizard controls are added to the Hierarchy pane located on the left-hand side of the editor.

In the Collections Definition Editor, the hierarchy provides the structure for the controls that make up the wizard. All controls are added as children of the selected control node, with the exception of the DRM (Digital Rights Management), Navigation Builder, Page and Static Metadata controls which are always added as new root elements in the hierarchy.

Wizard control icons within the Hierarchy pane are:

- DRM (Digital Rights Management)
- Navigation Builder
- Page
- Static Metadata
- Group, Repeater or Shuffle Group
- Group Item (NOTE: The Group Item control can only be added as a child of the Group control node.)
- Basic Control
- Basic Control with an associated script

In the Advanced Search Editor, only basic controls can be added and they are listed by title.

### Control Editor pane

The Control Editor pane is located on the right-hand side and displays the details of the control currently selected in the Hierarchy pane. The contents of this pane are dependent on the control that is selected.

### Common control elements

To maintain control configuration consistency, some panes, fields and buttons are common to many controls. This section describes these common elements. Control-specific elements are described in the section detailing the individual control.

#### Title

Enter a succinct and descriptive title name for the control (e.g. Title) in the Title field. The title is displayed to users above the control. HTML tags can be used if required, such as

```html
<b></b>
```

#### Description

Enter a brief instruction or explanation in the Description field if the function of the control is not fully explained by the title. The description is displayed above the control and below the title.

#### Scripting button

Click Scripting to display the Script Editor. Scripting can be used to modify controls based on resource metadata, user roles or resource status. For example, a control could be hidden or displayed based on previous data entered. (NOTE: When a control has a script, a red dot appears beside the control name in the list in the left-hand pane.)
The Script Editor provides two options:

- Basic—for simple and quick script creation.
- Advanced—for users who are more familiar with openEQUELLA and JavaScript™.

#### This control is mandatory

Check the This control is mandatory checkbox to enforce that data must be entered in the associated control before the wizard can be completed. A red asterisk displays beside mandatory controls in the contribution wizard.

When a user attempts to submit a resource without entering data into a mandatory field it causes a warning dialog to be displayed and the resource cannot be published.

#### Select metadata target(s) for this control

Most controls require schema elements to be designated as the storage area for entered data. These schema elements are called metadata targets. Multiple metadata targets can be selected for controls.

The elements of this section are:

- Add—click to display a Choose a schema element? dialog box.
- Remove—click the button to remove the currently selected metadata target.

Select a schema element (e.g. ‘xml/item/itembody/name’) then click OK to display it as the selected metadata target on the control page.

## Wizard control reference

This section describes the controls that can be added to a contribution wizard in the Collections Definitions Editor. Some of the controls can be added to an Advanced search wizard in the Advanced Search Editor and these controls are referenced accordingly.

## Advanced Scripting

Customized wizard controls and content can be created using an Advanced Scripting control in a contribution wizard.

The Advanced Scripting control:

- uses JavaScript™, FreeMarker and HTML
- is shareable, with import and export options

The Advanced Scripting control requires advanced knowledge of scripting languages.

## Attachments

The Attachments control enables the configuration of attachments and the various attachment types that can be linked to resources during the contribution process.

The attachments control has the following elements:

- Title and Description—the title and description is displayed on the contribution wizard page, so make sure it is meaningful to the user.
- This control is mandatory—select this checkbox to make the attachments control mandatory (i.e. if an attachment hasn’t been added, the resource can’t be published).
- Allow multiple attachments—select to allow more than one attachment to be added to the resource.
  - Maximum number of attachments allowed for this attachment control – select this checkbox to select the maximum number of attachments that can be linked or uploaded during contribution for this attachment control This includes all attachment types enabled for the control (e.g. files, URLs, YouTube videos)
- Select metadata target(s) for the control:—click Add to open the Choose a schema element? dialog and select the required metadata node.
- Allow the following attachment types:—the following attachment types covered in the sections below are supported and can be enabled or disabled using the checkboxes on the Attachments control page. The user’s view of this control on a contribution wizard remains unchanged irrespective of the enabled attachment types.

When the Add a resource link is clicked, and there is more than one attachment type enabled, the Select type page displays.

If only one attachment type is enabled, the page specific to that type opens immediately.

#### Echo360 Presentations

The Echo360 Presentations attachment type enables users to link Echo360 presentations to their openEQUELLA resources.

#### openEQUELLA Resources

The openEQUELLA Resources attachment type enables users to search for and link to other resources or attachments within the openEQUELLA repository or from external sources.

The attachment type can be configured to allow searching within the entire repository and other repositories, or searches can be restricted to particular collections and sources.

The openEQUELLA Resources control elements are:

- Selected resources are—select from Not specified (all resources, regardless of copyright status), CLA Holdings (in the UK) or CAL Holdings (in Australia).
- Allow selection of—select from Resources or Attachments to allow both resources and attachments, Resources only, or Attachments only. This option is only available when Not specified is selected in the Selected resources are drop-down.
- Restrict searching to the following collection:—check to select the collections that can be searched. Move required collections to the right-hand pane of the shuffle box using the > button. The >> button moves all collections at once. To remove a selected collection, use the < button, or to remove all collections, use the << button.
- Restrict advanced search usage to the following:—check to limit the advanced searches that can be searched. Move required advanced searches to the right-hand pane of the shuffle box using the > button. The >> button moves all advanced searches at once. To remove a selected advanced search, use the < button, or to remove all advanced searched, use the << button.
- Restrict searching to the following dynamic collections:—check to limit the dynamic collections that can be searched. Move required dynamic collections to the right-hand pane of the shuffle box using the > button. The >> button moves all dynamic collections at once. To remove a selected dynamic collection, use the < button, or to remove all dynamic collections, use the << button.
- Restrict contribution to the collections—check to limit the collections available for contribution. This refers to the functionality provided by the Contribute button on the Select page during contribution. Select collections that can be contributed to by using the > button. The >> button moves all collections at once. To remove a selected collection, use the < button, or to remove all collections, use the << button. NOTE: For the Quick Contribute feature to be enabled on the Select page the collection must be selected in this option and in the Settings page Selection sessions function.

If a search or contribution option has been restricted (checked) but no collections, searches or sources have been selected and moved to the right-hand pane, that option will not be available from the Select or Search page. For example, if the Restrict contribution to the collections: checkbox has been selected, but no collections have been moved to the right hand pane, the Contribute portlet does not display on the Select page.

#### External tool provider (LTI)

Selecting the External tool provider (LTI) attachment type enables users to select LTI tools from external providers to be added as links to a resource during contribution.

#### Files

Selecting the Files attachment type enables users to upload one or more files or archives to attach to a resource during contribution.

The Files attachment type configuration options are:

- General
  - Restrict individual upload file size – select this checkbox to enter a maximum size (in megabytes) for files uploaded during contribution to this attachment control. Digits can be typed and decimal points used. Numbers can also be increased or decreased by using the arrows. During contribution, if a file larger than the set maximum is attempted to be uploaded, a message will alert the contributor and will prevent the file from uploading.
  - Do not allow unzipping of files – select this checkbox to disable the option to extract archive files on upload to select files contained within the archive.
- Thumbnails:
  - Do not generate thumbnails by default – select this checkbox to prevent any thumbnails from being generated for files uploaded using this attachment control.
  - Allow contributors to turn thumbnail generation on or off – select this checkbox to allow users to prevent thumbnail generation for each file they upload during contribution by selecting a ‘No thumbnail’ checkbox.
- Only allow upload of content packages (one content package permitted per item) – select this checkbox to restrict the upload of files to only content packages. Additionally, one or both of the following restrictions can be applied:
  - QTI packages – select this checkbox to allow only packages recognized by the system as IMS QTI 2.1 standard packages to be uploaded.
  - SCORM packages – select this checkbox to allow only packages recognized by the system as SCORM packages to be uploaded.
- MIME type restrictions – allows users to restrict files being uploaded during contribution to selected MIME types.
  Select Restrict to the following MIME types then highlight the allowed MIME types and use the > button to move them to the right hand panel. Note that Ctrl/click and Shift/click can be used to select multiple values.
  During contribution, if a file with a MIME type other than one selected and moved to the right hand panel is attempted to be uploaded, a message will alert the contributor and will prevent the file from uploading.

#### Flickr photos

Selecting the Flickr photos attachment type enables users to add Flickr photo links to a resource during contribution. The Flickr photos section allows the user to configure API key information, if required.

The Flickr configuration elements are:

- Flickr API key—enter your Flickr API key here. If you don’t have one, the inbuilt openEQUELLA key is used; therefore leave these fields blank. If you require your own key but don’t currently have one, click the here link to open the Flickr The App Garden and apply.
- Flickr API shared secret—enter the shared secret that matched the key.

#### Google Books

Selecting the Google Books attachment type enables users to search for Google Books™ content to be added as links to a resource during contribution.

#### iTunes U Tracks

Selecting the iTunes U Tracks attachment type enables users to add iTunes U™ tracks to a resource during contribution. The iTunes U Tracks section allows the user to configure channel definitions, if required.
The iTunes U Tracks configuration element is:

- iTunes U Institution ID—enter the site address without the http prefix and slashes (e.g. <https://deimos.apple.com/WebObjects/Core.woa/API/ShowTree/utm.edu> becomes deimos.apple.com/WebObjects/Core.woa/API/ShowTree/utm.edu). A list of public iTunes U sites can be found at <http://itunesu.pbwiki.com/>.

#### Kaltura streaming media

Selecting the Kaltura streaming media attachment type enables users to search for Kaltura streaming media items to be added as links to a resource during contribution. Additionally, new media can be uploaded to the Kaltura server during contribution.

The Kaltura streaming media configuration elements are:

- Kaltura server - Multiple Kaltura servers, both local and SaaS, can be configured, and each attachment control can have a relevant server selected from the drop-down list. The Kaltura server settings are configured through the Kaltura function accessed from the Settings page.
- Restrictions – Kaltura functionality can be restricted using one of the following options:
  - None – Users may choose to upload new media or select existing media – selecting this option allows users to search the Kaltura server and select existing media to link to a resource or upload new media during contribution.
  - Allow uploading of new media only – selecting this option restricts users to only uploading new media during contribution.
  - Allow the selection of existing media only – selecting this option restricts users to searching the Kaltura server and selecting existing media during contribution.

#### URL Links

Selecting the URL Links attachment type enables users to enter one or more URL links to a resource during contribution.

#### Web Pages

The Web pages attachment type enables users to author, edit or import web pages.

#### YouTube Videos

Selecting the YouTube attachment type enables users to add YouTube™ video links to a resource during contribution. The YouTube Videos section allows the user to configure channel definitions, if required.

Check the Enable YouTube channels checkbox to configure YouTube channel information. The YouTube videos configuration elements are:

- Allow searching within channels defined below:—select this option to define specific channels relevant to a collection. These channels appear in a Within drop-down list as well as an All Youtube option when adding a YouTube video during contribution, making searching easier.
- Restrict searching to within channels defined below—select this option to define specific channels relevant to a collection. These channels appear in a Within drop-down list, but with no All YouTube option. The user must choose one of the configured channels to search in.
- Enable YouTube channels
  - Channel Name—enter the name of the channel
  - Channel ID—enter the channel identifier, which is the last part of the channel URL. For example, <https://www.youtube.com/channel/UCGm3CO6LPcN-Y7HIuyE0Rew> would become UCGm3CO6LPcN-Y7HIuyE0Rew.

To add a YouTube channel

1.  Enter a name to display in the drop-down list during contribution in the Channel Name field (e.g. Monty Python).
2.  Enter the YouTube Channel ID (e.g. UCGm3CO6LPcN-Y7HIuyE0Rew).
3.  Click Add.

Use the up arrow and down arrow buttons to change the order of the list. This will change the order they appear in the drop-down list during contribution.

To remove a channel, highlight the required channel and click Remove.

## Button

The Button control enables the user to create a button with a function determined by an associated script.

The Button control elements are:

- Text to show on button—enter text (e.g. Example) to be displayed on the button.
- JavaScript to be executed when button is selected—enter JavaScript to enable the function on the button.

## Calendar

The Calendar control allows the selection of a date or date range. For example, a publication creation or modification date, or to control resource use or availability.

The Calendar control elements are:

- Default Date—select to choose a default date to display to the user in the calendar control. The default date can be selected:
  - by selecting a fixed date. Select the radio button then select to open a calendar control to select a specific default date.
  - selecting an option relative to the contribution date from the drop-down list.
- Date format – select the required format from:
  - Day, month and year – requires a day, month and year to be selected.
  - Month and year – requires the month and year to be selected.
  - Year – requires only the year to be selected.
- Automatically reload controls after this one on selection—select to cause the wizard page to refresh once the user has selected a date. This option is checked in the situation where the selection of a calendar value causes an associated script to run, and may result in other controls being displayed.
- This control should select a time range—select to enable a date range with a From calendar control and a To calendar control. When selected in the contribution wizard, the control opens a calendar display that allows users to select the relevant dates.

The Calendar control is also available in the Advanced Search Editor.

## Check Box Group

The Check Box Group control creates a checkbox group from which one or more elements can be selected.
The Check Box Group control elements are:

- Number of columns—select how many columns will be displayed on the wizard page. The default setting is 1.
- Automatically reload page on selection—check when the control has an associated script and different controls or options need to be shown after the user’s selection.

#### Add checkboxes to the Check Box Group pane

- Check Box Name—enter a name to be displayed next to the checkbox.
- Check Box Value—enter a value to make it easily identifiable for an associated script usually the same as the name). This is the value that will be stored in the metadata target.
- Add—click to add checkbox names and values to the list.
- Remove—click to remove the selected checkbox from the list.
- Up Arrow—click to move the selected checkbox above its neighboring element.
- Down Arrow—click to move the selected checkbox below its neighboring element.
- Sort—click the button to rearrange the checkbox group into alphabetical order.
- Selected—check this option to have the checkbox selected as default. Uncheck the box to deselect the option.

The Check Box Group control is also available in the Advanced Search Editor.

## DRM

The DRM (Digital Rights Management) control is used to manage digital rights for resources uploaded to the repository.

The DRM control can only be added as a new root element in the hierarchy.

Adding a DRM control displays one or two pages in a contribution wizard. These pages gather information on the digital rights associated with the contributed resources.

## Edit Box

The Edit Box control allows entry of basic text such as names, descriptions, tags, keywords, comments or other details.

The Edit Box control elements are:

- Initial value—enter a default value that is automatically applied to the control, but that can be altered at the time of contribution or during editing. This can be used for storing potentially repetitive information pertaining to a given collection, such as course names or codes.
- Number of rows—select the number of rows displayed in the box. When more than one row is selected a scroll bar is added. The default setting is 1.
- Warn contributor if data in this field is not unique for items in this collection—if data is not unique, users will be asked to accept the duplication during contribution before the resource can be submitted. For the checking to perform correctly, ensure each metadata target in the chosen schema is marked as ‘Indexed for Advanced Searching’.
- Enforce that data in this field is unique for items in this collection—this option is only enabled if the preceding option is selected. When this box is selected, data entered must be unique. Users will be alerted to any duplication, and if the data is not altered to be unique the resource can only be submitted as a draft.

The Edit Box control is also available in the Advanced Search Editor.

## Email Selector

The Email Selector control allows for the selection of the email addresses associated with registered openEQUELLA users.

The Email Selector control elements include:

- Allow selection of multiple email addresses—by default this control allows the selection of a single email address. Selecting this option allows multiple email address to be added.

## File Manager

The File Manager control is a Java™ applet that allows for advanced management of resources being contributed. Users can:

- drag-and-drop files and folders from a local computer or network;
- create, delete or rename folders;
- directly edit files using native tools such as Word™;
- easily download files to the local computer or network; and
  & mark which files are to be shown (or not) in the resource summary.

The File Manager control elements are:

- Automatically mark root-level files to be shown in the resource summary?—select to display root-level files (files not in folders) automatically on the resource summary. If this is not checked, the Show in Item summary button in the File Manager must be selected for each required attachment to display on the resource summary page.
- Allow WebDAV file management—select to allow WebDAV functionality in openEQUELLA. WebDAV functionality enables the user to add resources to a web-accessible folder to make them available to users for the purposes of facilitating collaboration on documents, similar to the way a FTP or cloud server would operate.

An example of the File Manager with WebDAV enabled displayed in a contribution wizard.

## Group

The Group control is used to create a group of controls that exist under a group heading in a contribution wizard. It is primarily for display purposes; to create a clear relationship between associated controls. This control cannot be used in isolation, it must be configured with child controls. To add specific controls to the group, a Group item must first be added as a child of the Group.

The Group control elements are:

- Allow multiple groups to be selected—check to enable the selection of more than one group item. When this property is checked a checkbox is displayed with each item in the group and when un-checked a radio button is displayed.

## Group Item

The Group Item control cannot be used in isolation, but must be added as a child of the Group control.

The elements of the Group Item control are:

- Title—enter a name to be displayed with the associated control (e.g. Search for Google Books)
- Value—enter a value to make the control easily identifiable for an associated script.
  Click Add to open the Select a control... dialog. Select the appropriate control (e.g. Attachments) and click OK. The selected control is added as a child of the Group Item control.

Further controls can be added to the Group Item control, and further Group Item controls with child controls can be added to the Group control.

## Group selector

The Group Selector control enables the selection of groups during contribution and stores the details with the resource metadata. For example, the group selector could be used with a Dynamic metadata ACL to select groups whose users have access to a collection or even specific item.

The Group Selector control elements are:

- Allow selection of multiple groups—check to allow more than one group to be selected.
- Restrict group selection by parent groups—check to restrict group selection to the selected parent groups. When using a restricted group selector during contribution, the user is notified of the available parent groups. Any ‘child’ groups belonging to those parent groups can be selected.

Select group(s)

- Search.. —click the button to display a Selected group(s) dialog. Enter search terms (e.g. content) in the search field and click Search. Matching results are returned. Leave blank to view all groups.

Select the parent groups that users can select using the group selector during contribution.

## HTML Edit Box

The HTML Edit Box control provides an inline editor within the contribution wizard that allows users to create web page content during contribution.

The HTML Edit Box control elements are:

- Only load this editor on-demand—check to display the HTML Editor as read-only. Selecting this option can save page-loading time.

Select the [Click here to edit] link to enable the HTML Editor.

Enter and/or edit content as required, then select the [Click here to lock] link to store updated content and return the Editor to a read-only state.

Leave the Only load this editor on-demand checkbox unchecked to load the HTML Editor automatically.

The Insert openEQUELLA Content button can be configured to allow searching within the entire repository, or searches can be restricted to particular collections, dynamic collections or advanced searched. Additionally, the collections available for contributions can be restricted.

The Insert openEQUELLA Content control elements are:

- Restrict searching to the following collection:—check to select the collections that can be searched. Move required collections to the right-hand pane of the shuffle box using the > button. The >> button moves all collections at once. To remove a selected collection, use the < button, or to remove all collections, use the << button.
- Restrict advanced search usage to the following:—check to limit the advanced searches that can be searched. Move required advanced searches to the right-hand pane of the shuffle box using the > button. The >> button moves all advanced searches at once. To remove a selected advanced search, use the < button, or to remove all advanced searched, use the << button.
- Restrict searching to the following dynamic collections:—check to limit the dynamic collections that can be searched. Move required dynamic collections to the right-hand pane of the shuffle box using the > button. The >> button moves all dynamic collections at once. To remove a selected dynamic collection, use the < button, or to remove all dynamic collections, use the << button.
- Restrict contribution to the following collections—check to limit the collections available for contribution. This refers to the functionality provided by the Contribute button on the Select page during contribution. Select collections that can be contributed to by using the > button. The >> button moves all collections at once. To remove a selected collection, use the < button, or to remove all collections, use the << button. NOTE: For the Quick Contribute feature to be enabled on the Select page the collection must be selected in this option and in the Settings page Selection sessions function.

If a search or contribution option has been restricted (checked) but no collections, searches or sources have been selected and moved to the right-hand pane, that option will not be available from the Select or Search page. For example, if the Restrict contribution to the collections: checkbox has been selected, but no collections have been moved to the right hand pane, the Contribute portlet does not display on the Select page.

## List Box

The List Box control consists of a drop-down list where a single value can be selected.

The List Box control elements are:

- Automatically reload page on selection—select when the control has an associated script and different controls or options need to be shown after the user’s selection.

##### Add options to the List Box

- List Box Option Name—enter a name to be displayed in the list.
- List Box Option Value—enter a value to make it easily identifiable for an associated script (usually same as name). This is the value that will be stored in the metadata target.
- Add—click to add list box option names and values to the list.
- Remove—click to remove the selected list box option from the list.
- Up Arrow—click to move the selected list box option above its neighboring element.
- Down Arrow—click to move the selected list box option below its neighboring element.
- Sort—click the button to rearrange the list box option group into alphabetical order.
- Selected—check to set a list box option as a default. Uncheck the box to deselect the option.

Click on the down arrow to display a drop-down list of available options.

The List Box control is also available in the Advanced Search Editor.

## Multi-Language Edit Box

The Multi-Language Edit Box control can be used in place of a normal edit box that only stores non-language specific values. It allows users to input multiple language strings into the resource XML, so that the control will then display the string relevant to the selected language.

The Multi-Language Edit Box control elements are:

- Number of rows—select the number of rows displayed in the box. When more than one row is selected a scroll bar is added. The default setting is 1.
- Language button—in this example, the available contribution languages are English and Indonesian. Click English to display the language options.

Enter data in one or both language fields (e.g. Username in the English field and Nama pengguna in the Indonesian field).

Clicking the language drop-down (e.g. English) displays the option to select the other languages, or Show all. Data can be entered in either language in the corresponding field.

Select the Collapse link to return to the default view.

## Navigation Builder

The Navigation Builder control adds a page to the contribution wizard that allows users to:

- organize resource content into a package with customised navigation;
- provide content viewers with a ‘split view’ option where attachments can be viewed in two independent panes;
- rename files; and
- specify the viewer type for individual attachments.

A Navigation Builder control will always be added as a new root element in the hierarchy.

## Page

Page controls provide logical steps and group relevant wizard controls in a contribution wizard, with each wizard comprising at least one page. Pages are displayed as links on the right-hand side of a contribution wizard.

The Page control element is:

- Title—enter a name (e.g. About) to be displayed to users on the wizard page.

A Page control is always added as a new root element in the hierarchy.

## Radio Button Group

The Radio Button Group control displays a group of options where only one can be selected.

The Radio Button Group control elements are:

- Number of columns—select how many columns will be displayed on the wizard page. The default setting is 1.
- Automatically reload page on selection—check when the control has an associated script and different controls or options need to be shown after the user’s selection.
  Add radio buttons to the Radio Button Group
- Radio Button Name—enter a name to be displayed next to the radio button.
- Radio Button Value—enter a value to make it easily identifiable for an associated script. This is the value that will be stored in the metadata target.
- Add—click to add radio button names and values to the list.
- Remove—click to remove the selected radio button from the list.
- Up Arrow—click to move the selected radio button above its neighboring element.
- Down Arrow—click to move the selected radio button below its neighboring element.
- Sort—click the button to rearrange the radio button group into alphabetical order.
- Selected—check to set a radio button as the default. Uncheck the box to deselect the option.

The Radio Button Group control is also available in the Advanced Search Editor.

## Raw HTML

The Raw HTML control enables the entry of HTML to enhance the design and usability of wizard pages.

The Raw HTML control elements are:

- Predefined HTML—select to insert a horizontal rule on a wizard page.
- User defined HTML—enter HTML (e.g. to provide additional information on a wizard page). Metadata can be selected using the format {/xpath/to/my/data}, for example selecting the {/item/itembody/client} path populates the corresponding field in the contribution wizard with data matching the selected path (e.g. University of openEQUELLA).

The Raw HTML control is also available in the Advanced Search Editor.

## Repeater

The Repeater control creates a field that can be duplicated on the wizard page. It can be used in instances such as copyright, when entering several book chapters, where each chapter consists of repeated input elements like title, chapter number, author and so on.

A Repeater control cannot be used in isolation—it requires at least one child to be added. Depending on the type of data being collected, any controls can be used.

The Repeater control elements are:

- Noun for ‘add’ button—enter words to be added to the button label text. For example, ‘additional section’ creates the button label Add additional section on the wizard page.
- Minimum/Maximum number of repeats—enter the quantity of repeats allowed. The default minimum number of repeats is set at one and the maximum at ten repeats.

Click the Add +noun (e.g. Add Additional Section) button to insert a duplicate section to the wizard page.

## Role selector

The Role Selector control enables the selection of roles and stores the details with the resource metadata. For example, the role selector could be used with a Dynamic metadata ACL to select roles whose users have access to a collection or even specific item.

The Role Selector control elements are:

- Allow selection of multiple roles—check to allow more than one role to be selected.

## Shuffle Box

The Shuffle Box control allows users to select one or more items by moving them from one pane to another using arrow buttons.

The Shuffle Box control elements are:

- Automatically reload controls after this one on selection—check when other wizard elements have associated scripts to change their state after the user makes a selection on this control.

#### Add items that will be shown in the left-hand side of the Shuffle Box

- Shuffle Item Name—enter a name to be displayed in the Shuffle Box.
- Shuffle Item Value—enter a value to make it easily identifiable for an associated script. This is the value that will be stored in the metadata target.
- Add—click to add shuffle item names and values to the list.
- Remove—click to remove the selected shuffle item from the list.
- Up Arrow—click to move the selected shuffle item above its neighboring element.
- Down Arrow—click to move the selected shuffle item below its neighboring element.

The Shuffle Box control is also available in the Advanced Search Editor.

## Shuffle Group

The Shuffle Group control allows users to add, delete or edit groups of details in a list (e.g. multiple contributor or publisher details). It requires one or more children, in the form of Edit Box and List Box controls, to be added and cannot be used in isolation.

Clicking the Add link opens a window displaying the child controls.

Entering any required information and clicking OK will close the window and populate the control with the entered information.

## Shuffle List

The Shuffle List control allows users to add any number of elements to a list (e.g. a list of multiple authors relating to a single document).

The Shuffle List control elements are:

- Warn contributor if data in this field is not unique for items in the collection—if data is not unique, users will be asked to accept the duplication during contribution before the resource can be submitted. For the checking to perform correctly, ensure each metadata target on the chosen schema is marked as ‘Indexed for Advanced Searching’
- Enforce that data in this field is unique for items in this collection—this option is only enabled if the preceding option is selected. When this box is checked, data entered must be unique. Users will be alerted to any duplication, and if the data is not altered to be unique, the resource can only be submitted as a draft.

The Shuffle List control is also available in the Advanced Search Editor. An additional Tokenise values checkbox is available for this control in the Advanced Search Editor.

This option is selected by default. If selected, each line of text entered in the shuffle list is split up into words for searching purposes. For example, the line English 101 will be searched by ‘English’ and ‘101’. If the option is not selected, each line of text is matched exactly in a search, returning only resources that have the exact term (e.g. ‘English 101’).

## Static Metadata

The Static Metadata control stores information that is fixed for all resources of a collection. Static metadata is held in selected schema nodes nominated as metadata targets.

A Static Metadata control is always added as a new root element in the hierarchy.

The Static Metadata control elements are:

- Metadata target—click Browse to display a dialog enabling the selection of an associated schema node (e.g. /item/copyright/@type).
- Metadata value—enter the metadata label (e.g. Book).
- Add—click the button to add the current metadata value to the metadata target and display the association list.
- Remove—click the button to remove the selected metadata target and value from the association list.

The value of Schema Item/Value pairs displayed in the association list become editable if double-clicked.

NOTE: Static metadata is not visible to users during resource contribution.

## Term Selector

The Term Selector control is used for the selection of terms associated with a pre-authored taxonomy.

The Term Selector control elements are:

- Taxonomy—select a taxonomy from the drop-down list. Taxonomies are configured in the Administration Console Taxonomy Editor.
- Allow multiple terms to be selected—check to allow more than one value from the list during contribution.
- Allow end-users to create new terms—check to allow users to add new terms to the selected taxonomy during contribution. (NOTE: This checkbox is only enabled if the ‘Allow end-users to add new terms during contribution’ checkbox is checked in the Taxonomy Editor for the selected taxonomy.)
- When saving selected terms—select to store the term as:
  - full path (e.g. Universe\Animal\Mammal\Cat); or
  - individual term (e.g. Cat).
- Restrict term selection to—select an option to control the type of term selected:
  - Top-level terms only
  - Leaf terms only
  - Any term—no restrictions
- Display the taxonomy using the following control—select the type of control to display in the contribution wizard:

  - Wide Pop-up Browser—select to display a modal dialog that allows users to browse or search for terms. This is similar to the Detailed Pop-up Browser except is doesn’t have the right-hand pane for taxonomies, providing a wide screen to display very long taxonomy terms. Checkbox options to Allow users to navigate the taxonomy by either Searching, Browsing, or both, are provided when this option is selected.
  - Auto-Complete Edit Box—select to display an edit box that will automatically complete an entered term. This is the best option to select if allowing users to add new terms to a taxonomy during contribution. A checkbox to Reload page on term selection can be selected.
  - Detailed Pop-up Browser—select to display a modal dialog that allows users to browse or search for terms. The right pane of the Pop-up Browser displays details associated with the selected taxonomy term. Checkbox options to Allow users to navigate the taxonomy by either Searching, Browsing, or both, are provided when this option is selected.

Click the Select terms link to open the pop-up browser.

The Term Selector control is also available in the Advanced Search Editor.

## User Selector

The User Selector control enables the selection of users and stores their details with the resource metadata. For example, the user selector could be used to assign workflow tasks to specific users during the workflow process.

The User Selector control elements are:

- Allow selection of multiple users—check to allow more than one user to be selected.
- Restrict user selection by groups—check to specify a group or groups that selected users must belong to. The Select group(s) pane displays if this option is selected.

#### Select group(s)

- Search..—click the button to display a Selected group(s) dialog. Enter search terms (e.g. content) in the search field and click Search. Matching results are returned.

NOTE: If the wildcard symbol (\*) is entered or the search field is left blank, all groups will be returned when the Search button is clicked.

Click on a group to select it (e.g. Int – Content Administrators), then click OK. Hold the CTRL key while clicking to select multiple groups. The selected group is added to the Select group(s) pane. Only users belonging to this group can be selected during resource contribution.

If the collection is designed to use this control as a moderator assigning tool with an associated workflow, the same group must be selected in the Workflow Task Editor—Moderators tab.

- Select metadata target(s) for this control—the selected metadata target must be specific for this control to avoid conflicts. If the collection has an associated workflow, the same metadata target must be selected in the Choose moderators based on a list of users stored in item metadata option on the Workflow Task Editor—Moderators tab.

The User Selector control is also available in the Advanced Search Editor.
