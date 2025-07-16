import {
  Button,
  Flex,
  Inset,
  Card as PrimitiveCard,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';
import type { FC } from 'react';
import type { Concert } from '../model/Concert';
import { getConcertDate } from '../model/getConcertDate';
import { getCountryName } from '../model/getCountryName';
import { Name } from './Name';

export interface CardProps {
  concert: Concert;
}

export const Card: FC<CardProps> = ({ concert }: Readonly<CardProps>) => {
  const dateTime = getConcertDate(concert);
  const countryName = getCountryName(concert.venue.country);
  return (
    <li itemScope itemType="https://schema.org/MusicEvent">
      <PrimitiveCard key={concert.id} mb="4">
        {concert.artist?.image_url ? (
          <>
            <Inset className="relative">
              <div className="bg-gradient-to-t from-[--color-background] absolute w-full h-full"></div>
              <Image
                alt={`Imagem de divulgação do ${concert.title}`}
                src={concert.artist?.image_url}
                width={720}
                height={720}
              />
            </Inset>
            <Name
              size={{
                xl: '7',
                lg: '6',
                md: '5',
                sm: '4',
              }}
              as="h4"
              className="relative"
              mt="-9"
              mb="4"
            >
              {concert.title || concert.venue.name}
            </Name>
          </>
        ) : (
          <Name size="4" as="h4">
            {concert.title || concert.venue.name}
          </Name>
        )}
        <Flex direction="column" gap="2" position="relative">
          <Text size="3" mb="2">
            <time dateTime={dateTime.toISOString()} itemProp="startDate">
              {dateTime.toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
            &nbsp;-&nbsp;
            {concert.ends_at && (
              <time
                dateTime={new Date(concert.ends_at).toISOString()}
                itemProp="endDate"
              >
                {new Date(concert.ends_at).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            )}
          </Text>
          <Text>
            {concert.venue.city}, {countryName}
          </Text>
          {concert.presale !== '' &&
            typeof concert.presale !== 'string' &&
            typeof concert.presale.presale_link === 'string' && (
              <Button asChild>
                <a
                  href={concert.presale.presale_link}
                  itemProp="url"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Pré-venda
                </a>
              </Button>
            )}
        </Flex>
      </PrimitiveCard>
    </li>
  );
};
