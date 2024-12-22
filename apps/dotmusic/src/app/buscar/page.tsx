import { Container } from '@jimmyandrade/ui/server';
import { Card } from '@radix-ui/themes';

export default async function SearchPage() {
  const customSearchBaseURL = 'https://www.googleapis.com/customsearch/v1';
  const url = new URL(customSearchBaseURL);

  if (typeof process.env.GOOGLE_CUSTOM_SEARCH_API_KEY === 'undefined') {
    throw new Error('GOOGLE_CUSTOM_SEARCH_API_KEY is not defined');
  }

  if (typeof process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID === 'undefined') {
    throw new Error('GOOGLE_CUSTOM_SEARCH_ENGINE_ID is not defined');
  }

  url.searchParams.append('key', process.env.GOOGLE_CUSTOM_SEARCH_API_KEY);
  url.searchParams.append('cx', process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID);
  url.searchParams.append('q', 'jimmy');

  const response = await fetch(url.toString());
  const data = await response.json();
  const { items, ...props } = data;

  return (
    <div id={SearchPage.name}>
      <Container>
        {items.map((item) => (
          <Card asChild key={item.cacheId}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h2>{item.title}</h2>
              <p>{item.snippet}</p>
              {item.link}
            </a>
          </Card>
        ))}
      </Container>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
