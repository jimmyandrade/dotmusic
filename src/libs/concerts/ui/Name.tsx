import { Heading, type HeadingProps } from '@radix-ui/themes';
import type { FC } from 'react';

export const Name: FC<HeadingProps> = ({
  children,
  itemProp = 'name',
  ...props
}: Readonly<HeadingProps>) => (
  <Heading itemProp={itemProp} {...props}>
    {children}
  </Heading>
);
