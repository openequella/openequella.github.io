# Example Script - List Persisted Item Contents

_Description:_ Lists all contents of the current item's persistent folder.  Returns a string of the output instead of a list.  Could be enhanced with a script on the OS to produce a cleaner listing.  Confirmed on Linux, can be adapted for Windows installs.

_Disclaimer:_ Example scripts are provided as-is without any warrenty, and are meant as Proof-of-Concepts for various abilities of the Equella scripting engine. It is assumed thorough testing of any example script in this repository will be performed by the adopter before running on a Production institution.

```
var enableLogging = true;

var filestoreAttachmentsPath = "/my/path/to/equella/filestore/Institutions/<myinstitution>/Attachments/";

// List out the files in the persistent folder

log("Beginning to list out the item's persistent files");
var hash = currentItem.getUuid().hashCode() & 127;
var parms = ["-l", "-R", filestoreAttachmentsPath + "/" + hash + "/" + currentItem.getUuid() + "/" + currentItem.getVersion()];
var persistentListing = system.execute("ls", parms); 
log(persistentListing.getStandardOutput());
log("Finished listing out the item's persistent files");

// Simple helper function to log messages to the app logs
function log(msg) {
    if(enableLogging) {
        logger.log(currentItem.getUuid() + "/" + currentItem.getVersion() + ": " + msg);
    }
}
```
