enum Availability {
  IN_STOCK = 'in stock',
}

enum Condition {
  NEW = 'new',
}

enum Gender {
  UNISEX = 'unisex',
}

export enum ProductColor {
  BLACK = 'Preta',
  GRAY = 'Cinza',
  GREEN = 'Verde',
  NAVY = 'Marinho',
  PINK = 'Rosa',
  RED = 'Vermelho',
  WHITE = 'Branca',
}

enum AgeGroup {
  ALL_AGES = 'age_group',
}

export enum ProductSize {
  FITTED = 'feminina (PP ao GG)',
  REGULAR = 'masculina (P ao 3G)',
}

enum ProductType {
  T_SHIRT = 'Camiseta',
}

export interface ReservaInkProduct {
  /**
   * @required
   */
  id: string;
  availability: Availability;
  condition: Condition;
  description: string;
  image_link: string;
  link: string;
  title: string;
  price: string;
  sale_price: string;
  mpn: string;
  google_product_category: string;
  fb_product_category: string;
  brand: string;
  custom_label_0: ProductType;
  custom_label_1?: string;
  custom_label_2: string[];
  color: ProductColor[];
  gender: Gender;
  material: string;
  age_group: AgeGroup;
  size: ProductSize[];
  additional_image_link: string[];
}
