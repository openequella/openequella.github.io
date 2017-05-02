# Canvas Configuration Guide

Table of Contents
* [Integration overview](integration-overview)  
* [Prerequisites](prerequistes)  
* [Integration procedure](integration-procedure)  
* [Register an LTI consumer in EQUELLA](register-an-lti-consumer-in-equella)  
* [Configure Canvas](configure-canvas)  
* [Configure EQUELLA External connector](configure-equella-external-connector)  
* [Test the installation](test-the-installation)  
* [EQUELLA Selection session options](equella-selection-session-options)  
* [EQUELLA Canvas user login plug-in](equella-canvas-user-login-plug-in)  


## Integration overview

EQUELLA integrates easily with Canvas by Instructure (Canvas) using LTI to create a seamless system for users. Additionally users can login to EQUELLA using their Canvas login.

The purpose of this guide is to provide system administrators with an understanding of the EQUELLA Canvas integration process to enable successful integration. 

Please note that this guide has been developed using the latest Canvas as of Spring 2017 and, as such, may differ in appearance to your own installation. 


## Prerequisites  
#### To successfully complete this installation the system administrator will require:
•  Sufficient privileges to access the Canvas system integration functionality.
•  Sufficient privileges to access the EQUELLA User Management functionality 
#### System prerequisites for integration
•  EQUELLA and Canvas must be installed and running. 
•  Ensure the time settings of the servers have the correct time and time zone for their location. This way both will report to Greenwich Mean Time (GMT) and synchronize correctly.
•  To access EQUELLA from Canvas at least one course must have been created in Canvas. 
## Integration procedure

EQUELLA Canvas integration can be broken into the following steps:

1.  Register an LTI OAuth Client in EQUELLA.
2.  Add EQUELLA as an external tool in Canvas.
3.  Add Canvas as an external tool in EQUELLA.
4.  Test the installation.


## Register an LTI consumer in EQUELLA

LTI consumer client registrations are registered from the Settings page in EQUELLA.

#### To create a new LTI consumer
1.  Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays. 
2.  Select the Create new LTI consumer link to open the Create new LTI consumer page. 
3.  Enter a Title (e.g. Canvas) and a Description (optional).
4.  A default Consumer key displays. This can be changed as desired (e.g. canvas). Take note as the Consumer key is entered in Canvas during integration configuration.
5.  A default Consumer secret displays. This can be changed as desired. Take note as the Client secret is entered in Canvas during integration configuration.
Other options can be enabled as required. Further information on LTI consumers is provided in the EQUELLA LTI Consumer Configuration Guide.
### LTI/LIS Role Mappings
Canvas roles sent through to EQUELLA via the LTI integration need to be mapped to equivalent EQUELLA roles so that relevant privileges can be applied. This is done from the LTI/LIS Role Mappings section of the Add new LTI consumer or Edit LTI consumer pages. 

The LTI/LIS Role Mappings section has three areas:
•  Instructor role – map the ‘Teacher’ role to EQUELLA role/s.
•  Other roles –this area is used to map all other roles that might be used in the integration. A list of the standard LTI/LIS roles is supplied. 
•  Unknown roles – use this area to select the EQUELLA roles to default to when an unknown role is sent to EQUELLA. 

### Mapping the Instructor and Unknown roles
In the Instructor and Unknown roles fields, the Add roles link is used to select the EQUELLA roles to be used in the mappings. An example using the Instructor role is used below:

To map to EQUELLA role/s
1.  Click the Add roles link under the Instructor role field. The Select role(s) dialog displays. 
2.  Enter a search query then click Search . Matching results display. 
3.  Select the required role/s, then click Select these roles. The mapping/s displays in the Instructor role field. 
4. Select the Add roles link to add more mappings.

### Mapping other roles
The Other roles section is used to map LTI/LIS standard roles and other custom roles to EQUELLA roles. 

