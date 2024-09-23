import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://classy-pothos-1028a3.netlify.app/",
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
});
