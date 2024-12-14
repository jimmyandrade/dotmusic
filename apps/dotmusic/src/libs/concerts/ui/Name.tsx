import { Heading, type HeadingProps } from '@radix-ui/themes';

export const Name = ({
  children,
  itemProp = 'name',
  ...props
}: HeadingProps) => (
  <Heading itemProp={itemProp} {...props}>
    {children}
  </Heading>
);
