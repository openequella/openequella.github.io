## EQUELLA schema *design*

Looking at the EQUELLA database schema can make someone who has to write queries against it 
shake their head and say "This doesn't make sense, why was it designed like this?".

The short answer is that the EQUELLA schema *wasn't actually designed.* At least not in the 
form that you see from the SQL perspective!

The database schema is generated automatically from an Object Relation Mapping library 
called [Hibernate](http://hibernate.org/orm/). Which hides a lot of the underlying schema 
details and presents you with more of a Java perspective of your data.

The decision to use Hibernate has its good and bad points:

**Good:**

-   Developers don't have to know much SQL - which makes it easier to write code and 
let Hibernate deal with the gory details, including easier support for multiple database types.

**Bad:**

-   Developers don't have to know much SQL - which means the don't have to care 
about the physical SQL representation and can easily model data that is difficult to query by hand.

EQUELLA schema peculiarities
============================

-   **Language Strings**
    -   EQUELLA supports internationalised strings (i18n strings), which means that you can specify multiple different textual versions of the same string for multiple languages.
    -   It's very flexible but a pain to query as it involves doing an SQL join over another table. 99% of EQUELLA users never use multiple languages, so this flexibility is just added complexity usually.
-   **"Base entities"**
    -   EQUELLA internally represents many of the entities such as Collections, Schemas, Workflows etc.. using a base class which contains many common attributes such as owner, data modified, name and description etc..
    -   Unfortunately we carried this through to the database level which means that all these attributes are stored in the "`base_entity`" table, generally requiring you to do an extra SQL join.
-   **Reusing of generic column names for different purposes**
    -   In particular our `attachment` and `audit_log_entry` tables contain columns such as data1, data2, value1, value2 etc.. which have different meanings depending on what other columns contain.
    -   This can make it hard to look at a query and get an intuition for what it is doing.
-   **Usage of acronyms for column names**
    -   The `drm_settings` table contains a large number of columns which are simply named used acronyms, again not very intuitive. 
-   **Storing multiple institutions in a schema adds extra complexity to queries**
    -   Due to this choice, you must include clauses which make sure your queries are accessing the data in the correct institution.
-   **Item XML isn't stored using the native XML types of the database**
    -   Postgres, Oracle and SQL Server all have native XML data types which enable you to do advanced XML queries using XPath.
    -   It is still possible to use these datatypes, however you must use casting to get access to them and this will be always be slower than direct usage.

Edalex Reporting database schema
================================

Edalex has  developed a separate reporting database schema and tool which addresses all of the issues listed above and gives you a much more intuitive view of your EQUELLA data. This tool is only available to Edalex clients. They can access it through their [support portal](http://support.edalexsolutions.com).

