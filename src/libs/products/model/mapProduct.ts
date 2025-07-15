import {
  ProductColor,
  ProductSize,
  type ReservaInkProduct,
} from './ReservaInkProduct';

export type ParsedRawData = Array<Record<string, string>>;

export const mapProducts = (
  parsedRawData: ParsedRawData,
): ReservaInkProduct[] =>
  parsedRawData.map(
    (record) =>
      ({
        ...record,
        custom_label_1:
          record.custom_label_1 === '' ? undefined : record.custom_label_1,
        custom_label_2: record.custom_label_2
          .split(',')
          .map((tag) => tag.trim()),
        color: record.color
          .split(',')
          .map((color) => color.trim() as ProductColor),
        size: record.size.split(',').map((size) => size.trim() as ProductSize),
        additional_image_link: record.additional_image_link
          .split(',')
          .map((link) => link.trim()),
      } as ReservaInkProduct),
  );
