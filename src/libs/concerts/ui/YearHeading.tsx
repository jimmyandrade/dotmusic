import { Heading, type HeadingProps } from '@radix-ui/themes';
import type { FC } from 'react';

export const YearHeading: FC<HeadingProps> = ({
  children,
}: Readonly<HeadingProps>) => (
  <Heading
    as="h3"
    className="sm:-rotate-90 sm:absolute sm:-left-20 sm:top-8"
    color="gray"
    size="8"
    mb={{
      initial: '4',
      sm: '-2',
    }}
  >
    {children}
  </Heading>
);
