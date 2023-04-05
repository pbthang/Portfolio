import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: "https://pbthang.netlify.app",
  adapter: netlify(),
});
