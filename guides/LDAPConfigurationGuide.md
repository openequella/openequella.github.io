# LDAP Configuration Guide

Table of Contents

[LDAP User Management Plug-in](#ldap-user-management-plug-in)

[LDAP Configuration tool](#ldap-configuration-tool)

[Configure an LDAP connection](#configure-an-ldap-connection)

[General page](#general-page)

[LDAP Mappings page](#ldap-mappings-page)

[Save the LDAP settings](#save-the-ldap-settings)

[Enable the LDAP plug-in](#enable-the-ldap-plug-in)

## LDAP User Management Plug-in
Lightweight Directory Access Protocol (LDAP) is an application protocol that allows arbitrary schemas for storing system data. How these schemas are created is controlled by the LDAP administrator, with each LDAP system having a slightly different structure and naming scheme. These instructions are intended for experienced LDAP users as many of the instructions containing LDAP values use names typical of an LDAP system but the names may not be found on every system, requiring the administrator to find an analogous system object on the actual LDAP instance. The openEQUELLA LDAP plug-in has been implemented to support a variety of different LDAP schemas.

The purpose of this guide is to illustrate to administrator users how to configure openEQUELLA to harness the information from an LDAP server to allow users access to an openEQUELLA institution.

The following tasks need to be completed before the LDAP users can access openEQUELLA:
* Configure a connection to the LDAP server;
* Map the LDAP user data to openEQUELLA user attributes; and
* Enable the LDAP User Management Plug-in.

The LDAP plug-in tests the connection prior to user data mapping ensuring the correct connection is created.

## LDAP Configuration tool
As of openEQUELLA 5, the LDAP configuration tool has changed to become more intuitive and many of the configuration fields from previous openEQUELLA versions have been removed or merged into others.

### Configure an LDAP connection
LDAP connections are configured using the LDAP plug-in, found in the User Management section of the Administration Console.

#### To access openEQUELLA and open the Administration Console
1. Log in to openEQUELLA as an administrator, select Settings then Administration console. 
2. The Administration console displays. Select User Management to display a list of the available User Management plug-ins. 
3. Check the Enabled checkbox next to the LDAP option to enable the plug-in. (Similarly, when the plug-in is enabled, checking the checkbox will disable the plug-in.) 
4. Highlight LDAP then click to display the User Management—LDAP configuration window. 

### General page
The General page displays the configuration information for connection to the LDAP server.

The configurable General page elements include:
* LDAP URL—enter the address of the LDAP server using the ldap protocol. For secure connections, the ldaps protocol should be used. An example is ldap://myldapserver.com:389 or ldaps://secureldapserver.com. This field combines the LDAP Server Address and Port Number fields from previous openEQUELLA versions.
* LDAP Version—select the appropriate LDAP version from the drop-down list.
* Search Limit—select the maximum number of results to return for each query. The default value is 100.
* Allow Searching Wildcards—select to allow wildcard searching of the LDAP server.
* Follow Referrals—select to follow referral trees, if required.
* Force user and group IDs to lowercase - User and group identifiers in openEQUELLA are case sensitive, but this is not the case in many LDAP directories. To provide consistency, openEQUELLA can always force identifiers to be lowercase internally so that changes to the identifier case in the directory will not orphan resources in openEQUELLA. You should not select this option on an existing LDAP and openEQUELLA setup as it could disassociate existing resources for those with mixed case identifiers.

*NOTE: If you select this option, you should ensure that the ID attributes are set for case-insensitive searches by default in the directory.*

* Default User Domain—the value in this field allows users to login without needing to enter the full domain (such as ‘username@domain.com’). For example, where it may have previously been necessary to enter a username similar to ‘bhogan@subdomain.domain.com’ (or the alternative syntax of ‘subdomain\bhogan’) to login as an LDAP user, it is now possible to enter ‘subdomain.domain.com’ into the Default User Domain field, to login simply as ‘bhogan’.
* Admin Username—enter a username that openEQUELLA can use for access to the LDAP server. This user requires search rights on the LDAP server.
* Password—enter the password for the user openEQUELLA uses for access to the LDAP server.

### LDAP Mappings page
Mapping metadata from the LDAP system to openEQUELLA is required to provide access control and user information. openEQUELLA provides preset mappings for common systems minimising the mapping required for most systems.

The LDAP Mappings page displays all the available distinguished names associated with the entered object classes. The distinguished names are displayed in the left-hand pane and the openEQUELLA values with the associated LDAP values are displayed in the right-hand pane.

#### To configure the LDAP Mappings
1. Select the type of LDAP server that will be used by openEQUELLA from the Presets drop-down list. Selecting a preset provides default mapping values for that server.
Values can also be mapped manually if the LDAP server does not have a preset value.
2. Enter the LDAP server name for the Personal Object Class. This value is used to match to LDAP user units. The default value is person.
3. Enter the LDAP server name for the Group Object Class. This value is used to match to LDAP group units. The default value is group.

### Manage DNs
1. Click the Manage DNs button to open the Manage DNs dialog, where LDAP Distinguished Names (DNs) can be configured. 

2. To add DNs manually, type the value into the text box then click Add , or to get DNs from the LDAP server, click the Fetch DNs from the LDAP Server button. The field will populate, and a message will appear confirming the number of successfully discovered DNs. 
3. Click OK to close the Message. Listed DNs can be Removed and Updated by selecting the DN from the list, and clicking Add the appropriate button. Extra DNs can also be added at this time, by typing a value into the text box and clicking .
4. Click OK to close the Manage DNs dialog and return to the LDAP configuration. 

The LDAP fields are displayed as a tree in the left-hand pane. The mapped values are displayed in the right-hand pane.

The mapped values displayed in the right-hand pane can be entered by:
* Navigating the LDAP server fields, selecting the value and adding it to the selected openEQUELLA name using the arrow button. This is the recommended method as it avoids mapping non-existent values. Values can also be dragged from the LDAP fields then dropped on the openEQUELLA values, or
* Entering values directly.
5. Select the required LDAP value from the left-hand pane.
6. Select the openEQUELLA Name to associate this value.
7. Select the arrow button to map the selected value to the selected name. (Select the arrow button to remove a Value associated with a Name.)

openEQUELLA provides names that accept mapping values.
8. Enter the values:
* Username [Required]—the name a user enters to login to openEQUELLA.
* ID [Required]—a unique identifier that is associated with openEQUELLA resources owned by the user. It is important that the LDAP field contains a fixed value as users will not be able to access resource owned by another ID.
* Group ID [Optional]—a unique identifier that identifies the user’s group. Only used when LDAP groups are provided for openEQUELLA use. Typically this is not available and openEQUELLA groups are managed using the Internal Groups plug-in.
* Group Name [Optional]—only used when LDAP groups are provided for openEQUELLA use. Typically this is not available and openEQUELLA groups are managed using the Internal Groups plug-in.
* Family Name [Optional]—leave blank if not used. When only one LDAP field contains a user’s full name, map that field to this openEQUELLA name.
* First name [Optional]—leave blank if not used.
* Email [Optional]—leave blank if not used.
* Member Of [Optional]—leave blank if not used. Map LDAP fields that contain membership data to this field. The mapped field must contain the full distinguished name to the group, such as CN=The Learning Edge, CN=Groups, DC=host, DC=com, DC=au.
* Group Member [Optional]—leave blank if not used. Use this field when LDAP groups contain fields (not just an organised LDAP ‘folder’ hierarchy of users and groups) that identify group users.
* Member Key [Optional]—map the LDAP field used to identify group members. For example:
  * Group Member value ‘member’ identifies group members using the userPrincipalName
  * Member key value is the userPrincipalName.

### Save the LDAP settings
1. Click Save to save the configuration details.
2. Click Close to close the User Management dialog.

### Enable the LDAP plug-in
To effect the changes in openEQUELLA, the plug-in must be enabled.
1. Check the checkbox to toggle the plug-in Enabled/Disabled. A confirmation dialog displays.
2. Click Yes to continue, or No to return without enabling the plug-in.
