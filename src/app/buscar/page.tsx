import {
  Callout,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Link,
  Quote,
  Section,
  Text,
  Theme,
} from '@radix-ui/themes';
import Image from 'next/image';
import NextLink from 'next/link';
import type { FC } from 'react';
import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { SiteSearchForm } from '@/libs/shared/ui/components/server/SiteSearchForm';
import { VisuallyHidden } from '@/libs/shared/ui/components/server/VisuallyHidden';
import { searchYouTubeVideos } from '../../libs/videos/data-access/searchYouTubeVideos';
import { ResourceKind } from '../../libs/videos/model';
import { YouTubeVideo } from '../../libs/videos/ui/YouTubeVideo';
import { fetchGoogleCustomSearchResults } from '../search/data-access';

export interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

const SearchPage: FC<SearchPageProps> = async (
  props: Readonly<SearchPageProps>,
) => {
  const { searchParams } = props;
  try {
    const { q: query = '' } = await searchParams;

    const googleSearchResults = await fetchGoogleCustomSearchResults(query);
    const videoSearchResults = await searchYouTubeVideos(query);
    const filteredVideoSearchResults = videoSearchResults.items.filter(
      (item) => item.id.kind === ResourceKind.Video,
    );

    return (
      <article id={SearchPage.name}>
        <VisuallyHidden>
          <PageHeader>
            {query === '' ? (
              <>
                Resultados da busca por <Quote>{query}</Quote>
              </>
            ) : (
              <PageHeading>Buscar</PageHeading>
            )}
          </PageHeader>
        </VisuallyHidden>
        <Container>
          <Section>
            <SiteSearchForm defaultValue={query} />
          </Section>
          {query !== '' && filteredVideoSearchResults.length > 0 && (
            <Section size="1">
              <Heading as="h3" mb="4">
                Vídeos
              </Heading>
              <Grid asChild columns="4" gap="1">
                <ul>
                  {filteredVideoSearchResults.map((item) => (
                    <li key={item.etag} data-kind={item.kind}>
                      {item.id.kind === ResourceKind.Video && (
                        <Card asChild>
                          <a
                            href={`https://youtube.com/watch?v=${item.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Inset className="pointer-events-none">
                              <YouTubeVideo
                                data-kind={item.id.kind}
                                id={item.id.videoId}
                              />
                            </Inset>
                          </a>
                        </Card>
                      )}
                    </li>
                  ))}
                </ul>
              </Grid>
            </Section>
          )}

          {typeof googleSearchResults.items !== 'undefined' && query !== '' && (
            <Section size="1">
              <Heading as="h3" mb="4">
                Websites
              </Heading>
              <Theme radius="none">
                <Flex asChild direction="column" gapY="4" mb="4">
                  <ul>
                    {googleSearchResults.items.map((item) => (
                      <li
                        className="relative overflow-hidden"
                        data-kind={item.kind}
                        key={item.formattedUrl}
                      >
                        {typeof item.pagemap.cse_image !== 'undefined' &&
                          item.pagemap.cse_image.map((image) => {
                            if (typeof image.src === 'undefined') {
                              return;
                            }
                            return (
                              <Image
                                alt={item.title}
                                className="absolute w-full h-full object-center object-cover animateMoveUp opacity-15"
                                crossOrigin="anonymous"
                                fill={
                                  typeof image.height !== 'string' ||
                                  typeof image.width !== 'string'
                                }
                                key={image.src}
                                height={
                                  typeof image.height === 'string'
                                    ? parseInt(image.height)
                                    : undefined
                                }
                                src={image.src}
                                width={
                                  typeof image.width === 'string'
                                    ? parseInt(image.width)
                                    : undefined
                                }
                              />
                            );
                          })}
                        <Card asChild>
                          <NextLink href={item.formattedUrl} title={item.title}>
                            <Flex justify="between">
                              <Flex direction="column" gap="2">
                                <Link asChild>
                                  <Text
                                    color="gray"
                                    size="1"
                                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Google returns safe HTML
                                    dangerouslySetInnerHTML={{
                                      __html: item.htmlFormattedUrl
                                        .replace(/<b>/g, '<mark>')
                                        .replace(/<\/b>/g, '</mark>'),
                                    }}
                                  />
                                </Link>
                                <Heading
                                  // biome-ignore lint/security/noDangerouslySetInnerHtml: Google returns safe HTML
                                  dangerouslySetInnerHTML={{
                                    __html: item.htmlTitle
                                      .replace(/<b>/g, '<mark>')
                                      .replace(/<\/b>/g, '</mark>'),
                                  }}
                                  size={'3'}
                                />
                                <ProseText
                                  as="p"
                                  aria-label={item.snippet}
                                  // biome-ignore lint/security/noDangerouslySetInnerHtml: Google returns safe HTML
                                  dangerouslySetInnerHTML={{
                                    __html: item.htmlSnippet
                                      .replace(/<b>/g, '<mark>')
                                      .replace(/<\/b>/g, '</mark>'),
                                  }}
                                  size="1"
                                />
                              </Flex>
                              {typeof item.pagemap.cse_thumbnail !==
                                'undefined' &&
                                item.pagemap.cse_thumbnail.map((thumbnail) => {
                                  if (typeof thumbnail.src === 'undefined') {
                                    return;
                                  }
                                  return (
                                    <Inset
                                      side="right"
                                      key={thumbnail.src}
                                      pl="current"
                                    >
                                      <Image
                                        alt={item.title}
                                        className="object-contain"
                                        fill={
                                          typeof thumbnail.height !==
                                            'string' ||
                                          typeof thumbnail.width !== 'string'
                                        }
                                        height={
                                          typeof thumbnail.height === 'string'
                                            ? parseInt(thumbnail.height)
                                            : undefined
                                        }
                                        key={thumbnail.src}
                                        src={thumbnail.src}
                                        width={
                                          typeof thumbnail.width === 'string'
                                            ? parseInt(thumbnail.width)
                                            : undefined
                                        }
                                      />
                                    </Inset>
                                  );
                                })}
                            </Flex>
                          </NextLink>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </Flex>
              </Theme>
            </Section>
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
};

export default SearchPage;
