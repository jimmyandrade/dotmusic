import { Heading, type HeadingProps } from '@radix-ui/themes';

export const PageHeading = ({
  as = 'h2',
  children,
  mb = '4',
  ...props
}: HeadingProps) => (
  <Heading
    as={as}
    mb={mb}
    size={{
      initial: '4',
      xs: '5',
      sm: '6',
      md: '7',
      lg: '8',
      xl: '9',
    }}
    {...props}
  >
    {children}
  </Heading>
);
