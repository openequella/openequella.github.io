# Language Setting Configuration Guide

Table of Contents

[Language settings overview](#language-settings-overview)

[Configuration procedure](#configuration-procedure)

[Language settings](#language-settings)

[Contribution languages](#contribution-languages)

[Display languages](#display-languages)

[Contribution language examples](#contribution-language-examples)

## Language settings overview

openEQUELLA supports institution language localisation and customisation, including right to left languages, using language packs. The language packs contain strings that can be customised to change any label, link or button in openEQUELLA. Additionally when matched with a contribution language any user-added objects can be customised to suit the locale of the user. Multiple language packs can be added to an openEQUELLA institution.

The purpose of this guide is to provide system administrators and managers with an understanding of how to customise and view openEQUELLA controls and content in a user’s preferred language.

Please note that this guide has been developed to best reflect the full capabilities of openEQUELLA and as such may differ in appearance to your own installation.

## Configuration procedure

Configuring language settings can be broken into the following steps:

1. Create a language pack using a Text Editor:

a. Download and unzip the appropriate language pack file from [the list of openEQUELLA releases](https://github.com/openequella/openEQUELLA/releases).

b. Create new text files that contain customised strings for the display controls.

c. Zip the text files together.

2. Upload the new language pack using the Languages option from the openEQUELLA Settings page.
3. Configure the contribution language using the Languages option from the openEQUELLA Settings page.
4. Select the display language in the openEQUELLA Digital Repository.

## Language settings

openEQUELLA provides multiple configuration options for language settings including:

- Language Packs—to customise the display interface.
- Contribution Languages—to customise any user added objects.
- Display Languages—to display the customised strings and objects for the imported language files.

Language settings are defined by country and locale to allow for variations in language or dialect in different regions.

### Language packs

Language packs allow the default controls in openEQUELLA to display institution-specific text such as display titles or error messages and allow users to select a preferred language for the user interface display.

A language pack is a zip archive that comprises text files that map language strings to application descriptors. These text files can include:

- admin-console.properties—maps language strings to Administration Console display controls;
- file-manager.properties—maps language strings to File Manager display controls;
- inplaceditor-applet.properties – maps language strings to the Inplace Editor controls;
- my-resource-bulk-uploader.properties—maps language strings to My Content Bulk Upload display controls;
- recipient-selector.properties – maps language strings to Recipient selector controls;
- resource-centre.properties—maps language strings to Digital Repository display controls.

### Download the language pack file

Language pack zip archives can be obtained from openEQUELLA github on the [releases page](https://github.com/openequella/openEQUELLA/releases) and contain text file templates that can be used to customise the required language strings.

### Customise the display interface

Changes can be made to openEQUELLA display controls by changing the strings in any of the properties text files. The customised files must be zipped to create a language pack file.

_NOTE: It is important that only the strings that have been edited are saved in a new version of the particular properties file (in a different directory); otherwise the strings that haven’t been edited will overwrite existing strings._

#### To customise the text file

1. Open the properties text file that is to be changed (e.g. resource-centre.properties) from the downloaded language pack file.
2. Find the language strings that require changing.
3. Copy and paste the strings to a new file with the same name (e.g. resource-centre.properties) in a different directory. (NOTE: The new text file should only comprise of modified strings.)
4. Customise the language strings.
5. Save the file with UTF-8 encoding.
6. Close the file.
7. Repeat steps 1 to 6 for any other files that require changes.

### Locale file

If an extra language is being introduced to openEQUELLA, a locale.properties text file must be created and included as part of the language pack. If it is not included, the edited strings may overwrite the current language strings.

The locale.properties file contains the language, country and any special variant the user wants to see in their openEQUELLA instance. The associated text files containing the edited strings are valid for the language specified in the locale.properties file.

Locale specific information is available at <http://publib.boulder.ibm.com/infocenter/forms/v3r0m0/index.jsp?topic=/com.ibm.help.forms.doc/locale_spec/i_xfdl_r_locale_quick_reference.html>

#### To create a new locale.properties file

1. Open a new text file, and enter the following:

- variant=x, where x might be a special dialect or locale created by the user, or left blank.
- country=y, where y equals the country code found using the link above.
- language=z, where z equals the language code found using the link above.

2. Save the file as locale.properties.
   (NOTE: The file must contain the standard descriptors for at least a country and language.)
3. Close the locale.properties file.

### Create a language pack file

To make the changes in openEQUELLA a zip file must be uploaded using the Languages option accessed from the openEQUELLA Settings page. The zip file must contain the text files that have been customised.

#### To create a language pack file

1. Zip any properties files containing the customised strings (e.g. resource-centre.properties) together to create a language pack zip file (e.g. spanish-language.zip). Include the locale.properties file if relevant.

_(NOTE: The zip file should contain only customised text files and the locale file (if relevant).)_

### Upload a language pack

The display languages used within the openEQUELLA Digital Repository are imported as language packs. The language packs are uploaded using the Languages option from the openEQUELLA Settings page.

#### To access the Languages administration function

1. Open a browser and enter your openEQUELLA URL (e.g.‘http://equella.myequellainstitution.edu’).
2. Log in to openEQUELLA as an administrator then select Settings from the navigation menu. The Settings page displays.
3. Select Languages to open the Languages page.

#### To import a language pack zip file

1. In the Language Packs section, click the Browse button and select the required language pack zip file (e.g. spanish-language.zip).
2. Click the Import language pack link. The language pack is imported, and the new language listed in the Language packs table, with Export and Delete links. The imported language pack is displayed in the Language Packs pane.

Language packs can also be exported or removed by using the corresponding buttons.

#### To export a language pack zip file

1. Select the language pack (e.g. Chinese(China)).
2. Click the Export link to display an Export dialog.
3. Download the zip file (e.g. chinese-language.zip) to the local computer.

#### To remove a language pack

1. Select the language pack (e.g. Chinese(China)).
2. Click the Delete link.
3. Click to confirm the removal.

## Contribution languages

Contribution languages are defined by country and locale to allow for variations in language or dialect in different regions, for example English (United States) (en-US), English (Australia) (en-AU) and English (United Kingdom) (en-GB). Selecting a contribution language allows the user to customise any content that is added or contributed to the openEQUELLA Digital Repository.

### Configure the contribution language

The bottom part of the Language Settings dialog enables the addition or removal of Contribution Languages.

#### To select the contribution language

1. Click the Add Contribution Language link in the Contribution Languages section of the Language Settings dialog shown in Figure 9.
2. Select the Language (e.g. Spanish [es]) and Country (e.g. Spain [ES]) from the drop-down menus, then click OK.
   _NOTE: The contribution language must have a matching language pack even if there is only a slight variation in languages between two regions._

The corresponding contribution language (e.g. Spanish (Spain)) is displayed in the Contribution Languages pane.

#### To delete a language

1. Click X beside the language to be removed. A confirmation dialog displays.
2. Click OK.

## Display languages

The default display language setting is that of the browser where the openEQUELLA instance is being viewed. Languages imported as language packs can be selected in the openEQUELLA Digital Repository as the preferred display language. Selecting a preferred display language will override the browser locale setting.

#### To select the preferred display language

1. Log in to the openEQUELLA Digital Repository to display the Dashboard page.
2. Select the PROFILE link in the top right corner to display the Edit User page.
3. In the Preferred display language, select the preferred display language from the drop-down list (e.g. Spanish (Spain)). The preferred display languages list only contains languages imported as language packs.

#### To save the configuration details

1. Click Save.

The user may need to re-login for all changes to display.

## Contribution language examples

When more than one contribution language has been configured, a language button appears in the Schema Editor, Collection Definition Editor, Advanced Search Editor, Workflow Template Editor, Report Editor, Remote Repository Editor, Course Editor, Taxonomy Editor, Dynamic Collection Editor, Hierarchy Editor and Harvester Profiles Editor dialogs in the Administration Console. This allows the user to customise any content that is added or contributed to the openEQUELLA system.

### Customise a collection example

#### To customise the collection name

1. Select Collection Definitions from the Administration Console, then click to create a new collection, or to edit an existing collection. The Collection Definition Editor is displayed.
2. Select the language button (e.g. English) to display the language options that have been configured.
3. Enter the required text.
4. Click the Close link to close the dialog.

#### To save the configuration details

1. Click Save.
2. Click Close to close the Collection Definition Editor.

### Customise a contribution wizard example

openEQUELLA provides a Multi-Language Edit Box wizard control that allows users to input multiple language strings and display the string relevant to the language the user has selected.

#### For a Multi-Language Edit Box control in a Contribution Wizard

1. Select the language button (e.g. Spanish) to display a dialog showing the configured contribution language options (e.g. Chinese and Spanish).
2. Enter information in any of the configured contribution languages.
3. Click the button provided to select the preferred language.
