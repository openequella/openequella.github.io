[Home](https://equella.github.io/)

# Integration Interface Guide

* [Integration overview](#integration-overview)
* [Single sign-on authentication](#single-sign-on-authenication)  
* [Integration hook URL](#integration-hook-url)  
* [Integration hook actions](#integration-hook-actions) 


## Integration overview  

The purpose of this guide is to provide system administrators with a method for a third party system to use the EQUELLA Digital Repository as an integrated tool to discover and return content. A typical usage would be adding course content, via an integration, to deliver to students.

EQUELLA provides a URL that is a hook into the content discovery engine. Once at this URL (typically displayed within a frameset of the third party system), the user can search, create, manage and share content that they have access to within EQUELLA. The hook is designed to provide seamless single sign-on access and can be customized to present a look-and-feel similar to the integrating system.

## Single sign on authentication
When single sign-on (SSO) to EQUELLA is required, an authentication token should be included in the URL. Including a token in the URL logs the user nominated in the token into EQUELLA, providing access to all EQUELLA pages the user has privileges for, and ensures the security and auditing integrity are maintained.

### Token generation
The format of the token parameter is most easily specified by the following code:
```
public String createToken (String username, String shareId, String sharedSecret) {
    String time = Long.toString (System.currentTimeMillis ());

    return URLEncoder.encode (username, "UTF-8")
         + ":"
         + URLEncoder.encode(shareId, "UTF-8")
         + ":"
         + time
         + ":"
         + new Base64Encoder ().encode (
      new Md5 (
        username
            + shareId
            + time
            + sharedSecret
      ).getDigest ());
  }
```
Once a token is generated, it can be URL-encoded and added to the hook URL as the token parameter. This token can be used as a parameter on any EQUELLA page and may also be used to initiate SOAP sessions. There is a maximum time difference of 30 minutes between a token and the current time on the server (GMT). Tokens with a larger difference are considered to be expired and invalid.

The single sign-on relies on the EQUELLA Shared Secrets plug-in being set up with an appropriate shared secret. Shared Secrets are configured in the Administration Console’s User Management tool. 

The Shared Secret plug-in provides the following options:
   * Specification of Identifier (ID) and Shared Secret.
   * Automatically modify usernames, with prefix and/or postfix, to disambiguate from other single sign-ons.
   * An access control expression to allow only certain users to login with this shared secret.
   * Automatic denial or acceptance of guest user access.
   * Automatic creation of local users if they do not exist at the time of login. 

## Integration hook URL  
The integration hook URL comprises several parameters that include methods, actions, URLs and authentication. These parameters allow complete access to EQUELLA pages from an integration and provide a means for performing tasks in the EQUELLA Digital Repository.

## Integration hook actions 

An integration must forward to your EQUELLA institution with ‘signon.do’ appended to the hosting server URL where a selection session will be started. All selection sessions provide a means for performing tasks in the EQUELLA Digital Repository that result in the selection of an item or attachment by the user. 

As an example the following URL:
‘<http://equella.myinstitute.edu/institution/logon.do>’ 
would become the hook URL 
‘<http://equella.myinstitute.edu/institution/signon.do>’.

### Input parameters
The following parameters can be appended to the URL:

**method (required)**  This should always have the value ‘lms'.

**token (optional)**  A string to enable single sign-on to EQUELLA. If the token is not provided the user will have to provide authentication whenever the hook URL is used. 

**returnurl (required)**  The URL that the user is redirected to when the action is complete. This URL can comprise parameters; an example is provided in the guide below.

**cancelurl (optional)**  The URL that the user is redirected to if they choose to cancel access.

**returnprefix (required)**  A prefix that will be prepended to all parameters that are added to the return URL. The prefix will ensure that the parameters will not conflict with your own.

**action (required)**  The action that needs to be undertaken. These are predefined strings. Optionally a URL path to redirect to can also be used. This path must start with a slash ‘/’ e.g. ‘/access/contribute.do’.

**courseCode (optional)**  The ID of a course that has been defined in the Administration Console Course tool. This is to allow the Copyright system to know which course a particular resource is being activated for.
Note: a value for this parameter overrides the courseId parameter if both are supplied.

**courseId (optional)**  This parameter is overridden by the courseCode parameter if both are supplied.  The ID of a course that has been defined in the Administration Console Course tool. This is to allow the Copyright system to know which course a particular resource is being activated for.

**attachmentUuidUrls (optional)** If passed in with a value of ‘true’, the URLs for selected attachments will use the attachment UUID rather than the attachment name. This allows attachment names to be renamed without breaking existing URLs in an LMS.

**cancelDisabled (optional)**  If passed in with a value of ‘true’, any close or cancel buttons in the EQUELLa interface will be suppressed. This is useful for integrations that provide their own close/cancel buttons.

**options (optional)**  Extended set of parameters that can be used for further configuration. These are predefined strings and are listed under the section on the Options parameter.

**forcePost**  If passed in with a value of ‘true’ the user's selections will be POSTed back to your integration in JSON format (See Output parameters) instead of via URL query string parameters.

**selectMultiple**  Allow selection of multiple resources during the selection session. Note that if selectMultiple is ‘true’ then the final selections will always be posted back to your integration as per forcePost.

**attachmentonly**  Set to true if you do not wish users to be able to select resource summaries and only select attached content.

**structure** A JSON representation of your destination folders. (See "structured" action value). It is highly recommended that this value be POSTed rather than included in the URL parameters due to the size of the value.
The format for this value is:
```
{
  "name": "Course Name",
  "code": "Course Code",
  "id": "A unique ID #1",
  "targetable": true|false,
  "selected": true|false,
  "folders":
    [ 
      {
        "name": "Folder 1",
        "id": "A unique ID #2",
        "targetable": true|false,
        "selected": true|false,
        "folders": 
        [
        <any number of folders in same format as Folder 1>
        ]
      },
      ...
    ]
}
````

A "targetable" value of false means the user cannot add resources to this location.

Only one location should be marked as "selected". This location will be highlighted and selected when the selection session starts. It must be a targetable location.

Every targetable location must have a unique "id" value. This value will be sent back to your integration to indicate where the resources were added to. (See Output parameters)

Each location can have any number of folders, and each of these folders can have any number of folders and so on.

The top level folder does not have to be a course. The "code" field is optional and is not currently used.

##### Example values for URL parameters may be as follows:

**method** lms

**token** demouser:sharedSecretID:1115854854000:4Qw4nf92EV6ev/1OCYlI2Q==

**returnurl**  http://lms.institution.edu/module/mod.do?

session=47f23cd29&course=3&folder=1

**cancelurl**  http://lms.institution.edu/module/cancelled.do

**returnprefix** xxx

**action**  structured
```
http://equella.myinstitute.edu/signon.do?
method=lms
&token=demouser%3AsharedSecretID%3A1115854854000%3A4Qw4nf92EV6ev%2F1O 
CYlI2Q%3D%3D
&returnurl=http%3A%2F%2Flms.institution.edu%2Fmodule%2Fmod.do
%3Fsession%3D47f23cd29%26course%3D3%26folder%3D1
&cancelurl=http%3A%2F%2Flms.institution.edu%2Fmodule%2Fcancelled.do
&returnprefix=xxx
&action=selectOrAdd
```

## Predefined actions
The following actions are recommended for easily providing access to most EQUELLA functions through a single entry point:

**selectOrAdd** Provides access to all EQUELLA searching and contribution methods. Loads the EQUELLA Selection Home Page.

**searchResources** Provides access to all EQUELLA searching methods.

**contribute**  Provides access to all EQUELLA contribution methods.

**structured** Provides access to all EQUELLA searching and contribution methods. Loads the search results page with a graphical representation of the target folders (sent from your system) on the right hand side, with which users can drag and drop resources onto.  Must be used with the structure 

## ‘Options’ parameter
The following is a list of the current pre-defined parameter values that can be assigned to the options parameter, and the corresponding function in EQUELLA that they provide access to:

**allCollections**  Turn on or off the availability of all collections for searching. (true/false)

**allPowerSearches**  Turn on or off the availability of all power searches for searching. (true/false)

**allContributionCollections**  Turn on or off the availability of all collections for contribution. (true/false)

**collectionIds**  Provide a list of collection UUIDs to make available for searching.

**powerSearchIds**  Provide a list of power search UUIDs to make available for searching.

**contributionCollectionIds**  Provide a list of collection UUIDs to make available for contribution.

**dynamicCollectionsIds**  Provide a list of dynamic collection UUIDs to make available for contribution.


## Output parameters
The parameters that are appended to the return URL are as follows:

**name**  String representing the name of the item found.
description  String representing the description of the item found.

**url**  The absolute URL to the item found. Do not rely on the format of the URL being an integ/gen style URL. This is not part of the integration interface and may change depending on the type of attachment or item selected, or in future versions of EQUELLA.

**uuid**  Persistent identifier for the item.
itemdefuuid  Persistent identifier for the collection for the item.

**version**  Persistent identifier for version of the item.
result  “success” | “cancelled” | “failed”     Note: this is still supported but deprecated. If possible, integrations should not rely on this value.

**type**  “resource”  “plan”    Note: this is still supported but deprecated. If possible, integrations should not rely on this value.

Using the example of returning from a Moodle™ integration, the user will be redirected to: 
```
http://lms.institution.edu/module/mod.do?
session=47f23cd29
&course=3
&folder=1
&xxxresult=success
&xxxname=Sample%20item
&xxxdescription=Very%20interesting%20description
&xxxurl=http%3A%2F%2Fequella.myinstitute.edu%2Fitem%2Ftlf
%2Fc7f6e44d-4101-c1dd-f936-0195cb51403a%2F1%2F
&xxxuuid=c7f6e44d-4101-c1dd-f936-0195cb51403a
&xxxtemdefuuid=1ed3feb1-2e04-1bad-cfbb-7e6168c4a8ca
&xxxversion=1
```
where the module on the integration at ‘/module/mod.do’ can interpret these parameters to add a link to the EQUELLA item.(Note: the parameters added by EQUELLA are prefixed with ‘xxx’ as specified in the returnprefix parameter.)

If a "structured" action is used, or if either selectMultiple=true or forcePost=true was specified to start the integration session, a JSON array value will be POSTed back to your integration under the "links" form parameter.

The fields of each link object are:

**name**   String representing the name of the item or attachment selected.

**description**   Will be blank if an attachment was selected, otherwise it will be the description of the selected item.

**url**  The absolute URL to the item found. Do not rely on the format of the URL being an integ/gen style URL. This is not part of the integration interface and may change depending on the type of attachment or item selected, or in future versions of EQUELLA.

**uuid**  Persistent identifier for the item.

**version**  Persistent identifier for version of the item.

**attachmentUuid**  Will be blank if an item summary was selected, otherwise it will be the UUID of the selected attachment.

**thumbnail**  The URL for the thumbnail image representing this item or attachment.

**datecreated**   Date that the item was created in Unix time. (<http://en.wikipedia.org/wiki/Unix_time>).

**datemodified**   Date that the item was last modified in Unix time (<http://en.wikipedia.org/wiki/Unix_time>).

**owner**  The owner of the item (friendly name, not the user ID)

**itemName**  The name of the item. This will match the name parameter if an item was selected, otherwise it is the name of the item that contains the selected attachment.

**attachmentName**  Will be absent if an attachment was not selected. Otherwise it is the name of the selected attachment.

**mimetype**  Will be absent if an attachment was not selected.

**filesize**  Will be absent if an attachment was not selected. This is the file size (in bytes) of the attachment (if any).

**filename**  Will be absent if an attachment was not selected. This is the filename of the attachment (if any).

**folder**  In the case of a structured session, the folder property indicates where the resource should be added to.

For example:
```
 [
  {
    "url":"http://YOUR_INST/integ/gen/9a4b5423-7340-4562-bfea-97e4dccf30a9/1/",
    "name":"A Resource Name",
    "description":"Some description",
    "attachmentUuid":"",
    "thumbnail":"http://YOUR_INST/thumbs/9a4b5423-7340-4562-bfea-97e4dccf30a9/1/",
    "datecreated":1367469056810,
    "datemodified":1367469192507,
    "owner":"Joe Smith [jsmith]",
    "folder":"A unique ID #1"
  },
  {
    "url":"http://YOUR_INST/integ/gen/6a678dfa-7e99-4321-97ba-f6477753afa6/1/attachment.jpg",
    "name":"Another Resource Name",
    "description":"A descriptive description",
    "attachmentUuid":"c1525791-5fd5-4659-8766-43e119d27a48",
    "thumbnail":"http://YOUR_INST/thumbs/6a678dfa-7e99-4321-97ba-f6477753afa6/1/c1525791-5fd5-4659-8766-43e119d27a48",
    "datecreated":1368753894640,
    "datemodified":1368753894633,
    "owner":"Joe Smith [jsmith]",
    "folder":"A unique ID #2"
  }
]
```
