import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://woot.club",
  integrations: [tailwind(), sitemap(), critters(), compress()],
});
