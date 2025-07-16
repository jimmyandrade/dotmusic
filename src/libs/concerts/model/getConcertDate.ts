import type { Concert } from './Concert';

export const getConcertDate = (concert: Concert): Date => {
  return concert.starts_at
    ? new Date(concert.starts_at)
    : new Date(concert.datetime);
};
