# Moodle User Guide

Table of Contents
* [Overview](#overview)
* [Moodle homepage](#moodle-homepage)
* [EQUELLA Blocks](#equella-blocks)
* [Accessing the EQUELLA repository](#accessing-the-equella-repository)
* [Accessing the EQUELLA Integration page](#accessing-the-equella-integration-page)
* [Managing resources in Moodle](#managing-resources-in-moodle)

## Overview
EQUELLA is an advanced digital repository that can be integrated with the Moodle™ course management system. From within Moodle, users can access the EQUELLA repository to search, create and manage content such as images, audio, video, packaged content, web links, text, PDFs and Microsoft Office™ documents. Content can then be incorporated into Moodle courses.

The purpose of this guide is to demonstrate to users how to integrate EQUELLA resources using Moodle. Users will learn how to search for, create and manage available resources, and how to add these materials to courses. For information on configuring EQUELLA in Moodle, refer to the EQUELLA Moodle Configuration Guide.

Please note that this guide has been developed using EQUELLA version 6.4 (GA) and Moodle version 2.9 and as such may differ in appearance to your own installation. Contact your system administrator for access to extra features or to reconfigure your installation.

Additional details about using Equella with an LMS Integration can be found in the [Integrated LMS User Guide](IntegratedLMSUserGuide.md)


## Moodle homepage

Login to Moodle
1. Log in to Moodle to display the Moodle homepage. 

## EQUELLA Blocks

Administrators can set up three types of blocks in Moodle, the EQUELLA Search block, EQUELLA Tasks block and EQUELLA Links block, to take information from EQUELLA and display it in a convenient portlet on the Moodle Course pages.

For information on how to add EQUELLA blocks to Moodle, please refer to the EQUELLA Moodle 
Configuration Guide.

### EQUELLA Search block
This block offers users a quick way of searching the EQUELLA repository to view resources. (NOTE: Resources cannot be added to a Moodle course from an EQUELLA Search block.)

To use the EQUELLA Search block

1. Click the Search EQUELLA link inside the EQUELLA Search Block. 
2. An EQUELLA Search page displays inside Moodle with a Search for text box and a Search button. 
3. Enter a search query in the Search for box and click Search or press Enter.
4. Matching search results returned from the EQUELLA repository display. Relevant resource attachments matching the search query are also returned.
5. Click the View link beside the resource you wish to view.

The result will load as if being accessed directly. ‘Overview.pdf’ resource being displayed. 

### EQUELLA Tasks
This block displays information relating to a user’s moderation tasks or notifications. It is typically used by contributor and moderator users to note any resources requiring their attention.

The EQUELLA Tasks block lists both the tasks and notifications applicable to the user in EQUELLA. Tasks are filtered with regard to their ‘assigned’ status, and the count of results inside these queries is displayed. Notifications are also listed here, grouped by the type of notification.

Where there are currently tasks or notifications applicable to the user, the Tasks block will be populated with a link to the task list in EQUELLA.

Each task will match a certain task filter, and a link to the filtered task list in EQUELLA will be displayed, alongside a count of the number of tasks matching this filter.

To use the EQUELLA Tasks block

1. Click the name of the task filter you wish to view. 
2. The EQUELLA My Tasks page displays in native EQUELLA, with the appropriate filtering applied. 

### EQUELLA Links

The EQUELLA Links block is configured by administration, and enables links to specific native EQUELLA pages to be accessed. An example is a link to the Contribution page in EQUELLA. An administrator can configure a link by providing a name (e.g. Contribute EQUELLA resource) and the relevant EQUELLA URL. 

Clicking on the link will take the user to the specified URL page. 

Clicking the link takes the user to the relevant EQUELLA page. 

## Accessing the EQUELLA repository

Resources stored in the EQUELLA repository can be added to any user-editable Moodle course.
1. Select an appropriate course (e.g. Science - Physiology) from the My courses pane to display the Weekly outline page. 

To activate editing features
1. Select Turn editing on by clicking the button in the top right-hand corner of the page to display editing features. 

## Accessing the EQUELLA Integration page

To add an EQUELLA resource to a course

1. Click on the +Add an activity or resource link from the general course pane or a specific week, select EQUELLA Resource from the RESOURCES sections, then click Add. The EQUELLA Integration page displays.

## Managing resources in Moodle
Resources added to the Weekly outline can be managed using either the icons provided or options from the Edit menu when editing is turned on.

* Click the move icon to the left of the link to drag the link either within the outline pane or to a different week within the current course.

From the Edit menu:
* Select Edit settings to display the Updating EQUELLA Resource in x location page. Resource details can be edited here.
* Select Move right or Move left to change the position of the link within the course location.
* Select Hide to hide the link from other users. Select Show to make the link visible again.
* Select Duplicate to make a copy of the resource.
* Select Assign roles to display the Assign roles page to configure local Moodle roles to assign to the resource.
* Select Delete to remove the link from the Moodle course location. This action requires confirmation before the link is deleted.

To view a resource
1. Select the title link to display the resource selected in a new screen. Depending on the type of resource (pdf, docx, jpg,etc.), the object will display using a default viewer. EQUELLA summary pages display using the EQUELLA Resource summary page.

### Edit resource details

To edit the details of an EQUELLA resource

1. Select Edit settings from the Edit menu beside the resource to display the Updating: EQUELLA Resource page. 
2.  This page includes the following options for editing EQUELLA items in the General pane:
* Name—edit the name of the resource in the Name field. (NOTE: This field cannot be left blank; the asterisk * indicates it is a mandatory field.)
• Description—a brief description of the item can be entered or edited using the basic HTML editor provided.
• Display description on course page – select this checkbox to show the description on the course page.
• Location—the URL of the item is displayed and can be edited in the Location field.

When editing is complete, either:
1. Click Save and return to Course to save the resource; or
2. Click Save and display to save the item and display the resource Summary page, or
3. Click Cancel to return to the Weekly outline page without saving changes to the item.

### Playing QTI quizzes
When a QTI quiz link has been added to a course and that link has been selected, the quiz begins to play.

To play a QTI quiz
1. Click the required quiz link from the course to launch the quiz start page. 
2. Click Start Test . The first question displays. The question titles display down the left hand side of the page, and a single question’s details show in the right-hand pane.
Note the following points:
* Once a question has been answered, a blue bar displays to the left of the question name in the left-hand question list.
* Unanswered questions have no bar.
* The question currently being viewed displays a grey bar to the left of the question name, until it is either answered or the user moves to another question.
* Questions can be answered in any order.
* Clicking on the Return to x (where x is the course name) link in the top right corner of the page returns the user to the course.

NOTE: If a quiz is begun then aborted for any reason, when the same user reenters the quiz, their prior answers are stored.

3. Once all questions have been answered, click the Submitted button to view the score acquired and any feedback available for that QTI quiz. Submitting the quiz also returns the result to the user’s gradebook within Moodle.

NOTE: Not all QTI quizzes are configured to display results or feedback once they are submitted.


Each question can be selected to view question level feedback, if included as part of the package. 

To return to the results page, click View result.

## Repository
The EQUELLA repository can be used as a search destination for content-creation functionality within Moodle. Where previously images (and other resources) could only be added using Moodle’s HTML editor from places such as the local hard drive, now EQUELLA has become a source of such material.


To use the EQUELLA repository tool
(Note: The EQUELLA repository tool works in conjunction with the Moodle HTML editor. These HTML editors exist in a number of places in Moodle, and this guide will refer to just one of those.)

1. On the Moodle Course page, click the button to turn on editing.
2. Select Edit settings from the Edit menu beside the required resource link. 

The Updating EQUELLA Resource page displays.

3. In the Description field, an HTML editor enables the creation of interesting descriptions that are more than just text. Click either the Moodle Media button or the Insert/Edit Image button.
4. In the Image properties dialog window that opens, click Browse Repositories. 
5. In the File picker window, select the relevant EQUELLA link (there may be more than one EQUELLA instance integrated with Moodle). 
6. The page loads with all the resources matching a blank search query. The following elements are included on the page:
* Page links – Browse, Favourites, My resources and Search (default). Select Browse to browse hierarchy topics and subtopics, Favourites to list the current user’s favourite EQUELLA resources or searches or My resources to view the resources the current user owns.
* Select the Search link to return to the search page.
  * Search panel—Enter keywords and/or select a specific collection or advanced search from the Within drop-down.
  * Sort and Filter drop-downs 
7. Click the down arrow icon from the results page or the resource title to display the list of attachments in the resource. 
8. Select an attachment. This displays a details page. 
9. Change the details if appropriate then click Select this File. The Image properties dialog displays with a preview of the attachment. Add a description in the Describe this image for someone who cannot see it field or select the Description not necessary checkbox. 
10. Click Save Image to return to the Updating EQUELLA Resource page. The imported media displays in the HTML editor. 
11. Click Save and Return to Course. The imported media has now been saved to the resource description field.

### Drag and drop/Auto add to EQUELLA
Files can be automatically contributed to EQUELLA when dragging and dropping onto a Moodle course page, or onto the Content, Select files panel from the Adding a new File page in Moodle. The system first checks to see if the file already exists in EQUELLA. If so, it creates a link to the file, otherwise it contributes the file into the collection allocated for the ‘Quick contribute’ function.

To drag and drop/auto add to EQUELLA

1. From a Moodle Course page, click the button to turn editing on if not already enabled. 
2. Drag and drop the required file (e.g. Desert.jpg) onto the appropriate course week. A file destination dialog displays. The options are:
* Contribute to EQUELLA – contributes the file into the collection allocated for the Quick Contribute function in EQUELLA, with the file name as the resource name and description.
* Add image to course page – shows the full sized image on the course page instead of a link.
* Create file resource – saves the file locally (in Moodle).

3. Select Contribute to EQUELLA then click Upload. The file is automatically contributed to EQUELLA.