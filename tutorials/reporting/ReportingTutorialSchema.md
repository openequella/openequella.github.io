## Reporting tutorials openEquella schema

All tutorials in this wiki will be written against the same XML schema, which will be 
updated as needed for new tutorial topics.

```xml
<xml>
 <item>
  <name/>
  <description/>
  <cars>
   <car>
    <make indexed="true"/>
    <model indexed="true"/>
   </car>
  </cars>
 </item>
</xml>
```

The `/item/cars/car` node can contain more than one `<car>` node.
