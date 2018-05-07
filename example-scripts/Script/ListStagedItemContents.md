# Example Script - List Staged Item Contents

_Description:_ Lists all contents of the current item's staging folder

_Disclaimer:_ Example scripts are provided as-is without any warrenty, and are meant as Proof-of-Concepts for various abilities of the Equella scripting engine. It is assumed thorough testing of any example script in this repository will be performed by the adopter before running on a Production institution.

```
var enableLogging = true;

// List out the files in the staging folder
if(staging.isAvailable())
{
	log("Beginning to list out the item's staging files");
	var stagingFilesAndDirs = staging.listFiles("", "**");
	for(var i = 0; i < stagingFilesAndDirs.size(); i++) {
		log(stagingFilesAndDirs.get(i));
	}
	log("Finished listing out the item's staging files");
}

// Simple helper function to log messages to the app logs
function log(msg) {
    if(enableLogging) {
        logger.log(currentItem.getUuid() + "/" + currentItem.getVersion() + ": " + msg);
    }
}
```
