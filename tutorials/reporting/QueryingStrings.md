## Querying strings

This tutorial continues on from - [The basics - primary keys and UUIDs](TheBasics.md)

Virtually all reports will require you to query the text stored in the `language_string` table.

Despite the fact that this table is designed for storing multiple different text strings
for different languages, we will be assuming that there is only going to be a single
language specified (for 99.99% of clients this is a safe assumption).

### The query

Let's modify the original "items by modification date" query to include `language_string` lookups:

```sql
SELECT i.id AS item_id, i.uuid, i.version,
       i_name.text as item_name, be_name.text as collection_name,
       i.date_modified
FROM item i
INNER JOIN base_entity be on be.id = i.item_definition_id
LEFT JOIN language_string i_name on i.name_id = i_name.bundle_id
LEFT JOIN language_string be_name on be.name_id = be_name.bundle_id
WHERE i.institution_id = CURRENT_INSTITUTION
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
ORDER BY i.date_modified DESC
LIMIT 10
```

So each language string lookup requires an LEFT JOIN on the `language_string` table and a select clause which gets the "text" column.

Here I've used the convention "&lt;tablealias&gt;\_&lt;column&gt;" for naming of the `language_string` joins, just to keep some consistency. I'd recommend writing your queries with a naming strategy similar to this.

| NOTES                                                                                                                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I've used LEFT JOIN here instead of INNER JOIN in case there is a null language string, in which case you will still get a row but with a null name.                  |
| The item's name and description are stored in the database, however they are actually generated from the item's XML and schema definition and aren't edited directly. |
