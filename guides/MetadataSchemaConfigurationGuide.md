# Metadata Schema Configuration Guide

Table of Contents
* [Metadata schema overview](#metadata-schema-overview)
* [Metadata schemas](#metadata-schemas)
* [Schema Editor](#schema-editor) 
* [Associate a schema to a collection](#associate-a-schema-to-a-collection)
* [Close the Administration Console](#close-the-administration-console)
* [Using metadata schemas](#using-metadata-schemas)
* [XSLT template data](#xslt-template-data)
* [Copyright compliance schema](#copyright-compliance-schema)

## Metadata schema overview
A metadata schema (schema) is a storage structure used to hold an item’s metadata. Item metadata is used in searching and managing items within the openEQUELLA Digital Repository. A schema that conforms to an available standard increases the discoverability, utility and interoperability of items held in different repositories.

The purpose of this guide is to provide system administrators with an understanding of the openEQUELLA Metadata Schemas tool to enable successful management of metadata.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA and as such may differ in appearance to your own installation. The examples in this guide use a LOM compliant schema called the Generic Schema and a Generic citation provided in the openEQUELLA Vanilla Institution. Information on institution management is provided in the openEQUELLA Installation and Administration Guides.

## Metadata schemas
The most widely recognized metadata schema for learning objects is the internationally recognized IEEE 1484.12.1 Standard for Learning Object Metadata (LOM) standard available from:
* <http://standards.ieee.org/findstds/standard/1484.12.1-2002-Cor_1-2011.html> 
A reference for the Aus-NZ interpretation (ANZ-LOM) that describes the use of each field and common controlled vocabularies is available from:
* <http://www.ndlrn.edu.au/verve/_resources/ANZ-LOM_1_02_file.pdf#search=schema>

Other metadata schema standards are available from:
* IMS (<http://www.imsglobal.org/>)
* Dublin Core (<http://dublincore.org/about/>)

A metadata schema comprises nodes that can contain further child nodes, metadata or attributes. 

A item node comprises a group of nodes associated with the node (indicated by the ‘+’) including the copyright node that has type and parenttype attributes and a group of simple data nodes. The schema, when associated with a collection, controls all the metadata stored by items in the repository and affects the item’s lifecycle, usefulness, interoperability and discoverability.

Metadata schemas are the core of item management in openEQUELLA, providing storage for metadata used:
* to control contribution wizard behavior
* collection management
* for searching
* for workflow control (moderation)
* for informational display to users

openEQUELLA provides a LOM compliant schema called the Generic Schema with each openEQUELLA Vanilla Institution and it provides a starting point for creating custom metadata schemas that closely fit the institution’s purpose. 

Before creating or modifying a schema gaining a clear understanding of the required business processes greatly simplifies schema creation.

The examples in this guide use the Generic Schema.

## Schema Editor
Metadata schemas are modified or created in the openEQUELLA Administration Console.

**To access openEQUELLA and open the Administration Console:
**
1. Open a browser and enter your openEQUELLA URL (e.g.‘<http://equella.myequellainstitution.edu>’).
2. Log in to openEQUELLA as an administrator user to display the openEQUELLA dashboard.
3. Click the Settings button to display the Settings page, then select Administration console from the categories list. 
4. Select the Metadata Schemas option to display the Metadata Schemas pane that contains a list of all previously configured profiles. 

### Administration Console elements
When the Metadata Schemas tool has been selected the Add, Edit, Remove, Clone, Import and Export buttons are enabled. (Providing the correct privileges have been granted, refer to the openEQUELLA Security Guide for further information.)

#### Add
Click +Add to display the Schema Editor and create a new schema.

#### Edit
Select a schema then click Edit (or double-click on a schema name) to display the Schema Editor and modify a schema.
If the selected schema is being edited by another user a Locked dialog is displayed providing the following options:
* Open as read-only—disables the Save button so that no changes can be made.
* Force unlock—unlocks the entity from another user. Editing can occur but changes can be lost from either user.
* Do not open—the selected schema’s editor is not opened.

#### Remove
Click -Remove to delete the selected schema. You will be asked to confirm this action.

#### Clone
Click Clone to copy an existing schema. The cloned schema can then be modified by clicking Edit.

#### Import
Click Import to import a schema that has previously been exported from the Administration Console. A warning dialog is displayed.

(Note: Only ZIP files that have been exported from the Administration Console should be imported—other ZIP files may adversely affect the stability of the system.)

#### Export
Click Export to export a schema as a ZIP file.

### Configure a metadata schema

To add a new schema
1. Click +Add to display the Schema Editor.

To edit a schema
1. Select a schema (e.g. Generic schema).
2. Click Edit to display the Schema Editor.
The Schema Editor provides an interface for schema creation with the following tabs:
* Details—includes general information for the schema and association of item paths.
* Editor—creates a schema to gather the metadata.
* Transformations—enables the conversion of metadata from uploaded XSLTs to enable import and export of metadata and items between repositories.
* Citations—gathers citation information from the schema metadata and transforms it into the appropriate format from uploaded XSLTs.
* Access Control—controls access to a schema.

Each tab is described in the following sections:
#### Details tab
The Details tab is displayed when the Schema Editor is opened.  The Details tab elements include:
* Schema Name—enter or edit the schema name.
* Description—enter or edit the purpose of the schema.
* Schema Owner—displays the schema owner (typically the schema creator). Clicking Search displays the Select Recipients... dialog where a new owner can be selected.
* Resource Name Path—displays the node that holds the Schema Name metadata. The node is shown with all its ancestor nodes. Clicking Browse displays the Choose a schema element? dialog where a different node can be selected.
* Resource Description Path—displays the node that holds the Schema Description metadata. The node is shown with all its ancestor nodes. Clicking Browse displays the Choose a schema element? dialog where a different node can be selected.

#### Editor tab
The Editor tab displays the metadata structure as an expandable/collapsible tree of nodes.

Schemas all have the base xml node and must contain a node for the name and description of contributed items.

A schema-node name is the concatenation of the node’s name with that of all its ancestors. Schema-node names must be unique, however duplicate node names can be used within the schema if the nodes do not share the same parent.

#### Partial locking
A ‘This metadata schema is partially locked’ warning is displayed when a metadata schema is being used in openEQUELLA.

Partial locking of a schema prevents changes to the locked nodes. Schema nodes are locked when the schema has been associated with a collection and prevent inadvertent corruption of existing collections. Attributes and sibling nodes can be added to locked nodes without issue.

Selecting **Click here to find out what this means**...displays the Schema Partially Locked dialog, explaining the consequences of unlocking the schema.

Unlocking a schema is not recommended as it can disrupt the use of existing collections, workflows and searches.

#### Hierarchy pane
The area where schema nodes are added and edited.

#### Schema nodes
Schema nodes are displayed in the hierarchy pane with the following icons to indicate their state:

**Unlocked**

A node will be in an unlocked state when it is created. All operations are permissible on unlocked nodes including renaming, moving and deleting. Selecting an unlocked node displays its details in the Target Details section.

**Locked**

Locked nodes cannot be renamed, moved, deleted, or modified in any way. Child nodes can be added to a locked node, but only if the locked node already has at least one child node. A sibling node or attribute can be added to any locked node.

**Searchable**

Searchable locked and unlocked nodes are searched by the Free Text engine and/or Power Search engine.

**Attribute**

Attributes (things associated with node) can be added to any schema node.

**Movement arrows**

The buttons to the left of the Schema Editor pane allow nodes to be moved around the tree. Only unlocked nodes can be moved and if a move will cause a naming conflict the button is disabled.
The Up arrow moves the selected element node above its neighbouring sibling.
The Down arrow moves the selected element node below its neighbouring sibling.

**Add Child**

Click +Child to add a sub-element node to the selected element in the schema. Children cannot be added to locked nodes unless a child node currently exists.

**Add Sibling** 
Click +Sibling to add a new element node at the same level as the selected element in the schema.

**Add Attribute**
Click +Attribute to add a new attribute to the currently selected element node. An attribute can be added to any node.

**Remove**

Click -Remove to remove the selected element from the schema. Only unlocked nodes can be removed from the schema.

**Target Details**

Selecting an unlocked node in the tree displays its details in the Target Details section. These details can be edited and must be saved to apply the changes. The details include:
* Name—enter or edit the name of the selected node.
* Type—select the type of data that will be stored in this node. The possible types are text or HTML.
* Searchable by Free Text—nodes with this option selected will be indexed by the Free Text engine and used for basic searches.
* Index for Advanced Searches—nodes with this option selected will be indexed by the Power Search engine and used for power searches and for duplication and uniqueness checking.

#### Add schema nodes
This example uses a simple schema that comprises the base xml node with a child item and child name and description nodes. The schema is:
xml
  item
    name
      description
      
To enter schema elements
1. Select the Editor tab in the Schema Editor.
2. Select the xml node.
3. Click +Child the button. A new node is added with the default label new_element. 
4. Enter a name (e.g. item) in the Name field to display the new name in the hierarchy pane.
5. Select a Type (e.g. text) from the drop-down list.
6. Select the newly created node (e.g. item).
7. Click the +Child button to create a new node.
8. Enter a name (e.g. name) in the Name box.
9. Select a Type (e.g. text) from the drop-down list.
10. Check the Searchable by Free Text checkbox and the Index for Power Searches checkbox to make the node searchable using basic and power searches.
11. Select the node (e.g. name).
12. Click +Sibling the button to create a new node.
13. Enter a name (e.g. description) in the Name box.
14. Select a Type (e.g. text) from the drop-down list.
15. Check the Searchable by Free Text checkbox and the Index for Power Searches checkbox to make the node searchable using basic and power searches.
16. Add further nodes as necessary

Once the name and description nodes have been created, the Item Name Path and Item Description Path on the Details tab can be populated.

#### To add schema elements
1. Select the Details tab on the Schema Editor.
2. Enter a Schema Name and Description.
3. Click Browse next to the Item Description Path field to display the Choose a schema element? dialog showing the recently created schema.
4. Select the appropriate schema element (e.g. name).
5. Click OK to display the selected schema element in the Item Name Path. 
6. Click Browse next to the Item Description Path field and select the description element from the Choose a schema element? dialog. 

When a node is being used by another control a warning dialog is displayed. 

To save the schema
1. Click Save to display a confirmation dialog.
2. Click OK.

### Transformations tab
The Schema Editor enables the conversion of metadata between schemas to enable import and export of metadata and items between repositories. Item metadata can be transformed to the relevant schema when it is imported to or exported from openEQUELLA using the Transformations tab. 

The Transformation tab comprises the Import Transformations and Export Transformations sections.

### Import transformations
* Schema—a description of the schema typically describing the originating schema.
* Template—the name of the XSLT used to transform metadata.
* Add—displays the Select Transformation dialog to add the transformation file.
* Edit —enabled when an import transformation schema is selected. Displays the Select Transformation dialog to edit the schema name or change the transformation file.
* Remove —enabled when an import transformation schema is selected. Removes the selected schema from the transformation list.

### Export transformation
* Schema—a description of the schema typically describing the output schema.
* Template—the name of the XSLT used to transform metadata.
* Add—displays the Select Transformation dialog to add the transformation file.
* Edit —enabled when an export transformation schema is selected. Displays the Select Transformation dialog to edit the schema name or change the transformation file.
• Remove —enabled when an import transformation schema is selected. Removes the selected schema from the transformation list.

#### To configure Schema transformations
1. Click beside the transformations pane (e.g. Export Transformations). A Schema Transformation dialog is displayed. 
2. Select the required schema (e.g. OAI_DC) from the Schema Name drop-down list or enter the schema name.
3. Click Browse to locate the required XSL Transformation.
4. Click OK to add the XSLT. 
5. Use the Add, Edit or Remove buttons as necessary to perform the associated actions.

### Citations tab
When citing licensed material an institution-preferred style can be selected. Citations can be configured in the Citations page. Various citation styles can be added (Harvard, Chicago etc.) for use with items associated with the schema (by a collection using the schema). The citation information is gathered from the schema metadata and transformed into the appropriate format by an XSLT. A generic citation style is provided with the openEQUELLA Vanilla Institution.

The Citations tab includes the following elements:
* Add—adds a new row to the citation pane.
* Citation—select this field to enter a citation name directly or select from the drop-down list.
* Transformation—select this field to display a browse dialog for selecting an XSLT file from a local computer.
* Remove—enabled when a row is selected. Removes the citation transform from the schema.

To add a citation
1. Select the Citations tab on the Schema Editor.
2. Click Add.
3. Click underneath Citation to display a drop-down menu of available citation styles.
4. Select the required citation or enter a citation name (e.g. Generic).
5. Click underneath Transformation to display a browse dialog enabling selection of an XSLT file.

### Access control tab
Schema collaborators (users who can perform various operations on a schema) are managed with the Access Control page. Collaborators can be selected individually, as groups or by role to be granted permissions to perform actions on the schema.

The three privileges for schemas are:
* CREATE_SCHEMA = create a schema
* DELETE_SCHEMA = delete this schema
* EDIT_SCHEMA = edit this schema

These privileges are typically granted to Administrators.

If delete or edit privileges are not specified on the Access Control tab of the Schema Editor, users and collaborators associated with this particular schema will inherit the privileges that are set at the Schemas level in the Administration Console Security Manager. 

To save the schema settings
1. Click Save to save the configuration details.
2. Click Close to close the Schema Editor.

## Associate a schema to a collection
Each openEQUELLA collection requires a metadata schema. An instance of the schema metadata is associated with each item contributed to the collection and controls the item’s lifecycle and search ability.

Any SCORM XSLT templates uploaded using the metadata schema’s Transformation tab are associated with the metadata schema.  The selected XSLT template transforms the current metadata into a SCORM compliant package. 

To apply a schema to a collection definition
1. Select Collection Definitions in the Administration Console.
2. Choose a collection (e.g. Learning Resources Collection) to display the Collection Definition Editor.
3. Select the schema (e.g. Generic schema) from the Select metadata schema drop-down list.


To apply an export transformation to a collection
1. Select the required export template (e.g. OAI_DC) from the Allow SCORM packaging drop-down list. 
2. Save and close the editor.

## Close the Administration Console
To log out of the Administration Console
1. Click the ! Exit Console button.

## Using metadata schemas
Metadata schemas are associated with collections, workflows and advanced searches. Typically, metadata is added to an item in a collection at contribution and then used by the associated workflow and advanced search. Further information on using schemas is provided in other configuration guides. 

## XSLT template data
Extensible stylesheet transformations (XSLTs) are commonly used to change the presentation of XML data. In openEQUELLA, they can be used to present information returned in display and confirmation templates, email templates, export templates, OAI and Z3950 import and display results.

Item data is of the form as shown in the example below:
```
<xml>
<item id="dd8d6c65-437d-1e78-e383-0d5f9cc738e0" itemdefid="6e85ce64-9a11-c5e7-69a4-bd30ec61007f" itemstatus="live" key="26427" version="1">
<itembody>
<name>EQUELLA Promotional Video</name>
<description>Short marketing video about EQUELLA</description>
....(other item schema nodes)...
</itembody>
<owner>
a11c588d-79a3-aa90-7fd9-6f641cd47db3
<user id="a11c588d-79a3-aa90-7fd9-6f641cd47db3">
<username>int.sysadmin</username>
<givenname>Internal EQUELLA</givenname>
<surname>System Administrator</surname>
</user>
</owner>
<datecreated>2009-02-12T17:01:52+1100</datecreated>
<datemodified>2009-02-12T17:01:52+1100</datemodified>
<dateforindex>2009-09-21T17:05:22+1000</dateforindex>
<rating average="-1.0" />
<attachments>
....(other attachment nodes)...
</attachments>
<badurls />
<history>
....(other history nodes)...
</history>
<moderation>
....(other moderation nodes)...
</moderation>
<navigationNodes />
</item>
<template>entity/25709/displaytemplate/</template>
<itemdir>/doco/items/dd8d6c65-437d-1e78-e383-0d5f9cc738e0/1/</itemdir>
<sessionparams />
<collection>Learning Resources Collection</collection>
</xml>
```

## Copyright compliance schema

Copyright nodes are provided in the Generic schema in the EQUELLA Vanilla Institution. 