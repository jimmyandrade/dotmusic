import { Inset, Strong, Theme } from '@radix-ui/themes';

import './global.css';
import type { Metadata, Viewport } from 'next';
import { Albert_Sans } from 'next/font/google';
import { type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import getManifest from './manifest';
import {
  defaultLocale,
  generateStaticParamsWithLang,
  type ParamWithLangCollection,
} from '../libs/i18n/model';
import {
  GlobalFooter,
  GlobalHeader,
  GlobalRootLayout,
  HeaderHomeLink,
  MainContent,
} from '@jimmyandrade/ui/server';

import { SocialMediaLinks } from '../libs/social-media-links';
import { DotMusicNavLinks } from '../components/DotMusicNavLinks';
import classNames from 'classnames';

const albertSans = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert-sans',
});

const manifestData = getManifest();

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
  params: ParamWithLangCollection;
}

export async function generateStaticParams() {
  return generateStaticParamsWithLang();
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <Theme asChild appearance="dark" hasBackground accentColor="red">
      <GlobalRootLayout
        className={classNames(albertSans.variable, 'scroll-smooth')}
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
            <SocialMediaLinks.Root />
          </div>
        </GlobalHeader>
        <MainContent id="content">{children}</MainContent>
        <GlobalFooter>
          <SocialMediaLinks.Root />
        </GlobalFooter>
        <Analytics />
      </GlobalRootLayout>
    </Theme>
  );
}
