import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://recipes.rman.dev",

  integrations: [
    starlight({
      title: { en: "Recipes", ru: "Рецепты" },

      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        ru: { label: "Русский", lang: "ru" },
      },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/rmandotdev/recipes",
        },
      ],

      sidebar: [
        {
          label: "Recipes",
          translations: { ru: "Рецепты" },
          autogenerate: { directory: "recipes" },
        },
      ],
    }),
  ],
});
