## Alternatives to using BIRT

There is nothing stopping the use of other reporting tools instead of BIRT. You can create 
reports using any tool which can connect to an SQL database.

Having said that we do provide BIRT extensions which give you additional querying capabilities 
which you won't get out of the box in another tool, however you may not need this 
functionality or can query it in a different way.

| BIRT                   | Alternative                                                                                                                                                                  |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Freetext Dataset       | Many reporting tools contain the ability to make datasets from REST API queries. You could use the searching REST API.                                                       |
| Usermanagement Dataset | If your users are all internal, you can query their details straight from the EQUELLA db, however if they are for example stored in LDAP, your tool will need to query that. |
| Connector Datasource   | The connector datasource is doing calls to our integrations to ask them to query the LMS database. You can cut out the middle man and query the LMS database directly.       |

