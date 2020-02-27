[Home](https://equella.github.io/)

# LTI Consumer Configuration Guide

Table of Contents
* [Overview](#overview)
* [LTI consumer ACLs](#lti-consumer-acls)
* [Create LTI consumer](#create-lti-consumer)
* [Edit LTI consumer](#edit-lti-consumer)
* [Disable or enable LTI consumer](#disable-or-enable-lti-consumer)
* [Delete LTI consumer](#delete-lti-consumer)


## Overview

LTI consumer client registrations can be created in openEQUELLA and used with LMSs and other LTI compliant products to send information between the systems, as well as allowing users to sign into openEQUELLA via the LMS/LTI tool.

This guide details the configuration of LTI consumers in openEQUELLA, and the LTI/LIS role mappings to openEQUELLA roles.

The standard, non-vendor specific LTI endpoint is `/ltisignon.do`.  There are a couple specific LTI endpoints (Canvas and Desire 2 Learn) that have their own LTI endpoints (and accompanying LTI custom logic), but are configured from the same `LTI Consumer`.

## LTI consumer ACLs

To be able to create, edit or delete LTI consumers, relevant administration users will need to be granted the following ACLs:
  * CREATE_LTI_CONSUMER
  * EDIT_LTI_CONSUMER
  * DELETE_LTI_CONSUMER

## Create LTI consumer

When an LTI consumer client is created in openEQUELLA, a Consumer key and Consumer secret is allocated. These values are then entered in the LMS or LTI tool to secure the LTI integration. Additional username options are configured for each LTI consumer registration.

### Create new LTI consumer
To create a new LTI consumer
1.  Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays.
2.  Select the Create new LTI consumer link to open the Create new LTI consumer page. 
3.  Enter a Title (e.g. Moodle LTI) and a Description (optional).
4.  A default Consumer key displays. This can be changed as desired. The Consumer key is entered in the LMS/LTI tool during integration configuration.
5.  A default Consumer secret displays. This can be changed as desired. The Consumer secret is entered in the LMS/LTI tool during integration configuration.
6.  If required, enter a unique Username prefix (e.g. mdl_) or Username postfix (e.g._mdl) for this LTI consumer. This prefix or postfix is added when new users are created to distinguish those users accessing openEQUELLA from this LTI consumer.
7.  The following 3 configuration points only apply for standard LTI connections ( that are configured with `/ltisignon.do` ).  All three are optional.
  1.  `Custom user ID` - Allows configuration of a custom LTI parameter to provide the user ID.
  2.  `Custom username` - Allows configuration of a custom LTI parameter to provide the username.
  3.  The checkbox to configure the prefix for the user ID allows the system to prepend a hash of the consumer's unique system ID to the user ID to help avoid user ID and username collisions.
8.  The Usable by field allows administrators to restrict who can use this LTI consumer. The default is Everyone. Click Change to open the Select recipients… dialog to select users, groups or roles from the Home tab, or other options, such as Guest users, specific IP address etc. from the Other tab. 
9.  From the Unknown user handling drop-down, select the system behavior when an attempt is made to logon to openEQUELLA with a username that doesn’t exist. Options are:
* Deny access and present error message
* Treat user as a guest
* Create local user and add them to the following groups…
    If the third option is selected, click the Add groups link open the Select group(s) dialog to search and select the required groups to which the user will be added.

### LTI/LIS Role Mappings
Standard LTI/LIS roles that are supplied to openEQUELLA from the LMS/LTI tool can be mapped to openEQUELLA using the LTI/LIS Role Mappings section on the Create new LTI consumer and Edit LTI consumer pages. Additionally, custom roles can also be mapped to openEQUELLA roles. 

The LTI/LIS Role Mappings section has three areas:
* Instructor role – commonly used LTI role within LMSs. Use this area to map to relevant openEQUELLA role/s.
* Other roles – use this area to map all other roles used in the integration. A list of the standard LTI/LIS roles is supplied. Custom roles can also be added and mapped in this area.
* Unknown roles – use this area to select the openEQUELLA roles to default to when an unknown role is supplied to openEQUELLA.

#### Mapping the Instructor and Unknown roles
In the Instructor and Unknown roles fields, the Add roles link is used to select the openEQUELLA roles to be used in the mappings. An example using the Instructor role is used below:

To map to openEQUELLA role/s
1.  Click the Add roles link under the Instructor role field.  The Select role(s) dialog displays.
2.  Enter a search query then click Search. Matching results display. 
3. Select the required role/s, then click Select these roles. The mapping/s displays in the Instructor role field. 
4. Select the Add roles link to add more mappings.

#### Mapping Other roles
The Other roles section is used to map all LTI/LIS standard roles (other than Instructor) to openEQUELLA roles. Custom roles can also be mapped.

To map an LTI/LIS standard role (other than Instructor)
1.  In the Other roles area, start typing the required LTI/LIS role in the Enter LTI/LIS role field. A list of all the standard LTI/LIS roles displays in a drop-down list. 
2.  Select the required role.
3.  Click the Add roles link next to the selected LTI/LIS role. The Select role(s) dialog displays. 
4.  Enter a search query then click Search. Matching results display. 
5.  Select the required role/s, then click Select these roles. The mapping/s displays in the Other roles field. 
6. To add further openEQUELLA roles to LTI/LIS roles that have existing mappings or to add another LTI/LIS role mapping, repeat steps 1 to 5.

#### Mapping custom roles
Custom roles can be added in the Other roles section and mapped to openEQUELLA roles.

To add a custom role
1.  In the Other roles area, type the custom role (e.g. Lecturer) in the Enter LTI/LIS role field. Check that your custom role doesn’t appear in the LTI roles drop-down, otherwise ignore the drop-down list.
NOTE: When typing custom roles, be sure that it is entered as an exact match to what is being used in LMS/LTI tool, including case-sensitivity.
2.  Click the Add roles link next to the custom role name. The Select role(s) dialog displays.
3. Enter a search query then click Search. Matching results display. 
4.  Select the required role/s, then click Select these roles. The mapping/s displays in the Other roles field. 
5. To add further openEQUELLA roles to the custom roles that have existing mappings or to add another custom role mapping, repeat steps 1 to 4.

### Save LTI consumer
1.  Once all fields are completed, click Save.
 
## Edit LTI consumer

To edit an LTI consumer
1.  Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays.
2.  Select the Edit link beside the LTI consumer to be edited to open the Edit LTI consumer page. 
3.  Make the required changes. 
4.  Click Save.
 
## Disable or enable LTI consumer

LTI consumers can be disabled and enabled. For example, an administrator may wish to disable a particular LTI consumer to prevent it from being used during a maintenance period. Once maintenance is complete, they can then enable it for use.

To enable or disable an LTI consumer
1.  Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays. 
2.  Select the Disable link beside the LTI consumer to be disabled. The LTI consumer is disabled and can no longer be used. The Disable link has changed to an Enable link. 3.  Click the Enable link to enable the LTI consumer for use.

## Delete LTI consumer
When deleting an existing LTI consumer, it must be disabled prior to being deleted.

To delete an LTI consumer
1.  Select Settings from the navigation menu, and either type LTI in the filter box, then select LTI consumers from the results or scroll down to LTI consumers on the Settings list. The LTI consumers page displays. 
2.  Select the Disable link beside the LTI consumer to be deleted. The LTI consumer is disabled, and the Disable link changes to Enable, and a Delete link displays.
3.  Select the Delete link beside the LTI consumer to be deleted. A confirmation box displays.
4.  Click OK.
