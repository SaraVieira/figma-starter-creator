export const viteUIConfigVue = `import { defineConfig } from "vite";
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
`;

export const viteUIConfigVanilla = `import { defineConfig } from "vite";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/ui/ui.html"),
      },
    },
  },
});
`;

export const ViteUIConfigReact = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/ui/ui.html"),
      },
    },
  },
});
`;

export const viteCode = `
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/code/code.ts"),
      },
      output: {
        entryFileNames: "code.js",
      },
    },
    outDir: "./dist/src/code",
  },
});
`;
