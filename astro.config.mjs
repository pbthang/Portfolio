import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({ customPages: ["https://pbthang.netlify.app"] }),
    robotsTxt(),
  ],
  site: "https://pbthang.netlify.app",
  output: "server",
  adapter: netlify(),
});
