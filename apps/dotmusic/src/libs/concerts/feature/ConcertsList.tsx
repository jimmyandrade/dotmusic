import { Callout } from '@radix-ui/themes';
import { fetchConcerts } from '../data-access';
import { groupConcertsByYear } from '../model/groupConcertsByYear';
import { Concert } from '../ui';
import { YearHeading } from '../ui/YearHeading';
import { Concert as ConcertRecord } from '../model/Concert';
import { ConcertsFetchError } from '../model/ConcertsFetchError';

export interface ConcertsListProps {
  maxYears?: number;
}

const START = 0;

export const ConcertsList = async ({ maxYears }: ConcertsListProps) => {
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
  const sortStrategy = (a: string, b: string) => Number(b) - Number(a);
  const years = Object.keys(concertsByYear)
    .sort(sortStrategy)
    .slice(START, maxYears);

  return (
    <>
      <ul>
        {years.map((year) => (
          <li className="relative" key={year}>
            <YearHeading>{year}</YearHeading>
            <Concert.CardList>
              {concertsByYear[year].map((concert) => {
                return <Concert.Card key={concert.id} concert={concert} />;
              })}
            </Concert.CardList>
          </li>
        ))}
      </ul>
    </>
  );
};
