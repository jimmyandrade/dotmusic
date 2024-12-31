export interface SymplaEvent {
  id: number;
  start_date: string;
  end_date: string;
  name: string;
  detail: string;
  private_event: number;
  published: number;
  cancelled: number;
  image: string;
  address: {
    address: string;
    address_alt: string;
    city: string;
    address_num: string;
    name: string;
    lon: number;
    state: string;
    neighborhood: string;
    zip_code: string;
    lat: number;
    country?: string;
  };
  host: {
    name: string;
    description: string;
  };
  category_prim: {
    name: string;
  };
  category_sec: {
    name: string;
  };
  url: string;
}

export interface SymplaEventsResponseData {
  data: SymplaEvent[];
  sort: {
    field_sort: string;
    sort: 'ASC' | 'DESC';
  };
  pagination: {
    has_next: boolean;
    has_prev: boolean;
    quantity: number;
    offset: number;
    page: number;
    page_size: number;
    total_page: number;
    hits: number;
  };
}
