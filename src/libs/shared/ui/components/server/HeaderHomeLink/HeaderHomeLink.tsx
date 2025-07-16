import {
  type HeadingProps as HeaderHomeLinkProps,
  Heading,
  Link,
} from '@radix-ui/themes';
import NextLink from 'next/link';
import type { FC } from 'react';

export type { HeaderHomeLinkProps };

export const HeaderHomeLink: FC<HeaderHomeLinkProps> = ({
  as = 'h1',
  className = '',
  children,
  size,
  ...props
}: Readonly<HeaderHomeLinkProps>) => (
  <Heading
    as={as}
    class={`uppercase ${className}`}
    size={size ?? { initial: '1', sm: '2', md: '3', lg: '4', xl: '5' }}
    {...props}
  >
    <Link asChild color="gray" underline="hover" highContrast>
      <NextLink href="/" scroll>
        {children}
      </NextLink>
    </Link>
  </Heading>
);
