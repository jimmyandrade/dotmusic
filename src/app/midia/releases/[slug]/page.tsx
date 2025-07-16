import { Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { getPressReleaseContentBySlug } from '@/libs/press-release/data-access/getPressReleaseContentBySlug';
import { PrintButton } from '@/libs/press-release/ui/client/PrintButton';
import { ShareButton } from '@/libs/press-release/ui/client/ShareButton';
import { Container } from '@/libs/shared/ui/components/server/Container/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';

interface ReleasePageProps {
  params: Promise<{ slug: string }>;
}

const ReleasePage: FC<ReleasePageProps> = async ({
  params,
}: Readonly<ReleasePageProps>) => {
  const { slug } = await params;
  const pressRelease = getPressReleaseContentBySlug(slug);
  if (!pressRelease) {
    notFound();
  }
  const { data, content } = pressRelease;
  return (
    <article id={slug}>
      <PageHeader>
        <PageHeading>{data.title ?? slug}</PageHeading>
      </PageHeader>
      <Container>
        <Grid columns={{ xs: '1', sm: '3fr 1fr' }}>
          <div>
            <ProseText size="3">{content}</ProseText>
          </div>
          <aside>
            <Flex direction="column" gap="2">
              <PrintButton variant="ghost" />
              <ShareButton title={data.title || slug} variant="ghost" />
            </Flex>
          </aside>
        </Grid>
      </Container>
    </article>
  );
};

export default ReleasePage;
