import { Flex, Link, Section } from '@radix-ui/themes';
import type { FC } from 'react';
import { NotFoundRandomQuote } from '@/libs/shared/ui/components/client/NotFoundRandomQuote';
import { Container } from '@/libs/shared/ui/components/server/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { SiteSearchForm } from '@/libs/shared/ui/components/server/SiteSearchForm';

const NotFoundPage: FC = () => {
  return (
    <article id={NotFoundPage.displayName}>
      <PageHeader>
        <PageHeading>Página não encontrada</PageHeading>
      </PageHeader>
      <Container>
        <Flex mt={'4'} gapY={'4'} direction={'column'}>
          <ProseText>A página que você está procurando não existe.</ProseText>
          <ul>
            <li>
              {/* The Link component from `next/link` should not be used here, otherwise page will not redirect. */}
              <Link href={'/'} rel={'home'} underline="always">
                Voltar para o início
              </Link>{' '}
              provavelmente vai te ajudar;
            </li>
          </ul>
        </Flex>
        <SiteSearchForm />
        <Section asChild>
          <footer>
            <NotFoundRandomQuote />
          </footer>
        </Section>
      </Container>
    </article>
  );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
