# Guide to Scheduled Tasks

| Task                                 | Frequency | Version(s)                                                                            | Scope       | Scheduling    |
| ------------------------------------ | --------- | ------------------------------------------------------------------------------------- | ----------- | ------------- |
| RemoveExpiredCacheEntries            | Hourly    | 6.4-QA3 and later                                                                     | Server      |
| CheckCurrentOrdersTask               | Hourly    | 6.4 and prior                                                                         | Institution |
| CleanThumbQueue                      | Daily     | Before 6.4-QA3 (if your DB has the thumbnail_request table, you won't have this task) | Institution | ???           |
| CheckInstitutionStorageQuotas        | Daily     | 6.4-QA3 and later                                                                     | Institution | Runs at 23:00 |
| CheckEmailsTask                      | Daily     | 6.4-QA3 and later                                                                     | Institution | Runs at 23:00 |
| CheckURLsScheduledTask               | Daily     | 6.4-QA3 and later                                                                     | Institution | Runs at 23:00 |
| Remove-Staging-Areas                 | Daily     | 6.4-QA3 and later                                                                     | Server      | Runs at 23:00 |
| Remove Expired Security              | Daily     | 6.4-QA3 and later                                                                     | Institution | Runs at 23:00 |
| Check licence expiry date            | Daily     | 6.4 and prior                                                                         | Institution | Runs at 23:00 |
| NotifyOfNewItemsTask                 | Daily     | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| CheckUpdatedPurchasedItemsTask       | Daily     | 6.4 and prior                                                                         | Institution | Configurable  |
| UpdateActivationStatusTask           | Daily     | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| CheckReviewTask                      | Daily     | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| CheckModerationTask                  | Daily     | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| Run Harvester Profiles               | Daily     | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| Blackboard Connector Synchronisation | Weekly    | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| Remove Old Audit Logs                | Weekly    | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| Remove Deleted Items                 | Weekly    | 6.4-QA3 and later                                                                     | Institution | Configurable  |
| CheckDeletedUsersTask                | Weekly    | 6.4-QA3 and later                                                                     | Institution | Configurable  |
