# Log Review 2

**_ Recommended for use only by individuals with a strong understanding of the Equella system _**

This is a Java utility that loops through the file directory structure of a cluster of Equella resource-centre logs, and reports on the 'search facets'
found. Due to the sheer number of log messages possible in a cluster of EQ nodes over days, this utility uses a PostgreSQL DB to build the
reports.

### Setup

Note: Releases of LogReview2 files are stored in the Equella Tools directory

#### Needed Files

- LogReview2 jar
- control.json (see Config Details for contents)
- creds.properties (see Config Details for contents)

#### General

The utility outputs 3 files: A file with all log review details, a file with only the log review details of 'found' search facets, and a file for 'unknown' errors / warnings.

Ensure a PostgreSQL DB is running.

To invoke, run this utility as follows:

```bash
$ java -jar logReview2_v[[latest version]].jar control.json creds.properties
```

#### Example file directory structure

```
server1
  2017-01-01
    application.html
    application.1.html
  2017-01-02
    application.html
    application.1.html
    application.2.html
    application.3.html
server2
  2017-01-01
    application.html
  2017-01-02
     application.html
     application.1.html
```

### Versions

**V1**
Initial version

### Config Details

Reflects version 1.0.

Control.json

```json
{
"logDirectory":"/full/path/to/equella/logs",
"outputDirectory":"/full/path/to/output/folder",
"outputBase":"freetext_prepend_to_output_files",
"_comment1": "granularity specifies the 'timeslice' of the review. It can be
'D'=days, 'H'=hours, 'M'=minutes, 'S'=seconds. It has a direct correlation to the
duration of the script",
"granularity":"H",
"trimGuide":"",
"roundName":"",
"_comment2":"searchFacets array - the review runs on 4 parts of the RC log - message,
stack trace, level, and category. Each part can be searched by a full text string
('equals'), or a wildcard text ('like', ie '%'). 'severity' is a future
enhancement.",
"searchFacets":[
{
"_comment": "DB connection timeouts",
"message": {"type": "like", "query": "Timeout after 300%ms of waiting for a
connection."},
"stack-trace": {"type": "equals", "query": ""},
"level": {"type": "equals", "query": "ERROR"},
"category": {"type": "equals", "query": "JDBCExceptionReporter"},
"severity":"info"
},
{
"_comment": "Equella startup",
"message": {"type": "equals", "query": "Starting"},
"stack-trace": {"type": "equals", "query": ""},
"level": {"type": "equals", "query": "INFO"},
"category": {"type": "equals", "query": "CuratorFrameworkImpl"},
"severity":"info"
}
]
}
```

creds.properties

```properties
db.username=my_db_username
db.password=my_db_password
```
