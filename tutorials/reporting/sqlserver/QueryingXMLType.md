## Querying with the native XML datatype

All of our supported databases (Postgres, Oracle, MS SQL) have all had their own native XML 
datatype for many years now, which allows query writers the ability to run fully fledged 
XPath queries on them.

EQUELLA doesn't make use of this functionality though, as an item's XML is just stored as 
a normal text column in the `item_xml` table.

That doesn't mean that you can't use the native XML datatype in your reports however, 
as you can write SQL that converts the text column to the native XML type and run an 
XPath query on that.

This tutorial will show how you can retrieve and filter on data contained in the Item 
XML using XPath queries, in particular we will be querying the `/item/cars/car` path 
from our [Reporting tutorial schema](../ReportingTutorialSchema.md), filtering our results 
based on the number of car's entered.

### Using an XPATH query

In order to return our results, we need to query the Item XML for a count of how many 
`item/cars/car` elements there are.

To query this using with XPath you can use:

`count(/xml/item/cars/car)`

NOTE|
---|
In SQL Server XPath queries will default to being relative to the document, 
e.g. you still need to reference the &lt;xml&gt; root node. 

Let's put this into our query:

**Items with multiple cars**

```sql
SELECT TOP 10 i.id AS item_id, i.uuid, i.version, 
       i_name.text as item_name, be_name.text as collection_name,
       ix.car_count
FROM item i 
INNER JOIN (select id, cast (xml as XML).value('count(/xml/item/cars/car)', 'int') as car_count from item_xml) ix 
           on i.item_xml_id = ix.id
INNER JOIN base_entity be on be.id = i.item_definition_id
LEFT JOIN language_string i_name on i.name_id = i_name.bundle_id
LEFT JOIN language_string be_name on be.name_id = be_name.bundle_id
WHERE i.institution_id = CURRENT_INSTITUTION
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
  AND ix.car_count > 1
ORDER BY ix.car_count DESC
```

Let's focus on the inner query which is where our xpath query comes into play:

`select id, cast (xml as XML).value('count(/xml/item/cars/car)', 'int') as car_count from item_xml`

The part that does the XPath query is pretty straight forward:

`cast (xml as XML).value('count(/xml/item/cars/car)', 'int')`

First we cast the `xml` column into the `XML` datatype `cast (xml as XML)`.
Next we call the `value()` function on the `XML` datatype which takes an XPath query as a string 
and a return type for the query. In this case we're returning the count as an `int`. 

Once you have the XPath result as an `int` type, you can select the id column and 
use an INNER JOIN and treat it like any other table:

`INNER JOIN (select...) ix on i.item_xml_id = ix.id`

We can filter by car\_count in the outer query's where clause to restrict to only those 
items with multiple cars.

`AND ix.car_count > 1`

XPath queries are very powerful and they also unlock the power of treating different 
parts of the Item metadata separately, as you will see in the next tutorial.

**Next tutorial** : [Querying repeated metadata](RepeatedMetadata.md)