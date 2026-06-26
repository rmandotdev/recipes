import type { Locales } from "./types";

export const LOCALES_TABLE = {
  units: {
    g: {
      en: { other: "g" },
      ru: { other: "г" },
    },
    kg: {
      en: { other: "kg" },
      ru: { other: "кг" },
    },
    litre: {
      en: { one: "litre", other: "litres" },
      ru: { one: "литр", many: "литров", other: "литра" },
    },
    cup: {
      en: { one: "cup", other: "cups" },
      ru: { one: "стакан", many: "стаканов", other: "стакана" },
    },
    teaspoon: {
      en: { one: "teaspoon", other: "teaspoons" },
      ru: {
        one: "чайная ложка",
        few: "чайные ложки",
        many: "чайных ложек",
        other: "чайной ложки",
      },
    },
  },

  items: {
    egg: {
      en: { one: "egg", other: "eggs" },
      ru: { one: "яйцо", many: "яиц", other: "яйца" },
    },
    lemon: {
      en: { one: "lemon", other: "lemons" },
      ru: { one: "лимон", many: "лимонов", other: "лимона" },
    },
    sugar: {
      en: { other: "sugar" },
      ru: { other: "сахар" },
    },
    water: {
      en: { other: "water" },
      ru: { other: "вода" },
    },
    "smoked-pork-ribs": {
      en: { other: "smoked pork ribs" },
      ru: { other: "копчёные свиные рёбрышки" },
    },
    pea: {
      en: { one: "pea", other: "peas" },
      ru: { other: "горох" },
    },
    carrot: {
      en: { one: "carrot", other: "carrots" },
      ru: { one: "морковка", many: "морковок", other: "морковки" },
    },
    potato: {
      en: { one: "potato", other: "potatoes" },
      ru: { one: "картошка", many: "картошек", other: "картошки" },
    },
    onion: {
      en: { one: "onion", other: "onions" },
      ru: { one: "луковица", many: "луковиц", other: "луковицы" },
    },
    rice: {
      en: { other: "rice" },
      ru: { other: "рис" },
    },
    salt: {
      en: { other: "salt" },
      ru: { other: "соль" },
    },
  },
} as const satisfies Locales;

export type LocalesTables = Locales<typeof LOCALES_TABLE>;

export type LocalesTableKey = keyof LocalesTables;

export type LocalesTable<T extends LocalesTableKey> = keyof LocalesTables[T];

export const locales: LocalesTables = LOCALES_TABLE;
