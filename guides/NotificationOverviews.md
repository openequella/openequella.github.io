# Notification Overviews

openEQUELLA offers a variety of notifications to it's users.

The following are an overview of the notifications available.

## Bad URL Notifications

Notifies a user that one of their items contains a URL that cannot be reached by openEQUELLA. The notification will be triggered once openEQUELLA fails to contact the URL at the warning stage and at the disabled stage. The warning threshold default is 5 tries, and can be overridden in `optional-config` via `urlChecker.triesUntilWarning`. The disabled threshold default is 10 tries, and can be overridden in `optional-config` via `urlChecker.triesUntilDisabled`.

URLs are discovered from the metadata values (such as the description), as well as the URL attachments.

### Target Audience

Notifications will be sent to owners and collaborators of a given item.

## Workflow Notifications

Need to document

## Others

Note: Not a complete list yet!
