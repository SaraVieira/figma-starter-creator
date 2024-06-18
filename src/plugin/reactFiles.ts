// src/ui/main.jsx
export const mainFile = `import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import "figma-plugin-ds/dist/figma-plugin-ds.css";
import { UI } from "./UI";

console.log("HERE");

ReactDOM.createRoot(document.getElementById("ui")).render(<UI />);
`;
// src/ui/ui.html
export const HTML = `
<div id="ui"></div>
<script type="module" src="main.jsx"></script>
`;

// src/ui/UI.jsx
export const UI = `import { useState } from "react";

export const UI = () => {
  const [count, setCount] = useState(5);

  const create = () => {
    window.parent.postMessage(
      {
        pluginMessage: {
          type: "create-rectangles",
          count,
        },
      },
      "*"
    );
  };
  const cancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <section class="flex flex-col gap-4 justify-center h-full px-4">
      <div class="onboarding-tip flex justify-center">
        <div class="icon icon--distribute-vertical-spacing"></div>
        <div class="onboarding-tip__msg">The Blender Array Modifier</div>
      </div>
      <div class="input flex">
        <div class="label">How many rectangles?</div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          class="input__field"
        />
      </div>
      <div class="flex gap-4 justify-center">
        <button class="button button--primary" onClick={create}>
          Create
        </button>
        <button class="button button--primary-destructive" onClick={cancel}>
          Cancel
        </button>
      </div>
    </section>
  );
};
`;
