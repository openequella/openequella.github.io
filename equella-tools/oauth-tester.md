# OAuth Tester

Lightweight Java webapp running on Embedded Jetty to mimic the openEQUELLA OAuth flow of 'Authorisation Code Grant'.

The tester will also track the history of auth requests since the app was started (i.e. just in memory).

### Versions
##### V1: Initial version.
##### V2: Added a delay config to the properties.

### Needed Files
* OAuthTester_v2_20151116.jar
* oauth-tester.properties.v2
* log4j2.xml

### Instructions
1. Download the three files (OAuthTester_v2_20151116.jar, oauth-tester.properties.v2, log4j2.xml).
2. Ensure Java 8 is installed (Tested on Java 8u51).
3. Rename the oauth-tester.properties.v2 to oauth-tester.properties and configure the tester via oauth-tester.properties
```
# Include the trailing slash - http://my.equella.url/my.institution/
equella.endpoint=http://my.equella.url/my.institution/
# OAuth Client ID (authorization code grant) - can be modified
client.id=equellasupport
# The IP of your computer. it can be 'localhost' or an IP.
tester.hostname=localhost
tester.port=8899
# The delay (in ms) to wait after the user has authenticated with openEQUELLA and
received a temporary code,
# and before the utility requests the final auth token.
tester.delay=2000
```
4. In openEQUELLA, setup an OAuth client

a. name and secret can be arbitrary.

b. client id should match what's in the oauth-tester.properties

c. Flow should be Authorisation Code Grant.

d. The redirect url should be http://<value of tester.hostname>:<value of tester.port>/eqsupport/primary

5. To check the OAuth flow worked, this test app lists the collections via the REST API. Grant LIST_COLLECTION to the user you plan to sign in as.
a. If you miss this step, the tester won't able to gather the collections to double check your oauth is working. To resolve this, grant the ACL, remove the generated token from the OAuth settings page in openEQUELLA, and try the tester again.
6. Start the tester - ie java -jar OAuthTester_v2_20151116.jar
7. Once the tester in running, it'll output the url of the tester, something like http://192.168.1.142:8888/eqsupport/entry based on your
tester.hostname and tester.port values in oauth-tester.properties.
8. Browse to that URL and click the link. openEQUELLA will present a login page (or a confirmation page if you're logged in a different tab).
Login / Confirm access for your desired user.
9. To test subsequent tries, click the link on the /eqsupport/primary page.
10. If you want to mess with the flow, try to change the value after the equals sign in the URL ..../primary?code=[[tempuuid]] to something
else (like ..../primary?code=fakecode) and submit the page or just resubmit the page with the previously valid temp code.
