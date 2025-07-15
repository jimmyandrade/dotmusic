export enum Language {
  BrazilianPortuguese = 'pt-BR',
}

export const locales = Object.values(Language);
export const defaultLocale = Language.BrazilianPortuguese;

export function generateStaticParamsWithLang() {
  return [{ lang: Language.BrazilianPortuguese }];
}

export type ParamWithLangCollection = {
  lang: Language;
};
