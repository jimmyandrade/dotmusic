import { CommunityLinks } from '@/libs/community/ui/components/CommunityLinks';
import { COMMUNITY_NAME } from '@/libs/community/ui/constants/communityName';
import { getSongReleaseInfo } from '@/libs/music/data-access/getSongReleaseInfo';
import { getSongSlugs } from '@/libs/music/data-access/getSongSlugs';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';
import { Container, Flex } from '@radix-ui/themes';

export const generateStaticParams = () =>
  getSongSlugs().map((slug) => ({ slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { title } = getSongReleaseInfo(slug);
  return {
    title: `${title} - Brigadjimm por fazer pré-save`,
  };
}

const SongThankYouPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { title, releaseDateFormatted } = getSongReleaseInfo(slug);
  return (
    <article id={`${slug}-thanks-page`}>
      <PageHeader>
        <PageHeading>Obrigado pelo pré-save!</PageHeading>
      </PageHeader>
      <Container>
        <Flex direction="column" gap="4">
          <ProseText as="p">
            {releaseDateFormatted
              ? `Dia ${releaseDateFormatted},`
              : 'Em breve,'}{' '}
            <br />
            você vai ouvir <cite>{title}</cite> <br />
            antes de todo mundo
          </ProseText>
          <ProseText size="3" className="pb-6">
            Enquanto isso, aproveite para fazer parte do&nbsp;{COMMUNITY_NAME}{' '}
            <br className="hidden md:block" />
            e&nbsp;receber conteúdo&nbsp;exclusivo sobre a&nbsp;música:
          </ProseText>
        </Flex>
        <CommunityLinks className="pb-10" />
      </Container>
    </article>
  );
};

SongThankYouPage.displayName = 'SongThankYouPage';
export default SongThankYouPage;
