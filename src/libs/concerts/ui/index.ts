import { Card } from './Card';
import { CardList } from './CardList';
import { Name } from './Name';

export interface ConcertType {
  Card: typeof Card;
  CardList: typeof CardList;
  Name: typeof Name;
}

export const Concert: ConcertType = {
  Card,
  CardList,
  Name,
};
