export type PluralForms = Readonly<
  Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }
>;

export type OtherLang = string & {};

export type Lang = "en" | "ru" | OtherLang;

export type PluralMap = Readonly<
  Partial<Record<Lang, PluralForms>> & { en: PluralForms }
>;

export type LocaleMap<T extends string = string> = Record<T, PluralMap>;

export type Locales<T = Record<string, LocaleMap>> = {
  readonly [Table in keyof T]: { readonly [Key in keyof T[Table]]: PluralMap };
};
