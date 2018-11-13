# Bulk Importer User Manual

[INTRODUCTION](#introduction)

[INSTALLATION AND START UP](#installation-and-start-up)

[QUICK START GUIDE](#quick-start-guide)

[BASIC SETTINGS](#basic-settings)

[CSV FILE FORMAT](#csv-file-format)

[RUNNING THE IMPORT](running-the-import)

[APPENDICES](#appendices)

## Introduction
The openEQUELLA Bulk Importer (EBI) is a program that allows you to upload content into the award winning
openEQUELLA content management system. It allows non-technical users to quickly and easily import large amounts of content into openEQUELLA. The simple steps to use it are as follows:
1. Collect your data into a spreadsheet-like text file called a comma separated view (CSV)
2. Specify in your CSV where in openEQUELLA data should go and any files you wish to attach
3. Point the EBI at your CSV and your openEQUELLA server
4.
From here the EBI does all the work.

### Knowledge Required to Use the EBI

The EBI is easy to use and does not require any programming or scripting skills. You should, however,
have a basic understanding of openEQUELLA including familiarity with the openEQUELLA Admin Console, openEQUELLA schemas and openEQUELLA collections. Familiarity with Microsoft® Excel is also handy but not essential.

### How the EBI Works
The EBI can either be installed on your workstation or on a server. From there it reads a CSV text file provided by you. From the data in each row of your CSV it forms metadata and uploads any specified file attachments which can be either on your computer or a network share. The EBI then creates a corresponding item with the metadata and file attachments.

For each row in the CSV the EBI creates (or updates) an item in openEQUELLA. It can upload content to an openEQUELLA installation on the same computer, an installation on the local network or an openEQUELLA server accessed over the Internet.

### Technical Stuff
The EBI is a Python application written in Python 2.7. It is packaged as a standalone application for Windows and Macintosh using py2exe and py2app respectively. It can be run on platforms other than Windows or Macintosh by installing Python 2.7.4 or higher (but not Python 3) and wxPython 2.8 and running the source Python scripts included in the Windows package.

The EBI communicates with openEQUELLA using the openEQUELLA SOAP APIs over the HTTP or HTTPS inter-networking protocols. The application can optionally communicate with openEQUELLA via a proxy and supports Basic and Digest proxy authentication. All network communications are achieved with the standard Python library urllib2. Files are “POSTed” to openEQUELLA in Base64-encoded “chunks”.

The EBI largely uses the openEQUELLA 5.1 API which is back-supported in later versions of openEQUELLA. Some EBI functionality may leverage features that are only available in later versions of openEQUELLA. Any such features are emphasized in this document as to what versions of openEQUELLA they are supported in.

## Installation and Start Up
### System Requirements
The EBI can be installed on any of the following operating systems.
- Windows® XP, Windows Vista, Windows 7 and Windows 8
- Mac OS™ 10.6.x and higher
- Linux (installed with Python 2.7 and wxPython 2.8)

The EBI is designed to import content into openEQUELLA 5.1 and higher.

### Windows® Installation and Start Up

Copy or extract the ebi folder from ebi.zip to a location on your computer you have access to read, write and run files from.

To start the EBI double-click the file ebi.exe file. It may only appear as “ebi” if you have file extensions hidden on your computer.
### Macintosh™ Installation and Start Up
Double-click (mount) the disk image ebi.dmg. Drag the ebi package to your Applications folder.

Start the EBI by launching it from your Applications folder.

### Linux Installation and Start Up
To use the EBI on Linux Python 2.7 and wxPython 2.8 must be installed.
1. Install Python 2.7 (http://www.python.org).
2. Install wxPython 2.8 for Python 2.7 (http://wxpython.org)
3. Copy or extract the ebi folder from ebi.zip to a location where you have access to read and write files from.
To start the EBI launch the ebi.py python file with Python.

### Compatibility with Previous openEQUELLA Bulk Importer Versions
EBI version 4 is backwards compatible with CSV files used with older versions of the EBI. Settings files (*.ebi) used with versions 2 and 3 can be used with version 4.

Version 1 “state” files (e.g. state.txt) are only compatible with EBI version 1.

### Upgrading to the Latest Version
After installing the EBI you can regularly check what version you are using and if there are any new versions available on the download site. Click the About button on the toolbar. The About screen will tell you what version you are using, what the latest available version is and where you can download it from. Upgrading the EBI is a simple matter of replacing the ebi folder or package with the newer version.

## Quick Start Guide
Use the following steps to do a basic import of files into openEQUELLA, one file per openEQUELLA item.
1. Create a folder on your computer and put the files in it that you wish to upload to openEQUELLA.
2. Using Microsoft Excel® create a CSV file in that folder called content.csv.
3. In the openEQUELLA Admin Console lookup the metadata targets (XPaths) of the controls in your openEQUELLA collection that map to item name, item description and attachments.

Edit the contents of content.csv so that the first row contains the XPaths determined above omitting the leading slashes.

4. Add a row for each file you wish to upload and put the item title, description and filename on each row:
5. In the EBI on the Connection tab do the following steps:

a. Put your openEQUELLA URL in Institution URL and fill in Username and Password

b. Click Test/Get Collections

c. Select the collection you would like to upload your files to in the Collection drop-down

6. On the CSV tab do the following steps:
d. Click the Browse button, browse to content.csv and select it
e. Under Column Data Type double-click on “Metadata” on the third row and change it to “Attachment Locations”
7. Click Start Import. Once processing is complete check in the log that you received successes.
8. Check that the items are created in openEQUELLA. There should be one brand new item for each row in content.csv

## Basic Settings
### Connections Tab
Upon starting the EBI the main form with the Connections tab will appear as follows:

The Connections tab and CSV tab collect the necessary settings for connecting to openEQUELLA and loading the CSV file that provides metadata and location of attachments.

The Connections tab has the following fields:
* Field: Institution URL (Required) - The URL of the openEQUELLA institution in this field. This will be the URL of your openEQUELLA login page (e.g. http://equella.institute.edu/training).

* Field: Username (Required) - A username of an openEQUELLA user account that has privileges to create items in the collection you specified above.

* Field: Password (Required) - The password of the account specified above.

* Field: Collection (Required) - An openEQUELLA institution can support multiple “collections”. In this field you will need to select which collection you would like to upload content into.

The following command buttons are available on the Connections tab:

* Test/Get Collections:  This button connects to openEQUELLA and populates the Collection drop down list with a list of collections the specified openEQUELLA user can contribute to.
* Test Import: This button starts a test run of the import process. This button appears on every tab.
* Start Import: This button starts the import process. This button appears on every tab.

After filling in the necessary fields on the Connections tab the next steps are to prepare a CSV file with metadata and attachment information and load it using the CSV tab.

### CSV Tab
The CSV tab allows you to load a CSV into the EBI and specify how it should be parsed.

The CSV tab has the following fields:
* Field: CSV (Required) -The file path to a CSV of metadata and attachment locations.
* Encoding (Required) - This field allows you to restrict which rows in your CSV are processed.
* Row Filter (Optional) - This field allows you to restrict which rows in your CSV are processed.


The following command buttons are available on the CSV tab:
* Browse - This button allows you to browse your computer and select the CSV file that provides the metadata for the source content.
* Reload CSV - This button reloads the specified CSV into the EBI. It is useful if you are making changes to the CSV whilst using the EBI.
* Test Import - This button starts a test run of the import process. This button appears on every tab.
* Start Import - This button starts the import process. This button appears on every tab.

### Options Tab
Further settings for advanced configuration are available on the Options tab. These settings are referenced in this document as they apply.

### Log Tab
The Log tab has a rolling log of messages that display progress and status when you use the EBI to import (or export) content. This tab has a Clear button which clear’s the log and Test Import and Start Import buttons as with the other tabs.

### Toolbar
The following toolbar buttons are available:
* Open - Loads settings from a settings file
* Save - Saves current settings
* Stop - Stop processing part way through an upload run
* Pause/Unpause - Pauses and unpauses processing part way through an upload run
* Preferences - Opens the Preferences dialog
* About - Opens the About dialog to see the current version number, what the latest version available is, where to get the latest version and license information.

## CSV File Format
To import content into openEQUELLA using the EBI a Comma Separated View (CSV) file of a particular format must be provided by you. A CSV is a text file with the extension “.csv” and contains multiple rows of data where the values in each row are separated by commas. CSVs are much like tables of data. They can easily be created, viewed and edited in spreadsheet software such as Microsoft® Excel.

### Metadata
#### Specifying Metadata to Import

The CSV should contain a row per openEQUELLA item to be created in openEQUELLA (an “item” is effectively a single record in openEQUELLA). The first row should be column headings where each heading is a schema field in openEQUELLA.

The metadata column headings should not simply be name of the node the content should be mapped to (i.e. “name” and “description”) but the entire path to the node. These paths to schema nodes are called XPaths.

Though the full XPath to fields in openEQUELLA technically always start with /xml/, for the EBI you must leave this off the path in your column headings:

Use this:
metadata/lom/general/keyword

instead of this:
/xml/metadata/lom/general/keyword

The schema of your openEQUELLA server that you are importing into will most likely be completely different to the example above. You will need to look at your openEQUELLA schema and carefully type in corresponding XPaths as your CSV column headings. It is unlikely you will need a column for every field in your schema as it is likely that many fields will be optional. You may need to discuss with your openEQUELLA administrator which schema fields you need to include.

Use the Browse button on the EBI to select your CSV. Upon doing this it will read the CSV and display the column headings in the columns grid.

The Column Data Type column in the grid defaults to “Metadata” for every CSV column indicating that each column of the CSV will be imported as metadata created in an XML element at an XPath equal to the column heading. Column data types can be changed by double clicking on each one.

If after having loaded it you make any changes to the column headings in your CSV click the Reload CSV button to update the grid. The EBI will warn you that it has detected changes in the CSV columns.

Click “Yes” and the EBI will update the settings to the new CSV columns.

#### Handling Commas in Metadata
Some of your data may contain commas as content. Because a CSV uses commas to delimit from one field to the next in a row this causes ambiguity as to where a field starts and finishes. To solve this, the EBI relies on quotation marks (") to encompass any fields that contain commas in their content. For example:
```
metadata/title, metadata/description

Our House, "This is a picture of my house, my lawn, my cat and my dog"

Our Car, This is a picture of my car
```
In the example above the /metadata/description value of the first record is in quotation marks to prevent the EBI from mistakenly using the commas in the description to determine the end of the field. The surrounding quotation marks are stripped from the content by the EBI prior to import so they won’t appear in your item’s metadata in openEQUELLA.

Tools like Microsoft® Excel make it very easy to surround your content with quotation marks where needed. Microsoft® Excel automatically places quotation marks around any text in CSVs that contain commas. Simply use Microsoft® Excel’s “Save As…” command and set “Save as Type” to “CSV (Comma delimited)(*.csv)”.

#### Importing Metadata Attributes
openEQUELLA supports metadata attributes in its metadata schemas. These can be added to an openEQUELLA schema using the openEQUELLA schema editor.

To import values into a schema attribute field specify in the CSV the attribute as you would a usual tag-based field and prefix the attribute name with a “@” character.

#### Specifying Multi-Value Metadata Fields
openEQUELLA supports repeating metadata values.

It is possible with the EBI to import multiple values per CSV field as repeating fields in openEQUELLA. This can be achieved with either delimited values in the one cell or spreading the values across multiple columns of the same XPath column heading (or a combination of both).

#### Using Delimiters to Specify Multi-Value Metadata Fields
You can delimit (i.e. separate) the values in the one field with a special character or string of your choice. A pipe character (“|”) can be used to separate the values in the metadata/keywords/keyword column.

In the Delimiter setting in the EBI’s main form specify what delimiters, if any, apply to each column.

Note that XML does not allow metadata attributes to be repeated. If a multi-value column of attributes is specified in the CSV only the first value will be imported.

NOTE: When viewing multi-value metadata in an openEQUELLA wizard bear in mind that only wizard controls that support multiple values (e.g. a shuffle list control) can display all the values. Edit box controls will only display the first value of a repeating metadata field. Also note that multi-value wizard controls that utilize control lists (e.g. check box group, radio button group) will only display values that match values included in the control’s control list.

##### Using Multiple Columns to Specify Multi-Value Metadata Fields
Instead of (or as well as) using delimiters, you can put values of the one metadata element into separate columns by using the same XPath column heading across multiple columns. The EBI will collect the value from each column and add them all as repeating values in the item’s metadata.

All columns have the same XPath column headings. You can combine delimiting multiple values within the cells as well as specifying multiple columns of the same XPath column heading.

### Special Characters and File Encoding
The EBI supports metadata with special characters such as ©, “, ”, ¥ and è. CSVs that contain such special characters are saved by your computer in a special standard format, or “encoding”, called unicode. There is more than one form of unicode and unfortunately there is no guaranteed way to automatically detect what form of unicode a file may be. The EBI supports two types of unicode encoding, UTF-8 and Latin-1, and it requires you to specify which one applies to your CSV file. The encoding can be specified in the Encoding field on the CSV tab.

The EBI defaults to UTF-8 which is the most common format for text files. However, Microsoft Excel® often uses Latin-1 encoding when creating text files that contain special characters. Upon an import if you receive an error such as 'utf8' codec can't decode byte or special characters appear incorrectly in openEQUELLA then try changing the encoding selection and re-run the import.

### Attachments and Hyperlinks
#### Specifying Attachments to Import
A CSV column will specify the location of an attachment for each record. These are file paths and can either be relative to the folder that the CSV is in (e.g. “attachments/FordEscape.jpg”) or absolute (e.g. “c:/My Documents/My Pictures/FordEscape.jpg”). This column can be placed in any position in your CSV. If you are running the EBI on Linux, Unix or Macintosh you should always use forward slashes (“/”) in your file paths. On Windows you can use either forward or backward slashes.
The EBI needs to be instructed which column contains attachments locations. This is done by setting the Column Data Type for the corresponding Column Heading to “Attachment Locations”

The column heading should be an XPath the same as the metadata target of the openEQUELLA wizard Attachments control that manages the attachments being uploaded. If metadata targets are not required (e.g. when using EQUELLA 4.1) then either leave the column heading blank or prefix the column heading with # (e.g. “#attachments”).

Running the import process will create an item per row each with its specified attachment.

##### Changing the Base Path of Attachment Locations
Relative paths in Attachment Locations are by default relative to the folder the CSV file is in. You can, however, specify a different “base path” for Attachment Locations to be relative to by changing the field Use following base path for attachments on the Options tab.

For example, you might specify in this field an attachments base path of /Users/jimk/Documents and then in a row in your CSV an Attachment Location of attachments/myimage.jpg. When run, the EBI would attach the file found at /Users/jimk/Documents/attachments/myimage.jpg.

#### Specifying URLs to Import
The previous example showed how to attach a file such as an image or a document. You can also upload references to other web pages. In the example in Figure 3 the fifth column is exactly that. The URLs must include the “http://” or “https://” text on the front of them (e.g. “http://www.python.org” not “www.python.org”).

As with file attachments, the column heading for this column should be the metadata target of the openEQUELLA wizard Attachments control that manages the URLs. If metadata targets are not required (e.g. when using EQUELLA 4.1 or earlier) then either leave the column heading blank or prefix the column heading with # (e.g. “#urls”).
To allow the EBI to identify which column has URLs in it specify a Column Data Type of “URLs” for the corresponding column in the columns grid.

#### 5.2.3 Specifying Link Names for Attachments and URLs

Providing columns in the CSV for attachment_name and hyperlink_description allow you to optionally provide names for links to the attachments or names for the URLs.

As with URLs and attachments paths, these columns can be positioned anywhere in the CSV. They must be identified in the EBI’s main form as “Attachment Names” and “Hyperlink Names” for their Column Data Types. You can provide and column heading you like or leave it blank as the EBI does not use the column headings of Attachment Names and Hyperlink Names. Providing values in these columns is optional for each row. If you leave some cells blank in the columns then the EBI will use the filename or url as the link name.

Note: the maximum length allowable in openEQUELLA for an attachment or hyperlink description is 1,024 characters.

#### Specifying Multiple Attachments and Hyperlinks per Item
openEQUELLA supports multiple attachments and hyperlinks.

This can be specified in the CSV for the EBI in much the same way as multi-value metadata fields, either with delimiters or multiple columns.

###### Using Delimiters to Specify Multiple Attachments
As with multi-value metadata fields, separate the attachment paths, attachment names, hyperlink urls and hyperlink names with a delimiting string of your choice (e.g. a pipe character (“|”).

Specify the delimiting string in the Delimiter setting for the corresponding columns in the EBI’s main form.

###### Using Multiple Columns to Specify Multiple Attachments
As with multi-value metadata fields, you can specify multiple columns each with a Column Data Type of Attachment Location to attach multiple attachments to a single item.

Note that the first two columns in the example above use the same XPath column heading and the third column has a different XPath column heading. In EQUELLA 5.0 and higher this would result in the attachments from the first two column able to be managed with the one Attachments Control (that uses a metadata target of /metadata/primaryattachments/attachment) and attachments from the third column could be managed by another Attachments control (that uses a metadata target of /metadata/secondaryattachments/attachment).

Also note that the first column includes a value with a pipe delimiter. As you can see it is possible to use combination of delimiters and multiple columns when specifying multiple attachments.

##### Specifying Link Names for Multiple Attachments and Hyperlinks
Specifying Link and Attachment names for columns of Column Data Type of Attachment Location or URL is done by including columns of Column Data Type of Attachment Name and/or Hyperlink Name in the same order (read from left to right in the CSV) as the Attachment Location columns and URLs columns appear.

The red lines in the example above show how the EBI will match up the columns of Attachment Locations with Attachment Names. For example, the Attachment Locations column at L (“metadata/secondaryattachments/attachment”) will be paired up with Attachment Names column at N (“secondary attach names”) because they are both the third occurrence (counted from the left) in the CSV of an Attachment Locations and Attachment Names columns respectively.

Where delimiters are used, the EBI matches pairs of attachment path and attachment name in each item by matching their corresponding position in the cell. For example, in the first item in the CSV in Figure 33 above the attachment attachments/010.jpg (in column I) will have the corresponding attachment name of “Squirrel Eating” (in column J) applied to it in openEQUELLA as both values are second in their list of values in their respective delimited lists. Matching of hyperlink urls and hyperlink names are determined in the same way.

## Advanced Content
### Appending XML Fragments to Metadata
Using the EBI it is possible to append a fragment of an XML document to a node. For example, we may wish to append the following XML metadata to an element called metadata/contributors.
```
<contributor> <name>Sue Daley</name> <roles> <role>Author</role> <role>Illustrator</role> </roles> </contributor> <contributor> <name>Bobby Andrews</name> <roles> <role>Editor</role> </roles> </contributor>
```

This can be done by placing the required XML fragment in the cell as text.

Note that the xml does not need to be well-formed meaning that it can have more than one root node. For the example above the fragment contains two contributor root nodes. This is usually unacceptable as a well-formed XML document but is acceptable here as an XML fragment. Note though that the XML fragment must be free-standing meaning that every tag must be properly closed.

Text in XML nodes cannot include ampersands (“&”), less-than (“<”) or greater-than (“>”) characters. If such characters are needed inside a node then the following strings should be used instead: Character Escape Sequence
```
&  replaced with &amp;
<  replaced with &lt;
>  replaced with &gt;
```
In the XML Fragment setting in the EBI’s main form specify each column that contains XML fragments.

Note that the EBI builds the metadata for the item by reading the CSV from left to right. For this reason, an XML fragment that encompasses other metadata fields specified in the same row should be positioned before the other encompassed metadata fields in the column order of the CSV. Otherwise they will be overwritten by the encompassing XML fragment.

### Repeating Sub-trees and XPath Support
The EBI supports a subset of XPath 1.0 and 2.0.

At times you may wish to form repeating sub-trees in your XML. This is the type of metadata that is commonly created in openEQUELLA wizards with a Repeater control. You may also wish to associate attachments or additional metadata (such as attributes) to these sub-trees.

Sub-trees can be achieved with XML Fragments and attachments can be associated with sub-trees by using Custom Attachments. These features are designed to produce very complex or inter-related XML. However, producing the CSV data that these features rely on can be challenging.

If your need is only to form simple sub-trees or relate individual elements or attachments with simple sub-trees then an alternative, and often simpler, approach is to use XPath indexes. An example of an XPath with an index is as follows:
 ```
 metadata/contributors/contributor[2]/name
```
This example is referencing the name child element of the second instance of a repeating sub-tree called contributor.

Among other things, you can create simple repeating sub-trees from columns of data by referencing the repeating elements by their index. Following are some practical examples of using XPath indexes with the EBI.

#### Example 1: Forming Simple Sub-trees from CSV Columns
Suppose you wish to construct the following repeating sub-tree in your item XML.
```<contributors> <contributor> <name>Sam Doe</name> <role>Author</role> </contributor> <contributor> <name>Lee Phillips</name> <role>Editor</role> </contributor> </contributors>
```
Rather than using XML Fragments let’s say you would prefer to specify the names and roles in separate columns in your CSV for simplicity. Using XPath indexes the sub-trees can be formed.

When the EBI encounters columns with contributors/contribution[1]/name and contributors/contribution[1]/role it will first create the contributors element (if it doesn’t already exist). It will then create the contributor, name and role elements for the first contributor sub-tree as the XPath contributor element index. Subsequently, when the EBI encounters columns contributors/contribution[2]/name and contributors/contribution[2]/role it will create the contributor, name and role elements for the second contributor as the XPath contributor element index in those columns is [2].
For shallow, simple sub-trees using XPath indexes rather than XML Fragments is often the easiest approach. However, if your sub-trees are deeper, more complex and varying then it can be unwieldy to use XPath indexes in which case XML Fragments may be the better option.

#### Example 2: Associating Language Attributes to Textual Elements
openEQUELLA supports a multi-language edit box control that allows a contributor to complete a field in multiple languages. The metadata produced by this control requires an attribute for each value indicating what language each element represents. For example: ```
<metadata> <title> <string language="en">Hello!</string> <string language="fr">Bonjour!</string> <string language="de">Guten tag!</string>
34
</title> </metadata>
```

The above metadata could be produced using XML Fragments. However, a simpler alternative is to use XPath indexes. This allows the titles to be placed as simple text in separate columns, one for each language.

Columns can be used to create repeating values for metadata/title/string. They are created in the order they appear in the CSV from left to right. Subsequent columns add a “language” attribute to each value. The indexes [1], [2] and [3] instruct the EBI which metadata/title/string element to append each attribute to.

Note that the repeating metadata/title/string elements could have just as easily been created using delimiters or XML fragments. However you create the repeating elements, remember to put the columns that create them before (i.e. to the left of) the columns that attach child metadata to them.

#### Example 3: Associating Attachments to Sub-trees
Using XPath indexes it is also possible to associate attachments to repeating metadata.

The XPath column headings must have indexes to instruct the EBI which contributor element to add each resume child element to. Each resume child element contains a reference to the corresponding attachment.

### Using Command Options
It is possible to specify additional upload options for each row of your CSV. This can be used to perform advanced actions. This includes managing special types of content such as zip files and IMS/SCORM packages.
To do so, include a column in your CSV for specifying command options for records that they apply to.

You can name the heading of this column anything or leave it blank. Specify in the main form the position of your command options column by selecting “Commands” in the Column Data Type field.

Include the desired commands in the commands column for the applicable rows. The supported command options and their effects are provided below. Command options are case insensitive. You can include more than one command per row by separating the multiple commands in the one column with commas.

* UNZIP - Attempts to unzip all attachments of the record after uploading them to openEQUELLA. If any files are not valid zip files an error will occur and the entire record will be rejected. Note that no links will appear in the item unless a list of links is specified.
* IMS - Uploads the last specified attachment in the record to openEQUELLA as an IMS content package or SCORM package. If any attachments are not valid IMS package files an error will occur and the entire record will be rejected. Only the last attachment will be uploaded as openEQUELLA supports only one IMS package per item.
* AUTO - Inspects each attachment and automatically upload IMS content packages or SCORM packages as IMS packages, unzip zip files (that are not IMS packages) and simply attach all non-zip files
* SCORM - In some cases SCORM packages are unable to be recognized as anything other than simple IMS packages. Use this command to force EBI to upload the package as a SCORM package.
* VERSION - If updating existing items using source identifiers or target identifiers, a new version of the item will be created rather than the existing item version being updated.
This can also be achieved using the Options tab.
* DRAFT - If creating new items or new versions they will be created in DRAFT status. This command is ignored when updating existing items without the VERSION command option. This can also be achieved using the Options tab.
* REPLACEMETA- When updating an existing item metadata from the CSV replaces only that metadata and leaves all other existing metadata untouched.
This can also be achieved using the Options tab.
* APPENDMETA - When updating an existing item metadata from the CSV is appended to the existing item metadata.
This can also be achieved using the Options tab.
* APPENDATTACH - When updating an existing item attachments specified in the CSV are appended to the existing item attachments. This can also be achieved using the Options tab.
* DELETE - If updating existing items using source identifiers or target identifiers (see section 6.9 Updating Existing Items in openEQUELLA, page 58) the item will be deleted. If using target identifiers an item can be purged by deleting an already deleted item.
* CAL_PORTION - When uploading “portion” items for CAL compliance.

#### Creating Item Links to Files within a Zip File
If unzipping an attachment using either the “UNZIP” command or the “AUTO” command you can specify item links to particular files within the zip file. This is done by specifying a list of links to unzipped files in as the attachment name of the zip file.

The CSV contents in the attachment_name column (e.g. (("start.htm","Start Here"),("images/help.htm","Online Help")) ) instructs the EBI to unzip all the files in attachment on that row and adds two hyperlinks in the item called “Start Here” and “Online Help”.

The item will have attachments of all the unzipped files from but only displays links to the two specified files start.htm and images/help.htm.
The list of links should be formatted as follows (without the linefeeds):
```
( ("<filepath in zip of file 1>", "<description of file 1>"), ("<filepath in zip of file 2>", "<description of file 2>"), ("<filepath in zip of file 3>", "<description of file 3>"), . . ("<filepath in zip of file n>", "<description of file n>") )
```
The format of the list can be described as a list of pairs where each pair consists of a filepath to a file in the zip (relative to the root of the zip file) and a description (i.e. name for the hyperlink) as it should appear in the item display page.

Note that even a zip file with a single hyperlinked file should be enclosed in two sets of parentheses e.g. if start.htm was the only hyperlinked file then use (("start.htm", "Start Here")) not ("start.htm", "Start Here"). Note the nested parentheses in the correct example.
A shortcut to instruct that all files in the zip have hyperlinks created can be specified by using the name pair  
```
(("*", "*"))
```
This instructs the EBI to create a hyperlink for every file in the zip file using the name of the filename as the hyperlink name. If used in conjunction with named pairs it will name only files that do not have explicitly named pairs. For example, the following list of links will create two named hyperlinks and automatically create filename-based links for the remaining files:
```
(("start.htm","Start Here"),("images/help.htm","Online Help"),("*","*"))
```
The extracted zip attachments from a mix of explicit and wildcard name pairs in a list of links

Specifying a name pair to the zip file itself creates a link to download the zip file.

For example above, along with the unzipped files, a link called “Download zip” could be added to the item that allows users to download the entire zip file

These links are created by the pair
```
("*","*")'''
```

As with other attachments such as simple files and IMS packages, it is possible to include a mixture of zip files (with lists of links) and other files by using delimiters and the “AUTO” command. The “AUTO” command will unzip the zip file and treat the other files included in the record appropriately.

### Setting Owners and Collaborators for Items
#### Setting Owners (EQUELLA 5.1 and higher only)
By default the EBI sets the owner of new items and new item versions to the EBI username i.e. the user specified in the main form. You can instead set the owner of each item to a specific openEQUELLA user account by adding a column to the CSV with a single username per row. The Column Data Type for the column should be set to “Owner” and the column heading can be anything. For any rows where a cell in the owner column is blank the EBI will set the EBI username as the owner.

If a username is specified that is not in openEQUELLA the EBI will raise an error and skip the row. Optionally, you can configure the EBI to fall back to using the EBI username when it encounters a non-existent username. Do this by checking Options tab -> Ignore owners that do not exist checkbox.
#### Setting Collaborators (EQUELLA 5.1 and higher only)
You can add collaborators to an item in much the same was as you can specify owners. Add a column of any heading to your CSV and put in a delimited list of usernames. Set the Column Data Type of the column to “Collaborators” and specify what delimiter you are using for the column. Leave the cell blank for any items that should have no collaborators.

As with owners, if a username is specified that is not in openEQUELLA the EBI will raise an error and skip the row. Optionally, you can configure the EBI to simply ignore non-existent usernames and create/update the item anyway. Do this by checking Options tab -> Ignore collaborators that do not exist checkbox.

#### Setting LDAP or Replicated Datastore Users as Owners and Collaborators
When specifying LDAP and replicated datastore users as owners and collaborators instead of usernames use user IDs and set Options tab -> Save usernames that are not internal users as user IDs checkbox. In some cases the user ID may be the same as the username. Check your LDAP or replicated datastore settings to make certain.

### Managing Attachment Thumbnails (EQUELLA 6.3 QA1 and higher only)
#### Suppressing and Specifying Thumbnails
By including a column with a Column Data Type of “Thumbnails” the EBI will instruct openEQUELLA to only generate thumbnails for file attachments whose attachment locations are listed in the Thumbnails column. openEQUELLA will be instructed by the EBI to suppress thumbnail generation for any attachment location entries that do not appear in the Thumbnails column.

Three formats can be used to specify Attachment locations in the Thumbnails column:
- Exact attachment location (e.g. Circular Motion 1.jpg, images\Dining 1.jpg)
- File extension wildcard (e.g. *.tif)
- Attachment location with custom thumbnail separated with a colon (e.g. images\squirrel:Dining 1.jpg)

A combination of any of the above formats can be specified by separating the values with a delimiter.

#### Selecting the Item’s Thumbnail
In an openEQUELLA contribution wizard it is possible to select a thumbnail for the item to control how it is displayed in search results.

This thumbnail selection can be achieved in an EBI import by including a column with a Column Data Type of “Selected Thumbnail” (the column can have any column heading).

The allowed values are:
- “DEFAULT” or empty (equivalent)
- “NONE”
- An attachment location
- An extension wildcard

#### Thumbnails and Custom Attachments
Thumbnail suppression, custom thumbnails and thumbnail selection can be achieved in Custom Attachmentsby including each of the following elements respectively in the attachment element:

Thumbnails suppression:
```
<thumbnail>suppress</thumbnail>
```
Custom thumbnail:
```
<thumbnail>[relative path to an attached file]</thumbnail>
```
Thumbnail selection:
```
<selected_thumbnail>true</selected_thumbnail>
```

### Uploading to Multiple Collections
By default, when creating new items they are created in the collection specified in the Collection drop-down on the main form. It is also possible to specify different collections per row in your CSV. Note that this feature cannot be used when updating existing items or creating new versions from existing items.

To specify a Collection per row add a column to your CSV with a single collection name per row. The Column Data Type for the column should be set to “Collection” and the column heading can be anything. If a cell in the column is left blank then the collection specified in the Collection drop-down on the main form will be used. If a collection is specified that is not in openEQUELLA, or the EBI username does not have permission to create items in, an error is raised and the row skipped.

### Attaching openEQUELLA Resources
Other openEQUELLA resources — items and item attachments — can be attached to an openEQUELLA item in the same institution. This can be accomplished with the EBI by using the “EQUELLA Resources” Column Data Type.

As with “Attachment Locations” and “URLs” columns, the column heading should be the metadata target of the openEQUELLA resource attachments (as used in the corresponding collection’s openEQUELLA wizard configuration if applicable). A column of “EQUELLA Resource Names” Column Data Type allows the names of the link descriptions to the openEQUELLA Resources to be specified if the default should be overridden. As with “Attachment Locations” and “URLs” columns, multiple openEQUELLA resources can be attached to the one item by using delimiters or multiple “EQUELLA Resources” columns.

There are two formats that can be used for the specifying openEQUELLA Resources in your CSV: by item UUID and by source identifier.

#### Specifying openEQUELLA Resources by UUID
If the UUIDs of the openEQUELLA resources to attach are known then an openEQUELLA resource can be specified by UUID:

The supported formats for openEQUELLA resources are as follows:

**openEQUELLA  Resource Format 1 - item uuid**
* Example “b515cc8d-d6b0-4a50-bb09-6c87920804b8”
* Behavior - The latest live version of the specified item itself will be attached as an openEQUELLA resource
* Default Attachment Name - The item name

**openEQUELLA Resource Format 2 item uuid/item version**
* Example - “b515cc8d-d6b0-4a50-bb09-6c87920804b8/3”
* Behavior - The specified version of the specified item itself will be attached as an openEQUELLA resource
* Default Attachment Name - The item name

**openEQUELLA Resource Format 3 - item uuid/item version/relative attachment path**
* Example “b515cc8d-d6b0-4a50-bb09-6c87920804b8/3/docs/intro.pdf”
* Behavior - The attachment of the specified item version will be attached as an openEQUELLA resource. Use item version 0 for the latest live version. * Default Attachment Name - The attachment description

**openEQUELLA Resource Format 4
item uuid/item version/ package>**
* Example -“521b2225-54e0-4d7b-a4d6-45243fcd7889/1/ package>”
* Behavior -The IMS or SCORM package attached to the specified item version will be attached as an openEQUELLA resource
* Default Attachment Name - The package name

#### Specifying openEQUELLA Resources by Source Identifier Directives
If the UUIDs of the openEQUELLA resources to attach are not known then resources can be specified by source identifiers. This feature is particularly useful if uploading the openEQUELLA resources with the EBI either in the same run, or a preceding run, as the items themselves.
Specifying openEQUELLA resources by source identifiers is done using any of the same formats as resources specified by UUID except that in place of a UUID a source identifier directive is included.

The EBI uses the source identifier directive to determine the UUID of the referenced resource. Following are the allowed formats for source identifier directives:

**Source Identifier Directive Format 1 - {source identifier}**
* Example - “{R-32-544}”
* Behavior - Resolves to the UUID of the item of a matching source identifier in the same collection as the item being uploaded

**Source Identifier Directive Format 2
[collection name]{source identifier}**
* Example - “[Resources Collection]{R-32-544}”
* Behavior - Resolves to the UUID of the item of a matching source identifier in the specified collection. Uses the same source identifier as specified in items being uploaded.

**Source Identifier Directive Format 3
[collection name][absolute XPath]{source identifier}**
* Example - “[Resources Collection][/xml/metadata/@resourceid]{R-32-544}”
* Behavior - Resolves to the UUID of the item of a matching source identifier in the specified collection. Uses the source identifier found at the specified XPath.

### Custom Attachments
openEQUELLA supports attachment types other than file attachments and simple URLs. For example, openEQUELLA attachments can also be YouTube videos and Flickr media. Such attachments require specialized metadata to be added to the /xml/item/attachments/attachment element in the item’s metadata for each of these attachments. The EBI supports the creation of such attachment elements using what are called Custom Attachments.

To create item attachments other than the standard file attachments or URL links /xml/item/attachments/attachment elements need to be created in items. This can be done by specifying a CSV column with Column Data Type of “Custom Attachments”. Inside the column, a cell should contain an XML fragment of the required attachment elements. As with URLs and standard attachments, the column heading should be the metadata target of the corresponding Attachments control in the wizard.

For example, to create an item with two attachments, a YouTube video and a Kaltura-hosted video, you would use a Custom Attachments value such as this:

```xml
<attachment type="custom"> <type>youtube</type> <file /> <description>Equella tour</description> <attributes> <entry> <string>playUrl</string> <string>http://www.youtube.com/v/uELyRAlRs&fs=1&source=uds&autoplay=1</string> </entry> <entry> <string>thumbUrl</string> <string>http://3.gvt0.com/vi/uELyRAlRs/default.jpg</string> </entry> <entry> <string>videoId</string> <string>uELyRAlRs </string> </entry> </attributes> </attachment> <attachment type="custom"> <type>kaltura</type> <uuid>de077d83-4b99-439b-9e5e-ef566d454226</uuid> <file /> <description>Nature Video</description> <attributes> <entry> <string>title</string> <string>Nature Video</string> </entry> <entry> <string>kalturaServer</string> <string>846328ab-522a-450b-9764-e52e15e1b6bd</string> </entry> <entry> <string>thumbUrl</string> <string> https://cdnsecakmi.kaltura.com/p/691542/sp/69129200/thumbnail/entry_id/0_crf3ox66/version/100000</string> </entry> <entry> <string>entryId</string> <string>0_crf3ox66</string> </entry> </attributes> </attachment>
```
The above Custom Attachments value would result in two attachments in the openEQUELLA item, the first to a YouTube video and the second to a Kaltura-hosted video.

Notice that an attachment UUID was supplied for the second custom attachment (but not for the first). This demonstrates that when using custom attachments you can, if you wish, provide an attachment UUID rather than leaving it to openEQUELLA or the EBI to automatically generate a UUID (as is done for URLs and standard attachments).

Note that though the data in a Custom Attachments CSV cell is technically an XML fragment the column does not need to be set for XML Fragments.

There are several formats for the various types of attachments supported in openEQUELLA. Higher versions of openEQUELLA support a greater number of attachment types as content support typically increases with each version of openEQUELLA. One of the easiest ways of determining the format of attachment elements in openEQUELLA is to simply create an attachment using an openEQUELLA wizard control and inspect the resulting metadata.

Thumbnails for local file attachments can be controlled in custom attachments by including the elements attachment/thumbnail or attachment/selected_thumbnail.

### Uploading CAL Content (Australia)
The EBI can be used for uploading copyright-identified content that utilizes EQUELLA’s Copyright Agency Limited (CAL) compliance features.

“Holding” items (e.g. items that register books and journals) can be uploaded without any special EBI settings other than meeting the minimum metadata requirements for saving items to the holding collection.

“Portion” items (e.g. eReserves) should also be uploaded so that they meet minimum metadata requirements for saving items to the portions collection. Additionally, a column of “EQUELLA Resources” should be included so that each portion is linked to a holding item. The link should be to the holding item itself, not any of its attachments. If more than one openEQUELLA Resource is specified for the portion item then the openEQUELLA Resource column for holding items should be specified first (i.e. furthest left) in the CSV.

Each portion row in the CSV should also have a command option “CAL_PORTION”.

The column heading of the openEQUELLA Resources column should be the same as the metadata target of the Attachments control configured in the portion collection wizard for linking portions to holdings (minus the leading slash). In the above example the metadata target is /item/temp_resourceHandler.

There are many ways to interlink items using an “EQUELLA Resources” data type in EBI. In the above example the first three rows are linked to the same holding item (in a collection called “Books”) by its ISBN. The next three rows are linked to a holding item by the holding item’s UUID.

#### Attaching Files Without Metadata
You can upload files and attach them to items without the associated attachment metadata by using the “Raw Files” column data type. This is unlike when using an “Attachment Location” column data type for which the EBI will automatically generate system attachment metadata for each file uploaded i.e. /xml/item/attachments/attachment.

A CSV column of “Raw Files” can have any column heading (it will be ignored by the EBI). The data cells can have either file paths (as you would use in an “Attachment Locations” column) or a path to a folder. When a folder is specified the EBI will recurse through the folder uploading all files and folders within.

#### Attaching Individual Raw Files
As with Attachment Locations, with Raw Files you can specify a path to a single file. The file will be attached to the item but no corresponding attachment metadata will be generated.

A file can be attached to an item with no corresponding system attachment metadata. As a result the file will not appear as an attachment link on the item display page and it will not be editable via an Attachments control in a contribution wizard.

As with Attachment Locations, a column of corresponding Attachment Names cells can optionally be specified but, unlike when used with Attachment Locations, Attachment Names allow the name and target folder of the file to be specified as it will be attached to the item. It will have no effect on the resource links displayed on the item display page.

#### Attaching a Folder as a Raw File
Using Raw Files you can specify a path to a folder. A path to a folder must be followed by an asterisk to signify that all files and folders found inside should be attached to the item.

Attachment Names can optionally be provided but only to specify a folder in the item to locate the source folder structure inside. This folder must also be followed by an asterisk. Following is an example of a CSV with two rows utilizing Raw Files for folders. That entire directory structure and files located below attachments/folder/* on the source computer will be attached to both items. The first item will have the files attached to the root of the item. The second item will have the files attached to a folder called “files”.

#### Raw Files Used in Conjunction with Custom Attachments
Though Raw Files result in no corresponding system metadata, attachment metadata can still be added through the use of “Custom Attachments”. The following CSV is an example of a file that is uploaded as Raw Files (and renamed and placed in a subdirectory of the item) and has a corresponding Custom Attachment to provide a link on the item display page and make it editable in a contribution wizard.

## Running the Import
The import process is started by clicking the Start Import button. The process provides a visual cue to progress by outputting information to the Log tab.

The second last line of the log, will say “Processing complete (success #)”. This line will summarize how many items were processed and indicate if there were any errors.

### Output
The EBI automatically outputs attachment paths, URLs and command options. You can specify additional CSV data to be included in the output by marking columns for Display.

Setting columns to Display will help you to see which records have been processed and what metadata was imported.

For each run a corresponding log file is automatically created in a folder called logs within the folder where the CSV is located.

The log file is named the date and time the EBI was started. The log file contains the same information that is output to the Log tab.

### Stopping or Pausing the Import
You can stop or pause an import process part way through by clicking the Stop Processing or Pause/Unpause Processing buttons on the EBI’s toolbar.

Clicking the Stop Processing button will cause the EBI to halt processing immediately. If the EBI is partway through uploading an item the item will not be committed into openEQUELLA.

Clicking the Pause Processing button will cause the EBI to pause processing. If the button is clicked again the EBI will resume processing (unpause). If the EBI is paused partway through uploading an item the item will not be committed into openEQUELLA until it is unpaused.

### Errors
Any errors that may occur are displayed in the log.

### Connecting with a Proxy
The EBI supports connecting to openEQUELLA via a proxy server. If you are using EBI on a corporate network and are unable to connect to openEQUELLA this may be because you need to use a proxy server. If you are unsure check with your IT support.

To connect to openEQUELLA via a proxy got to Toolbar-> Preferences () -> Advanced. Here, fill in the Proxy Server Address field. The format of the address should be [host]:[port] e.g. “proxy001:8080”.

The EBI provides Proxy Server Username and Proxy Server Password fields for Basic and Digest Authentication support.

The EBI does not support Microsoft NTLM challenge/response authentication for proxies.

### Required openEQUELLA Permissions
The user account in the Username fields must have the necessary privileges in the openEQUELLA collection to perform the required actions. The following are the minimum privileges needed on items for the various uses of the EBI.
Field:  Required Privileges

* Create new items: CREATE_ITEM, VIEW_ITEM
* Edit Existing items: VIEW_ITEM, DISCOVER_ITEM, EDIT_ITEM
* Create new version of existing items: CREATE_ITEM, VIEW_ITEM, DISCOVER_ITEM, NEWVERSION_ITEM
* Delete existing items: VIEW_ITEM, DISCOVER_ITEM, DELETE_ITEM
* Set owner of existing items: VIEW_ITEM, DISCOVER_ITEM, EDIT_ITEM, REASSIGN_OWNERSHIP_ITEM
* Set collaborators of existing items: VIEW_ITEM, DISCOVER_ITEM, EDIT_ITEM, REASSIGN_OWNERSHIP_ITEM
* Exporting items: VIEW_ITEM, DISCOVER_ITEM

## openEQUELLA Scripts, Workflow and Digital Rights Management
Items created or updated by the EBI respond and conform to scripts, workflow and digital rights management (DRM) in the same way as items managed through an openEQUELLA wizard.

### openEQUELLA Scripts
If the openEQUELLA collection that you are importing content into has an Expert Save Script configured the script will be run upon import of new items or updated items. Expert New Version Scripts, however, are only run if the VERSION command option is used. Scripts are not run during test runs.

Scripts on wizard controls or wizard pages are not run.

### openEQUELLA Workflow
If a workflow template is associated with the collection you are importing into then new items and new item versions will progress through workflow as if they were created with an openEQUELLA wizard. Workflow is not applied when updating existing items (unless creating new versions).

If you wish to avoid new items going into workflow then remove the workflow template from the collection. However, note that when a workflow template is removed from a collection any items currently in moderation will immediately go live.

### openEQUELLA Digital Rights Management
EQUELLA’s Digital Rights Management (DRM) can be applied to items by reproducing the metadata in the /xml/item/rights element as the DRM pages in a contribution wizard would produce. This can be done with standard metadata, XML fragments or a combination of both.

## Testing Your Import
Before running the import you will likely want to perform a test run. This can be done by clicking the Test Import button. Clicking this button performs the same actions as a real import but without submitting items or attachments to openEQUELLA. For this reason it runs faster than a real import, especially one with large attachments. The Test Import button is a useful way of verifying your settings and CSV file prior to commencing an import.


You can create sample XML files in a test run by checking the check box Options tab -> Save test XML.


When this check box is checked the EBI will create sample files in a folder called test_output under the folder containing the CSV. Within this folder the EBI will create one sub folder for each run and one xml file for each item. This is a convenient way to verify the final item XML without creating items in openEQUELLA.

Note that the item IDs in the test XML files are assigned by openEQUELLA and will change with each test run. They will also be different to the actual item IDs assigned to the records by openEQUELLA in a real import run.

Some system metadata will not be available in these documents (e.g. owner details, item history) as much of the system metadata is only calculated by openEQUELLA when an item is saved for real.

## Importing Select Rows from Your CSV
It is possible to specify a subset of rows to process (either test or real) and a specific order they should be processed in. This is done by specifying a row filter. A row filter instructs the EBI to only import rows with row positions that fall within lists and/or ranges of numbers. The row filter is specified in the Row Filter field

Some examples of row filters are as follows:

* Row Filter 1, 3, 9 - Outcome: Process rows 1, 3 and 9 in the CSV
* 15-23 - Outcome: Process rows 15 to 23 inclusive
* 10- - Outcome: Process all rows from 10 onwards
* 1, 3, 12-18, 21-  - Outcome: Process rows 1, 3 then rows 12 to 18, then all rows 21 onwards
* 6-11, 3, 2, 1 - Outcome:  Process rows 6 through 11 then row 3, row 2 and finally row 1
* 2, 1-3, 2, 2, 2-3 - Outcome; Process row 2 then row 1 then row 3
*
The last example highlights a row filter with duplicate rows. In this event the EBI only imports each distinct row once and in the order each distinct row first appears in the row filter.

Note that a row position of a CSV row means its position discounting the headings row. Technically, the first row in the CSV file is actually the headings row. However, the second row in the CSV is the first data row and therefore is considered to have a row position of 1 for the purposes of row filters.

If Row Filter is left blank the EBI will process all rows in the CSV.

## Updating Existing Items in openEQUELLA
Using the EBI not only can you create new items in openEQUELLA but you can also update existing ones.
### Updating Existing Items using Source Identifiers
One way of updating existing items is by specifying a source identifier field that can match the records in the CSV with items in openEQUELLA. This can be useful if your CSV already contains IDs from another system or generated in the CSV itself.

Create a field in the openEQUELLA schema that a source identifier can be stored in. The field can be named anything and may either be an element or an attribute. Check the Index for Advanced Searches check box.

Now in the CSV a column of source identifiers is required. These can be of any format, numerical or alphanumerical, as long as they are unique to each row of the CSV. For example, “1”, “DFWTE”, “232-3423”, “S342343-B” are all valid source identifiers. In the column heading specify the XPath that matches the openEQUELLA schema field where the source identifier will be stored.

In the EBI’s main form specify the column of the source identifiers in the Source Identifier field.

Now when an import is run (test or real) for each row in the CSV the EBI will search openEQUELLA for an item that matches the row’s source identifier. If it finds a matching item rather than creating a new item in openEQUELLA it will update the matching item (or create a new version if used in conjunction with the VERSION command option).

By default, only items with a status of “live” will be updated with source identifiers.

### Updating Existing Items using Target Identifiers

If you know the openEQUELLA item IDs that you are updating another way of updating existing items is by specifying what are called target identifiers. Target identifiers are the UUID openEQUELLA item IDs of the existing items in openEQUELLA. To do this, in your CSV include a column of item IDs.

You can name the column heading of this column anything or leave it blank. In the EBI select “Target Identifiers” for the Column Data Type for the corresponding column.

When run, the EBI will attempt to match the target identifier of each row against an existing item in openEQUELLA and update that item. For any rows with blank target identifiers new items are created. If a target identifier is provided that does not exist in openEQUELLA an error will be returned and the EBI will move on to the next row.

By default, using target identifiers will see live items updated (or new versions created if used in conjunction with the VERSION command option). However, unlike when using source identifiers, if no live items are available then the first non-live item will be updated (e.g. draft, moderating, archived etc)

### Targeting Particular Item Versions
By specifying a column of item versions and setting the column data type as “Target Versions” you can update a particular version of an item regardless of its status. Target versions can be used in conjunction with either source identifiers or target identifiers.

When using target versions each row can specify an explicit item version (e.g. 1, 2, 3 etc) or an implicit item version with a value of either 0 or -1. Using an item version of 0 will see the latest live version of an item updated. Using an item version of -1 will see the latest version of the item regardless of its status.

### Creating New Versions
By default, when updating existing items with the EBI the latest version is edited. Optionally, you may instruct the EBI to create new versions. This can be done by checking Options tab -> Create new versions checkbox.
You can also specify individual rows to generate new versions by using the “VERSION” Command Option.

### Updating Existing Metadata without Uploading Attachments
It is possible to update the metadata of existing items without uploading and overwriting existing attachments. This can be done by configuring the EBI such that no columns have a Column Data Type of “Attachment Locations” or “URLs”. This technique will work regardless of whether the matching of existing items is done with source identifiers or target identifiers
An existing configuration can be easily reconfigured to update only metadata by setting the Column Data Type of attachment location columns and URL columns to “Ignore”.

### Replacing and Appending to Metadata in Existing Items
By default, when updating existing items with the EBI existing item metadata is cleared and replaced by the metadata specified in the CSV. Optionally, you may instruct the EBI to replace only the metadata specified in the CSV or to append the metadata in the CSV to the item’s existing metadata. This can be done by checking Options tab -> Existing Metadata drop-down.

Setting the Existing Metadata drop-down to “Replace only specified metadata” will have EBI ignore any existing custom metadata nodes in the item metadata not specified in the CSV thus leaving them untouched. Nodes that are specified in the CSV will be cleared.

Setting the Existing Metadata drop-down to “Append to Existing metadata” will have EBI leave any existing custom metadata nodes that are in the item and specified in the CSV untouched. Nodes that are specified in the CSV will also be left untouched but added to with the metadata specified in the CSV.

You can also specify individual rows to replace and append specified metadata by using the “REPLACEMETA” and “APPENDMETA” Command Options respectively.

Note that if you are using source identifiers, even when specifying to append metadata, the node identified as the source identifier will not be appended to but rather replaced. This is to prevent duplicate source identifiers appearing in an item.

### Appending Attachments to Existing Items
By default, when updating existing items with the EBI existing attachments are replaced by any attachments specified in the CSV. Optionally, you may instruct the EBI to append the attachments specified in the CSV to the item’s existing attachments. This can be done by checking Options tab -> Append attachments checkbox.

You can also specify individual rows to append attachments by using the “APPENDATTACH” Command Option.

## Saving Items in Draft Status
By default, when items or new versions of items are created in openEQUELLA with the EBI they are made immediately live (or in moderation if workflow applies). Optionally, you may instruct the EBI to create items or item version in “draft” status. This can be done by checking Options tab -> Create new items and item versions in draft status checkbox.

You can also specify individual rows to create new items or item versions in draft status by using the “DRAFT” Command Option.

## Saving Your Settings
You can save your settings to a settings file and load previously used settings by using the EBI’s toolbar

Settings files have the extension “.ebi”. If necessary, it is possible to copy an existing settings file and edit it with a text editor. Note, however, that the password setting in a settings file is encrypted and can only be modified with the EBI. Control-S or Command-S is a shortcut for saving your settings.

## Setting Preferences
The EBI’s preferences settings allow you to configure the behavior of the EBI itself. The Preferences dialog is accessed by using the preferences toolbar button.

The following settings are available in the Preferences dialog - Basic Tab:

* Load last setting file when started EBI - settings file when starting EBI If this setting is checked, when next launched the EBI will automatically load the last opened or saved settings file (asterisk.ebi).
* Clear log each run - When checked the EBI will clear the log prior to starting each test or real run.
* Save password in settings file - When checked, upon save the EBI will encrypt and save the password in the connection tab to settings files.
* Log buffer size (lines) - This controls the maximum amount of text displayed in the EBI’s Log tab. Will revert to default (1,000 lines) if cleared.

The following settings are available in the Preferences dialog - Advanced Tab:

* Proxy Server Address - The address of your network’s proxy server if one is required to connect to openEQUELLA.
* Proxy Server Username - The username for basic or digest authentication with your network’s proxy server.
* Proxy Server Password - The password for basic or digest authentication with your network’s proxy server.
* Debug mode - When checked the EBI will output to the display and log files additional diagnostic information particularly when errors occur.
* Network logging - When checked network diagnostic information is displayed and recorded in the log for each HTTP request made to openEQUELLA. WARNING: log files grow rapidly when this setting is in effect, potentially more than 50Kb per item. To avoid excessively large log files only use this setting with a small set of records per run.
* Attachment chunk size (bytes)- Controls the size of each “chunk” that attachments are broken up into during upload. Each chunk is transmitted as a single HTTP or HTTPS request. Will revert to default (2 MB) if cleared.

These settings and others are stored in an automatically created “global” settings file.

## Saving Item IDs of Imported Items
It is possible to produce a list of item IDs assigned to the items that you imported. Do this by including an empty column in your CSV and setting its Column Data Type to “Item ID” (you can give it any column heading you wish). In doing this the EBI will create a copy of your CSV file in a sub folder called receipts found within the folder containing the CSV.

This copy of the CSV is created once the import is completed or halted. Amongst other uses, this can be used for producing a CSV of target identifiers for updating the imported items in the future.

By including a column with a column data type of “Item Version” the item version can also be saved.

By including a column with a column data type of “Row Error” any errors encountered when attempting to import a row will be saved to the CSV copy.

### Exporting Items
The EBI can be used for exporting metadata and attachments from openEQUELLA. This is done by checking Options tab -> Export Items as CSV. In this mode the EBI will re-label the Test Import and Start Import buttons as Text Export and Start Export respectively.

When the Start Export button is clicked EBI will iterate through items in openEQUELLA, populating the loaded CSV and downloading attachment files as it goes. Attachment files will be downloaded to the CSV folder or the folder specified in the base path in Options.

You can export item IDs and item versions by including columns with a column data type of “Item ID” and “Item Version” respectively.

### Exporting a Subset of Items
By default all live items in the collection specified on the Connection tab will be exported. Any pre-existing rows in the CSV will be erased (except the header row). Row filters can be used to limit the number of items exported.

If a Collection column is provided in the CSV then all collections in the openEQUELLA institution will be exported and the collection column will be populated with collection names.

A subset of items from the specified collection(s) can be exported by specifying a WHERE clause in Options tab -> WHERE clause.

By default only live items are exported. By checking Options tab -> Include non-live items items of any status will be exported.

### Using Identifiers to Export Individual Items
Source Identifiers and Target Identifiers can be used for selecting individual items for export based on IDs (item IDs or custom IDs) specified in the CSV

If using Source Identifiers with a “Collection” column it is possible to export items from more than one collection in the one run (the Collection drop-down will be ignored). If using Target Identifiers, items can be exported from any collection in the one run regardless of the presence of a “Collection” column.

By default, when using Source Identifiers or Target Identifiers only live items will be exported. However, by using Target Versions items of any status can be exported. For more information about Target Versions see section 6.9.3 Targeting Particular Item Versions, page 61. Alternatively, checking Options tab -> Include non-live items the highest version of the matching item will be exported regardless of its status.

### Conflicting Filenames
When exporting attachments, files from different items may have the same names and since EBI exports all files into the same folder there may be filename conflicts. Options tab -> Filename Conflicts allows you to decide what EBI should do in such cases. The options are the following:

* "Do not overwrite any files" -EBI will create subfolders if it encounters any same-named named files in the target folder (DEFAULT BEHAVIOR)
* "Overwrite files in target folder" -EBI will overwrite any same-named files in the target folder existing prior to export and create subfolders for same-named files it has downloaded in the current export run
* "Overwrite files with same names" - EBI will overwrite all files of the same names regardless if they existed in the target folder prior to export or from previous items in the same export run

### Limitations in the Export Function
For simple content the export capability will produce a CSV that can be used, without any modifications, for re-importing content back into openEQUELLA. However, EBI’s CSV export function does not support some of the more advanced EBI features. Features not supported (i.e. not exportable) are the following:
* openEQUELLA Resources (openEQUELLA resource attachments are not supported)
* Custom Attachments (only simple files, SCORM, IMS and zip files are exportable)

XML fragments and XPath indexes should be used with care. Whilst the export function supports both of these features complex metadata that uses “intertwined” XML fragments and XPaths may require some testing and fine-tuning to support smooth, repeatable two-way import/export of content between a CSV and openEQUELLA.

## Expert Scripting
For those comfortable with programming, the EBI supports powerful scripting capabilities called Expert Scripts. Amongst other uses, Expert Scripts allow you to precisely control how CSVs are interpreted for import into openEQUELLA and how openEQUELLA items are parsed and formatted for export out of openEQUELLA.
Expert Scripts are configured by clicking the Expert Script buttons in the Options tab.

There are four types of Expert Script that can be written:
* Start Script – This script is executed by the EBI before processing any rows or items. It is only executed once for each test or real run. It could be used, for example, performing a custom validation of the CSV prior to import.
* Row Pre-Script – This script is executed on every row imported or every item exported. It is executed as soon as a row or item is read from openEQUELLA and before any processing by the EBI. It could be used, for example, pre-processing the row data of the CSV prior to the EBI converts the data to item XML.
* Row Post-Script – This script is executed on every row imported or every item exported. It is executed after a row or item is read from openEQUELLA and processed by the EBI but prior to being added to openEQUELLA (or a CSV during export). It could be used, for example, adjusting the XML produced by the EBI prior to uploading to openEQUELLA.
 End Script – This script is executed by the EBI after processing all rows or items. It is only executed once for each test or real run. It could be used, for example, producing a custom outcome report of the import or export.

EBI Expert Scripts are written in the Python programming language (http://www.python.org). As well as
the standard Python libraries, Expert Scripts have a number of objects available to them for reading and
writing data as well as controlling and viewing the process flow of the EBI.

## Command Line Operations
The EBI can be started non-visually from a command prompt based on the settings in a settings file. In non-visual mode the EBI suppresses the main form and runs using the settings from a settings file. This can be useful for running the EBI as a scheduled task
(e.g. a cron job or a Windows Scheduler task).

### Windows
The settings filename can be expressed as a relative path from your current directory.

* ebi.exe –start settings filename -Run an import non-visually
* ebi.exe –test settings filename -Run a test import non-visually
* ebi.exe settings filename -Open the EBI visually

### Macintosh
The settings filename must be expressed as a full absolute path. Treat the ebi package as a directory
with filename ebi.app.

* ebi.app/Contents/MacOS/ebi –start settings filename -Run an import non-visually
* ebi.app/Contents/MacOS/ebi –test settings filename -Run a test import non-visually
* ebi.app/Contents/MacOS/ebi settings filename -Open the EBI visually

### Linux
Make certain that Python is installed and in your path environment variable. The settings filename can be expressed as a relative path from your current directory.
* python ebi.py –start settings filename   -Run an import non-visually
* python ebi.py –test settings filename   -Run a test import non-visually python
* ebi.py settings filename  -Open the EBI visually

Note: Even in command line mode the EBI requires a graphical user interface (GUI) or desktop environment be present in Linux.

### Examples
Starting an import run non-visually on Macintosh:
```
ebi.app/Contents/MacOS/ebi -start /Users/jimk/Documents/training_load.ebi
```
Starting a test import run non-visually on Windows:
```
ebi.exe -test "c:/my documents/test run.ebi"
```
Launching the EBI visually with a settings file loaded on Linux:
```
python ebi.py work_in_progress.ebi
```
## Appendices
### Appendix A: Tips and Troubleshooting
#### Getting Started
The EBI works well when configured correctly but if you are using it for the first time it can take some time and effort to get the CSV and settings exactly right.

The best approach is to start with a simple upload of a handful of files or hyperlinks with say nothing more than a couple of metadata fields (e.g. title and description).

Once you have a simple upload working gradually add additional and more complex metadata and content. Before using advanced features carefully read the relevant sections of this manual.

#### Microsoft Excel®
An excellent tool for producing CSV files is Microsoft Excel®. Use Microsoft® Excel’s “Save As…” command and set “Save as type” to “CSV (Comma delimited)(*.csv)”.

Among other benefits, CSV files produced by Excel automatically have the necessary formatting for handling commas.

In some errors the EBI identifies columns by their position number. For convenience, you can configure Excel to display numerical column headings rather than alphabetic.

This is done by checking the “R1C1 reference style” setting found in Office Button -> Excel Options -> Formulas in Excel 2007 and Tools -> Options -> General tab in Excel 2003.

#### Troubleshooting
Below are some common problems and corresponding solutions.
#### The EBI’s main screen fails to launch
1. Make certain you are not using the –start or –test command line arguments
2. Make certain that you have installed (i.e. extracted or copied the ebi folder/package) to a location that has read/write privilege

#### The EBI says it successfully imported items but I can’t find them in openEQUELLA
1. Ensure that you are performing a real run using “Start Import” and not a test run using “Test Import”
2. When looking for your freshly imported items check that your user account has the necessary privileges to the openEQUELLA collection. Your account will need at least DISCOVER_ITEM and VIEW_ITEM privileges to find the items in openEQUELLA.
3. Verify that the items are not in workflow moderation. If the collection that you imported into has a workflow template applied to it then items will likely be created with a status of “Moderating” and won’t appear in standard searches.

#### Item titles and descriptions are not displaying properly in openEQUELLA
1. When viewing your imported items in openEQUELLA they may appear without a title or description and instead the titles may be displayed as the UUID of the item.

This is caused by failing to populate the special Resource Name Path and Resource Description Path nodes of the item’s XML. These special nodes are set in the openEQUELLA schema configuration via the openEQUELLA Admin Console.

To correct the problem, first look up in the openEQUELLA Admin Console the XPaths for the Resource Name Path and Resource Description Path of the schema used by the collection you are attempting to populate.

Now check that the XPaths in the column headings of your CSV for your titles and descriptions match these values (minus the leading forward slash).

#### The EBI can’t find my attachments
1. Make certain that the column with the attachment paths is correctly set as “Attachment Locations” for its Column Data Type.
2. If the paths to the attachments in the csv are absolute paths (e.g. c:\my documents\attachments\FordEscape.jpg) double-check that they are correct.
3. If the paths to the attachments are relative paths make certain they are relative to the folder your CSV file is in. For example, if an attachment path is specified as attachments\FordEscape.jpg then the attachments folder must be a subfolder of the folder the CSV file is in.
4. If you have multiple attachments per item and CSV row make certain that you have specified a delimiter

#### Attachments aren’t appearing in my items (yet no errors)
1. Ensure that the column in your CSV where you specify the file names has a Column Data Type of “Attachment Locations”.

#### Attachments are not appearing in the openEQUELLA wizard
1. If the attachments appear in the item display page but not in the wizard then custom metadata referencing the attachments is missing. Ensure that the column heading of the Attachment Locations where the files are specified in the CSV uses an XPath that matches a metadata target of an Attachments Control in the wizard.

#### I’m receiving the error “CSV headings do not match the settings”
1. This error occurs when the column headings in the CSV file differ to the column headings in the EBI’s main form. This usually occurs because the CSV columns have been modified or rearranged since it was last loaded into the EBI. This can be rectified by either

a. clicking the Reload CSV button and selecting “Yes”. This allows the EBI to update the column settings to match the CSV, or

b. modifying the CSV so that it matches the columns in the EBI’s main form

#### I’m receiving the error “'utf8' codec can't decode byte”
1. This error occurs when the wrong encoding is being used to read the CSV file. Try changing the encoding to “latin1” and re-running the import.

#### Special characters are imported incorrectly into openEQUELLA
1. This can occur when the wrong encoding is being used to read the CSV file. Try changing the encoding and re-running the import.

#### The EBI errors trying to upload file attachments
1. If you receive the following error: “ERROR parsing Full resolution: [Errno 2] No such file or directory” and you are running the EBI on Linux, Unix or Macintosh ensure that you are using forward slashes in your file paths (“/”).

#### A column of metadata won’t import into my item yet there is no error
1. Make certain that the column’s Column Data Type has been specified as “Metadata” in the EBI’s main form.

#### My multi-value field is not being split into separate fields in openEQUELLA
1. Double check that this problem is actually occurring. Multi-value fields are only fully displayed in an openEQUELLA wizard if a multi-value control (e.g. a shuffle list control) is mapped to the metadata field. A non-multi-value control such as an edit box will only display the first value.

The best way to verify if your multi-value metadata is imported correctly is to either use a custom display template or directly view the item’s underlying metadata.

2. Check that you have specified the correct delimiting character or string for the column in the EBI:

3. Make certain that you are not attempting to split an attribute field. XML does not allow attributes to be repeated. An attribute field’s last node will start with an “@” symbol (e.g. item/itembody/@identifier).

#### Existing items won’t update using source identifiers
1. Make certain the source identifier field in the openEQUELLA schema is indexed for power searches
2. Make certain that the Source Identifier field in the EBI is set for the column where the source identifiers exist in your CSV
3. Make certain that the column heading of source identifiers column in your CSV is an XPath that matches the tag or attribute in the openEQUELLA schema where the source identifiers are stored in openEQUELLA.
4. Make certain that you are uploading the items into the correct collection
5. Make certain that the items are live. Only live items can be updated with source identifiers. Remove any workflow templates from the collection before doing an initial import or use target identifiers instead of source identifiers.

#### Only one IMS package is appearing on the item even though more are specified
1. openEQUELLA supports only one IMS package per item. If more than one IMS package is specified in the row (and IMS or AUTO is specified in the command options) only the last IMS package will be imported.

#### I’m receiving the error: “org.xml.sax.SAXParseException: The content of elements must consist of well-formed character data or markup.”
1. openEQUELLA is rejecting the XML document formed from the CSV metadata and column headings. This often happens when column headings have invalid XPaths (e.g. element names that start with numbers).

To determine where the exact problem lies try saving sample test XML files and viewing the file in a browser.

#### I’m receiving an error containing the text: “EQUELLA returned the following script error:”
1. openEQUELLA is unable to create or update the item sent from the EBI due to an openEQUELLA expert script error in the openEQUELLA collection configuration. The text following the error should indicate what the actual script error is. For example:
```
15:49:02: ERROR uploading file: openEQUELLA returned the following script
error: Can't find method com.tle.web.scripting.impl.ItemScriptWrapper .getItem(java.lang.String).
```
Examine and debug the expert script in the openEQUELLA Admin Console. This is easier if you are able to reproduce the error in an openEQUELLA contribution wizard.

## Appendix B: openEQUELLA WHERE Clause Syntax

An WHERE clause allows you to query on specific schema fields in openEQUELLA that have been configured to be indexed for Power Searches. For those familiar with database queries, an openEQUELLA WHERE clause is very similar to the WHERE clause of an SQL query.

###  Simple WHERE Clause
At a minimum, a WHERE Clause must start with a “WHERE” keyword and followed by an XPath, a comparison operator and, typically, a comparison value:

WHERE [XPath] [comparison operator] [comparison value]

Example:

WHERE /xml/meta/color is 'blue'

The four components of the statement should be separated by whitespace such as spaces, tabs or linefeeds.

Comparison Operator
The following comparison operators are available:
* is - For matching against string comparison values
* is not - For returning all results that do not match against a string comparison value
* like - For matching against strings. Can utilize the ‘*’ wildcard operator within strings or on the end of strings
* not like - For returning all results that do not match against the specified LIKE comparison
* in - For matching against any members of a group of comparison values
* not in - For returning all results that do not match any of members in a group of comparison values
* Greater Than Arrow - For returning results where a date field is later than a comparison date value
* Less Than Arrow -  For returning results where a date field is earlier than a comparison date value

Comparison Value

Comparison values are surrounded in single quotes such as:

'blue houseboat'

They can contain an asterisk symbol which is used in conjunction with a LIKE comparison operator, for example:

WHERE /xml/meta/name LIKE 'blue house*'

A group of comparison operators can be formed with parenthesis and commas and compared to with an IN operator. For example:

WHERE /xml/meta/status IN ('published', 'under review', 'in development')

### Check if a Schema Field Exists
You can return items where a field exists with an EXISTS keyword, e.g.:

WHERE /xml/meta/is_complete EXISTS

The converse statement is as follows:

WHERE NOT /xml/meta/is_complete EXISTS

### Combining Multiple Statements
By using the keywords AND and OR and by using parenthesis multiple statements can be combined to either narrow down searches or broaden searches

Example 1:
WHERE /xml/meta/name LIKE 'blue house*' OR /xml/meta/color is 'blue'

Example 2:
WHERE /xml/meta/name LIKE 'blue house*' AND /xml/meta/status IS 'published'

Example 3:
WHERE (/xml/meta/name LIKE 'blue house*' OR /xml/meta/color is 'blue') AND /xml/meta/status IS 'published'

### Full Syntax Reference
Following is a reference for the full syntax of WHERE Clauses in openEQUELLA described in Wirth syntax notation (WSN):
```
WHERE STATEMENT ::= "where"? BOOLEAN_EXPR BOOLEAN_EXPR ::= OR_BOOLEAN_EXPR OR_BOOLEAN_EXPR ::= AND_BOOLEAN_EXPR ("or" AND_BOOLEAN_EXPR)* AND_BOOLEAN_EXPR ::= CLAUSE ("and" CLAUSE)* CLAUSE ::= "not" CLAUSE | BRACKETS | COMPARISON | EXISTS_CLAUSE BRACKETS ::= "(" BOOLEAN_EXPR ")" COMPARISON ::= XPATH COMPARISON_OP COMPARISON_RHS EXISTS_CLAUSE ::= XPATH "exists" XPATH ::= "/" (ALPHA | NUMBER | [/._:@])+ COMPARISON_OP ::= "=" | "is" | "<>" | "is not" | "<" | "<=" | ">" | ">=" | "like" | "not like" | "in" | "not in" COMPARISON_RHS ::= "null" | NUMBER_VALUE | STRING_VALUE | GROUP_VALUE STRING_VALUE ::= "'" STRING "'" NUMBER_VALUE ::= NUMBER+ GROUP_VALUE ::= "(" STRING_VALUE ("," STRING_VALUE)* ")" STRING ::= (ALPHA | [0-9] | ...)* ALPHA ::= [a-zA-Z] NUMBER ::= [0-9]
```

## Appendix C: Expert Scripting Object Model
The EBI supports scripts called “Expert Scripts” to be written to control the processing of data beyond what is available through the CSV and EBI settings.

Following is the complete EBI scripting object model reference the list notes the Object, Allowed Contexts and Description

* action (Row Pre-Script import only, Row Post-Script import only) - Integer (read-only). Indicates if a new item being created or an existing item is being edited, new-versioned or deleted. Can be compared to the constants NEWITEM, EDITITEM, NEWVERSION and DELETEITEM e.g.
if action == NEWITEM:
logger.log("We’re creating a new item!")

* collection (All scripts) -  String (read-only). Returns the collection name specified in the EBI main screen.

* columnHeadings (All scripts) - List. A list of the column headings of the CSV.

* csvData (All scripts) - List. A complete representation of the CSV file as a list of lists.

* ebi (All scripts) - Object. Has the following members:
ebi.csvFilePath() – For reading and setting the absolute path of the CSV.
ebi.loadCsv() – Reloads the CSV.
ebi.basepath() – For reading and setting the absolute basepath for attachments.

* errorCount (All scripts) -  Integer (read-only). The number of items attempted to be imported or exported but failed. Does not include the current one being processed even if it results in an error.

* imsmanifest (Row Post-Script import only) - XmlScriptType (read-only). The imsmanifest of SCORM and IMS package attachments. Its value is None if neither an IMS nor a SCORM package attachment is specified in the CSV row.

* institutionUrl (All scripts) - String (read-only). Returns the openEQUELLA institution URL.

* itemId (Row Pre-Script export only, Row Post-Script) -  String (read-only). Item UUID of the current item being imported or exported.

* itemVersion (Row Pre-Script export only, Row Post-Script) - String (read-only). Item version of the current item being imported or exported.

* logger (All scripts) - Object (read-only). For outputting to the console and the log files. It has only one method, log(text, display=True, log=True). The parameters display and log decide if the output should be to the console and/or log files. E.g. the following example would log only to the log files:
logger.log("Hello world!", False)

* mode (All scripts) - Integer (read-only). Indicates if the process run is an export or an import. Can be compared to the constants EXPORT and IMPORT e.g.
if mode == IMPORT:
logger.log("Excuse me, we’re importing here!")

* process (All scripts) - Object (read-only). For controlling the flow of the import or export run. Has the following members:
process.halt() – Halts the entire run as soon as the script is complete.
process.skip() – Skips the current row (import) or item (export).
process.halted – Boolean (read-only). Indicates if the process is scheduled to be halted.

* rowCounter (Row Pre-Script,Row Post-Script End Script) -  Integer (read-only). The position of the row in the CSV that is currently being processed.

* rowData (Row Pre-Script import only, Row Post-Script) - List. An array of a single row as read from the CSV during export or as produced by the EBI during import and prior to writing to CSV. Modify the contents to adjust the calculated row data in an export or receipts file or for pre-processing row data prior to conversion to XML during an import.

* sourceIdentifierIndex (All scripts) - Integer (read-only). Index of the source identifier column. -1 if none specified.

* successCount (All scripts) - Integer (read-only). The number of items successfully imported or exported not including the current one being processed.

* targetIdentifierIndex (All scripts) -Integer (read-only). Index of the target identifier column. -1 if none specified.

* targetVersionIndex (All scripts) -
Integer (read-only). Index of the target version column. -1 if none specified.

* testOnly (All scripts) - Boolean (read-only). Indicates if the process run is a test run only.

* username (All scripts) - String (read-only). Returns the username that the openEQUELLA connection was established with.

* vars (All scripts) - Dictionary. A general purpose dictionary cleared at the commencement of each run and persisted through each run. Made available to scripts for passing parameters between scripts and rows/items.

* xml (Row Pre-Script, Row Post-Script) - XmlScriptType. A wrapper to xmldom (see below). Same data as xmldom but with many helper functions. See xml Object Reference below for a complete reference.

* xmldom (Row Pre-Script, Row Post-Script) -  xml.dom. The standard Python xml parser loaded with item XML. XML as produced by the EBI during import (prior to submitting to openEQUELLA) or item XML of the current item in openEQUELLA being exported (prior to conversion to row data).

See http://docs.python.org/2/library/xml.dom.html for the complete object reference.

A handy function for debugging is xmldom.toprettyxml() which returns a formatted, indented string representation of the XML document.

### xml Object Reference
The xml object is a variable of type XmlScriptType. It is similar in functionality to the xml object available in openEQUELLA scripting but with slightly different method names.

Technically XmlScriptType is a wrapper to the fully-featured Python library xml.dom with additional helper functions to simplify common tasks.

Below are the methods of xml and other XmlScriptType objects.
* createNode(xpath, value) - Creates an element or attribute at the specified XPath with the text value supplied. Creates the path as required.
* document - The xml.dom.Document that is wrapped by the XmlScriptType
getNodes(xpath, string=True)
If string=True:
List of Strings. A list comprising of each text value found at every matching element or attribute.
If string=False:
List of xml.dom.node. A list comprising of each matching xml.dom.node (element or attribute).
* getNode(xpath) - String. Returns the text value of the element or attribute.
* getSubtree(xpath) - XmlScriptType. Returns an XmlScriptType (same type as xml) if an element is found at the given XPath (otherwise returns None).
* getSubtrees(xpath) - List. Returns a list of XmlScriptTypes (same type as xml) matching the given XPath. Can be used as follows:
for dog in xml.getSubtrees("meta/dogs/dog"):
logger.log(dog.getNode("name"))
logger.log(dog.getNode("breed"))
Note: this method replaces the deprecated function iterate()
* newSubtree(xpath) - XmlScriptType. Creates and returns an XmlScriptType (same type as xml) at the given XPath.
* removeNode(xpath) - Removes all matching elements and attributes.
* root - The root element xml.dom.Node of the underlying document xml.dom.Document
* nodeCount(xpath) - Integer. Returns the number of attributes or elements found matching the given XPath.
* nodeExists(xpath) - Boolean. Indicates if an element or attribute exists at the given XPath.
* setNode(xpath, value) - Sets an element or attribute at the specified XPath with the text value supplied. Creates the path as required.
*
The context of the XPaths in the methods are at the root element of the documents (/xml in the case of openEQUELLA item XML). The xpath parameter used in the methods support only some of the W3C XPath 1.0 specification.

Note that elements are indexed starting at 1 not 0.

The methods createNode() and setNode() will create the necessary elements for the entire XPath if they are not present. The methods do this by creating the necessary subtree starting from the last existing node in the XPath. For example if /xml/item already exists in the metadata then an XPath of /xml/item/role/author would see the nodes role and author created under the existing item node.

## Appendix D: Expert Script Examples
Following are some simple EBI Expert scripts examples.
###
Example: Mapping Ordinary CSV Headings to XPaths

Suppose that the CSV for import into openEQUELLA is regularly exported from another system and has the following column headings: ID, Title, Description, Keywords, URL

Now suppose that the columns are to be mapped to the following schema fields in your openEQUELLA institution:
ID -> sourceidentifier
Title -> name
Description -> description
Keywords -> keyword
URL -> url

You could of course manually update the columns in your CSV to match the XPaths of the schema. However, if the same CSV is regularly exported from the source system for import into openEQUELLA this can be a tiresome and error-prone task.
An alternative is to use a Start Script to automatically map the column to XPaths prior to each import.
1. Add the following script in the Start Script:
```
# map of CSV columns to schema XPaths columnMap = { "ID":"metadata/@sourceidentifier", "Title":"metadata/name", "Description":"metadata/description", "Keywords":"metadata/keywords/keyword", "URL":"metadata/urls/url", } for pos, heading in enumerate(columnHeadings): if heading in columnMap: columnHeadings[pos] = columnMap[heading]
```
2. Update the columnMap dictionary as appropriate for your CSV and schema:
3. Run the import

The above script will work for EBI exports as well.

### Example: Transforming CSV Data Values
Even when the column headings map correctly to openEQUELLA metadata, sometimes the actual data provided in CSV cells require transformation and Expert scripts can be used. For example, suppose an openEQUELLA collection and schema expects the field /xml/metadata/subject populated by one of the following values: Mathematics, Sciences, Languages, English Language Arts, Social Sciences

However, suppose that the CSV provided (perhaps a report/export from another system) instead uses the values “MATH”, “SCI”, “LANG” ENG” and “SS”:

The following examples show how the data itself can be transformed during the import process using one of two approaches: either with a Row Pre-Script or with a Row Post-Script.

Approach A: Using a Row Pre-Script
The following script meets the requirement by converting the raw values in the “metadata/subject” cell to the values configured in the openEQUELLA collection each time a row is read from the CSV. This occurs prior to the EBI converting the row data to XML and uploading to openEQUELLA.
1. Add the following script in the Row Pre-Script:
```
value = rowData[columnHeadings.index("metadata/subject")] if value == "MATH": value = "Mathematics" elif value == "SCI": value = "Sciences" elif value == "LANG": value = "Languages" elif value == "ENG": value = "English Language Arts" elif value == "SS": value = "Social Sciences" rowData[columnHeadings.index("metadata/subject")] = value
```
4. Run the Import

Approach B: Using a Row Post-Script
Using the following Row Post-script, each time a row is read from the CSV, as per usual EBI will first convert the row data to XML. The script will then convert the values in the XML at “/xml/metadata/subject” to the values configured in the openEQUELLA collection prior to the EBI uploading it into openEQUELLA.

1. Add the following script in the Row Post-Script:
```
value = xml.getNode("metadata/subject") if value == "MATH": value = "Mathematics" elif value == "SCI": value = "Sciences" elif value == "LANG": value = "Languages" elif value == "ENG": value = "English Language Arts" elif value == "SS": value = "Social Sciences" xml.setNode("metadata/subject", value)
```
3. Run the Import

### Example: Including a Column of Absolute Item URLs in an Export
Supposing you wish to include the absolute URL of each item in an export. The URL of an item is not included in an item’s metadata but is producible with EBI Expert scripts.

In the following script each time an item is read from openEQUELLA, as per usual EBI will first convert the XML to row data. The script will then populate the cell with the column heading of “Item URL” with the item URL (calculated in the first line of the script) prior to the EBI outputting the row data to the CSV file.

1. Add a column to your CSV headed “Item URL”
2. Set it’s datatype to “Ignore”
3. Add the following script in the Row Post-Script:
```
itemUrl = "%s/items/%s/%s" % (institutionUrl, itemId, itemVersion) rowData[columnHeadings.index("Item URL")] = itemUrl
```
4. Run the export

### Example: Including a Column of Attachment UUIDs in a Receipts file
With Expert scripts it is possible to write data to a Receipts file. In this example, a Row Post-script is used to populate an empty column in a Receipts file with resulting attachment UUIDs.
1. Add an empty column with the heading "Attachment UUIDs" to the CSV and set its column datatype to "Ignore"
2. Make certain another column empty is set as a Receipts column
3. Add the following script in the Row Post-Script:
```
attachmentUUIDs = [] for attachment in xml.iterate("item/attachments/attachment"): attachmentUUIDs.append(attachment.getNode("uuid")) rowData[columnHeadings.index("Attachment UUIDs")] = "|".join(attachmentUUIDs)
```
6. Run the import

### Example: Dynamically Controlling Where Attachments are Exported to
When exporting all local attachments are downloaded to the attachments basepath (specified on the Options tab, CSV folder by default). You can, however, specify the basepath in an expert script by setting ebi.basepath.

In the following scripts each time an item is read from openEQUELLA, the Row Pre-Script will calculate the preferred location of the local attachment, in this case a subfolder of the attachments basepath based on subject metadata. After openEQUELLA has exported the item’s file the Row Post-Script will modify the filepath exported to the CSV to each local attachment to reflect the subfolder it is located in.

1. Add the following script in the Row Pre-Script:
```
import os
# determine name of sub folder in basepath to export attachments to
subject = xml.getNode("metadata/subject") if subject == "Geological": vars["folder"] = "geology" elif subject == "Plants": vars["folder"] = "plants" elif subject == "Animals": vars["folder"] = "animals" else: vars["folder"] = "other" # save original basepath vars["unmodifiedBasepath"] = ebi.basepath # modify basepath to include sub folder ebi.basepath = os.path.join(ebi.basepath, vars["folder"])
```
2. Modify the code to calculate vars["folder"] as needed
2. Add the following script in the Row Post-Script:
```
import os
# modify attachment location to include subfolder in path
rowData[columnHeadings.index("metadata/files/file")] =  os.path.join(vars["folder"],  rowData[columnHeadings.index("metadata/files/file")])
# restore basepath to original basepath
ebi.basepath = vars["unmodifiedBasepath"]
```
4. Adjust the XPath to reflect where attachment locations are specified in the CSV tab
5. Run the export

## Appendix D: XPath 1.0
Support (Limited The EBI supports a limited subset of XPath 1.0 and XPath 2.0 functions. The supported XPath features are listed below. Note that elements are indexed starting at 1 not
Operators:
```
/
//
.
..
[
]
*
@*
=
!=
<
>
<=
>=
+
- (NOTE: must be surrounded by spaces)
(
)
```

Functions:
```
string(object)
true()
false()
not(boolean)
position()
last()
upper-case(string)
lower-case(string)
substring(string, start)
substring(string, start, length)
starts-with(string, string)
ends-with(string, string)<
contains(string, string)
concat(string, string, ...) (NOTE: two or more parameters required)
name()
name(node)
```

### Examples of Supported XPaths
Comparisons
```
people/person[name[@type='first'] > 'M']/name
people/person[name[@type='first'] < name[@type='last']]/name
people/person[@id<2 and @year='2015']/name
people/person[name[@type='last']='Smith' or name[@type='first']='Sue']/name
vehicles/vehicle[make]/model
```
Functions
```
vehicles/vehicle[not(year='2010')]/model
people/person[@id='1']/name[text() > 'M']
people/person[position()=2]/name
vehicles/vehicle[upper-case(make)='HONDA']/@id
vehicles/vehicle[substring(make,2)='onda']/model
vehicles/vehicle[substring(make, 2, 3)='ond']/model
vehicles/vehicle/model[string-length()=5]
vehicles/vehicle[starts-with(lower-case(make), 'hon')]/model
vehicles/vehicle[contains(model, 'ond')]/@id
vehicles/vehicle[concat(@id,make,model)='7372HondaCivic']/@id
```
Arithmetic
```
people/person[7 - (last() - 3) = position()]/name
people/person[substring(name[2], string-length(name[2]) - 2, 3)='vis']/name
NOTE: minus (-) symbol must be surrounded by spaces
Context and Wildcards
people/person[1]/*[last()]
//@id
people/person/name[text()='Bob']
/doc/people/person[1]//@*[contains(., 'i')]
/doc//node()[contains(lower-case(.), 'f')]
people/person[1]/person/../../person[2]/@id
```

## Appendix E: Global Settings
The EBI has global settings that control the overall behavior of the application. Some global settings can be changed in the Preferences dialog inside the application.

Global settings are stored in the ebi.properties file located in the EBI’s application folder on Windows and Linux and in ebi.app/Content/Resources/lib on Macintosh. If this file is not present when the EBI is first launched the EBI will automatically create it. Each global setting is of the form settingname = value and must be specified under a section of the form [sectionname]. For example:
```
[State] settingsfile = C:\Users\jim\Documents\Upload_test.ebi [Configuration] loadlastsettingsfile = True attachmentmetadatatargets = True
```
If a global setting is not present in ebi.properties a built-in default value is used. The EBI loads the global settings into memory upon launch. Thus, though changes to the global settings file can be made whilst the EBI is running the changes will only take effect when the EBI application is re-launched (i.e. shut down and restarted). Changes made to global settings via the Preferences dialog do not require a restart.
