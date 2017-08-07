# Bulk Uploading Kaltura Videos to EQUELLA

You can bulk upload Kaltura videos into EQUELLA by first uploading the videos to Kaltura (either in bulk or
manually), exporting the Kaltura metadata and uploading the metadata to EQUELLA. This document details
these steps and provides an optional section if you intend to use EQUELLA Bulk Importer (EBI) to do the last
step.

1. Upload the videos to Kaltura
Assuming this needs to be done in bulk, this can be accomplished by either using the KMC (<http://kmc.kaltura.com/content/docs/pdf/KMC_User_Manual.pdf#page=17> ) or writing a program that utilizes
Kaltura's API.
2. Export the Kaltura metadata
Kaltura will automatically assign an ID and thumbnail URL to each uploaded video and these are needed by
EQUELLA. You can write your own program that uses Kaltura's API to export the Kaltura metadata. Or you can
export the Kaltura metadata using Kaltura's metadata dump tool 

Select Download Metadata. This will generate an Excel spreadsheet with a row per video. There are many
columns but the most important ones are "id", "name" and "thumbnailURL":

3. Add Corresponding EQUELLA Attachments

Either by using the EBI (see next section) or a custom program that utilizes EQUELLA's APIs produce an
attachment element for each row in the Kaltura metadata dump 

The value for kalturaServer should be the same for all the attachments and can be retrieved from your
EQUELLA Settings.

If you intend to create attachments in EQUELLA by writing a custom program or script then The specified item
was not found. may be useful. It has information about how attachments and metadata relate in EQUELLA.

## Using EBI to Upload Kaltura Metadata
After performing the Kaltura metadata dump form a CSV with a column from metadata/kalturaattachments/uuid and set the column as a "Custom Attachments" datatype in the EBI

The cell value is an XML fragment the same as step 3 in the previous section without the /attachment/uuid element. 

This element is not needed in your CSV as the EBI will generate it for you. The column heading should be the same as the value in the Metadata Target of the Attachments control in your
collection wizard that is used for attaching Kaltura resources (omit the leading slash):

## Simplify Your CSV!
To make your CSV simpler you can use XPath Indexes. This way the XML fragment in the Custom
Attachments column is fixed and the data from the Kaltura metadata dump can be structured as simple tabular
data. This saves you having to use scripts or Excel formulas to form XML fragments from the Kaltura metadata
dump. To do this the CSV should have the following columns:

* Column Heading: Attachments control metadata target
* Value: Fixed value (XML fragment) 
* Column Datatype: Custom Attachments

* Column Heading: item/attachments/attachment/
description
* Value: Description of attachment
(can use "name" from
metadata dump)
* Column Datatype: Metadata

* Column Heading: item/attachments/attachment/
attributes/entry[2]/string[2]
* Value: "id" from metadata dump 
* Column Datatype: Metadata

* Column Heading: item/attachments/attachment/
attributes/entry[3]/string[2]
* Value: "thumbnailURL" from metadata
dump
* Column Datatype: Metadata
(note that this setup assumes one and only one attachment per item)
