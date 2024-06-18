import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
    target: "esnext",
    cssCodeSplit: false,
    brotliSize: false,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/ui/ui.html"),
      },
    },
  },
});
