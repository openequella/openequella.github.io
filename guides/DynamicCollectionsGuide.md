# Dynamic Collections Guide

Table of Contents

[Dynamic Collections](#dynamic-collections)

[Dynamic Collections tool](#dynamic-collections-tool)

[Configure a dynamic collection](#configure-a-dynamic-collection)

[Using a dynamic collection](#using-a-dynamic-collection)

## Dynamic Collections
openEQUELLA provides an OAI-PMH endpoint to allow its metadata to be harvested by third-party services. This functionality maps each available openEQUELLA Collection to an OAI Set.

The use of dynamic collections provides more flexibility, allowing OAI Sets to be mapped to more than one collection, or to certain items within a collection. As these collections are dynamic by nature, then the number of defined OAI Sets can change depending on what content is contained within openEQUELLA at the time.

The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA Dynamic Collections tool to enable successful management of dynamic collections.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA and as such may differ in appearance to your own installation.

## Dynamic Collections tool
Dynamic collections allow for custom collections to be created from resources existing in the openEQUELLA repository, or from a manually-entered list as configurable in the Dynamic Collection Editor. These collections can then be used within openEQUELLA in a number of ways. The dynamic collections are mapped to OAI Sets, which allows for discovery via an OAI-PMH endpoint (available in openEQUELLA), but they can also be used for harvesting, searching and Store catalogue purposes.

## Configure a dynamic collection

Dynamic collections are created and modified using the Dynamic Collections tool, available in the Administration Console.
#### To access openEQUELLA and open the Administration Console
1. Open a browser and enter your openEQUELLA URL (e.g. ‘http://equella.myinstitution.edu/institution’).
2. Log in to openEQUELLA as an administrator (with sufficient privileges to see the Dynamic Collections tool). Select Settings then Administration Console. 
3. The Administration Console displays. Select the Dynamic Collections option to display the Dynamic Collections pane.

The Dynamic collections pane displays, showing a list of all previously configured dynamic collections.

### Administration Console elements
When a tool has been selected the Add, Edit, Remove, Clone, Import and Export buttons are visible (providing the correct privileges have been granted; refer to the openEQUELLA Security Administration Guide for further information), although not all may be enabled. For instance, when no entity of the given type currently exists, only the Add and Import buttons are enabled.

#### Add
Select Add to display the Dynamic Collections Editor and create a new collection.

#### Edit
Select a collection click Edit (or double-click a collection name) to display the Dynamic Collections Editor and modify the selected collection.

If the selected collection is being edited by another user, a Locked dialog is displayed, providing the following options:
* Open as read-only—disables the Save button so that no changes can be made.
* Forcefully unlock—unlocks the entity from the previous owner. Editing is possible but changes by other users may be lost.
* Do not open—the configuration screen will not be opened.

#### Remove
Click Remove to delete the selected collection.
#### Clone
Click Clone to copy an existing collection. The cloned collection can then be modified by selecting the Edit button.
#### Import
Click Import to import a dynamic collection that has previously been exported from the Administration Console. (NOTE: Only ZIP files that have been exported from the Administration Console should be imported—other ZIP files may adversely affect the stability of the system.)
#### Export
Select a collection, then click Export to export the selected collection as a ZIP file.

### Add a dynamic collection
#### To add a dynamic collection
1. Click Add on the Administration Console to display the Dynamic Collection Editor. 
2. The only mandatory field in the Dynamic Collections Editor is the Name. At this point it is possible to simply provide a name and click the Save button to create a valid Dynamic Collection. Further configuration options are outlined below.
The Dynamic Collection Editor provides an interface for collection creation with the following pages:
* Details—set general information for the creation of the dynamic collection.
* Resource Filtering—perform freetext queries on items matching particular metadata schemas and collections.
* Dynamic Filtering—configure creation of virtual OAI Sets from dynamic content.
* Access Control—define privileges for access to the selected dynamic collection.

Each tab is described in the following sections.

### Details page
The general details of a dynamic collection are configured on the Details page.
Details page elements include:
* Name—enter the display name of the dynamic collection.
* Description—enter a description of the dynamic collection.
* Owner—assign an owner of the dynamic collection. Defaults to the current logged-in user.
* Make this Dynamic Collection available through the following services—check the box(es) to make the dynamic collection available in the following situations:
* Searching—allow resources in this collection to be discoverable from Search pages.
* OAI-PMH Set—allow resources to be returned as virtual sets with an OAI-PMH endpoint.
* Harvester Collection—allow resources in this collection to be harvested.

*NOTE: Dynamic collections are always available for the purpose of building catalogues, using the openEQUELLA Content Exchange Store function.* 


### Item Filtering
Filter resources returned in the dynamic collection with a freetext query, or by restricting results to match a schema or collection.

Resource Filtering page elements include:
* Perform the following freetext query—enter a search query to filter results to those matching this query.
* Search the following schemas—filter the results to those using the selected schema. Scripting options are also available, and explained in the Create a script for greater control section.
* Search the following collections—filter the results to match those from the selected collection. Scripting options are available, and explained in the Create a script for greater control section.

#### Create a script for greater control
When filtering resources to match those used by a specific collection or schema, it is possible to add a script to create a more defined filter.
1. On the Resource Filtering page, click the Add button to add either a schema or a collection for filtering.
2. Select an entity from the resulting dialog, and click OK. This will add the entity to the list of entities to search. 
3. Click the [Add Script] link, under the Scripting heading, to open the Script Editor. 
4. On the Basic page, click ... the button to reveal the selection dialog.
5. Select the entity from which you wish to search, and click OK. 
6. The XPath is now populated in the WHERE clause. 
7. Select a Boolean operator from the equals drop-down menu. Options include: equals, is not, and is like.
8. Enter a query into the text box.
(NOTE: If the selected schema node contains values as options, as would exist for a configured check box or radio button group, this text box will double as a drop-down menu to select the values from.)
9. Click to commit the script. The script will appear in the Script box.  While more configuration options are available, they are outside the scope of this guide. 
10. Click the Advanced tab to view the same script in JavaScript. The script pane acts like a text editor for direct input. 
11. Click OK to return to the Dynamic Collection Editor, where the dynamic collection can be saved, or further configuration made.

### Dynamic Filtering
Virtualise the dynamic collection into multiple instances, made available from each entry in a list of values. These values can come from a manually entered list, as defined in the Editor, or dynamically from the resources existing in the openEQUELLA repository.

Dynamic filtering page elements include:
* Enable Dynamic Filtering checkbox—click this to enable the other elements on the page.
* Select the XPath of the field you wish to match the values against—click Select to navigate to a schema target to choose as the field which will be used to match values.
* Choose the source of the values:
  * Contributed Resources—return all resources contributed against the selected XPath.
  * Manually Entered List—manually enter a list of resources to be returned.

### Configure Dynamic Filtering
1. Select the Enable Dynamic Filtering checkbox to enable the configuration options.
2. Click Select to display the Choose a Schema Target dialog.
3. Drop down the Choose a schema... menu to reveal a list of available schemas.
4. Select the desired schema from the list. This will populate the xml pane with the tree of schema nodes.
5. Select the desired schema node and click OK to return to the Dynamic Collection Editor with the XPath field populated with the selected schema node. 
6. Choose the source of the values by selecting either

a. Contributed Items—to return all items contributed to the repository matching the given XPath, or

b. Manually Entered List—to reveal a selector allowing the entry of terms into a list.

7. To manually enter terms, type your entry into the text box and click Add. Similarly, to remove a previously entered term, select it and click Remove.

### Access Control
The Access Control page allows a dynamic collection to be restricted to a set of users, groups or roles.

On this page, three privileges can be configured:
* DELETE_DYNA_COLLECTION—delete this dynamic collection.
* EDIT_DYNA_COLLECTION—edit this dynamic collection.
* SEARCH_DYNA_COLLECTION—search this dynamic collection.

Another privilege relevant to Dynamic Collections, which is configured in the Security Manager, not from this page, is:
* CREATE_DYNA_COLLECTION—create a dynamic collection.
* 
These privileges are typically granted to Administrators, but anyone who wants to be able to search the dynamic collection for items will need the SEARCH_DYNA_COLLECTION granted to them for the given dynamic collection(s).

#### To configure a privilege
1. Select the Access Control tab to display the Access Control page.
2. Click the Who can? drop-down menu to reveal the list of available privileges.
3. Select the delete this dynamic collection option.
4. Select the Advanced option to display the access control list.
5. Click the Add button.
6. In the Action field, select either Grant or Revoke by clicking on the current setting and selecting the appropriate option from the drop-down menu.
7. In the Who? field, click Everyone to display the Select Recipients... dialog. An example is shown in Figure 15.
8. Select the Roles option.
9. Click Search to display a list of all available roles. Alternatively, type the first letter or letters of search item and click Search.
10. Select System Administrator then select the arrow button to move the role to the right-hand pane. 
11. If required, the newly added role can be removed from the right-hand pane by selecting it, then clicking the button.
12. Click OK to close the dialog. The delete privilege has now been granted to users in the system administrator role. 
13. Save the dynamic collection to commit your changes.

#### To save a dynamic collection
When all elements have been configured for a collection:
1. Click Save to save the dynamic collection details.
2.Click Close to close the Dynamic Collection Editor.

## Using a dynamic collection
Dynamic collections can be employed in multiple areas of openEQUELLA. This is set on the Details page of the Dynamic Collection Editor. Under the heading Make this Dynamic Collection available through the following services: there are three options: Searching, OAI-PMH Set and Harvester Collection. Clicking the checkboxes will enable the dynamic collection to this section. Any combination of options is allowed.

NOTE: Dynamic collections are always available for the purpose of building catalogues, using the openEQUELLA Content Exchange Store function. 

These options are explored in the following section.

### Searching
Selecting the Searching checkbox in the Dynamic Collection Editor will make the dynamic collection available in the Within drop down menu on the Search page, alongside other collections and advanced searches. 

Selecting the dynamic collection allows the user to view all results within the collection, or perform a search within the collection, to return only those matching the user’s query.

When Dynamic Filtering is enabled on the dynamic collection, the Within menu is populated with each instance created from the configured list of values. Each instance is listed in the form Dynamic_collection_name = Instance_name. Each instance typically represents one value, or item, which will be returned when the instance is selected in the Within menu, and it is still possible to search within these results, if desired.

### OAI-PMH Set
Selecting the OAI-PMH Set checkbox in the Dynamic Collection Editor will make the dynamic collection discoverable as an ‘OAI Set’.

When Dynamic Filtering is enabled on the dynamic collection, each instance created from the configured list of values becomes an OAI Set, discoverable with an OAI-PMH endpoint.

This output can be confirmed by using EQUELLA’s built-in OAI functionality. Adding the following onto an institution URL will return the OAI XML:
```
/p/oai?verb=ListSets to become http://myinstitution.edu/institution/p/oai?verb=ListSets
```

### Harvester Collection
Selecting the Harvester Collection checkbox in the Dynamic Collection Editor will make the available as a harvester collection. This allows items in the collection to be harvested by third-party harvesters, including openEQUELLA.

When Dynamic Filtering is not enabled on the dynamic collection, the dynamic collection is listed as a harvestable collection.

When Dynamic Filtering is enabled on the dynamic collection, each instance created from the configured list of values becomes harvestable. An example list of harvestable instances as viewed from an openEQUELLA Harvester 