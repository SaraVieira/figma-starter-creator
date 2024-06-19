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
  content: ["./src/ui.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
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

:root {
  --black3: rgba(0, 0, 0, 0.6);
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
  return framework === "vue"
    ? `{
  "compilerOptions": {
    "lib": ["es5", "es6", "dom"],
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "moduleResolution": "node",
    "typeRoots": ["./node_modules/@types", "./node_modules/@figma"]
  },
  "include": ["src/**/*.ts", "src/**/*.vue"]
}`
    : `{
  "compilerOptions": {
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
};
