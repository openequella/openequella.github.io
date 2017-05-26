# Optional Functionality - Kaltura
## Overview
The Kaltura dependencies are not licensed in a way that is appropriate to publish with the core Equella repo.  However, the functionality exists to integrate Equella with Kaltura, and is appropriate for a user to build into their install of Equella.

## Build
Before running _sbt compile_ on the core Equella code base, do the following
1. git clone the [Equella-Kaltura](https://github.com/equella/Equella-Kaltura) repo.
1. Copy the Kaltura directory from the {Equella-Kaltura} cloned directory into your Equella Plugins into the core Equella Plugins directory {Equella-core-repo}/Source/Plugins
1. In {Equella-core-repo}/Source/Server/equellaserver/build.sbt, under libraryDependencies, add / uncomment the line:
"com.kaltura" % "kalturaClient" % "3.2.1"
Proceed with the normal build process for Equella.  Kaltura integration will be enabled.
