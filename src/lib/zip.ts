import {
  TSConfig,
  gitIgnore,
  manifest,
  postcssConfig,
  styles,
  tailwindConfig,
} from "../plugin/commons";
import {
  ViteUIConfigReact,
  viteCode,
  viteUIConfigVue,
} from "../plugin/viteConfigs";
import { packageJSON } from "../plugin/packageJSON";
import { commonBE } from "../plugin/commonBE";
import { HTML as HTMLVue, UIVue, mainFileVue } from "../plugin/vueFiles";
import JSZip from "jszip";
import { HTMLReact, UIReact, mainFileReact } from "@/plugin/reactFiles";

export const createZip = ({
  framework,
  name,
}: {
  framework: string;
  name: string;
}) => {
  // common
  var zip = new JSZip();
  zip.file("tsconfig.json", TSConfig(framework));
  zip.file(
    "package.json",
    packageJSON({
      name: name,
      framework: framework,
    })
  );
  zip.file("manifest.json", manifest(name));
  zip.file(".gitignore", gitIgnore);
  zip.file("src/code/code.ts", commonBE);
  zip.file("src/styles/index.css", styles);
  zip.file("postcss.config.js", postcssConfig);
  zip.file("tailwind.config.js", tailwindConfig);
  zip.file("vite-code.config.js", viteCode);

  if (framework === "vue") {
    zip.file("vite-ui.config.js", viteUIConfigVue);
    zip.file("src/ui/ui.html", HTMLVue);
    zip.file("src/ui/ui.vue", UIVue);
    zip.file("src/ui/main.js", mainFileVue);
  }

  if (framework === "react") {
    zip.file("vite-ui.config.js", ViteUIConfigReact);
    zip.file("src/ui/ui.html", HTMLReact);
    zip.file("src/ui/UI.jsx", UIReact);
    zip.file("src/ui/main.jsx", mainFileReact);
  }

  return zip;
};