To map other roles
1.  In the Other roles area, start typing the required LTI/LIS role (e.g. Student) in the Enter LTI/LIS role field. A list of all the standard LTI/LIS roles displays in a drop-down list. 
2. Select the required value (e.g. Student) from the drop-down list.
3.  Click the Add roles link next to the selected LTI/LIS role. The Select role(s) dialog displays. 
4.  Enter a search query then click Search. Matching results display. 
5.  Select the required role/s, then click Search these roles. The mapping/s displays in the Other roles field. 
6. To add further EQUELLA roles to the Other roles that have existing mappings or to add another LTI/LIS role mapping, repeat steps 1 to 5.

## Configure Canvas

This section describes the required configuration in Canvas to support the integration.

### Add External App
EQUELLA is added to Canvas as an External App. This can be done at an administration account level, which will result in all Canvas courses having access to the EQUELLA integration screen, or at a course level, which results in only those Canvas courses that have been configured having access to the EQUELLA integration screen.

#### To add EQUELLA as an external tool
1.  Go to the Courses drop-down and select either:
a.  the administration account (e.g. EQUELLA) from the Managed Accounts section (to configure the integration across all courses), or
b.  a specific course from the My Courses section to open the Canvas course page for that course (to configure the integration for only the selected course). 
2.  Select Settings from the account or course page navigation menu, then the Apps tab. 
3. Select View App Configurations. The External Apps list displays.
4.  Select Add New App to open the Add New App dialog. 
5.  Select the Configuration Type from the drop-down list. 
* For web-accessible EQUELLA instances:
a.  Select By URL.
b.  Enter the Config URL at the bottom of the Add App dialog box in the format http://myinstitution.equella.com/institution/lti/autoconfig. 
* For EQUELLA instances not freely available
a.  Select Paste XML.
b.  Open a new browser window and enter the Configuration URL in the format http://myinstitution.equella.com/institution/lti/autoconfig and press Enter. XML displays on the page.
c.  Right click and select View page source from the menu. Copy all of the resulting XML displayed and paste it into the XML Configuration text box at the bottom of Add App dialog box. 
6.  Enter a Name (e.g. EQUELLA). 
7.  Enter the Consumer key (e.g. canvas). This must be the same as previously configured in the Register an LTI OAuth Client section on page 4.
8.  Enter the Shared Secret (e.g. 52ea0fcb-fa00-4e05-b85b-0a4b0f0660b7). This must be the same as previously configured in the Register an LTI OAuth Client set up. 
9.  Click Submit. The External App now displays in the list. 

### Generate token
A token must be generated against a Canvas user to be used when the Canvas External connector is created in EQUELLA.

EQUELLA content links are added to Canvas course modules acting as the user that the token is generated under when the following methods are used:
* Select resources from EQUELLA link in Canvas.
* Add to external connector (Push to LMS) function in EQUELLA.

When EQUELLA content links are added using the External Tool option from the Canvas course module, or added via the Canvas HTML editors, the user stored is the logged-in user who performed the function/s.

#### To generate a token
1.  Log in to Canvas as the user that will be used for EQUELLA integration transactions.
NOTE: The user must have sufficient Canvas permissions to add and view content within the course.
2.  Click on the User name link in the top right to display the user Settings page, select the Settings link from the left hand menu then scroll down and select New Access Token. The New Access Token dialog displays.
3. Enter a Purpose (e.g. EQUELLA) and leave the Expires field blank.
4.  Click Generate Token. The Access Token Details dialog displays. 
5.  Copy the Token and save it somewhere where it can be easily copied. It will be required for the EQUELLA Canvas External connector configuration.


## Configure EQUELLA External connector

