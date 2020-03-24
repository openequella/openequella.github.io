# Performance Benchmarks > REST Item Lifecycle

Github repo [Rest Item Lifecycle](https://github.com/openequella/Equella-Tools/tree/master/performance-benchmarks/scripts/rest-item-life-cycle)

This script is part of a suite of performance tests that can be used as a basis for developing a benchmark suite for Equella. For more general information on this suite and how to run them in JMeter, please review the [general guide](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md).

This particular JMeter script uses an Equella OAuth implicit grant to make various REST API calls to 'walk' an item through various stages in Equella. The key feature is the 'Flow Control' of the JMeter properties file. It allows you to enable/disable certain actions the script will take against a created Equella item.

Assuming 1 user thread:

- Download the jmx and properties files from the github repo.
- Setup your test institution as per the [general guide](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md))
- Modify the `oauth.client.app.confirmation` property to reference the name of your OAuth implicit grant
- Specify the uuid of your target test institution collection in the properties file via `collection.uuid`.
- Select the 'flows' you want the script to run.
- Ensure JMeter is setup as per the [general guide](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md).
- Obtain (as per the [general guide](https://github.com/openequella/openequella.github.io/blob/master/equella-tools/performance-benchmarks-general.md)) the following assets and copy into your folder with the jmx and properties files:
  - eqTestImageSmall.JPG
  - eqTestPdf.PDF
  - eqTestTxt.TXT
- Specify the attachment details in the properties file via `attachment.*`
- Besides the highlighted properties / setup note, review / configure the properties file to match your instituion.
- Test drive the script!
