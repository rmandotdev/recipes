import type { Lang, OtherLang } from "#i18n/lang";
import type { LocalesTable } from "#i18n/locales";
import { capitalize } from "./capitalize";
import { localize } from "./localize";

interface AmountRange {
  from: number;
  to: number;
}

type Amount = number | AmountRange;

export interface Ingredient {
  id: LocalesTable<"items">;
  amount: Amount;
  unit?: LocalesTable<"units">;
}

export function getItemAmount(amount: Amount): number {
  return typeof amount === "number" ? amount : amount.to;
}

export function getAmount(item: Ingredient, lang: Lang | OtherLang): string {
  const amount = item.amount;
  const unit = item.unit;
  const itemAmount =
    typeof amount === "number" ? `${amount}` : `${amount.from} - ${amount.to}`;
  if (!unit) return itemAmount;

  const localizedUnit = localize("units", unit, getItemAmount(amount), lang);
  return `${itemAmount} ${localizedUnit}`;
}

type IngredientText =
  | { prefix: ""; amount: string; suffix: ` ${string}` }
  | { prefix: `${string} — `; amount: string; suffix: "" };

export function getIngredientText(
  item: Ingredient,
  lang: Lang | OtherLang,
): IngredientText {
  const maxAmount = getItemAmount(item.amount);
  const localizedItem = localize("items", item.id, maxAmount, lang);
  const amount = getAmount(item, lang);

  if (!item.unit) {
    return { prefix: "", amount, suffix: ` ${localizedItem}` };
  }

  const prefix = `${capitalize(localizedItem)} — ` as const;
  return { prefix, amount, suffix: "" };
}
