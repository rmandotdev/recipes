export type OtherLang = string & {};

const ALLOWED_LANGS = ["en", "ru"] as const;

export type Lang = (typeof ALLOWED_LANGS)[number];

const ALLOWED_LANGS_SET: ReadonlySet<Lang | OtherLang> = new Set(ALLOWED_LANGS);

function isAllowedLang(lang: Lang | OtherLang): lang is Lang {
  return ALLOWED_LANGS_SET.has(lang);
}

export function toAllowedLang(lang: Lang | OtherLang): Lang {
  return isAllowedLang(lang) ? lang : "en";
}
