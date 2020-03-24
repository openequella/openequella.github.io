# Performance Benchmarks > General Guide

Disclaimer: The performance benchmark scripts are provided as-is and without warrenty, and meant for an enviroment without client / user data (ie some of the scripts are invasive / destructive). That being said, the scripts use standard Equella APIs and Equella web UI screens and efforts have been made to externalize the scripts that can change across institutions.

- [Test Platform](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md#test-platform)
- [Test Institution](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md#test-institution)
- [Test Assets](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md#test-assets)
- [Performing Tests](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md#performing-tests)

## Test Platform

All scripts utilize JMeter and were developed on a Ubuntu enviroment with JMeter 2.10 and Oracle Java 7u25. I haven't found an issue running with later versions of JMeter or Java, but some of the file handling gets wierd when run on Windows.

### Enable PUTing an Attachment

Uncomment the following line and add `'application/octet-stream'` in `jmeter.properties`:

```
# These content-types will be handled by saving the request in a file:
proxy.binary.types=application/x-amf,application/x-java-serialized-object,application/octet-stream
```

### For running in non-gui mode

Uncomment the following in `jmeter.properties` (interval is in seconds):

```
summariser.name=summary
summariser.interval=5
summariser.out=true
```

### JSON

The scripts utilize the [org.json](https://mvnrepository.com/artifact/org.json/json) code to manipulate data. Please add this dependency into your JMeter classpath.

## Test Institution

You'll need to configure your target Equella install to run these scripts. You can either create a template 'benchmark' institution (recommend for comparison testing) or configure an existing test institution. The configuration points:

- Setup enough system admin users (ie jmeteruserX - where X is 1 to [num of max jmeter threads]) that can discover, view, contribute, and delete resources in the collection - see the `username` and `password` property.
- Setup an Implicit Grant OAuth and select "My application doesn't host a redirect URL, I want to use the default"
- Turn off the login message popup if there is one enabled
- Setup a schema and collection that matches the metadata detailed in the scripts. Note: An enhancement to this guide would be to detail what that looks like.

## Test Assets

The performance tests need a small set of assets / files. Due to the open sourcing effort, some of these needed to be removed. The following is the manifest to rebuild the assets. Note - some of the scripts' properties files will need to be adjusted to handle the rebuilt assets being a different size. The scripts will fail on the size assertion if it is affected by the asset rebuild.

Github repo folder: [Test Assets](https://github.com/openequella/Equella-Tools/tree/master/performance-benchmarks/assets)

- eqTestHtml1.html
  - Rebuilt and in the repo
- eqTestHtml2.html
  - Rebuilt and in the repo
- eqTestHtml3.html
  - Rebuilt and in the repo
- eqTestHtml4.html
  - Rebuilt and in the repo
- eqTestHtml5.html
  - Rebuilt and in the repo
- eqTestImage.JPG
  - About 2.8 MB
- eqTestImageSmall.JPG
  - About 19 KB
- eqTestPdf.PDF
  - About 112 KB, text and embedded images
- eqTestTxtBig.TXT
  - About 2.8 MB
- eqTestTxt.TXT
  - About 6 KB
- testzipper.zip
  - Rebuilt and in the repo
- toycom13.mpeg
  - About 6.3 MB

## Performing Tests

JMeter needs to be invoked with the JMX script file and the associated, configured, properties file. If developing tests, or smoke testing an institution, you can safely run JMeter in GUI mode. Larger test efforts will create memory issues in the JMeter GUI, and it's best to run them in JMeter headless mode. An example JMeter GUI invocation is below (to run in headless mode, add `--nongui`):

```
/path/to/my/jmeter --addprop myCustomSetup.properties --logfile myTestResults.jtl --testfile myPerfTest.jmx
```
