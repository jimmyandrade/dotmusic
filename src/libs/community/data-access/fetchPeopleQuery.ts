import { FetchPeopleError } from '../model/FetchPeopleError';

export const fetchPeopleQuery = async (): Promise<unknown> => {
  const usersDatabaseId = process.env.NOTION_USERS_DATABASE_ID;

  if (!usersDatabaseId) {
    throw new Error(FetchPeopleError.MissingNotionDatabaseId);
  }

  const baseUrl = `https://api.notion.com/v1/databases/${usersDatabaseId}/query`;

  console.debug('baseUrl', baseUrl);

  if (!process.env.NOTION_API_SECRET) {
    throw new Error(FetchPeopleError.MissingNotionApiSecret);
  }

  if (!process.env.NOTION_API_VERSION) {
    throw new Error(FetchPeopleError.MissingNotionApiVersion);
  }

  const headers = {
    Authorization: `Bearer ${process.env.NOTION_API_SECRET}`,
    'Content-Type': 'application/json',
    'Notion-Version': process.env.NOTION_API_VERSION,
  } satisfies HeadersInit;

  const body = JSON.stringify({
    filter: {},
  });

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers,
    body,
  });

  return await response.json();
};
