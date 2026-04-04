// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Be Vietnam Pro",
      cssVariable: "--font-be-vietnam-pro",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Gabarito",
      cssVariable: "--font-gabarito",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
