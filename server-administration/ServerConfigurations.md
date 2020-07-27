# openEQUELLA Server Configurations

- [Primary Mandatory Config](#primary-mandatory-config)
- [Primary Optional Config](#primary-optional-config)
- [Lucene Optional Config](#lucene-optional-config)


Unless otherwise noted:

- Configuration 'versions' with a `~` means 'at least', so, `~6.4-QA3` means the config is at least in versions 6.4-QA3, but could be in versions earlier than 6.4-QA3
- Blank max versions means it's still an active configuration in `develop`

## Primary Mandatory Config
**Location:**  `{oeq-install-dir}/learningedge-config/mandatory-config.properties`

| Config | Default | Min Version | Max Version | Comments |
| ------ | ------ | ------ | ------ | ------ |
| tomcat.useBio | false | 6.4-GA | | Tomcat will by default use the NIO connectors |
| tomcat.maxThreads | 100 | 6.2-GA | | |
| sessions.neverPersist | false | 6.2-QA1 / 6.3-GA | | Setting to `true` will stop openEQUELLA from inserting data into tomcat_sessions. |
| ajp.address | 127.0.0.1 | 2020.2.0 | | Tomcat AJP connector address |
| ajp.secret.required | true | 2020.2.0 | | Specifies if the Tomcat AJP connector should be required.  This is ignored if `ajp.secret` is set to a non-blank value that is not `ignore`. |
| ajp.secret | ignore | 2020.2.0 | | Specifies the secret to use between the Tomcat AJP connector and the web server.  Setting to `ignore` will do just that. |

## Primary Optional Config
**Location:**  `{oeq-install-dir}/learningedge-config/optional-config.properties`

| Config | Default | Min Version | Max Version | Comments |
| ------ | ------ | ------ | ------ | ------ |
| can.access.internet | true | ~6.1-QA2 | | Allows the URL checker to run. |
| com.tle.core.tasks.RemoveOldAuditLogs.daysBeforeRemoval | 120 | ~6.0-QA3 | | Set the number of days to keep audit logs in openEQUELLA before the scheduled task truncates them. |
| com.tle.core.tasks.RemoveDeletedItems.daysBeforeRemoval | 7 | ~6.4-QA3 | | Set the number of days to keep deleted items in openEQUELLA before the scheduled task purges them. | 
| tomcat.internalProxies | N/A | 2019.1.3 / 2019.2.0 | | Sets the Tomcat RemoteIpValve > InternalProxies.  This is needed when uploading files in the modern UI in some environments | 
| filestore.zipExtractCharset | UTF-8 | 2020.2.0 | | When supplied, sets the encoding for inputted zip files. This can be useful if the default UTF-8 encoding causes uploaded zips not to be detected as content packages. |

## Lucene Optional Config
**Location:** `{oeq-install-dir}/plugins/com.tle.core.freetext/optional.properties`

| Config | Default | Min Version | Max Version | Comments |
| ------ | ------ | ------ | ------ | ------ |
| freetextIndex.defaultOperator | AND | ~6.4-QA3 | | Indicates if default search terms should be performed with an implicit AND or OR. |
