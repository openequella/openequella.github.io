# Embedded Metadata Extraction User Guide


* [Overview](#overview)
* [Install ExifTool](#install-exiftool)
* [Create metadata schema](#create-metadata-schema)
* [Add a Save script](#add-a-save-script)
* [View custom display data](#view-customer-display-data)

## Overview
The functionality for embedded metadata extraction supports many standards, such as IPTC, EXIF and XMP and others, that provide information embedded in images. This feature allows users to import, display and search this information located in image files.

The purpose of this guide is to provide users with information regarding the process that needs to be followed to extract embedded metadata and store and display it in openEQUELLA.

## Install ExifTool
ExifTool, a free, third-party tool needs to be downloaded and installed on the openEQUELLA server, and a configuration file edited.

**To install ExifTool and update configuration**
1. Go to http://www.sno.phy.queensu.ca/~phil/exiftool/ and download the relevant ExifTool zip file version for your server’s operating system.
2. Follow the instructions on the website for installing the tool for your operating system.
3. Navigate to the learningedge-config directory found in your openEQUELLA directory and open the optional-config.properties file with an editor.
4. Scroll to the exiftool.path property, and update with the path to the installed ExifTool executable. For example, exiftool.path=C:/Program Files/ExifTool/exiftool.exe.
5. Save the changes.

## Create metadata schema nodes

Metadata nodes must be created in the relevant schema in openEQUELLA for the extracted metadata to be stored. See the  Metadata Schema Configuration Guide for further information.

## Add a Save script
A Save script to extract the required data and input it into the relevant schema needs to be written and added on the Expert scripting tab of the image collection in the Collection Definition Editor. An example is shown below:
```js
if(staging.isAvailable())
{
var att = attachments.list().get(0); var mtdt = metadata.getMetadata(att); if(!mtdt.isEmpty()) { xml.set('/item/itembody/description', mtdt.get('XMP', 'Description'));
xml.set('/item/itembody/imagetype', mtdt.get('File', 'FileType'));
xml.set('/item/copyright/authors/author', mtdt.get('EXIF', 'Artist'));
xml.set('/item/copyright/publisher', mtdt.get('EXIF', 'Copyright'));
xml.set('/item/lom/technical/location', mtdt.get('XMP', 'City') + ', ' + mtdt.get('XMP', 'State') + ', ' + mtdt.get('XMP','Country'));
var t = mtdt.get('IPTC', 'Keywords'); xml.set('/item/itembody/tags/', t.substring(1, t.length() - 1));
att.setCustomDisplayProperty('Author', mtdt.get('EXIF', 'Artist'));
att.setCustomDisplayProperty('Camera', mtdt.get('EXIF', 'Model'));
att.setCustomDisplayProperty('Camera Lens', mtdt.get('XMP', 'Lens'));
att.setCustomDisplayProperty('City', mtdt.get('City'));
att.setCustomDisplayProperty('State', mtdt.get('State'));
att.setCustomDisplayProperty('Country', mtdt.get('Country'));
att.setCustomDisplayProperty('Licence', mtdt.get('Copyright'));
}
}
```

Avaliable commands to the metadata script object are:
* Returns the first key found in any type grouping that matches. If there are duplicate keys within groupings then get(String, String) (see below) should be used String get(String key);
* Returns a specific key within a type grouping e.g LensID for XMP would be get("XMP", "LensID"). This method should be used to get specific values when there are duplicate keys in the metadata get(String type, String key);
* Returns a list of all type groupings e.g EXIF, XMP, File etc List<String> getTypesAvailable();
* Returns all key values for a specific type e.g getAllForType("XMP") will return all the key/values for the type grouping XMP. If the type does not exist null will be returned MapScriptType getAllForType(String type);
* Returns true if there is no metadata available boolean isEmpty();

Please see the Advanced Scripting Guide for more information on scripting in openEQUELLA.

### Viewing available metadata

Knowing what data can be extracted can be confusing. Once ExifTool is installed you can run the following command from your command line to see a print out of data available to openEQUELLA.

NOTE: If you don’t have access to your openEQUELLA server, install the ExifTool on your local PC to be able to run the following command.
```
exiftool -g -j -q -sort -u -x Directory -x
FilePermissions -x ExifToolVersion -x Error <image>,
where <image> is the path to your image.
```

## View custom display data
Based on the Save script example above, the following extracted metadata can be viewed from the attachment metadata drop-down.

* Type
* Filename
* Size
* Author
* Camera
* City
* State
* Country
* GPS Location

This would differ depending on what metadata has been extracted, saved and configured to display in openEQUELLA.

Some of the additional metadata fields may be configured to display on the Resource summary template (e.g Photographer, Location, Title, Caption, Resolution – width and Resolution height).

This is done from the Display, Resource Summary Display Template tab in the Collection Definition Editor.
