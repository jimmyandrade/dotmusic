'use client';

import {
  ShoppingCartIcon,
  SiteNavigation,
  TabNavLink,
} from '@jimmyandrade/ui/server';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DotMusicNavLinks = () => {
  const pathname = usePathname();

  return (
    <SiteNavigation aria-label="Navegação principal">
      <TabNavLink asChild active={pathname === '/'}>
        <Link href="/" title="Início">
          Início
        </Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/musica'}>
        <Link href="/musica">Música</Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/shows'}>
        <Link href="/shows">Shows</Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/bio'}>
        <Link href="/bio">Bio</Link>
      </TabNavLink>
      <TabNavLink asChild active={pathname === '/midia'}>
        <Link href="/midia">Mídia</Link>
      </TabNavLink>
      <TabNavLink asChild>
        <Link
          href="https://reserva.ink/jimmyandrade"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ShoppingCartIcon />
          &nbsp;&nbsp;Loja
        </Link>
      </TabNavLink>
    </SiteNavigation>
  );
};
