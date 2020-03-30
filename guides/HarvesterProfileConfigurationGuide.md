[Home](https://openequella.github.io/)

# Harvester Profile Configuration Guide

- [Harvesting guide](#harvesting-guide)
- [Harvester profile tool](#harvester-profile-tool)
- [Harvester types](#harvester-types)
- [Harvester profiles scheduled task](#harvester-profiles-scheduled-task)
- [Harvester system settings](#harvester-system-settings)

## Harvesting guide

Content from third-party sources can be obtained by using EQUELLA’s harvesting tool that is used to collect learning objects and resources from third-party institutions and upload them automatically to the openEQUELLA repository. Content can be obtained from The Learning Federation using the LORAX protocol, while content from other institutions can be gathered with the OAI (Open Archives Initiative) metadata harvesting protocol.

Content contained in the openEQUELLA Digital Repository can also be accessed by using the OAI protocol.

The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA Harvester Profile tool to enable successful management of harvesting.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA and as such may differ in appearance to your own installation.

## Harvester Profile tool

The openEQUELLA harvester allows content from third-party sources to be collected and uploaded to the openEQUELLA Digital Repository. Content can be obtained from The Le@rning Federation (TLF) using the Learning Object Repository Access and eXchange (LORAX) protocol, while metadata can be gathered with the Open Archives Initiative (OAI) metadata harvesting protocol. Content from other openEQUELLA Digital Repositories can also be collected.

The Harvester Profile:

- provides harvesting of metadata and resources,
- allows harvesting of other openEQUELLA repositories, enabling community repositories to be created with sizable pools of content,
- allows multiple Harvester Profiles to be created and managed via the Administration Console,
- can be run as a scheduled task.

### Configure a harvester profile

Harvester profiles are created and modified using the Harvester Profiles tool available in the Administration Console.

##### To access openEQUELLA and open the Administration Console

1.  Open a browser and enter your openEQUELLA URL (e.g.‘<http://equella.myequellainstitution.edu>’).
2.  Log in to openEQUELLA as an administrator user to display the openEQUELLA dashboard.
3.  Click the Settings button to display the Settings page, then select Administration console from the categories list.
4.  Select the Harvester Profiles option to display the Harvester Profiles pane that contains a list of all previously configured profiles.

### Administration Console elements

When a tool has been selected the Add, Edit, Remove, Clone, Import and Export buttons are enabled.

#### Add

Click Add to display the Harvester Profiles Editor and create a new profile.

#### Edit

Select a profile then click Edit (or double-click on a profile) to display the Harvester Profiles Editor and modify the selected profile.

If the selected profile is being edited by another user a Locked dialog is displayed, providing the following options:

- Open as read-only—disables the Save button so that no changes can be made.
- Forcefully unlock—unlocks the entity from the previous owner. Editing is possible but changes by other users may be lost.
- Do not open—the profile configuration screen will not be opened.

#### Remove

Click the Remove button to delete the selected profile.

#### Clone

Click the Clone button to copy an existing profile. The cloned profile can then be modified by selecting the Edit button.

#### Import

Click the Import button to import a harvester profile that has previously been exported from the Administration Console. A warning dialog is displayed.

_Note: Only ZIP files that have been exported from the Administration Console should be imported—other ZIP files may adversely affect the stability of the system._

#### Export

Click the Export button to export a profile as a ZIP file.

## Harvester types

Each Harvester profile type provides options for harvesting resources or metadata from different repository types:

- openEQUELLA Harvester
- LORAX Harvester
- MEX Harvester
- OAI Harvester
- SHEX Harvester

### Add a harvester profile

#### To add a profile

1.  Click Add on the Administration Console to display a Harvester Types dialog listing the available harvester types.
2.  Select a harvester type from the list.
3.  Click OK to display the Harvester Profile Editor.

The Harvester Profile Editor provides an interface for harvester creation with the following tabs:

- Details—set general information for the creation of the harvester profile.
- Actions—perform actions on the selected profile.
- Access Control—define privileges for access to the selected profile.

Each tab is described in the following sections.

### Details tab

The Details page displays the harvester’s general details such as name, enabled status, collection to harvest to and import transformation. These elements are common to all harvester profile types.

Each type of harvester has other various configurable requirements. The Harvester Profile Editor—Details page contains configurable elements specific to the selected harvester type as well as the common elements.

The common Details page elements are:

- Profile Name—enter the unique display name of the profile.
- Profile Enabled—is checked by default. Uncheck the box to disable the profile and stop harvesting.
- Collection—displays a list of collections where the harvested resources can be contributed.
- Import Transform—displays a list of XSLT for transforming the harvested resources metadata to that of the contributed collection. The list comprises XSL transformations that have been added to the metadata schema for the associated collection.
- Updates – select how updates occurring to a resource at the source affects the harvested resource in openEQUELLA. The options are:
  - Create a new version (and archive the current version) – selecting this option creates a new version of the resource, while archiving the old.
  - Update the current version – select this option to update the resource with the changes from the source, but keep the current version number (similar to an edit).

The harvester type specific elements are described in the following sections:

### openEQUELLA Harvester

The openEQUELLA type allows harvesting of resources and attachments from other openEQUELLA repositories.
The configurable openEQUELLA Settings include:

- Server—enter the URL for the openEQUELLA institution to be harvested.
- Username/ Password—enter the username and password used to access the repository (if authentication is required).
- Remote Collection—select a collection to be harvested from the drop-down list. Select the Get Collections button to display a list of collections names.
- Only harvest live resources—is checked by default. Uncheck the box to include non-live resources in the harvest.

### LORAX Harvester

The LORAX protocol is used to harvest TLF content.

The configurable LORAX Settings are:

- Username/ Password—enter the username and password used to access the repository.
- Only check Live openEQUELLA resources—is selected by default and scans your openEQUELLA Institution for Live resources to ensure that duplicates are not harvested. Uncheck the box to include non-live resources (e.g. Draft, Archived) in the checking process.
- Harvest Learning Objects—is selected by default. Uncheck the box to exclude learning objects in the harvest.
- Harvest Resources—is un-selected by default. Select the box to include resources in the harvest.

### MEX Harvester

MEX is an Australian protocol used to harvest free content provided under the National Digital Learning Resource Network (NDLRN).

The configurable MEX Settings are:

- Username/ Password—enter the username and password used to access the repository.
- Only check Live openEQUELLA resources—is selected by default and scans your openEQUELLA Institution for Live resources to ensure that duplicates are not harvested. Uncheck the box to include non-live resources (e.g. Draft, Archived) in the checking process.
- Harvest Learning Objects—is selected by default. Uncheck the box to exclude learning objects in the harvest.
- Harvest Resources—is un-selected by default. Select the box to include resources in the harvest.

### OAI Harvester

OAI is a protocol that is used to harvest metadata from third-party sources.

The configurable OAI Settings are:

- Server—enter the URL for the OAI repository to be harvested.
- Metadata Format—select the format from the drop-down list that the metadata is retrieved in. Select the Get Metadata Formats button to display a list of formats.
- Set—select the OAI record set to be harvested from the drop-down list. Select the Retrieve Sets button to display a list of sets.

### SHEX Harvester

SHEX is an Australian protocol used to harvest free content provided under the National Digital Learning Resource Network (NDLRN).

The configurable SHEX Settings are:

- Username/ Password—enter the username and password used to access the repository.
- Only check Live openEQUELLA resources—is selected by default and scans your openEQUELLA Institution for Live resources to ensure that duplicates are not harvested. Uncheck the box to include non-live resources (e.g. Draft, Archived) in the checking process.
- Harvest Learning Objects—is selected by default. Uncheck the box to exclude learning objects in the harvest.
- Harvest Resources—is un-selected by default. Select the box to include resources in the harvest.

### Actions tab

The Actions page provides a flexible method for scheduling and running the harvest.

The Actions page elements include:

- Last Harvest Date—displays the date the harvester was previously run. Click Select to choose a date and Clear to remove the date. The harvest will include all resources/metadata that have not been previously harvested from the repository for the time frame from the date displayed and the current date. The harvest can be scheduled to run at any time.
- Test! —this function will test the profile settings and return the number of results without actually harvesting them.
  a. To perform a test, click Test!. The mouse cursor will turn into a spinner while the query is being performed.
  b. Once finished, a dialog displays informing of the number of returned resources. If this dialog does not appear, the harvester profile settings are configured incorrectly.
- Run! —select this button to immediately run the profile. Run the harvest after performing a successful test.

  a. To perform a harvester, click Run!. A dialog will pop up asking for confirmation.

  b. Once a harvest has been run, is not easily undone. Make sure you definitely want to run it before clicking Yes. A message dialog replaces the confirmation dialog, informing you that the harvester is now running in the background.

  c. The harvester is now running in the background and will not require further user input. Harvester actions are logged in the resource-centre logs and can be viewed by accessing the file:

    ```
    C:\<path-to-openEQUELLA-install-directory>\logs\resource-centre\<date>\application.html
    ```

  d. In this file harvester actions are recorded and can be viewed.

  e. As soon as the harvester is initiated, resources are being added to the selected collection. Resources are uploaded one at a time and can be discovered within openEQUELLA before the harvest has fully completed.

### Access Control tab

The Access Control page allows a harvester profile to be restricted to a set of users, groups or roles.

On this page, two privileges can be configured:

- DELETE_HARVESTER_PROFILE—delete this harvester profile.
- EDIT_HARVESTER_PROFILE—edit this harvester profile.

Other privileges relevant to Harvester Profiles, which are configured in the Security Manager, not from this page, are:

- DOWNLOAD_ITEM—download resources into collection(s).
- CREATE_HARVESTER_PROFILE—create a harvester profile.

Typically these privileges are granted to Administrators, but anyone who performs a harvest will need DOWNLOAD_ITEM granted to them for the given collection.

#### To configure a privilege

1.  Select the Access Control tab to display the Access Control page.
2.  Click the Who can? drop-down arrow to reveal the list of available privileges.
3.  Select the delete this harvester profile privilege.
4.  Select the Advanced option to display the access control list.
5.  Click Add.
6.  In the Action field, select either Grant or Revoke by clicking on the current setting and selecting the appropriate option from the drop-down menu.
7.  In the Who? field, click Everyone to display the Select Recipients... dialog.
8.  Select the Roles option.
9.  Click Search to display a list of all available roles. Alternatively, type the first letter or letters of search resource and click Search.
10. Select System Administrator then select the > button to move the role to the right-hand pane.
11. Remove Everyone from the right-hand pane by selecting it then clicking the < button.
12. Click Save to close the dialog. The delete privilege has now been granted to users in the system administrator role.
13. Click Save to save the harvester profile.

Further privileges and users can be configured using the above procedure.

#### To save a profile

When all elements have been configured for a profile:

1.  Click Save to save the harvester profile details.
2.  Click Close to close the Harvester Profile Editor.

## Harvester profiles scheduled task

Harvesters run with other openEQUELLA schedules tasks. Scheduled tasks are configured from the Settings page.

#### To configure Scheduled tasks

1.  Select Settings from the navigation menu, then click the Scheduled tasks link. The Scheduled tasks page displays.
2.  Harvester profiles are run daily. Select the required time from the Run daily tasks at drop-down, then click Save.

All enabled profiles are included when the scheduled task is run.

## Harvester system settings

A Harvester setting is available from the Settings page, and allows harvesters sourcing content from the current institution to harvest content without accepting any DRM licenses.

#### To configure the Harvester option

1.  Select Harvester from the Settings page.
2.  Select the Harvester link from the Settings page. The Harvester page displays.
3.  Select the Configure harvesters to skip DRM acceptances when harvesting items checkbox.
4.  Click Save.
