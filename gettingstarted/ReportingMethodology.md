# Reporting Methodology

Reporting in Equella is provided by BIRT - both the engine in Equella for running reports, and the BIRT Report Designer plugin to enable connectivity to Equella.

In the self-published repo, the /com/tle/reporting deps of reporting-common, reporting-oda, and reporting-oda-connectors are required.  It is original code and built from the [equella/equella-reporting-plugin](https://github.com/equella/equella-reporting-plugin) repo.  

The equella-reporting-plugin code is dual-purpose - it's used for Equella server to integrate with the BIRT reporting engine, and used to enhance the BIRT Report Designer (standalone, Eclipse-based application) to make connections via the target Equella institution.

## High level tests
* Create a report in Birt RD, make sure the three dataset types (User, JDBC, and ??) are used.
* Upload report into Equella via Admin Console
* Run the 'Sample Reports' from the Equella demo instutition
