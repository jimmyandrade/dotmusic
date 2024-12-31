import { Container, VisuallyHidden } from '@jimmyandrade/ui/server';
import { Card, Grid, Heading, Inset, Section } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { fetchSymplaEvents } from './libs/events/data-access';
import { type SymplaEvent } from './libs/events/model/Events';

export default async function IndexPage() {
  const events = await fetchSymplaEvents();

  return (
    <article id={IndexPage.name}>
      <VisuallyHidden asChild>
        <Heading as="h2">Página inicial</Heading>
      </VisuallyHidden>
      <Container>
        <Section>
          <Heading as="h2" mb="4">
            Eventos com benefícios para quem é JYVER
          </Heading>
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
        </Section>
      </Container>
    </article>
  );
}
