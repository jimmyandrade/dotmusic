import {
  Container,
  PageHeader,
  PageHeading,
  VisuallyHidden,
} from '@jimmyandrade/ui/server';
import {
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  Quote,
  Text,
  TextField,
} from '@radix-ui/themes';
import Link from 'next/link';
import { fetchGoogleCustomSearchResults } from '../../libs/search/data-access';

export interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  try {
    const { q: query = '' } = searchParams;
    const data = await fetchGoogleCustomSearchResults(query);

    return (
      <article id={SearchPage.name}>
        <PageHeader>
          <VisuallyHidden>
            {query === '' ? (
              <>
                Resultados da busca por <Quote>{query}</Quote>
              </>
            ) : (
              <PageHeading>Buscar</PageHeading>
            )}
          </VisuallyHidden>
        </PageHeader>
        <Container>
          <Flex asChild gapX="2">
            <form>
              <TextField.Root
                className="flex-grow"
                defaultValue={query}
                id="q"
                name="q"
                placeholder="Pesquisar em JimmyAndrade.music, JYVERSO e sites relacionados"
                size="3"
                type="search"
              />
              <Button size="3" type="submit">
                Pesquisar
              </Button>
            </form>
          </Flex>
          {typeof data.items !== 'undefined' && (
            <ul>
              {data.items.map((item) => (
                <li data-kind={item.kind} key={item.formattedUrl}>
                  <Card asChild mt="4">
                    <Link href={item.formattedUrl} title={item.title}>
                      <Text
                        color="gray"
                        mb="4"
                        size="1"
                        dangerouslySetInnerHTML={{
                          __html: item.htmlFormattedUrl,
                        }}
                      />
                      <Heading
                        dangerouslySetInnerHTML={{ __html: item.htmlTitle }}
                        size={'3'}
                      />
                      <Text
                        as="p"
                        aria-label={item.snippet}
                        dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
                      />
                      {/* {JSON.stringify(item.pagemap)} */}
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </article>
    );
  } catch (error) {
    return (
      <Callout.Root>
        <Callout.Text>
          {error !== null &&
          typeof error === 'object' &&
          'message' in error &&
          typeof error.message === 'string'
            ? error.message
            : 'Não é possível buscar resultados no momento.'}
        </Callout.Text>
      </Callout.Root>
    );
  }
}
