export const Language = {
  BrazilianPortuguese: 'pt-BR',
} as const;
export type Language = (typeof Language)[keyof typeof Language];

export const locales: Language[] = Object.values(Language);
export const defaultLocale: Language = Language.BrazilianPortuguese;

export interface ParamWithLangCollection {
  lang: Language;
}

export const generateStaticParamsWithLang = (): ParamWithLangCollection[] => {
  return [{ lang: Language.BrazilianPortuguese }];
};
