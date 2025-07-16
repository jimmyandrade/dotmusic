import {
  type ContainerProps,
  Container as PrimitiveContainer,
} from '@radix-ui/themes';
import classNames from 'classnames';
import { forwardRef } from 'react';

export type { ContainerProps };

// biome-ignore lint/nursery/useExplicitType: forwardRef already specifies the type
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { asChild = false, children, className = '', ...props }: ContainerProps,
    forwardedRef,
  ) => (
    <PrimitiveContainer
      asChild={asChild}
      className={classNames(
        'container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8',
        className,
      )}
      size={{
        initial: '1',
        xs: '1',
        sm: '2',
        md: '3',
        lg: '4',
      }}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </PrimitiveContainer>
  ),
);
Container.displayName = 'Container';
