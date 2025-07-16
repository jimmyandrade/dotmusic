import { Inset, Strong, Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, MetadataRoute, Viewport } from 'next';
import { Albert_Sans } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import {
  defaultLocale,
  generateStaticParamsWithLang,
  type ParamWithLangCollection,
} from '../libs/i18n/model';
import './globals.css';

import classNames from 'classnames';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { GlobalFooter } from '@/libs/shared/ui/components/server/GlobalFooter';
import { GlobalHeader } from '@/libs/shared/ui/components/server/GlobalHeader';
import { GlobalRootLayout } from '@/libs/shared/ui/components/server/GlobalRootLayout';
import { HeaderHomeLink } from '@/libs/shared/ui/components/server/HeaderHomeLink';
import { MainContent } from '@/libs/shared/ui/components/server/MainContent';
import { SocialMediaLinks } from '@/libs/social-media/ui/components/server/SocialMediaLinks';
import { DotMusicNavLinks } from '../libs/navigation-and-seo/ui/DotMusicNavLinks';
import manifest from './manifest';

const albertSans: NextFontWithVariable = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert-sans',
});

const manifestData: MetadataRoute.Manifest = manifest();

export const metadata: Metadata = {
  title: `${manifestData.name} - ${manifestData.description}`,
  description:
    'Website oficial do cantor, compositor e produtor musical Jimmy Andrade. Artista de indie, pop e rock brasileiro. Escute suas músicas, consulte sua agenda e obtenha outras informações sobre a sua música.',
  applicationName: manifestData.name,
  openGraph: {
    siteName: manifestData.name,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: true,
  width: 'device-width',
};

export interface RootLayoutProps {
  children: ReactNode;
  params: Promise<ParamWithLangCollection>;
}

export const generateStaticParams = async (): Promise<
  ParamWithLangCollection[]
> => {
  return generateStaticParamsWithLang();
};

const RootLayout: FC<RootLayoutProps> = async (
  props: Readonly<RootLayoutProps>,
) => {
  const params = await props.params;

  const { children } = props;

  return (
    <Theme asChild appearance="dark" hasBackground accentColor="red">
      <GlobalRootLayout
        className={classNames(albertSans.variable)}
        lang={params.lang ?? defaultLocale}
      >
        <GlobalHeader>
          <HeaderHomeLink>
            <Strong>Jimmy Andrade</Strong>
          </HeaderHomeLink>

          <Inset>
            <div className="hidden md:block">
              <DotMusicNavLinks />
            </div>
          </Inset>
          <div className="hidden md:block">
            <SocialMediaLinks />
          </div>
        </GlobalHeader>
        <MainContent>{children}</MainContent>
        <GlobalFooter>
          <SocialMediaLinks />
        </GlobalFooter>
        <Analytics />
      </GlobalRootLayout>
    </Theme>
  );
};

export default RootLayout;
