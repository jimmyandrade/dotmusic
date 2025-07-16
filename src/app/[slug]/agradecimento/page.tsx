import { Container, Flex } from '@radix-ui/themes';
import type { FC } from 'react';
import { CommunityLinks } from '@/libs/community/ui/components/CommunityLinks';
import { communityName } from '@/libs/community/ui/constants/communityName';
import { getSongReleaseInfo } from '@/libs/music/data-access/getSongReleaseInfo';
import { getSongSlugs } from '@/libs/music/data-access/getSongSlugs';
import type { PageParams, PageProps } from '@/libs/music/model/song-page';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { ProseText } from '@/libs/shared/ui/components/server/ProseText';

export const generateStaticParams = (): PageParams[] => {
  return getSongSlugs().map((slug) => ({ slug }));
};

const SongThankYouPage: FC<PageProps> = async ({
  params,
}: Readonly<PageProps>) => {
  const { slug } = await params;
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
            Enquanto isso, aproveite para fazer parte do&nbsp;{communityName}{' '}
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

// };
