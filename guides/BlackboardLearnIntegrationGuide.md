# Blackboard Learn Configuration Guide


Table of Contents

* [EQUELLA Blackboard Learn integration overview](equella-blackboard-learn-integration)  
* [Prerequisites](prerequisites)  
* [Integration procedure](integration-procedure)  
* [Configure EQUELLA](configure-equella)  
* [Register an LTI consumer](register-an-lti-consumer)  
* [Configure Blackboard](configure-blackboard)
* [EQUELLA portal](equella-portal)  
* [Troubleshoot an unsuccessful integration](troubleshoot-an-unsuccessful-integration)  


## EQUELLA Blackboard Learn integration overview
EQUELLA integrates easily with Blackboard Learn™ (Blackboard) by using the EQUELLA Blackboard Building Block to create a seamless system for users. Additionally the EQUELLA Shared Secret functionality provides a single sign-on for users.

The purpose of this guide is to provide system administrators with an understanding of the EQUELLA Blackboard integration process to enable successful integration. 

Please note that this guide has been developed for Blackboard version 9.1 (SP16) and, as such, may differ in appearance to your own installation. 

## Prerequisites
To successfully complete this installation the system administrator will require:
•  Sufficient privileges to access the Blackboard system integration functionality.
•  Sufficient privileges to access the EQUELLA User Management functionality 

System prerequisites for integration
•  EQUELLA version 6.4 and Blackboard version 9.1 (SP16) must be installed and running. 
•  Ensure the time settings of the servers have the correct time and time zone for their location. This way both will report to Greenwich Mean Time (GMT) and synchronise correctly.
•  To access the EQUELLA Home page at least one course must have been created in Blackboard. Refer to the Blackboard documentation for more information. 

## Integration procedure
EQUELLA Blackboard integration can be broken into the following steps:
1.  Register an LTI OAuth Client in EQUELLA.
2.  Configure and enable the Shared Secret in the EQUELLA User Management tool.
3.  Download the Blackboard Building Block from the EQUELLA Institution Manager.
4.  Upload the building block into Blackboard.
5.  Activate the EQUELLA Plugin in Blackboard.
6.  Test the installation.

## Configure EQUELLA 
This section describes the required configuration changes to EQUELLA to support a seamless integration. To achieve this, an EQUELLA LTI OAuth Client Application needs to be registered, along with a Shared Secret configuration.
### Register an LTI consumer
LTI consumer client registrations are registered from the Settings page in EQUELLA.

To create a new LTI consumer
1.  Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays. 
2.  Select the Create new LTI consumer link to open the Create new LTI consumer page. 
3.  Enter a Title (e.g. Canvas) and a Description (optional).
4.  A default Consumer key displays. This can be changed as desired (e.g. canvas). Take note as the Consumer key is entered in Canvas during integration configuration.
5.  A default Consumer secret displays. This can be changed as desired. Take note as the Client secret is entered in Canvas during integration configuration.
6. Other options can be enabled as required. 

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
2.  Enter a search query then click Search. Matching results display. 
3.  Select the required role/s, then click Select these roles . The mapping/s displays in the Instructor role field. Select the Add roles link to add more mappings.

### Mapping other roles
The Other roles section is used to map LTI/LIS standard roles and other custom roles to EQUELLA roles. 

To map other roles
1.  In the Other roles area, start typing the required LTI/LIS role (e.g. Student) in the Enter LTI/LIS role field. A list of all the standard LTI/LIS roles displays in a drop-down list. 
2.  Select the required value (e.g. Student) from the drop-down list.
3.  Click the Add roles link next to the selected LTI/LIS role. 
The Select role(s) dialog displays. 
4.  Enter a search query then click Search. Matching results display. 
5.  Select the required role/s, then click Select these roles. The mapping/s displays in the Other roles field. 

To add further EQUELLA roles to the Other roles that have existing mappings or to add another LTI/LIS role mapping, repeat steps 1 to 5.
 
### Configure a shared secret
Shared secrets are configured in the EQUELLA Administration Console. 
NOTE: The shared secret is used in the EQUELLA portal functionality outlined below.