### Add External Connector in EQUELLA 
#### To add an External connector in EQUELLA 
1.  Select Settings from the navigation menu, and either type External in the filter box, then select External system connectors from the results or scroll down to External system connectors on the Settings list. The External system connectors page displays.
2.  Select the Add new connector link to display the Create new connector page. 
3.  From the Select a connector type drop-down, select Canvas. The Create new connector page displays with Canvas-specific options.
4. Enter a Connector name (e.g. Canvas) and Description (optional).
5.  Enter the institution’s Canvas URL (e.g. http://myinstitution.instructure.com).
6.  Click Test URL to make sure the entered URL is valid. A Connection successful message displays. 
If an error occurs, check the URL and try again.
7.  Enter or paste the Manually generated token generated in Canvas. 
8.  Click Test token to make sure the entered token is valid. An Access token OK message displays.  

If an error occurs, check the token and try again.

9.  Disregard the Modify EQUELLA usernames to match Canvas: checkbox – it was erroneously included and will be removed in a future release.
10.  Select the Allow users to select the resource summary when pushing content via this connector checkbox if EQUELLA Resource summary page links are allowed to be added to course modules via the Push to LMS function. Leave unchecked if items allowed should be restricted to Resource attachment links.
11.  If required, click Change next to Exportable by to open the Select users page. Select the user, group or role (usually role) to access the Add to external link (Push to LMS) from the Resource summary page. Click OK to save.
12.  Disregard the Content viewable by field. This refers to the Find uses function which is not compatible with Canvas at this point.
13.  Click Save to save the connector details.


## Test the installation

Once the configuration aspects of the integration have been completed, the installation can be tested.

### Accessing the Integration screen
1.  From a Canvas course navigation menu, select Select resources from EQUELLA. The EQUELLA Integration screen displays. 

Note that when EQUELLA content links are added and saved into the Canvas course module/s from the Integration screen, the ‘token user’ is stored against that transaction in Canvas. However, if content is contributed from the Integration screen, the EQUELLA owner for that resource will be the logged-in Canvas user. 

NOTE: If there is no matching EQUELLA user for the Canvas user accessing EQUELLA through the Integration screen, a new EQUELLA user is automatically created using the Canvas credentials.

### Accessing the Add to External system (Push to LMS) function
1.  From the EQUELLA Resource summary page, select the Add to external system link from the Actions menu.
2.  Select Canvas from the drop down list. If only one external system is set up, the Add to external system screen displays immediately. 

Note that when EQUELLA content links are pushed to the Canvas course module/s, the ‘token user’ is stored against that transaction in Canvas.

### Accessing EQUELLA from the Canvas Module page
1.  Select Modules from the course navigation menu. A list of course modules display on the screen. 
2.  Click the + button beside the module the resource is to be added to.

The Add item to Module name dialog opens.
3.  Select External Tool from the Add drop-down list. A list of available external tools displays. 

3.  Locate and select EQUELLA from the list. The EQUELLA Select page displays. 

Note that when EQUELLA content links are saved to the Canvas course module/s using this method, the logged-in Canvas user is stored against that transaction in Canvas.

### Accessing EQUELLA from the Canvas HTML Editors
Any HTML Editor in Canvas should be able to access EQUELLA content. The example below uses the Canvas Assignments function to illustrate how to test the availability of the EQUELLA option.
1.  On the Canvas Course page, select Assignments from the navigation menu, then click + Assignment. 
The Create new assignment page displays with the HTML Editor. 
2.  Select the Equella icon from the HTML editor toolbar. 

NOTE: The second, larger equella icon (Insert EQUELLA links) has been added by Canvas, and does not link to the integrated EQUELLA instance. It opens the OER repository. The same OER content can be accessed via Cloud search results from the integrated EQUELLA.

The EQUELLA Select screen displays. 



## EQUELLA Selection session options

A number of options are available to tailor the EQUELLA Integration and Select screens.

The Selection sessions page provides the Quick Contribute setting, as well as version defaults for resource version selection.

#### To configure Selection sessions
1.  Select the Selection sessions link from the Settings page. The Selection sessions page displays. 

### Quick Contribute
In integrated third-party systems such as Blackboard, Canvas and Moodle, the Integration screen Contribute page enables a Quick Contribute control. 

Users can navigate to and select a file that is automatically contributed as an EQUELLA resource into the chosen EQUELLA collection and added to the integration’s course list.
The Quick Contribute control prevents duplicate files being uploaded into EQUELLA. 

#### To select a collection for Quick Contribute
1.  Select a collection from the Choose a collection drop-down list. 
2.  Click Save.

### Version selection
The Version selection section of the Selection sessions page provides institution-wide settings for resource version selection. Course specific version selections can be managed using the Administration Console Courses tool.

Version selection configuration is used to determine which version of a resource is displayed when a resource link is selected. 

Selecting the latest live version options displays the latest version of the resource when the link is selected even if the saved link is for an older version; otherwise the version associated with the link is displayed.

The options that allow a user to choose the version are enabled on the resource’s summary page for a Resource Selector control in a Contribution Wizard and when EQUELLA is integrated with a third party application such as Blackboard, Canvas or Moodle. 

### To configure version selection
1.  Select one of the following:
* Force selection to be the resource version the user is viewing—(default option) displays the originally linked resource.
* Force selection to always be the latest live resource version—displays the latest version of the originally linked resource.
* Select the resource version the user is currently viewing—allows the user to choose between the selected resource version and the latest version of that resource during contribution when selecting existing EQUELLA resources as attachments. When this option is selected, a drop-down list displays on the My selections page and the user selects the required option. Fixed to v(x) is shown as the default when this option is selected. 
* Always use the latest live resource version—allows the user to choose between the originally linked resource and the latest version of that resource during contribution when selecting existing EQUELLA resources as attachments. When this option is selected, a drop-down list displays on the My selections page and the user selects the required option. Latest available is shown as the default when this option is selected. 
 
### Selection options
Administration users can choose to disable the Select summary page button on the results page for selection sessions, which can prevent accidental additions of EQUELLA summary page links to course modules.
#### To disable the Select summary page button
1.  From the Selection options section of the Selection sessions page, select the Disable the ‘Select summary page’ button on results pages checkbox. 


## EQUELLA Canvas user login plug-in

EQUELLA can be configured so that users can login to EQUELLA using their Canvas login credentials. 

Clicking the Login with Canvas link takes the user to the Canvas login page (or straight in to EQUELLA if they have previously logged in to Canvas). Once the user logs in to Canvas, they are taken to the EQUELLA Dashboard page.

NOTE: Matching user records must exist in both Canvas and EQUELLA. An error displays if a Canvas user tries to access EQUELLA where there is no matching user record in EQUELLA.

#### To use Canvas login for EQUELLA

NOTE: A Canvas Dev Key is required to successfully configure this functionality. Go to http://instructure.github.io/ and follow the instructions in the Dev Key Signup section to apply for one.

1.  From the EQUELLA navigation menu, go the Settings, Administration Console. The Administration console displays.
2.  Select User management to display user management options.
3.  Highlight Canvas then click Configure. The Canvas configuration dialog displays. 
4.  Enter the institution’s Canvas URL (e.g. https://mystitution.canvas.com).
5.  Enter the Dev Key ID as supplied by Canvas.
6.  Enter the Key as supplied by Canvas.
7.  Select the Bypass the EQUELLA logon page. I.e. don’t show link to login to Canvas to go straight to the Canvas login page when EQUELLA is accessed (or straight into EQUELLA if the user has previously logged in to Canvas).
8.  Click Save. Once the save confirmation displays, click Close. The Canvas plug-in now needs to be enabled to start working.

#### To enable the Canvas plug-in
1.  From the Administration Console, User Management page, select the Canvas Enabled checkbox. The Enable Plugin? confirmation dialog displays. 
2.  Click Yes. The Canvas plug-in is now enabled.
