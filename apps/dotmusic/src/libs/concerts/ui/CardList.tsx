import { type ReactNode } from 'react';

export interface CardListProps {
  children: ReactNode;
}

export const CardList = ({ children }: CardListProps) => (
  <ul className="columns-1 sm:columns-2 md:columns-3 pb-8">{children}</ul>
);
