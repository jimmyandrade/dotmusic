import { type TextProps as ProseTextProps, Text } from '@radix-ui/themes';

export type { ProseTextProps };

export const ProseText = ({
  className = '',
  children,
  size,
  ...props
}: ProseTextProps) => (
  <Text
    className={`max-w-prose ${className}`}
    size={
      size ?? {
        initial: '2',
        xs: '3',
        sm: '4',
        md: '5',
        lg: '6',
        xl: '7',
      }
    }
    {...props}
  >
    {children}
  </Text>
);
