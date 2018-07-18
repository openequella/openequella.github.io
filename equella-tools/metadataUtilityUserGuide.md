# Metadata Utility User Guide

Table of Contents

[Introduction](#introduction)

[Installing and Uninstalling EMU](#installing-and-uninstalling-emu)

[Connecting to openEQUELLA](#connecting-to-equella)

[Searching openEQUELLA](#searching-equella)

[Bulk Modifying Item Metadata](#bulk-modifying-item-metadata)

[Saving and Loading Profiles](#saving-and-loading-profiles)

[Troubleshooting](#troubleshooting)

[Appendix A: Example Modification Routines](#appendix-a-example-modification-routines)

[Appendix B: XPath Notation](#appendix-b-xpath-notation)

[Appendix C: EMU Object Model Reference](#appendix-c-emu-object-model-reference)

## Introduction
### About the openEQUELLA Metadata Utility (EMU)
The EQUELLA® Metadata Utility (EMU) is a lightweight software utility designed to bulk manage item metadata in the award-winning openEQUELLA® content repository system.

EMU is typically installed on an openEQUELLA administrator’s workstation. It connects to an openEQUELLA repository via a local network or over the Internet. EMU allows querying of openEQUELLA and bulk updating of the metadata of selected items.

### Requirements

#### openEQUELLA
EMU can only be used to manage versions of EQUELLA 4.1 or higher.
#### Microsoft Windows
EMU requires Microsoft® Windows. Versions of Windows EMU currently supports are:
* Microsoft Windows XP
* Microsoft Windows Vista
* Microsoft Windows 7
* Microsoft Windows 8

#### Microsoft .NET
EMU requires that Microsoft’s .NET Framework 3.5 or higher be installed on the workstation. .Net Framework 3.5 is included with Windows 7 and Windows 8 but must be installed as an additional module on Windows XP and Windows Vista.

To check if Microsoft .NET Framework 3.5 is installed on your computer check to see if it is listed under “Programs and Features” in Control Panel.

The .NET Framework can be freely downloaded and installed from http://www.microsoft.com/NET/

### Disclaimer
EMU is provided “as-is” and without warranties of any kind. The user assumes all risks associated with its use including, but not limited to, the risks and costs of program errors, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.

## Installing and Uninstalling EMU
EMU is distributed as a Windows Installer file named emu.msi. Double-click the installer file and follow the instructions.

If EMU is already installed on the workstation and you are upgrading or reinstalling it then:
1. If you are installing the same version you will be asked if you wish to “repair” EMU. This action will reinstall EMU on the workstation
2. If you are installing a different version you will be prompted to uninstall the currently installed version first

To uninstall EMU go to “Programs and Features” under Windows Control Panel, select “EQUELLA Metadata Utility” and click “Uninstall”.

## Connecting to openEQUELLA
To connect EMU to an openEQUELLA institution use the Connection tab.


* Institution URL - This takes the form of:
http://<server_address>/<institution_short_name>
An example might be: http://repository.mycollege.edu/live
If your openEQUELLA institution has a URL that has no virtual folder on the end then it may simply require a domain for example: http://repository.mycollege.edu
You can easily test an openEQUELLA institution URL (and the availability of openEQUELLA) by entering it into a web browser. If correct it will return the openEQUELLA login page.

* Login Mode - EMU can be connected to openEQUELLA with either a username and password or a username and Shared Secret. Use the radio buttons on the Connection tab to select either: A. openEQUELLA User or B. Shared Secret

* Username (openEQUELLA User) - This should be a user in openEQUELLA that has the DISCOVER_ITEM and VIEW_ITEM privileges on the items that will be searched for. The user should have the EDIT_ITEM privilege for items that will be edited or bulk updated.

* Password - The password of the above user

* Username (Shared Secret) - This should be a user in openEQUELLA that has the DISCOVER_ITEM and VIEW_ITEM privileges on the items that will be searched for. The user should have the EDIT_ITEM privilege for items that the will be edited or bulk updated. You do not need to know the password of this user. Depending on the Shared Secret settings in openEQUELLA, if the user account does not exist in openEQUELLA it may be automatically created. 

* Shared Secret ID - The Shared Secret ID as configured in openEQUELLA. 

* Shared Secret - The Shared Secret as configured in openEQUELLA. 

* Test Connection - This button will attempt a login and logout to openEQUELLA with the settings above.

* Log Files Folder - This button will launch a dialog to specify a folder for EMU log files to be written to.

* Use Proxy - Check this checkbox if you require a proxy server to connect to openEQUELLA. EMU uses the same network protocols as web browsers to connect to openEQUELLA so you can usually determine if a proxy server is required by looking at your web browser settings (in Microsoft Internet Explorer this is under Tools->Internet Settings->Connections->LAN Settings). If you are unsure consult your network administrator.

* Proxy Address - If applicable, the address of a proxy server. If the proxy server is on a network port other than 80 then include this at the end of the address with a colon as you would in a browser, e.g. http://myproxy:8080

* Proxy Username - This is only required if your proxy requires username/password authentication.

* Proxy Password - This is only required if your proxy requires username/password authentication.

## Searching openEQUELLA
EMU allows you to search openEQUELLA in all the ways you can query for items in openEQUELLA plus some additional ways.
### Writing a Search Query
Queries are specified on EMU’s Search tab.
#### Freetext Query
The freetext query conducts the same query as a basic text search in openEQUELLA. Any schema fields in openEQUELLA configured for freetext indexing plus textual attachments will be included in the search.

The query can contain simple keywords, phrases (using double quotes, e.g. "Australian animals"), boolean phrases and wildcards (* or ?), e.g. ''cats AND dog*'' will only match items that contain ''cats'' and any word beginning with ''dog''.

The full syntax for a freetext query is documented in openEQUELLA under the “More searching help and features...” link under the basic search edit box.

#### XML Query
An XML query allows you to query on specific schema fields in openEQUELLA that have been configured to be indexed for Power Searches. For those familiar with database queries, an XML Query is very similar to the WHERE clause of an SQL query.
###### Simple XML Query
At a minimum, an XML Query must start with a “WHERE” keyword and followed by an XPath, a comparison operator and a comparison value:
```
WHERE [XPath] [comparison operator] [comparison value]
Example:
WHERE /xml/item/itembody/color is 'blue'
```
The four components of the statement should be separated by whitespace such as spaces, tabs or linefeeds.

**XPath**

An XPath is a similar to a directory path to a folder on a computer’s file system. 

Following the path from the first node (called the “root” node), the paths to examples fields in the hierarchy:
```
/xml/item/itembody/name
/xml/item/itembody/description
```
XPaths to XML attributes are similarly identified but with the attribute name preceded with an ‘@’ symbol. For example:
```
/xml/metadata/@identifier
```
In referencing XPaths in EMU to openEQUELLA metadata all XPaths should start with /xml/. 

**Comparison Operator**
The following comparison operators are available: Comparison operator Purpose

* is - For matching against string comparison values
* is not - For returning all results that do not match against a string comparison value
* like - For matching against strings. Can utilize the ‘*’ wildcard operator within strings or on the end of strings
* not like - For returning all results that do not match against the specified LIKE comparison
* in - For matching against any members of a group of comparison values
* not in For returning all results that do not match any of members in a group of comparison values
* Greater Than Arrow -  For returning results where a date field is later than a comparison date value
* Less Than Arrow  - For returning results where a date field is earlier than a comparison date value


**Comparison Value**
Comparison values are surrounded in single quotes such as:

'blue houseboat'

They can contain an asterisk symbol which is used in conjunction with a LIKE comparison operator, for example:
```
WHERE /xml/item/itembody/name LIKE 'blue house*'
```
A group of comparison operators can be formed with parenthesis and commas and compared to with an IN operator. For example:
```
WHERE /xml/item/status IN ('published', 'under review', 'in development')
```
##### Check if a Schema Field Exists
You can return items where a field exists with an EXISTS keyword, e.g.:
```
WHERE /xml/item/itembody/is_complete EXISTS
```
The converse statement is as follows:
```
WHERE NOT /xml/item/itembody/is_complete EXISTS
```
##### Combining Multiple Statements
By using the keywords AND and OR and by using parenthesis multiple statements can be combined to either narrow down searches or broaden searches
Example 1:
```
WHERE /xml/item/itembody/name LIKE 'blue house*'
OR /xml/item/itembody/color is 'blue'
```
Example 2:
```
WHERE /xml/item/itembody/name LIKE 'blue house*' AND /xml/item/status IS 'published'
```
Example 3:
```
WHERE (/xml/item/itembody/name LIKE 'blue house*' OR /xml/item/itembody/color is 'blue') AND /xml/item/status IS 'published'
```
#### Full Syntax Reference
Following is a reference for the full syntax of the XML query:
```
WHERE STATEMENT ::= "where"? 
BOOLEAN_EXPR BOOLEAN_EXPR ::= OR_BOOLEAN_EXPR 
OR_BOOLEAN_EXPR ::= AND_BOOLEAN_EXPR ("or" 
AND_BOOLEAN_EXPR)* AND_BOOLEAN_EXPR ::= CLAUSE ("and" CLAUSE)* 
CLAUSE ::= "not" CLAUSE | BRACKETS | COMPARISON | EXISTS_CLAUSE 
BRACKETS ::= "(" BOOLEAN_EXPR ")" 
COMPARISON ::= XPATH COMPARISON_OP COMPARISON_RHS 
EXISTS_CLAUSE ::= XPATH "exists" 
XPATH ::= "/" (ALPHA | NUMBER | [/._:@])+ 
COMPARISON_OP ::= "=" | "is" | "<>" | "is not" | "<" | "<=" | ">" | ">=" | "like" | "not like" | "in" | "not in" 
COMPARISON_RHS ::= "null" | NUMBER_VALUE | STRING_VALUE | GROUP_VALUE 
STRING_VALUE ::= "'" STRING "'" 
NUMBER_VALUE ::= NUMBER+ 
GROUP_VALUE ::= "(" STRING_VALUE ("," STRING_VALUE)* ")" STRING ::= (ALPHA | [0-9] | ...)* 
ALPHA ::= [a-zA-Z] 
NUMBER ::= [0-9]
```
#### Collections Filter
The “Collections to query” panel allows you to conduct your search of either all collections the user account has access to or a specific subset.
Select either “All Collections” or “Just these Collections”. If selecting “Just these collections” click the Add button to choose collections from a list of collections available to the user specified on the Connection tab.

#### Sort Order
The Order field can be used to specify what order the results will be returned in. The options are “Rank”, “Date Modified” and “Name”.
“Rank” returns the results in order of relevance to the query. “Name” returns the results in alphabetically order by name.
Order by Name and Date Modified can be reversed by checking the Reverse Order checkbox.
#### Include “Non-live” Items
By default only live items are returned by a query. By checking the Include Non-live Items checkbox, all items will be returned regardless of an item’s status: live, draft, in moderation etc. This checkbox will not override the user’s security privileges in determining what items to return.
#### Retrieving an Item by its ID
If a single item needs to be retrieved and the UUID of the item is known then the fastest and most accurate way is to do so using the Item UUID field:

Upon clicking Search, if an item is found with the UUID specified it is returned in the search results.
An item version can also be provided in the Ver field. The following behavior exists for the Ver field:
* Empty - All available versions irrespective of item status. Versions of openEQUELLA earlier than 5.2 will only return all versions (irrespective of item status) up to and including the latest LIVE version.
* Integer greater than zero (e.g. “1”, “2”, “3” etc) - The matching version if it exists
* “0” - The latest live version. If no live version exists then the first version irrespective of item status.
* “-1” - The latest version irrespective of item status. 

#### Search Results Columns
The columns returned in the Results tab from a query are specified on the Query tab.

Beside the “Columns to Include in Search Results” label three check boxes are available: Name, ID and Version. Checking these boxes will include the columns in the search results display.

Below the “Columns to Include in Search Results” label is an editable grid for specifying additional columns to include in the search results. Use the up and down arrows to position the XPath in the desired column position. Both system and custom metadata nodes can be specified here.

You can add “aliases” to XPaths here to display friendly column headings in the Results tab. You can do this with the AS keyword:

When the search is executed the selected columns will be presented in the search results with corresponding aliases if used.


To split multi-value fields within a column specify a string (e.g. “|” or “, “) in the “Delimiter for multi-value fields” text field. To split with tabs use the character sequence “\t” and to split by linefeeds/carriage returns use the character sequence “\n”.

### Performing a Search
Clicking the Search button will send the query to the openEQUELLA server, bring into focus the Search Results tab and populate the results grid.

Depending on the nature of the query this may take some time. At any point during the data retrieval process you can click the Stop Processing button in the tool bar.
### Managing the Search Results
When the grid on the Search Results tab is populated with a result set of items you can form a selection of items by checking and un-checking the check boxes in the first column. The Select All, Unselect All and Invert Selection buttons can be used to make broad selections across the entire result set.

The status bar at the bottom of the window provides a counter of the number of items in the result set and the number of selected items.

Clicking the Clear Unselected Results button in the toolbar will clear all the unselected items from the result set.

By clicking on the column headings you can re-sort the items by the column’s XPath field. Clicking the same header will toggle the direction of the sorting.

#### Automatically Selecting Items by Search Results Columns
Search results columns support full XPath 1.0. Additionally, by checking the “Select” checkbox beside a column EMU will automatically select an item if its metadata contains any nodes that match the XPath. Selecting more than one column will mean that the item will only be selected if at least one matching node is found for every selected column (effectively AND’ing all the selected columns/XPaths).

For example, the following column XPaths instructs EMU to automatically select any items that contain both local and remote attachments (note the checked Select checkboxes):

The resulting search results include automatically selected items where the criteria for both remote and local attachments is met.
### Exporting and Loading Results
#### Exporting Search Results to CSV
By clicking the Export Selection or Export All buttons you can export items to a Comma Separated View (CSV) text file. The first row of the CSV will contain headers matching the column headers in the search results grid.
#### Loading Results from CSV
You can populate the results tab with items listed in a CSV instead of populating it from a search query. The CSV should have a minimum of four columns and these columns should be in the same format as the first four columns in a CSV exported with EBI (see the previous section). These four columns should have the column headings Selected, Item Name, Item ID and Ver. 

EMU will ignore any additional columns in the CSV beyond the minimum four columns.

Though the second column of the loaded CSV is item names they are ignored by EMU and need not necessarily match the actual names of the corresponding items.

Load the CSV by clicking the Browse button and opening the CSV. Alternatively, type path of the CSV file into the CSV text box and clicking Reload. The path can either be an absolute path to the CSV or a relative path to the CSV file from the folder of the last opened or saved profile.

By having “Load with Profile” checked the CSV specified in the CSV text box will automatically be loaded when the profile is open.

### Viewing and Modifying Metadata from Search Results
By double-clicking cells in the Search Results tab you can view additional metadata and modify custom metadata.

Double-click the row header cell of a row and a form will be displayed which presents the corresponding item’s entire XML metadata.

Click Edit and the item’s XML can be edited directly. The Hide System Metadata checkbox allows system metadata to be hidden or revealed. Note that much of EQUELLA’s system metadata cannot be manually updated and any changes made to such metadata will be overwritten by openEQUELLA.

Double-click to view and edit item’s entire XML metadata

Up down arrows allow the form to load successive items in the search results.

Double-click a cell within a row and a form will be displayed which shows the entire text of the
corresponding metadata field. If the field is a custom field (as opposed to a system field) the form
will include an Edit button. In this case you can click the Edit button, edit the field’s text and click Save to write it to the item’s metadata.

If a node does not exist “null” will be displayed. If this is the case, and the node is a custom filed,
editing the field will create the node (element or attribute) and any required parent elements.
Parent elements are created using the same logic as the Update Text modifier with the Create node
if it does not exist checkbox checked 

##  Bulk Modifying Item Metadata
### Overview
EMU allows you to update the metadata of selected items returned from a query. It does this by
processing the selected items one by one in the order they are listed in the Search Results tab. Each item is passed through one or more “modifiers”. EMU supports different types of modifiers, each
one designed to perform a specialized type of change to an item’s metadata.

### Modifiers
The Update tab provides a list of Selected Modifiers that will be applied to the bulk update. Each
type of modifier has different properties.

To add a modifier to the list of Selected Modifiers on the Update tab, under the Available Modifiers
label, a column of buttons are provided for adding Modifiers to the Selected Modifiers table.

Each selected item is processed by all the enabled modifiers in the Selected Modifiers list in the order of the list. Modifiers can be edited, reordered and removed with the buttons to the right of the Selected Modifiers list.

When adding or editing a modifier a modifier-specific form is displayed with fields applicable to that modifier.

Most modifiers have the following standard fields and buttons:
* Check - This button will check that the fields have been completed correctly
* Enabled - This checkbox should be checked for the modifier to be executed in the bulk update
* Ok - This button closes the modifier form and saves the modifier to the list of Selected Modifiers
* Cancel - This button closes the modifier form without saving any changes

Following are the types of modifiers supported in EMU.
#### Modifier: Update Text
The Update Text modifier populates a text node of a metadata field. Any existing text is replaced. The modifier has the following fields:
* XPath - An XPath to the node (either an element or an attribute) that will be populated with the required text
* Create node if it does not exist - When this is checked if the node described by XPath above does not exist EMU creates the node and any necessary parent nodes. EMU does this by creating the necessary subtree starting from the last existing node in the XPath. For example if /xml/item already exists in the metadata then an XPath of /xml/item/role/author would see the nodes role and author created under the existing item node.
* Text - The text to populate the node referenced by the specified XPath

#### Modifier: Add XML
The Add XML modifier appends an XML document fragment to a specified node. Modifier Field Description
* XPath - An XPath to the node (elements only, not attributes) that will have the XML fragment appended to it
* XML Fragment - The XML fragment that will be appended to the node specified by XPath
* Create node if it does not exist - When this is checked if the node described by XPath above does not exist EMU creates the node and any necessary parent nodes. EMU does this by creating the necessary subtree starting from the last existing node in the XPath. For example if /xml/item already exists in the metadata then an XPath of /xml/item/role/author would see the nodes role and author created under the existing item node.

XML fragment can be any valid freestanding, well-balanced (not necessarily well-formed) portion of an XML document. Following is an example of an XML Fragment:
```
<new_child_node id="A543828"> 
  <value/> 
    <categories> 
      <category>high</category> 
      <category>medium</category> 
    </categories> 
  </new_child_node> 
  <new_child_node id="H738929"> 
      <value/> 
      <categories/> 
   </new_child_node>
```
Note that the XML does not need to be well-formed so the root element does not need to be unique. In the example above there are two new_child_node elements. However, all tags must be closed.

#### Modifier: Rename Node
The Rename Node modifier renames the last node of an XPath.

* Current XPath - An XPath to the node (either an element or an attribute) that will be renamed with the name specified in New Node Name
* New Node Name - The new name that the node specified in Current XPath will be renamed to
The Rename Node modifier will only rename the last node of the XPath. For example, the modifier will only rename the status element of the XPath /xml/item/itembody/status.

Either elements or attributes may be renamed. When renaming attributes the New Node Name should not be prefixed with the “@” symbol.

#### Modifier: Remove XML
The remove XML modifier removes a node and all its child nodes, i.e. an entire subtree will be deleted.
Modifier Field: XPath - An XPath to the node (either an element or an attribute) that will be removed from the item’s metadata

### Modifier: Copy XML
The Copy XML modifier copies an entire subtree and appends copies of it to other nodes in the XML document. Modifier Fields include:
* Source Node - An XPath to the node (must be an element, not an attribute) that will be copied
* Target XPath - An XPath to the nodes (must be elements, not attributes) that the copied node will be appended to
* Create node if it does not exist - When this is checked if the node described by XPath above does not exist EMU creates the node and any necessary parent nodes. EMU does this by creating the necessary subtree starting from the last existing node in the XPath. For example if /xml/item already exists in the metadata then an XPath of /xml/item/role/author would see the nodes role and author created under the existing item node.

The entire subtree (i.e. all child nodes both elements and attributes) will be copied. If more than one match is found for the Source Node all matches will be copied and appended to all target nodes.

#### Modifier: Replace Text
The Replace Text modifier will search each matching node for a matching substring and replace it with new text. Modifier Fields include:
* XPath - An XPath to the node (either an element or an attribute) that will have text replaced in it.
* Find - The text to search for
* Replace With - The text to replace the found text with

Every occurrence of the matching text within the matching node’s text will be replaced with the Replace With text.

#### Modifier: XSLT
The Extensible Style sheet Language Template (XSLT) modifier transforms the entire item’s metadata using an XSLT. Modifier Fields include:
* XSLT - The XSLT document to transform the item’s metadata XML document with

This modifier requires XSLT skills and often involves significant effort in authoring and testing.

The XSLT modifier supports XSLT 1.0 the specification of which can be found at http://www.w3.org/TR/xslt.

#### Modifier: Script
The Script modifier executes a JScript script. It allows determination of computed values, flow control of other modifiers and the ability to read and modify an item’s metadata. Modifier Fields include: 
* Script - The script to be executed
* Run Only Once - When checked the script is only run on the first selected item

This modifier is a very powerful EMU feature but requires some programming knowledge. 

### Importing and Exporting EMU Modifiers
EMU modifiers can be transferred from one EMU installation to another by using the Export and Import buttons above the Selected Modifiers list. The Export button will allow you to save an xml file that containing all the modifiers in the list. This file can be imported into EMU using the Import button. The imported modifiers will be added below the existing modifiers.

### Selecting Items to Modify
Once you have specified the required modifiers for your bulk update specify what items should be bulk updated.

By using the selected Results / All Results radio buttons you can choose to either update all items displayed in the Search Results tab or only selected items.

By checking the “Of the above options only the first” checkbox beneath the All Results radio button you can choose to only update the first few items. In this event, specify the number of items to update in the edit box beside the field. This feature can be useful for testing and verifying your modifiers on a small sample before performing a full run.

By checking “Unselect results as they are processed” items will be unselected on the Results tab as they are updated.
### Executing a Bulk Modification Run
By clicking the Run Bulk Update button EMU will start processing and modifying the specified items.
```
Warning: There is no undo feature of a bulk modification. For this reason it is highly recommended that prior to performing a bulk modification on a production server it is first run on a test server with mirrored or similar data and the outcome verified.
```
EMU will automatically select the Log tab and display the progress of the bulk update. Each item will be processed by each modifier and then saved back to openEQUELLA.

What is displayed in the log window can be controlled prior to performing the run using the Output Format drop-down field on the Update tab.

Writing to the log screen requires relatively high CPU resources on the workstation that EMU is installed and it can slow the bulk update process down. This performance overhead is dependent on the number of metadata fields in each item, the amount of text in metadata fields and the number of items being processed. To optimize the balance between information and performance several display options are available. The output formal options are as follows:
* Indented XML (large) - Displays the full XML metadata of each item both prior to updating and post updating. This option is particularly useful for authoring and testing your modifiers as it provides the most information. This option also consumes the most CPU and is not recommended for large runs with large amounts of metadata as the overall run may take up to 50% longer than the “No XML (compact)” option.
* Unindented XML (medium) - Displays the full XML metadata of each item both prior to updating and post updating. The XML is unindented and presented as a block of text. This option has no performance benefits over the “Indented XML (large)” option but allows more items to be fit in the one screen.
* No XML (compact) - Displays no XML at all. This option provides little information but is the highest performance option. This is a useful option for full runs of large numbers of items.

During a bulk processing run you may stop the run by clicking the Stop Processing button on the toolbar. If you need to continue the run from that point take note of which item was last processed as there is no automatic way to continue the run from where it was interrupted.

The Log tab has a maximum size limit and once it reaches that size it will start truncating the oldest events to make room for new ones. You can clear the log display by clicking the Clear Log button on the toolbar. By checking the checkbox “Clear log tab on update” the log display will be automatically cleared with each run. This checkbox does not affect log files.

### Executing a Test Bulk Modification Run
Whilst you are authoring and testing modifiers use the Test Bulk Update to check how your modifiers behave. This command processes in the same way as the Run Bulk Update but without saving the item to openEQUELLA. This feature allows you to view the updated XML in the display log without the chance of updating items incorrectly.

Because it skips the step of writing back to openEQUELLA, this process is faster than the Run Bulk Update process.

### Copying Item Files to Staging
In most cases your bulk metadata tasks will have no effect on any physical files attached to items. However, in some rare cases there will be a need for item files themselves to be modified. Though EMU cannot do this openEQUELLA expert scripts, triggered by an EMU item save, can. In such cases openEQUELLA needs to be instructed by EMU to copy the item files to a “staging” area of the filestore where the files can be modified by openEQUELLA.

File copying can be intensive for the openEQUELLA server particularly if there is a large volume of files attached to each item (as is the case with video attachments) so by default EMU does not instruct openEQUELLA to copy item files to staging. If file modification is required check the Copy item files to staging checkbox.


Only check this checkbox if you understand its purpose and you require this behavior. This checkbox has no effect during a test run.

### Log Files
EMU can write log files of test or real bulk update runs. To do this, firstly specify a location for the log files to be written by completing the Log Files Folder field on the Connection tab. Then check the Create log files checkbox on the Update tab.

Log files are created as text files populated with the same content as the log display set to an output format of “Indented XML (large)”. Text files are named the date and time of when the bulk update run was started. Once a log file reaches 10MB it is closed and a new file is started with the same name plus an incremental integer.

### Scripting in EMU
Beyond simple modifiers, EMU provides programming capability to bulk update operations through the incorporation of a JScript programming engine. With EMU scripting you can do complex manipulation of item metadata in many ways similar to Expert scripts in openEQUELLA.

EMU scripting code is used to call the EMU object model via Script modifiers and via “script tags” within other modifiers. Using a combination of these aspects of EMU it is possible to make complex modifications to openEQUELLA items in bulk.

Following is an example of a Script modifier that simply outputs text to the event log for each item that is processed during a bulk run.

Obviously, this script alone is of little use but the example is a good introduction to how scripting can be incorporated in EMU.

#### Script Syntax
The language used in EMU scripting is JScript (http://msdn.microsoft.com/en-us/library/hbxc2t98.aspx). JScript is an ECMA standard language very similar in syntax to JavaScript. For most EMU-related purposes JavaScript examples, tutorials and references translate perfectly well to JScript.

Note that EMU does not run in a browser and therefore does not implement the Browser Objects Reference or the HTML DOM Objects reference. For this reason objects such as Location, Window and Document, which are commonly found in JavaScript examples on the Internet, are not applicable in EMU. Note also that EMU does not implement the openEQUELLA scripting object model as it is not running within EQULLA. Instead, EMU implements its own object model.

There is much documentation available on the Internet regarding the JScript language. Here is a small introduction.
Local variables must be declared but are un-typed e.g.:
```
var aBird = "Robin";
```
Text to the right of a double forward slash is treated as a comment e.g.:
```
// Comment your code thoroughly
```
A conditional statement is formatted as follows:
```
if (volume >= 11)
{
message = "Turn it down!";
}
```
A simple loop is formatted as follows:
```
for (var i = 0; i < 10; i++)
{
message = "Count: " + i;
}
```
#### The EMU Object Model
EMU scripts have EMU-specific objects available to it for manipulation of items and entities in EMU. These objects are automatically pre-instantiated and can be included in any EMU script. Object Names include: 
* logger - An object that provides control over the event log.
* xml - An object that allows reading and updating of an item’s XML.
* modifiers - An object that allows control of the execution of modifiers for each item being processed.
* vars - An object for persisting data from one script to the next.

#### Script Modifiers
Script modifiers can be added in much the same way as other modifiers.

Unlike other modifiers, however, script modifiers themselves do not intrinsically modify items but rather simply execute script. For example, if a script modifier simply output to EMU’s event log using the logger variable then running the modifier alone would not make any changes to the item metadata. Only if the script included data modifying code would the item’s metadata be modified.

When the Run Only Once check box is checked the script modifier is executed only once for each bulk update run. This is useful for initializing variables in the vars object that are global for the entire bulk update run.

In the main form of EMU the first non-blank line of the script is displayed so it is useful to make the first line of a script a comment that summarizes what the script does in a concise statement. EMU trims of leading double slashes in the display if they are present.

## Saving and Loading Profiles

Profiles allow you to save or load your EMU settings.

By clicking the Save Profile button on the toolbar, or clicking control-S on your keyboard, you can save a  ```*.emu``` file which stores all of the current EMU settings.

By clicking the Open Profile button you can find and select an existing ```*.emu``` file which will replace the current EMU settings with the settings saved in the ```*.emu``` file.

Clicking the Clear Settings button in the toolbar will clear all of the current EMU settings.

You can associate ```*.emu``` files with EMU which will allow you to load profiles simply by double-clicking .emu files in Windows. The easiest way to do this is double-click an existing .emu file and select EMU in the Open With dialog.

Make certain the “Always use the selected program…” checkbox is checked. Then use the Browse… button to find and select the emu.exe file on the workstation. It should be in the folder specified during the installation of EMU (e.g. c:/program files/emu/emu.exe).

EMU profile files are XML files and can be edited outside of EMU. However, passwords and shared secrets are encrypted and can only be edited with EMU.
```
Warning: A note on security and EMU profiles. Only share EMU profile files with users who are authorized to administer items on that openEQUELLA institution. An EMU profile file confers the EMU user the power to view and make any changes to metadata on all items accessible by the user account saved in the profile.
```
## Troubleshooting

#### Error on XML queries: “Found '’' but expecting a single quote”
Check that your single quotes around strings are not “Smart Quotes”. These can be introduced by pasting in quoted strings from Microsoft Word which often replaces straight quotes with Smart Quotes.

#### Cannot change Name or Description fields of items
Check that you are not trying to update either /xml/item/name or /xml/item/description. These are system fields and cannot be updated with EMU. Instead, to modify an item’s name or description update the custom nodes that are identified in EQUELLA’s Schema Editor as the item’s name and description 

#### Receive an error “The request channel timed out while waiting for a reply…” during a bulk update
This may occur if the openEQUELLA collection that the item being edited belongs to is opened for editing in the Admin Console. It is important to ensure that collections being bulk updated are not opened in the openEQUELLA Admin Console.
#### Metadata not updating in openEQUELLA though EMU logs say it has
Double-check that you are not performing a test run.

This may occur if you are attempting to update system metadata. If you attempt to update system metadata (e.g. item ID or item status) in most cases openEQUELLA will overwrite your change when the item is saved.

## Appendix A Example Modification Routines
### Adding Values to a Repeating Field
You may wish to add values to a list of values in your metadata (e.g. values that are created by a Checkbox Group control in an openEQUELLA wizard). The Add XML modifier can be used to achieve this by simply specifying a fragment of xml that consist of the elements you wish to add.

For example, say you wish to add three colors to a list of colors e.g. you want to turn this:
```
<xml>
<itembody>
<colors>
<color>blue</color>
<color>red</color>
</colors>
</itembody>
...
</xml>
```
into this:
```
<xml>
<itembody>
<colors>
<color>blue</color>
<color>red</color>
<color>white</color>
<color>yellow</color>
<color>green</color>
</colors>
</itembody>
...
</xml>
```
In the Add XML modifier put the following into the xpath field:
```
/xml/itembody/colors
```
and the following into the XML Fragment field:
```
<color>white</color>
<color>yellow</color>
<color>green</color>
```
The modifier will then add the three extra color elements into the colors node.

If some of your items already had some of those colors, and you didn’t want to add duplicate values, then in your Selected Modifiers you could precede the Add XML modifier with a Remove XML modifier with an xpath that checked for any of the possible values e.g.:
```/xml/itembody/colors/color[text()='white' or text()='yellow' or text()='green']```

### Moving Elements
There is no EMU modifier to specifically move elements in an openEQUELLA item however this can be easily achieved by a Copy XML modifier followed by a Remove XML modifier. For example, say in the following example you wish to move the keyword elements to under the keywords element:
```
<xml> 
<itembody> 
<keywords> 
 </keywords> 
 <keyword>refactor</keyword> 
 <keyword>reposition</keyword> 
 </itembody>
... 
</xml>
```

The first modifier in your routine should be a Copy Modifier with the following parameters:

Source Node: /xml/itembody/keyword 
Target XPath: /xml/itembody/keywords

This modifier on its own would produce the following XML:
```
<xml> 
<itembody> 
<keywords> 
<keyword>refactor</keyword> 
<keyword>reposition</keyword> 
</keywords> 
<keyword>refactor</keyword> 
<keyword>reposition</keyword> 
</itembody>
... 
</xml>
```
The second modifier in your routine should be a Remove XML with the following parameter:

XPath: /xml/itembody/keyword

This will trim the original keywords elements from the XML output from the Copy XML modifier resulting in the following XML:
```
<xml> 
  <itembody> 
    <keywords>
      <keyword>refactor</keyword> <keyword>reposition</keyword> 
   </keywords> 
 </itembody>
 ... 
</xml>
```
### Creating Empty Elements
Creating empty elements can be done by using the Update Text modifier with Update Text left blank and the Create Node check box checked. For example, using the Update Text modifier to create an empty element will generate the following xml:
```
<xml> 
  <metadata>
    <mynode/> 
      </metadata>
    ... 
</xml>
```
### “Touching” Items
In many cases it is useful to resave items in openEQUELLA without making any changes (also known as “touching” items). Examples of this are the need to re-index a subset of items or the need to execute Expert scripts. This is easily accomplished with EMU by simply performing a bulk update without any enabled modifiers.

### Regular Expression Matching
Whilst the Replace Text modifier ably performs simple search and replace functions, you may wish to perform more complex searches across text based on text patterns. Using Script modifiers it is possible to leverage .NET’s regular expression engine.

The following is an example of a Script modifier that performs the regular expression term\S\S on a hard-coded string. This technique could just as easily, for example, be employed on text retrieved by one of the functions in the xml object.


The above script iterates through each match of the regular expression in the string and determines the matching text and its start and end positions within the string. 
### Generating UUIDs
It is possible with EMU scripting to produce UUIDs. Amongst other uses, this can be needed when working with attachment metadata.

## Appendix B XPath Notation
XPath is a syntax for referencing parts of an XML document. It uses path expressions to navigate in XML documents. XPath is a W3C recommendation and EMU supports XPath version 1.0. The specification for XPath 1.0 can be found at http://www.w3.org/TR/xpath

In EMU XPath expressions allows you to reference nodes in the XML metadata of an individual item.
### XML Metadata
Following is an example of an item’s metadata. 
```
<xml>
<item id="f980a911-010d-35af-f480-deca7fd5530c" itemdefid="6e85ce64-9a11-c5e7- 69a4-bd30ec61007f" itemstatus="live" key="2" version="1"> 
<name>openEQUELLA web site</name> 
<description> With product and service information, eNewsletters and links to support materials, the openEQUELLA web site is a key resource for new clients. Come and check it out! </description>
... 
</item> 
<metadata> 
<lom> 
<general> 
<keyword> CompanyName north america europe group TLEG TLEI TLEE TLENA 
</keyword> 
</general> 
<technical> 
  <format>other</format> 
</technical> 
</lom> 
<name>openEQUELLA web site</name> 
<description> With product and service information, eNewsletters and links to support materials, the openEQUELLA web site is a key resource for new clients. Come and check it out! </description> 
... 
</metadata> 
</xml>
```
Nodes can either be elements of attributes. An element is a type of node that can contain either text, attributes or more elements (“child” elements). 

Elements are characterized by an opening tag followed by text and then a closing tag e.g. ```<myelement>Some text</myelement>```. An element may have no text in which case it may be specified either as ```<myelement></myelement>``` or simply ```<myelement/>```. Both these formats are equivalent.

Attributes are essentially named values, for example version=”1”. In this case version is the attribute name and 1 is the attribute value. Attributes can only exist within an opening tag of an element e.g. ```<item version=”1”>``` 

Elements can contain more elements inside them. This is often called “nesting elements”: 
```
<major_element> 
<minor_element> 
  some text 
  </minor_element> 
</major_element>
```

In the above example the minor_element element is nested within major_element. major_element has no text and minor_element has the text “some text” (neither element has any attributes in this example). In this context major_element is often called the “parent node” and minor_element the “child node”.

### Accessing Nodes with XPath Expressions
Nodes in an XML document can be accessed with XPath expressions very similar to how files and directories can be accessed in a file system with file paths. At its simplest an XPath expression should reference each parent node above the node in question. Consider the following example:
 ```/xml/item/name```
 
The above XPath will reference the name element which is a child of item which in turn is a child of xml.
```
<xml> 
<item id="f980a911-010d-35af-f480-deca7fd5530c" itemdefid="6e85ce64-9a11-c5e7- 69a4-bd30ec61007f" itemstatus="live" key="2" version="1"> 
<name>openEQUELLA web site</name>
...
</item>
...
</xml>
```

Attributes can be accessed in the same way with the qualifier that the attribute’s name should be prefixed with the “@” symbol, e.g.:
```/xml/item/@itemstatus```

In EMU all XPaths should be a full XPath from the root of the XML document. This means that all XPaths in EMU should start with /xml/.

### Selecting Particular Elements from Multiple Elements
openEQUELLA supports repeating metadata fields. 
```
<xml> 
<metadata> 
<subject_areas> 
<subject>Mathematics</subject> 
<subject>Science</subject> 
<subject>English</subject> 
<subject>Arts</subject> 
<subject>Liberal Arts</subject> 
</subject_areas>
... 
</metadata> 
</xml>
```
In the above example the /xml/metadata/subject_areas/subject element has multiple instances i.e. it repeats. Each instance has a different text value, “Mathematics”, “Science”, “English”, “Arts” etc. This type of XML is easily generated by openEQUELLA by using any controls that have multiple selection capabilities. Controls with this capability include Check Box Group, Shuffle Box, Shuffle List, Taxonomy Control and the Repeater.

XPath allows you to specify select elements from a range of elements: The following XPath selects the second ```<subject>``` element:

```/xml/metadata/subject_areas/subject[2]```

The “[2]” denotes that we are referencing the second ```<subject>``` element.

The following XPath selects all ```<subject>``` elements that have text that equals “Arts”
```
/xml/metadata/subject_areas/subject[text()='Arts'] 
```

Here are some useful ways of retrieving select elements from an item’s metadata: 

```/xml/metadata/subject_areas/subject``` All subject elements that are children of subject_areas

```/xml/metadata/subject_areas/subject[2]``` - The second subject element

```/xml/metadata/subject_areas/subject[text()='Arts']``` All subject elements where the element’s text equals “Arts”

```/xml/metadata/subject_areas/subject[contains(., 'Arts')]```- All subjec elements where the element’s text contains the text “Arts”

```/xml/metadata/subject_areas/subject[text()='Arts' or text()='Liberal Arts']```- All subject elements where the element’s text equals “Arts” or “Liberal Arts”

```/xml/metadata/attachments/attachment[substring(file, string-length(file) - 3) = '.zip']``` -  All file elements where the element’s text ends with the text “.zip”

```/xml/metadata/contributors/contributor[last_name='Smith']``` -All contributor elements with a child element last_name whose text equals “Smith”

```/xml/metadata/contributors/contributor[last_name='Smith' or last_name='Smythe']```
- All contributor elements with a child element <last_name> whose text equals “Smith” or “Smythe”
 
```/xml/metadata/contributors/contributor[last_name='Smith']/@id``` - The id attribute of all contributor elements with a child element last_name whose text equals “Smith”

```/xml/metadata/contributors/contributor[last_name='Smith' and first_name='Sam']/@id``` - The id attribute of all contributor elements with a child element last_name whose text equals “Smith” and a child element <first_name> whose text equals “Sam”

```/xml/metadata/*``` -All child elements of metadata

``` /xml/metadata/*|@*``` - All child elements and attributes of metadata

```/xml/metadata//*``` All descendent elements of metadata

```/xml//@lang``` -  All lang attributes in the document regardless of where they appear

```/xml/metadata/*[@*]``` All child elements of metadata that have one or more attributes

```/xml/item/attachments/attachment[not(thumbnail)]/file``` - The file element of all attachments that do not have a thumbnail element

### Appendix C: EMU Object Model Reference

* logger - An object that provides control over the event log.
* void logger.log(string message) - Appends text to the event log in the default color. The message will be updated to the log on screen and/or the file log depending on the log settings in EMU.
*  void logger.log(string message, string color) - Appends text to the event log in the specified color. Allowed colors are anything from the .NET color Structure (see http://msdn.microsoft.com/en-us/library/system.drawing.color.aspx). Examples for color are “green”, “blue”, “purple”, “red” etc. The message will be updated to the log on screen and/or the file log depending on the log settings in EMU.
* void logger.log(string message, string color, int loggingOptions) - 
Appends text to the event log in the specified color and to the specified media. See above for the color parameter. Logging options are:

0 – Display only

1 – File only

2 – Display and file

Using a value of 1 or 2 will only output to file if EMU logging is set for logging to file.

* modifiers - An object that allows control of the execution of modifiers for each item being processed
* bool modifiers.skipNext - When set to true the modifier immediately following the one the script is in will be skipped regardless of whether it is enabled or disabled.
*  bool modifiers.skipRemaining - When set to true all modifiers following the one the script is in will be skipped regardless of whether they are enabled or disabled.
* bool modifiers.cancelSave 0 When set to true the item will not be saved.
* xml - An object that allows reading and updating of an item’s XML.
* string xml.getNode(string xpath) -  Returns the value of the first matching node of the given XPath. Returns an empty string if no matches are found.
* ```ArrayList<string> xml.getNodes(string xpath)``` - Returns a list of values for the given XPath.
* ```<XMLWrapper> xml.getSubtree(string xpath)``` - Returns the first occurrence of an element for the given XPath. The object returned is of the same type as xml and null if no matches are found.
* ```ArrayList<XMLWrapper> xml.getSubtrees(string xpath)``` - Returns a list of objects of the same type as xml for the given XPath.
* void xml.updateText(string xpath, string updateText) - Modifies the item metadata as the Update Text modifier does.
* void xml.updateText(string xpath, string updateText, bool createNode) - Modifies the item metadata as the Update Text modifier does. If createNode is true then elements in the XPath will be created as required.
* void addXml(string xpath, string addXML) - Modifies the item metadata as the Add XML modifier does.
* void addXml(string xpath, string addXML, bool createNode) - Modifies the item metadata as the Add XML modifier does. If createNode is true then elements in the XPath will be created as required.
* void renameNode(string currentXpath, string renamedNode)- Modifies the item metadata as the Rename Node modifier does.
* void removeXml(string xpath) - Modifies the item metadata as the Remove XML modifier does.
* void copyXml(string sourceNode, string targetXpath) - Modifies the item metadata as the Copy XML modifier does.
* void copyXml(string sourceNode, string targetXpath, bool createNode) - Modifies the item metadata as the Copy XML modifier does. If createNode is true then elements in the XPath will be created as required.
* void replaceText(string xpath, string findText, string replaceWithText) - Modifies the item metadata as the Replace Text modifier does.
* void runXslt(string xslt) - Modifies the item metadata as the XSLT modifier does.
* string xml.asString() - Returns the XML of the item as an unformatted string.
* string xml.asFormattedString() - Returns the XML of the item as a formatted string including indenting and carriage returns.
* XmlDocument dom - A property which is a reference to the underlying .Net XmlDocument (see http://msdn.microsoft.com/en-us/library/system.xml.xmldocument(v=vs.110).aspx)
* vars A global object of type HashTable (see http://msdn.microsoft.com/en-us/library/system.collections.hashtable(v=VS.90) ) that is created at the beginning of each bulk update run.
This variable is provided to allow script author’s to create variables that have scope across modifiers and across items during a bulk update run. For example one script modifier might create a “variable” using the code such as
```vars["authorAddress"] = "54 Brooklyn Drive, Boston, MA 02111";```
then a subsequent modifier could access the variable using code such as
```xml.updateText("/xml/metadata/author/address", vars["authorAddress"]);```

If the Run Only Once checkbox on the modifier of the first script is checked then vars["authorAddress"] will be assigned once for the entire bulk update run. This is efficient for constant values. It is also useful for variables that are dependent on their position amongst other modifiers or items (e.g. a zero-based counter for a script that assigns an incremental unique identifier to each item).
