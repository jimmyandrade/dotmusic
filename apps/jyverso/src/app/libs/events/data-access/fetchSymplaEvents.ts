import { ErrorMessages } from '../model/ErrorMessages';
import { type SymplaEventsResponseData } from '../model/Events';

const SYMPLA_API_URL = 'https://api.sympla.com.br';
const EVENTS_ENDPOINT = '/public/v4/events';

function ensureNonEmptyString(
  value: unknown,
  variableName: string,
): asserts value is string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${ErrorMessages.INVALID_ENV_VARIABLE}: ${variableName}`);
  }
}

function assertArray<T>(
  value: unknown,
  errorMessage: string,
): asserts value is T[] {
  if (!Array.isArray(value)) {
    throw new Error(errorMessage);
  }
}

export async function fetchSymplaEvents(): Promise<SymplaEventsResponseData> {
  const SYMPLA_API_TOKEN = process.env.SYMPLA_API_TOKEN;

  ensureNonEmptyString(SYMPLA_API_TOKEN, 'SYMPLA_API_TOKEN');

  const response = await fetch(`${SYMPLA_API_URL}${EVENTS_ENDPOINT}`, {
    headers: {
      'Content-Type': 'application/json',
      s_token: SYMPLA_API_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(
      `${ErrorMessages.FETCH_EVENTS_FAILED}: ${response.status} ${response.statusText}`,
    );
  }

  const { data, pagination, sort }: SymplaEventsResponseData =
    await response.json();

  assertArray(data, ErrorMessages.INVALID_RESPONSE_DATA);

  return { data, pagination, sort };
}
