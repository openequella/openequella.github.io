# Push to LMS

Table of Contents

[Push to LMS overview](#push-to-lms-overview)

[Prerequisites](#prerequisites)

[Push to LMS configuration procedure](#push-to-lms-configuration-procedure)

[Push to LMS privileges](#push-to-lms-privileges)

[Set up a Moodle connector](#set-up-moodle-connector)

[Set up a Blackboard connector](#set-up-a-blackboard-connector)

[Set up a local resources connector](#set-up-a-local-resources-connector)

[Add to external system function](#add-to-external-system-function)

[Find uses function](#find-uses-function)

[Manage external resources](#manage-external-resources)

[Bulk actions](#bulk-actions)

## Push to LMS overview
openEQUELLA allows LMS integration enabling direct contribution of resources into Moodle™ (Moodle) or Blackboard Learn™ (Blackboard) courses without having to access each LMS separately. This functionality enables the addition of a resource to multiple locations across courses in one process. Push to LMS also allows the user to find all the current course locations a resource has been linked to in the LMS. Additionally, the user can find all resources within the openEQUELLA system that share the same attachments.

The Manage external resources function enables administrators to view, edit, sort and filter linked LMS resources, as well as removing or moving multiple LMS resources in one action.

The purpose of this guide is to provide administrators with an understanding of how to configure the connectors required to use Push to LMS functionality and manage external resources. It also provides end users with an understanding of how to use the functionality once configured.

Please note that this guide has been developed using Moodle version 2.4 and Blackboard Learn version 9.1. (SP11) and as such may differ in appearance to your own installation.

## Prerequisites
To successfully complete this installation the system administrator will require:
* sufficient privileges to access the Moodle or Blackboard system integration functionality;
* sufficient privileges to access the openEQUELLA Security Management functionality and
* privileges to unzip and create files in Moodle.

System prerequisites for integration:
* openEQUELLA version 6.1 and Moodle version 2.1,2.2, 2.3 or 2.4 or Blackboard version 9.1 (SP8, SP9 or SP11) must be installed and running. 
* Ensure that the servers have the same UTC (formerly GMT) time. As long as the UTC time is synchronised on all servers, different times and time zones can be set on each server.
* If using Moodle, the latest openEQUELLA Moodle Module must be installed within Moodle to use this feature.
* If using Blackboard, the latest openEQUELLA Blackboard Building Block must be installed within Blackboard to use this feature. 

## Push to LMS configuration procedure
openEQUELLA Push to LMS configuration can be broken down into the following steps:
* Select new connector type.
* Enter configuration details for the connector then test the URL (unless setting up a local resources connector).
* Test Web Service (unless setting up a local resources connector).
* Check for new LMS functionality.

## Push to LMS privileges
There are six privileges associated with the configuration of External system connectors and the associated functionality. Four can be found in the Security Manager under Connectors and Institution, and are:
* CREATE_CONNECTOR—allows new connectors to be configured.
* DELETE_CONNECTOR—allows existing connector to be deleted.
* EDIT_CONNECTOR—allows existing connector to be edited.
* EXPORT_VIA_CONNECTOR—allows users to access the Add to external system from the resource summary page, and Edit and Perform an action from the Manage external resources page.
* VIEWCONTENT_VIA_CONNECTOR—allows users to access the Find uses function from the resource summary page.

In addition to the VIEWCONTENT_VIA_CONNECTOR, another privilege is required to allow access to the Find Uses functionality. It is found in the Security Manager under Resources, Collections and Institution and is:
* FIND_USES_ITEM—allows users to access the Find Uses function from the Resource summary page for a specific resource, collection or across an institution, depending on the level at which it is set.

The sixth is the privilege required to allow access to the management pages (Manage resources, Manage activations and Manage external resources), found in the Security Manager under Management pages and would typically only be granted to administrators. It is:
* VIEW_MANAGEMENT_PAGE


## Set up a Moodle connector
Setting up a Moodle connector will enable suitably privileged users to add resources to Moodle courses from openEQUELLA using the Add to external system link from the Resource summary screen. Additionally, users will be able to check the current usage of the resource within Moodle using the Find uses link.

#### To set up a Moodle connector
1. Select External system connectors from the Settings menu. 
2. The External system connectors page displays with any existing connectors listed. 
3. Click the Add new connector link to display the Create new connector page. 
4. Select Moodle from the drop-down menu. The Moodle configuration page displays. 
5. Enter a Connector name (e.g. Moodle).
6. Enter a description, if required.
7. Enter the Moodle URL. (e.g. ‘http://moodle.myequellainstitution.edu’).
8. Click Test URL to make sure the entered URL is valid. A successful connection page displays. 
9. Click the enable web services link. The system requires the user to be logged into Moodle to activate web services. A log in screen displays if the user is not currently logged in. The Enable web services page displays.
10. Select the check box then click Save Changes.
11. Close the Moodle page then click the enable the REST protocol link. The Manage Protocols page displays.
openEQUELLA 6.1 Push to LMS 10 | P a g e
12. Click the Enable Icon next to REST protocol to enable it, then click Save Changes.
13. From the Site administration menu, select Web Services then External Services from the Web services node. The External services page displays, with the equellaservice listed.
14. Click on the equellaservice Authorised users link.  The Select authorised users page displays, with all available users listed in the Not authorised users pane. 
15. Highlight the users authorised to use the openEQUELLA functionality, then click to move them to the Authorised users pane. Use ctrl+click or shift+click to highlight multiple users. Selections are automatically saved. 
16. Close the Moodle page then click the create a web service token link. A Manage tokens page displays. Click the Add link. The Create token page displays. 
17. Select a Moodle user with web service and REST service permissions from the User list. Select equellaservice from the Service drop-down list.
18. Click Save Changes. The Manage tokens page displays with a Token value.
19. Copy the Token value and close the page.
20. Paste the Token value to the Web service token field then click Test Web Services. Connection successful should display. 
21. If required, select Modify openEQUELLA usernames to match Moodle:. A text box displays for entering Javascript to modify and return the openEQUELLA username stored in the variable “username”. An example is shown in Figure 13. If a token is set up to prepend a string to the start of a username (e.g. "moodle_" for users coming from moodle) then an example script to string off the "moodle_" prefix and just return the original username would be:
```
if (username.indexOf("moodle_") == 0) 
{return username.substr(7);} 
else 
{return username;}
```
22. If required, click Change next to Exportable by to open the Select users page. Select the users to access the Add to external link from the Resource summary page. Click OK to save.
openEQUELLA 6.1 Push to LMS 15 | P a g e
23. If required, click Change next to Content viewable by to open the Select users page. Select the users to access the Find uses link from the Resource summary page. Click to OK save.
24. Click OK to save the connector details.

## Set up a Blackboard connector
Setting up a Blackboard connector will enable suitably privileged users to add resources to Blackboard courses from openEQUELLA, using the Add to external system link from the Resource summary screen. Additionally, users will be able to check the current usage of the resource within Blackboard using the Find uses link.

Once the Blackboard connector has been configured, a scheduled event (which runs with the Weekly Tasks) will table existing openEQUELLA resources in Blackboard and display each instance in Manage external resources.

If a resource is moved from one Blackboard location to another from the Blackboard application, the scheduled event needs to run before the new locations will display in openEQUELLA.

Prior to setting up the Blackboard connector in openEQUELLA, the openEQUELLA webservice.jar file must be uploaded in Blackboard to create the openEQUELLA web service, then web service settings in Blackboard need to be checked for correct configuration.

### Upload the openEQUELLA web service
1. Log in to Blackboard as an administrative user.
2. Select the System Admin tab. The Administrator Panel displays. 
3. From the Building Blocks portlet, select the Building Blocks link. The Building Blocks menu page displays. Click the Installed Tools link to open the Building Blocks page. 
Figure 15 Blackboard Building Blocks page
4. Click the down arrow button beside the openEQUELLA Plugin building block and select Settings from the menu. The openEQUELLA Server Configuration page displays.
5. Click the Download the web service.jar link in the Web Service Download section. 
6. Save the webservice.jar file to a selected folder.
7. Click the System Admin tab. The Administrator Panel displays. 
8. From the Building Blocks portlet, select the Web Services link. The Web Services page displays. 
9. Click Upload Web Services. The Install Web Service page displays. 
10. Click Browse and select the downloaded webservice.jar file.
11. Click Submit. The openEQUELLA web service (EQUELLA.WS) now displays in the Web Services list, and a ‘Success’ message displays at the top of the screen.

### Configure Blackboard Web Services settings
1. Check the following web service configurations.
* Context.WS
  * Available—Yes and SSL Required—No
* EQUELLA .WS
  * Available—Yes and SSL Required—No

#### To change the configuration
1. Select the checkbox beside the required web service.
2. Mouse over Availability in the bottom left, then select Make Available, or mouse over in the bottom left, then select Set as Not Required. 

#### To set up a Blackboard connector
1. Select External system connectors from the Settings menu. 
2. The External system connectors page displays with any existing connectors listed. 
3. Click the Add new connector link to display the Create new connector page. 
4. Select Blackboard from the drop-down menu. The Moodle configuration page displays. 
5. Enter a Connector name (e.g. Blackboard).
6. Enter a description, if required.
7. Enter the Blackboard URL (e.g.‘http://blackboard.myequellainstitution.edu’).
8. Click Test URL to make sure the entered URL is valid. A successful connection page displays. 
9. Enter a Proxy tool registration password if your Blackboard Proxy Tool Global Properties specifies a Proxy Tool Registration Password; otherwise, leave blank.
10. Click Register Proxy Tool. This creates a proxy tool registration and automatically populates the Proxy tool shared password field. An example of the screen after the Register Proxy Tool button is selected. 
11. Click the make the proxy tool available link. The Blackboard Proxy Tool page displays. Click the down arrow button beside openEQUELLA and select Edit. 
12. The Edit Proxy Tool page displays. In the Availability section, select Yes then click Submit.
13. Close the Proxy Tools page.
14. Enter the Blackboard administrator username in the Blackboard system user field.
15. Click Test Web Service. A web service confirmation displays. 
16. If required, select Modify openEQUELLA usernames to match Moodle:. A text box displays for entering Javascript to modify and return the openEQUELLA username stored in the variable “username”. 

If a token is set up to prepend a string to the start of a username (e.g. "bb_" for users coming from Blackboard) then an example script to string off the "bb_" prefix and just return the original username would be:
```
if (username.indexOf("bb_") == 0) 
{return username.substr(7);} 
else 
{return username;}
```
17. If required, click Change next to Exportable by to open the Select users page. Select the users to access the Add to external link from the Resource summary page. Click OK to save.
18. If required, click Change next to Content viewable by to open the Select Users page. Select the users to access the Find uses link from the Resource summary page. Click OK to save.
19. Click Save to save the connector details.

## Set up a local resources connector
Setting up a local resources connector allows suitably privileged users the ability to view any current uses of attachments linked to a resource within openEQUELLA by accessing the Find uses link from the Resource summary page.

#### To set up a local resources connector
1. Select External System Connectors from the Settings menu. 
2. Click the Add new connector link to display the Create new connector page.
3. Select Local resources from the drop-down menu. 
4. Enter a Connector name (e.g. openEQUELLA).
5. If required, click Change next to Content viewable by to open the Select users page. Select the users to access the Find uses link from the Resource Summary page. Click OK to save.
6. Click Save to save the connector details.

## Add to external system function
The Add to external system function allows suitably privileged users to add all, or parts of, a resource to multiple locations in an LMS (VLE) from the openEQUELLA system. (NOTE: The Add to external system link only displays if at least one LMS connector has been configured in the openEQUELLA system.)

### Add a resource to a Moodle location
1. From the Resource summary screen, select the Add to external system link from the Actions section. 
2. Select the external system (e.g. Moodle) from the drop-down list to which the resource is to be added. If only one external system is set up, the Add to external system screen displays immediately. 
3. Select the required resources from the Select the resources to add section. Select Add resource summary to create a link to the resource as a whole, or select only specific attachments. Each attachment selected appears as a single item in the LMS location.
4. In the Select the locations to add to section, enter course search criteria in the course filter box. The Select the locations to add to section then only displays results matching the entered text. Delete the search criteria to view all courses. (NOTE: The course filter box only displays when there are 10 or more courses listed.) Select the Show hidden courses checkbox to display courses that are ‘hidden’ in Moodle.
5. Click on the beside the required course to expand the course grouping options. Select the Moodle locations to which the resource should be added, then select Add Selected Resources.
6. An action receipt confirming the successful addition of the resource displays at the top of the page. 
7. Use the breadcrumbs to navigate back to the resource.

#### Add a resource to a Blackboard location
1. From the Resource summary screen, select the Add to external system link from the Actions section. 
2. Select the external system (Blackboard) from the drop-down list to which the resource is to be added. If only one external system is set up, the Add to external system screen displays immediately. 
3. Select the required resources from the Select the resources to add section. Select Add resource summary to create a link to the resource as a whole, or select only specific attachments. Each attachment selected appears as a single item in the Blackboard location.
4. In the Select the locations to add to section, enter the first few letters of the course name in the course filter edit box. The Select the locations to add to section then only displays courses beginning with the entered text. (NOTE: The course filter edit box only displays when there are 10 or more courses listed.) Select the Show unavailable courses checkbox to display courses that are ‘unavailable’ in Blackboard.
5. Click on the beside the required course to expand the course grouping options. Select the Blackboard locations to which the resource should be added, then select Add Selected Resource.
6. An action receipt confirming the successful addition of the resource displays at the top of the page. 
7. Use the breadcrumbs to navigate back to the resource.

## Find uses function
The Find uses function allows suitably privileged users to view all the locations in the LMS where the selected resource is currently being used. If the local resources connector has been configured in the system, the user will be able to view all resources that share any of the same attachments as the selected resource within the openEQUELLA system. 

NOTE: The Find uses link only displays if at least one external connector has been configured in the openEQUELLA system.

### Find uses in Moodle
1. From the Resource summary screen, select the Find uses link from the Details section. 
2. openEQUELLA supports external connectors (Moodle, Blackboard and Local resources), and more than one may be configured. If there are multiple connectors configured, a drop-down list displays, and the user selects from the list (e.g. Moodle). If there is only one connector configured, the Find uses screen is displayed immediately. 

The courses in which the selected resource is currently used are listed, with the Location and Date added information. The Where this resource is used section elements include:
* Enter text to filter table rows edit box—enter the first few characters of a course, location or date added to filter the table to display relevant results. (NOTE: This filter edit box only displays when there are 10 or more courses listed.)
* Course—lists the Moodle courses the resource has been added to. Click on the Course column title or arrow to sort by course in alpha-numerical order. Clicking the link a second time reverses the order. 
* Location—lists the location within the course that the resource has been added to. Click the Location column title or arrow to sort by location in alpha-numerical order. Clicking the link a second time reverses the order.
* Date added—time since resource or attachment was added to the course location. The results display in order of date added by default (most recent first). Click the Date added column title or arrow to sort by date added if another column title sort option has been used. Clicking the link a second time reverses the order.
* Show all versions of this resource—select to display any uses of earlier versions of the resource.
* Show hidden courses and items—select to display any hidden courses and items in which the selected resource is used.

Select the down arrow (which displays to the right of the Date added column when the cursor points at a course line) to display an expandable pane showing information about the resource details, which can include:
* Resource version—the current version of the resource.
* Date modified—the approximate time the resource was last updated.
* Name in external system—the Moodle title, which may differ from the openEQUELLA title.
* Description—the Moodle description, which may differ from the openEQUELLA description.
* Enrollments—the number of students enrolled in the associated course.
* Instructor—the instructor allocated to the course.
* Visible—refers to the availability of the associated course. Values can be true (available) or false (hidden).
* Number of views—the number of times the resource has been accessed.
* Last accessed—the approximate time since the resource was last accessed.

*NOTE: Not all the details listed above will display for every resource, as some information may not be available.*

### Find uses in Blackboard
1. From the Resource summary screen, select the Find uses link from the Details section. 
2. openEQUELLA supports external connectors (Moodle, Blackboard and Local resources), and more than one may be configured. If there are multiple connectors configured, a drop-down list displays, and the user selects from the list (e.g. Blackboard). If there is only one connector configured, the Find uses screen is displayed immediately. 
The courses in which the selected resource is currently used are listed, with the Location and Date added information. The Where this resource is used section elements include:
* Enter text to filter table rows edit box—enter the first few characters of a course, location or date added to filter the table to display relevant results. (NOTE: This filter edit box only displays when there are 10 or more courses listed.)
* Course—lists the Blackboard courses the resource has been added to. Click the Course column title or arrow to sort by course in alpha-numerical order. Clicking the link a second time reverses the order. 
* Location—lists the location within the course that the resource has been added to. Click the Location column title or arrow to sort by location in alpha-numerical order. Clicking the link a second time reverses the order.
* Date added—time since resource or attachment was added to the course location. The results display in order of date added by default (most recent first). Click the Date added column title or arrow to sort by date added if another column title sort option has been used. Clicking the link a second time reverses the order.
* Show all versions of this resource—select to display any uses of earlier versions of the resource.
* Show unavailable courses and resources—select to display any hidden courses and resources in which the selected resource is used.

Select the down arrow (which displays to the right of the Date added column when the cursor points at a course line) to display an expandable pane showing resource details, including Resource version, Date modified, and Name in external system. 

###  Find uses in local resources
This connector displays any instances where attachments linked to the selected resource have been linked to other resources in openEQUELLA through the Attachments control/openEQUELLA Resources option during contribution. 

A list of resources that share the same attachments displays.

#### To find uses in local resources (openEQUELLA)
1. From the Resource summary screen, select the Find uses link from the Details section. 
2. openEQUELLA supports connectors (Moodle, Blackboard and Local resources), and more than one may be configured. If there are multiple connectors configured, a drop-down list displays, and the user selects from the list (e.g. openEQUELLA). If there is only one connector configured, the Find uses screen is displayed immediately. 

The resources in which attachments linked to the selected resource are currently used are listed, with the Attachment and Date added information.

3. Check Show all versions of this resource to display any uses of earlier versions of the resource.
4. Check Include non-live items to display resources with any status.
5. Select the down arrow (which displays to the right of the Date added column when the cursor points at a course line) to display an expandable pane showing resource details, including Resource version, Date modified, Owner and Selected attachment. 

## Manage external resources
The Manage external resources page displays all instances of an openEQUELLA resource or resource attachment that have been allocated to courses within configured LMSs. Additionally, Manage external resources also allows the user to view the uses of internal openEQUELLA resources and attachments within the openEQUELLA system, if Local resources has been configured as a connector.

The Manage external resources function enables users to perform a variety of actions to any openEQUELLA resource or resource attachment that has been added to an LMS. These actions include editing the name and description, and deleting and moving (the latter two can be done in bulk). (NOTE: These functions are not available for Local resource connectors.)

### To access Manage external resources
1. Select Manage external resources from the navigation menu. 

### Manage external resources page—Moodle
The first time a user accesses the Manage external resources function during a session, and if there are multiple connectors (LMSs) configured in the system, the page will prompt for a connector to be selected, otherwise the results page will display immediately. 

Select the Moodle connector from the Within drop-down. The Manage external resources results page displays for Moodle resources. 

The Moodle Manage external resources page displays openEQUELLA resources and resource attachments that have been added to Moodle courses as links. It provides functionality for viewing, sorting and filtering resources. Additionally, resources can be edited and deleted. The ability to select multiple resources to perform bulk actions (delete and move) is also available from this page. Elements of this page include:

#### Screen options
Click Screen Options to display the screen options at the top of the page. One screen option is available from this page, Number of results per page. Select the required option from the drop-down list. Options available are 10, 50 or 100. 

#### Search pane
* Search—enter a search term (e.g. author) and click Search. Matching results are displayed. 
* Within—select the required external connector (LMS) to show matching results. If only one connector is configured on the system, this option does not display.

#### Search results
Results can be displayed in groups of 10, 50 or 100 per page, with paging displayed at the end of the search results page. Information displayed for each matching result can include:
* Title—the Moodle name for the resource or resource attachment. Select this link to display the openEQUELLA resource summary page.
* Description—the Moodle description.
* openEQUELLA resource—the name of the resource in openEQUELLA.
* openEQUELLA attachment—the name of the attachment in openEQUELLA. (Only displays if the Moodle resource is an openEQUELLA attachment.)
* Course—the Moodle course the resource or resource attachment is associated with.
* Location—the location within the selected Moodle course (e.g. 8 November -14 November).
* Date added—approximate time in minutes, hours, days or months since the resource or resource attachment was added to the Moodle system. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Date modified—approximate time in minutes, hours, days or months since the resource was last updated in Moodle. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Enrollments—the number of enrolments in the associated Moodle course.
* Visible—refers to the availability of the associated course. Values can be true (available) or false (hidden).
* Number of views—the number of times the resource or resource attachment has been viewed in Moodle.
* Last accessed—approximate time in minutes, hours, days or months since the resource or resource attachment was last viewed or updated. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Status—displays the openEQUELLA resource status and when it was last updated. Statuses displayed can be live, archived, deleted, suspended, review, moderating, rejected or draft.
* Last updated—the last time the status was updated.
* Edit—click to edit names and descriptions. See Edit section below for more information.
* Remove—click to remove the resource or resource attachment from Moodle.
* Select—click to add the current resource or resource attachment to the Select panel. See the Bulk actions section on page 60 for more information.
### Edit
Resource and resource attachment Moodle names and descriptions can be edited from the Manage external resources page. This does not affect the openEQUELLA names and descriptions.
#### To edit names and descriptions
1. Locate the required Moodle resource on the Manage external resources results page, then click Edit. The Edit external resource dialog displays. 
2. Edit the Name and Description fields as required, then click OK. The new text displays on the Manage external resources results page, and in the Moodle system. 

### Add search to favourites
Selecting the Add search to favourite button on the right-hand side of the page displays the Add search to favourites dialog where a name is entered to help identify the search. 

Clicking Add displays a ‘Successfully added this search to your favourites’ message and adds the search to your Favourite searches list.

### Sort and filter
The Sort and Filter boxes on the Manage external resources results page (Moodle) display options relevant to Moodle resources. 

The sort options are:
* Date added—sorts the results by the date the resource was added to its Moodle location.
* Name—sorts the results by the Moodle name of the resource.
* Course—sorts the results by Moodle course name.
* Reverse order of results—select to change the order of the results.

From the Manage external resources results page (Moodle), the following filter options are available:
* Filter by status—select this option to include results from courses set as ‘hidden’ in Moodle.
* Filter by LMS course—select a Moodle course from the drop down list to show only results from the selected course.

### Manage external resources page—Blackboard
The first time a user accesses the Manage external resources function during a session, and if there are multiple connectors (LMSs) configured in the system, the page will prompt for a connector to be selected, otherwise the results page will display immediately. 

Select the Blackboard connector from the Within drop-down. The Manage external resources results page displays for Blackboard resources. 

The Blackboard Manage external resources page displays openEQUELLA resources and resource attachments that have been added to Blackboard courses. It provides functionality for viewing, sorting and filtering resources. Additionally, resources can be edited and deleted. The ability to select multiple resources to perform bulk actions (delete and move) is also available from this page. Elements of this page include:
#### Screen options
Click Screen Options to display the screen options at the top of the page. One screen option is available from this page, Number of results per page. Select the required option from the drop-down list. Options available are 10, 50 or 100. 
#### Search pane
* Search—enter a search term (e.g. author) and click . Matching results are displayed.
* Within—select the required external connector (LMS) to show matching results. If only one connector is configured on the system, this option does not display.
#### Search results
Results can be displayed in groups of 10, 50 or 100 per page, with paging displayed at the end of the search results page. Information displayed for each matching result can include:
* Title—the Blackboard name for the resource or resource attachment. Select this link to display the original resource summary page.
* Description—the Blackboard description.
* openEQUELLA resource—the name of the resource in openEQUELLA.
* openEQUELLA attachment—the name of the attachment in openEQUELLA. (Only displays if the Blackboard resource is an openEQUELLA attachment.)
* Course—the Blackboard course the resource or resource attachment is associated with.
* Location—the location within the selected Blackboard course (e.g. Content).
* Date added—approximate time in minutes, hours, days or months since the resource or resource attachment was added to the Blackboard system. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Date modified—approximate time in minutes, hours, days or months since the resource was last updated in Blackboard. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Enrollments—the number of enrolments in the associated Blackboard course.
* Course available—refers to the availability of the associated course. Values can be Yes (available) or No (unavailable).
* Instructor—the name of the instructor allocated to the selected course.
* Content available—refers to the availability of the resource or resource attachment. Values can be Yes (available) or No (unavailable).
* Status—displays the openEQUELLA resource status and when it was last updated. Statuses displayed can be live, archived, deleted, suspended, review, moderating, rejected or draft.
* Last updated—the last time the status was updated.
* Edit—click to edit names and descriptions. See Edit section below for more information.
* Remove—click to remove the resource or resource attachment from Blackboard.
* Select—click to add the current resource or resource attachment to the Select panel. See the Bulk actions section on page 60 for more information.
### Edit
Resource and resource attachment Blackboard names and descriptions can be edited from the Manage external resources page. This does not affect the openEQUELLA names and descriptions.
#### To edit names and descriptions
1. Locate the required Blackboard resource on the Manage external resources results page, then click Edit. The Edit external resource dialog displays.
2. Edit the Name and Description fields as required, then click OK. The new text displays on the Manage external resources results page, and in the Blackboard
openEQUELLA 6.1 Push to LMS 54 | P a g e
system. 

### Add search to favourites
Selecting the Add Search to Favourites button on the right-hand side of the page displays the Add search to favourites dialog where a name is entered to help identify the search. 

Clicking Add displays a ‘Successfully added this search to your favourites’ message and adds the search to your Favourite searches list.

### Sort and filter
The Sort and Filter boxes on the Manage external resources results page (Blackboard) display options relevant to Blackboard resources. 

The sort options are:
* Date added—sorts the results by the date the resource was added to its Blackboard location.
* Name—sorts the results by the Blackboard name of the resource
* Course—sorts the results by Blackboard course name.
* Reverse order of results—select to change the order of the results.

From the Manage external resources results page (Blackboard), the following filter options are available:
* Filter by status—select this option to include results from courses set as ‘unavailable’ in Blackboard.
* Filter by LMS course—select a Blackboard course from the drop down list to show only results from the selected course.

### Manage external resources page—Local resources
The first time a user accesses the Manage external resources function during a session, and if there are multiple connectors (LMSs) configured in the system, the page will prompt for a connector to be selected, otherwise the results page will display immediately. 

Select the Local resources connector from the Within drop-down (in this example, it has been called ‘EQUELLA’). The Manage external resources results page displays for Local resources displays.

The openEQUELLA Manage external resources page displays openEQUELLA resources and resource attachments that have been added to openEQUELLA courses. It provides functionality for viewing, sorting and filtering resources. Elements of this page include:

#### Screen options
Click Screen Options to display the screen options at the top of the page. One screen option is available from this page, Number of results per page. Select the required option from the drop-down list. Options available are 10, 50 or 100. 
#### Search pane
* Search—enter a search term (e.g. author) and click Search. Matching results are displayed. 
* Within—select the required external connector (LMS) to show matching results. If only one connector is configured on the system, this option does not display.
#### Search results
Results can be displayed in groups of 10, 50 or 100 per page, with paging displayed at the end of the search results page. Information displayed for each matching result can include:
* Title—the name of the resource or resource attachment. Select this link to display the original resource summary page.
* openEQUELLA resource—click to view the original resource.
* openEQUELLA attachment—click to open the attachment in the default viewer.
* Linking resource—click to open the new resource that the attachment or resource summary has been attached to.
* Linking attachment—click to open the attachment in the default viewer.
* Date added—approximate time in minutes, hours, days or months since the resource or resource attachment was added to the new openEQUELLA resource. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Date modified—approximate time in minutes, hours, days or months since the resource was last updated in openEQUELLA. Mouse-over the number of days to display a pop-up showing the exact date and time.
* Owner—the owner of the resource (generally the user who created the resource).
* Status—displays the openEQUELLA resource status and when it was last updated. Statuses displayed can be live, archived, deleted, suspended, review, moderating, rejected or draft.
* Last updated—the last time the status was updated.

#### Add search to favourites
Selecting the Add Search to Favourites button on the right-hand side of the page displays the Add search to favourites dialog where a name is entered to help identify the search.

Clicking Add displays a ‘Successfully added this search to your favourites’ message and adds the search to your Favourite searches list.
#### Sort and filter
The Sort and Filter boxes on the Manage external resources results page (local resources) display options relevant to local resources. 

The sort options are:
* Date added—sorts the results by the date the local resource was added to a new resource.
* Name—sorts the results by the name of the resource or attachment
* Reverse order of results—select to change the order of the results.

From the Manage external resources results page (local resources), the following filter options are available:
* Filter by status—select this option to include results that are not ‘Live’ (still in a moderation workflow).

## Bulk actions
Administrators can remove or move individual or multiple external resources in a single operation using the Perform an Action button to the right-hand side of the Manage external resources page. 

### Selecting resources
Select the required resource or resources by clicking Select beside each resource. To select all resources on the results page, click the Select all external resources link in the Selection pane. 

The selection pane displays the current number of selected resources, as well as the following links:
* View selected external resources—click to open a Bulk actions dialog which lists the currently selected resources. 

Click X to delete resources.
* Unselect all external resources—click to unselect all resources currently selected.
* Select all external resources—click to select all external resources listed in the Manage external resources results pages.

### Actions
#### Remove
Selecting this action removes the selected resources from their location within the associated LMS. They are also removed from the Manage external resources results page.
#### To remove external resources
1. With the required resources selected, click Perform an Action to display the Bulk actions page.

Click X next to a resource to remove that resource from the list.

2. Select Remove from the Choose an action to perform: drop-down list then click Execute. A confirmation dialog displays.

3. Click OK. An information dialog displays, confirming the action was successful. In the case of an unsuccessful action, an error message displays with an explanation of the failed action.

#### Move
The Move action moves the selected resources from the current location within the associated LMS to the ones selected on the Move dialog.
#### To move selected resources
1. With the required resources selected, click Perform an Action to display the Bulk actions page. 

Click X next to a resource to remove that resource from the list.

2. Select Move from the drop-down list, then click Next. The Bulk actions—Select the locations to add to dialog displays.

3. Click to expand courses and select the required location or locations to move the selected resources to. Select Show hidden courses (Moodle) or Show unavailable courses (Blackboard) to display currently hidden/unavailable courses in the selected LMS.
4. Click Execute. A confirmation dialog displays. 
5. Click OK. In the case of an unsuccessful action, an error message displays with an explanation of the failed action.
