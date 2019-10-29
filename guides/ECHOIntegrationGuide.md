[Home](https://equella.github.io/)

# ECHO360 Integration Guide

Table of Contents

- [Echo360 Integration overview](#echo360-integration-overview)
- [Prerequisites](#prerequisites)
- [Restrictions](#Restrictions)
- [Echo360 privileges](#echo360-privileges)
- [Integration process](#integration-process)
- [Deployment recommendations](#deployment-recommendations)
- [Configure an openEQUELLA Schema](#configure-an-openequella-schema)
- [Configure an openEQUELLA Collection](#configure-an-openequella-collection)
- [Configure an openEQUELLA OAuth client](#configure-an-openequella-oauth-client)
- [Configure an openEQUELLA Trusted System](#configure-an-openequella-trusted-system)
- [Configure openEQUELLA EchoSystem Servers](#configure-openequella-echosystem-servers)
- [Echo360’s openEQUELLA Publisher installation](#echo360-openequella-publisher-installation)
- [Enable openEQUELLA Publisher plugin](#enable-openequella-publisher-plugin)
- [Configure openEQUELLA Echo360 viewer](#configure-openequella-echo360-viewer)

## Echo360 Integration overview

openEQUELLA provides the ability for integration with the leading lecture capture software, Echo360. An integrated Echo360 EchoSystem server (ESS) directly publishes resources into openEQUELLA with Echo360 attachments (Echos).

An Echo in the EchoSystem is the processed outputs of a capture event. EchoSystem’s processing of a capture into an Echo creates one or more media files with a large amount of associated metadata. An Echo is also known as a presentation in Echo360’s technical literature and APIs.

The purpose of this guide is to provide administrators with an understanding of how to configure the integration components, and knowledge of how it functions once configured.

## Prerequisites

To successfully complete an integration the system administrator will require:

- sufficient privileges to access the EchoSystem servers setting

System prerequisites for integration:

- openEQUELLA open source and Echo360 5.1 (or later) must be installed and running.
- Ensure that the servers have the same UTC (formerly GMT) time. As long as the UTC time is synchronized on all servers, different times and time zones can be set on each server.

## Restrictions

Please note that the Echo360 openEQUELLA Publisher plugin currently supports integrations with openEQUELLA running with HTTP only.

## Echo360 privileges

There are three privileges associated with the configuration of the Echo360 integration. They can be found in the Security Manager under EchoSystem servers and are:

- CREATE_ECHO – allows new EchoSystem servers to be configured.
- DELETE_ECHO – allows existing EchoSystem servers to be deleted.
- EDIT_ECHO – allows existing EchoSystem servers to be edited.

## Integration process

The process to complete a full integration includes:

- Configuration of the openEQUELLA schema to be used for the Echo360 collection.
- Configuration of the openEQUELLA collection in which Echo360 resources will be stored.
- Installation to the filesystem of the EchoSystem Server’s host and configuration in EchoSystem of Echo360’s openEQUELLA Publisher.
- Configuration in openEQUELLA of an EchoSystem Server.
- Enabling of the openEQUELLA Publisher plugin.
- openEQUELLA Viewer configuration.

## Deployment recommendations

- Configure openEQUELLA's User Management with the same LDAP source as EchoSystem.
- Optionally add the openEQUELLA Publisher to the root organization or sub organization in the ESS.
- Security Module should be either "Seamless Only" or "Authentication Required" or an LDAP authentication retrieving user's credentials from the same LDAP server as the openEQUELLA installation this ESS will integrate with.

## Configure an openEQUELLA Schema

An openEQUELLA schema needs to be created (or edited if using existing schema) for Echo360 resources.

When an Echo360 item is published into openEQUELLA, there is standard metadata stored with the item. Available Echo360 metadata included on all automatically published Echo360 items is:

```xml
<xml>
  <echo360 id="Echo System ID - GUID" version="EchoSystem Server Version" publisher="Echo Publisher Name">
  <term>
    <name>Name - String</name>
  </term>
  <course>
    <id>Course – GUID – Alphanumeric GUID</id>
    <name>Name - String</name>
    <identifier>Identifier - String</identifier>
  </course>
  <section>
    <id>Section GUID - Alphanumeric GUID</id>
    <name>Name - String</name>
    <external-system-id-1>External – Alphanumeric GUID</external-system-id-1>
    <external-system-id-2>External - String </external-system-id-2>
  </section>
  <presentation>
    <id>Echo GUID – Alphanumeric GUID</id>
    <status>Echo Status - String</status>
    <title>Title - String</title>
    <description>Description - String</description>
    <start-time>Start time - ISO8601 Date</start-time>
    <duration-milliseconds>Duration - Milliseconds</duration-milliseconds>
    <presenters>
      <person>
        <first-name>First Name - String</first-name>
        <last-name>Last Name - String</last-name>
        <email-address>Email address - String</email-address>
      </person>
      ...
    </presenters>
  </presentation>
  </echo360>
</xml>
```

## Configure an openEQUELLA Collection

An openEQUELLA collection is nominated in the EchoSystem’s openEQUELLA Publisher plugin’s configuration to be used for all Echo360 resources. This collection should have the following configuration:

- It must be pointing to the relevant metadata schema
  NOTE: For a dedicated Echo360 collection, manual contributions of Echo360 resources are not supported at this time, therefore selecting NONE in the Select wizard category will prevent the collection from displaying on the contribution page.
- An Attachment control should be added to the wizard if editing of Echo360 resources is required. This control must have the attachment type of Echo360 Presentations selected.
- The collection must have a ‘Save Script’ configured which extracts the relevant metadata from the Echo attachment to use for the title and description.

#### To configure the Save Script

1.  From the Collection Definition Editor, edit the collection to be used for Echo360 resources and go to the Expert Scripting tab.
2.  Enter the required script in the Save Script area.
    An example of an Echo Save Script is shown below:

```js
if (xml.exists("echo360/presentation")) {
  echo360xml = xml.getSubtree("echo360/presentation");
  attlist = attachments.list();
  if (attlist.size() > 0) {
    // Remove any existing attachments
    xml.deleteAll("item/atts");

    // Add attachments to control
    for (var i = 0; i < attlist.size(); i++) {
      xml.add("item/atts/att", attlist.get(i).getUuid());
    }
  }

  if (!xml.exists("xml/item/name") && !xml.exists("xml/item/description")) {
    xml.set("item/name", echo360xml.get("title"));
    xml.set("item/description", echo360xml.get("description"));
  }
}
```

3.  Click Save.

The Save Script above pulls the title and description from the metadata provided by Echo360 and populates the appropriate openEQUELLA name and description schema fields that are configured for the collection. It also populates the attachment control metadata target with the correct UUIDs for the Echo Presentation attachment.

The Save Script is an essential part of the integration and must be tailored for the configured collection and schema. Without a correctly written save script, items automatically published to openEQUELLA will have no name or description and the attachments will not show up in the wizard when editing.

## Configure an openEQUELLA OAuth client

The Echo360 openEQUELLA Publisher plugin contributes items using REST and as such will need an OAuth client application registration.

#### To Register an OAuth client application

1.  Select Settings from the navigation menu, then OAuth. The OAuth settings page displays, listing registered applications and their corresponding tokens.
2.  Click the Register new client application link. The Create new OAuth client page displays.
3.  Enter a Descriptive name that is used to identify the client application. The Client ID and Client secret are automatically generated. The Client ID can be edited if required.
4.  Select Client credentials grant from the OAuth flow dropdown.
5.  Click the Select button to open the Select user dialog to search for and select a Fixed user. This user must have sufficient privileges to create Echo resources.
6.  Click Save.

## Configure an openEQUELLA Trusted System

#### To add openEQUELLA as a trusted system in ESS

1.  Log in to Echo360 ESS server using an account with system administration privileges.
2.  Select the System tab, then Trusted Systems from the sub tabs.
3.  Click Add. The Add Trusted System page displays.
4.  Enter a System Name, Description (optional) and Consumer Key.
5.  Click Save. The Trusted System displays with a generated Consumer Secret.

NOTE: Take note of the Consumer Key and Consumer Secret as they are required to be entered when configuring the openEQUELLA EchoSystem server.

## Configure openEQUELLA EchoSystem Servers

The Echo360 EchoSystem servers settings page allows the user to configure EchoSystem servers and their access details. Multiple EchoSystem servers can be configured.

#### To access Echo360 EchoSystem server settings

1.  Select Settings from the navigation menu, then Echo360 EchoSystem servers. The EchoSystem servers page displays with any current servers listed.

#### To add an EchoSystem server

1.  Click the Add EchoSystem server link. The Add new EchoSystem server page displays.
2.  Enter a server Name and Description (optional).
3.  Enter the information obtained previously from the Echo360 ESS into the following fields:

- Application URL
- Content URL
- Consumer key
- Consumer secret
- System ID

4.  Click Tool URLs. A Connection successful message displays beside the button. If an error message displays, check and correct the entered values, then retest the URLs.
5.  Click Save.

## Echo360 openEQUELLA Publisher installation

This integration hinges on the openEQUELLA Publisher plugin created by Echo360. This custom publisher allows an EchoSystem Server (ESS) to automatically publish items in openEQUELLA that contain Echo Presentation attachments.

### Download and install openEQUELLA Publisher plugin

Echo360 distributes the openEQUELLA Publisher via their Customer Portal which is restricted to licensed customers.

#### To install the openEQUELLA Publisher plugin on the EchoSystem Server

1.  Shut down the EchoSystem Server service.
2.  Copy the JAR file (named ess-openEQUELLA-plugin-_version_-publisher.jar) for the openEQUELLA Publishing Plugin into _ESS install directory_/server/user-plugins/.
3.  Start the EchoSystem Server service.
4.  Login to EchoSystem Server’s web interface as a user in ‘System Admin’ role to confirm successful installation. Look in the Monitor > Support page in "Installed Publisher Plugins" to find "openEQUELLA Publisher (_version_)".
    Alternatively if your user doesn’t have ‘System Admin’ role then navigate to an existing Section Details page to try using the green "Add Publisher" button (near the bottom of the page). Look for 'openEQUELLA Publisher (version)' in the dropdown list of available publishers.

### Configure openEQUELLA Publisher plugin

#### To add and configure the openEQUELLA Publisher plugin

1.  Log in to Echo360 ESS server using an account with system administration privileges.
2.  Select the Configuration tab, then select Publishers from the sub tabs. A
3.  Click Add. The Add Publisher page displays.
4.  Enter a Name, Description (optional) and select an Organization from the drop-down list.
5.  Choose openEQUELLA Publisher from the Publisher Type drop-down list. This will reload the page with the openEQUELLA Publisher configuration.
6.  Enter the Application Base URL – this is your full openEQUELLA URL.
7.  Enter the OAuth Client ID and OAuth Client Secret
8.  Choose to include Vodcast and/or Podcast URLs by selecting the Select or modify metadata sent to openEQUELLA checkbox. This displays the options of Podcast and Vodcast.
9.  Enter the System ID/Customer ID (usually the Customer ID found from the System, System Settings tab, in the Identification Settings section at the top of the page).

NOTE: Take note of the System ID/Customer ID as it is required to be entered when configuring the openEQUELLA EchoSystem server.

10. Enter Collection UUID or Name (must be exact match).
11. Enter the UUID of the required user in Default Resource Owner. This user will show as the resource Owner for each Echo360 resource stored in openEQUELLA. _Not putting a value in this field results in the resource owner for Echo360 items showing as ‘Unknown user’._
12. Click Test Connection to openEQUELLA to test the connection to openEQUELLA. This confirms that the ESS can communicate with openEQUELLA and find the collection specified. _NOTE: The Default Resource Owner needs to have the LIST_COLLECTION granted in openEQUELLA for the connection to be successful._
13. To perform a test publish, select the Test Resource creation in openEQUELLA connection test checkbox. This will reload the page and display the test configuration area where a publish test can be performed with real or fake data. _NOTE: This checkbox is used only for advanced troubleshooting, under the guidance of openEQUELLA or Echo360 support (after ticking the Debug and Verbose boxes and adding the Publisher to a Test Section containing a single test Echo)._

#### To find a user identifier (UUID) in openEQUELLA

1.  From Settings, Administration Console, select User Management.
2.  Highlight Internal Users then click Configure.
3.  Enter the relevant text in the search box then click Search to display a list of matching results.
4.  Highlight the required user to display the UUID (Identifier). This UUID can be copied and pasted into the Default Resource Owner field on the openEQUELLA Publisher page.

## Enable openEQUELLA Publisher plugin

#### Add openEQUELLA Publisher to an Echo360 Course section

1.  Login to the ESS using an administrative account.
2.  Click the Schedule tab and then click the Courses sub tab.
3.  Select the required course. This will load the course page.
4.  Select the required Section for the selected Course. This displays the Section Details page. At the bottom of the page there is a Configured Publishers section.
5.  Click Add Publisher this displays the Add Publisher page.
6.  Select the required publisher (e.g. openEQUELLA Publisher) from the dropdown and click Save.

This will add the publisher to that Course’s Section. It will cause all Echos in that section to be published to openEQUELLA. This includes past and future Echos.

NOTE: Publishers can be added to individual Echos. Please refer to the Echo360 documentation for this process.

## Configure openEQUELLA Echo360 viewer

An Echo Presentation attachment consists of a number of links (up to 4) that can include:

- EchoCenter link – Links to a particular Echo within the EchoCenter which provides an overview of all Echos for a particular Course section. This is the default option.
- Echo Player link – Links directly to an Echo played using Echo360’s Echo Player.
- Vodcast link – Links to the raw video cast of the Echo Presentation.
- Podcast link – Links to the raw audio of the Echo Presentation.

_NOTE: The only guaranteed link on an Echo attachment is the EchoCentre link. The others may or may not be present depending on your EchoSystem Server (ESS) configuration._

openEQUELLA allows the default action on an attachment to be changed to be any one of the above options.

#### To configure the openEQUELLA Echo360 MIME type

1.  Select Settings from the navigation menu, then MIME types. The MIME type editor search page displays.
2.  Type openEQUELLA in the Search text box then click the Search icon. Matching results display.
3.  Click equella/attachment-echo from the results. The Edit MIME type page displays.

In the Viewers section, relevant configured viewers display, and can be enabled or disabled. Additionally, the Default viewer for the MIME type can be selected and configuration options edited.
