# Release Notes for Equella 6.5-GA

*_In Progress_*

6.5-GA is the initial Open Source version of Equella.  Changes have focused on scrubbing the code to align with open source licensing.  The build process was also overhauled to use sbt (Simple Build Tool) and not require an IDE (Integrated Development Environment) to build / develop code.  No new features or bug fixes were included.

## Reporting
### github issues
- Scrub equella-deps ( #95 ) - removed an older version of reporting-common
- ( ?? ) - switched the datatools deps from local Maven to Maven.
### Functional Impact
No functional impact was observed.
### Testing Impact
- Functional
Confirm the reporting suite of tests to ensure all Data Source and Data Source types can be run, both from the BIRT Report Designer and directly from Equella.
- Performance
Confirm no lag in running reports 
- Cluster Stability
No impact.

## Kaltura
TBD...

## File Upload
TBD...

