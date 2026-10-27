import { defineConfig } from "astro/config";

/** Site estático: o build emite HTML, CSS e imagens. Sem adapter e sem servidor. */
export default defineConfig({
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
