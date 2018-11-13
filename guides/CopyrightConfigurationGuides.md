# Copyright (CA and CLNZ) Configuration Guide

Table of Contents

[Copyright configuration overview](#copyright-configuration-overview)

[Administration console](#administration-console)

[Copyright metadata schema](#copyright-metadata-schema)

[Collection definitions](#collection-definitions)

[Create collection definitions](#create-collection-definitions)

[Courses](#courses)

[Copyright privileges](#copyright-priviledges)

[Manage activations](#manage-activations)

[Reporting](reporting)

[Remote repositories](#remote-repositories)

[Advanced searches](#advanced-searches)

## Copyright configuration overview

The purpose of this guide is to provide system administrators, content managers, copyright
administrators/librarians and system designers with examples of how to use and manage
copyright compliance in the openEQUELLA Digital Repository in accordance with the Copyright Act (1968) plus amendments, in Australia, and the Copyright Act (1994) plus amendments, in
New Zealand.

In Australia, the Educational Use and Fair Dealing statutory licences agreed to by educational institutions are managed by the Copyright Agency (CA, formerly CAL). In New Zealand, equivalent licences are managed by Copyright Licensing New Zealand (CLNZ).

Further information on copyright in Australia and in New Zealand can be found on various
websites, including those of CA and CLNZ, the Australian Copyright Council, the Copyright
Council of New Zealand, and AUSTLII.

The examples in this guide are based on the schemas, citations, XSL transformations,
collections, courses, remote repository searches, advanced searches and security that are provided with the openEQUELLA Vanilla Copyright Collections and provide a starting point for creating custom configurations that closely fit the institution’s purpose.

Please note that this guide is based on Australian and New Zealand Copyright regulations. It has been developed to reflect the full capabilities of openEQUELLA and as such may differ in appearance from your own installation.

### Copyright compliance configuration process
In this guide the user will:
* either upload the default copyright metadata schema using the Metadata Schemas
tool in the Administration Console
* or add the required copyright metadata schema nodes to an existing schema, as
specified in this document, by using the Metadata Schemas tool in the
Administration Console
* either upload the three default copyright collection definitions using the Collection
Definitions tool in the Administration Console
* or create the three copyright collection definitions as required to manage copyright in
openEQUELLA, using the Collection Definitions tool in the Administration Console.

NOTE: the collections must follow the requirements specified in this document. Failing to do so may mean that the copyright software which sits within openEQUELLA will be
unable to calculate percentages and will therefore be unable to block activations which
would breach copyright.

Once the schema nodes and copyright collection wizards are in place the
administrator will:
* Configure copyright licensing using the Collection Definitions tool to edit the
Extensions tab in the collection wizards
* Add course details using the Courses tool
* Configure user permissions by assigning the copyright privileges appropriate for the
user, using the Security Manager tool
* Upload the Electronic Use Survey report using the Reporting tool
* Create searches for library and other compliant databases using the Remote
Repositories tool
  * Link the appropriate XSLT and parent (holding) collection to each remote search
* If required, create advanced searches using the Advanced Searches tool
* If required, create browse hierarchies using the Hierarchy Editor tool

## Administration console
The openEQUELLA Administration Console provides a range of tools and plug-ins that simplify the
management and configuration of openEQUELLA.

To access openEQUELLA and open the Administration Console
1. From the navigation menu, select Settings, Administration Console.
2. The Administration console displays.

The number of tools available to a user in the Administration Console depends on the
privileges associated with that user’s account.

All available tools are displayed on the left-hand side of the page.

For the examples in this guide the Metadata Schemas, Collection Definitions,
Courses, Remote Repositories, Advanced Searches and Reporting tools are
required.


## Copyright metadata schema
A metadata schema (schema) is a storage structure used to hold a resource’s metadata.
Resource metadata is used in searching and managing resources within the openEQUELLA
repository. A schema that conforms to an available standard increases the utility and
interoperability of resources. The most widely recognised metadata schema for learning
objects is the internationally recognised IEEE 1484.12.1 Standard for Learning Object
Metadata (LOM) available at http://ieeeltsc.org/.

openEQUELLA provides a LOM compliant schema called the Generic Schema with the openEQUELLA
Vanilla Institution and it provides a starting point for creating custom metadata schemas that closely fit the institution’s purpose. The examples in this section are based on the Generic Schema but only mandatory nodes required to create Copyright copyright compliant collection definitions are described. Other nodes can be added as per the institution’s requirements; however it is essential that nodes are not removed and the structure and naming conventions are maintained.

To enable the copyright compliance features in openEQUELLA to function correctly, a specific Copyright schema is required.

### Create the copyright schema
Metadata schemas are created and modified using the Metadata Schemas tool available
in the Administration Console.

To create a new openEQUELLA copyright metadata schema from scratch
1. Select the Metadata Schemas tool in the Administration Console.
2. Select the default schema
3. Click Edit to display the Schema Editor.

The Schema Editor provides an interface for schema creation with the following tabs:
* Details—includes general information for the schema and association of resource
paths.
* Editor—creates a schema to gather the metadata.
* Transformations—enables the conversion of metadata from uploaded schemas to
facilitate import and export of metadata and attachments between repositories.
* Citations—gathers citation information from the schema metadata and transforms it
into the appropriate format from uploaded XSLTs.
* Access Control—controls access to the schema.

### Details tab
The Details page includes general information for the schema and association of resource
paths.
4. Enter a Schema Name (e.g. Generic schema - CAL) and Description for the schema
on the Details page.

The Resource Name Path and Resource Description Path are pre-selected in the
default schema, once the relevant nodes have been created in the schema. These nodes must be mapped into the ‘title’ edit box controls in each of the three copyright collections to avoid the record display showing the openEQUELLA uuid in place of the title.

### Editor tab
All schemas have the base node xml and must contain a node for the name and description of contributed resources (which are recorded in the Resource Name Path and Resource Description Path fields on the Details tab). Further nodes specific to copyright can be added.

Some schema nodes need to be checked as Searchable by Free Text (searchable) and
Index for Advanced Searches (index) during creation.

(NOTE: The nodes indexed for advanced searches are used for advanced searches and duplication and uniqueness checking.)

To enter the Copyright schema in the Hierarchy pane
1. Select the Editor tab to display the Editor page.
2. Select the xml node.
3. Click Child to display the Target Details section.
4. Enter a node Name (e.g. item).
5. Select the Type from the drop-down list (e.g. text). An example is shown in Figure 5.
6. Click Child to create a new child node.
7. Enter the node Name (e.g. copyright) and select the Type (e.g. text).
8. Click Sibling the button to create a new node.
9. Enter the node Name (e.g. itembody) and select the Type (e.g. text).
10. Click Child to create a new child node.
11. Enter the node Name (e.g. name) and select the Type (e.g. text).
12. Check the Searchable by Free Text checkbox to make the node searchable.
13. Click to Sibling create a new node.
14. Enter the node Name (e.g. description) and select the Type (e.g. text).
15. Check the Searchable by Free Text checkbox, an example is shown in Figure 6.
Figure 6 Editor page—example description node
16. Select the node (e.g. copyright).
17. Click Attribute to create a new attribute child node. (NOTE: The other
buttons are inactive when an attribute node is selected.)
18. Enter the node Name (e.g. type) and select the Type (e.g. text).
19. Check the Searchable by Free Text and Index for Advanced Searches
checkboxes.
20. Select the node (e.g. copyright).
21. Click the button to create a new attribute child node.
22. Enter the node Name (e.g. parenttype) and select the Type (e.g. text).
23. Select the node (e.g. copyright).
24. Click to create a new child node.
25. Enter the node Name (e.g. title) and select the Type (e.g. text).
26. Check the Searchable by Free Text and Index for Advanced Searches
checkboxes.
27. Add further nodes to complete the schema.

Nodes can be rearranged using the up and down arrows on the left of the editor pane.

Searchable nodes are indicated with a page icon in front of the blue dot. Newly
created nodes have white circle icon while others a blue circle icon. A node with the blue circle icon is locked and cannot be changed. Nodes are automatically locked when the schema is used by a collection
definition. Locked schemas display a ‘Partial locking’ message and only allow siblings or
attributes to be added to locked nodes.

(NOTE: It is possible to unlock nodes but this is not recommended because existing
collection resources are not updated and can exhibit unexpected behaviour.)

### Transformations tab
Importing an Extensible Stylesheet Language Transformation (XSLT) can transform
resource metadata, for example to provide a link between a search and resources in a
Parent (holding) collection. Transformations are added in the Transformations page.
Example import transformations are provided with the openEQUELLA Vanilla Institution.

To add an import transformation
1. Select the Transformations tab in the Schema Editor to display the
Transformations page.
2. Click Add in the Import Transformations section to display a Schema Transformation dialog.
3. Enter an appropriate name in the Schema Name field (e.g. MARCXML to Book).
4. Click to find and open the XSL transformation file (e.g. marcxml_to_book.xslt) then click the button.

### Citations tab
When citing licensed material and institution-preferred style can be selected to display in
the LMS. Citations can be configured in the Citations page. Various citation styles can be
added (APA, Chicago, Harvard, etc.) for use with resources associated with the schema
(by a collection using the schema). The citation information is gathered from the schema metadata and transformed into the appropriate format by an XSLT. Example generic
citation styles are provided with the openEQUELLA Vanilla Institution.

To add a citation
1. Select the Citations tab in the Schema Editor to display the Citations page.
2. Click Add.
3. Click in the blank Citation field to display a drop-down menu of available citation
styles.
4. Select the required citation or enter a citation name (e.g. Generic).
5. Click in the blank Transformation field to display a browse dialog enabling selection
of an XSLT file (e.g. generic_citation.xsl).

### Access Control tab
Schema collaborators (users that can perform various operations on a schema) are
managed with the Access Control page. Collaborators can be selected individually, as
groups or by role to be granted permissions to perform actions on the schema. Further
information on managing privileges is provided in the openEQUELLA Security Guide.
The schema privileges include:
* CREATE_SCHEMA = create a schema
* DELETE_SCHEMA = delete this schema
* EDIT_SCHEMA = edit this schema

These privileges are typically granted to Administrators.

By clicking the Advanced radio button the details of the limited set of users, groups,
and/or roles is displayed….

Save the schema settings
1. Click Save to save the configuration details.
2. Click Close to close the Schema Editor.

## Collection definitions
Collection Definitions (collections) associate important information (metadata) and processes
with uploaded files or external web sites, and in the case of the eReserve Collection, with a
resource in either the Book or the Journal parent (holding) collection as appropriate for the particular e-reading. openEQUELLA Contribution Wizards gather this information during the
contribution process to create a repository resource.

openEQUELLA copyright compliance requires the creation of parent (holding) resources in the
Books or Journals collections and portion resources (extracts, chapters, articles, etc.) in the eReserve Collection. Parent (holding) resources contain information about the resource such as book or journal details and the portion resources contain the copyright content such as the scanned chapter of a book or article from a journal. Parent (holding) resources are contributed to parent (holding) collections and portion resources to a portion collection. During the portion contribution process contributors must link the portion resource to the relevant parent (holding) resource.

Parent (holding) collections are used to easily differentiate the types of copyright content and these are typically a book collection and a journal collection. openEQUELLA places no limit on the number of collections with the number being dictated by the reporting granularity.

openEQUELLA provides copyright compliant collections with the openEQUELLA Vanilla Institution and they provide a starting point for creating custom collections that closely fit the institution’s purpose. The examples in this section are based on two Parent (holding) collections called Books and Journals and a portion collection called eReserve articles.

### Create collection definitions
Creating a collection definition requires that the metadata schema has been defined.

The Collection Definition Editor allows the entry of general collection information such as name, description and wizard category. Much of this information is displayed to the user
when contributing resources, enabling them to select a suitable collection for their
contribution.

Collections are created and modified using the Collection Definitions tool available in
the Administration Console.

To create a collection
1. Select Collection Definitions from the Administration Console.
2. Click Add to display the Collection Definition Editor.

The Collection Definition Editor provides an interface for collection creation. The following tabs are described in this section:
* Details—provides general information for the collection, association of a metadata schema and workflow template.
* Wizard—creates a wizard to gather the metadata about the resource.
* Extensions—configures copyright licensing compliance, activation options and
customised error messages and agreements.


## Copyright compliant collections

openEQUELLA copyright compliance features typically require users to create separate
collections for Parent (holding) resources (books, journals, etc.) and portion resources
(extracts, chapters, articles, etc.).

openEQUELLA copyright compliant collections do not restrict the amount of resources that can
be stored in the repository but do restrict the number of portion resources that can be
viewed by course users. The following restrictions are applied:
* For books—usually 10% (this percentage is configurable) or one chapter,
whichever is the greater.
* For journals—one article or multiple articles with the same topic.

To initiate the activation rules the portion resources must be linked to a relevant parent
(holding) resource during the portion resource contribution process.

Copyright compliance collection creation typically includes the following steps:

1. Create a Parent (holding) collection (e.g. Books).
2. Create another Parent (holding) collection (e.g. Journals).
3. Create a portion collection (e.g. eReserve articles) for extracts such as book chapters
and journal articles.

The first step is to create a Parent (holding) collection.

### Create a Parent (holding) collection
The Parent (holding) collection created in this section using the Collections Definition
Editor is called Books.

To add the collection definition details
1. Enter the following in the Details page.

  a. Collection name—enter a unique display name for the collection (e.g. Books).
  Collection details are displayed to users on the Contribute page in the openEQUELLA
  Digital Repository.

  b. Collection description—enter a description for this collection. This description is
  displayed to help contributors choose a collection during the contribution process.

  c. Collection owner—defaults to the current user. To change click Search then browse and select a new owner.

  d. Select metadata schema—select a metadata schema from the drop-down list (e.g. Generic Schema).

  e. Allow SCORM Packaging—select from the drop-down list to allow resources in the collection to be downloaded as a SCORM-compliant package.

  f. Map to a workflow—select from the drop-down list to allow resources in this collection to automatically enter the selected workflow.

  g. Select review period— select from the drop-down list to allow the period between moderation reviews to be set to ensure the resource remains current.
  This option is only available for collections that have an associated workflow.

  h. Select wizard category— select a category from the drop-down list to allow a means for grouping collection definitions. Categories are displayed on the user contribution page in the openEQUELLA Digital Repository. Select a wizard category (e.g. Demonstration) from the list. If there is no suitable category, new ones can be created by clicking the Add... link.

To create a collection definition wizard

The Wizard page enables the construction of a Contribution Wizard.

Contribution Wizards are used to assist contributors in providing the details appropriate for the contributed resources. The wizard is displayed when the collection is selected from the Contribute page the openEQUELLA Digital Repository.

To add the wizard controls
1. Select the Wizard tab in the Collection Definition Editor to display the Wizard page.
2. Click Add to display the Select a control… dialog.
3. Select a Page control from the list then click OK to display the new page as a child
node of the Wizard node.
4. Enter the Title (e.g. Book details) in the Control Editor pane. This name is displayed
to users on the corresponding wizard tab or sidebar list.

Other controls can be added to this wizard page.

To add controls to a page
1. Select the page control (e.g. Book details) in the Hierarchy pane.
2. Click Add to display the Select a control… dialog.
3. Select a Shuffle List control then click OK to display the control in the hierarchy
pane. This control allows users to add any number of elements to a list.
4. Enter the Title (e.g. ISBN).
5. Enter a Description (e.g. Enter ISBN then click ‘Add’). When a title is selfexplanatory
the description is not required.
6. Check the Warn the contributor if data in this field is not unique for resources in this collection checkbox. (NOTE: The schema element must also be indexed for advanced searching.)
7. Click Add in the Select metadata target(s) for this control: section to display
the Choose a Schema element? dialog.
8. Click the + symbols to expand the tree.
9. Select the schema element (e.g. item/copyright/issn) then click to display the
selected schema element in the Select metadata target(s) for this control: section.
10. Select the Page control (e.g. Journal Details).
When adding the following controls, leave the default values unless stated.
11. Click then select an Edit Box control and enter the following:

a. Title—(e.g. Journal Title).

b. Description—(e.g. Include the full title of the journal).

c. This control is mandatory—check the box. This means that the user must add
information for this control during the resource contribution process.

d. Warn the contributor if data in this field is not unique for resources in this
collection—check the box. (NOTE: The schema element must also be indexed for
advanced searching.)

e. Select metadata target(s) for this control—(e.g. item/copyright/title and
lom/general/title).

Note: as, well as the copyright title field appropriate to the collection, the control
must also include the default schema node used for a resource’s title as defined on the schema Details tab as the Resource Name Path. If this is not set then the resource’s uuid will display instead of the title.

12. Add an Edit Box control then enter the following:

a. Title—(e.g. Abstract or notes).

b. Number of rows—(e.g. 5).

c. Select metadata target(s) for this control—(e.g. item/copyright/abstract and
item/itembody/description).

13. Add an Edit Box control then enter the following:

a. Title—(e.g. Intellectual responsibility).

b. Description—(e.g. Statement of author and other roles such as editor, translator
etc.).

c. Number of rows—(e.g. 2).

d. Select metadata target(s) for this control—(e.g. item/copyright/responsibility).

14. Add a Shuffle List control then enter the following:

a. Title—(e.g. Author Name).

b. Description—(e.g. Enter the author(s) of this book (Surname, Given) then click
"Add").

c. Select metadata target(s) for this control—(e.g. item/copyright/authors/author).

15. Add a Shuffle List control then enter the following:

a. Title—(e.g. Editors).

b. Description—(e.g. Enter the editor(s) of this book (Surname, Given) then click
"Add").

c. Select metadata target(s) for this control—(e.g. item/copyright/editors/editor).

16. Add an Edit Box control then enter the following:

a. Title—(e.g. Edition).

b. Description—(e.g. for example 4th ed.).

c. Select metadata target(s) for this control—(e.g. item/copyright/edition).

17. Add an Edit Box control then enter the following:

a. Title—(e.g. Internal notes).

b. Description—(e.g. Bibliographic and other details viewable only by content
administrators).

c. Number of rows—(e.g. 2).

d. Select metadata target(s) for this control—(e.g. item/copyright/internalnotes).

e. Scripting—(e.g. if Issue type = ‘number’).

NOTE: The red dot next to the Editors control indicates that the control has an associated script, which displays the control only if certain other conditions set in a previous control in the wizard, are ‘true’.

To add a script
1. Click to display the Script Editor.
All wizard control scripts must start with ‘if’
2. Click the ... button to display the What is being evaluated? dialog.
3. Select the radio button option (e.g. Role of User).
4. Click OK to add the selected option as the test term.
5. Select an option from the relational operator drop-down list (e.g. =).
6. Select the test value from the drop-down list (e.g. Content Administrator Role). (NOTE: A test value can be entered for test terms with a selected schema node.)
7. Click Add to display the script in the Script area. The ‘end if’ has been automatically added by the script editor.
8. Click OK to save and close the Script Editor.

To add further controls
1. Add a Raw HTML control then enter the following:

a. User Defined HTML—(e.g. <hr>).

2. Add an Edit Box control then enter the following:

a. Title—(e.g. Place of Publication).

b. Select metadata target(s) for this control—(e.g. item/copyright/publication/place).

3. Add an Edit Box control then enter the following:

a. Title—(e.g. Publisher).

b. Select metadata target(s) for this control—(e.g. item/copyright/publisher).

4. Add an Edit Box control) then enter the following:

a. Title—(e.g. Year of publication of book).

b. Select metadata target(s) for this control—(e.g. item/copyright/publication/year).

5. Add a Raw HTML control then enter the following:

a. User Defined HTML.

6. Add an Edit Box control then enter the following:

a. Title—(e.g. Total number of pages).

b. This control is mandatory—check the box.

c. Select metadata target(s) for this control—(e.g. item/copyright/pages).

7. Add a Raw HTML control then the following:

a. User Defined HTML.

8. Add an Edit Box control then enter the following:

a. Title—(e.g. Conference name).

b. Select metadata target(s) for this control—(e.g. item/copyright/conference/name).

9. Add an Edit Box control then enter the following:

a. Title—(e.g. Conference number).

b. Select metadata target(s) for this control—(e.g. item/copyright/conference/number).

10. Add an Edit Box control then enter the following:

a. Title—(e.g. Conference location).

b. Select metadata target(s) for this control—(e.g. item/copyright/conference/location).

11. Add an Edit Box control then enter the following:

a. Title—(e.g. Conference date).

b. Select metadata target(s) for this control—(e.g. item/copyright/conference/year).

### Incorporate a Static Metadata control
The Static Metadata control is used to store metadata that is fixed for all resources of a
collection, for example the name of a faculty or school that remains the same across the
entire collection.

To add a Static Metadata control
1. Select the Page control (e.g. Book details).
2. Click Add to display the Select a control…dialog.
3. Select a Static Metadata control then click to display the control in the
Hierarchy pane.
4. Click Browse in the Metadata target section to display the Choose a schema
element? dialog.
5. Click the + symbol to expand the tree.
6. Select the node (e.g. @type) then click OK.
7. Enter a Metadata Value (e.g. Book).
8. Click to add the metadata value to the metadata target and display the associated list.

### Incorporate Copyright licensing extensions
Copyright compliant collection definitions are simple to configure and the copyright usage
data is automatically recorded. To create a copyright compliant collection definition, the
Copyright Licensing checkbox must be selected on the Extensions page in the Collection Definition Editor.

To incorporate Copyright licensing
1. Select the Extensions tab in the Collection Definitions Editor to display the Extensions
page.
2. Check the Copyright Licensing checkbox.

Customised activation error or inactive messages and licence text for display to users can also be added to the Parent (holding) collection.
1. Click to display the Copyright Licensing dialog.
2. Enter error messages in the Activation Error and Inactive Error panes respectively.

The Activation Error message is displayed when a user attempts to activate a portion resource such as a book extract when it is in violation of the Copyright copyright rules - if for example, it is more than 10% of the book.

Note that the percentage can be varied in the configuration. If the contributor has sufficient permissions they will be able to exceed the value set in the Licensing
configuration, but must add in a mandatory explanation why they have exceeded the
percentage value.

The Inactive Error message is displayed when a user attempts to access a portion
resource such as a journal article that is not activated. If the user has sufficient
privileges, they will be able to activate the resource themselves.

### Restrict activations
The default activation restrictions can be overridden by administrators with options to
restrict activation to a single portion resource per Parent (holding) resource and apply the activations per course rather than institution wide.

To restrict activation to a single portion per Parent (holding) resource
1. Select the Restrict activation to a single portion per holding (i.e. parent resource) checkbox.

To restrict activations per course
1. Select the Restrictions are per course checkbox.

### Copyright status agreement
An agreement can be uploaded that is displayed to users who must accept the agreement
terms before they can view an activated portion resource.

To add a copyright status agreement
1. Check the Resources with copyright status require agreement? checkbox.
2. Click the Upload button and upload the agreement (in HTML format) from the local
computer or network.

To save the licensing settings
1. Click OK to save the details and close the Copyright Licensing dialog.

### Save the collection definition settings
1. Click Save to save the configuration details.
2. Click Close to close the Collection Definition Editor.

The copyright compliant Books Parent (holding) collection is now complete.

The next step is to create a Parent (holding) collection for journals.

### Create another Parent (holding) collection
The Parent (holding) collection created in this section using the Collections Definition
Editor is called Journals. The Books collection has similar controls so the Journals collection will be created by cloning and editing the Books collection.

To create the Journals Parent (holding) collection
1. Select Collection Definitions in the Administration Console then collection.
2. Click Clone to display the Clone? dialog.
3. Click Yes to confirm then click OK to add a new collection (e.g. Copy of Books) to the Collection Definitions list.
4. Select the collection (e.g. Copy of Books) then click to display the Collection Definition Editor.

To edit the collection definition details
1. Enter appropriate information in the Details page.

a. Collection name—enter a unique name for the collection (e.g. Journals).

b. Collection description—enter a brief description for this collection.

To edit a collection definition wizard
1. Select the Wizard tab to display the Wizard editor page.
2. Select the page control (e.g. Book details) in the Hierarchy pane to display the control
editor pane.
3. Edit the Title (e.g. Journal Issue details).
4. Select the next control (e.g. ISBN).
5. Edit the Title (e.g. ISSN).
6. Edit the Description (e.g. Enter ISSN then click ‘Add’). When a title is selfexplanatory
the description is not required.
7. Select the target in the Select metadata target(s) for this control: section (e.g.
item/copyright/isbn) then click Browse.
8. Click Add to display the Choose a Schema element? dialog.
9. Click the + symbols to expand the tree.
10. Select the schema element (e.g. item/copyright/issn) then click to display the
selected schema element in the Select metadata target(s) for this control: section.
11. Select the (e.g. Book Title) control then edit the following:

a. Title—(e.g. Journal Issue Title).

b. Description—(e.g. Include the full journal title).

12. Leave the (e.g. Abstract or notes) control unchanged.
13. Select the (e.g. Intellectual responsibility) control.
14. Click Remove to display the Remove Wizard Control? dialog then click Yes to confirm.
15. Leave the (e.g. Author Name) control unchanged.
16. Click the down arrow button to move the (e.g. Author Name) control below the (e.g. Internal Notes) control.
17. Remove the (e.g. Editors) control.
18. Remove the (e.g. Edition) control.
19. Leave the (e.g. Internal Notes) control unchanged.
20. Leave the (e.g. Raw HTML) control unchanged.
21. Leave the (e.g. Place of publication) control unchanged.
22. Leave the (e.g. Publisher) control unchanged.
23. Select the (e.g. Year of publication of book) control then edit the following:

a. Title—(e.g. Year of publication of journal issue).

24. Leave the (e.g. Raw HTML) control unchanged.
25. Remove the (e.g. Total number of pages) control.
26. Remove the (e.g. Raw HTML) control.
27. Remove the (e.g. Conference name) control.
28. Select the (e.g. Conference number) control then edit the following:
a. Title—(e.g. Volume number).
29. Select the target in the Select metadata target(s) for this control: section (e.g.
item/copyright/conference/number) then click Remove .
30. Click Add to display the Choose a Schema element? dialog.
31. Select the schema element (e.g. item/copyright/volume) then click to display the
selected schema element in the Select metadata target(s) for this control:
section.
32. Select the (e.g. Conference location) control then edit the following:

a. Title—(e.g. Issue number).

b. Description—(e.g. Issue/Part number, month or season e.g. 3, 1-2, Oct, Mar/Apr
or Summer).

c. Select metadata target(s) for this control:— (e.g. item/copyright/issue/value).

d. Scripting—(e.g. if /item/copyright/issue/type != 'date').

33. Remove the (e.g. Conference date) control.
34. Select the page control (e.g. Journal Issue details) in the Hierarchy pane.
35. Click Add to display the Select a control… dialog.
36. Select a Radio Button Group control then click OK to display the control in the
Hierarchy pane. This control allows users to select one element from a group.

a. Enter the Title (e.g. Issue type).

b. Enter the Number of columns (e.g. 2).

c. Enter the Percentage spacing (e.g. 50).

d. Check the Automatically refresh page on selection checkbox.

e. Click Add in the Select metadata target(s) for this control: section to display
the Choose a Schema element? dialog.

f. Select the schema element (e.g. item/copyright/issue/type) then click to
display the selected schema element in the Select metadata target(s) for this
control: section.

g. Enter the Radio Button Name to be displayed next to the radio button (e.g.
Issue number).

h. Enter the Radio Button Value to be stored in the metadata target and to make it
easily identifiable for an associated script (e.g. number).

i. Click Add to add radio button names and values to the list.

j. Check the Selected checkbox to set as the default radio button.

k. Add an extra name (e.g. Issue date) and value (e.g. date) to the list.

37. Click the up arrow button to move the Issue type control above the Issue number control.
38. Select the page control (e.g. Journal Issue details) in the Hierarchy pane.
39. Click Add to add a Calendar control that allows users to select a date then click
OK and enter the following:

a. Title—(e.g. Issue date (dd/mm/yyyy)).

b. Select metadata target(s) for this control—(e.g. item/copyright/issue/value).

c. Scripting—(e.g. if /item/copyright/issue/type = 'date').

40. Select the Static Metadata control.
41. Select the Schema path (e.g. item/copyright/@type) then click Remove.
42. Click Browse in the Metadata target section to display the Choose a schema
element? dialog.
43. Select the node (e.g. item/copyright/@type) then click OK.
44. Enter a Metadata value (e.g. Journal).
45. Click Add to add the metadata value to the metadata target and display the
association list.

### Incorporate Copyright licensing extensions
To create a copyright compliant collection definition, the Copyright Licensing checkbox
must be selected on the Extensions page in the Collection Definition Editor.


### Add error or agreement messages
Customised activation error or inactive messages and licence text for display to users can also be added to the Parent (holding) collection.

### Restrict activations
The default activation restrictions can be overridden by administrators with options to
restrict activation to a single portion resource per Parent (holding) resource and apply the activations per course rather than institution wide.

### Copyright status agreement
An agreement can be uploaded that is displayed to users who must accept the agreement
terms before they can view an activated portion resource.

To save the licensing settings
1. Click OK to save the details and close the Copyright Licensing dialog.

### Save the collection definition settings
1. Click Save to save the configuration details.
2. Click Close to close the Collection Definition Editor.

The copyright compliant Journals Parent (holding) collection is now complete. The wizard is displayed to contributors in the openEQUELLA Digital Repository when the Journals
collection definition is selected.

The next step is to create a portion collection.

### Create a portion collection for book chapters and journal articles

The portion collection created in this section using the Collections Definition Editor is
called eReserve articles.

To add an eReserve articles portions collection
1. Click Add in the Administration Console to display the Collection Definition
Editor.

To add the collection definition details

2. Enter appropriate information in the Details page.

a. Collection name—enter a unique display name for the collection (e.g. eReserve
articles). Collections details are displayed to users on the Contribute page in the
openEQUELLA Digital Repository.

b. Collection description—enter a description for this collection. This description is
displayed to help contributors choose a collection during the contribution process.

c. Collection owner—defaults to the current user. To change click then
browse and select a new owner.

d. Select metadata schema—select a metadata schema from the drop-down list
(e.g. Generic Schema - CAL).

e. Allow SCORM Packaging—select from the drop-down list to allow resources in
the collection to be downloaded as a SCORM compliant package.

f. Map to a workflow—select from the drop-down list to allow resources in this
collection to automatically enter the selected workflow.

g. Select review period—select from the drop-down list to allow the period
between moderation reviews to be set to ensure the resource remains current.

This option is only available for collections that have an associated workflow.

h. Select wizard category—select a category from the drop-down list to allow
provides a means for grouping collection definitions. Categories are displayed on
the user contribution page in the openEQUELLA Digital Repository. Select a wizard category (e.g. Documentation) from the list. If
there is no suitable category, new ones can be created by clicking the Add… link.

To create a collection definition wizard

The Wizard page enables the construction of a Contribution Wizard. The controls with a
red dot have an associated script.

The wizard is displayed to contributors in the openEQUELLA Digital Repository when the
collection definition (e.g. eReserve articles) is selected.

To add the wizard controls

1. Select the Wizard tab to display a Wizard page. Configure this wizard using the same process as outlined in the To add controls to a page section.
2. Click Add to display the Select a control… dialog.
3. Select a Page control from the list then click to display the new page as a child
node of the Wizard node.
4. Enter the Title (e.g. Book chapter or journal article) in the Control editor pane. This name is displayed to users on the corresponding wizard tab or sidebar list.

To add controls to a page
When adding the following controls, leave the default values unless stated.

1. Select the page control (e.g. Book chapter or journal article) in the Hierarchy pane.
2. Click Add to add a Repeater control then click OK and enter the following:

a. Title—(e.g. Available Section).

b. Noun for ‘add’ button—(e.g. additional section).

c. Maximum number of repeats—(e.g. 50).

d. Select metadata target(s) for this control—(e.g. /item/copyright/portions/portion/sections/section).

The Repeater control creates a field that can be duplicated. It is beneficial for copyright
collections where each section consists of repeated input elements.

A repeater control requires at least one child to be added as it cannot be used in
isolation.

To add child controls to the repeater
1. Add a Radio Button Group control then click OK to display the control in the Hierarchy pane. This control allows users to select one element from a group.

a. Number of columns—(e.g. 2).

b. Percentage spacing—(e.g. 50).

c. Automatically refresh page on selection—check the box.

d. Select metadata target(s) for this control—(e.g. /section/type). (NOTE: Only sub-elements are available in the Choose a schema element? dialog for child repeater controls.)

e. Radio Button Name—(e.g. File).

f. Radio Button Value—(e.g. file).

g. Selected—check the box to set as the default radio button.

h. Radio Button Name—(e.g. URL).

i. Radio Button Value-(e.g. url).

2. Add a Load Attachment control then enter the following:

a. Title—(e.g. Upload your file here (use "Add additional section for more than 1
file")).

b. This control is mandatory—check the box.

c. Select metadata target(s) for this control—(e.g. section/attachment)

d. Scripting—(e.g. if /item/copyright/portions/portion/sections/section/type !=
‘url’).

3. Add a Single URL Link control then enter the following:

a. Title—(e.g. Enter Web Address (use "Add additional section" for more than 1 address)).

b. This control is mandatory—check the box.

c. Select metadata target(s) for this control—(e.g. section/attachment)

d. Scripting—(e.g. if /item/copyright/portions/portion/sections/section/type = ‘url’).

4. Add a Raw HTML control then enter the following:

a. User Defined HTML—(e.g. <br>).

b. Scripting—(e.g. if /item/copyright/portions/portion/sections/section/type = ‘url’).

5. Add an Edit Box control then enter the following:

a. Title—(e.g. Page range e.g. 101-105; 107, 109-110).

b. This control is mandatory—check the box.

c. Select metadata target(s) for this control—(e.g. section/pages).

6. Add a List Box control then enter the following:

a. Title—(e.g. Copyright Status).

b. Width of control(pixels)—(e.g. 300).

c. Automatically refresh page on selection—check the box.

d. Select metadata target(s) for this control—(e.g. section/copyrightstatus).

e. Scripting—(e.g. if Role of User = ‘Content Administrator’).

f. List Box Option Name—(e.g. Copyright (selected as default)).

g. List Box Option Value—(e.g. copyright).

h. List Box Option Name—(e.g. Copyright Expired).

i. List Box Option Value—(e.g. notcopyright).

j. List Box Option Name—(e.g. Out of print and unavailable).

k. List Box Option Value—(e.g. outofprint).

l. List Box Option Name—(e.g. Licensed).

m. List Box Option Value—(e.g. licensed).

n. List Box Option Name—(e.g. University Owned).

o. List Box Option Value—(e.g. universityowned).

p. List Box Option Name—(e.g. Permission Granted).

q. List Box Option Value—(e.g. permissiongranted).

r. List Box Option Name—(e.g. Preservation).

s. List Box Option Value—(e.g. preservation).

7. Add a Radio Button Group control then enter the following:

a. Title—(e.g. File or text).

b. Number of columns—(e.g. 2).

c. Automatically refresh page on selection—check the box.

d. Select metadata target(s) for this control—(e.g. section/permissiontype).

e. Radio Button Name—(e.g. File (selected as default)).

f. Radio Button Value—(e.g. file).

g. Radio Button Name—(e.g. Text).

h. Radio Button Value— (e.g. text).

8. Add a Load Attachment control then enter the following:

a. Title—(e.g. If copyright permission has been given, attach here).

b. This control is mandatory—check the box.

c. Select metadata target(s) for this control—(e.g. section/permission).

d. Scripting—(e.g. if
/item/copyright/portions/portion/sections/section/permissiontype = 'file')

9. Add an Edit Box control then enter the following:

a. Title—(e.g. Details of permission).

b. Number of rows—(e.g. 3).

c. Select metadata target(s) for this control—(e.g. section/permission).

d. Scripting—(e.g. if
/item/copyright/portions/portion/sections/section/permissiontype = ‘text’).

10. Add a Check Box Group control then enter the following:

a. Percentage spacing—(e.g. 100).

b. Select metadata target(s) for this control—(e.g. section/illustration).

c. Check Box Name—(e.g. Does this have an Illustration/Table?).

d. Check Box Value—(e.g. illustration).


To add child controls to the page control
1. Select the page control (e.g. Book chapter or journal article) in the Hierarchy pane.
2. Add a List Box control then enter the following:

a. Title—(e.g. Type:).

b. This control is mandatory—check the box.

c. Automatically refresh page on selection—check the box.

d. Select metadata target(s) for this control—(e.g. item/copyright/@parenttype).

e. List Box Option Name—(e.g. Journal article).

f. List Box Option Value—(e.g. Journal).

g. List Box Option Name—(e.g. Book extract).


h. List Box Option Value—(e.g. Book).

3. Add an Attachments control then enter the following:

a. Title—(e.g. Select Book).

b. This control is mandatory—check the box.
c. Scripting—(e.g. if /item/copyright @parenttype = ‘Book’).

d. Select metadata target(s) for this control – (e.g. item/temp_resourceHandler).

e. Add the following attachment types – select openEQUELLA Resources

f. Selected resources are—(e.g. Copyright Holdings) to restrict resource selection.
(NOTE: This is a mandatory selection for CAL.)

g. Restrict searching to the following collections—check to limit the collections
that can be searched. Move collections (e.g. Books) that can be searched to the right-hand side of the shuffle box using the arrow buttons.

h. Restrict advanced search usage to the following—check to limit the advanced searches that can be searched. When no advanced searches are selected that option is not available in the Resource Selector selection page.

i. Restrict searching to the following dynamic collections—check to limit the dynamic collections that can be searched. Move dynamic collections that can be searched to the right-hand side of the shuffle box using the arrow buttons.

j. Restrict contribution to the collections—check to limit the collections available
for contribution. Select collections (e.g. Books) that can be contributed to by using
the arrow buttons. When a search or contribution option has been restricted but no collections, searches or sources are selected, that option is not be available in the Resource Selector selection page.

4. Add a Resource Selector control then enter the following:

a. Title—(e.g. Select Journal Issue).

b. This control is mandatory—check the box.

c. Scripting—(e.g. if /item/copyright/@parenttype = ‘Journal’).

d. Selected resources are—(e.g. Copyright Holdings) to restrict resource selection.
(NOTE: this is a mandatory selection for CAL.)

e. Show home screen—check the box to display
the selection Home page.

f. Show ‘My Favourites’—check the box to make user’s My Favourites content available for selection.

g. Restrict basic and guided searches to the following collections—check to limit the collections that can be searched. Move collections (e.g. Journals) that can be searched to the right-hand side of the shuffle box using the arrow buttons.

h. Restrict advanced search usage to the following—check to limit the Advanced Searches that can be searched. When no advanced searches are selected that option is not available in the Resource Selector selection page.

i. Restrict federated searches to the following sources—check to limit the Federated Search sources that can be searched. Move federated searches (e.g. Journals – Libraries Australia) that can be searched to the right-hand side of the shuffle box using the arrow buttons.

j. Restrict contribution to the collections—check to limit the collections available
for contribution. Select collections (e.g. Journals) that can be contributed to by using the arrow buttons.

5. Add an Edit Box control then enter the following:

a. Title—(e.g. Chapter Number).

b. Select metadata target(s) for this control—(e.g.
item/copyright/portions/portion/number).

c. Scripting—(e.g. if /item/copyright@parenttype = ‘Book’).

6. Add a Shuffle List control then enter the following:

a. Title—(e.g. Author).

b. Description—(e.g. Enter the author(s) of this chapter or article (Surname, Given) then click "Add").

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/authors/author).

7. Add an Edit Box control then enter the following:

a. Title—(e.g. Title).

b. Description—(e.g. Please enter the full title of this chapter or article).

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/title and item/itembody/name).

8. Add an Edit Box control then enter the following:

a. Title—(e.g. Description).

b. Description—(e.g. Please enter a description or abstract for this chapter or
article).

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/abstract and item/itembody/description).

9. Add a Shuffle List control then enter the following:

a. Title—(e.g. Theme, topic or subject matter).

b. Description—(e.g. Enter the theme, topic or subject matter then click "Add").

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/topics/topic).

d. Scripting—(e.g. if /item/copyright@parenttype = ‘Journal’ and Role Of User ='Content Administrator Role').

10. Add an Edit Box control then enter the following:

a. Title—(e.g. Internal notes).

b. Description—(e.g. Additional notes re resources viewable only to content administrators).

c. Number of rows—(e.g. 2).

d. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/internalnotes).

e. Scripting—(e.g. if Role of User = ‘Content Administrator’).

11. Add a Radio Button Group control then enter the following:

a. Title—(e.g. From where does this originate?).

b. Number of columns—(e.g. 2).

c. Percentage spacing—(e.g. 30).

d. Select metadata target(s) for this control—(e.g. item/copyright/origin).

e. Radio Button Name—(e.g. Print (selected as default)).

f. Radio Button Value—(e.g. print).

g. Radio Button Name—(e.g. Online).

h. Radio Button Value—(e.g. online).

To incorporate Copyright licensing

1. Select the Extensions tab in the Collection Definitions Editor to display the Extensions
page.
2. Check the Copyright Licensing checkbox.
3. (NOTE: Copyright licensing messages and restrictions are applied to the Parent (holding) collections and not the portion collection, refer to the Add error or agreement messages section for more information.)

Save the collection definition settings
1. Click Save to save the configuration details.
2. Click Close to close the Collection Definition Editor.
The copyright compliant eReserve articles portion collection is now complete. The wizard
is displayed to contributors in the openEQUELLA Digital Repository when the collection
definition (e.g. eReserve articles) is selected.

## Courses
openEQUELLA Courses are used for copyright licence activation to show where the licensed
content is used. Courses in openEQUELLA should reflect the courses (by using the same course
codes) used by any associated Learning Management System (LMS) such as Blackboard™ or
Moodle™.
E
QUELLA provides a sample course called openEQUELLA 101 with the openEQUELLA Vanilla Institution
and it provides a starting point for creating custom courses that closely fit the institution’s purpose. The examples in this section are based on the openEQUELLA 101 Course.
openEQUELLA courses can be archived for future use or multiple courses can be imported in
bulk by uploading a CSV file with appropriate information.

### Create a course
Courses are created and modified using the Courses tool available in the Administration Console.

To create a course
1. Select the Courses tool in the Administration Console.
2. Click Add to display the Course Editor.
The Course Editor provides an interface for course configuration with the following tabs:
* Details—includes general information for a course.
* Resource Selection—provides choices for viewing resources.
* Access Control—controls access to a course.
### Details tab
The Details page provides general information and configurable elements for a course.

3. Enter appropriate information in the Details page.

a. Course Name —enter an appropriate course name (e.g. openEQUELLA 101). This name is displayed to users when activating and managing copyright resources.

b. Description—enter an appropriate course description. This description is displayed on the resource’s Copyright page when a resource is activated. An email address or URL can be entered and are displayed as a clickable link.

c. Department—enter the name of the department responsible for material (e.g. Sample Department).

d. Course Owner—defaults to the course creator. Clicking displays the Select Recipients... dialog where a new owner can be selected.

e. Code—enter an ID for linking the course to a LMS such as Blackboard™ or Moodle™. (NOTE: The openEQUELLA course code should be exactly the same as the course code used in the integrated system.)

f. Start Date—selecting the course start date is optional. If this field is blank the
course start date is determined by dates selected in the Settings Course Defaults options.

g. End Date—selecting the course end date is optional. If this field is blank the
course start date is determined by dates selected in the Settings Course Defaults options.

h. Unique Individuals—enter the number of participants for the course (e.g. 25).

i. Citation—select a style from the drop-down list (e.g. Generic) to be used when citing licensed material (optional). The citation styles are configured during metadata schema creation.

j. Course Type—select an appropriate course type from the drop-down list (e.g. Internal).

k. Archived—leave this box unchecked. Checking this box prevents a course from displaying to users when activating and managing copyright resources.

### Resource selection tab
The Resource Selection page provides institution-wide and course specific settings for resource version selection. Resource selection configuration is used to determine which version of a resource is displayed when a resource is selected. These settings are applicable to resources selected and saved when using an Attachments control with openEQUELLA Resources selected in a Contribution Wizard, and when openEQUELLA is integrated with a LMS such as Blackboard™ or Moodle™.

1. Select the Resource Selection tab to display the Resource Selection page.
2. Select one of the following options that is applicable for your institution:
* Use the institution wide settings—(default option) - select to apply the configured
settings from the Settings - Selection sessions option.
* Force selection to be the resource version the user is viewing—select to display
the saved version of a resource.
* Force selection to always be the latest live resource version—select to display
the most recent live version of a resource even if the saved resource is for an older
version.
* Select the resource version the user is currently viewing—select to allow the
user to choose between the saved resource version and most recent live version. This
option defaults to the saved resource version.
* Always use the latest live resource version—select to allow the user to choose
between the saved resource version and most recent live version. This option defaults
to the most recent resource version.

### Access control tab
The Access Control page allows configuration of security properties associated with the
selected course.

The course privileges include:
* CREATE_COURSE_INFO = create a course
* DELETE_COURSE_INFO = delete this course
* EDIT_COURSE_INFO = edit this course
These privileges are typically granted to Administrators responsible for running bulk
imports.

### Save the course settings
1. Click Save to save the configuration details.
2. Click Close to close the Course Editor.

## Copyright privileges
A system administrator can implement the security settings required by their institution.

Security settings are granted and revoked as is applicable for each institution. Copyright
privileges can be set at Institution, Collection and Resource levels. This section provides typical practices that are suitable for most institutions.

### Grant copyright permissions
openEQUELLA provides the following copyright privileges:
* COPYRIGHT_ITEM = edit copyright on resources
* VIEW_ACTIVATION_ITEM = view activation request on resources
* DEACTIVATE_ACTIVATION_ITEM = deactivate activation request on resources
* DELETE_ACTIVATION_ITEM = delete activation request on resources

The copyright permissions are typically defined in terms of roles and not users or groups.
* Copyright item privilege—typically granted to content contributors such as lecturers
and teachers or librarians to create, edit and roll-over activations. Activation is
initiated from the Resource Summary page of either the portion resource or Parent
(holding) resource. Resource activations can be rolled-over from the Manage Activations page. Portion resources are generally activated from the start to end date of a term or semester. The resource becomes inactive at the end date of the activation period and can be rolled-over for the next term or semester, for the same or another course.
* View activation item privilege—allows resource activations to be tracked from the
Resource Summary Copyright page. It is typically granted to content contributors such as lecturers and teachers or librarians to verify an resource’s status before activating the resource.
* Deactivate activations item privilege configures the deactivate option in the Manage Activations page. When an resource is deactivated the end date of active activations is set to the current date and the resource becomes inactive. The final period of activation in the Copyright report for that portion resource is from the initial date of activation through to and including the date of deactivation. For example, if a lecturer activates one article from a journal for a year but it is only used in semester
one, then a copyright or content administrator with this privilege could deactivate the
resource at the end of the semester. It is typically granted to members of the content
or copyright management groups.
* Delete activations item privilege—enables the delete activate option in the
Manage Activations link and Copyright page. It is used in rare cases where an institution may wish to delete activations that have been mistakenly created, for example a lecturer who incorrectly activates a single portion resource multiple times while trying to add it to their course. (NOTE: This privilege should be highly restricted as the record of the prior activation period for that portion resource is erased and so the activation period does not appear in the Copyright Report. It is typically only granted to a system administrator or one or two handpicked librarians who are in charge of the Copyright Report.)

### Configure user access
The example in this section grants the copyright privileges to a specific Collection.
Depending on the security settings required for your institution, a system administrator
can implement the privileges at Institution, Collection and Resource levels. The example
relies on System Administrator, Content Administrator and Contributor roles being
present in the openEQUELLA instance.

Copyright privileges are granted or revoked in the Administration Console Security
Manager tool.

### Add copyright privileges
1. Select the Security Manager tool in the Administration Console to display the
Security Manager.
2. Select an object group (e.g. Collections).
3. Select an object (e.g. eReserve articles) to display the View/Modify ACLs page.

In this example typical actions for copyright collections are added to allow a:
* Contributor to create, view and edit copyright resources.
* Content Administrator to deactivate copyright resources.
* System Administrator to delete copyright resources.

To add the create privilege
1. Click Add then:

a. Select the Action field then select Grant from the drop-down list. (NOTE: The default is Grant).

b. Select the Privilege field then select COPYRIGHT_ITEM from the drop-down list.

c. Select the Who? field to display the Select Recipient dialog then select the Roles button.

d. Click Search to display a list of available roles to choose from. Alternatively, type the first letter or letters of search resource then click Search.

e. Select a role (e.g. Contributor Role).

f. Move it to the right-hand pane using the  arrow button.

g. Remove Everyone by selecting it and clicking the arrow button.

h. Click OK to display the privilege in the access control list.

To add the view privilege
1. Click Add to populate the list with previously listed data. Only the Privilege field require changes:

a. Select the Privilege field and select VIEW_ACTIVATION_ITEM.

Actions can now be added to allow a Content Administrator to deactivate copyright resources.

To add the deactivate privilege
1. Click Add to populate the list with previously listed data. Only the Privilege and
Who? fields require changes:

a. Select the Privilege field then select DEACIVATE_ACTIVATION_ITEM.

b. Select the Who? field to display the Select Recipient dialog then select Roles.

c. Search for and select a role (e.g. Content Administrator Role).

d. Remove Contributor Role then click OK.

Actions can now be added to allow a System Administrator to delete copyright resources.

To add the delete privilege
1. Click Add button to populate the list with previously listed data. Only the Privilege and Who? fields require changes:

a. Select the Privilege field and select DELETE_ACTIVATION_ITEM.

b. Select the Who? field to display the Select Recipient dialog then select Roles.

c. Search for and select a role (e.g. System Administrator Role).

d. Remove Content Administrator Role then click OK.

e. Check the Override? checkbox to enable the System Administrator privileges on
any child objects, allowing them control over all resources in openEQUELLA.

The Security Manager with example privileges is shown in Figure 41. The actions
assigned to the System Administrator now override any actions assigned to individual
resources by users.

The access control list can be rearranged using the up and down buttons on the right of
the Security Manager.

Save the security settings
1. Click Save to save the configuration details.
2. Click Close to close the Security Manager.

## Manage activations
Administrators can conveniently control activated resources through the Manage Activations page.

The Manage Activations page is accessed from the navigation menu, and allows the user to
view a list of previously activated resources. The results list can be filtered by course, owner or date range. Activated resources can be deactivated, deleted or rolled-over, individually or in bulk.

## Reporting
openEQUELLA provides a Copyright report that shows all activated content for the reporting period. The reports are presented using Copyright layout in HTML or PDF format and are
appropriate for the Copyright Agency Limited (CAL).

The Copyright report can be modified, refer to the openEQUELLA Reporting Guide for more information on reports.

### Download the report file

Reports are uploaded to the openEQUELLA Administration Console and generated in the
openEQUELLA Digital Repository.

### Upload a report
Reports are uploaded using the Reporting tool available in the Administration Console.

To upload a report
1. Select Reporting in the Administration Console.
2. Click Add to display the Report Editor.
3. Enter a Report Name (e.g. The Copyright Agency (CA) EUS Report) and Description
for the report.
4. Click the Upload button and navigate to and select the rptdesign file. E.g. CAL.rptdesign

### Access Control tab
The Access Control page allows the administrator to configure user access to reports.

The report privileges include:
* CREATE_REPORT = create a report
* DELETE_REPORT = delete this report
* DESIGN_REPORT = design this report
* EDIT_REPORT = edit this report
* EXECUTE_REPORT = execute this report

These privileges are typically granted to administrators.

Save the configuration details
1. Click the Save button to save the configuration details.
2. Click the Close button to close the Reporting Editor.

### Generate the report
Reports are generated in from the Reports option accessed from the navigation menu.
Copyright compliance reporting collates copyright usage data recorded by the copyright
compliant features and aggregates it by Parent (holding) resource type.

## Remote repositories
Remote repository searches search external repositories. The returned information from a
Z39.50 remote repository search can be used to automatically add information to fields in
the Parent (holding) contribution wizard. When configured an import option is provided to the
user for federated search results either selected directly from the remote repository search results page or through a Resource Selector wizard control.

When a remote repository search is configured to import results to the openEQUELLA repository a
library search option is also available. The library search only searches Z39.50 repository
types and it also can automatically populate fields in the Parent (holding) collection
contribution wizard. Advanced or basic searches can be configured depending on the type of searches the Z39.50 host supports. The advanced searching option provides the user with a greater selection of search conditions in the one query and basic searching presents a single keyword field that only accepts a simple search term.

openEQUELLA provides a sample remote repository search called Books – Libraries Australia with
the openEQUELLA Vanilla Institution and it provides a starting point for creating custom remote repository searches that closely fit the institution’s purpose. The examples in this section are based on the Books – Libraries Australia remote repository search.

### Create a remote repository search

Remote repository searches are created and modified using the Remote Repositories tool available in the Administration Console. F

To automatically import results to the Parent (holding) contribution wizard the process
requires that an XSL Transformation (XSLT) is defined for this purpose and added to the
Copyright schema and that the federated search is linked to the Parent (holding) collection.

To create a remote repository search
1. Select the Remote Repositories tool in the Administration Console.
2. Click Add to display the Repository Types dialog.
3. Select the Z3950 search type and click OK to display the Remote Repository Editor.
Z39.50 is a client/server protocol for locating information from remote computer
databases, for example a university library title database.

To add remote repository details
1. Enter a Remote repository Name (e.g. Books – Libraries Australia) and Description.
2. Select a Parent (holding) collection (e.g. Books) to import the results to, from the
Contribute to this collection drop-down list.
3. Select an XSLT (e.g. MARCXML to Book) from the Use this import transform dropdown list. The list contains XSLTs that were added during the metadata schema creation.
4. Click to select a custom transformation as the Display XSLT. This sets how the results from the server are displayed. Click to change the transformation.
5. Enter the Host address of the search gateway. This can be either a host name or an
IP address.
6. Enter the Port access port. The default port is 210, although some Z39.50 hosts use
very high port numbers.
NOTE: If there are problems saving high port numbers please contact Support or your
openEQUELLA Consultant.
7. Enter the Database name of the database to be searched.
8. Enter the Username and Password used to access the repository (if authentication
is required).
9. Select a suitable MODS or MARC standard from the Import Record Format dropdown
list to set how the record is displayed.
10. Click Select to load default attributes – these may not work for all Z39.50 targets, in
which case specific attributes can be configured using the Advanced search fields
11. Check the Allow Advanced searching checkbox to provide the user with a greater
selection of search conditions in a library search query. (NOTE: The Z39.50 host must
support advanced searching for this option to be utilised.)
12. Advanced search fields can be configured to exactly match the attributes supported by
the remote target. To configure these options an understanding of the Z39.50
specification is required (http://www.loc.gov/z3950/agency/Z39-50-2003.pdf), as well
as information about the configurations set up in the remote target. This information
can be found in the web: e.g. for the National Library of Australia see
http://www.nla.gov.au/librariesaustralia/services/search/z3950/database-connectiondetails/

### Access Control tab
The Access Control page allows the administrator to configure user access to the
selected search.

The federated search privileges include:
* CREATE_FEDERATED_SEARCH = create a federated search
* DELETE_FEDERATED_SEARCH = delete this remote repository
* EDIT_FEDERATED_SEARCH = edit this remote repository
* SEARCH_FEDERATED_SEARCH = search for records using this remote repository.

These privileges are typically granted to administrators and users with the ereserve
manager of contributor role.

Save the configuration details
1. Click Save to save the configuration details.
2. Click Close to close the Federated Search Editor.

## Advanced searches

An advanced search provides a means for searching information (metadata) such as
copyright material associated with collection definitions. Advanced searches are customised
using wizard controls and an associated metadata schema with node elements that are
indexed for advanced searching, enabling refined searches over particular resource types.

A collection could be made up of hundreds of resources, making a refined search a very
useful tool.

openEQUELLA provides a sample advanced search called eReserve with the openEQUELLA Vanilla
Institution and it provides a starting point for creating custom advanced searches that closely fit the institution’s purpose. The examples in this section are based on the eReserve advanced search that is linked to the Parent (holding) resources (Books and Journals) and the portion resource (eReserve articles) collections. (NOTE: Alternatively a separate advanced search can be configured for each collection.)

### Create an advanced search
Advanced searches are created and modified using the Advanced Searches tool
available in the Administration Console.

To create an advanced search
1. Select the Advanced Searches tool in the Administration Console.
2. Click Add to display the Advnaced Search Editor.
The Advanced Search Editor provides an interface for search configuration with the
following tabs:
* Details—includes general information for a advanced search.
* Editor—provides an editor to add controls that create a wizard.
* Access Control—controls access to a advanced search.

### Details tab
General information, and the schema and collections to be associated with the advanced
search are configured on the Details page.
1. Enter an Advanced search name (e.g. eReserve) and Description for the search on
the Details page.
2. Select the schema (e.g. Generic Schema) from the You must select a schema to
continue drop-down list to populate the Select collections to search list with
collections associated to the selected schema.
3. Select the Parent (holding) (e.g. Books, Journals) and portion (e.g. eReserve article)
collections and click up arrow button.
4. Select the Editor tab to display the Editor page.

### Editor tab
The Editor page is where the advanced search page viewed by the user is created. Each
control on the advanced search page targets a specific schema node. Nodes must be indexed for advanced searching when the schema is created otherwise they are not available to choose as a schema element.

Any number of controls can be added.

1. Click Add to display the Select a control… dialog.
2. Select an Edit Box control then click OK to display the control in the control list.
This control searches book or journal titles.
The Search checkbox is selected by default and regulates whether the search control is
displayed to the user. An unchecked control requires an associated script to be evaluated
(and return true) to be displayed. Leave the Search checkbox ticked for all the controls
added in this example.
3. Select the control to display the editor pane on the right-hand side.
4. Enter the Title (e.g. Title of book or journal issue).
5. Click Add in the Select metadata target(s) for this control: section to display the Choose a Schema element? Dialog.
6. Click the + symbols to expand the tree. (NOTE: Only the schema nodes indexed for
advanced searching are available for selection.)
7. Select the schema element (e.g. item/copyright/title) then click OK to display the
selected schema element in the Select metadata target(s) for this control: section.  When adding the following controls, leave the default values unless stated:
8. Click Add to add an Edit Box control then click . This control searches for
book or journal authors. Select the control and enter the following:

a. Title—(e.g. Author of book or journal issue).

b. Select metadata target(s) for this control—(e.g. item/copyright/authors/author).

9. Click Add to add a Check Box Group control then click . This control
searches various values relating to copyright status.

a. Title—(e.g. Copyright Status).

b. Number of columns—(e.g. 3).

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/sections/section/copyrightstatus)

d. Add Check Box Names and Check Box Values.

10. Click Add to add an Edit Box control then click OK. This control searches the
book chapter or journal article titles.

a. Title—(e.g. Title of article/book chapter).

b. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/title).

11. Click Add to add an Edit Box control then click OK. This control searches the book chapter or journal article authors.

a. Title—(e.g. Author of article/book chapter).

b. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/authors/author).

12. Click Add to add a Shuffle List control then click OK. This control searches the topic or theme.

a. Title—(e.g. Topic or theme).

b. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/topics/topic).

13. Click Add to add a Check Box Group control then click OK. This control searches for files and URLs.

a. Title—(e.g. File or URL).

b. Number of columns—(e.g. 2).

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/sections/section/type).

d. Check Box Names and Check Box Values—(e.g. File and URL).

14. Click Add to add a Check Box Group control then click OK. This control searches for illustrations.

a. Title—(e.g. Illustration).

b. Number of columns—(e.g. 1).

c. Select metadata target(s) for this control—(e.g. item/copyright/portions/portion/sections/section/illustration).

d. Check Box Name—(e.g. Search for resources with Illustration/Tables?).

e. Check Box Value—(e.g. illustration).

15. Click Add to add an Edit Box control then click OK. This control searches the book chapter or journal article authors.

a. Title—(e.g. Year of publication).

b. Select metadata target(s) for this control—(e.g. item/copyright/publication/year).

### Access Control tab
The Access Control page allows the administrator to configure user access to the
selected search.

The advanced search privileges include:
* CREATE_POWER_SEARCH = create an advanced search
* DELETE_POWER_SEARCH = delete this advanced search
* EDIT_POWER_SEARCH = edit this advanced search
* SEARCH_POWER_SEARCH = search for resources with this advanced search.

These privileges are typically granted to administrators and users with a searcher or
viewer role.

### Save the configuration details
1. Click Save to save the configuration details.
2. Click Close to close the Advanced Search Editor.
3.
The eReserve advanced search is now complete. All controls configured for the advanced
search (e.g. eReserve) are displayed to the user when the Advanced Search is selected in
the openEQUELLA Digital Repository.

## Close the Administration Console
To log out of the Administration Console
1. Click Exit Console the button.
