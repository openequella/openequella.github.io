# Scripting Example - Remove Unassociated Attachments

_Description:_  Walk the attachments and remove any attachments not found in a pre-defined set of metadata paths.

_Disclaimer:_  Example scripts are provided as-is without any warrenty, and are meant as Proof-of-Concepts for various abilities of the Equella scripting engine.  It is assumed thorough testing of any example script in this repository will be performed by the adopter before running on a Production institution. 

```
// Depending on the amount of attachments, setting to 'false' could slightly help performance.
var enableLogging = true;

// NOTE:  List all unique metadata paths in the collection that can possibly have 
//        attachment uuids (extra paths are fine, missing a path will result in 
//        that attachment being removed).
// Omit the '/xml'
var metadataToMatchAttachmentsPaths = [
    '/metadata/my/data1', 
    '/metadata/my/data2'
];

if(staging.isAvailable())
{
    log("Staging is available.  Beginning metadata / attachment consistency scrubbing");
    for(var i = 0; i < metadataToMatchAttachmentsPaths.length; i++) {
        log("Found [" + xml.count(metadataToMatchAttachmentsPaths[i]) + "] results for the path:  " + metadataToMatchAttachmentsPaths[i]);
    }
    removeAttachmentsNotInMetadata();   
} 
else {
    log("Staging is not available.  Bypassing metadata / attachment consistency scrubbing");
}

// For each attachment, check if it exists in a metadata node
// If the attachment does not exist in the metadata, remove it.
// BE CAREFUL!  This will remove ANY attachment not referenced in
// the metadata paths specified - do not use with the file manager or packages (ZIPs, IMS, etc)
function removeAttachmentsNotInMetadata() {
    log("Started removeAttachmentsNotInMetadata()");
    var atts = attachments.list();
    log("Found [" + atts.size() + "] attachments");
    for(var aIdx = 0; aIdx < atts.size(); aIdx++) {
        var att = atts.get(aIdx);
        log("Checking " + displayAttachment(att));
        var attUuidFound = false;
        var i = 0;
        while(!attUuidFound && (i < metadataToMatchAttachmentsPaths.length)) {
            var mPath = metadataToMatchAttachmentsPaths[i];
            if(!xml.contains(mPath, att.getUuid())) {
                log("Attachment " + att.getUuid() + " does not exist in the metadata path: " + mPath);
                // Check the next path
                i++;
            } else {
                log("Attachment " + att.getUuid() + " exists in the metadata path " + mPath + "- leaving as-is.");
                attUuidFound = true;
            }
        }

        if(!attUuidFound) {
            log("Attachment " + att.getUuid() + " does not exist in the metadata - removing!");
            attachments.remove(att);    
        }   
    }
    log("Finished removeAttachmentsNotInMetadata()");
}

// Simple helper function to log messages to the app logs
function log(msg) {
    if(enableLogging) {
        logger.log(currentItem.getUuid() + "/" + currentItem.getVersion() + ": " + msg);
    }
}

// Assumes an AttachmentScriptType
function displayAttachment(att) {
    return "Attachment[uuid=[" + att.getUuid() + "], filename=[" + att.getFilename() + "], description=[" + att.getDescription() + "]]";
}
```
