[Home](https://equella.github.io/)

# Setting up a test environment

Web tests can be performed automatically after any successful build.

The web testing architecture has the following components:

* Jenkins Build Server (<http://dev-builds.equella.com/>)
* Test Server with EQUELLA install to run the tests against (tle-autotest)
* Ant script to deploy latest build and run tests
* Institution archive files to import onto Test Install
* The actual tests themselves (TestNG tests using Selenium 2)
* A simple gui tool for helping to prepare the Institution archive files

## Development environment

The tests are all written for TestNG in Java, so whatever IDE you prefer can be used.

The latest Eclipse is recommended. New versions of eclipse have the EGit plugin bundled which provides good integration with the Git version control system. You will also want to install the TestNG eclipse plugin

## Skills required

* Java - Generics are used extensively
* TestNG - Java testing framework
* Selenium 2 - The web testing technology used.
* XPath - Locating elements inside HTML pages.
* PageObject design pattern - The design pattern all tests should use.

## EQUELLA tests setup instructions

1. Install TestNG eclipse plugin
2. Checkout automated code: git clone git@git.equella.com:equella/automatedtests
3. Copy config/localserver.properties.example to config/localserver.properties, edit the options accordingly
4. Run com.tle.webtests.test.SyncTest.java as TestNG Test, this will import required institutions

## Moodle tests setup instructions
1. Change moodle.url to a real moodle url in Tests/config/localserver.properties
2. Run SyncMoodle.java to setup required courses
3. Run MoodleTest.java as TestNG test

## Notes
Watch out for this bug: <https://code.google.com/p/selenium/issues/detail?id=3280>
