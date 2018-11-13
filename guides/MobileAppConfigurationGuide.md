# Mobile App Configuration Guide

Table of Contents

[Mobile app overview](#mobile-app-overview)

[Mobile app configuration](#mobile-app-configuration)

[Using the openEQUELLA mobile app](#using-the-openequella-mobile-app)

## Mobile app overview
The openEQUELLA Mobile app enables users to logon to openEQUELLA and view resources and associated workflow progress, as well as notifications and tasks, using a mobile device.

The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA Mobile app functionality and the configuration required to successfully set it up. It also provides instruction to the users who will access openEQUELLA from a mobile device using the app.

### Supported devices
EQUELLA 6.0+ supports iPads (using Safari) and Android tablets (using the Android Browser).

## Mobile app configuration

### Configuring openEQUELLA for the mobile app
A Client application must be registered in openEQUELLA to enable the mobile app.
#### To register a mobile app client application
1. Go to Settings, OAuth settings. The OAuth settings page displays.
2. Click the Register new client application link. The Create new OAuth client page displays.
3. Enter a Descriptive name (e.g. Mobile app).
4. Enter equella-tablet as the Client ID.
5. A Client secret is generated automatically (not used for this mobile app).
6. From the OAuth flow drop-down, select Authorisation code grant and implicit grant.
7. Select I want to use a custom redirect URL in the Redirect URL option.
8. Enter the Redirect URL in the following format: http://myinstitution/institution/p/r/dev/com.tle.web.mobile/js/closelogin.html
9. Click Save. The new registrations displays in the list.

## Accessing openEQUELLA from a mobile device

The mobile app URL is entered, and the user logs in with their openEQUELLA Username and Password. Once logged in, the user can create a bookmark to the home screen for future access.
#### To access the openEQUELLA app from a mobile device
1. Open a browser page and enter the mobile app URL, in the following format: http://myinstitution/instititution/mobile. The Log in to openEQUELLA page displays.
2. Enter your openEQUELLA Username and Password, then click . The My resources page displays.
3. Create a bookmark to the device’s home screen, which will display an openEQUELLA icon. On iPads, when launching the app from the home screen, it opens as a full-screen app rather than a tab within the browser.

## Using the openEQUELLA mobile app
The openEQUELLA mobile app is tailored for mobile devices, and enables access to the following functions:
* Viewing resources owned by the logged in user
* Viewing notifications and tasks

### Viewing resources owned by the logged in user
When logging into the openEQUELLA mobile app, the My resources page displays, listing all Published resources belonging to the logged in user as the default. The user can choose to change the results displayed by selecting one of the following status buttons:
* Draft
* Moderating
* Archived
* All
* Purchased

Additionally, the user can enter text in the search box.

#### To view a resource and its attachments
1. Tap a resource from the My resources page. The Summary page displays, showing the resource name, description and attachments.
2. Tap an attachment to open the attachment for viewing.
3.
NOTE: Some file types may not display perfectly within the mobile app, depending on the capabilities of the mobile device being used. If this occurs, tap the Open in new Window button and the attachment will open in a separate page using the device’s default viewer.

#### To view the moderation history for a resource
1. From the Summary page, tap the Moderation button to display the Moderation history for the selected resource.

#### To view the LMS uses for a resource
1. From the Summary page, tap the Find uses button to display the Uses page. The current uses of the selected resource within any connected LMSs are listed.

#### To access native openEQUELLA
1. From the Summary, Moderation or Find uses pages, tap the Open in openEQUELLA button to open native openEQUELLA. The Resource summary page for the selected resource displays.

### Viewing notifications and tasks
The openEQUELLA mobile app allows users to view their notifications and tasks.

#### To view notifications
1. Tap the Notifications button at the bottom of the mobile app page for iPads or at the top for Androids. The Notifications page displays.
2. Tap on a notification to display the Summary page for the associated resource.

#### To view tasks
1. Tap on the Tasks button from the Notifications page. The Tasks page displays, listing current tasks for the logged in user.
2. Tap on a task to display the Summary page for the associated resource.
