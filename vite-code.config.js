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
