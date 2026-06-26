import { describe, expect, test } from "bun:test";
import { localize } from "#lib/localize";

describe("localizeUnit", () => {
  describe("English", () => {
    test("g stays g regardless of amount", () => {
      expect(localize("units", "g", 1, "en")).toBe("g");
      expect(localize("units", "g", 400, "en")).toBe("g");
      expect(localize("units", "g", 0.5, "en")).toBe("g");
    });

    test("kg stays kg regardless of amount", () => {
      expect(localize("units", "kg", 1, "en")).toBe("kg");
      expect(localize("units", "kg", 2, "en")).toBe("kg");
    });

    test("litre singular for 1, plural for others", () => {
      expect(localize("units", "litre", 1, "en")).toBe("litre");
      expect(localize("units", "litre", 2, "en")).toBe("litres");
      expect(localize("units", "litre", 0.5, "en")).toBe("litres");
      expect(localize("units", "litre", 0, "en")).toBe("litres");
    });

    test("cup singular for 1, plural for others", () => {
      expect(localize("units", "cup", 1, "en")).toBe("cup");
      expect(localize("units", "cup", 1.5, "en")).toBe("cups");
      expect(localize("units", "cup", 3, "en")).toBe("cups");
    });

    test("teaspoon singular for 1, plural for others", () => {
      expect(localize("units", "teaspoon", 1, "en")).toBe("teaspoon");
      expect(localize("units", "teaspoon", 2, "en")).toBe("teaspoons");
    });
  });

  describe("Russian", () => {
    test("g uses Russian label", () => {
      expect(localize("units", "g", 1, "ru")).toBe("г");
      expect(localize("units", "g", 400, "ru")).toBe("г");
    });

    test("kg uses Russian label", () => {
      expect(localize("units", "kg", 1, "ru")).toBe("кг");
      expect(localize("units", "kg", 3, "ru")).toBe("кг");
    });

    test("litre: one → литр, few → литра, many → литров, other → литра", () => {
      expect(localize("units", "litre", 1, "ru")).toBe("литр");
      expect(localize("units", "litre", 2, "ru")).toBe("литра");
      expect(localize("units", "litre", 5, "ru")).toBe("литров");
      expect(localize("units", "litre", 0.5, "ru")).toBe("литра");
    });

    test("cup: one → стакан, few → стакана, many → стаканов, other → стакана", () => {
      expect(localize("units", "cup", 1, "ru")).toBe("стакан");
      expect(localize("units", "cup", 3, "ru")).toBe("стакана");
      expect(localize("units", "cup", 10, "ru")).toBe("стаканов");
      expect(localize("units", "cup", 0.5, "ru")).toBe("стакана");
    });

    test("teaspoon: one → чайная ложка, few → чайные ложки, many → чайных ложек, other → чайной ложки", () => {
      expect(localize("units", "teaspoon", 1, "ru")).toBe("чайная ложка");
      expect(localize("units", "teaspoon", 2, "ru")).toBe("чайные ложки");
      expect(localize("units", "teaspoon", 10, "ru")).toBe("чайных ложек");
      expect(localize("units", "teaspoon", 0.5, "ru")).toBe("чайной ложки");
    });
  });

  describe("localizeItem", () => {
    describe("English", () => {
      test("egg singular for 1, plural for others", () => {
        expect(localize("items", "egg", 1, "en")).toBe("egg");
        expect(localize("items", "egg", 2, "en")).toBe("eggs");
        expect(localize("items", "egg", 0.5, "en")).toBe("eggs");
      });

      test("lemon singular for 1, plural for others", () => {
        expect(localize("items", "lemon", 1, "en")).toBe("lemon");
        expect(localize("items", "lemon", 3, "en")).toBe("lemons");
      });

      test("potato singular for 1, irregular plural for others", () => {
        expect(localize("items", "potato", 1, "en")).toBe("potato");
        expect(localize("items", "potato", 4, "en")).toBe("potatoes");
      });

      test("uncountable items never pluralize", () => {
        expect(localize("items", "sugar", 1, "en")).toBe("sugar");
        expect(localize("items", "sugar", 0.5, "en")).toBe("sugar");
        expect(localize("items", "water", 5, "en")).toBe("water");
        expect(localize("items", "rice", 1.5, "en")).toBe("rice");
        expect(localize("items", "salt", 1, "en")).toBe("salt");
        expect(localize("items", "smoked-pork-ribs", 1, "en")).toBe(
          "smoked pork ribs",
        );
        expect(localize("items", "smoked-pork-ribs", 2, "en")).toBe(
          "smoked pork ribs",
        );
      });

      test("pea is countable", () => {
        expect(localize("items", "pea", 1, "en")).toBe("pea");
        expect(localize("items", "pea", 400, "en")).toBe("peas");
      });

      test("carrot singular for 1, plural for others", () => {
        expect(localize("items", "carrot", 1, "en")).toBe("carrot");
        expect(localize("items", "carrot", 2, "en")).toBe("carrots");
      });

      test("onion singular for 1, plural for others", () => {
        expect(localize("items", "onion", 1, "en")).toBe("onion");
        expect(localize("items", "onion", 2, "en")).toBe("onions");
      });
    });

    describe("Russian", () => {
      test("egg: one → яйцо, few → яйца, many → яиц, other → яйца", () => {
        expect(localize("items", "egg", 1, "ru")).toBe("яйцо");
        expect(localize("items", "egg", 2, "ru")).toBe("яйца");
        expect(localize("items", "egg", 5, "ru")).toBe("яиц");
        expect(localize("items", "egg", 0.5, "ru")).toBe("яйца");
      });

      test("lemon: one → лимон, few → лимона, many → лимонов", () => {
        expect(localize("items", "lemon", 1, "ru")).toBe("лимон");
        expect(localize("items", "lemon", 3, "ru")).toBe("лимона");
        expect(localize("items", "lemon", 10, "ru")).toBe("лимонов");
      });

      test("uncountable items return base label", () => {
        expect(localize("items", "sugar", 1, "ru")).toBe("сахар");
        expect(localize("items", "water", 5, "ru")).toBe("вода");
        expect(localize("items", "rice", 1.5, "ru")).toBe("рис");
        expect(localize("items", "salt", 1, "ru")).toBe("соль");
        expect(localize("items", "smoked-pork-ribs", 1, "ru")).toBe(
          "копчёные свиные рёбрышки",
        );
      });

      test("pea is uncountable in Russian", () => {
        expect(localize("items", "pea", 1, "ru")).toBe("горох");
        expect(localize("items", "pea", 400, "ru")).toBe("горох");
      });

      test("carrot: one → морковка, few → морковки, many → морковок", () => {
        expect(localize("items", "carrot", 1, "ru")).toBe("морковка");
        expect(localize("items", "carrot", 2, "ru")).toBe("морковки");
        expect(localize("items", "carrot", 5, "ru")).toBe("морковок");
      });

      test("potato: one → картошка, few → картошки, many → картошек", () => {
        expect(localize("items", "potato", 1, "ru")).toBe("картошка");
        expect(localize("items", "potato", 4, "ru")).toBe("картошки");
        expect(localize("items", "potato", 10, "ru")).toBe("картошек");
      });

      test("onion: one → луковица, few → луковицы, many → луковиц", () => {
        expect(localize("items", "onion", 1, "ru")).toBe("луковица");
        expect(localize("items", "onion", 2, "ru")).toBe("луковицы");
        expect(localize("items", "onion", 5, "ru")).toBe("луковиц");
      });
    });

    describe("string amounts", () => {
      test("parses string number correctly", () => {
        expect(localize("items", "egg", "1", "en")).toBe("egg");
        expect(localize("items", "egg", "3", "en")).toBe("eggs");
      });
    });
  });

  describe("string amounts", () => {
    test("parses string number correctly", () => {
      expect(localize("units", "cup", "1", "en")).toBe("cup");
      expect(localize("units", "cup", "3", "en")).toBe("cups");
    });
  });
});
