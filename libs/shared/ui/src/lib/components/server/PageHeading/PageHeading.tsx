import {
  Heading,
  type HeadingProps as PageHeadingProps,
} from '@radix-ui/themes';

export { type PageHeadingProps };

export const PageHeading = ({
  as = 'h2',
  children,
  mb = '4',
  size,
  ...props
}: PageHeadingProps) => (
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
