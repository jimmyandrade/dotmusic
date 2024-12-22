import {
  Container as PrimitiveContainer,
  type ContainerProps,
} from '@radix-ui/themes';

export type { ContainerProps };

export const Container = ({ asChild, children, className = "", ...props }: ContainerProps) => (
  <PrimitiveContainer
    asChild={asChild}
    className={className}
    size={{
      initial: '1',
      xs: '1',
      sm: '2',
      md: '3',
      lg: '4',
    }}
    {...props}
  >
    {children}
  </PrimitiveContainer>
);
Container.displayName = 'Container';
