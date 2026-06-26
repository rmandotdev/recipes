import type { LocalesTable, LocalesTableKey } from "#i18n/locales";
import { locales } from "#i18n/locales";
import type { Lang } from "#i18n/types";

export function localize<T extends LocalesTableKey, K extends LocalesTable<T>>(
  table: T,
  key: K,
  amount: number | string,
  lang: Lang,
): string {
  const num = typeof amount === "string" ? parseFloat(amount) || 0 : amount;
  const form = new Intl.PluralRules(lang).select(num);
  const map = locales[table][key];
  const forms = map[lang] ?? map.en;
  return forms[form] ?? forms.other;
}
