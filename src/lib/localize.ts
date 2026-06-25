export type Unit = "g" | "kg" | "litre" | "cup" | "teaspoon";

const unitLabels: Record<string, Record<string, string>> = {
  g: { en: "g", ru: "г" },
  kg: { en: "kg", ru: "кг" },
  litre: { en: "litre", ru: "литр" },
  cup: { en: "cup", ru: "стакан" },
  teaspoon: { en: "teaspoon", ru: "чайная ложка" },
};

const ruPlural: Record<string, Record<string, string>> = {
  litre: { one: "литр", few: "литра", many: "литров", other: "литра" },
  cup: { one: "стакан", few: "стакана", many: "стаканов", other: "стакана" },
  teaspoon: {
    one: "чайная ложка",
    few: "чайные ложки",
    many: "чайных ложек",
    other: "чайной ложки",
  },
};

export function localizeUnit(
  unit: Unit,
  amount: number | string,
  lang: string,
): string {
  const num = typeof amount === "string" ? parseFloat(amount) || 0 : amount;
  const pr = new Intl.PluralRules(lang);
  const form = pr.select(num);

  if (lang === "en") {
    const label = unitLabels[unit]?.en ?? unit;
    if (unit === "g" || unit === "kg") return label;
    return form === "one" ? label : `${label}s`;
  }

  if (lang === "ru") {
    if (unit === "g" || unit === "kg") return unitLabels[unit]?.ru ?? unit;
    const forms = ruPlural[unit];
    if (!forms) return unit;
    return forms[form] ?? unit;
  }

  return unitLabels[unit]?.[lang] ?? unit;
}
