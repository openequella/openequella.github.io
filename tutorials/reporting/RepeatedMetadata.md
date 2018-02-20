## Querying repeated metadata nodes

In the previous tutorial we learned how to use the `xpath` function to extract data from 
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

## Selecting individual cars

**Report on each car**

```sql
SELECT i.id AS item_id, i.uuid, i.version, 
       ls_name.text as item_name, be_name.text as collection_name,
       (xpath('make/text()', ix.car))[1]::text as make,
       (xpath('model/text()', ix.car))[1]::text as model
FROM item i 
INNER JOIN (select id, unnest(xpath('item/cars/car', xml::xml)) as car from item_xml) ix 
           on i.item_xml_id = ix.id
INNER JOIN base_entity be on be.id = i.item_definition_id
LEFT JOIN language_string ls_name on i.name_id = ls_name.bundle_id
LEFT JOIN language_string be_name on be.name_id = be_name.bundle_id
WHERE i.institution_id = CURRENT_INSTITUTION
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
LIMIT 10
```

Let's examine the inner query:

`select id, unnest(xpath('item/cars/car', xml::xml)) as car from item_xml`

The XPath "item/cars/car" is quite straight forward, it simply selects all the car 
elements. It's the `unnest()` call which turns each `<car>` element from the returned 
array into it's own row, naming the column "car".

Now that we have rows with individual &lt;car&gt; elements, it's a simple matter of 
extracting the data from the child nodes:

`(xpath('make/text()', ix.car))[1]::text as make, `

`(xpath('model/text()', ix.car))[1]::text as model`

