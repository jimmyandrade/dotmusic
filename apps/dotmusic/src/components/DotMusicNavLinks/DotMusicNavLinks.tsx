'use client';

import { SiteNavigation, TabNavLink } from '@jimmyandrade/ui/server';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DotMusicNavLinks = () => {
  const pathname = usePathname();

  return (
    <SiteNavigation
      aria-label="Navegação principal"
      size={{ initial: '1', sm: '2' }}
    >
      <TabNavLink
        asChild
        active={pathname === '/'}
        className="xs:hidden xl:flex"
      >
        <Link href="/" rel="home" title="Início">
          Início
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/musica'}>
        <Link href="/musica" title="Música">
          Música
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/shows'}>
        <Link href="/shows" title="Shows">
          Shows
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/bio'}>
        <Link href="/bio" title="Bio">
          Bio
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/midia'}>
        <Link href="/midia" title="Mídia">
          Mídia
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/loja'}>
        <Link href="/loja" title="Loja">
          Loja
        </Link>
      </TabNavLink>
    </SiteNavigation>
  );
};
