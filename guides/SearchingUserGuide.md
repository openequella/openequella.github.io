# Searching User Guide

Table of Contents
[openEQUELLA Dashboard](#openequella-dashboard)

[Search types](#search-types)

[Search edit box](#search-edit-box)

[Relevance scores and searching attachments](#relevance-scores-and-searching-attachments)

[Quick search](#quick-search)

[Search page](#search-page)

[Cloud search](#cloud-search)

[Search results – Standard view](#search-results-standard-view)

[Search results – Images view](#search-results-image-view)

[Search results – Videos view](#search-results-videos-view)

[Search Remote repositories](#search-remote-repositories)

[Favourites](#favourites)

[My resources](#my-resources)

[My tasks](#my-tasks)

[Notifications](#notifications)

[Manage external resources](#manage-external-resources)

[Manage tasks](#manage-tasks)

[Manage resources](#manage-resources)

[Manage activations](#manage-activations)

[Google Books search](#google-books-search)

[iTunes U search](#itunes-u-search)

[YouTube search](#youtube-search)

[Flickr search](#flickr-search)

[Kaltura search](#kaltura-search)

[Browsing](#browsing)

[Search settings](#search-settings)

## Searching overview
The openEQUELLA Digital Repository allows users to search, create, store, manage, view and share content. Content can include published content (resources) and personal content (files and web pages). A variety of searching methods are available for finding content in the repository, ranging from a basic keyword search to complex custom searches targeting specific resource information (metadata), to browsing specific categories.

In addition to searching, openEQUELLA provides a variety of options for sorting and filtering the search results to drill down to the specific needs of the user.

The purpose of this guide is to give users an overview of the available search options and how they can be most effectively used.
Please note that this guide has been developed to reflect the full capabilities of openEQUELLA and as such may differ in appearance from your own installation. Contact the system administrator for access to extra features or to reconfigure your installation.

## openEQUELLA Dashboard
### To access openEQUELLA
1. Open a browser and enter your openEQUELLA URL (e.g.‘http://equella.myinstitution.edu’).
2. Log in to openEQUELLA. The openEQUELLA Dashboard displays. 

The openEQUELLA Digital Repository allows users to search for and discover content in a number of ways.

## Search types
There are a variety of search types available for discovering openEQUELLA content, including:
* Basic search—search by keyword, used when the resource name or keywords are known. 
* Search by collection—search within a specific collection. 
* Advanced search—target specific resource information (metadata) using customised search criteria. 
* Search other repositories—search for records from a variety of external sources such as library databases and search engines.
* Cloud search – searches OER content stored in the cloud.
* Favourites—search within a group of resources or searches that have been bookmarked as favourites.
* Google Books™ search—search for Google Books content to add to contributed resources.
* iTunes U™ search—add tracks from iTunes U to resources during contribution.
* YouTube™ search—search for YouTube content to add to contributed resources.
* Flickr search—search for Flickr images to add to contributed resources.
* Kaltura—search for Kaltura streaming media files to add to contributed resources.
* Browse—browse hierarchy categories to ‘drill down’ to required resources. 

## Search edit box
The search edit box is found on most search pages in the openEQUELLA system, and allows the user to enter keyword data to search for matching resources. 

Once keywords are entered, the system can search resource titles, descriptions, attachment names and content and other metadata for matching results, depending on how the search options are configured.

### Keywords
In openEQUELLA, keywords can be entered to search for matching resources. A single keyword can be entered, or a number of keywords. The keywords must be an exact match within the resource name, description or stored keywords (e.g. openEQUELLA), otherwise no matching results will be found.

For example, entering the keyword ‘equella’ will return any resources that have the word ‘equella’ in their title, description, attachment name or attachment content (for most attachment types). 

### Autocomplete
Autocomplete functionality is available in the search edit box and most keyword searches. Autocomplete means that the user can type two or more letters into the search text box and openEQUELLA will suggest resource titles based on the letters entered.
For example, if the user is looking for a resource that has openEQUELLA in its title, as soon as they type in eq, up to four suggestions display, based on relevance. 

If the user is searching for openEQUELLA 6.2, typing the 6.2 will change the suggestions. 
Note that there is only one matching suggestion for ‘equella 6.2’, which means there is only one resource in the openEQUELLA repository containing ‘equella 6.2’ in its title.
### Selecting a suggestion
Selecting a suggestion from the drop-down list by clicking on it, or highlighting it using the keyboard arrows, replaces what is currently in the Search text box with the selected value.

The top suggestion always defaults in the search text box in light gray. Click on the required suggestion to select.
### Multiple word autocomplete
If the user types in a single word (e.g. openEQUELLA), the suggestions will be resources with the word ‘equella’ in their titles. But if the user types in ‘equella features’, the suggestions will be resources that have ‘equella features’ in their titles in that exact order. 

If a user wants to find resources using multiple keywords (e.g. openEQUELLA + guide), and there are no resources that contain the words in the exact order, the autocomplete function will suggest single words, based on words used in resource titles in the repository.
### Stemming
openEQUELLA also uses ‘stemming’ in searching. Stemming is where the system recognises the root (stem) of a word, and performs the search using the root term instead. For example, if ‘cooks’ was entered as a search criterion, the system performs a search for ‘cook´ (the stem word) and resources containing this stem would be returned, such as ‘cooking’ and ‘cooked’.

#### Multiple keywords
Multiple keywords can be entered in the following ways:
* Multiple keywords with a space between each word—entering two or more keywords with a space between each word will return results that have all of the entered keywords. For example, entering openEQUELLA features will display resources that have both openEQUELLA and features in its title, description or attachment name.
* Multiple keyword with ‘or’—entering two or more keywords with ‘or’ between each will return resources that contain either all or one of the keywords. For example, entering ‘equella or features’ will display resources that have one or both words contained within its title, description or attachment name, with the ones containing both words at the top.

### Use of a wildcard 
The definition of a wildcard is a character that can be used to substitute for any other character or characters in a string. This comes in handy if the user is unsure of spelling or wants to find a range of results that start with a certain character or string of characters.

In openEQUELLA, a user can enter a character or string of characters with the wildcard (asterisk) to find any resources that start with that value. For example, the user could enter tas* to return any resources that contain the word tasmania. Any other resources containing words starting with the character string ‘tas’ will also be returned (e.g. taste, tassel etc.).

A wildcard can also be placed in the middle of two characters or character strings. For example, entering t*a will also return any resources containing the word tasmania, as well as any resources containing a word starting with t and ending in a (e.g. tarantula, tea etc.).

(NOTE: Wildcards cannot be used at the beginning of a search term.)

### Relevance scores and searching attachments
Relevance scores display for each result when a search term or terms have been entered and the sort order is set at Relevance. The relevance score is a number calculated using an algorithm based on the boost values set for title, metadata and attachments. The higher the number, the more relevant the result to the search criteria. 

Additionally, if attachments have a boost value set to something other than Off (that is, attachment names and content are searched for matches to the search terms), and matches are found, Keywords found in attachment content displays next to the Relevance score. 
If the boost value for attachments is set at any value besides Off, individual users may toggle the attachment search from the Results page Screen options. This allows users to choose whether they want their keyword searches to look in attachments, or only in the resource title and metadata. 

## Quick search
The Quick search portlet is found on the openEQUELLA Dashboard page, and allows the user to perform simple keyword searches using the search edit box. 

#### To perform a search using the Quick search portlet
1. Using one the methods outlined above, enter keywords (e.g. openEQUELLA) in the search field.
2. Click the search icon button or press Enter to return matching results. The Search page opens with the results displayed.

## Search page
The Search page enables the user to search resources using simple keyword searches, but also provides the ability to search within particular collections or perform more complex searches such as advanced searches and remote repository searches. The search page is accessed by selecting Search from the navigation menu. 

On first logging into openEQUELLA and selecting the search page, the search results default is Within all resources. If the user leaves the search page after changing the search criteria, on returning to the search page, the last criteria selected will be the default.

The Search page has the Search box at the top, where criteria are selected, and the Results box displayed below. 

The user can enter keywords in the search text box, and use the Within drop-down list to further qualify results. A value can be selected from the Within drop-down box without entering keywords in the search text box.

### Search options
Searching can be refined by selecting a collection, advanced search, remote repository or all resources from the Within search categories in the Search box.

### Search by Collection
Click the Within drop-down arrow to display the available search categories. 

Select a collection (e.g. Learning resources) from the Collections list to display only resources belonging to that collection. If the Search field is left blank, all resources belonging to the selected collection are displayed.

### Advanced search
An advanced search provides a means of searching specifically within the metadata (information) associated with resources. It makes searching for a particular resource easier, and can be targeted to specific users, groups or roles.

#### To conduct an advanced search
1. Click the Within drop-down arrow to display the available search categories. 
2. Select an advanced search (e.g. Learning resources advanced search) from the Advanced searches list. The advanced search criteria page displays. 
(NOTE: The appearance of the Advanced search criteria screen depends on the design of the selected search.)
3. Select some criteria (e.g. Image in the Format of resource section) and click Search to display the search results page with search criteria in place. 
4. Select Edit Items from the search box to open the advanced search criteria page and change or refine the search criteria, or Clear to remove the criteria.

## Cloud search
The Cloud search (when enabled) occurs simultaneously with the standard openEQUELLA search and searches the OER repository in the cloud. When a search term is entered in the text field in the Search box on an openEQUELLA search page and matching items are located in the cloud, the user can easily view and select cloud content in addition to local openEQUELLA content.

NOTE: Cloud search can only find matches to the text search string entered in the edit box on a search page. As the OER has its own metadata schema, it can’t use information selected from the Within drop-down list to further tailor the search results.
### Viewing Cloud results in conjunction with a local openEQUELLA search
The Cloud search occurs simultaneously with the standard openEQUELLA search, so when a search term is entered on an openEQUELLA search page and matching items are located ‘in the cloud’, the user can easily view and select cloud content in addition to local openEQUELLA content.
#### To view Cloud results in conjunction with a local openEQUELLA search
1. From the Search page, enter a search term (e.g. physiology). The matching results display in the Results box. Cloud results
The system has also searched the cloud with the same search term, and found available results.
2. Click the Found x cloud results link to open the Cloud search page and view the matching cloud results. 
Click the Local resources link to return to the Search page.

### Searching the Cloud (OER)
Users can also search the cloud directly for relevant content.

#### To perform a Cloud search
1. From the Search page, click the Cloud search link in the bottom-right of the Search box. The Cloud search page displays.
2. Enter the required search term (e.g. science) then click the search icon . The matching search results display in the Results box. 

When performing a cloud search, the system automatically searches the local content for matching search term results. Click the Local resources link to view the local results.

The Cloud search functionality can be disabled by an administrator if not required, and enabled at another time. When disabled, the Cloud search link in the bottom-left of the Search box no longer displays. 

### Cloud search sorting and filtering
The Cloud results page has Sort and Filter tabs to further drill down to relevant results. 

### Filter Cloud results
Clicking the Filter drop-down displays the Filter pane which provides options for reducing the number of displayed results by entering filter criteria. Clicking the Filter drop-down again closes the filter options display. 
The following filters are included, and come from fields populated by OER contributors:
* Filter by language – displays languages entered by OER contributors during contribution. Note that languages may display multiple times, depending on spelling, extra spaces etc. when entered during contribution. Select a language to view resources that have a matching value in the OER metadata.
* Filter by licence – displays license types entered by OER contributors during contribution. Select a licence type to filter results to those that have a matching value in the OER metadata.
* Filter by publisher – displays a list of publishers entered by OER contributors during contribution. Select a publisher to filter results to those that have a matching value in the OER metadata.
* Filter by education level – displays a list of education levels entered by OER contributors during contribution. Select a level to filter results to those that have a matching value in the OER metadata.

## Search results Standard view

The Standard view is the default view for the results page. Also available is the Images view  and the Videos view.

Within the Standard view, results are displayed in groups of 10, 50 or 100 per page, with paging displayed at the end of the search results page. Information displayed for each matching result can include:
* Title—select this link to display the summary page.
* Down Arrow - this drop-down icon displays next to the title when a resource has one or more attachments. Clicking the icon displays the attachments in either a structured or thumbnail grid format, depending on the collection’s search results template configuration. . Click an attachment to open it in the default viewer. Click the up arrow icon to close the attachment view.
* Description—the description of the resource.
* Status—displays the resource status and when it was last updated. Statuses can be live, archived, deleted, suspended, review, moderating, rejected or draft.
* Last updated—either the date the resource was last updated or the time period passed since the resource was last updated, depending on date display format configuration.
* Star rating and comments—select this link to display the resource summary page where comments and ratings can be entered.
* Add to favourites/Remove from favourites—select this link to add the resource to, or delete it from the resource favourites list.
* Add to hierarchy – opens the Modify key resource page to add the resource to a hierarchy topic or sub-topic as a key resource.

Other elements on the Search page include:
* Help —click the button to display context-sensitive help at the top of the page. Depending on the context, links to other help topics can also display. Click the button again to hide the help pane.
* Screen Options—click the button to display the screen configuration options, which can include:
* Include results that are not live—select the checkbox to display all results, regardless of their status. (NOTE: This option will only display if set by your administrator. Additionally, only resources with a status of Live can be added to courses.) This option is not relevant to the Cloud search results page.
* Number of results per page—select how many results are displayed per page from the drop-down list.
  * Minimum - 10 results in Standard view, 30 results in Gallery view
  * Medium - 50 results in Standard view, 60 in Gallery view
  * Maximum – 100 results in Standard view, 90 in Gallery view. Note that this option is not relevant for the Cloud search results page.
* Search attachments –uncheck if it is not required to search in attachments for the search terms entered in the search box.

Other standard results page elements include:
* Add search to favourites link—click to save the current search with a name to the Favourites search section. 
* Sort tab—provides options for sorting the results list. 
* Filter tab—provides options for setting criteria to drill down to relevant search results. 
* Share tab—search results can be shared with other users by sending them the search results for their use. 
 
### Add search to favourites
Useful searches can be saved as favourites by users, then viewed from the Favourites page.

Clicking the Add search to favourites link on the bottom-left of the Search box displays the Add search to favourites dialog where a name is entered to help identify the search. 

Clicking Add displays a ‘Successfully added this search to your favourites’ message and adds the search to your Favourite searches list.

### Sorting, filtering and sharing results
Once search results display on the results screen, resources can be sorted and filtered to drill down to the most relevant results. Every results page in the openEQUELLA system has sorting and filtering options, and these options may change, or additional options may display, depending on the type of results list. For example, the My resources results page has different filter options (Filter by keyword, Filter by collection and Filter by date modified) than the Search results page (Filter by owner, Filter by date modified). Additionally, search results can be shared with other users. 

### Sort results
Clicking the Sort drop-down opens the Sort pane, which provides options for sorting the results list. 

The Sort results by drop-down list can include: Relevance, Date last modified, Date created, Title or User rating. Selecting the Reverse order of results checkbox reverses the selected sort order, for example reversing a title ordering from A–Z to Z–A.

Click the Sort drop-down again to toggle the Sort pane display.

### Filter results
Clicking the Filter drop-down displays the Filter pane which provides options for reducing the number of displayed results by entering filter criteria. Clicking the Filter drop-down again closes the filter options display.

The following filters are included:

#### Filter by owner
Click Select User to display the Select owner to filter by dialog. Enter search terms and click Search to display a list of matching results. 

Select a user (e.g. Administration User) then click Select this user to filter the results to those owned by the selected user. The selected owner is displayed in the Filter by owner pane. 

The owner selected can be changed by clicking Change User , or removed by clicking Clear. Note that the Filter tab label displays in orange once a filter is set.

### Filter by date modified
Select a qualifier from the drop-down list: After, Before, Between or On, then click the calendar field or icon to display a calendar control. 

Select Clear to remove the filtering criteria.

### Clear filters
An ‘X records have been filtered out’ message is displayed when a filter has been applied to search results. Additionally, the Filter tab label is highlighted in orange. 

Select the clear filters link to remove filter criteria and display all results.

### Share results
Search results can be shared with other users by sending them the search results for their use.

Clicking the Share tab at the top of the Results box displays the Share search query pane where results can be shared by: RSS or Atom feed, via URL and via e-mail. 
* Share search results as an RSS or Atom feed—selecting the RSS feed or Atom feed link will display a subscription page. Subscribed users are notified if resources are updated or added to the search results.
* Share search results via URL—users can send a link to the search results page to other users by copying and pasting the URL into an email or other document. The openEQUELLA log in page is displayed when the link is clicked. After logging in, the user is taken directly to the search results page.
* Share search results via e-mail—users can send results to others via email. Enter an email address in the field provided and click the email icon. Check the Share only results viewable by guests checkbox if sending to users outside your institution.
 
## Search results  Images view
Resource results can be viewed in an image grid format. Each resource can be allocated one image thumbnail to be used for the Images view from its image attachments.

#### To display results in the Images view
1. In the top-left of the Results box, click the Images link. The equivalent results in an image gallery format display (for those resources with image attachments). 

The Search box can still be used to enter search criteria or restrict searches to specific collections or advanced searches, but the results show in a thumbnail format. Click the Standard link to return to the standard view.

Up to 30 images are displayed per page, with links to other pages if relevant. Image aspect ratios are maintained in the thumbnail views, making it easy to determine if the image has a horizontal or vertical orientation.

Hover the mouse over a specific image to display a larger version (image will show as actual size to a maximum of 500 x 500 pixels). 

While the mouse is hovering over a specific image, a menu displays at the bottom of the thumbnail, containing the following icons:
* Star Icon - Click to open the Add to favourites dialog and add the resource to your Favourites.
* List Icon - Click to open the Modify key resource dialog to add or delete the resource as a key resource from a hierarchy.
* Comment - Click to open the Resource summary page with a focus on the Comments section.

Click the thumbnail image to open the Resource summary page.

The Images view can be disabled by an administrator if not required, and enabled at another time. When disabled, the Images link in the top left of the results box no longer displays. 

### Multiple image file count
One image thumbnail is used to represent an openEQUELLA resource on the Images page. Resources may have multiple images attached, and in this case, the total number of image file attachments displays in the top left corner of the thumbnail. 

The indicators alert users to the presence of other images, and clicking on the image thumbnail opens the Resource summary so all image attachments can be viewed.

The file count can be disabled by an administrator if not required, and enabled at another time. 

## Search results Videos view
Resource results can be viewed in a video grid format. Resources with attached video files or linked streaming media can display one video thumbnail and preview to represent the resource on the Videos view page.

### To display results in the Videos view
1. In the top-left of the Results box, click the Videos link. The equivalent results in a video gallery format display. 

The Search box can still be used to enter search criteria or restrict searches to specific collections or advanced searches, but the results show in a thumbnail format. Click the Standard link to return to the standard view.

Up to 30 videos are displayed per page, with links to other pages if relevant.

Hover the mouse over a specific video to display a larger version with a Play button to start playing the preview. To stop playing the preview, point the mouse away from the preview box. 

While the mouse is hovering over a specific video, a menu displays at the bottom of the thumbnail, containing the following icons:
* Star Icon - Click to open the Add to favourites dialog and add the resource to your Favourites.
* List Icon - Click to open the Modify key resource dialog to add or delete the resource as a key resource from a hierarchy.
Comment Icon - Click to open the Resource summary page with a focus on the Comments section.

Click the thumbnail image to open the Resource summary page.

The Videos view can be disabled by an administrator if not required, and enabled at another time. When disabled, the Videos link in the top left of the results box no longer displays. 

### Multiple video file count
One video thumbnail is used to represent an openEQUELLA resource on the Videos page. Resources may have multiple video attachments, and in this case, the total number of video attachments displays in the top left corner of the thumbnail. 

The indicators alert users to the presence of other videos, and clicking on the video thumbnail opens the Resource summary so all video attachments can be viewed.

The file count can be disabled by an administrator if not required, and enabled at another time. 

## Search Remote repositories
External (remote) repositories can be searched and the results imported directly to a contribution wizard. Using this search method can increase accuracy and save time entering information manually.
#### To conduct a remote repository search
1. Click the Within drop-down arrow to display the available search categories, then select a remote repository from the Remote repositories list (e.g. MERLOT). The MERLOT searching page opens. 
2. Enter search terms (e.g. Project management) and click the search icon to return matching results.

### MERLOT sort and filter options
The MERLOT search results box has Sort and Filter tabs at the top.

Most of the options in these sort and filter boxes are specific to MERLOT so won’t appear on other search result pages.

Select a resource from the Results list (e.g. Introduction to Project Management) to display the resource details.

To import results
1. Click Import to display a contribution wizard. The collection is defined in the Administration Console—Remote Repositories tool. 

### Other remote repository types
Search boxes and sorting and filtering options may differ depending on the types of remote repositories set up in your openEQUELLA system. 

(NOTE: there are no sort or filter options for this type of remote repository search.)

## Favourites
Users can save bookmarks to resources and searches they find useful by using EQUELLA’s ‘Favourites’ functionality. Depending on how your openEQUELLA system is configured, resources and searches added to favourites are listed as links in the My Favourites portlet on the Dashboard page. Select a link to go straight to the resource summary page for a resource, or the search results page for a search.

The Favourites page is accessed by selecting Favourites from the navigation menu. 

Selecting the Favourites link from the navigation menu opens the Favourites page which consists of two main sections, Resources and Searches. Selecting the link to either one under the Favourites heading will switch the list of results.

## Resources
The Resources list contains the same resource details as a search results list, with the addition of two further fields. A Tags field lists the tag values entered into the dialog when adding the resource to favourites.  This field is not visible if no tags have been set. A Date favourited field shows either the date the resource was added to favourites or how much time has passed since this resource was added to favourites. depending on the date format settings.

### Sort and filter
On the Favourites - Resources page, the Sort and Filter panes have some additional options not found on the Search results page.

In addition to Relevance, Date last modified, Title and User rating, there is a Date favourited option in the sort drop-down. Selecting this option will sort the resources in order of the date they were added to favourites.

The Filter pane has a Filter by keyword edit box, which allows the user to search by keywords within the favourites resource list. The system searches for matching keywords in the resource title, description, attachment name and tags fields. The favourites filter pane doesn’t have the User filter.

### Searches
Click the Resources link on the Favourites page to display any saved searches. Each search in this list may display the following:
* A name, set when adding the search to favourites. Selecting the name link takes the user to the search results page when clicked.
* The search criteria that were requested, for example ‘equella’ in the search text box, ‘Published’ from My Resources etc.
* a Remove button. Clicking this button will remove the search from the list of favourites.

Click on a saved search title to view the matching results for that search.

### Sort and filter
On the Favourites - Searches page, the Sort and Filter panes have some additional options not found on the Search results page.

In addition to Relevance, Date last modified, Title and User rating, there is a Date favourited option. Selecting this option will sort the searches in order of the date they were added to favourites.

The following filter options are available:
* Filter by keyword—allows the user to enter keywords to search within the Favourites – Searches page. The system searches for matching keywords in the saved search title
* Filter by date modified—select a qualifier from the drop-down list (After, Before, Between or On), then click the calendar field or icon to display a calendar control.

## My resources
My resources displays resources that belong to the currently logged in user.
Pre-defined criteria are displayed as links across the top of the page, with the current selection shown in black and the others in blue. 

Click on a link to change the results displayed. Available links are:
* Published—displays resources that are in a live state through having been moderated or through belonging to a collection that does not require moderation. Additionally, resources with a status of review are displayed, and are live resources which are due for review.
* Drafts—resources that are under construction.
* Scrapbook—displays personal files or web pages belonging to the user. These items have not been published to the openEQUELLA Digital Repository, and they cannot be viewed, edited or deleted by other users.
* Moderation queue—resources that have been submitted for moderation, and are still at some point in the moderation workflow.
* Archived—resources that have been live but are now superseded by a new version. These resources are no longer available to repository users other than the resource owner and the system administrator.
* All resources—all the resources the user owns or has permission to view.
* Purchased- resources that have been purchased using the openEQUELLA Store front function. 

### Filter
From the My resources results pages, the following filter options may be available:
* Filter by keyword—allows the user to enter keywords to search within the My resources page. The system searches for matching keywords in the resource title, description and attachment name.
* Filter by collection—select the required collection from the drop-down list to see only resources belonging to that collection. Not available for Scrapbook items.
* Filter by date modified—select a qualifier from the drop-down list (After, Before, Between or On), then click the calendar field or icon to display a calendar control.
* Filter by workflow task –select a task name from the drop-down list to see only resources at that task in the workflow.
* Filter by status—select a status from the drop-down list (All statuses, Draft, Live, Rejected, Moderating, Archived, Suspended, Deleted, Review or Personal). Check the ‘Only show items in moderation’ checkbox to display resources currently in the moderation workflow. (That is, resources with the status of Moderating or Rejected.) Only available for Moderation queue and All resources.

## My tasks
My Tasks lists any tasks that require moderation by the currently logged in user. The My tasks page is accessed by selecting the Tasks icon at the top-right of any openEQUELLA page. 

A search text box is displayed at the top of the page to enter keyword searches, and each result displays the following:
* Title—the name of the resource. Select this link to go to the Task: Edit Document page.
* Description—resource description.
* Status—the status of the task. Task statuses will always be moderating.
* Moderating since—time since first entered moderation workflow.
* Workflow—name of the moderation workflow with which the resource collection is associated.
* Task—the resource’s current workflow task.
* Time at this task—time since first arrived at this task.
* Priority—the priority of the workflow’s current task.
* Moderation progress link—select this link to open the Moderation progress page to see a diagram of the current moderation workflow.
* (x) moderation comment(s) —this link displays if comments have been added during previous moderation tasks. Click the link to display the comments.
* Moderate Button —click to moderate the resource.

### Sort and filter
The Sort and Filter panes on the My tasks results page display options relevant to tasks.

The sort options are:
* Priority—the priority of the resource’s current workflow task.
* Expiry date—the date set as the last day that the task can be performed.
* Time waiting in task—time since resource arrived at current workflow task.
* Title—name of the resource.

From the My tasks results pages, the following filter options are available:
* Filter by assignment—select a value from the drop-down list. Available options are All, Assigned to me, Assigned to others and Unassigned. Select the Only show tasks that I must moderate to show tasks where the current user is required to be a moderator.
* Filter by collection—select the required collection from the drop-down list to see only resources belonging to that collection.
• Filter by owner—click Select User to display the Select owner to filter by dialog and search for and select the required owner.
Filter by date modified—select a qualifier from the drop-down list (After, Before, Between or On), then click the calendar field or icon to display a calendar control.

## Notifications
The Notifications page displays items such as tasks that are overdue for moderation, rejected workflow items and notifications that resources have become available (Live). The Notifications page is accessed by selecting the Notifications icon at the top-right of any openEQUELLA page. 

A search text box is displayed at the top of the page to enter keyword searches, and each notification may display the following, depending on its type:

* Title—the name of the resource. Select this link to go to the Resource summary page.
* Description—resource description.
* Reason—why the user has received a notification. Reasons can include:
  * Owner notified you—notification that the resource has become available (Live).
  * Rejected—the resource has been rejected at a workflow task.
  * Moderation overdue—a task assigned to the user has passed its due by date.
  * Bad URL – a linked URL is incorrect and doesn’t work.
  * Purchased resource updated – resource that has been purchased using the openEQUELLA Store Front function has been automatically updated from the source Store.
  * Watched resource became LIVE – resource that has been in moderation has now become Live.
  * Item was sold – resource has been purchased by another institution (only relevant where the openEQUELLA Content Exchange is configured).

### Filter
The Filter pane on the Notifications results page displays options relevant to notifications.

From the Notifications results pages, the following filter options are available:
* Filter by notification reason—select a value from the drop-down list. Available options are ALL, Moderation overdue, Contains bad URL, Was rejected, Notified of resource becoming LIVE, Watched resource became LIVE, Updated purchases and Item sales.
* Filter by collection—select the required collection from the drop-down list to see only resources belonging to that collection.
* Filter by owner—click to display the Select owner to filter by dialog and search for and select the required owner. See Filter by owner on page 30 for more information.
* Filter by date modified—select a qualifier from the drop-down list (After, Before, Between or On), then click the calendar field or icon to display a calendar control.

## Manage external resources
The Manage external resources page displays all instances of an openEQUELLA resource or resource attachment that have been allocated to courses within configured LMSs. Additionally, Manage external resources also allows the user to view the uses of internal openEQUELLA resources and attachments within the openEQUELLA system, if Local resources has been configured as a connector.

The Manage external resources page is accessed by selecting the Manage external resources link from the navigation menu. 

The Manage external resources page has the Search box at the top, where criteria are selected, and the results list displayed below.

The search box has a search text box to enter keyword searches, and a Within drop-down list. (NOTE: The Within drop-down list only displays if there are multiple external connectors configured on the system.) A value must be selected from the Within drop-down list before results are displayed. 

Each LMS connector can display different information about its resources. 

Similarly, the sort and filter options within the Manage external resources results pages can be slightly different depending on the LMS connector selected. An example of the Moodle sort and filter options are shown below. 

### Sort and filter
The Sort and Filter tabs on the Manage external resources results page (Moodle) display options relevant to Moodle resources. 

The sort options are:
* Date added—sorts the results by the date the resource was added to its Moodle location.
* Name—sorts the results by the Moodle name of the resource.
* Course—sorts the results by Moodle course name.
* Reverse order of results—select to change the order of the results.

From the Manage external resources results page (Moodle), the following filter options are available:
* Filter by status—select this option to include results from courses set as ‘hidden’ in Moodle.
* Filter by LMS course—select a Moodle course from the drop-down list to show only results from the selected course.

## Manage tasks
The Manage tasks page displays all workflow tasks. Content and system administrators would typically be granted privileges to access this function to view moderation progress. The Manage tasks page is accessed by selecting the Manage tasks link from the navigation menu. 

The Manage tasks page has the Search box at the top, where criteria are selected, and the results list displayed below.

The search box has a search text box to enter keyword searches, and a Within drop-down list. Searching can be refined by selecting All workflows or a specific workflow (e.g. Document Review) from the Within drop-down list. 

The tasks results screen lists the matching tasks, and displays the following:
* Title—the name of the resource. Select this link to go to the Moderation progress page.
* Description—resource description.
* Status—will always be Moderating or Review.
* Moderating since—time since first entered moderation workflow.
* Workflow—name of the moderation workflow with which the resource collection is associated.
* Task—the resource’s current workflow task.
* Time at this task—time since first arrived at this task.
* Priority—the priority of the workflow’s current task.
* View item summary—select to go to the resource summary page.
* (x) remaining moderator—select to view the Moderators dialog, which lists the names of any remaining moderators.
* (x) moderation comment—select to view the Moderation comments dialog, which displays recorded moderation comments.

### Sort and filter
The Sort and Filter panes on the Manage tasks results page display options relevant to managing tasks. 

The sort options are:
* Priority—the priority of the resource’s current workflow task.
* Expiry date—the date set as the last day that the task can be performed.
* Time waiting in task—time since the resource arrived at current workflow task.
* Title—name of the resource.
* Reverse order of results—check to reverse the order results are displayed.

From the Manage tasks results pages, the following filter option is available:
* Filter by moderator—click to display the Choose moderator to filter by and search for and select the required user. See Filter by owner on page 30 for more information.

## Manage resources
The Manage resources page displays all resources. Content and system administrators would typically be granted privileges to access this function to manage resources. The Manage resources page is accessed by selecting the Manage activations link from the navigation menu. 

The Manage resources results page lists resources, and displays the following: 
* Title—the name of the resource. Select this link to go to the Resource summary page.
* Description—resource description.
* Status— Draft, Live, Rejected, Moderating, Archived, Suspended, Deleted or Review.
* Last updated – Time since last updated or date last updated, depending on date format settings.

### Filter
The Manage resources filter pane displays options relevant to resources.

From the Manage resources results pages, the following additional filter options are available:
* Filter by owner – click to display the Select owner to filter by and search for and select the required user. See Filter by owner on page 30 for more information. Select the Show items with no owner checkbox to display resources where no owner is recorded.
* Filter by status – select from All statuses, Draft, Live, Rejected, Moderating, Archived, Suspended, Deleted or Review. Select the Only show items in moderation checkbox to display the resources that are currently in moderation in a workflow.
* Filter by purchased – select the Only show purchased resources to view resources that have been purchased from other institutions. This is only relevant when your institution has the openEQUELLA Content Exchange in use.
* Filter by subscription end date – Select a condition from the drop-down (e.g. on) then select a date to display the matching subscription resources. This is only relevant when your institution has the openEQUELLA Content Exchange in use.


## Manage activations
The Manage activations page displays copyright activations. Content and system administrators would typically be granted privileges to access this function to manage activations. The Manage activations page is accessed by selecting the Manage activations link from the navigation menu. 

The Manage activations results screen lists activations, and displays the following:
* Title—the name of the resource. Select this link to go to the Resource summary page
* Description—resource description.
* Attachment—name of attachment (extract).
* Course—the course the resource is associated with.
* From—the date the resource is available from.
* Until—the date the resource is available to.
* Status—the status of the resource (e.g. Live, Moderating etc.).
* Citation – displays the citation.

### Filter
The Manage activations filter pane displays options relevant to activations.

From the Manage activations results pages, the following filter options are available:
* Filter by activation status – select from Active, Pending or Inactive
* Filter by course—click Select Course to display the Select a course dialog. Enter the name or part name of the course and click Search. 
Select the required course from the results, then click OK. Click Change course to choose a different course, or Remove to clear the filter.
* Filter by owner—click Select User to display the Select owner to filter by dialog and search for and select the required owner.
* Activation range—includes Start date between x and y, End date between x and y and Activated between x and y, where x and y are dates picked from calendar controls.

## Google Books search
Google Books references can be added to resources during contribution using the attachments control. 

#### To add a Google Book reference
1. Select Google Books from the contribution attachments control, then click Next. The Add Google Book page displays
2. Enter keywords into the search text box then click Search Google Books. The more keywords entered, the more relevant the search results will be. For example, tasmania will return all results containing the word ‘tasmania’, whereas tasmania and history will return results containing both words first, with the most relevant at the top of the results list. Results containing only one word match display underneath.
3. Select the required references then click Add.

## iTunes U search
iTunes UTM tracks can be added to resources during contribution using the attachments control.

To add an iTunes U track
1. Select iTunes U from the contribution attachments control, then click Next. The Add iTunes U resource page displays. 
2. Click + to drill down to the required track, then click Add.

## YouTube search
YouTube video links can be added to resources during contribution using the attachments control. 
#### To add an YouTube video link
1. Select YouTube from the contribution attachments control, then click Next. The Add YouTube page displays. 
2. Enter keywords into the search text box then click Search YouTube. The more keywords entered, the more relevant the search results will be. For example, tasmania will return all results containing the word ‘tasmania’, whereas tasmania and history will return results containing both words first, with the most relevant at the top of the results list. Results containing only one word match display underneath. 
3. Select the required videos then click Add.

## Flickr search
Flickr image links can be added to resources during contribution using the attachments control. See openEQUELLA Contribution User Guide for more information.

#### To add a Flickr image link
1. Select Flickr from the contribution attachments control, then click Next. The Add Flickr image page displays.
The Add Flickr image page has a search box with a Search text box for entering keywords and an Over drop-down list with a default value of text and tags. The Over values are:
* text and tags—perform a freetext search matching values in a photo’s title, description or tags.
* any tags—search tags for ANY keyword match (using an OR combination).
* all tags—search tags for an ALL keyword match (using an AND combination).
2. Enter keywords into the search text box (e.g. tasmania), select a value from the Over drop-down list (e.g. text and tags) then click Search. The Add Flickr image results page displays. 

The Add Flickr image results page displays Flickr image thumbnails, and in addition to title and description, may display the following:
* Full image size—shows the full image size dimensions
* Date taken
* License—the type of license associated with the image
3. Select the required videos then click Add.

### Sort and filter
The Sort and Filter panes on the Add Flickr image results page displays options relevant to Flickr images. 

The sort options are:
* Relevance—relevance to keywords entered
* Interestingness (a Flickr term) —a term of measurement from Flickr
* Date taken
* Date posted

From the Add Flickr image results pages, the following filter options are available:
* Date photo taken—select a value from the drop-down list. Available options are After, Before, Between and On. Select the date or dates from the calendar controls.
* Filter by Creative Commons licence—select the type of licenses required.
* Flickr Institutions—a ‘Creative Commons Institution’ can be selected from the drop-down list. This list is a subset of all the Creative Commons Institutions available in Flickr. Creative Commons Institutions contain images with unrestricted licences, so selecting unrestricted in the Filter by Creative Commons licence field effectively returns images from all Flickr Creative Commons Institutions.
* Flickr user’s FlickrId, username or email—enter to search for images within the user’s Flickr collection.

## Kaltura search
Kaltura streaming media links can be added to resources during contribution using the attachments control. 

To add a Kaltura video link
1. Select Kaltura from the contribution attachments control, then click Next. The Add Kaltura media page displays.
The Add Kaltura media page provides the user with two options, Add existing Kaltura media and Upload new Kaltura media.
2. Select the Add existing Kaltura media option then click Next to display the Add Kaltura media search page. (NOTE: Kaltura does not allow the use of wildcards. Additionally, a full word match must be made to return results.)
3. Enter search criteria (e.g. wildlife) then click Search Kaltura. The search results display. 
4. Select the required resources then click Add.

## Browsing
In addition to searching, the openEQUELLA Digital Repository allows the user to browse hierarchies of logically grouped resources.

Hierarchical browsing allows users to discover resources placed within the digital repository based upon category. Users can ‘drill down’ into topics and their subfolders and search within the results. openEQUELLA can be configured to provide a count of subtopics and results and allow contributors to add their most important resources to a hierarchy topic as key resources. 

Hierarchy topics are accessed from the openEQUELLA Dashboard page via the Browse portlet or from the hierarchy topic links displayed on the navigation menu.

### Browsing using hierarchy topic links
Hierarchy topic links display in a group on the left-hand navigation menu. Select a link to display subtopics and results.
When six or more topics are added, the first four plus a More... link display. 

Selecting the More... link displays the Browse page with a list of all hierarchy topics.

Select a topic to display subtopics and results.
### Browsing using the Browse portlet
The openEQUELLA Dashboard page can display multiple portlets, including Browse, Favourites, Formatted text, My resources, Quick search, RSS or Atom feed, Recent contributions, Scripted, Task statistics, Tasks and Web page, depending on user privileges.

These portlets are configured by clicking from openEQUELLA Dashboard then selecting the required portlet.

#### To add a Browse portlet to the Dashboard
1. Click Screen Options from the top right-hand corner of the Dashboard page.  A list of available portlets displays. Click the Browse link to display the Create a new Browse portlet page. 
2. The default Title is Browse but may be changed, if required.
3. Click Save. The Browse portlet now displays on the Dashboard page. 
Select a topic to display subtopics and results.

### Displaying subtopics and results
Once a topic is selected, any subtopics are displayed. Results may also display at this point, depending on how the hierarchy has been configured. Some hierarchies may require a subtopic to be selected before any results display.


Select a subtopic to display results.

Click Add search to favourites to save the current search to Favourites. 

Open the Share tab to display the Share search query pane and select the share method.

The Sort and Filter panes can be used to further ‘drill down’.

### Viewing key resources
Key resources are important resources added to a hierarchy, and are always highlighted and displayed at the top of hierarchy results. 

## Search settings
The Searching and content indexing page is where default searching options are set, additional search filters can be added or edited, searching boosting is configured and content indexing options are set.

A user with administrator privileges would generally have access to these settings.
#### To access Searching and content indexing settings
1. From the navigation menu, select Settings, Searching and content indexing. The Searching and content indexing page display. 

#### To configure Searching options
1. From the Default results order drop-down list, select the required default order resources will display on search results pages (Relevance, Date last modified, Title or User rating).
2. Select the Allow non-live results checkbox to show the ‘Include results that are not live’ checkbox in the Search page Screen options.
3. Check the Authenticated feeds checkbox to default to authenticated RSS or Atom feeds. If this box is not checked, users can only see public items in their feed, rather than all the results generated.
4. Click Save.

### Searching terms boost
When the results sort order is set to Relevance, and search terms are entered, the results display a relevance score.

When calculating the relevance score in openEQUELLA versions prior to 6.2, the item title was worth 1.5 times as much as content found anywhere else (metadata plus attachments). Attachment content and metadata were grouped into the same field and were worth the same.
From openEQUELLA 6.2, these weights are adjustable, and in addition the attachment content is a separately configurable weight. That is, title, metadata and attachment content can all be adjusted from being not searched at all to being 8 times more relevant.

NOTE: Different indexed metadata nodes cannot be made more or less relevant; they are all worth the same.

#### To configure Searching terms boost
1. Drag the boost variables to the required values. 
NOTE: Setting a boost value to Off will prevent the system from searching in that field. (e.g. If Attachment content is set to Off, the system will not look at attachment content for matches to the search criteria.)
3. Click Save.

### Content indexing options
To configure Content indexing options
1. Select the required option from:
* Do not index attached web pages—select this option if it is not required for searches to return matching results on linked web pages.
* Index the linked web page only—select this option to index the web page of the linked URL, but no further linked web page levels. This means that searches will return matching results from the web page content.
* Index the linked web page and any secondary linked web pages—select this option to index the page of the linked URL and the next level of web pages (limit 0.5 Mb). This means that searches will return matching results from each level of web pages.
2. Click Save.

### Disable/Enable Cloud searching
Cloud searching can be disabled by selecting the Disable cloud searching checkbox in the Cloud section. 

### Gallery views
In some cases, administrators may wish to disable the Images and/or Videos views. This will remove the Images and/or Videos links at the top left of the results box. Thumbnails for image and video files will still be created in the background, so if the views are enabled, thumbnails will display immediately.

Additionally, the file count that shows to the top left of image and video thumbnails when there are multiple files can also be disabled.


#### To configure Gallery views options
1. In the Gallery views section, select from the following options:
* Disable Images – select to remove the Images link from the results box, or uncheck to add the Images link to the results box (default is unchecked).
* Disable Videos – select to remove the Videos link from the results box, or uncheck to add the Images link to the results box (default is unchecked).
* Disable file count – select to remove the file count indicator that displays at the top left of thumbnails when there are multiple image or video attachments.
2. Click Save.

### Search filters
Adding one or more search filters adds those filters to the filter pane on resource results screens. This allows the user more filtering options for their search results, enabling easier discovery of resources.
Search filters are based on MIME types. For example, a filter might be required to show only resources that have image attachments.

#### To add a Search filter
1. Click the Add a new search filter link. The Create new search filter page displays.
2. Enter a name for the filter in the Name field (e.g. Image).
3. Select the MIME Types required (e.g. Image (image/gif, image/bmp etc.)).
4. Click Save. The Search setting page displays with the new filter listed. 

More search filters can be added by selecting the Add a new search filter link.

The search filter can be edited or removed by clicking the relevant link.

The search filter displays at the bottom of the filter pane on resource results screens under the heading of Filter by resource type. 
