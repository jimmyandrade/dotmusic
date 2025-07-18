import { Callout } from '@radix-ui/themes';
import type { FC } from 'react';
import { fetchConcerts } from '../data-access/fetchConcerts';
import type { Concert as ConcertRecord } from '../model/Concert';
import { ConcertsFetchError } from '../model/ConcertsFetchError';
import { groupConcertsByYear } from '../model/groupConcertsByYear';
import { Concert } from '../ui';
import { YearHeading } from '../ui/YearHeading';

export interface ConcertsListProps {
  maxYears?: number;
}

const START = 0;

export const ConcertsList: FC<ConcertsListProps> = async ({
  maxYears,
}: Readonly<ConcertsListProps>) => {
  let concerts = [] as ConcertRecord[];

  try {
    concerts = await fetchConcerts();
  } catch (error) {
    if (typeof error !== 'object' || error === null || !('message' in error)) {
      return (
        <Callout.Root>
          <Callout.Text>
            Não foi possível carregar a lista de shows. Por favor, tente
            novamente mais tarde.
          </Callout.Text>
        </Callout.Root>
      );
    }
    if (error.message === ConcertsFetchError.MissingApiKey) {
      return (
        <Callout.Root>
          <Callout.Text>
            Não foi possível carregar a lista de shows. Por favor, tente
            novamente mais tarde.
          </Callout.Text>
        </Callout.Root>
      );
    }
    if (error.message === ConcertsFetchError.NoConcerts) {
      return (
        <Callout.Root>
          <Callout.Text>
            Não há shows cadastrados. Por favor, tente novamente mais tarde.
          </Callout.Text>
        </Callout.Root>
      );
    }
  }

  const concertsByYear = groupConcertsByYear(concerts);
  const sortStrategy = (a: string, b: string): number => Number(b) - Number(a);
  const years = Object.keys(concertsByYear)
    .sort(sortStrategy)
    .slice(START, maxYears);

  return (
    <ul>
      {years.map((year) => (
        <li className="relative" key={year}>
          <YearHeading>{year}</YearHeading>
          <Concert.CardList>
            {[...concertsByYear[year]]
              .sort(
                (a, b) =>
                  new Date(b.datetime).getTime() -
                  new Date(a.datetime).getTime(),
              )
              .map((concert) => (
                <Concert.Card key={concert.id} concert={concert} />
              ))}
          </Concert.CardList>
        </li>
      ))}
    </ul>
  );
};
