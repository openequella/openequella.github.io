# Consolidate logging layer (log4j/slf4j)

   Log4J has been updated to v2.17.1.As part of the update the upgrader will
   attempt to migrate the old Log4j configuration files (e.g.
   learningedge-log4j.properties) to use the new YAML [configuration
   syntax](https://logging.apache.org/log4j/2.x/manual/configuration.html) by
   generating new YAML files to replace the properties files. If this is unable
   to do a complete job (or if you find issues afterwards) then the old
   configuration files won’t be deleted and can be referred to.

# MS SQL Server JDBC driver update

   The MS SQL Server JDBD driver has been updated to the latest version (9.4).

   For institutions upgrading to openEQUELLA 2022.1 who currently use SQL
   Server with a self signed certificate (or a certificate signed by a CA not
   in their Java’s trust store), a modification will need to be made to their
   hibernate properties to add the trustServerCertificate to their
   hibernate.connection.url value.

   For example, currently the hibernate properties might look something like:

   1hibernate.connection.url =
   jdbc:sqlserver://localhost:1433;databaseName=equella

   Whereas now it would need:

   1hibernate.connection.url =
   jdbc:sqlserver://localhost:1433;databaseName=equella;trustServerCertificate=tru

   If the file is not updated with trust certificate reference, on server
   restart a stack trace with messages around PKIX path building failed will
   display: sun.security.provider.certpath.SunCertPathBuilderException: *unable
   to find valid certification path to requested target.*

# New Search UI performance updates

   There has been a significant update made to the New Search UI to reduce the
   time it takes to execute a search (in ‘list’ mode - not gallery) and then
   the display of the results. This is most noticeable for institutions which
   have items with large numbers of attachments, and also comes into effect for
   Advanced Searches.

   For the most part the user experience is unchanged. However the one area
   where a change may be noted - especially on slower connections - is that
   when a user expands the list of attachments for an item they first have to
   be retrieved. While this is done a ‘skeleton’ component is displayed.

   This change performance update was made possible via the following technical
   details:

-   The search2 API has a new parameter (includeAttachments) which controls
    whether attachment details for all items should be returned with the search
    results;

-   The addition of a ‘thumbnailDetails’ property in the search2 response to
    provide details for displaying thumbnails;

-   Various server side code enhancements; and

-   Updated UI code to tie all the parts together.

# Dependency upgrades

   The following openEQUELLA dependencies have been upgraded. These have been
   updated to address published security vulnerabilities and to improve the
   performance and stability of the platform. In all cases, the user experience
   has not been modified.

-   kalturaClient - This was a major upgrade as openEQUELLA was several major
    versions behind on this dependency. As a result, after upgrading several
    areas of the codebase also had to be updated.

-   openjdk docker image

-   XStream - A key dependency in the reading and storage of XML data. This has
    undergone a significant change in its security philosophy and as a result
    was a very important upgrade.

-   Axis - Responsible for the interactions over SOAP APIs.

-   Jackson - Use for both processing of JSON and some XML data. In some cases a
    major upgrade.

-   MS SQL JDBC driver - Provides the low level communications for openEQUELLA
    to communicate with MS SQL servers. A major upgrade with the previous
    version being significantly older and also had dependencies on other
    libraries with published security vulnerabilities.

# Deprecation notices

## Cloud search

   The legacy Cloud search functionality that was introduced prior to
   openEQUELLA becoming an open source product is no longer supported and has
   been removed in openEQUELLA 2022.1. The external server providing this
   functionality is not controlled with any entity directly involved in
   openEQUELLA and basic testing has highlighted that its content has not been
   updated for several years.

## Zookeeper

   openEQUELLA 2022.1 sees the deprecation of support for Zookeeper versions
   earlier than 3.5.x. Institutions on versions earlier than 3.5.x need to
   upgrade prior to moving to openEQUELLA 2022.1.

## SRW

   Support for the SRW search protocol will be removed from openEQUELLA from
   2022.2.
