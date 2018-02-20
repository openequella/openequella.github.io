The goal of this tutorial will be to create a query which queries the last 10 items by modification date in a

particular collection based on the UUID of the collection.

Step-by-step guide
------------------

To start with let's create a query which just gets the latest 10 items modified throughout the whole institution:

**Query last 10 items by modification date**

```sql
SELECT i.id AS item_id, i.uuid, i.version, i.name_id
FROM item i 
WHERE i.institution_id = CURRENT_INSTITUTION 
ORDER BY i.date_modified DESC
LIMIT 10
```

This will select the database primary key, uuid, version and id of the name string for the first 10 items by modification date.

Notice that each item has it's own decimal primary key as well as a UUID and version number, this is because a single database schema can contain multiple institutions, so the UUID and version are not guaranteed to be unique.

Next up we need to limit the query to a specific collection by UUID. This requires doing an INNER JOIN on the `base_entity` table which is where the basic details about the collection are stored.

**Restrict by Collection UUID**

```sql
SELECT i.id AS item_id, i.uuid, i.version, i.name_id, be.name_id as col_name_id
FROM item i 
INNER JOIN base_entity be on be.id = i.item_definition_id
WHERE i.institution_id = CURRENT_INSTITUTION
  AND be.uuid = '20d5d5eb-af16-43b0-a42b-962c57fe87f2'
ORDER BY i.date_modified DESC
LIMIT 10
```

UUIDs for collections, schemas, items etc.. are consider stable identifiers which survive export/importing/cloning of an institution. In contrast primary key columns (item.id, base\_entity.id) will not survive across import/export so should not be hard coded into a query.

So we have some "name\_id" and "col\_name\_id" columns now but that's not particular useful to look at, so we need to learn how to get the text. 

Next tutorial : [Querying strings](Querying-strings_197722174.html)

NOTE

<span class="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon"></span>
CURRENT\_INSTITUTION is actually a special substitution made by our BIRT report extension (it replaces it with the ID of the current institution).

If you are executing the query outside of a BIRT dataset, you will need a different way of getting this ID.

E.g. you could either hardcode it or look it up by joining on the institution table and filtering by the institution url:

**Lookup Insitution ID by url**

```sql
SELECT i.id AS item_id, i.uuid, i.version, i.name_id
FROM item i 
WHERE i.institution_id = (select id from institution where url = 'https://betadev.equella.net/reports/')
ORDER BY i.date_modified DESC
LIMIT 10
```
