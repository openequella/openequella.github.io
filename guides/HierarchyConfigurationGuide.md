Hierarchy Configuration Guide

Table of Contents

[Hierarchy overview](#hierarchy-overview)

[Hierarchy privileges](#hierarchy-privileges)

[Hierarchy Editor](#hierarchy-editor)

[Accessing hierarchical browsing](#accessing-hierarchical-browsing)

[Displaying subtopics and results](#displaying-subtopics-and-results)

## Hierarchy overview
In addition to searching, the openEQUELLA Digital Repository allows the administrator to define and control access to a hierarchy of logically grouped resources.

Hierarchical browsing allows users to discover resources placed within the digital repository based upon category. Users can ‘drill down’ into topics and their subfolders and search within the results. openEQUELLA can be configured to provide a count of subtopics and results and allow contributors to add their most important resources to a hierarchy topic as key resources.

In openEQUELLA, hierarchies can be dynamic in nature. This functionality allows administrators to create an environment where users can browse through categories to target their searches.

The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA Hierarchy Editor tool to create and manage topics and subtopics, and to illustrate how these hierarchy topics may be accessed for use.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA and as such may differ in appearance to your own installation.

## Hierarchy privileges
There are three privileges linked to hierarchies:
* EDIT_HIERARCHY_TOPIC—users with this privilege have access to the Hierarchy editor to create and maintain hierarchies.
* VIEW_HIERARCHY_TOPIC—users with this privilege are able to see and use the Hierarchy topic links from the openEQUELLA navigation menu and the Browse portlet.
* MODIFY_KEY_RESOURCE—users with this privilege are able to add and remove key resources to a hierarchy topic from the search results page, as well as the Action menu on the Resource summary page.

These privileges can be configured from the Security Manager (see the openEQUELLA Security Manager Configuration Guide for more detail) or through the Access Control tab in the Hierarchy Editor tool. 

## Hierarchy Editor
Hierarchies are created and maintained via the Hierarchy Editor, accessed from the openEQUELLA Administration console.
#### To access the Hierarchy Editor
1. Log in to openEQUELLA as an administrator, select Settings then Administration console. 
2. The Administration console displays. Select Hierarchy Editor. The Hierarchy Editor displays. 

The Hierarchy Editor page is made up of two panes:
1. Hierarchy pane—displays the hierarchy structure as an expandable/collapsible tree of topics and their children on the left-hand side of the page. Click on the + or – symbol beside a topic to display or hide the subtopics.
2. Topic editor—displays the Hierarchy Editor pane for the selected topic or subtopic on the right-hand side of the page.

### Add hierarchy topics
#### To add a hierarchy topic
1. Select an existing topic in the Hierarchy pane (e.g. Browse Resources by format...).
2. Click Sibling to add the new topic at the main topic level.
(NOTE: If there are no existing topics then only the Child button is available to add new topics.)
3. An Input dialog displays. 

4. Enter an appropriate name (e.g. Training documentation) then click OK. The new hierarchy topic (e.g. Training Documentation) now displays in the Hierarchy Editor. 

### Add hierarchy subtopics
Hierarchy subtopics can be configured to automatically inherit any filters configured for the parent topic.
### To add a subtopic
1. Select an existing topic in the Hierarchy pane (e.g. Browse resources by format...).
2. Click Child to add the new subtopic to the selected topic.
3. Enter an appropriate name (e.g. Websites) in the displayed dialog then click OK. An Inherit Constraints dialog displays. 

The Inherit Constraints dialog has two options:
* Yes —the current topic automatically inherits any filters that have been configured for the parent topic.
* No —requires that each child topic must be manually configured. See Resource inheritance tab on page 17 for more information.

4. Click Yes or No. The new hierarchy subtopic (e.g. Websites) now displays in the Hierarchy Editor. 

### Delete hierarchy topics and subtopics
Hierarchy topics and subtopics can be deleted by highlighting the relevant topic or subtopic then clicking Remove.

### Rearrange hierarchy topics and subtopics

Hierarchy topics and subtopics can be rearranged to change the order in which they are displayed on the Browse page.

* Use the up arrow to move the selected element above its neighbouring sibling.
* Use down arrow to move the selected element below its neighbouring sibling.

### Topic editor
Select a topic or subtopic from the hierarchy pane to display the Topic editor on the right-hand side. 

The Topic editor (for a resource topic) has the following tabs:
* Display Details—configures topic and subtopic details, including display name, descriptions, layout and an optional Advanced Search link. 
* Resource Filtering—configures search restrictions by schema or collection to enable targeted browsing. 
* Resource Inheritance—configures subtopics to inherit attributes that have already been defined in the parent topic. The preselected configuration on this page will differ according to the Inherit constraints selection made during subtopic creation. The Resource Inheritance tab is only relevant to subtopics and therefore only appears in the Topic editor pane when a subtopic is selected.
* Virtual Topics—configures a dynamic hierarchy where associated XPath values automatically display as topics or subtopics when browsing the hierarchy. 
* Key Resources—allows the addition of key resources to the hierarchy topic or subtopic. 
* Access Control—configures access privileges for selected topic or subtopic. 

### Display Details tab
The Display Details page elements are:

#### Topic name
The topic name is the editable display name shown as the topic link in the openEQUELLA navigation menu and Browse portlet (e.g. Browse resources by format...).

#### Short description
The short description is a brief description of the topic or subtopic, and allows HTML tags. It displays under the topic name in the Browse portlet, and under the subtopic name once the topic link has been selected. 

#### Full description
The full description is a more detailed description of the purpose of the topic or subtopic, and allows HTML tags. This field could also be used to provide information or instructions to the user. The full description displays once the topic or subtopic link has been selected. 

#### Section names
Section names can be configured to display above subtopics or above results:
* Subtopics—Enter descriptive text to display above the subtopics once the topic has been selected (e.g. Format types).
* Search Results—Enter the text to display at the top of the results page (e.g. Results for video). The default value is ‘Results’. 

#### Hide subtopics with no search results
Check this box at a parent level to prevent subtopics with no results from displaying.

#### Advanced search
The Advanced Search drop-down lists all advanced searches configured in the openEQUELLA system and provides the option of associating the hierarchy topic with an advanced search, allowing for targeted searching using specific metadata to refine search results. Select an advanced search (e.g. Learning Resources), or leave at the default No advanced search selected. When an advanced search is selected an Advanced Search link is displayed on the Search page. 

### Resource Filtering tab
The Resource Filtering page provides options for configuring the type of results to be displayed. Only the contents of selected schemas and collections are displayed. If this page is not configured, all repository resources are displayed under the hierarchy topic. 

The Resource Filtering page elements include:
#### Display resources for this topic
When this box is checked (default), the results list of resources matching the topic or sub-topic are displayed. 

Where the option is unchecked, results are not displayed. This option could be used where a subtopic needs to be selected before results are displayed. 

#### Perform the following freetext query
Enter search terms in the freetext query box to restrict results from this topic or subtopic to resources containing the specified terms. For example, entering the search term ‘equella’ in the query box means that only those resources containing the search term openEQUELLA are displayed. 

There is no notification on the screen when performing a hierarchy search to inform the user that a freetext search term has been specified in the Hierarchy editor.

#### Search the following schemas
Adding a schema or schemas restricts searches to resources belonging only to collections associated with the specified schemas.

To add a schema
1. Click Add to display the Select a Schema: dialog. 
2. Select the required schema from the list (e.g. Generic Schema).
3. Click OK to display the schema in the list. 

Multiple schemas may be added.

Optional scripts can be added for further refinement.

#### To add a script
1. Click [Add Script] to display the Script Editor.

#### To remove a schema from the list
1. Select the relevant schema then click Remove.

### Search the following collections
Adding a collection or collections restricts searches to resources belonging only to those collections.

#### To add a collection
1. Click Add to display the Select a Collection: dialog.
2. Select the required collection from the list (e.g. Learning Resources).
3. Click OK to display the collection in the list.

#### To add a script
1. Click [Add Script] to display the script editor. See the openEQUELLA Scripting Guide (Basic) for more information on adding scripts.

#### To remove a collection from the list
1. Select the relevant collection then click Remove.

### Resource Inheritance tab
The Resource Inheritance page enables subtopics to inherit attributes that have already been defined in the parent topic (therefore this tab doesn’t appear at a topic level). Resource inheritance can be selected during subtopic creation. If the Yes option is selected from the Inherit Constraints? dialog, the checkboxes on this page are selected by default. If the No option is selected, the checkboxes are unselected. 

The Resource Inheritance page elements include:

#### Inherit the freetext query from the parent definition
If a freetext query has been configured for the parent topic, select this checkbox to only display resources matching the specified search terms when this subtopic is selected. 

#### Inherit the following schemas from the parent definition
Schemas that were selected at a topic level are listed here.
##### To select a schema
1. Check the Inherited? checkbox next to the required schemas.
##### To add an optional script
1. Click [Add Script] to display the script editor. 

#### Inherit the following collections from the parent definition
Collections that were selected at a topic level are listed here.
##### To select a collection
1. Check the Inherited? checkbox next to the required collection.

##### To add an optional script
1. Click [Add Script] to display the script editor. 

### Virtual Topics tab
The Virtual Topics page enables the configuration of dynamic hierarchies, where a metadata node can be selected to return either all contributed resources with a value for the given field, or resources with values from the metadata node that match values from a manually entered list.

This functionality allows administrators to create an environment where users can browse through categories to target their searches. Hierarchy topics could be dynamically created from a set of key learning areas using the Virtual Topics feature, mapping to a specific XPath. When relevant resources are contributed, a value would need to be entered against this XPath, which then automatically displays the relevant hierarchy topic or subtopic upon submission.

#### To create a virtual topic
1. Select a relevant topic then click Child.
2. Enter a name. The name for the subtopic should include the placeholder %s, which could be used alone or as part of a longer term (e.g. Browse %s in Teaching Resources). This placeholder is replaced with the value of the matching XPath. 
3. Click OK. An Inherit Constraints dialog displays.

The Inherit Constraints dialog has two options:

4. Yes—the current topic automatically inherits any filters that have been configured for the parent topic.

5. No—requires that each child topic must be manually configured. 

7. Click Yes or No. The new hierarchy subtopic (e.g. Browse %s in Teaching Resources) now displays in the Hierarchy Editor. 

The placeholder %s can also be incorporated into the Short Description, Full Description. Subtopics and Search Results fields (e.g. Displays all instances of %s from the Teaching Resources collection). 

7. Click on the Virtual Topics tab. The Virtual topics page displays. 
8. Select Enable Dynamic Filtering.
9. Click Select next to the Select the XPath of the field you wish to match the values against: box. The Choose A Schema Target page displays.
10. Click the Choose a schema down arrow and select a schema (e.g. Generic schema) then navigate to the required node. (NOTE: The node must have Index for Advanced Searches enabled.)

For uniform hierarchy topic creation, it is recommended that the node selected is associated with a selection-type control in the contribution wizard, such as a radio button group or check box group, where values are pre-defined. Use within an open-type control such as an edit box where users can create terms that are not unique may result in a hierarchy with many virtual topics with only one entry in each. 

Selecting a value here writes the value to the XPath on submission and creates a new entry for the given subtopic in the hierarchy.

11. Click OK. The XPath displays.

Choose the source of the values: options are:
* Contributed Resources—Uses every value that has been contributed for the selected XPath.
* Manually Entered List—Restricts results to the XPath values specified in the list. When this option is selected, the ability to manually enter items into a list is enabled.
12. Select Contributed Resources then click Save.
13. Click OK.

### Browsing virtual topics
Virtual topics are browsed in the same way as standard hierarchy topics. 

The subtopic names include the XPath values, as do the short descriptions. If the placeholder was also used in the full description, on selecting a subtopic, the full description also includes the XPath value. 

### Key Resources tab
Key resources are important resources specific to a topic or subtopic (e.g. general reference materials, course outlines etc). 

The Key Resources page elements include:
#### Selected Key Resources
All resources currently selected to be key resources are listed in this section, with their version number and status.

Key resources can be rearranged to change the order in which they are displayed on the results page.
##### To rearrange the order of the list
1. Use:
* Up Arrow to move the selected resource above its neighbouring sibling.
* Down Arrow to move the selected resource below its neighbouring sibling.

#### To delete a key resource from the list
1. Select the relevant resource then click Remove.

#### Find resources to add as a Key Resource
This section provides a search facility to look for resources to add to the Selected Key Resources section.
##### To search for resources
1. Enter search terms in the search bar (e.g. equella).
2. Click Search. 

Resources are listed with name, version number and resource status. If there are more than ten results, the page navigation arrows are enabled, allowing the user to scroll through the results list. Select the required resource (e.g. Sample content – The Overland Track) then click Add on Key Resource. The resource is added to the Selected Key Resources list.

Selected resources are displayed at the top of the results list, and are highlighted. 

Key resources can also be added to or removed from hierarchy topics and subtopics from the resource Actions menu, search results pages and the hierarchy topic and subtopic results pages. 

### Access Control tab
Hierarchy topics can be configured to allow various security privileges to particular users, groups or roles. The Access Control page provides a way for administrators to determine which users, groups or roles are permitted access to particular topics or subtopics. 

Hierarchy privileges can be applied to a particular hierarchy topic or subtopic in the Hierarchy Editor or the Security Manager, or at Institution level in the Security Manager.

The hierarchy topic privileges are:
* MODIFY_KEY_RESOURCE—if this privilege is granted to a user, group or role at Institution level, all hierarchy topics can have contributed resources added or removed as key resources. If granted on a specific hierarchy topic or subtopic, it applies to that topic or subtopic only, and will not be inherited by any of the child subtopics. This privilege is typically granted to an administrator and enables them to add a resource to a hierarchy as a key resource or remove a resource as a key resource from the resource Actions menu, hierarchy topic or subtopic results pages or a search results page.
* EDIT_HIERARCHY_TOPIC—if this privilege is granted to a user, group or role at Institution level, all hierarchy topics and subtopics can be edited. If granted on a specific hierarchy topic or subtopic, it applies to that topic and its child subtopics only. This privilege is inherited, meaning that if a hierarchy topic is editable by a given user, group or role, then all child subtopics will become editable by the user, group or role. This privilege is typically granted to an administrator.
* VIEW_HIERARCHY_TOPIC—if this privilege is granted to a user, group or role at Institution level, all hierarchy topics and subtopics are visible in the hierarchy. If it has been granted on a specific hierarchy topic, only those topics are displayed. If granted on a specific hierarchy topic or subtopic, it applies to that topic or subtopic only, and will not be inherited by any of the child subtopics.

### Add key resources
Key resources are important resources specific to a topic or subtopic (e.g. general reference materials, course outlines etc). When a resource is added as a key resource to a hierarchy topic or subtopic, it displays at the top of the hierarchy results list.

Resources can be added or removed as key resources to a hierarchy topic or subtopic from the hierarchy results page and the Actions menu. Resources can also be added to hierarchies from search results pages.

#### To add or remove a key resource from a hierarchy topic or subtopic
1. Click on the required hierarchy topic, then select the required subtopic, if relevant. The hierarchy results page displays. 
2. Click the Add as key resource link to add a resource as a key resource for the selected topic or subtopic. If a resource has previously been added as a key resource, the link is Remove key resource. Click the link to remove the resource as a key resource from the selected topic or subtopic. 

#### To add or remove a key resource from the Actions menu
1. Search for and select the required resource. The resource summary page displays. 
2. Click the Modify key resource link from the Actions menu. The Modify key resource page displays.
3. Click on the plus sign to expand the hierarchy tree and display any subtopics.
4. Select the checkboxes next to the hierarchy topics or subtopics (including dynamic subtopics) to which the resource is to be added as a key resource. Multiple checkboxes can be selected. 

*NOTE: Hierarchy topics or subtopics where the selected resource already exists as a key resource display as checked when the Modify key resource page opens. Uncheck to remove the resource as a key resource.*

5. Click Save. A confirmation screen displays. The resources have now been added (or removed) as key resources for the selected hierarchy topics and/or subtopics. 

#### To add a key resource from a search results page
1. Go to a search results page (e.g. Search page, My resources, Manage resources etc.). 
2. Click the Add to hierarchy link to open the Modify key resource page.
3. Select the checkboxes next to the hierarchy topics or subtopics (including dynamic subtopics) to which the resource is to be added as a key resource. Multiple checkboxes can be selected. 

NOTE: Hierarchy topics or subtopics where the selected resource already exists as a key resource display as checked when the Modify key resource page opens. Uncheck to remove the resource as a key resource.

4. Click Save. The resources are now added (or removed) as key resources for the selected hierarchy topics and/or subtopics. 

## Accessing hierarchical browsing

Hierarchy topics are accessed from the openEQUELLA Dashboard page via the Browse portlet or from the hierarchy topic links displayed on the navigation menu.
### Browsing using hierarchy topic links
Hierarchy topic links display in a group on the left-hand navigation menu. Click on a link to display subtopics and results.

When six or more topics are added, the first four plus a More... link display. 

Selecting the More... link displays the Browse page with a list of all hierarchy topics. 

Select a topic to display subtopics and results.
### Browsing using the Browse portlet
The openEQUELLA Dashboard page can display multiple portlets including Browse, Favourites, Formatted text, My resources, Quick search, RSS or Atom feed, Recent contributions, Scripted, Task statistics, Tasks and Web page, depending on user privileges.

These portlets are configured by selecting Screen Options from openEQUELLA Dashboard then selecting the required portlet.

#### To add a Browse portlet to the Dashboard
1. Select Screen Options from the top right-hand corner of the Dashboard page. 
A list of available portlets displays. 
2. Click the Browse link to display the Create a new Browse portlet page. 
3. The default Title is Browse but may be changed, if required.
4. Click Save. The Browse portlet now displays on the Dashboard page. 

Select a topic to display subtopics and results.

## Displaying subtopics and results
Once a topic is selected, any subtopics are displayed. Results may also display at this point, depending on how the hierarchy has been configured. Some hierarchies may require a subtopic to be selected before any results display. 


Select a subtopic to display results.

### Viewing key resources
Key resources are important resources added to a hierarchy, and are always highlighted and displayed at the top of hierarchy results.
