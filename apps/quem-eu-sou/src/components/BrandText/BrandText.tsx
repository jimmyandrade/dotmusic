import { Strong, type StrongProps } from '@radix-ui/themes';

export { type StrongProps as BrandTextProps };

export const BrandText = ({
  className = 'uppercase',
  children = 'Quem Eu Sou?',
  ...props
}: StrongProps) => (
  <Strong className={className} {...props}>
    {children}
  </Strong>
);
