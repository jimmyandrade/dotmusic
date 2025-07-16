import { parse } from 'csv-parse/sync';
import { mapProducts, type ParsedRawData } from '../model/mapProduct';

export const fetchReservaInkProducts = async () => {
  const response = await fetch(
    'https://reserva.ink/user/dashboard/export_csv.facebook_store_feed_172246',
  );

  const csvRawText = await response.text();

  const parsedRawData: ParsedRawData = parse(csvRawText, {
    columns: true,
    delimiter: ',',
    skip_empty_lines: true,
  });

  return mapProducts(parsedRawData);
};
