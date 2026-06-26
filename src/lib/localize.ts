import type { Lang, OtherLang } from "#i18n/lang";
import { toAllowedLang } from "#i18n/lang";
import type { LocalesTable, LocalesTableKey } from "#i18n/locales";
import { locales } from "#i18n/locales";

export function localize<T extends LocalesTableKey, K extends LocalesTable<T>>(
  table: T,
  key: K,
  amount: number | string,
  lang: Lang | OtherLang,
): string {
  const num = typeof amount === "string" ? parseFloat(amount) || 0 : amount;
  const language = toAllowedLang(lang);
  const form = new Intl.PluralRules(language).select(num);
  const map = locales[table][key];
  const forms = map[language] ?? map.en;
  return forms[form] ?? forms.other;
}
