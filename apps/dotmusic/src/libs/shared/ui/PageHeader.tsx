import { ReactNode } from 'react';
import { Container } from './Container';

export interface PageHeaderProps {
  children: ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => (
  <header>
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
