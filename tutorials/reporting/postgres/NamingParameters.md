## Naming Parameters

There are times when using the question mark syntax for bringing in parameters is not the best choice - a parameter might need to be used in multiple places, the number of parameters could make for a confusing SQL query, etc. After setting up the Report and Data Set parameters appropriately, use the following SQL example as a guide to 'name' the parameters directly in the query.

```sql
with vars as (
  select
  ?::date as startdate,
  ?::date as enddate
)
select uuid, version, date_created from item
where
  date_created >= (select startdate from vars) and
  date_created <= (select enddate from vars)
```
