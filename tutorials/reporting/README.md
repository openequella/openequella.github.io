# Reporting Tutorials

This is a space dedicated to helping you get the most out of the data
contained in your openEQUELLA institution(s).

It is intended to be the place to go to for:

- Tutorials for writing a particular query
- Help writing the most efficient query for your database and openEQUELLA
  instance
- Understanding the intricacies of the openEQUELLA SQL schema - 
  [Why does the openEQUELLA schema make no sense?!](SchemaDesign.md)
- Learn about reports that other users  have created
- Picking the right dataset type for the job

## Tutorials

These tutorials are designed to be followed in order but more advanced
report writers might like to skip ahead.

For simplicity all items being reported on with these tutorials will use a
common [reporting tutorial schema](ReportingTutorialSchema.md).

### Querying using SQL

The SQL demonstrated in these tutorials can be used with reporting tools other than BIRT.
We do specific datasource integration with BIRT but [see here](WithoutBIRT.md) for
alternatives to those integrations.

### Cross platform SQL

1. [The basics - primary keys and UUIDs](TheBasics.md)
1. [Querying strings](QueryingStrings.md)

### Database specific guides

Postgres:

1. [Querying with the native XML type](postgres/QueryingXMLType.md)
1. [Querying repeated metadata](postgres/RepeatedMetadata.md)
1. [Querying with named parameters](postgres/NamingParameters.md)

SQLServer:

1. [Querying with the native XML type](sqlserver/QueryingXMLType.md)
1. [Querying repeated metadata](sqlserver/RepeatedMetadata.md)

Oracle:

1. [Querying with the native XML type](oracle/QueryingXMLType.md)
1. [Querying repeated metadata](oracle/RepeatedMetadata.md)
