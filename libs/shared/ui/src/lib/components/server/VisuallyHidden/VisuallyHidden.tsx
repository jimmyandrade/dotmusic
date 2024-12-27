import { VisuallyHidden as PrimitiveVisuallyHidden } from '@radix-ui/themes';
import classNames from 'classnames';
import { ComponentProps } from 'react';

export type VisuallyHiddenProps = ComponentProps<
  typeof PrimitiveVisuallyHidden
>;

export const VisuallyHidden = ({ className = '', ...props }) => (
  <PrimitiveVisuallyHidden
    className={classNames('sr-only', className)}
    {...props}
  />
);
