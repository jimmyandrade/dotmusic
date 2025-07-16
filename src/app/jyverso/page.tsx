import { Card, Container, Grid, Heading, Inset, Link } from '@radix-ui/themes';
import Image from 'next/image';
import type { FC } from 'react';
import { communityName } from '@/libs/community/ui/constants/communityName';
import { fetchSymplaEvents } from '@/libs/concerts/data-access/fetchSymplaEvents';
import type { SymplaEvent } from '@/libs/concerts/model/Events';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';

const JyversoPage: FC = async () => {
  const events = await fetchSymplaEvents();

  return (
    <article id={JyversoPage.displayName}>
      <PageHeader>
        <PageHeading>JYVERSO</PageHeading>
      </PageHeader>
      <Container>
        Benefícios para quem é JYVER
        <p className="text-lg">
          Em breve você poderá conferir aqui os eventos e produtos com
          benefícios exclusivos para quem faz parte do&nbsp;{communityName}.
        </p>
        <Grid
          asChild
          columns={{
            initial: '1',
            md: '2',
          }}
          gap="4"
        >
          <ul>
            {events.data.map((event: SymplaEvent) => (
              <li key={event.id}>
                <Card asChild>
                  <Link
                    href={event.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Inset pb="current" side="top">
                      <Image
                        src={event.image}
                        alt={event.name}
                        width={1600}
                        height={838}
                      />
                    </Inset>
                    <Heading
                      as="h3"
                      size={{
                        initial: '2',
                        xs: '3',
                        sm: '4',
                        lg: '5',
                      }}
                    >
                      {event.name}
                    </Heading>
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </Grid>
      </Container>
    </article>
  );
};

JyversoPage.displayName = 'JyversoPage';
export default JyversoPage;
