# Test Enabling Kaltura

1. Start with EQ 6.4-QA3, Kaltura configured, and at least one item with a Kaltura attachment
1. Upgrade to EQ 6.4-QA3 to the EQ open source version
1. Confirm nothing (especially with the item) is broken, besides the Kaltura links aren't working
1. Upgrade to an EQ open source version w/ Kaltura
1. Confirm the original links are working, you can access Kaltura server settings, etc

** Areas to focus on after each upgrade: **

1. collection wizard setup
1. Saving the wizard
1. db settings (especially the kaltura_server table)
1. settings.do
1. view item /attachment
