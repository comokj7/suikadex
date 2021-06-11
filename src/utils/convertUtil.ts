import { Locales } from '../enums';

export const enum2array = (target: any): Array<any> => {
  return Object.keys(target)
    .filter((value) => isNaN(Number(value)) === true)
    .map((key) => target[key]);
};

export const filterLocaleName = (
  list?: any[],
  locale?: Locales,
  isAlt?: boolean
): any[] => {
  const targetLocale =
    isAlt && locale === Locales.JAPANESE ? Locales.JAPANESE_KANA : locale;

  return list?.filter((item) => item.language_id === targetLocale) ?? [];
};

export const naturalMoveFilter = (item: any) => item.level > 0;
