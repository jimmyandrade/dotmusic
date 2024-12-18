export enum FetchPeopleError {
  MissingNotionDatabaseId = 'Can not fetch people without a Notion database id',
  MissingNotionApiSecret = 'Can not fetch people without a Notion API secret',
  MissingNotionApiVersion = 'Can not fetch people without a Notion API version',
}
