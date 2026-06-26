import { describe, expect, test } from "bun:test";
import { getIngredientText } from "#lib/ingredients";

describe("formatIngredientText", () => {
  test("formats correctly with a unit", () => {
    const result = getIngredientText(
      { id: "water", amount: 5, unit: "litre" },
      "en",
    );

    expect(result.prefix).toBe("Water — ");
    expect(result.amount).toBe("5 litres");
    expect(result.suffix).toBe("");
  });

  test("formats correctly without a unit in Russian", () => {
    const result = getIngredientText({ id: "lemon", amount: 3 }, "ru");

    expect(result.prefix).toBe("");
    expect(result.amount).toBe("3");
    expect(result.suffix).toBe(" лимона");
  });

  test("formats correctly without a unit with range", () => {
    const result = getIngredientText(
      { id: "egg", amount: { from: 2, to: 4 } },
      "en",
    );

    expect(result.prefix).toBe("");
    expect(result.amount).toBe("2 - 4");
    expect(result.suffix).toBe(" eggs");
  });
});
