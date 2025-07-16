import {
  type HeadingProps as HeaderHomeLinkProps,
  Heading,
  Link,
} from '@radix-ui/themes';
import NextLink from 'next/link';

export type { HeaderHomeLinkProps };

export const HeaderHomeLink = ({
  as = 'h1',
  className = '',
  children,
  size,
  ...props
}: HeaderHomeLinkProps) => (
  <Heading
    as={as}
    className={`uppercase ${className}`}
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