To configure a shared secret
1.  Open a browser and enter your EQUELLA URL (e.g. ‘http://equella.myequellainstitution.edu’).
2.  Log in to EQUELLA as an administrator, select Settings then Administration console. 
3. The Administration console displays. Select User Management to display a list of plug-ins. 
4.  Highlight the Shared Secrets user management plug-in, then click Configure. The Shared Secrets dialog displays.
5.  Click Add to create a new shared secret. The Shared Secrets dialog now displays a new shared secret named ‘DEFAULT’ in the left hand pane, and the configuration elements to the right of the pane. 
6.  Enter a unique Identifier (ID) (e.g. blackboard). 
7.  Enter a Shared Secret (e.g. bbS3cr3t). The secret may be any combination of characters and numbers, but strings longer than eight characters consisting of upper and lower case alphanumeric characters are recommended. 
8.  Make a note of the identifier and shared secret; they will be needed to complete the Enable the EQUELLA Plugin section.
Other options can be enabled as required. 
9.  Click Save.
10.  Click Close to close the dialog.
The Shared Secrets plug-in must be enabled (checked). If not already, enable the plug-in:
1.  Check the Enabled checkbox for the Shared Secret plug-in. 
2.  Click Yes to confirm.
3.  Click Exit Console  to close the Administration Console.

NOTE: Only trusted users should be able to see the shared secret, as this information can be used to impersonate any user within EQUELLA.

The next step in the integration process is to download the Blackboard Building Block. 

## Configure Blackboard 
This section describes the required configuration changes to Blackboard to support the integration. EQUELLA provides a Building Block tool that allows Blackboard users to easily contribute, search and select EQUELLA content and link them to a course. 
### Download the EQUELLA Blackboard Building Block
The Blackboard Building Block is available from the Downloads page accessed from the EQUELLA Server administration page.

To open the Server administration page
1.  Open a browser and enter the complete EQUELLA admin.url URL (as set in the mandatory-config.properties file in the learningedge-config directory of your EQUELLA install) with ‘/institutions.do?method=admin’ appended (e.g. where your admin.url URL is set as ‘http://equella.myinstitution.edu/’ the Institution Manager URL would become ‘http://equella.myinstitution.edu/institutions.do?method=admin’). 
2.  Enter the password used by the EQUELLA server administrator (this is set during installation) to display the Server administration - Institutions page. 

To download the Blackboard Building Block:

3. Select the Downloads button to display the Downloads page. 
4.  Select the Download the EQUELLA Blackboard Building Block link for your Blackboard version. 
5.  Save the relevant .war file (e.g. equella-building-block-9.1.war) to your filesystem.
The next step in the integration process is to install and activate the Blackboard Building Block. 

### Install and activate the Building Block
To access Blackboard Learn
1.  Open a browser window and enter your Blackboard URL (e.g. ‘http://blackboard.myequellainstitution.edu’).
2.  Log in to Blackboard as a system administrator to display the Blackboard My Institution page.
3.  Select System Admin to display the System Admin page. 
4.  Select the Building Blocks option from the Building Blocks portlet to display the Building Blocks page. 
5.  Select Installed Tools to display the Installed Tools page. 
6.  Click Upload Building Blocks   to display the Install Building Block page. The Install Building Blocks page displays. 
7.  Click Browse and select the equella-building-block.war file from your temporary directory. The file name is displayed in the Building Block Package field. 
8.  Click Submit  to install the Building Block and save the settings.
The EQUELLA Plugin is listed on the Installed Tools page.
The next step in the integration process is to enable the EQUELLA Plugin.

### Enable the EQUELLA Plugin

To make the EQUELLA Plugin available
1.  Click the down arrow next to EQUELLA Plugin, then select Set Available from the drop-down list.  The EQUELLA Plugin now displays as Available.

To configure the EQUELLA Plugin
1.  Click the down arrow next to EQUELLA Plugin, then select Settings from the drop-down list. The EQUELLA Server Configuration page displays. 
2.  Enter the complete EQUELLA URL to your institution (e.g. ‘http://equella.myinstitution.edu’).
3.  Enter the LTI OAuth Client ID (e.g. bboardint). This must be the same as previously configured in the Register an LTI OAuth Client section.
4.  Enter the LTI OAuth Client Secret (e.g. f78dbe31-ada6-44cd-90de-4b60afb83cbc). This must be the same as previously configured in the Register an LTI OAuth Client section.
5.  Enter the Shared Secret ID (e.g. blackboard). This must be the same as previously configured in the Configure a shared secret section.
6.  Enter the Shared Secret (e.g. bbS3cr3t). This must be the same as previously configured in the Configure a shared secret section.
7.  From the Restrict to drop-down in the Restrict Selections section, select from:
* Attachments only – users can select only resource attachments to add to courses.
* Items only – users can select only resource summaries to add to courses.
* Packages only – users can select only packages to add to courses.
* No restrictions – users can select both attachments and resource summaries to add to courses.
8.  Web service download – this is used for Push to LMS and is not required for the initial Blackboard Learn/EQUELLA integration process. 
9.  Click Submit to complete the EQUELLA Blackboard Learn integration.

To enable the EQUELLA Object option in the drop-down
1.  Select System Admin, then Tools from the Tools and Utilities section. 
2.  The Tools page displays. Scroll down to EQUELLA Plugin. 
3.  Click OFF beside Course Tool. The button changes to ON and a drop-down list displays in the Scope of Change column. 
4.  Select New and existing courses from the list.
5.  Repeat step 3 and 4 for both Organization Tool (selecting New and existing organizations from the drop-down) and Content Type (selecting New and existing courses and organizations from the drop-down). 
6.  Scroll to the bottom of the page and click Submit.

### Test the installation
To access Blackboard

1. Open a browser and enter your Blackboard URL (e.g. ‘http://blackboard.myequellainstitution.edu’).
2. Log in to Blackboard as a user with contribution or administration privileges.
3. Select the relevant course (e.g. Physiology 101) from the My Courses pane to display the Course home page.
4. Select either the Content or the Information link from the course menu.  (NOTE: The pages represented by these links are different although they contain the same features. For the purposes of this guide they are interchangeable, and the Information page has been used.) The course Information documents page will display.
5.  Click  Tools to display a drop-down a menu. 
6. Select EQUELLA Object to display the EQUELLA Integration page. This confirms Blackboard can reach EQUELLA successfully.
 
 
## EQUELLA portal
The EQUELLA portal can be displayed on the My Institution page in Blackboard, and provides links to EQUELLA functions, including workflow tasks and notifications. 

To add the EQUELLA portal
1.  Open a browser window and enter your Blackboard URL (e.g. ‘http://blackboard.myequellainstitution.edu’).
2.  Log in to Blackboard as a system administrator to display the Blackboard My Institution page.
3.  Select the System Admin tab to display the System Administration page. 
4.  Select the Tabs and Modules link from the Communities portlet. The Tabs and Modules page displays. 
5.  Select Modules to open the Modules page, then navigate to the page that displays EQUELLA in the Title column. 
6.  Click the down arrow next to EQUELLA, then select Edit Properties from the drop-down list. 
The Module Properties page displays.
7.  Select the System Availability Yes radio button in the Availability section, then click Submit. 
The Modules page displays, with the EQUELLA module now set as Available.
8.  Select My institution to display the My institution page.
9.  Select Add module. The Add Module page displays.
10.  Scroll down to EQUELLA and click Add. 
The My Institution page now displays the EQUELLA portal.

## Troubleshoot an unsuccessful integration
If the integration is unsuccessful, these are the points to check first:
1.  Check that both the Blackboard server and the EQUELLA server have synchronized time settings.
2.  Ensure that the Shared Secret plugin in the EQUELLA User Management tool is enabled.
3.  Check that the EQUELLA Blackboard Building Block file is installed.
4.  Check that the EQUELLA Plugin is available in Blackboard.
5.  Check the configuration data in Blackboard.
