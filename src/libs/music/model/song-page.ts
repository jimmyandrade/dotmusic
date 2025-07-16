import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export interface PageParams {
  slug: string;
}

export interface PageProps {
  params: Promise<PageParams>;
}

export interface ContentData {
  openGraphImages: OpenGraph['images'];
  title: string;
  youtubeVideoId?: string;
}
