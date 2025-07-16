import type { Artist } from './Artist';
import type { Offer } from './Offer';
import type { PresaleDetails } from './PresaleDetails';
import type { Venue } from './Venue';

export interface Concert {
  id: string;
  url: string;
  datetime: string;
  title: string;
  description: string;
  artist?: Artist;
  venue: Venue;
  lineup: string[];
  offers: Offer[];
  free: boolean;
  artist_id: string;
  on_sale_datetime: string;
  festival_start_date: string;
  festival_end_date: string;
  festival_datetime_display_rule: string;
  starts_at: string;
  ends_at: string;
  datetime_display_rule: string;
  bandsintown_plus: boolean;
  presale: PresaleDetails | '';
  sold_out: boolean;
}
