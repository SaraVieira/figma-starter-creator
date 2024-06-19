import { defineConfig } from "vite";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/ui.html"),
      },
    },
  },
});
