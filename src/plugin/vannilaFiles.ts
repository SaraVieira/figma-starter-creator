// src/ui/ui.ts
export const UIVanilla = `import "figma-plugin-ds/dist/figma-plugin-ds.css";
import "../styles/index.css";

document.getElementById("create")!.onclick = () => {
  const textbox = document.getElementById("count") as HTMLInputElement;
  const count = parseInt(textbox?.value, 10);
  parent.postMessage(
    { pluginMessage: { type: "create-rectangles", count } },
    "*"
  );
};

document.getElementById("cancel")!.onclick = () => {
  parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
`;
export const HTMLVanilla = `<link
  href="https://cdn.jsdelivr.net/npm/figma-plugin-ds@1.0.1/dist/figma-plugin-ds.min.css"
  rel="stylesheet"
/>
<section class="flex flex-col gap-4 justify-center h-full px-4">
  <div class="onboarding-tip flex justify-center">
    <div class="icon icon--distribute-vertical-spacing"></div>
    <div class="onboarding-tip__msg">Rectangle Maker</div>
  </div>
  <div class="input flex">
    <div class="label">How many rectangles?</div>
    <input type="number" id="count" class="input__field" placeholder="5" />
  </div>
  <div class="flex gap-4 justify-center">
    <button id="create" class="button button--primary">Create</button>
    <button id="cancel" class="button button--primary-destructive">
      Cancel
    </button>
  </div>
</section>
<script type="module" src="./ui.ts"></script>
`;
