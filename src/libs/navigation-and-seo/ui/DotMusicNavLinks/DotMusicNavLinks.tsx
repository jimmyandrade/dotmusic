'use client';

import { SiteNavigation } from '@/libs/shared/ui/components/server/GlobalNavigation';
import { TabNavLink } from '@/libs/shared/ui/components/server/TabNavLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationURL } from '../../model';

export const DotMusicNavLinks = () => {
  const pathname = usePathname();

  return (
    <SiteNavigation
      aria-label="Navegação principal"
      size={{ initial: '1', sm: '2' }}
    >
      <TabNavLink
        asChild
        active={pathname === NavigationURL.HOME}
        className="xs:hidden xl:flex"
      >
        <Link href={NavigationURL.HOME} rel="home" title="Início">
          Início
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === NavigationURL.MUSIC}>
        <Link href={NavigationURL.MUSIC} title="Música">
          Música
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === NavigationURL.CONCERTS}>
        <Link href={NavigationURL.CONCERTS} title="Shows">
          Shows
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === NavigationURL.BIO}>
        <Link href={NavigationURL.BIO} title="Bio">
          Bio
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === NavigationURL.PRESS}>
        <Link href={NavigationURL.PRESS} title="Mídia">
          Mídia
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === NavigationURL.STORE}>
        <Link href={NavigationURL.STORE} title="Loja">
          Loja
        </Link>
      </TabNavLink>
    </SiteNavigation>
  );
};
