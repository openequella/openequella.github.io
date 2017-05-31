# Optional Functionality - METS
## Overview
The METS dependencies are not licensed in a way that is appropriate to publish with the core Equella repo.  However, the functionality exists to integrate Equella with METS packages, and is appropriate for a user to build into their install of Equella.

## Migration
If you have a METS-enabled Equella install and you upgrade to a METS-disabled Equella, besides the standard METS functionality being unavailable, the following known issues will occur:
* Editing a 'METS' attachment in a METS-disabled Equella yields an Error to the user, and the wizard has to be re-entered.
*	Deleting a 'METS' attachment in a METS-disabled Equella will remove the custom metadata, but the attachment (and backend association to the item) will persist.

To check if your Equella institution has any METS attachments, query your db.attachment.value1 column and see if any rows has a value of 'mets'.

## Build
Before running ```sbt compile``` on the core Equella code base, do the following
1. git clone the [Equella-METS](https://github.com/equella/Equella-METS) repo.
1. Copy the com.tle.mets directory from the {Equella-METS} clone into your core Equella clone:
``` 
{Equella-METS}/Source/Plugins/Server/com.tle.mets > {Equella}/Source/Plugins/Server/com.tle.mets 
```
1. Copy the MyPagesMetsAttachmentImporterExporter.java file from the {Equella-METS} clone into your core Equella clone:
``` 
{Equella-METS}/mets/MyPagesMetsAttachmentImporterExporter.java > {Equella}/Source/Plugins/Server/com.tle.mypages/src/com/tle/mypages/mets/MyPagesMetsAttachmentImporterExporter.java
```
1. In {Equella}/Source/Server/equellaserver/build.sbt, under libraryDependencies, add / uncomment the line: 
``` 
"edu.harvard.hul" % "mets" % "1.0",
```

1. In {Equella}/Source/Plugins/Server/com.tle.mypages/plugin-jpf.xml, add the following under ```<requires>```: 
``` 
<import plugin-id="com.tle.mets" />
```
1. In {Equella}/Source/Plugins/Server/com.tle.mypages/plugin-jpf.xml, add the following under the parent ```<plugin ...>```: 
``` 
<extension plugin-id="com.tle.mets" point-id="exporterimporter" id="mypagesmetsexporter">
  <parameter id="id" value="mypagesmetsexporter" />
  <parameter id="bean" value="bean:com.tle.mypages.mets.MyPagesMetsAttachmentImporterExporter" />
</extension>
```

Proceed with the normal build process for Equella.  METS integration will be enabled.
