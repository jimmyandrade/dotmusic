import { Heading, type HeadingProps } from '@radix-ui/themes';

export const YearHeading = ({ children }: HeadingProps) => (
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
