import {
  Heading,
  type HeadingProps as PageHeadingProps,
} from '@radix-ui/themes';
import type { FC } from 'react';

export type { PageHeadingProps };

export const PageHeading: FC<PageHeadingProps> = ({
  as = 'h2',
  children,
  mb = '4',
  size,
  ...props
}: Readonly<PageHeadingProps>) => (
  <Heading
    align={{
      initial: 'center',
      xs: 'left',
    }}
    as={as}
    mb={mb}
    size={
      size ?? {
        initial: '4',
        xs: '5',
        sm: '6',
        md: '7',
        lg: '8',
        xl: '8',
      }
    }
    {...props}
  >
    {children}
  </Heading>
);
