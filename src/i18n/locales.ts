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
    tablespoon: {
      en: { one: "tablespoon", other: "tablespoons" },
      ru: {
        one: "столовая ложка",
        few: "столовые ложки",
        many: "столовых ложек",
        other: "столовой ложки",
      },
    },
  },

  items: {
    bacon: {
      en: { other: "bacon" },
      ru: { other: "бекон" },
    },
    "black-pepper": {
      en: { other: "black pepper" },
      ru: { other: "чёрный перец" },
    },
    "bouillon-cube": {
      en: { one: "bouillon cube", other: "bouillon cubes" },
      ru: {
        one: "бульонный кубик",
        few: "бульонных кубика",
        many: "бульонных кубиков",
        other: "бульонного кубика",
      },
    },
    egg: {
      en: { one: "egg", other: "eggs" },
      ru: { one: "яйцо", many: "яиц", other: "яйца" },
    },
    lemon: {
      en: { one: "lemon", other: "lemons" },
      ru: { one: "лимон", many: "лимонов", other: "лимона" },
    },
    noodles: {
      en: { one: "noodle", other: "noodles" },
      ru: { other: "лапша" },
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
    "chicken-thigh": {
      en: { one: "chicken thigh", other: "chicken thighs" },
      ru: {
        one: "куриное бедро",
        few: "куриных бедра",
        many: "куриных бёдер",
        other: "куриного бедра",
      },
    },
    potato: {
      en: { one: "potato", other: "potatoes" },
      ru: { one: "картошка", many: "картошек", other: "картошки" },
    },
    onion: {
      en: { one: "onion", other: "onions" },
      ru: { one: "луковица", many: "луковиц", other: "луковицы" },
    },
    paprika: {
      en: { other: "paprika" },
      ru: { other: "паприка" },
    },
    parmesan: {
      en: { other: "parmesan" },
      ru: { other: "пармезан" },
    },
    rice: {
      en: { other: "rice" },
      ru: { other: "рис" },
    },
    buckwheat: {
      en: { other: "buckwheat" },
      ru: { other: "гречка" },
    },
    salt: {
      en: { other: "salt" },
      ru: { other: "соль" },
    },
    spaghetti: {
      en: { other: "spaghetti" },
      ru: { other: "спагетти" },
    },
    "sunflower-oil": {
      en: { other: "sunflower oil" },
      ru: { other: "подсолнечное масло" },
    },
  },
} as const satisfies Locales;

export type LocalesTables = Locales<typeof LOCALES_TABLE>;

export type LocalesTableKey = keyof LocalesTables;

export type LocalesTable<T extends LocalesTableKey> = keyof LocalesTables[T];

export const locales: LocalesTables = LOCALES_TABLE;
