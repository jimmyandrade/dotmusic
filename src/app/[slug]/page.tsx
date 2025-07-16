import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';
import { AspectRatio, Grid } from '@radix-ui/themes';
import classNames from 'classnames';
import type { Metadata } from 'next';
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { notFound, redirect } from 'next/navigation';
import { getSongSlugs } from '@/libs/music/data-access/getSongSlugs';
import { PageHeader } from '@/libs/shared/ui/components/server/PageHeader';
import { PageHeading } from '@/libs/shared/ui/components/server/PageHeading';
import { YouTubeVideo } from '@/libs/videos/ui/YouTubeVideo';

interface PageParams {
  slug: string;
}
interface PageProps {
  params: PageParams;
}
interface ContentData {
  openGraphImages: OpenGraph['images'];
  title: string;
  youtubeVideoId?: string;
}

export const generateStaticParams = () => {
  return getSongSlugs().map((slug) => ({ slug }));
};

const getSongDataBySlug = (
  slug: PageParams['slug'],
): ContentData & {
  /**
   * @example 927
   */
  featureFmFrameHeight: number;
  /**
   * @example https://ffm.to/sinceramente
   */
  featureFmFrameURL: string;
} => {
  console.log(slug);

  if (['duv', 'dúvida', 'd%C3%BAvida'].includes(slug)) {
    redirect('/duvida');
  }
  if (
    [
      'sincera-mente',
      'sincer-mente',
      'sincera=mente',
      'sincera%3Dmente',
    ].includes(slug)
  ) {
    redirect('/sinceramente');
  }

  const filePath = join(cwd(), 'content/songs', `${slug}.json`);

  if (!existsSync(filePath)) {
    return notFound();
  }

  const fileBuffer = readFileSync(filePath);

  if (typeof fileBuffer === 'undefined') {
    return notFound();
  }

  const fileContents = fileBuffer.toString();

  if (typeof fileContents === 'undefined') {
    return notFound();
  }

  return JSON.parse(fileContents);
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const { openGraphImages, title } = getSongDataBySlug(slug);
  const url = `/${slug}`;
  const description = `Ouça ${title} no seu serviço de música preferido, incluindo YouTube, Spotify, Apple Music e Deezer`;

  return {
    alternates: {
      canonical: url,
    },
    description,
    openGraph: {
      description,
      images: openGraphImages,
      title,
      url,
    },
    title,
    twitter: {
      cardType: 'summary_large_image',
      description,
      title,
    },
  } as Metadata;
};

const SingleSongPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const { featureFmFrameHeight, featureFmFrameURL, title, youtubeVideoId } =
    getSongDataBySlug(slug);
  const frameMaxDimensions = {
    height: 960,
    width: 300,
  };

  const height = featureFmFrameHeight ?? frameMaxDimensions.height;
  const width = frameMaxDimensions.width;

  return (
    <article className="relative" id={slug}>
      <PageHeader>
        <PageHeading>{title}</PageHeading>
      </PageHeader>
      <Grid
        columns={{
          xs: '1',
          sm: '1',
          md: '2fr 1fr',
          lg: '3fr 1fr',
          xl: '4fr 1fr',
        }}
      >
        <AspectRatio ratio={16 / 9}>
          <YouTubeVideo
            allowFullScreen={true}
            autoPlay={true}
            className="aspect-video object-fill absolute"
            controls={true}
            id={youtubeVideoId}
            loop={true}
            muted={true}
            playsInline={true}
            showInfo={false}
            showRelated={false}
            title={`Videoclipe de '${title}', de Jimmy Andrade, no YouTube`}
          />
        </AspectRatio>

        <iframe
          className={classNames(
            'min-w-[320px] w-full min-h-[300px]',
            `max-w-[${height}px] z-50`,
          )}
          height={height}
          loading={'eager'}
          src={`${featureFmFrameURL}/?height=${height}&width=${width}`}
          title={title}
          width={width}
        />
      </Grid>
    </article>
  );
};

export default SingleSongPage;
