[Home](https://equella.github.io/)

# Collection Definitions Editor Configuration Guide

Table of contents

* [Collection definitions overview](#collection-definitions-overview)
* [Collection definition editor](#collection-definition-editor)
* [Configure collection definitions](#configure-collection-definitions)
* [Details tab](#details-tab)
* [Wizard tab](#wizard-tab)
* [Security tab](#security-tab)
* [Display tab](#display-tab) 
* [Metadata mapping](#metadata-mapping)
* [Expert Scripting tab](#expert-scripting-tab) 
* [Extensions tab](#extensions-tab)

## Collection definitions overview
An EQUELLA collection represents a unique container to store items within the EQUELLA Digital Repository. Each collection comprises a contribution wizard and an associated metadata schema, and can also include a workflow definition, access control rights, display template rules, copyright and digital rights management (DRM) controls. Collections are created and edited in the EQUELLA Administration Console Collection Definition Editor.

The purpose of this guide is to provide system administrators with an understanding of the EQUELLA Collection Definition Editor tool to enable successful contribution of items to the repository. 

The examples in this guide use a LOM compliant schema called the Generic Schema and a collection called the Learning Resources Collection. 

## Collection definition editor
Collection definitions wrap important information (metadata) and processes around raw files. Wizards gather this metadata during contribution and associate it with the contributed files to create a repository resource. The metadata can be used to control moderation and user access. 

A metadata schema must be defined before a collection definition can be created. 

An instance of the schema metadata is associated with each resource contributed to the collection and controls the resource’s lifecycle and search ability. The example in this guide uses the Generic Schema provided with the EQUELLA Vanilla Institution. [The EQUELLA Vanilla Institution is available here.](6.4VanillaReferenceInstitution.tgz)

Schemas are created using the Metadata Schemas tool from the Administration Console. 

Collection definitions are modified or created in the EQUELLA Administration Console.

**To access EQUELLA and open the Administration Console**
1. Log in to EQUELLA as an administrator, select Settings then Administration console.
2. The Administration console displays. Select Collection Definitions to display a list of collections
### Administration Console elements
When the Collection Definitions tool has been selected the Add, Edit, Remove, Clone, Import and Export buttons are enabled. (Providing the correct privileges have been granted)
#### Add
Click Add to display the Collection Definition Editor and create a new collection.
### Edit
Select a collection then click Edit (or double-click on a collection name) to display the Collection Definition Editor and modify the selected collection. 

If the selected collection is being edited by another user a Locked dialog is displayed.

Choose one of the following options:
* Open as read-only—disables the Save button so that no changes can be made to the collection.
* Forcefully unlock—unlocks the entity from another user. Editing can occur but the other user’s changes will be lost.
* Do not open—the selected collection’s editor is not opened.
### Remove
Click Remove to delete the selected collection. You will be asked to confirm this action.
### Clone
Click Clone to copy an existing collection. The cloned collection can then be modified by clicking Edit.
### Import
Click Import to import a collection that has previously been exported from the Administration Console. A warning dialog displays. Only ZIP files that have been exported from the Administration Console should be imported—other ZIP files may adversely affect the stability of the system.
### Export
Click Export to export a collection as a ZIP file.

## Configure collection definitions
The Collection Definition Editor provides an interface for collection creation with the following tabs:
* Details—general information for the collection definition, including name, description and category, associated metadata schema and workflow template. 
* Wizard—creates the contribution wizard to gather the metadata about the resource. 
Security—controls access to a collection and its wizard, resources or metadata.
* Display—contains the various templates for displaying a collection resource’s metadata.
* Metadata Mapping—enables the mapping of metadata from uploaded items to collection definition schema fields.
* Expert Scripting—enables the addition of scripts that can be run at particular points in the resource’s lifecycle. 
* Extensions—configures copyright compliance.

Each tab is described in the sections below:


## Details tab
The Details page is displayed when the Collection Definitions Editor is opened. The Details page allows the entry or editing of general collection information such as the name, description and category. Much of this information is displayed to the user when contributing resources and enables users to select a suitable collection definition for their contribution. The Details page elements include:
#### Collection name
The unique display name for the collection (e.g. Learning Resources). A collection cannot be saved if it is not named.
### Collection description
Descriptive information about the collection (e.g. General learning resources). This description is displayed to help contributors choose the most relevant collection when they are contributing resources.
#### Collection owner
By default, the owner of the collection is the creator of the collection. Click the Search button to display the Select Recipients... dialog where a new owner can be selected.
#### Select metadata schema
The metadata schema associated with the collection. Click on the arrow to display a drop-down list of available schemas. Select a schema (e.g. Generic schema) from the list. 
#### Allow SCORM packaging
This enables resources belonging to this collection to be downloaded as a SCORM compliant package. Click the arrow to display a drop-down list of available XSLTs. Select an XSLT from the list. Any SCORM XSLT templates uploaded using the metadata schema’s Transformation tab are associated with the metadata schema.   
#### Map to a workflow
Associate a workflow with this collection so that contributed resources automatically enter the selected workflow. Workflows are used to moderate resource quality. Click the arrow to display a drop-down list of available workflow templates and select a workflow from the list. 
#### Select review period
Set the period between moderation reviews to ensure the resource remains current. Once an item has been live for the set period it is automatically sent for re-moderation. Click the arrow to display a list of available review periods and select a time period from the list. This field is only enabled if a workflow has been assigned to the collection.
#### Select wizard category
The wizard category provides a means of grouping collections. The collection is displayed in the selected category on the user contribution page. Click the arrow to display a list of available wizard categories and select a category from the list. If there is no suitable category, new ones can be created. Select the Add link to display a New Wizard Category dialog. 

Enter a new category name (e.g. Demonstration) and click OK. The new category is added to the drop-down list. 

The collection name (e.g. Learning Resources Collection), description and wizard category (e.g. Demonstration) are displayed to users on the Contribute page. 
#### Save and Close buttons
Click Save to save the configuration details, and click Close to close the Collection Definition Editor.
## Wizard tab

The Wizard page enables the construction of a contribution wizard. Contribution wizards are used to assist contributors in providing the information (metadata) appropriate for the contributed resources. The wizard is displayed when a collection is selected from the Contribute page. 

Wizards comprise at least one page and each page can include a variety of wizard controls. Controls are available for prompting users to input text, make selections, upload files and various other actions. 
The Wizard page elements include:
#### Hierarchy pane
Located on the left-hand side of the page. It displays a Wizard node and the pages and controls that have been added to the wizard. The hierarchy provides the structure for the pages and controls that make up the wizard. Selecting a page or control will populate the Control Editor pane with its details.
#### Control Editor pane
Located on the right-hand side of the page. It displays the details of the currently selected control in the Hierarchy pane. The contents of the control editor pane are dependent on the selected control.
#### Movement arrows
Use the arrow buttons to change the order the controls appear in the hierarchy and hence the wizard.

Use the Up Arrow to move the selected control above its neighbouring sibling.

Use Down Arrow to move the selected control below its neighbouring sibling.

When moving a control any sub-controls it contains are also moved. There is the exception of the static metadata control that cannot be moved. 
#### Add button
Click Add to display the Select a control… dialog. The available controls depend on the type of the currently selected control. For example, if the wizard control is selected, DRM, Navigation Builder, Page and Static Metadata are the available controls. Select a control then click OK to add the control to the Hierarchy pane.
#### Remove button
Click Remove to delete the currently selected control.
### Wizard layout
The wizard layout must be configured for all contribution wizards. Select the Wizard node from the Hierarchy pane to display the page details in the Control Editor pane. 

The Wizard page elements include:
* Allow non-sequential page navigation for new resources—Check this box to allow random order stepping through wizard pages during contribution. This option also allows users to submit a resource without having to go to every page in the contribution wizard.
* Show page titles on Next/Prev buttons—check this box to allow the page navigation links to display the wizard page name instead of Next and Prev. 
* CSS Class – enter the name of a pre-defined CSS Class to be applied to the contribution wizard. This CSS Class is defined in the customer.css file imported when a theme is applied.
### Pages and controls
Select the Wizard node and click Add to display a Select a control... dialog. Only controls that can be added as root elements in the hierarchy are displayed at this point. All other controls are added as children of the Page node.
Available controls are as follows:
* DRM (Digital Rights Management)—collects information on the digital rights associated with contributed resources.
* Navigation Builder—allows users to create a navigation tree from uploaded items. It also enables the configuration of options such as available image viewers and split view.
*Page—used to provide logical steps in the wizard.
* Static Metadata—used to store metadata that is fixed for all resources of a collection.

Once a Page control has been added to the Hierarchy pane, child elements can be added. Select the Page node and click Add to display the Select a control... dialog. 

The two new control type icons displayed in this dialog are as follows:
* Control—represents all individual wizard controls.
* Group/Repeater/Shuffle Group—these controls are designed to collect multiple sets of information. These controls cannot be used in isolation but require one or more single controls to be added as children.
###  Common control elements
Every control will differ according to its purpose, but there are some elements that are common to most controls. These common elements are briefly described below:
#### Title
Data entered in the Title field is displayed to the user as the name of the control (e.g. Name).
#### Description
This field can describe the control or how to use it (e.g. Please enter a name for this resource (words in the title have a high search rank)). 
#### Scripting
Click the Scripting button to display the Script Editor.

Scripting can be used to evaluate schema items, user roles or resource status and to modify controls based on the result. Controls that have an associated script are displayed in the Hierarchy pane with a small red square beside them.
#### This control is mandatory
Select this check box to ensure that the control must be completed before the resource can be submitted to the repository. A red asterisk is displayed with mandatory controls during the contribution process. If a mandatory field has not been completed on a page, the page links display an asterisk beside the relevant page.

If the user saves the resource without completing all the mandatory fields, a warning dialog displays.

The user has the option to return to the wizard and complete any mandatory fields, or the resource can be saved as a draft and completed later.

#### Select metadata target(s) for this control
Most controls require a schema node to be designated as the storage area for entered data. These schema nodes are called metadata targets. Typically one target is selected although multiple metadata targets can be selected for any control. Click Add to display a Choose a schema element? dialog. 

The schema displayed corresponds to the one previously selected on the Details page. Select a schema element (e.g. item/itembody/name) and click OK to display the selected element in the Select metadata target(s) for this control field. 

### Create a Contribution Wizard
The example Learning Resources Collection wizard is a multi-purpose wizard with a variety of controls with associated scripts. The hierarchy of these controls is shown in the Collection Definition Editor. 
#### To add pages and controls
1. Select the Wizard node in the Hierarchy pane and choose a layout style.
2. Click Add to display the Select a control... dialog.
3. Select an element (e.g. Page) from the list.
4. Click OK to close the dialog. The Page node is added as a child of the Wizard node and the Page control page is displayed in the Control Editor pane. 
5. Enter a name in the Title field (e.g. About). This is the name displayed to users on the corresponding wizard tab or sidebar list.
6. Click Add to display the Select a control... dialog with the full list of available controls. 
7. Select an appropriate control.
8. Click OK to close the dialog. The selected control is added as a child of the Page node and its control page is displayed in the Control Editor pane.
9. Configure the control page as necessary.
Multiple pages and controls can be added to the wizard as required. 
#### To save the Wizard page settings
1. Click Save to save the configuration details.
2. Click Close to close the Collection Definition Editor.

## Security tab
User access to a collection is configured on the Collection Definition Editor Security page. Various privileges can be assigned to different users, groups or institutional roles, for example:
* Create, Delete and Edit this collection privileges are typically restricted to the System Administrator role. An administrator is typically granted permission to perform all actions on a collection and resources belonging to that collection.
* Contribute, Comment and Clone privileges are typically granted to the Contributor role.
* Search, View and Share privileges are typically granted to the Viewer role.

The Security page features three tabs: Access Control, Resource Status ACLs and Item Metadata ACLs that are described in the sections below:

### Access Control tab
The Access Control page comprises a Who can...? drop-down list of applicable privileges for the collection and a choice of interfaces for configuring user access to these privileges. 
#### Who can...?
Privileges can be granted to users enabling them to perform a variety of actions on a collection or resources within a collection. The privileges associated with collections and found in the drop-down list are:
* **add a course at time of activation from a LMS in any state**  – when users are granted this privilege the courses are automatically created in EQUELLA if there is no match found when activating courses from the integration screen. 
* **add comments to resources in this collection in any state** —allows users granted this privilege access to the comments area of a resource belonging to the collection.
* **allow contributors to mark attachments as restricted in this collection in any state** – allows users granted this privilege to see and select the Restricted checkbox on the Edit attachment dialog.
* **allow search filtering by this collection** —allows users granted this privilege to use an advanced search to find resources belonging to this collection.
* **allow user to override at time of activation in this collection in any state** – allows users granted this privilege the ability to override the copyright warning during activation of copyright content.
* **archive resources in this collection in any state** —allows users granted this privilege to archive resources belonging to this collection regardless of current status.
* **change the collection type of resources in this collection in any state**—allows users granted this privilege to move resources belonging to this collection to another collection. 
* **clone resources in this collection in any state**—allows users granted this privilege to clone resources of any status belonging to this collection.
* **contribute resources with this collection**—allows users granted this privilege to contribute new resources to the selected collection.
* **create new versions of resources in this collection in any state**—allows users granted this privilege to create new versions of existing resources of any status in this collection.
* **deactivate activation requests on resources in this collection in any state**—allows users granted this privilege to deactivate activation requests for resources of any status belonging to this collection.
* **delete activation requests on resources in this collection in any state**—allows users granted this privilege to delete activation requests for resources of any status belonging to this collection.
* **delete comments on resources in this collection in any state**—allows users granted this privilege to delete comments from resources of any status belonging to this collection.
* **delete resources in this collection in any state**—allows users granted this privilege to delete resources of any status from the collection.
* **delete this collection**—allows users granted this privilege to delete the collection definition itself.
* **discover resources in this collection in any state**—allows users granted this privilege to discover (or find) all resources with any status that belong to this collection. This is different to view resources in this collection in any state in that discover will show the resource names in a results list, but without the view option, the resource can’t be selected and viewed on the Resource summary page.
* **download resources in this collection in any state**—allows users granted this privilege to download resources of any status from this collection.
* **edit activation requests on resources in this collection in any state** – allows users granted this privilege to edit activation details.
* **edit copyright on resources in this collection in any state**—allows users granted this privilege the ability to edit copyright details for resources of any status belonging to this collection.
* **edit resources in this collection in any state**—allows users granted this privilege the ability to make changes to resources of any status belonging to this collection.
* **edit this collection**—allows users granted this privilege access to the Collection Definition Editor to make changes to this collection.
* **export resources from this collection in any state**—allows users granted this privilege to export resources of any status belonging to this collection.
* **export to LMS for resources in this collection in any state** – allows users granted this privilege to use the Add to external system link in the Actions menu to push items to an integrated LMS.
* **find uses for resources in this collection in any state** – allows users granted this privilege to view information regarding where the resources are used in an integrated LMS.
* **purge deleted items from this collection** – allows users granted this privilege to purge items from the collection, once the items have been marked as deleted.
reassign ownership of resources in this collection in any state—allows users granted this privilege to reassign the ownership of resources of any status belonging to this collection.
* **redraft resources in this collection in any state** —allows users granted this privilege to redraft resources of any status belonging to this collection.
* **set pricing information for resources in this collection in any state** – allows users granted this privilege to set the pricing details for resources belonging in this collection, when the EQUELLA Content Exchange has been enabled.
* **set resources in this collection in any state for review** – allows users granted this privilege to set resources belonging in this collection for review (sends them back into workflow).
* **share resources in this collection in any state** —allows users granted this privilege to share resources of any status belonging to this collection.
* **suspend resources in this collection in any state** —allows users granted this privilege to suspend resources of any status belonging to this collection. Suspending a resource prevents it from showing in results lists.
* **view activation requests on resources in this collection in any state**—allows users granted this privilege to view activation requests on resources of any status belonging to this collection.
* **view attachments for inactive portions in this collection in any state** – allows users granted this privilege to open and view attachment content for inactive copyright items.
* **view attachments for resources in this collection in any state** – allows users granted this privilege to view an attachment accessed from an attachment link.
* **view attachments marked as restricted in this collection in any state** – allows users granted this privilege the ability to view attachments that have been marked as restricted.
* **view comments on resources in this collection in any state** —allows users granted this privilege to view comments that have been added to resources of any status belonging to this collection.
* **view digital rights on resources in this collection in any state** —allows users granted this privilege to view digital right details that have been configured for resources of any status belonging to this collection.
* **view linked portions for resources in this collection in any state** – allows users granted this privilege to see the Links to other portions section on copyright portion record’s summary page.
* **view pricing information for resources in this collection in any state** – allows users granted this privilege to view the pricing details for resources in this collection when the EQUELLA Content Exchange is being used.
* **view purchase details for resources in this collection in any state** – allows users granted this privilege to view the purchase details on the Resource summary page for resources in this collection that have been purchased when the EQUELLA Content Exchange is being used.
* **view resources in this collection in any state** —allows users granted this privilege to view all resources belonging to this collection. This means the ability to click on a resource from a results list to open the resource summary page.
* **view sales history for resources in this collection in any state** – allows users granted this privilege to view the purchase history for resources in this collection when the EQUELLA Content Exchange is being used.
* **view the history of resources in this collection in any state** —allows users granted this privilege to view the moderation history of resources of any status belonging to this collection.
* **view the xml and directory of resources in this collection in any state** —allows users granted this privilege to add a tilde (‘~’) to the end of a resource summary URL belonging to this collection to view the xml and directory details of the resource.
### Configure user access
The interfaces available for configuring access to a collection are:
* Basic—allows the simple selection of users, groups or roles to be assigned to the current privilege. 
* Advanced—provides more comprehensive access control, enabling the granting or revoking of privileges for specific user entities. 
* Do not specify—this interface is not configurable. User access remains as the default set in the Administration Console Security Manager. Click the Show inherited privileges that will apply to display an action list showing users, groups or roles associated with the selected privilege. 
### Resource Status ACLs tab
The Resource Status ACLs page is used to configure access privileges that depend on the state of resources within the collection. It provides the same privilege list as the Access Control page with an additional control for selecting the resource status (e.g. draft, live, archived, moderating) associated with the privilege. ### Resource Metadata ACLs tab
The Resource Metadata ACLs page is used to control access based on resource metadata. It enables the creation of scripts that are evaluated to determine user access to a collection. 

### Dynamic Metadata ACLs
The Dynamic Metadata ACLs page is used to create permission rules based on User, Group or Role Ids that are applied dynamically during contribution. 

A dynamic metadata rule is created which sets the path, ID type (user, group or role) and the ACLs (privileges) that will be applied when a match is found during contribution. When the values of the metadata nodes for the user, group or role selectors used during contribution match the User, Group or Role IDs, the ACLs are automatically created. 


## Display tab
The Display page contains templates for displaying a collection resource’s metadata. Standard system default templates are provided, otherwise templates can be customized to suit the requirements of the collection. The Display page features the Resource Summary Display Template and Search Results Template described in the following sections:
### Resource Summary Display Template tab
The Resource Summary Display Template page controls how data is displayed on the Summary page for a resource belonging to the specified collection. 

Select the Hide Owner and/or Hide collaborator check-boxes to prevent the owner and collaborator names from displaying on the resource summary page.

Click Add to display the Add A New Resource Summary Section dialog

The options outlined below will display.

#### Purchase details for this resource
Shows details of any resource purchases (EQUELLA Content Exchange).
#### Comments and ratings for this resource
Displays comments and ratings that have been recorded for the resource on the resource summary page, with identity options. 
The following options display:
* Title – defaults to Add a comment. This title can be changed and displays as the section heading on the Resource summary page.
* Show the identity of user comments – select to display the identity of the user adding a comment to a resource. Once of the following options must then be selected:
First and last name, First name only or Last name only

Additionally, the following options are available for selection if an identity is to be displayed:

-- Suppress username from showing beside name – select this option to prevent the username from displaying beside the name format selected above.

--- Allow users to choose to hide their identity (identity of commenter is still recorded) – select this option to display the Add comment anonymously checkbox beneath the comment box. Users can select the checkbox to leave an anonymous comment. The username is stored in the database for reference if required.
* Always hide the identity of user comments (identity of commenter is still recorded) – select to make all comments added to the collection anonymous. The usernames are stored in the database for reference if required.
#### CAL citation for this resource
Displays the CAL citation on the Resource summary page. 
#### Resource title and description
Displays the name of the resource and any description that has been added on the resource summary page.
The following options display:
* Title – defaults to Basic information. This title can be changed and shows in the left hand panel but does not display on the Resource summary page.
* Limit the length of the title field – select to enter a Maximum length (characters) to display on the Resource summary page.
* Limit the length of the description field – select to enter a Maximum length (characters) to display on the Resource summary page.
#### An XSLT for advanced customization
Provides the ability to upload a custom display template. 
The following option displays:
* Title – defaults to XSLT. This title can be changed and shows in the left hand panel (e.g. differentiate between multiple XSLTs) but does not display on the Resource summary page.
#### Pricing details for this resource 
Displays the pricing details for resources that are available for purchase (EQUELLA Content Exchange).
#### A scriptable section for advanced customization
Provides a page where scripts can be added to customise the resource summary template. The following option displays:
* Title – defaults to Scripted section. This title can be changed and shows in the left hand panel (to differentiate between multiple Scripted sections) but does not display on the Resource summary page.
#### Attachments for this resource
Displays attachment details on the Resource summary page.
The following options display:
* Title – defaults to Links to resources. This title can be changed and displays as the section heading on the Resource summary page.
* Full screen links:

-- Show a link to view the attachments in a full screen package viewer – select to display the Full Screen link for attachments.

-- Show a link that opens a new window to view the attachments in a full screen package viewer – select to display the Full Screen (New Window) link for attachments.
* Display mode:

-- Structured view (original) – select to show the attachments displayed in a list view, or their navigational structure, if used. Thumbnails can be viewed by clicking the drop-down arrow on each attachment.

-- Thumbnail grid – select to show each attachment as a thumbnail with the file name beneath. This view should not be used for collections where navigational structure has been defined, nor with CAL/CLA configurations as it doesn’t support resource activation. 
* Restrict attachment display – this option is used if there are multiple attachment controls used within the one contribution wizard, and the administrator wants to show multiple separately names sections on the Resource summary page to display the attachments.

NOTE: To display all attachments for one or more attachment controls, leave this option blank.

By selecting the associated attachment control metadata targets (one or more), the file attachments or links belonging to those attachment controls will display in the section. 

#### To select metadata targets
1. Click Add. The Choose a schema element? dialog displays. 
2. Navigate to the required attachment control schema node, then click OK.
3. Once all the required schema nodes are selected, save the collection.

### Extra information from the resource metadata
Select additional resource details linked to specific metadata schema nodes to be shown on the resource summary page. 

The Extra Metadata elements include:
* Title – defaults to Extra Metadata. This title can be changed and shows in the left hand panel (to differentiate between multiple Extra Metadata sections) but does not display on the Resource summary page.
* Title—the display name of the section on the Resource summary page (e.g. Resource Type).
* Value Splitter—the value used to separate multiple results, such as a comma.
* Target Node—click Browse  to navigate to the required metadata node in the metadata schema then click OK. 
* Type—select the type of result from the drop-down list. Available values are Text, Date, HTML or URL.
* Display Mode—select from Span page width or half width.
* Truncate Length—select the maximum number of characters to display. The default is 355.
Note: The information on the resource summary page displays in the order it is listed on the Resource Summary Display Template.

Use the Up Arrow  to move the selected component above its neighboring sibling.
Use the Down Arrow to move the selected component below its neighboring sibling.

### Search Results Template
The Search Results Template page allows specific metadata to be displayed on all results pages for resources belonging to the selected collection, as well as attachment display options. The results template itself can’t be edited, but additional information can be added to it. 

#### Thumbnail options
There are a number of thumbnail display options for results pages.
* Disable thumbnails – Unchecked by default. For resources that have one or more attachments of the type with an associated thumbnail, a thumbnail displays to the right of the resource details on the results page. For multiple attachments, this thumbnail rotates through each attachment. 

Select the checkbox to remove these thumbnails from the results page.

* Select the display mode for the attachments view in search results - when search results display, those with attachment show an  icon to the right of the resource title. Clicking on the show attachments icon lists the attachments in one of the following formats:

-- Structured view – this view displays the attachments in a list format, including navigation structures if relevant. 

-- Thumbnail view – this view displays the attachments as thumbnails. Note that this view is not compatible with CAL/CLA configurations as it doesn’t support resource activations, nor does it show navigation structures. 

Clicking the Up Arrow icon closes the attachment display section.

#### Show attachments icon default value
The Show attachments icon displays to the right of the resource title on all EQUELLA results pages for resources with one or more attached files or links. Clicking on this icon lists the attachments in either structured or thumbnail view. 

The default value of this icon is Closed, but can be set to Open for both Standard results pages and Integration screen results pages. This allows administrators the flexibility to configure results pages to automatically show attachments for some or all collections within standard (native) EQUELLA and the integration screen accessed from an integrated LMS. For example, an administrator may not want the Show attachments icon to default to open, displaying the list of attachments for a collection that contains resources that have many attachments, but may wish to for another collection with a single attachment restriction. Alternatively, an administrator may not require attachments to show automatically on standard EQUELLA results pages, but may feel it useful for instructors to be able to see attachments by default on the Integration screen results pages when they are adding content to their courses.

Note: No matter what value is selected as the default, users can click the Show attachment icon to open or close the attachments list as desired.

### Adding metadata components
Multiple metadata components can be added to the search results template. 
Click Add to add a new metadata component. The elements include:
* Title—the display name of the field (e.g. Resource Type).
* Value Splitter—the value used to separate multiple results, such as a comma.
* Target Node—click Browse to navigate to the required metadata node in the metadata schema then click OK. 
* Type—select the type of result from the drop-down list. Available values are Text, Date, HTML or URL.
* Truncate Length—select the maximum number of characters to display. The default is 355.
Use the Up Arrow to move the selected component above its neighboring sibling.
Use the Down Arrow to move the selected component below its neighboring sibling.

## Metadata mapping

The Metadata Mapping page enables the automatic mapping of metadata from a contributed resource or literal value to a particular schema node of the collection schema during contribution. 
The sources available for the mapping listed in the drop-down list include:
* IMS Package
* HTML Page Mapper
* Literal Values

Each of these sources is discussed in the sections below.

The mapped nodes are not checked for validity within any given source file. If the mapped nodes do not exist in the contributed resource the mapping is ignored. XML Namespaces are currently ignored in any node path. 
### IMS package metadata

IMS metadata is read from the IMSManifest.xml file of the IMS package.

The controls on the IMS Package page include:
A mapping table comprising:
* IMS Package Schema column—displays the Xpath to the node that will provide the mapping values.
* Collection Schema column—displays the collection schema Xpath for the node accepting the mapped data. Select a cell in this list to display a Browse button that when clicked displays the Select a Schema Node dialog for selecting the node. Click OK  to populate the cell with the node Xpath.
* Type column—displays the collection node type. Click in the field to display a drop-down list of the following XML node types:

-- Simple—copies the data (text) of an IMS schema node to the selected collection schema node. When the IMS node is a parent node all child data is merged before adding to the collection schema node. The IMS node must contain text or have children containing text.

-- Repeating—creates a new simple XML element under the selected collection schema node for each occurrence of the element in the IMS package schema. The IMS node must contain data (text) or have children containing data (text).

-- Compound—Copies a node (data and attributes) and all its children to the selected collection schema node.

-- Replace column—selecting the check box causes the data from the IMS node to replace any data in the Collection Schema node. Unchecking this option causes IMS node data to be appended to any data in the Collection Schema node.

#### Add button
Click Add to add a new blank line to the mapping table. 
#### Remove button
Click Remove to remove the currently selected mapping entry. 
### HTML Page Mapper
The HTML metadata is read from the file’s meta tag attributes. The meta tag name attribute is used to identify the correct meta tag and the metadata is provided by the content attribute.

The controls used on the HTML Page Mapper page include:
A mapping table comprising:
* HTML Metadata Tagname column—displays the meta tag name attribute that identifies the meta tag that provides the mapping data. Enter or select the meta tag name.
* Collection Schema column—displays the collection schema Xpath for the node accepting the mapped data. Select a cell in this list to display a Browse button that when clicked displays the Select a Schema Node dialog for selecting the required node. Click OK to populate the cell with the node Xpath.
#### Add button
Click Add to add a new blank line to the mapping table. 
#### Remove button
Click Remove to remove the currently selected mapping entry. 
### Literal values
Metadata values can be specified for nodes in the collection schema. These literal values may also be scripted. 

The controls used on the Literal Values page include:
Schema Targets pane
Nodes are displayed with literal values.
* Add—click to display the Schema Picker dialog then click the Browse button to display the Select a Schema Node dialog. Select the required node and click OK twice to populate the Schema Targets pane with the node Xpath.
* Edit—enabled when a node is selected. Click to display the Schema Picker dialog for selection of a replacement schema node. 
* Remove —removes the currently selected node.
#### Literals pane
Displays a table of literal values assigned to the selected Schema Target and associated scripts.
* Add —click to display the lnput dialog. Enter the literal value then click OK to return to the Literals pane.
* Add New Script/Edit Script—click to display the Script Editor dialog. Add a new script or edit or remove an existing script. 
* Remove—removes the currently selected literal value.
## Expert Scripting tab
The Expert Scripting page provides a simple editor to enter scripts for custom processing of resources that use this collection. 

Expert scripts can be entered for collections and executed when the selected events occur for resources associated with the collection. The expert scripting events currently available are:
### New Version Script
This script runs when a new version of the resource is created.
### Save Script
This script runs when a resource is contributed to the repository, or when a resource is edited and saved. 

## Extensions tab

EQUELLA supports use of Australian Copyright Agency Limited (CAL) and the United Kingdom Copyright Licensing Agency Limited (CLA) agreements. The copyright features are configured in the Extensions page and provide custom activation error messages and copyright status agreements for display to users. 

Only collections that require copyright compliance management need to be configured in the Extensions page. Further information is provided in the EQUELLA Copyright (CAL) and EQUELLA Copyright (CLA) Guides. 

### Configure licensing options
Check the appropriate box to select an option depending on your region (e.g. CAL Licensing) and click  to display the licensing dialog.
* Error message fields—the Activation Error and Inactive Error fields allow for the entry of custom activation error messages.
* Restrictions—select the Restrict activation to a single portion per holding or Restrictions are per course check boxes, if required.
* Upload an agreement—if a copyright status agreement is available, select the Resources with copyright status require agreement? check box to enable the Upload and Remove buttons in the Upload an agreement section.
* Upload—click to browse the local directory for an agreement.
*Remove—click to remove the currently uploaded agreement.
* OK—click to save copyright settings and return to the Extensions page.