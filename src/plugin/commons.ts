export const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

export const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/ui/ui.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;

// src/styles/index.css
export const styles = `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  color: var(--figma-color-text);
}

section {
  @apply flex flex-col gap-4 justify-center h-full px-4;
}

footer {
  @apply flex gap-4 justify-center;
}

header {
  @apply flex justify-center font-semibold text-sm items-center;
}

label {
  color: var(--figma-color-text-secondary);
  @apply text-xs;
}

input {
  @apply rounded-sm w-full box-border h-7 cursor-default min-w-0 bg-clip-padding p-0 px-2 bg-transparent text-xs;
  color: var(--figma-color-text, #333333);
  fill: var(--figma-color-icon, #333333);
  border: 1px solid transparent;
}

.input-wrapper {
  @apply grid grid-cols-2 items-center gap-2;
}

button {
  line-height: 32px;
  @apply text-xs h-8 rounded-md bg-transparent flex items-center justify-center shrink-0 py-0 px-3 select-none bg-clip-padding box-border font-medium max-w-[200px] cursor-default;
}

.primary {
  color: var(--figma-color-text);
  background-color: var(--figma-color-bg-brand);
}

.primary:hover {
  background-color: var(--figma-color-bg-brand-hover);
}

.destructive {
  background-color: var(--figma-color-bg-danger);
}

.destructive:hover {
  background-color: var(--figma-color-bg-danger-hover);
}
`;

export const manifest = (name: string) => `{
  "name": "${name}",
  "api": "1.0.0",
  "editorType": ["figma"],
  "main": "dist/src/code/code.js",
  "ui": "dist/src/ui/ui.html"
}
`;

export const gitIgnore = `node_modules/
dist/
.DS_Store
`;

export const TSConfig = (framework: string) => {
  if (framework === "vue") {
    return `{
  "compilerOptions": {
    "lib": ["es5", "es6", "dom"],
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": false,
    "module": "commonjs",
    "target": "es6",
    "moduleResolution": "node",
    "typeRoots": ["./node_modules/@types", "./node_modules/@figma"]
  },
  "include": ["src/**/*.ts", "src/**/*.vue"]
}`;
  }

  if (framework === "react") {
    return `{
  "compilerOptions": {
    "noImplicitAny": false,
    "composite": true,
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`;
  }

  if (framework === "vanilla") {
    return `{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6", "dom"],
    "strict": true,
    "typeRoots": ["./node_modules/@types", "./node_modules/@figma"],
    "noImplicitAny": false,
  }
}`;
  }

  return "";
};
