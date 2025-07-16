import type { FC, ReactNode } from 'react';
import { Container } from '../Container';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  ...props
}: PageHeaderProps) => (
  <header {...props}>
    <Container
      pt={{
        initial: '4',
        xs: '5',
        sm: '6',
        md: '7',
        lg: '8',
        xl: '9',
      }}
    >
      {children}
    </Container>
  </header>
);
