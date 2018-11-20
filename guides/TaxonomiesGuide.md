# Taxonomies Guide

Table of Contents

[Taxonomies guide](#taxonomies-guide)

[Taxonomies tool](#taxonomies-tool)

[Configure a taxonomy](#configure-a-taxonomy)

[Taxonomies during contribution](#taxonomies-during-contribution)

## Taxonomies guide

openEQUELLA provides a taxonomy engine that is scalable to facilitate taxonomies with very large numbers of hierarchical terms. Terms can be configured to contain HTML fragments or custom data keys, and can be selected during resource contribution, or when power searching, through browsing to a target or by searching the list of terms.

The purpose of this guide is to provide system administrators and content creators with an understanding of the openEQUELLA Taxonomies tool to enable successful taxonomy creation and management.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA, and as such may differ in appearance to your own installation. Where possible the examples in this guide use the schemas, collections, contribution wizards and power searches provided in the openEQUELLA Vanilla Institution.

## Taxonomies tool

The Taxonomies tool enables the creation of taxonomies to a large size via manual addition of local terms or referral from a SQL data source. For mass addition of terms, it is possible to define taxonomies programmatically using the openEQUELLA SOAP interface.

## Configure a taxonomy

Taxonomies are created, modified and removed using the Taxonomies tool, available in the Administration Console.
To access openEQUELLA and open the Administration Console

1. Open a browser and enter your openEQUELLA URL (e.g. ‘http://equella.myinstitution.edu/institution’).
2. Log in to openEQUELLA as an administrator, select Settings then Administration console.
3. The Administration Console displays. Select Taxonomies.
   The Taxonomies page displays, showing a list of all previously configured taxonomies.

### Administration Console elements

When a taxonomy has been highlighted the Add, Edit, Remove, Clone, Import and Export buttons are enabled. (Providing the correct privileges have been granted.)

#### Add

Click Add to display the Taxonomy Editor and create a new taxonomy.

#### Edit

Select a taxonomy then click Edit (or double-click a taxonomy name) to display the Taxonomy Editor and modify the selected taxonomy.

If the selected taxonomy is being edited by another user, a Locked dialog is displayed, providing the following options:

- Open as read-only—disables the Save button so that no changes can be made.
- Forcefully unlock—unlocks the entity from the previous owner. Editing is possible but changes by other users may be lost.
- Do not open—the configuration screen will not be opened.

#### Remove

Click Remove to delete the selected taxonomy.

#### Clone

Click Clone to copy an existing taxonomy. The cloned taxonomy can then be modified by selecting the Edit button.

#### Import

Click Import to import a taxonomy that has previously been exported from the Administration Console. A warning dialog is displayed. (NOTE: Only ZIP files that have been exported from the Administration Console should be imported—other ZIP files may adversely affect the stability of the system.)

#### Export

Click Export to export a taxonomy as a ZIP file.

### Add a taxonomy

1. Click Add on the Administration Console to display the Taxonomy Editor.
2. The only mandatory fields that must contain values prior to saving a taxonomy are the Name and the Data Source. At this point it is possible to simply provide a name, select either data source option, and click Save to create a valid taxonomy. Further configuration is required to provide the taxonomy with any function, and these options are described below.

The Taxonomy Editor provides an interface for taxonomy creation with the following tabs:

- Details
- SQL Details
- Terms
- Access Control

Each tab is described in the following sections.

### Details tab

The Details page displays the taxonomy’s general details such as UUID, name, description and owner.

The configurable Details page elements include:

- Name—enter or edit the name of the taxonomy. This name (e.g. Learning Resource Type) is displayed as the taxonomy name in the Term Selector control.
- Description—enter or edit the taxonomy’s description.
- Owner—displays the owner of the taxonomy; the default owner is the creator of the taxonomy. Click Search to choose a new owner from available users.
- Data Source—select the data source for the taxonomy terms:
  - SQL Data Source—to query a database for terms associated with this taxonomy. A SQL Details tab is enabled.
  - Locally Defined Terms—to define and manage terms associated with this taxonomy. A Terms tab is enabled. The taxonomy must have a name and be saved before terms can be added.
- Allow end-users to add new terms during contribution—check to allow users to add new terms to the taxonomy when they are contributing resources.

### SQL Details tab

The SQL Details tab provides a flexible method for creating SQL queries to search a database and return terms for populating the taxonomy.

The supported databases are:

- Oracle™ 9i, 10g and 11g
- Microsoft SQL Server™ 2005 and 2008
- PostgreSQL™ 8.0 or higher

Database connection details depend on the database being used; selecting the database from the Database drop-down list populates the JDBC URL fields with default templates for each of the supported databases.

The JDBC URL templates require the values enclosed in angle brackets to be added, while the values in [square brackets] are optional values required by some systems.

The configurable SQL Details page elements include:

- Username—enter the username for the connection. This user will need permissions to access the database and run the SQL queries that retrieve user data.
- Password—enter the password for the entered username.
- Test Connection —click the button to check the connection.

The SQL Queries are associated with terms by mapping database queries to the taxonomy.

The function and syntax of each query type is described according to the selected query type on the SQL Details page, above the query text area.

#### Example setup:

Note 1: this is meant for demonstration / guidance purposes, not necessarily best practice.
Note 2: The syntax is for Postgres.

##### DB Tables:

_TERM_

```
CREATE TABLE term
(
  term_id integer NOT NULL,
  parent_term_id integer,
  uuid text NOT NULL,
  full_path text NOT NULL,
  leaf text NOT NULL,
  CONSTRAINT pk_term PRIMARY KEY (term_id),
  CONSTRAINT fk_parent_term FOREIGN KEY (parent_term_id)
      REFERENCES term (term_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT unique_leaf UNIQUE (leaf),
  CONSTRAINT unique_uuid UNIQUE (uuid)
)
```

_TERM_DATA_

```
CREATE TABLE term_data
(
  term_id integer NOT NULL,
  key text NOT NULL,
  value text NOT NULL,
  CONSTRAINT pk_term_data PRIMARY KEY (term_id, key),
  CONSTRAINT fk_term FOREIGN KEY (term_id)
      REFERENCES term (term_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
```

##### Queries

_Get term_

```
SELECT LEAF AS "term", UUID AS "uuid", FULL_PATH AS "fullterm", COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) AS "isleaf"
FROM TERM t1
WHERE FULL_PATH = :term
```

_Get child terms_

```
SELECT LEAF AS "term", UUID AS "uuid", FULL_PATH as "fullterm", COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) AS "isleaf"
FROM TERM t1
WHERE ((:parentTerm IS NULL OR :parentTerm = '') AND PARENT_TERM_ID IS NULL)
UNION
SELECT t1.LEAF AS "term", t1.UUID AS "uuid", t1.FULL_PATH as "fullterm", COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) AS "isleaf"
FROM TERM t1
INNER JOIN TERM parentTerm
	ON t1.PARENT_TERM_ID = parentTerm.TERM_ID
WHERE (:parentTerm IS NOT NULL AND parentTerm.FULL_PATH = :parentTerm)
```

_Get data for term_

```
SELECT td.VALUE
FROM TERM_DATA td
INNER JOIN TERM t
	ON td.TERM_ID = t.TERM_ID
WHERE t.FULL_PATH = :term
	AND td.KEY = :dataKey
```

_Get all data for term_

```
SELECT td.KEY, td.VALUE
FROM TERM_DATA td
INNER JOIN Term t
ON td.TERM_ID = t.TERM_ID
WHERE t.UUID = :uuid
```

_Search all terms_

```
SELECT LEAF AS "term", UUID AS "UUID", FULL_PATH AS "fullterm", COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) AS "isleaf"
FROM TERM t1
WHERE FULL_PATH LIKE :searchQuery
```

_Count all terms_

```
SELECT COUNT (*)
FROM TERM
WHERE FULL_PATH LIKE :searchQuery
```

_Search leaf terms_

```
SELECT LEAF AS 'term', UUID as 'uuid', FULL_PATH AS 'fullterm', 1 AS 'isleaf'
FROM TERM t1
WHERE FULL_PATH LIKE :searchQuery
	AND COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) = 1
```

_Count leaf terms_

```
SELECT COUNT(*)
FROM TERM t1
WHERE FULL_PATH LIKE :searchQuery
	AND COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) = 1
```

_Search top-level terms_

```
SELECT LEAF AS "term", UUID AS "UUID", FULL_PATH AS "fullterm", COALESCE((SELECT 0 FROM TERM t2 WHERE t2.PARENT_TERM_ID = t1.TERM_ID FETCH FIRST 1 ROWS ONLY), 1) AS "isleaf"
FROM TERM t1
WHERE PARENT_TERM_ID IS NULL
AND FULL_PATH LIKE :searchQuery
```

_Count top-level terms_

```
SELECT COUNT(*)
FROM TERM
WHERE PARENT_TERM_ID IS NULL
```

### Terms tab

The Terms tab enables terms for the taxonomy to be defined and managed.

The configurable Terms page elements include:

- Child —clicking the button, entering a name in the Input dialog then clicking the OK button adds a sub-element term to the selected term in the taxonomy.
- Sibling —clicking the button, entering a name in the Input dialog then clicking the OK button adds a new element term at the same level as the selected term in the taxonomy.
- Remove —clicking the button removes the selected term from the taxonomy.
  Adding or selecting a term (e.g. Mid-Year) in the tree displays its name and a details section.

Data associated with the term can be added by clicking the button to display an Add a new data key dialog.

Pre-determined or custom keys can be selected including:

- HTML fragment displayed in EQUELLA—select this option to add pre-determined HTML.
- Custom data key—select this option to specify custom values.

When a data key option is selected, clicking Add closes the dialog to return to the Terms tab, displaying an editor where the fragment or custom value can be added, edited, removed and saved.

NOTE: Any changes made on the Terms page will have an immediate impact even if they are not saved.

### Access Control tab

The Access Control tab allows taxonomies to be restricted to a set of users, groups or roles.

The three privileges for taxonomies are:

- CREATE_TAXONOMY = create a taxonomy.
- DELETE_TAXONOMY = delete this taxonomy.
- EDIT_TAXONOMY = edit this taxonomy.

### Use SOAP to upload terms

Administrators can programmatically add a large number of additional terms to an existing taxonomy stored in openEQUELLA via the available SOAP methods in the openEQUELLA AP. The SOAP methods require a unique identifier to access the taxonomy; this can be retrieved by copying-and-pasting the UUID from the Identifier field on the Details tab of the Taxonomy Editor.

## Taxonomies during contribution

After a taxonomy has been successfully created, it becomes possible to incorporate it into the wizard of an Advanced Search or Collection Definition, using the Term Selector control. Created taxonomies contain a list of terms that can be selected to use during contribution or when performing a power search.

Contribution Wizards are configured in the openEQUELLA Administration Console by selecting the Collection Definitions tool. Term Selector wizard controls are added in the Wizard tab.

The configurable Term Selector control elements are:

- Title—enter a title name for the control.
- Description—enter a description that describes the control itself or how to use it.
- Taxonomy—select a taxonomy that has previously been configured in the Taxonomies tool in the Administration Console (e.g. Geographic Taxonomy).
- This control is mandatory—check this box to force users to enter data in the associated control before the wizard can be completed.
- Allow multiple terms to be selected—check this box to allow more than one selection from the list during contribution.
- Allow end-users to create new terms—check this box to allow users to add terms, if they do not already exist, to the selected taxonomy during contribution. (NOTE: The same option on the Details tab of the Taxonomy Editor also needs to be checked to allow this functionality.)
- When saving selected terms—select to store the term as:
  - full path (e.g. Mammalia\Felidae\Panthera\Tiger); or
  - individual term (e.g. Tiger).
- Restrict item selection to—select an option to control the type of term selected.
- Display the taxonomy using the following control—select the type of control to display in the contribution wizard:
  - Auto-Complete Edit Box—select to display an edit box that will automatically complete an entered term. This is the best option to select if allowing users to add new terms to a taxonomy during contribution.
  - Detailed Pop-up Browser—select to display a modal dialog that allows users to browse or search for terms.
  - Wide Pop-up Browser—select to display a modal dialog with a wide screen to display very long taxonomies.
- Select metadata target(s) for this control—select a metadata target or storage area for entered data.

### Auto-Complete Edit Box

Selecting Auto-Complete Edit Box as the display type for a Term Selector control displays an edit box alongside a Select button in the contribution wizard. Entering search term(s) then clicking Select displays a list of matching terms.

Selecting a term and clicking Select adds the term to the list in the contribution wizard.

### Detailed Pop-up Browser

When this option is selected, the Term Selector control displays a Select terms link in the contribution wizard that opens a Pop-up browser with two panes. The left-hand pane displays the taxonomy tree, and each term has a Select and View link. When the View link is selected the details of the term displays in the right-hand pane.

Use the Select link or the Select This Term button to select a term.

### Wide Pop-up Browser

Select to display a modal dialog that allows users to browse or search for terms. This is similar to the Detailed Pop-up Browser except is doesn’t have the right-hand pane for taxonomies, providing a wide screen to display very long taxonomy terms. Checkbox options to Allow users to navigate the taxonomy by either Searching, Browsing, or both, are provided when this option is selected.

Click the Select link to select a term.

### Search Terms tab

The Search Terms tab on the Detailed and Wide Pop-up Browsers allows the user to search for the required terms. Entering search term(s) and clicking Search displays a list of matching terms. Selecting a term and clicking Select this Item adds the term to the Selected terms section.

Terms can be removed from the Selected terms section by clicking X.

Clicking OK adds the terms to the Contribution wizard.

Terms can be removed by clicking X.
