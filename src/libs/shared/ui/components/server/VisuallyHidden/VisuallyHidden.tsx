import { VisuallyHidden as PrimitiveVisuallyHidden } from '@radix-ui/themes';
import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

export type VisuallyHiddenProps = ComponentProps<
  typeof PrimitiveVisuallyHidden
>;

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({
  className = '',
  ...props
}: Readonly<VisuallyHiddenProps>) => (
  <PrimitiveVisuallyHidden
    class={classNames('sr-only', className)}
    {...props}
  />
);
