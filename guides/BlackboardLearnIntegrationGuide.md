[Home](https://openequella.github.io/)

# Blackboard Learn Configuration Guide


Table of Contents

* [openEQUELLA Blackboard Learn integration overview](#openequella-blackboard-learn-integration-overview)
* [Prerequisites](#prerequisites)
* [Integration Procedure](#integration-procedure)
* [Configure openEQUELLA](#configure-openequella)
* [Configure Blackboard](#configure-blackboard)
* [Usage](#usage)
* [Notes](#notes)
* [Migration from B2 to LTI Links](#migration-from-b2-to-lti-links)


## openEQUELLA Blackboard Learn Integration Overview
openEQUELLA integrates easily with Blackboard Learn™ (Blackboard) by using Blackboard LTI and REST APIs to create a seamless system for users.

The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA / Blackboard integration process to enable successful integration. 

Please note this guide has been developed using Blackboard version v3800 and, as such, may differ in appearance to your own installation. 

The openEQUELLA / Blackboard integration has historically been achieved with a building block and web service that was uploaded into the Blackboard site. This has presented some difficulties in the past and Blackboard retired their [SOAP Web Services in Q2 2020](https://help.blackboard.com/node/28021) which effectively broke the openEQUELLA web service. Due to this upcoming loss of functionality, and the complexity of maintaining the building block and web service, a pure LTI / REST integration was developed.

As part of migrating from the building block and web service integration to the LTI / REST integration, a [migration building block](https://github.com/openequella/openEQUELLA-blackboard-integration) was developed to aid in the process.

Adopters will no longer be able to use the 'My Institution' integration that was part of the building block and web service integration.

## Prerequisites
To successfully complete this installation the system administrator will require:
* Sufficient privileges to access the Blackboard system integration functionality
* Sufficient privileges to access the openEQUELLA user management, LTI Consumers, and External System Connector functionality 

In order to make REST calls into a Blackboard site, adopters will need to obtain a REST Application ID via <https://developer.blackboard.com>. This REST Application ID will then be used (via the same site), to create a REST Application key and secret that is tied to your Blackboard site URL. You will need this key and secret when configuring the integration in Blackboard. Please read this [post](https://docs.blackboard.com/learn/REST/Developer%20Groups,%20Site%20Quotas,%20and%20Rate%20Limits.html) for more information on how Blackboard handles REST Application IDs.

System prerequisites for integration
* openEQUELLA version 2020.1.0+ (or the latest hotfix for 2019.1)
* Blackboard v3800+

## Integration Procedure
openEQUELLA Blackboard integration comprises the following steps:
1. Configure an LTI Consumer in openEQUELLA
2. Configure an External System Connector in openEQUELLA
3. Configure REST Application in Blackboard
4. Configure LTI Provider Domain in Blackboard
5. Configure Course Content Tool Placement in Blackboard
6. Test the installation

## Configure openEQUELLA

### Configure a LTI Consumer
LTI consumer client registrations are registered from the Settings page in openEQUELLA.  The guide to setting up an LTI Consumer can be found in [LTI Consumer Configuration Guide](/guides/LTIConsumerConfigurationGuide.md).

Use the standard LTI launch endpoint  `/ltisignon.do`.
 
### Configure an External System Connector
1. Under **Settings > External System Connectors**, click on **Add new connector**
2. Select **Blackboard REST**
3. Configure a Connector name, and provide a Blackboard REST URL
4. Click on **Test URL**
5. Specify the REST API Key and REST API Secret from <https://developer.blackboard.com>.
6. The rest of the configuration is standard **External System Connector** details

### Permissions
Grant the following to your openEQUELLA users
* `EXPORT_VIA_CONNECTOR`, `EXPORT_TO_LMS_ITEM`, `VIEWCONTENT_VIA_CONNECTOR`, `FIND_USES_ITEM` - Push to LMS / Find Uses / Manage External Resources.
* `INTEGRATION_SELECTION_SESSION` - LTI launch from Blackboard to openEQUELLA to the selection session page
* `DISCOVER_ITEM` - Discover openEQUELLA items in a search (such as from the selection session).  Allows some of the metadata to show.
* `VIEW_ITEM` - View attachments from an LTI launch, view attachments from a selection session.

## Configure Blackboard

### Register a LTI Provider Domain

1. Under **System Admin > LTI Tool Providers**, select **Register Provider Domain**.
2. Configure the Provider domain.  e.g. for the openEQUELLA institution, `https://my.learning.center/oeq`, you would put `my.learning.center`.
3. Set **Provider Domain Status** to `Approved`.
4. Under **Default Configuration**, set **Default Configuration** to **Set globally**.
5. Configure the **Tool Provider Key** and **Tool Provider Secret** with the values you configured in the `openEQUELLA LTI Consumer`.
6. Optionally, you can customize how Blackboard sends the user ID and username to openEQUELLA.  For example, if you configure the following custom parameters in Blackboard's LTI Provider Domain:
```properties
bb_username=@X@user.id@X@
bb_user_id=@X@user.batch_uid@X@
```
You would need to configure the following in the **openEQUELLA LTI Consumer**:
```properties
Custom User ID:  custom_bb_username
Custom Username: custom_bb_user_id
```
_Note: Blackboard prepends `custom_` to each custom parameter._
_Note: openEQUELLA prepends a unique value (by **LTI Consumer**) to the user ID.  Unticking the checkbox in the **LTI Consumer** config will force openEQUELLA to use the user ID exactly as it is given.
7. Under **Institution Policies**, set **Send User Data** to **Send user data only over SSL**.
  * Note:  You can select **Send user data over any connection**, but it is not recommended for a Production install.
8. Set **User Fields to Send** to **Role in Course, Name, and Email Address**.
9. Set **Allow Membership Service Access** to **Yes**.

### Configure a Course Content Tool Placement

1. Under the newly registered provider domain, select **Manage Placements**.
2. Select **Create Placement**.
3. Configure the label and description.
4. Configure the handle (this cannot change after the placement is created).
5. Leave **Availability** set to **Yes**.
6. Set **Type** to **Course content tool**, and then select **Supports deep linking**.
7. Under **Tool Provider Information**, set the **Tool Provider URL** to `{https://your.oE.domain.xyz/demo/}ltisignon.do`.
8. The **Tool Provider Key** and **Tool Provider Secret** will be preconfigured (and readonly).

### Configure a REST Application in Blackboard
___TODO - this needs to be updated with the REST MVP logic___

1. Under **System Admin > REST API Integrations**, select **Create Integration**.
2. Configure the Application ID from your registration on https://developer.blackboard.com/ .
3. Select a 'Learn User' that has sufficient permissions.
4. Leave **End User Access** as the default **Yes**.
5. Leave the **Authorized To Act As User** as the default **Service Default (No)**.

## Usage

### Add an openEQUELLA content link with the Course Content Tool Placement

In an original Blackboard course, navigate into **{your course} > Information > Build Content > your-oEQ-CCT-placement** .  This is known as 'Pull to LMS'.

### Other integration abilities

The rest of the integration abilities are similar to the building block and web service flows:
* 'Push to LMS'
  * From openEQUELLA, select courses / folders to integrate content links from a given openEQUELLA resource.
* Manage External Resources 
* Find Uses

## Notes

* The default REST Application ID adopters obtain a 'developer' level ID - there is a 7 Blackboard site limit, and API call rate limits.  It is recommended openEQUELLA / Blackboard adopters reach out to their Blackboard Support contacts to discuss the appropriate REST Application ID level for their institution.
* The Blackboard REST integration can be enabled / disabled with the **Available** flag in Blackboard.
* A good write up of the configuration options for Blackboard REST applications is [here](https://community.blackboard.com/community/developers/learn/blog/2019/02/12/end-user-access-authorized-to-act-as-user).
* If you get an error in openEQUELLA `CacheLoader returned null for key TOKEN.`, confirm your Blackboard REST Application is configured and available.

## Migration From B2 to LTI Links
The building block / web service approach is now deprecated and as of April, 2020 will no longer work properly in Blackboard instances running the version on Blackboard's SaaS installs.  It is recommended to upgrade to an openEQUELLA version that supports the integration via LTI and REST.  As part of that upgrade and conversion from building block linking to LTI linking, a migration effort needs to occur.  This can be accomplished with the [oEQ LTI Migration B2](https://github.com/openequella/openEQUELLA-blackboard-integration/releases/).

### Notes
* Technically openEQUELLA building block Links are LTI, so this enhancement removes the use of the building block when selecting openEQUELLA links and accessing linked openEQUELLA content from Blackboard.
* It's recommended to backup your Blackboard institution before beginning, and if possible, test the migrations on a Test environment.
* The migration can run institution-wide or by course.  It's recommended to run by course for a representative set and do more in-depth testing prior to an institution-wide migration.
* It's supported to re-run a migration over courses.
* The migration utility is a single instance for the institition, so only 1 instance can run at any given time.

### Quick Start
1. Download the latest version of the migration building block from the github releases page
2. Upload the migration building block into the Blackboard instance you want to migrate
3. Access the building block `Settings` option
4. Your Institution URL is pulled from the primary openEQUELLA integration building block and can only be changed via the primary integration building block.
5. Specify the Placement handle.  This is your _NEW_ Blackboard LTI Tool Provider placement handle.  Should be something like `apereo/oeq`.
6. Course ID (optional) - when you access your course, the URL contains the course ID (in this case `_1234_1`):
```
https://my.blackboard.com/ultra/courses/_1234_1/cl/outline
```
7. Tick the checkbox to allow the migration to run
8. Click 'Submit'.  To refresh for updated status, click 'Submit'.
9. Once the migration completes (or errors), you can reset the migration utility (and logs) by ticking the checkbox under the 'RESET' section. 


