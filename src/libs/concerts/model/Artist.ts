import type { Link } from './Link';

export interface Artist {
  id: string;
  name: string;
  url: string;
  mbid: string;
  options?: Record<string, unknown>;
  tracking: unknown[];
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  tracker_count: number;
  upcoming_event_count: number;
  support_url: string;
  links: Link[];
  artist_optin_show_phone_number: boolean;
  show_multi_ticket: boolean;
}
