import { describe, expect, test } from "bun:test";
import { localizeUnit } from "#lib/localize";

describe("localizeUnit", () => {
  describe("English", () => {
    test("g stays g regardless of amount", () => {
      expect(localizeUnit("g", 1, "en")).toBe("g");
      expect(localizeUnit("g", 400, "en")).toBe("g");
      expect(localizeUnit("g", 0.5, "en")).toBe("g");
    });

    test("kg stays kg regardless of amount", () => {
      expect(localizeUnit("kg", 1, "en")).toBe("kg");
      expect(localizeUnit("kg", 2, "en")).toBe("kg");
    });

    test("litre singular for 1, plural for others", () => {
      expect(localizeUnit("litre", 1, "en")).toBe("litre");
      expect(localizeUnit("litre", 2, "en")).toBe("litres");
      expect(localizeUnit("litre", 0.5, "en")).toBe("litres");
      expect(localizeUnit("litre", 0, "en")).toBe("litres");
    });

    test("cup singular for 1, plural for others", () => {
      expect(localizeUnit("cup", 1, "en")).toBe("cup");
      expect(localizeUnit("cup", 1.5, "en")).toBe("cups");
      expect(localizeUnit("cup", 3, "en")).toBe("cups");
    });

    test("teaspoon singular for 1, plural for others", () => {
      expect(localizeUnit("teaspoon", 1, "en")).toBe("teaspoon");
      expect(localizeUnit("teaspoon", 2, "en")).toBe("teaspoons");
    });
  });

  describe("Russian", () => {
    test("g uses Russian label", () => {
      expect(localizeUnit("g", 1, "ru")).toBe("г");
      expect(localizeUnit("g", 400, "ru")).toBe("г");
    });

    test("kg uses Russian label", () => {
      expect(localizeUnit("kg", 1, "ru")).toBe("кг");
      expect(localizeUnit("kg", 3, "ru")).toBe("кг");
    });

    test("litre: one → литр, few → литра, many → литров, other → литра", () => {
      expect(localizeUnit("litre", 1, "ru")).toBe("литр");
      expect(localizeUnit("litre", 2, "ru")).toBe("литра");
      expect(localizeUnit("litre", 5, "ru")).toBe("литров");
      expect(localizeUnit("litre", 0.5, "ru")).toBe("литра");
    });

    test("cup: one → стакан, few → стакана, many → стаканов, other → стакана", () => {
      expect(localizeUnit("cup", 1, "ru")).toBe("стакан");
      expect(localizeUnit("cup", 3, "ru")).toBe("стакана");
      expect(localizeUnit("cup", 10, "ru")).toBe("стаканов");
      expect(localizeUnit("cup", 0.5, "ru")).toBe("стакана");
    });

    test("teaspoon: one → чайная ложка, few → чайные ложки, many → чайных ложек, other → чайной ложки", () => {
      expect(localizeUnit("teaspoon", 1, "ru")).toBe("чайная ложка");
      expect(localizeUnit("teaspoon", 2, "ru")).toBe("чайные ложки");
      expect(localizeUnit("teaspoon", 10, "ru")).toBe("чайных ложек");
      expect(localizeUnit("teaspoon", 0.5, "ru")).toBe("чайной ложки");
    });
  });

  describe("string amounts", () => {
    test("parses string number correctly", () => {
      expect(localizeUnit("cup", "1", "en")).toBe("cup");
      expect(localizeUnit("cup", "3", "en")).toBe("cups");
    });
  });
});
