// src/ui/main.js
export const mainFile = `import { createApp } from "vue";
import ui from "./ui.vue";
import "../styles/index.css";
import "figma-plugin-ds/dist/figma-plugin-ds.css";

createApp(ui).mount("#ui");
`;
// src/ui/ui.html
export const HTML = `<div id="ui"></div>
<script type="module" src="/src/ui/main.js"></script>
`;

// src/ui/ui.vue
export const UIVue = `<script lang="ts" setup>
import { ref } from "vue";
const count = ref(5);

const create = () => {
  window.parent.postMessage(
    {
      pluginMessage: {
        type: "create-rectangles",
        count: count.value,
      },
    },
    "*"
  );
};
const cancel = () => {
  window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
</script>

<template>
  <section class="flex flex-col gap-4 justify-center h-full px-4">
    <div class="onboarding-tip flex justify-center">
      <div class="icon icon--distribute-vertical-spacing"></div>
      <div class="onboarding-tip__msg">The Blender Array Modifier</div>
    </div>
    <div class="input flex">
      <div class="label">How many rectangles?</div>
      <input type="number" v-model="count" class="input__field" />
    </div>
    <div class="flex gap-4 justify-center">
      <button class="button button--primary" @click="create()">Create</button>
      <button class="button button--primary-destructive" @click="cancel()">
        Cancel
      </button>
    </div>
  </section>
</template>
`;
