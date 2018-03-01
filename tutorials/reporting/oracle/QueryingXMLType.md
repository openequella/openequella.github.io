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
from our [Reporting tutorial schema](ReportingTutorialSchema.md), filtering our results 
based on the number of car's entered.

### Using an XPATH query

In order to return our results, we need to query the Item XML for a count of how many 
`item/cars/car` elements there are.

Normally to query this using an XPath you would use:

`count(/xml/item/cars/car)`

Unfortunately Oracle doesn't support returning values from the `count()` function directly so 
we need to go about it in a round about way.

NOTE|
---|
In Oracle XPath queries will default to being relative to the document, 
e.g. you still need to reference the &lt;xml&gt; root node. 

The query:

**Items with multiple cars**

```sql
SELECT i.id AS item_id, i.uuid, i.version, 
       i_name.text as item_name, be_name.text as collection_name,
       car.car_count
FROM item i 
INNER JOIN (select id, XMLType(xml) as itemxml from item_xml) ix 
           on i.item_xml_id = ix.id
CROSS APPLY (select count(*) as car_count from table(XMLSequence(extract(ix.itemxml, '/xml/item/cars/car')))) car
INNER JOIN base_entity be on be.id = i.item_definition_id
LEFT JOIN language_string i_name on i.name_id = i_name.bundle_id
LEFT JOIN language_string be_name on be.name_id = be_name.bundle_id
WHERE i.institution_id = 2
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
  AND car.car_count > 1
  AND ROWNUM <= 10
ORDER BY car.car_count DESC

```

Let's focus on the parts which deal with the XMLType:

`INNER JOIN (select id, XMLType(xml) as itemxml from item_xml) ix on i.item_xml_id = ix.id`

This join converts the xml column into the XMLType.

`CROSS APPLY (select count(*) as car_count from table(XMLSequence(extract(ix.itemxml, '/xml/item/cars/car')))) car`

This part calls `extract()` on the itemxml which finds all the`car` nodes, `table(XMLSequence(...))` converts each 
node into a row inside a temporary table. `select count(*) as car_count` counts those 
rows and `CROSS APPLY (...) car` joins the result to the rest of the row. 

We can filter by car\_count in the outer query's where clause to restrict to only those 
items with multiple cars.

`AND car.car_count > 1`

XPath queries are very powerful and they also unlock the power of treating different 
parts of the Item metadata separately, as you will see in the next tutorial.

**Next tutorial** : [Querying repeated metadata](RepeatedMetadata.md)