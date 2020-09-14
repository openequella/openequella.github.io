# Advanced Search Configuration Guide

Table of Contents

[Create an advanced search](#create-an-advanced-search)

[Details tab](#details-tab)

[Editor tab](#editor-tab)

[Access Control tab](#access-control-tab)

[Save a search](#save-a-search)

## Create an advanced search

#### To create a new advanced search
1. Select the Advanced Searches option from the Administration Console.
2. Select the Add link. The Advanced Search Editor—Details tab displays. 

### Details tab
The Details tab is where the metaschema and related collection to be associated with the advanced search are selected.

The configurable Details page elements are:
* Advanced Search name and description - enter a meaningful name and description to enable users to easily identify the purpose of the search
* Owner - the owner of the search (by default this is the search's creator)
* Select metadata schedma - select the schema the search will target.
* Select collections to search - select from the displayed collections associated with the chosen schema.

### Configure the Details page
1. Enter the name of the search (e.g. Learning Resources) in the Advanced search name field.
2. Enter a description of the search in the Description field, if required.
3. The Owner field is set to default to the current user. If required, click the Search button to open a Select Recipients... dialog to select a different owner.
4. Select a schema (e.g. Generic Schema) from the You must select a schema to continue drop-down list. All collections that are associated with the selected schema will be displayed in the Select collections to search pane. 

An advanced search can be limited to search only within particular collections. To select which collections to be searched:
1. Select the required collection and click the arrow button to move it to the right-hand pane, or
2. Click the double arrow button to select all collections for searching. 
3. Move unwanted collections back to the left-hand pane by clicking the single or double arrow buttons.
4. Select the Editor tab to display the Editor page. 

### Editor tab

An advanced search can be regarded as a simplified wizard. Unlike wizards, advanced searches display only one page and use a restricted set of controls. The Editor page displays controls in the Control list pane located on the left-hand side of the page. Each control targets a node from the metadata schema. The targeted nodes are searched using the criteria entered or selected by the user.

The Editor page contains the following elements:
#### Control list pane
The Control list pane is located on the left-hand side of the page. This pane displays the controls that are shown to users of the advanced search. Select a control to display its details in the Control Editor pane on the right-hand side of the page.
#### Control Editor pane
The Control Editor pane is located on the right-hand side of the page. This pane displays the details of the selected control. Its appearance will differ for each control.
#### Navigation arrows
The buttons to the left of the control list pane allow the user to change the order the controls appear in the advanced search. The up arrow moves the selected control upwards on the page, and the down arrow moves it downwards.
### Add button
Add opens the Select a control... dialog. 

A brief explanation of the available controls is provided below:
* Calendar—allows searching by date.
* Check Box Group—displays a check box group from which one or more elements can be selected.
* Edit Box—allows for the entry of basic keywords.
* List Box—features drop-down options to select from.
* Radio Button Group—displays a group of options from which only one can be selected.
* Raw HTML—allows the entry of HTML code.
* Shuffle Box—allows for the selection of one or more items by moving them from one pane to another using arrow buttons.
* Shuffle List—allows the entry of any number of elements to a list.
* Term Selector—allows for the selection of pre-existing terms.
* User Selector—allows for the search and selection of openEquella users.

Each control must target a specific metadata schema node.

#### Remove button
Remove —click to delete the selected control from the advanced search.
#### Save button
Save—click to save the current advanced search.
#### Close button
Close—click to close the advanced search editor.

### Configure the Editor page
1. Click Add to display the Select a control... dialog.
2. Select an appropriate control (e.g. Check Box Group).
3. Click OK . The dialog will close and the selected control is displayed in the left-hand pane of the editor. 

The Search checkbox controls whether the search control is functional to the user. If unchecked, the user may select a value but it will have no impact on the search results.

4. Select the control. The control configuration pane is displayed on the right-hand side. 

5. Configure the selected control as required. Add a Friendly Name, if required. 
6. Add further controls as necessary. 

### Friendly name
Each control in the advanced search editor page except Raw HTML and User selector has a Friendly Name field at the bottom of the control editor page. 

The name entered in this field displays on the results page once the advanced search has been activated, instead of the xml schema path. The text entered in this field for a control displays when an element from that control is selected on the search criteria page.

Using the example where the Friendly Name ‘Resource type’ has been entered, shown in Figure 19, if the Format of resource ‘Image’ checkbox is selected from the search criteria page, the search box displays ‘Resource type is Image’. 

### Access Control tab
The Access Control tab allows the administrator to configure user access to the selected search. There are three privileges that can be granted: delete this advanced search, edit this advanced search, and search for items with this advanced search.

The following is an example of how to configure the Access Control page. Any user or group can be assigned as owners of a search. This example grants privileges to the system administrator and viewer roles.

#### To configure this page to restrict access to the system administrator
1. Select the Access Control tab. The Access Control page is displayed. 
2. Click the Who can? drop-down arrow and select the delete this advanced search option.
3. Select the Advanced option. The Advanced screen displays. 
4. Click Add.
5. In the Action field, make sure Grant displays. If displaying Revoke, click on the field and change to Grant.
6. In the Who? field, click on Everyone. The Select Recipients... dialog displays. This dialog allows a search for users, groups or roles to grant access to.
7. Select the Roles radio button.
8. Click Search to display a list of available roles to choose from. Alternatively, type the first letter or letters of a search item and click the Search.
9. Select Everyone in the right-hand pane and use the arrow button to move it to the left-hand pane.
10. Highlight System Administrator Role in the left-hand pane and move to the right-hand pane using the arrow button.
11. Click OK to close the dialog.
The delete privilege has now been granted to the system administrator. 
12. Select edit this advanced search from the Who can? drop-down list and configure access to the option by repeating steps 3 to 11.

#### To configure this tab to restrict access to the Viewer role
1. Select search for items with this advanced search from the Who can? drop-down list and Grant the Viewer Role access to this option by repeating steps 3 to 11.

Further security options can be added or deleted using the Add or Remove buttons. 

### Save a search
When all elements have been configured for a search:
1. Click Save to save the search details.
2. Click Close to close the Advanced Search Editor.

