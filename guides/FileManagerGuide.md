# File Manager Guide

If your institution uses the File Manager, Java in the browser is not very well supported (and is being phased out).

## Not Supported Without Reconfiguration (if at all):

- Edge
- Chrome
- Firefox 52+

## Supported

- IE
- Firefox 51-

## Java Version

The File Manager also seems to have issues with newer versions of Java 8also seem to have issues with Java 8. Java 1.8u66 is known to work.

## Use Case: Using Firefox v47 on Ubuntu with Java 1.8u66

1. Download and extract JDK 1.8u66.
1. Download and extract Firefox v47 from Mozilla's archive site.
1. Open the OS Java Control Panel.
1. Add your Equella site to the Security > Exception Site List.
1. Under Java, click 'View...' to view and manager JRE versions. 'Find' your downloaded version and add it to the User Java environments. Deselect 'Enable' on the default installed Java environment.
1. Under Advanced, tick 'Java console > Show console'.
1. Run the firefox script.
1. Try to access the File Manager.
1. You might be presented with a dialog for which Java version to use. Select Java 1.8u66.
1. The Java Console should appear, and the correct version be listed.
