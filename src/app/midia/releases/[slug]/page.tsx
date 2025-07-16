import fs from 'node:fs';
import path from 'node:path';
import { Flex, Grid } from '@radix-ui/themes';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { PrintButton } from '@/libs/press-release/ui/client/PrintButton';
import { ShareButton } from '@/libs/press-release/ui/client/ShareButton';
import { Container } from '@/libs/shared/ui/components/server/Container/Container';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { slugify } from '@/libs/shared/utils/slugify';

interface ReleasePageProps {
  params: { slug: string };
}

export default async function ReleasePage({ params }: ReleasePageProps) {
  const { slug } = await params;
  const dir = path.join(process.cwd(), 'content/press-releases');
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const title = data.title || file.replace(/\.(md|mdx)$/, '');
    const generatedSlug = slugify(title);
    if (generatedSlug === slug) {
      return (
        <article id={slug}>
          <PageHeader>
            <PageHeading>{data.title || slug}</PageHeading>
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
    }
  }
  notFound();
}
