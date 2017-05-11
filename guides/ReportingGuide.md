[Home](https://equella.github.io/)

# Reporting User Guide

Table of Contents
* [Report Designer overview](#report-designer-overview)  
* [Installation](#installation)
* [EQUELLA reporting](#equella-reporting)
* [Create a report](#create-a-report)
* [Upload a report](#upload-a-report)
* [Run a report](#run-a-report)
* [Data sets](#data-sets)
* [Freetext](#freetext)
* [Joint data set example usage](#joint-data-set-example-usage)
* [User management](#user-management)
* [Scenarios](#scenarios)

## Report Designer overview 

The EQUELLA Report Designer is a customized version of BIRT™ (Business Intelligence and Reporting Tools), a product derived from the Eclipse Foundation™ that supports the development of complex reports using standard relational database queries.

The purpose of this guide is to provide administrators with an understanding of the EQUELLA reporting process.

Please note that this guide has been developed to best reflect the full capabilities of EQUELLA and as such may differ in appearance to your own installation.

### Report creation overview
To create an EQUELLA report the following tasks must be completed:
* A copy of the EQUELLA Report Designer must be installed on a machine that can communicate with the EQUELLA repository. 
* A username and password for a user with the DESIGN_REPORT privilege must be provided to allow the Report Designer to connect to the repository. 
* A report design is developed and tested.
* The report design is then uploaded to the EQUELLA server.

Once created and uploaded, any user with suitable privileges can run the report by selecting the Generate Reports link from the EQUELLA Digital Repository.

### Prerequisites
Knowledge of SQL is an absolute requirement for generating reports with the Report Designer.

Additionally it is strongly recommended that training start with the online Eclipse BIRT tutorials:

<http://www.eclipse.org/birt/phoenix/tutorial/>

## Installation

Versions of the EQUELLA Report Designer  are available for download from the open source community. These versions are supported by EQUELLA and use BIRT 2.6.1.

### Install the EQUELLA Report Designer
#### Download the Report Designer files

Install the Report Designer on Windows
1. After downloading the archive file appropriate to your operating system. 
2. Unzip the contents of the archive file to a suitable location on a local machine. 
3. Run BIRT.exe to open the BIRT Report Designer
Once the BIRT Report Designer is running, it is ready for report creation and editing.

#### Install the Report Designer on Linux/Mac
The Linux/Mac Report Designer files are versions of Eclipse with Business Intelligence and Reporting Tools, and the EQUELLA plug-in, built in. 
1. Extract the contents of the file to a suitable location on your local filesystem.
2. Inside the eclipse folder, run eclipse.
3. Select a workspace by entering one of your own or leaving it as the default.
4. Once inside Eclipse, select New, then Other, from the File menu, or press Ctrl+N to display the New dialog.
5. Expand the Business Intelligence and Reporting Tools folder and select Report.
You are ready to design your report.



## EQUELLA reporting

The following tasks must be completed to create a report that can be used with EQUELLA:
* Create a report design using the EQUELLA Report Designer.

-Connect to the database to access the necessary data.

-Retrieve specified data from the data source.

-Format the report presentation.
* Upload the report design to EQUELLA using the Administration Console Reporting plug-in.

A single instance of the Report Designer can be used to create reports for multiple institutions, as each report design has a distinct database connection.

## Create a report

1. Select New and then New Report from the File menu to open the New Report dialog.
2. Enter a File name for the new report design.
3. Select a File location for storing the report design, by checking the Use default box, or clicking Browse to select a location from the local file system. 
4. Click Finish. The new report is created and opened in the Report Designer.

The Report Designer can now be used to create a data source, data sets and a layout for the report.

### Data sources
Each report requires a connection to a data source to retrieve data for the report. The Report Designer provides a custom data source that can be used for EQUELLA reports. The Data Explorer view is used to create a connection to a database.

To create a data source
1. Select the Data Explorer tab to activate the Data Explorer pane.
2. Right-click Data Sources then choose New Data Source to display the New Data Source wizard 
3. Select EQUELLA Datasource from the list of available sources.
4. Enter a Data Source Name (e.g. Sample Data Source).
5. Click Next to display the EQUELLA Datasource Wizard.
6. Enter the EQUELLA institution URL for the EQUELLA institution providing the report data (e.g. ‘http://equella.myinstitution.edu/institution/’).
7. Enter the User Name and Password of a user with the DESIGN_REPORT privilege
8. Click Test Connection to display a dialog indicating the connection state. If the connection could not be made, check the connection details and repeat the test.

(NOTE: Creating reports without a working connection is not recommended as data set columns and types cannot be verified, causing queries using the incorrect types to fail.)

9. Click Finish to create a data source.
### Data sets
Data sets specify what data to retrieve from the data source. A data set that returns report data can now be created from the previously created data source.

To create a data set
1. Right-click on Data Sets in the Data Explorer tab and select New Data Set. The New Data Set wizard is displayed.
2. Select a data source from your list of available data sources. In this case, it is the previously created ‘Sample Data Source’. 

The EQUELLA Report Designer provides the following data set types:
* UserManagement Dataset—provides user data stored in systems outside EQUELLA.
* JDBC Data Set—provides data from the EQUELLA database.
* Freetext Dataset—provides data by performing free text queries on item metadata, returning custom fields that are not stored directly in the database.

The following example uses the ‘mime_entry’ table from a JDBC Data Set. 

3. Select JDBC Data Set from the Data Set Type drop-down list
4. Enter a Data Set Name. In the case, 'Sample Data Set'.
5. Next to display the JDBC Query wizard.

Queries can be created by dragging items from the Available Items list to the SQL query area. Queries can also be entered directly using Standard SQL.

6. Create a query. 
7. Click Finish to create the data set.

The data set is displayed in the Edit Data Set dialog in Edit mode.

To provide a preview of the results returned by the query

8. Select Preview Results. The results of the query are displayed.
9. Click OK to close the Edit Data Set dialog.

The new data set and fields will be listed under Data Sets in the Data Explorer tab. 

#### View or edit a data set
To view or edit the results returned by a data set:
1. Select the Data Explorer tab to activate the window.
2. Right-click the data set and select Edit. The Edit Data Set dialog is displayed.
3. Test the query by selecting Preview Results from the left-hand pane.

### Formatting the report
The Report Designer can now be used to format the report presentation using the Palette view.
1. Select the Palette tab to activate the Palette pane. 
2. Click to drag a Table item and drop it onto the new report main layout window to display the data set results.
3. On the Insert Table dialog that appears, select the Number of columns and Number of details to display. 
(NOTE: The ‘Number of details’ field represents the number of rows in the details band, which repeats for each row in the data set. For the purposes of this report, it is set at 1, as we just want to print out one line of data for each row.)
4. Choose the appropriate Data Set. 
5. Click OK to create the table in the main layout window. 

A table comprises a Header Row, Detail Row (data set results) and Footer Row.

6. Click and drag the Text item from the Palette to each column in the Header Row. Doing so will open the Edit Text Item dialog each time, where Header details can be entered. 
7. To configure the Details Row, select the Data Explorer tab then expand the Data Sets.
8. Drag the field (e.g. TYPE) from the previously created data set to the first column in the Detail Row.
9. Drag the next field (e.g. DESCRIPTION) to the second column in the Detail Row.
10. Save the new report.

Further information on report creation is provided in the BIRT documentation at http://www.eclipse.org/birt/phoenix/tutorial/.

Once the report is created it can be uploaded to any instance of an EQUELLA institution.

### Report parameters
Report parameters are values that can be passed into reports using BIRT. They are added to a report to filter results, restrict information users can view, or to allow one report to pass a parameter to another report. Report parameters can include simple parameters that a user can enter or a predefined list created from a table or several tables.

EQUELLA provides a wizard where the user will be prompted to enter the parameter values when running the report.

#### Create a report with parameters
The following example creates a report with parameters the user can enter via a wizard when the report is generated in the EQUELLA Digital Repository.

The details of this sample report are as follows:
* Report name—Status Report
* Parameter names—Version and Item Status
* Data Set name—Data Set Status
* Query type—JDBC Query

To create the report
1. Create a new report (e.g. Status Report).
2. Create a data source. (Hint: alternatively, right-click on a previously created data source and copy it, then paste it into the new report.)

To create the parameters

3. Select the Data Explorer tab to activate the pane.
4. Right-click on Report Parameters and select New Parameter. The New Parameter dialog is displayed.
5. Enter a Parameter Name and Prompt text. An example ‘Version’ parameter is shown.
6. Select a type (e.g. Decimal) from the Data type drop-down list.
The EQUELLA Report Designer provides Boolean, Date, Date Time, Decimal, Float, Integer, String, and Time data types.
7. Select a display type (e.g. Text Box) from the Display type drop-down list.
The EQUELLA Report Designer provides Text Box, List Box, Combo Box and Radio Button display types.
8. Enter a Default value.
9. Click OK to save the details and close the New Parameter dialog.
10. Create another parameter. An example ‘Item Status’ parameter is shown.
11. Click OK to save the details and close the New Parameter dialog.
The new parameters will be listed under Report Parameters in the Data Explorer tab. 

To preview the parameters
1. Select Report Parameters in the Data Explorer pane.
2. Select the Preview tab in the center of the report designer. The preview of the parameter is displayed. 
3. Click OK to close the Enter Parameters dialog.The new parameters can now be added to a report query.
Parameters are added to a report query as a ?.
#####  Example
The following example creates a JDBC data set called ‘Data Set Status’ and uses the previously defined ‘Item Status’ and ‘Version’ parameters.

To add the parameters to a report query
1. Select the Data Explorer tab to activate the window.
2. Right-click Data Sets and select New Data Set. The Edit Data Set dialog is displayed.
3. Select a Data Source and enter a Data Set Name (e.g. Data Set Status).
4. Select JDBC Data Set then Next  to display the JDBC Query window.
5. Create a query with parameters. 
6. Click Finish . The Edit Data Set dialog is displayed.
7. Select Parameters from the left-hand pane.
8. Select New to display the New Parameter dialog.
9. Enter a name in the Name field (e.g. ITEM_STATUS). 
10.  Select a type from the Data Type drop-down list. (NOTE: This should match the previously selected type for this parameter.
11. Select a report parameter from the Linked to Report Parameter field (e.g. Item Status); this will automatically disable the Default Value field.
12. Click OK to save your created parameter.
13. Select Yes to confirm that you wish to update the report parameter’s value with the data set parameter’s value.
14. Add another parameter. An example ‘VERSION’ parameter is shown with the ‘ITEM_STATUS’.
15. Click OK to close the Edit Data Set dialog.
16. Format the report presentation or drag the data set and drop it onto the new report main layout window to display the data set results in table format. Format the report using the Palette tab. 
17. Test the report by selecting the Preview tab in Report Designer.
18. The report will run with the default parameters. 
19. To test the use of parameters, select Show Report Parameters from the Preview tab and enter values in the displayed fields.
Once a report with parameters is uploaded to EQUELLA the user will be prompted to enter parameter values before the report is generated. 

### Hyperlinks
Reports can be created that drill-through from one report to another. The main report passes the identity of the item to the drill-through report as a report parameter. If the item is a hyperlink, the drill-through report then uses the parameter value to display only data corresponding to the item the user clicked on.

This approach can be used to create landing pages for directing users to different reports when multiple report designs have been uploaded to a single EQUELLA report.

#### Create a report with a hyperlink
The following example creates a main report with a hyperlink and a drill-through sub-report. The report details are as follows:
* Main report name—User Report
* Data Set name—User Data Set
* Query type—JDBC Query
* Sub-report name—Item Report
* Sub-report Parameter name—Owner
* Sub-report Data Set name—Item Data Set
* Sub-report Query name—JDBC Query

To create the main report with hyperlinks
1. Create a main report (e.g. User Report)
2. Create a data source
3. Create a JDBC data set 
4. Format the report presentation with a table 
 
To create a sub-report with a parameter
1. Create a new report (e.g. Item Report) with a parameter (e.g. Owner) 
3. Create a JDBC data set with a parameter. 




To add the new parameter to a report query
1. Right-click the data set (e.g. Item Data Set) and select Edit to display the Edit Data Set dialog.
2. Select Parameters from the left-hand pane.
3. Select New and add the parameter. 
4. Click OK  to close the New Parameter dialog.
5. Click OK  to close the Edit Data Set dialog.
6. Save the report.

To add a hyperlink to a main report
1. Select the main report in the Report Designer (e.g. User Report).
2. Select the Detail Row cell you will create as a hyperlink. 
3. Select the Property Edit-Data tab. The Properties tab is displayed.
4. Select Hyperlink from the Properties list.
5. Click the Edit... button in the Link To: field to open the Hyperlink Options dialog.
6. Select the Drill-through radio button from the Select Hyperlink Type group to display the configuration options for drill-through hyperlinks. 

7. In Step 1: Select a target report: of the dialog, select the Report Design radio button.
8. Click the folder button and navigate to the location of your sub-folder on the file system (e.g. Item Report).
9. Select the sub-report then click Open to store the report. 

To add the report parameters
1. In the Report Parameters field, select the first blank cell under the Parameters column heading, and click the arrow button to display a list of available parameters.
2. Select the already defined parameter. This is the parameter that will be passed through to the main report.
3. Select the Values field then the ... button to open the Expression Builder.
4. Add the value:

a. Select a Category (e.g. Available Column Bindings).

b. Select a Sub-category (e.g. Table).

c. Double-click to insert the selected binding (e.g. uuid).

The completed Expression Builder dialog would display and show ‘row[“uuid”]’ as the selected column binding field set to the report table.

5. Click OK to close the Expression Builder.
6. In Step 5: Select a format for target report: of the dialog, check the checkbox alongside the Format the target report in: field.
7. In the corresponding drop-down menu, select html. The hyperlink feature will not work if PDF is selected as the target format for the report.
6. Click OK  to save the options and close the Hyperlink Options dialog.

Once both the main report and the sub-report are uploaded to the EQUELLA Resource Center, the main report will contain hyperlinks that when selected will drill-through to the sub-report and present only relevant information. 

### Create a landing page for handling multiple reports

This approach can be used to create landing pages for directing users to different reports when multiple report designs have been uploaded to a single EQUELLA report.

Once you know which report design files you will be adding to your report, it is possible to create links to those report designs using the ‘drill-through’ approach. Hyperlinks can be added to your page which, when clicked, will execute the report. 

Once completed, the landing page can be saved as a .rptdesign file and uploaded to EQUELLA as part of a reporting archive. 

## Upload a report

Once the report is created it can be uploaded to any instance of an EQUELLA institution. The data connection is automatically re-configured to use the server running the report.

Reports are uploaded using the Administration Console Reporting plug-in.

### Upload a single report
1. To open the EQUELLA Administration Console
Open a browser and enter your EQUELLA URL (e.g. ‘http://equella.myinstitution.edu/logon.do’).
2. Log in to EQUELLA as an administrator user. The EQUELLA Dashboard page is displayed.
3. Select Settings from the left-hand navigation pane.
4. Select Administration Console from the list of Settings categories. 
5. From the Administration Console, select Reporting. 
6. Click +Add  to open the Report Editor dialog.
7. Enter a Report Name and Description. 
8. Click Upload and navigate to a previously-created report design. (NOTE: Clicking the Download button will prompt the user to save a selected report design to the local filesystem.)
9. Select the report design then click Open to upload it to the report.
10. Configure Access Control, if required. 11. Click Save to save the report then click Close to close the Report Editor.

### Upload multiple reports
It is possible to upload multiple report design files into a single EQUELLA report, by combining the report files into a .zip archive. The archive can then be uploaded to an EQUELLA report, creating the same effect as uploading the report design files individually.

1. Create one or more report design files using the Report Designer.
2. Add them to a .zip archive.
3. Open the Administration Console Report 4. Editor, as described above.
5. Enter a Report Name and Description.
6. Click Upload  and browse to your newly created .zip file.
6. Click Open. The .zip file will attempt to upload to EQUELLA. If there are no report design files inside the zip, you will see a warning dialog informing you to upload another file because that one is not valid. Valid file types include .rptdesign and .rptlibrary. Only .zip archive types are accepted.

With the .zip file uploaded, EQUELLA automatically unpacks the files and displays them in the Administration Console. 

With multiple report files uploaded, EQUELLA needs to know which report to load first. This is configured in the Initial Report Design field of the Report Editor. While any report can be chosen for this purpose, it is good practice to design a purpose-built landing page where users can access the reports from. 

7. Select your landing page as the Initial Report Design by selecting the .rptdesign file from the drop-down menu, or leave it as the default.
8. Click Save to save the report then click Close  to close the Report Editor.

## Run a report

The report access is controlled by the report Access Control and can be configured to suit the requirements of the institution. Users with the EXECUTE_REPORT privilege are able to run reports.

To run a report
1. Open a browser and enter your EQUELLA URL (e.g. ‘http://equella.myinstitution.edu/logon.do’).
2. Log in to EQUELLA as an administrator user. The EQUELLA Dashboard page is displayed.
3. Select Reports from the left-hand navigation pane. 
4. Select the newly create report (e.g. Example Dataset (MIME_TYPES)).
5. Confirm that you are sure you want to run the selected report on the popup dialog. 

The generated report will appear in a new browser window. The time required to generate a report depends on the complexity of the report and the system used to generate the report.

### Run a report with parameters
When running a report with parameters, the user will be prompted to enter values. The display report will only contain information that matches the entered values.

The report can be generated using the default parameter values, or the values can be changed as required.

To change the default parameter values
1. Enter a parameter value in the parameter field. (For example, to change the default value, in the Please enter the item status you wish to find type a status like DRAFT or MODERATING.)
2. Click Execute Report to display the report details.

### Disable generation of sub-reports
Some reports cannot be, or do not need to be, generated because they are created from the details of other reports. EQUELLA provides a feature that facilitates the hiding of such reports. When uploading the report, checking the Hide on Generate Reports screen checkbox will conceal the report from users in the Resource Centre.

When a main report uses a sub-report, the main report passes the identity of the key item to the sub-report as a report parameter. The sub-report uses to parameter value to only display detail rows corresponding to the specified key item.

To hide the sub-report
1. Create a main report and the sub-report. 
2. Upload the main report in the Administration Console as described in the Upload a report section.
3. Upload a sub-report in the Administration Console. 
4. Check the Hide on Generate Reports screen checkbox to conceal the sub-report from users in the EQUELLA Reports page.
Both reports will be visible in the Administration Console.

In the EQUELLA Resource Center
1. Select Reports from the left-hand navigation menu.
2. Select a report to run by clicking the report name link. 
3. Click OK in the dialog questioning if you are sure you want to run the report. 
If the main report relies on a sub-report and the sub-report has not been uploaded as a separate report, an error message will be displayed asking the user to upload the missing report.
4. Select a hyperlink in the username field to display only data in the sub-report corresponding to the selected item. The result displayed  is from the hidden sub-report Item Report and contains only results matching the input parameter from the selected username hyperlink.
 
## Data sets

EQUELLA provides multiple data sources for reporting:
* UserManagement Dataset
* JDBC Data Set
* Freetext Dataset.

The UserManagement Dataset provides access to user information kept in a system separate to EQUELLA such as LDAP or a replicated datastore user management system.

The JDBC Data Set provides a standard interface allowing any reporting tool to create reports for EQUELLA. The other two data sets are only available to users of the Report Designer. 

The Freetext Dataset provides access to item metadata.

Any of the data sets can be selected during the Report Designer New Data Set configuration.

## Freetext

The Freetext Dataset can be used to perform fast freetext queries on item metadata returning custom fields. The returned fields are artefacts created from the freetext search and do not represent any actual database structure. It is for this reason that standard reporting tools cannot query on this data set. The fields used in queries need to be indexed for power searching.
### Create a Freetext Dataset
To open the New Data Set dialog
1. Right-click the Data Sets folder in the Data Explorer and select New Data Set.
2. Select a Data Source, and select Freetext Dataset from the Data Set Type drop-down menu.
3. Enter a Data Set Name. 
4. Click Next  to display the Free Text Query dialog.


The Freetext Dataset provides multiple Query Types and each query type is optimized for returning different metadata. 

5. Click Finish to display the Edit Data Set dialog. 

Adding an Alias or Display Name to a column modifies the name of the columns in the preview and Report Designer interface. To modify the report columns, use the Report Designer Palette.
The results of the search can also be previewed by selecting Preview Results. 

6. Click OK to save the data set.

The data set has been created and can now be used to return data to the report.

### Freetext Query Types
The available query types are:
* Query items
* Count of items
* List files
* Matrix Search
* Matrix Count

####  Query items
Configuring this query type requires query text. An optional Where Clause can also be included to direct the searching. The behavior of this query type mimics an EQUELLA Power Search.

##### Query Text
Any free text query such as ‘education’ or ‘Tas*’.
##### Where Clause
This field is optional. It is an XOQL-like query for searching on specific metadata in items.

For example, /xml/item/name like ‘Example%’ will search for items with a name child element starting with ‘Example’.

(NOTE: Each metadata path must start with ‘/xml’.)

#### Count of items
Count of items query type uses the same input fields as Query items but only returns a count of returned items.

#### List files
The List Files option returns all the files comprising items returned by the query. Column names and aliases can be configured to allow meaningful names to be substituted for the database column names.

#### Matrix Search
Matrix Search retrieves a list of items that contain one or more of the specified metadata schema fields. The Matrix Search only returns information from schema nodes that are indexed by the freetext search engine. The fields are entered as xml paths excluding the first ‘/xml/’ of the schema.

#### Matrix Count
The Matrix Count query type returns all the distinct results and a count of the number of results with these values.

## Joint data set example usage

Freetext queries are commonly used in conjunction with a JDBC data set. The Report Designer provides the Joint Dataset to simplify joining data sets. Joint data sets can be created from any data sets used by the report. The joint data set provides a mechanism for joining data between the disparate query types that is equivalent to a Join clause in SQL.

This example creates a joint data set that could be used to:
* Create a report that prints custom metadata values. These values are not stored in the database and can only be retrieved using a freetext Matrix Search query.
* Create a report that returns a specific set of items. This report uses a standard data set Query items query.

To create a joint data set
1. Right-click the Data Sets folder in the Data Explorer and select New Data Set.
2. Select a Data Source, select Freetext Dataset for the Data Set type, and enter a value for Data Set Name.
3. Click Next .
4. Set the Query Type to Matrix Search.
5. Add Fields entries for items on your system. 
6. Click Finish.
7. Test the query by selecting Preview Results in the resulting Edit Data Set dialog. 
8. Click OK to save the data set.
9. Right-click the Data Sets folder in the Data Explorer and select New Data Set.
10. Select a Data Source, select JDBC Dataset for the Data Set type, and enter a value for Data Set Name.
11. Click Next.
12. Complete the data set configuration so the item ID, name and description are returned.
13. Click Finish.
14. Test the query by selecting Preview Results from the left-hand pane of the resulting Edit Data Set dialog.
15. Click OK to save the data set.
16. Right-click the Data Sets folder in the Data Explorer and select New Joint Data Set.
17. The Joint Data Set dialog is displayed to configure the data set using the data sets created in the preceding steps. 
18. In the left pane, select the created freetext data set from the drop-down menu. Select Key from the resulting column list.
19. In the right pane, selected the created JDBC data set from the drop-down menu. Select ID from the resulting column list.
20. Select the Inner Join option from the Join Types options. Inner join only returns rows contained in both result sets.
Joint queries that do not use Inner Join return a record for every item in the database, causing the joint data set to contain a record for the item whether the item was returned by the JDBC query or not.
21. Enter a Data Set Name and click Finish to complete the creation of the data set.
22. In the resulting Edit Data Set dialog, click Preview Results to confirm the Joint Data Set is correctly configured. 
23. Click OK to return to the Report Designer main page. The joint data set is now saved and can be used like any JDBC data set.

## User management

Reporting on user and group information for LDAP and replicated datastore requires a special UserManagement data set, as the user management plug-ins (UMPs) store user and group information outside the EQUELLA database.

User management data sets require a parameter to be supplied from a source outside the data set, typically a Universally Unique Identifier (UUID) from a JDBC or freetext query. This parameter is represented by the question mark (?) character.

### Create a user management data set
1. Right-click the Data Sets folder in the 2. Data Explorer and select New Data Set.
Select a Data Source, choose UserManagement Dataset as the Data Set Type, and give the Data Set a Name. 
3. Click the Next button to open the User Management Query wizard.
4. Select a Query Type. 
5. Enter a question mark (?) as the Query Text. This is usually the only query text used. The question mark is the SQL symbol for a parameter. 
6. Click the Finish button to complete the data set creation. 

### Query types
The available query types are:
* User information
* Group information
* Search users
* Search groups
* Get users in group
* Get groups for user.

#### User information
User information returns information for a specific user UUID. The UUID parameter is represented by a question mark (?) in the Query Text. 

#### Group information
Group information returns information for a specific group UUID. For a generally useful data set, a question mark (?) is used.

#### Search users
Configuring the Search users data set is similar to configuring a User information data set. This data set Query Type also recognises an asterisk (*) wild card in the Query Text string. Entering a single asterisk returns all users
#### Get users in group
The Get users in group query type takes a group UUID and returns information about each user in that group. In general cases, a question mark (?) can be used in the Query Text field.

#### Get groups for user
The Get groups for user query type takes a user UUID and returns information about each group that the user is a member of. In general cases a question mark (?) can be used in the Query Text field.

## Scenarios
The user management data set is typically used in conjunction with a JDBC data set that returns a user or group UUID as a row element. Using the user management data set provides user or group data for the combined result records, such as replacing a UUID with the user’s name.

An example user management data set scenario is a report that lists all institution items with the owner’s name.

To create this report
1. Create a new report. For this example, the report has been named ‘Item owners report’.
2. Create a JDBC data set to return all items created in the last week 
The query selects information on items from the CURRENT_INSTITUTION (a variable defined by EQUELLA to determine which institution is being accessed) that were created in the last seven days. (NOTE: EQUELLA also defines a CURRENT_USER variable, which provides the user ID of the user running the query.) 

This particular query is written for a PostgreSQL database and uses the date_part() function that may not work in another database type. Check your database documentation for equivalent functions to evaluate dates.

3. Click Finish to complete the data set creation. The data set Output Columns are displayed. 
Create a UserManagement Dataset that takes the owner UUID to return the owner’s user name.
4. Setup a UserManagement Dataset as shown in the section above.
5. Select User Information as the Query Type.
6. Enter a question mark (?) as the Query Text to represent an input parameter, and click the Finish button.
7. Save the data set by clicking OK.
8. Click OK  to the warning dialog about leaving the default parameter value empty.
9. Create a table for the report with two columns and headings for Owner and Item UUID.
10. Right-click the table and select Edit Data Binding from the displayed menu. 

Binding the JDBC data set to the table allows use of any of the result data columns within the table, which will be required for the applying of a parameter in this example.

11. Select your JDBC data set (‘Item data set’) for the Data Set, and click OK to close the dialog.
12. Select the Detail Row cell under the Item UUID column heading in the report table.
13. Right-click and select Data from the Insert pop-out menu to display the New Data Binding dialog.
14. Click Cancel without making any changes. This has added a Data field to your table.
15. Right-click the newly created Data field in the Detail Row of the Item UUID column, and select Change Data Column. 
16. In the resulting Select Data Binding dialog, select your JDBC data set (‘Item data set’) from the Data Set: drop-down menu, and check the box alongside the uuid field in the list of column names. 
17. Click OK to bind the data to the Detail Row. This will display the item UUID for each item returned by the data set.
18. Select the Preview tab to view the returned results.
The time taken to preview a report depends on the query and the number of records in the data set. Previews can take minutes to run.
19. After viewing the preview return to the Layout tab.

To configure the item Owner column

20. Right-click the Detail Row cell below the Owner column to display the cell context menu.
21. Right-click and select Data from the Insert pop-out menu to display the New Data Binding dialog.
22. Click Cancel without making any changes. This has added a Data field to your table.
23. Right-click the newly created Data field in the Detail Row of the Owner column, and select Change Data Column.
24. In the resulting Select Data Binding dialog, select your UserManagement Data Set (‘Owner username data set’) from the Data Set: drop-down menu. 

The Owner column will display the item owner’s first and last names. The simplest method to generate these values is to create a new field using an expression.

To create the required field
1. Click Add to add a new field.
2. Replace the default Column Binding Name with ‘Owner name’.
3. Select String as the Data Type.
4. In the Expression field, click the Function  button to open the Expression Builder.
5. Select the Available Data Sets from the Category pane to display the UserManagement data set (‘Owner username dataset’) in the Sub-Category pane.
6. Select the UserManagement data set (‘Owner username dataset’) to display the data set fields bound to the report table.
7. Double-click the firstname then lastname fields from the list in the Double Click to insert pane to enter the expression ‘dataSetRow[“firstname”]dataSetRow[“lastname”]’.
8. Add a space between the two fields using the concatenate operator ‘+’. 
9. Click OK to close the Expression Builder.
10. Click OK  to close the data binding dialog.
11. Make sure the Owner field is ticked in the Select Data Binding dialog, and click OK to close it.

The Owner field now needs to be bound to a parameter to return any data. The value of the bound field is used to replace the question mark (?) operator in the User Information query.

For this example, the parameter is used to look up the name of the owner from the UserManagement data set.

To bind a data set field to the query parameter
1. Ensure the newly created field is selected. 2. Select the Binding tab from the Property Editor-Data pane.
3. Click the Data Set Parameter Binding button to display the Data Set Parameter Binding dialog.
4. Select the Parameter entry and click Edit.
5. In the resulting Edit data set parameter binding dialog, click the Function  button to open the Expression Builder.
6. Select the Available Column Bindings from the Category pane to display the Table element in the Sub-Category pane.
7. Select the Table element to display the data set fields bound to the report table.
8. Double-click the owner field from the list in the Double Click to insert pane.
9. Click OK to close the Expression Builder.
10. Click OK to close the Edit data set parameter binding dialog.
11. Click OK to close the Data Set Parameter Binding dialog, and return to the layout page.
12. Preview the report. 
The report is complete.
13. Save the report.
Typically EQUELLA reports would require improved formatting before being uploaded to EQUELLA. Formatting is beyond the scope of this document, further information is available in the BIRT Report Developer Guide in the Report Designer Help.
## Notes
User and Group information queries require careful implementation as each record of the JDBC data set causes a search of the User Management system. When the returned JDBC data set is large, the time to run the report can be great as each record causes a request to EQUELLA. When EQUELLA is using the internal user management plug-in the TLEUSER and TLEGROUP tables can be joined to improve query reporting.
