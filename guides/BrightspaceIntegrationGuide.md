[Home](https://equella.github.io/)

# Brightspace Integration Guide

Table of Contents

- [Brightspace™ integration overview](#brightspace-integration-overview)
- [Prerequisites](#prerequisites)
- [Integration procedure](#integration-procedure)
- [Configure Brightspace openEQUELLA App](#configure-brightspace-openequella-app)
- [Configure openEQUELLA](#configure-openequella)
- [Configure Brightspace Plugins](#configure-brightspace-plugins)
- [Manage external resources and Find uses](#manage-external-resources-and-find-uses)
- [Bulk actions](#bulk-actions)

## Brightspace integration overview

openEQUELLA integrates with Brightspace using LTI to create a seamless system for users. The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA Brightspace integration process to enable successful integration.

Please note that this guide has been developed for Brightspace version 10.5.3 and, as such, may differ in appearance to your own installation.

## Prerequisites

To successfully complete this installation the system administrator will require:

- sufficient privileges to access the Brightspace system integration functionality
- sufficient privileges to access the openEQUELLA User Management functionality

### System prerequisites for integration

- Open Source openEQUELLA and Brightspace version 10.5.3 must be installed and running.
- Ensure the time settings of the servers have the correct time and time zone for their location. This way both will report to Greenwich Mean Time (GMT) and synchronize correctly.
- To access openEQUELLA from Brightspace at least one course must have been created in Brightspace.

## Integration procedure

openEQUELLA Brightspace integration can be broken into the following steps:

1. Configure an openEQUELLA App in Brightspace.
2. Configure a Brightspace External system connector in openEQUELLA.
3. Create a new LTI consumer in openEQUELLA.
4. Setup remote plugins (Course Builder, Insert Stuff, Navbar, Quicklink) in Brightspace.
5. Test the installation.

## Configure Brightspace openEQUELLA App

An openEQUELLA App needs to be configured in Brightspace before further integration configuration can be carried out in openEQUELLA.

To configure an openEQUELLA App in Brightspace

1. Log in to Brightspace as an Administrator, then click the Admin cog in the top right.
2. The Administration menu displays. Select the Manage Extensibility link from the menu. 3. The Extensibility Management page displays. Select Register an App.
3. The Register an application page displays.
4. Enter an Application Name (e.g. openEQUELLA).
5. Enter the Trusted URL. This is the openEQUELLA URL, including the institution name, appended with brightspaceauth. For example, <https://alphabeta.equella.com/documentation/brightspaceauth>
   NOTE: The URL must be SSL (i.e. https).
6. Enter the Major Version (e.g. 6) and Minor Version (e.g. 4).
7. Select I accept the Non-Commercial Developer Agreement.
8. Click Register Application. Brightspace registers the application, and displays the details.
9. Note the Application ID and Application Key, as they will be required to be entered when configuring the openEQUELLA side of the integration.

## Configure openEQUELLA

This section describes the required configuration changes to openEQUELLA to support a seamless integration. To achieve this, an External system connector and LTI Consumer need to be configured in openEQUELLA.

### Configure an External system connector

External system connectors are configured from the External system connectors option accessed from the Settings page in openEQUELLA.

To create a new External system connector

1. Select Settings from the navigation menu, and either type External in the filter box, then select External system connectors from the results or scroll down to External system connectors on the Settings list.
2. The External system connectors page displays.
3. Select the Add new connector link to open the Create new connector page.
4. Select Brightspace from the Select a connector type drop-down list. The Brightspace configuration options display
5. Enter a Connector name (e.g. Brightspace) and Connector description (optional).
6. Enter your Brightspace URL.
7. Click Test URL to ensure the entered Brightspace URL is correct. If an error displays, check the validity of the URL. A Connection successful message should display.

NOTE: The help text under Setup application includes a link to your Brightspace instance based on the Brightspace URL entered, and a reference to the Trusted (openEQUELLA) URL that must be entered in Brightspace, based on the URL from which the openEQUELLA configuration is being completed.

8. Enter the Application ID (e.g. kWsF23rSJXXiknMLN—Uhg) and Application Key (e.g. Og-n64SRTd5CmMGBEvEFTA) that were provided when registering the openEQUELLA App in Brightspace.
9. Click Test application to ensure the correct Application ID and Key has been entered. If an error displays, check and correct the values. A Success message should display
10. 10.Click Sign in as a Brightspace administrator. The Brightspace login page displays. Login to Brightspace as an administrator with Manage External Learning Tool Links and Create Quicklinks from available External Learning Tools Links privileges for all course offerings in Brightspace. The signed in Brightspace administrator displays.
11. If Resource summary page links are not allowed to be added to LMS courses, uncheck Allow users to select the resource summary when pushing content via this connector.
12. If required, click Change next to Exportable by to open the Select users page. Select the users, groups or roles to access the Add to external system link from the Resource summary page to push content to Brightspace.
13. If required, click Change next to Content viewable by to open the Select users page. Select the users, groups or roles that can access the Find uses link from the Resource summary page.
    14.Click Save.

### Register an LTI consumer

LTI consumer client registrations are registered from the Settings page in openEQUELLA.

To create a new LTI consumer

1. Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays.
2. Select the Create new LTI consumer link to open the Create new LTI consumer page.
3. Enter a Title (e.g. Brightspace) and a Description (optional).
4. A default Consumer key displays. This can be changed as desired (e.g. brightspaceint). Take note as the Consumer key is entered in Brightspace during integration configuration.
5. A default Consumer secret displays. This can be changed as desired. Take note as the Consumer secret is entered in Brightspace during integration configuration.
6. If required, enter a unique Username prefix (e.g. brsp\_) or Username postfix (e.g.\_brsp) for this LTI consumer. This prefix or postfix is added when new users are created to distinguish those users accessing openEQUELLA from this LTI consumer.
7. The Usable by field allows administrators to restrict who can use this LTI consumer. The default is Everyone. Click Change to open the Select recipients… dialog to select users, groups or roles from the Home tab, or other options, such as Guest users, specific IP address etc. from the Other tab.
8. From the Unknown user handling drop-down, select the system behavior when an attempt is made to logon to openEQUELLA with a username that doesn’t exist. Options are:

- Deny access and present error message
- Treat user as a guest
- Create local user and add them to the following groups…
  If the third option is selected, click the Add groups link open the Select group(s) dialog to search and select the required groups to which the user will be added.

### LTI/LIS Role Mappings

Brightspace roles sent through to openEQUELLA via the LTI integration need to be mapped to equivalent openEQUELLA roles so that relevant privileges can be applied. This is done from the LTI/LIS Role Mappings section of the Create new LTI consumer or Edit LTI consumer pages.

The LTI/LIS Role Mappings section has three areas:

- Instructor role – map the Brightspace ‘Instructor’ role to openEQUELLA role/s.
- Other roles –this area is used to map all other roles that might be used in the integration. A list of the standard LTI/LIS roles is supplied, of which ‘Other’ is one.
- Unknown roles – use this area to select the openEQUELLA roles to default to when an unknown role is sent to openEQUELLA.

#### Mapping the Instructor and Unknown roles

In the Instructor and Unknown roles fields, the Add roles link is used to select the openEQUELLA roles to be used in the mappings. An example using the Instructor role is shown below:

To map to openEQUELLA role/s

1. Click the Add roles link under the Instructor role field.
   The Select role(s) dialog displays.
2. Enter a search query then click Search. Matching results display.
3. Select the required role/s, then click Select these roles. The mapping/s displays in the Instructor role field.
   Select the Add roles link to add more mappings.

#### Mapping the ‘Other’ role

The Other roles section is used to map LTI/LIS standard roles (including the role ‘Other’ which is used in the Brightspace integration) to openEQUELLA roles.

To map the ‘Other’ role

1. In the Other roles area, start typing the required LTI/LIS role (Other) in the Enter LTI/LIS role field. A list of all the standard LTI/LIS roles displays in a drop-down list.
2. Select Other from the drop-down list.
3. Click the Add roles link next to the selected LTI/LIS role. k
   The Select role(s) dialog displays.
4. Enter a search query then click Search . Matching results display.
5. Select the required role/s, then click Select these roles. The mapping/s displays in the Other roles field.

To add further openEQUELLA roles to ‘Other’ roles that have existing mappings or to add another LTI/LIS role mapping, repeat steps 1 to 5.

## Configure Brightspace Plugins

This section describes how to add plugins to Brightspace to allow openEQUELLA content to be added. There are four plugins that can be configured to open the openEQUELLA integration screen, outlined below:

### Course Builder

The Course Builder plugin allows openEQUELLA content to be added to multiple course modules via the Course Builder function accessed from the Related Tools drop-down found on the Content page of a Brightspace course.

To configure an openEQUELLA Course Builder item

1. Log in to Brightspace as an administrator then click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
2. Select the Remote Plugins link.
   The Manage Remote Plugins page displays.
3. Click New Remote Plugin. The Create a new Remote Plugin page displays.e Plugin page
4. Select Course Builder from the Plugin Type drop-down.
5. Enter a Name for the Course Builder item (e.g. openEQUELLA Content).
6. Enter the Launch Point URL in the form: <https://yourinstitution.com/institution/brightspace/coursebuilder.do>
7. Enter the LTI Key and LTI Secret from the Brightspace LTI consumer configured in openEQUELLA
8. If desired, enter an Icon URL.
9. Click Add Org Units. The Add Org Units page displays.
10. Select the courses (and descendant options) in which the Course Builder item should be available, then click Insert .The selections display on the Create a new Remote Plugin page.
11. Click Save. The Manage Remote Plugins page displays with the new Course Builder item listed.
12. Click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
13. Select the External Learning Tools link.
    The Manage External Learning Tools Links page displays.
14. Click the openEQUELLA Course Builder link (e.g. openEQUELLA Content launch). The Edit Link page displays.
15. Scroll down to the Security Settings section, and if not already selected, select Send system username to tool provider and Send system Org Defined ID to tool provider.
16. Click Save and Close.

To test the Course Builder item

1. Open a Brightspace course that was added as an Org Unit.
2. Select the Content link. The course content displays.
3. Select Course Builder from the Related Tools drop-down. The Course Builder page displays.
4. Drag the openEQUELLA item to a course module.
5. An access message may display the first time the Course Builder item is used. If so, select the Do not ask me again for this application checkbox, then click Continue. The openEQUELLA Integration screen displays.

### Insert Stuff

The Insert Stuff plugin allows an openEQUELLA content link to be added to the Insert Stuff menu accessed from the Brightspace HTML editor, opening the openEQUELLA Integration screen to select and add a single content item which may be embedded or display as a link, depending on the MIME type.

To configure an openEQUELLA Insert Stuff link

1. Log in to Brightspace as an administrator then click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
2. Select the Remote Plugins link.
   The Manage Remote Plugins page displays.
3. Click New Remote Plugin. The Create a new Remote Plugin page displays4. Select Insert Stuff from the Plugin Type drop-down.
4. Enter a Name for the Insert Stuff link (e.g. openEQUELLA Content).
5. Enter the Launch Point URL in the form: <https://yourinstitution.com/institution/brightspace/insertstuff.do>
6. Enter the LTI Key and LTI Secret from the Brightspace LTI consumer configured in openEQUELLA
7. If desired, enter an Icon URL. A small openEQUELLA logo can be found at <https://yourinstitution.com/institution/images/equella.gif>
8. Click Add Org Units. The Add Org Units page displays.
9. Select the courses (and descendant options) in which the Insert Stuff link should be available, then click Insert.The selections display on the Create a new Remote Plugin page.
10. Click Save. The Manage Remote Plugins page displays with the new Insert Stuff link listed.
11. Click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
12. Select the External Learning Tools link. The Manage External Learning Tools Links page displays.
13. Click the openEQUELLA Insert Stuff link (e.g. openEQUELLA Content launch). The Edit Link page displays.
    15.Scroll down to the Security Settings section, and if not already selected, select Send system username to tool provider and Send system Org Defined ID to tool provider.
14. Click Save and Continue .

To test the Insert Stuff link

1. Open a Brightspace course that was added as an Org Unit.
2. Select the Content link. The course content displays.
3. From a course module select Create a File from the New drop-down. The Brightspace HTML Editor displays.
4. Click the Insert Stuff button to open the Insert Stuff page.
5. Select the openEQUELLA plugin link to open the openEQUELLA Integration screen.
6. An access message may display the first time the Insert Stuff link is opened. If so, select the Do not ask me again for this application checkbox, then click Continue.
   The openEQUELLA Integration screen displays.

### Navbar

The Navbar plugin allows a link to the openEQUELLA Integration screen to be added to course Navigation menus in Brightspace.

To configure an openEQUELLA Navbar link

1. Log in to Brightspace as an administrator then click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
2. Select the Remote Plugins link. The Manage Remote Plugins page displays.
3. Click New Remote Plugin . The Create a new Remote Plugin page displays.
4. Select Navbar from the Plugin Type drop-down.
5. Select a Target option from the drop-down. Same frame is recommended.
6. Enter a Name for the Navbar link (e.g. openEQUELLA Content).
7. Enter the Launch Point URL in the form: <https://yourinstitution.com/institution/brightspace/navbar.do>
8. Enter the LTI Key and LTI Secret from the Brightspace LTI consumer configured in openEQUELLA
9. If desired, enter an Icon URL. A small openEQUELLA logo can be found at <https://yourinstitution.com/institution/images/equella.gif>
10. Click Add Org Units. The Add Org Units page displays.
11. Select the courses (and descendant options) in which the Navbar link should be available, then click Insert .The selections display on the Create a new Remote Plugin page.
12. Click Save. The Manage Remote Plugins page displays with the new Navbar link listed.
13. Click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
14. Select the External Learning Tools link. The Manage External Learning Tools Links page displays.
15. Click the openEQUELLA Navbar link (e.g. openEQUELLA Content launch). The Edit Link page displays.
16. Scroll down to the Security Settings section, and if not already selected, select Send system username to tool provider and Send system Org Defined ID to tool provider.
17. Click Save and Close.

To add the Navbar link to a Navigation bar

1. Click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
2. Select the Navigation and Themes link.
3. The Navbars page displays.
4. Select the relevant Navbar link (e.g. Standard Course Navigation). The Edit Navbar page displays.
5. Click Add Links in the bottom right panel. The Add links dialog displays a list of all available links.
6. Scroll or search for and select the required Navbar link (e.g. openEQUELLA Content), then click Add. The Navbar link now displays in the bottom right panel. Drag and drop to reorder links.
7. Click Save and Close. The new Navbar link should now appear on the Standard Course Navigation Navbar.

To test the Navbar link

1. Open a Brightspace course that was added as an Org Unit. The new link appears on the Navbar.
2. Click on the new link.
3. An access message may display the first time the Navbar link is opened. If so, select the Do not ask me again for this application checkbox, then click Continue.
   The openEQUELLA integration screen displays.

### Quicklink

The Quicklink plugin is accessed from within a course’s Content page, and allows the user to select a single openEQUELLA resource to be added to the course module from which the integration screen was accessed.

To configure an openEQUELLA Quicklink

1. Log in to Brightspace as an administrator then click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
2. Select the Remote Plugins link. The Manage Remote Plugins page displays.
3. Click New Remote Plugin. The Create a new Remote Plugin page displays.
4. Select Quicklink from the Plugin Type drop-down.
5. Enter a Name (e.g. openEQUELLA Content).
6. Enter the Launch Point URL in the form: <https://yourinstitution.com/institution/brightspace/quicklink.do>
7. Enter the LTI Key and LTI Secret from the Brightspace LTI consumer configured in openEQUELLA.
8. If desired, enter an Icon URL. A small openEQUELLA logo can be found at <https://yourinstitution.com/institution/images/equella.gif>
9. Click Add Org Units. The Add Org Units page displays.
10. Select the courses (and descendant options) in which the Quicklink should be available, then click Insert. The selections display on the Create a new Remote Plugin page.
11. Click Save. The Manage Remote Plugins page displays with the new Quicklink listed.
12. Click the Admin Tools icon in the top right hand corner of the Brightspace page. The administration menu displays.
13. Select the External Learning Tools link. The Manage External Learning Tools Links page displays.
14. Click the openEQUELLA Quicklink link (e.g. openEQUELLA Content launch). The Edit Link page displays.
15. Scroll down to the Security Settings section, and if not already selected, select Send system username to tool provider and Send system Org Defined ID to tool provider.

To test the Quicklink

1. Open a Brightspace course that was added as an Org Unit in step 11 above.
2. Select the Content link. The course content displays.
3. Select a course module then select the Quicklink (e.g. openEQUELLA content) from the Add Existing Activities drop-down.
4. An access message may display the first time the Quicklink is opened. If so, select the Do not ask me again for this application checkbox, then click Continue. The openEQUELLA Integration page displays.

NOTE: The dialog needs to be manually resized to see the whole integration page.

## Manage external resources and Find uses

The Manage external resources page displays all instances of openEQUELLA resources or resource attachments that have been allocated to courses within Brightspace. It enables suitably privileged administration users to perform a variety of actions to any of these openEQUELLA resources or resource attachments. These actions include editing the Brightspace display name, and deleting and moving (the latter two can be done in bulk).

The Find uses function allows users to view the Brightspace course modules in which a single resource and/or its attachments have been added. This function is accessed from the Details panel on the openEQUELLA Resource summary page.

### Enable Manage external resources and Find uses

To enable the Find uses and Manage external resources functionality, a Brightspace configuration process must be completed.

To configure Brightspace for Manage external resources and Find uses

1. Log in to Brightspace then click the Customization Configuration link in the Navbar. The Customization Configuration Settings page displays.
2. Select the openEQUELLA Domain Match link in the openEQUELLA APIs section. The openEQUELLA Domain Match page displays.
3. Click the Edit icon in the Org Value field to open edit mode.
4. Enter the Org Value in the fields. The Org Value is the institution and path URL (<http://myinstitution.com/path/>), the institution going in the first field, and the path in the second. The second field is left blank if no path is used in the URL (for example, if your institution URL is just <http://myinstitution.com>). For example, if the openEQUELLA URL is <http://eqinstitute/equella/>, <http://eqinstitute> would be entered in the first field, and the path /equella/ in the second.
   NOTE: This is not to be confused with your openEQUELLA institution instance, which is not included in this URL.
5. Click Save.

### Manage external resources page

To view the Manage external resources page

1. Select Manage external resources from the navigation menu. The Manage external resources page displays.  
   The first time a user accesses the Manage external resources function during a session, and if there are multiple connectors (LMSs) configured in the system, the page will prompt for a connector to be selected, otherwise the results page will display immediately.
2. Select the Brightspace connector from the Within drop-down. The Manage external resources results page displays for Brightspace resources.

The Brightspace Manage external resources page displays openEQUELLA resources and resource attachments that have been added to Brightspace courses as links. It provides functionality for viewing, sorting and filtering resources. Additionally, resources can be edited and deleted. The ability to select multiple resources to perform bulk actions (delete and move) is also available from this page. Elements of this page include:

#### Screen options

Click Screen Options to display the screen options at the top of the page. One screen option is available from this page, Number of results per page. Select the required option from the drop-down list. Options available are Minimum (10), Medium (50) or Maximum (100).

#### Search pane

- Search—enter a search term and click the search icon. Matching results are displayed.
- Within—select the required external connector (LMS) to show matching results. If only one connector is configured on the system, this option does not display.

#### Search results

Results can be displayed in groups of 10, 50 or 100 per page, with paging displayed at the end of the search results page. Information displayed for each matching result can include:

- Title—the Brightspace name for the resource or resource attachment. Select this link to display the openEQUELLA resource summary page.
- openEQUELLA resource—the name of the resource in openEQUELLA.
- openEQUELLA attachment—the name of the attachment in openEQUELLA. (Only displays if the Brightspace resource is an openEQUELLA attachment.)
- Course—the Brightspace course the resource or resource attachment is associated with.
- Module—the module within the selected Brightspace course.
- Date added—the date and time the resource was added to the course module. Mouse-over to see the approximate time in minutes, hours, days or months since the resource or resource attachment was added to the Brightspace system.
- Status—displays the openEQUELLA resource status and when it was last updated. Statuses displayed can be live, archived, deleted, suspended, review, moderating, rejected or draft.
- Last updated—the last time the status was updated.
- Edit—click to edit the name shown in the Brightspace module.
- Remove—click to remove the resource or resource attachment from the Brightspace course module.
- Select—click to add the current resource or resource attachment to the Select panel.

#### Edit

The names that display in Brightspace for resource and resource attachments can be edited from the Manage external resources page. This does not affect the openEQUELLA names.

To edit names

1. Locate the required Brightspace resource on the Manage external resources results page, then click Edit. The Edit external resource dialog displays.
2. Edit the Name field as required, then click OK. The new text displays on the Manage external resources results page, and in the Brightspace system.

#### Sort and filter

The Sort and Filter tabs on the Manage external resources results page (Brightspace) display options relevant to Brightspace resources.
The sort options are:

- Date added—sorts the results by the date the resource was added to its Brightspace location.
- Name—sorts the results by the Brightspace name of the resource.
- Course—sorts the results by Brightspace course name.

From the Manage external resources results page (Brightspace), the following filter options are available:

- Filter by status—select this option to include results from courses set as ‘inactive’ in Brightspace.
- Filter by LMS course—select a Brightspace course from the drop down list to show only results from the selected course.

## Bulk actions

Administrators can remove or move individual or multiple external resources in a single operation using the Perform an action button to the right-hand side of the Manage external resources page.

### Selecting resources

Select the required resource or resources by clicking Select beside each resource. To select all resources on the results page, click the Select all external resources link in the Selection pane.
The selection pane displays the current number of selected resources, as well as the following links:

- View selected external resources—click to open a Bulk actions dialog which lists the currently selected resources.
- Click X to delete resources.
- Unselect all external resources—click to unselect all resources currently selected.
- Select all external resources—click to select all external resources listed in the Manage external resources results pages.

### Actions

#### Remove

Selecting this action removes the selected resources from their location within the associated LMS. They are also removed from the Manage external resources results page.

To remove external resources

1. With the required resources selected, click Perform an action to display the Bulk actions page.
   Click X next to a resource to remove that resource from the list.
2. Select Remove from the Choose an action to perform: drop-down list then click Execute. A confirmation dialog displays.
3. Click OK. An information dialog displays, confirming the action was successful. In the case of an unsuccessful action, an error message displays with an explanation of the failed action.

#### Move

The Move action moves the selected resources from their current locations within the associated LMS to the one selected on the Move dialog.

To move selected resources

1. With the required resources selected, click Perform an action to display the Bulk actions page.
   Click X next to a resource to remove that resource from the list.
2. Select Move from the drop-down list, then click Next. The Bulk actions—Select the locations to add to dialog displays.
3. Click to expand courses and select the required location to move the selected resources to. Select Show inactive courses to display Brightspace courses marked as ‘inactive’.
4. Click Execute. A confirmation dialog displays.
5. Click OK. In the case of an unsuccessful action, an error message displays with an explanation of the failed action.
