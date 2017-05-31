# Test Enabling METS
## Test Flows
1. Start with EQ 6.4-QA3, METS configured (which it is by default), and at least one item with a METS attachment
1. Upgrade from EQ 6.4-QA3 to the EQ open source version (without METS integrated) 
1. Run the test scenarios below and confirm nothing (especially with the item) is broken.  Please note the known issues.
1. Upgrade to an EQ open source version (with METS integrated).
1. Again, run the test scenarios below and confirm the original items / METS attachments are working

## Test Scenarios after each upgrade
1. From an arbitrary item, 'export' via right-hand nav to METS
1.1. use an ordinary text file as an attachment
1. Given a METS xml file (for example, from http://www.loc.gov/standards/mets/mets-examples.html > Bibliographic Record > METS), add as a METS attachment to an arbitrary item
1. View a METS attachment in 'full screen' from an item display page
1.1. Using the the sample mets.xml from the above test case, you should have the following 'attachments':  
1.1.1. TIF that downloads
1.1.1. TIF that displays
1.1.1. A link that is not allowed / available from Equella

Please note the known issues detailed in https://equella.github.io/optional-functionality/mets.html under 'Migration'.
