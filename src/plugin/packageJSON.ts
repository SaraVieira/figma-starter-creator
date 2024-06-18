export const packageJSON = ({
  name,
  framework,
}: {
  name: string;
  framework: string;
}) => {
  let deps = "";
  switch (framework) {
    case "react":
      deps = `"react": "^18.3.1",
"react-dom": "^18.3.1",`;
      break;
    case "vue":
      deps = `"vue": "^3.4.29",`;
      break;
    default:
      break;
  }

  return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "src/code.js",
  "scripts": {
    "dev": "run-p start:ui start:code",
    "start:ui": "vite build --watch --config vite-ui.config.js",
    "start:code": "vite build --watch --config vite-code.config.js",
    "build": "vite build --config vite-ui.config.js && vite build --config vite-code.config.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@figma/plugin-typings": "^1.96.0",
    "autoprefixer": "^10.4.19",
    "figma-plugin-ds": "^1.0.1",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    ${deps}
    "typescript": "^5.4.5"
  },
  "devDependencies": {
    ${
      framework === "react"
        ? `"@vitejs/plugin-react": "^4.3.1",`
        : `"@vitejs/plugin-vue": "^5.0.5",`
    }
    "npm-run-all": "^4.1.5",
    "vite": "^5.3.1",
    "vite-plugin-singlefile": "^2.0.1"
  }
}
`;
};
