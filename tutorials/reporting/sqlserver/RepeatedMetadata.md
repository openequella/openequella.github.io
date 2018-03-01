## Querying repeated metadata nodes

In the previous tutorial we learned how to use the `value()` function to extract data from 
the item xml.

We did a simply query which returned a single value, however XPath queries are much more 
powerful than that, they can be used return multiple parts of the xml.

A common pattern within EQUELLA is to collect multiple sets of data using the "Repeater" 
control, for example:

```xml
<xml>
 <item>
  <cars>
   <car>
    <make>Ford</make>
    <model>Laser</model>
   </car>
   <car>
    <make>Hyundai</make>
    <model>Accent</model>
   </car>
   <car>
    <make>Honda</make>
    <model>Accord Euro</model>
   </car>
  </cars>
 </item>
</xml>
```

What if we'd like to report on each car separately? Thankfully the native XML support of 
databases can easily handle this problem.

### Selecting individual cars

**Report on each car**

```sql
SELECT TOP 10 i.id AS item_id, i.uuid, i.version, 
       i_name.text as item_name, be_name.text as collection_name,
       carxml.query('make/text()') as make,
       carxml.query('model/text()') as model
FROM item i 
INNER JOIN (select id, cast (xml AS XML) itemxml from item_xml) ix on i.item_xml_id = ix.id
INNER JOIN base_entity be on be.id = i.item_definition_id
LEFT JOIN language_string i_name on i.name_id = i_name.bundle_id
LEFT JOIN language_string be_name on be.name_id = be_name.bundle_id
CROSS APPLY itemxml.nodes('/xml/item/cars/car') car(carxml)
WHERE i.institution_id = CURRENT_INSTITUTION
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
```

Let's examine the important parts of the query:

`INNER JOIN (select id, cast (xml AS XML) itemxml from item_xml) ix on i.item_xml_id = ix.id`

This simply converts the converts the textual xml to the native XML datatype and gives it the alias "`itemxml`".

`CROSS APPLY itemxml.nodes('/xml/item/cars/car') car(carxml)`

The `nodes()` XPath function returns a rowset with a single column for each match on the 
given XPath. In our case we want all the separate cars "`/xml/item/cars/car`" and we have named 
the column `carxml`. `CROSS APPLY` then combines both rowsets together making a row for each car.

Now that we have rows with individual &lt;car&gt; elements, it's a simple matter of 
extracting the data from the child nodes:

```sql 
carxml.query('make/text()') as make,
carxml.query('model/text()') as model
```

`query()' will return a single result from an XPath query, in our case we're just selecting 
the text contents. 
