import { type Concert } from '../model/Concert';
import { ConcertsFetchError } from '../model/ConcertsFetchError';

export const fetchConcerts = async () => {
  const appId = process.env.BANDSINTOWN_APP_ID;

  if (typeof appId !== 'string' || appId.length === 0) {
    throw new Error(ConcertsFetchError.MissingApiKey);
  }

  const [today] = new Date().toISOString().split('T');
  const baseURL =
    'https://rest.bandsintown.com/artists/Jimmy%20Andrade/events/';
  const url = new URL(baseURL);
  url.searchParams.append('app_id', appId);
  url.searchParams.append('date', today);
  const formattedURL = url.toString();
  const data = await fetch(formattedURL);
  const concerts = await data.json();

  if (!Array.isArray(concerts) || concerts.length === 0) {
    throw new Error(ConcertsFetchError.NoConcerts);
  }

  return concerts as Concert[];
};
