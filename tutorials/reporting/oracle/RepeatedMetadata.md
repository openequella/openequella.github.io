## Querying repeated metadata nodes

In the previous tutorial we did a query which returned a single value, however XPath queries are much more
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
SELECT i.id AS item_id, i.uuid, i.version,
       i_name.text as item_name, be_name.text as collection_name,
       extractValue(value(carxml), 'car/make') as make,
       extractValue(value(carxml), 'car/model') as model
FROM item i
INNER JOIN (select id, XMLType(xml) as itemxml from item_xml) ix on i.item_xml_id = ix.id
CROSS APPLY XMLSequence(extract(itemxml, '/xml/item/cars/car')) carxml
INNER JOIN base_entity be on be.id = i.item_definition_id
LEFT JOIN language_string i_name on i.name_id = i_name.bundle_id
LEFT JOIN language_string be_name on be.name_id = be_name.bundle_id
WHERE i.institution_id = CURRENT_INSTITUTION
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
  AND ROWNUM <= 10
```

Let's examine the important parts of the query:

`INNER JOIN (select id, XMLType(xml) as itemxml from item_xml) ix on i.item_xml_id = ix.id`

This is the same join as the previous tutorial which simply converts the xml data to the native
XMLType datatype and gives it the alias "`itemxml`".

`CROSS APPLY XMLSequence(extract(itemxml, '/xml/item/cars/car')) car`

The `XMLSequnce()` function returns a rowset with a single column for each match on the
given XPath returned from the `extract()` call. In our case we want all the separate cars
"`/xml/item/cars/car`" and we have named the column `carxml`.
`CROSS APPLY` then combines both rowsets together making a row for each car.

Now that we have rows with individual &lt;car&gt; elements, it's a simple matter of
extracting the data from the child nodes:

```sql
extractValue(value(carxml), 'car/make') as make,
extractValue(value(carxml), 'car/model') as model
```

`extractValue()` will return the text content inside a node returned from an XPath query.
`value()` must be called on the `carxml` to turn it into an XMLType value. Note that the
XPath is not rooted inside the 'car' node, so you must include it at the start of your path.
