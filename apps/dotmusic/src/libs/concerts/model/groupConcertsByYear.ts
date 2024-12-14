import { type Concert } from './Concert';

export const groupConcertsByYear = (concerts: Concert[]) => {
  return concerts.reduce((acc, concert) => {
    const date = concert.starts_at
      ? new Date(concert.starts_at)
      : new Date(concert.datetime);
    const year = date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(concert);
    return acc;
  }, {} as Record<string | number, Concert[]>);
};
