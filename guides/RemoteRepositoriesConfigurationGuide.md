[Home](https://openequella.github.io/)

# Remote Repositories Configuration Guide

Table of Contents

- [Remote repositories overview](#remote-repositories-overview)
- [Remote repository searches](#remote-repository-searches)
- [Configure a remote repository search](#configure-a-remote-repository-search)
- [Search types](#search-types)
- [Restricting contribution to imported Remote repository results](#restricting-contribution-to-imported-remote-repository-results)
- [Security](#security)

## Remote repositories overview

The Remote repository search allows users to search multiple external sources, including other openEQUELLA repositories, for content using a single search query. The results display and can be imported directly into a contribution wizard.

Remote repository searches can be configured to return results from internet search engines, university library databases and online course management systems using the following search types:

- openEQUELLA
- Multimedia Educational Resource for Learning and Online Teaching (MERLOT)
- Search/Retrieval via URL (SRU)
- Search/Retrieve Web service (SRW)
- Z39.50

The purpose of this guide is to provide administrators with an overview of the various remote repository search types available and an understanding of their configuration and use.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA and as such may differ in appearance to your own installation.

## Remote repository searches

A feature of remote repository searches is their link to a collection to import search result metadata into. A collection is nominated while configuring the search, into which the search results are imported for contributing to your openEQUELLA repository.

Remote repository searches are accessed from the Search page drop-down list, or on the Contribute page under the collection where selected results will be added.

Selecting the search (e.g. MERLOT) displays the search page, with a Search box to enter a query, and sorting and filtering options for the result set. The search page can allow basic or advanced searches, depending on the specific search settings and license.

Entering search criteria and clicking the search icon displays a list of results.

Selecting a result displays a selection of the result’s information. Import transformations can be configured to adjust which content displays here.

Clicking Import displays a contribution wizard. The wizard can be configured to automatically populate fields with the metadata from the imported resource. Regardless of whether the resource metadata is visible in the wizard it will still be saved to the item, and can be retrieved by configuring the display options for the collection.

Users can complete and publish the wizard as normal to contribute the imported search result to the repository.

## Configure a remote repository search

Remote repository searches are created and modified using the Remote Repositories tool available from the Administration Console.

#### To access the Remote Repositories tool

1.  Log in to openEQUELLA as an administrator, select Settings then Administration console.
2.  The Administration console displays. Select Remote Repositories. A list of all previously configured remote repository searches displays.

#### Administration Console elements

When a tool has been selected the Add, Edit, Remove, Clone, Import and Export buttons are enabled; providing the correct privileges have been granted.

##### Add

Click + Add to display the Repository Types dialog where a repository type can be selected for the new search. Select a repository type then OK to display the Remote Repository Editor.

##### Edit

Select a search then click -Edit (or double-click on a search) to display the Remote Repository Search Editor for modifying the selected search.

If the selected search is being edited by another user a Locked dialog is displayed, providing the following options:

- Open as read-only—disables the Save button so that no changes can be committed.
- Forcefully unlock—unlocks the entity from the previous editor. Editing is possible but changes by other users may be lost.
- Do not open—the search configuration screen will not be opened.

##### Remove

Click -Remove to delete the selected search.

##### Clone

Click Clone to copy an existing search. The cloned search can then be modified by selecting the Edit button.

##### Import

Click Import to import a remote repository search that has previously been exported from the Administration Console. A warning dialog will be displayed.

_NOTE: Only ZIP files that have been exported from the Administration Console should be imported—other ZIP files may adversely affect the stability of the system._

##### Export

Click Export to export a remote repository search as a ZIP file.

## Search types

Each remote repository search type can be configured to display results that can be contributed to a collection using the user process described above. Available search types include:

- openEQUELLA
- MERLOT
- SRU
- SRW
- Z3950

### Add a search

To select a search

1.  Click + Add on the Administration Console to display a Repository Types dialog listing the available search types.
2.  Select a repository type from the list.
3.  Click OK to display the Remote Repository Editor—Details tab.

The Remote Repository Editor—Details page comprises configurable elements specific to the selected search type and elements that are common to all search types.

The common Details page elements are:

- Name – enter the display name of the repository.
- Description – enter the search description for display on the Remote repositories page.
- Timeout – select the response time (in seconds) before a search is terminated. The default time is 30 seconds.
- Owner – Click the Search button to change the owner of the search; by default this is the search’s creator.
- Contribute to this collection – select the collection to receive the imported results.
- Use this import transform – select an XSLT that transforms the metadata of the imported result from the Import record format to the collection XML. The list contains XSL transformations that are added to the metadata schema for the associated collection.
- Display XSLT – upload an XSLT for transforming metadata XML into the display format.
- Disable this remote repository—check this box to disable the repository link displayed on the Contribute page. Uncheck the box to enable the repository.

The search specific elements are described in the sections detailing the individual search types, as follows:

### openEQUELLA

The openEQUELLA search allows for the searching of other openEQUELLA repositories.

The configurable elements for the EQUELLA—Details page are:

- Institution URL – enter the address of the openEQUELLA institution to search.
- Shared secret ID – enter the shared secret ID for authentication of search requests.
- Shared secret value – enter the shared secret value for authentication of search requests.
- Sign-in option – select to sign-in as the current user, or specify another user based on your institution configuration.

### MERLOT

MERLOT (Multimedia Educational Resource for Learning and Online Teaching) is an open online community of resources designed so higher education members can share learning materials.
Performing a MERLOT search requires access to MERLOT Web Services, which requires a license key (for information visit <http://www.merlot.org/merlot/signWebServicesForm.htm>).

Configure a valid MERLOT search by entering your license key into the License Key field;.

Select Allow advanced searching (requires license key to have appropriate privileges) only if the MERLOT license provided includes advanced searching privileges, otherwise the MERLOT search will return an error.

### SRU

SRU (Search/Retrieval via URL) is a standard XML-focused search protocol for Internet search queries, utilizing CQL (Contextual Query Language), a standard syntax for representing queries.

The configurable elements for the SRU—Details page are:

- URL – connects to the required search engine.
- Schema Name – for the type of metadata schema to be searched.

### SRW

SRW (Search/Retrieve Web service) is a protocol designed to support interaction over a network such as the Internet. This type of web service promotes interoperability between distributed databases.

The configurable elements for the SRW—Details page are:

- URL – enter the URL to connect to the required search engine.
- Schema Name – enter the name of the metadata schema to be searched.

### Z39.50

Z39.50 is a client/server protocol for locating information from remote computer databases (a university library title database, for example).

The configurable elements for the Z39.50—Details page are:

- Host – enter the address of the search gateway. This can be either a host name or an IP address.
- Port – set the access port. The default port is 210.
- Database – enter the name of the database to be searched.
- Username – enter the username for remote repository authentication.
- Password – enter the password for remote repository authentication.
- Import record format – select from the drop-down list of record formats.
- Load default attributes – click Select to choose the default advanced search field values to use on the Z39.50 search page. Once selected, the search field values display in the Advanced search fields table at the bottom of the page. The options available are:
  - openEQUELLA Default – loads the default openEQUELLA values (this is the default value).
  - Bath level 0 – loads the Bath level 0 values.
  - Bath level 1 – loads the Bath level 1 values.
  - To learn more about the Bath Profile, go to <http://www.ukoln.ac.uk/interop-focus/activities/z3950/int_profile/bath/draft/stable1.html>.
- Standard query attributes – the values for Any field for the selected default search field values display by default but can be edited. For information regarding Z39.50 attributes, see <http://www.loc.gov/z3950/agency/defns/bib1.html>.
- Allow Advanced Searching – check this box to provide the user with a selection of specific search fields in a library search query rather than one general field. (NOTE: The Z39.50 host must support advanced searching for this option to be utilized.). The advanced search fields available display in the Advanced search fields table at the bottom of the page.
- Advanced search fields – this table lists the search fields that belong to the selected default attributes selected in the Load default attributes field. Additional search fields can be added.

### Adding additional search fields

Additional search fields and their attributes can be added to the table then used when searching the repository from the Search page (when Allow advanced searching is enabled).

A user can add a custom field by typing in the field Name and associated Attributes, then clicking Add. For information regarding Z39.50 attributes, see <http://www.loc.gov/z3950/agency/defns/bib1.html>.

The new search field is then added to the table, and appears as an advanced search field on the Z39.50 search accessed from the Search page.

## Restricting contribution to imported Remote repository results

Where a collection definition is linked to a remote repository, by default the contribution wizard will be accessible from the Contribute page in the form of a link. This allows contribution to this collection in the normal manner. To ensure that contribution to the collection can only occur by importing a result from a remote repository search, this link can be disabled.

#### To disable the contribution link

On the Details tab of the Collection Definition editor, select the checkbox Do not allow direct contribution (Remote repository collection only).

This configures the contribution wizard to be accessible only through a remote repository search. When this option is selected, the collection link on the Contribute page is disabled.

## Security

Along with the Details tab, each search type features an Access Control tab. This allows the administrator to configure user access to the selected search.

There are four privileges that are associated with the remote repositories:

- CREATE_FEDERATED_SEARCH
- DELETE_FEDERATED_SEARCH
- EDIT_FEDERATED_SEARCH
- SEARCH_FEDERATED_SEARCH.

These privileges can be configured for all remote repository searches using the security manager, or all but CREATE_FEDERATED_SEARCH can be configured for each search using the Access Control tab.

The following is an example of how to configure the DELETE_FEDERATED_SEARCH privilege using the Access Control tab. This example grants the ‘System Administrator’ role the delete privilege.

#### To configure this privilege

1.  Select the Access Control tab to display the Access Control page.
2.  Click the Who can? drop-down arrow and select the delete this remote repository option.
3.  Select the Advanced option to display the access control list.
4.  Click +Add.
5.  In the Action field, notice it is already set to Grant.
6.  In the Who? field, click Everyone to display the Select Recipients... dialog.
7.  Select the Roles option.
8.  Click Search to display a list of available roles to choose from. Alternatively, type the first letter or letters of search item and click Search.
9.  Select System Administrator then select the > button to move the role to the right-hand pane.
10. Remove Everyone from the right-hand pane by highlighting it, then click <.
11. Click OK to close the dialog. The delete privilege has now been granted to the system administrator,
12. Click Save.

Further privileges and users can be configured using the above procedure.
