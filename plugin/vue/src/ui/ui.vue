<script lang="ts" setup>
import { ref } from "vue";
const count = ref(5);
const spacingX = ref(20);
const spacingY = ref(0);

const create = () => {
  window.parent.postMessage(
    {
      pluginMessage: {
        type: "array-modifier",
        count: count.value,
        spacingX: spacingX.value,
        spacingY: spacingY.value,
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
    <div class="input flex">
      <div class="label">How far apart in X?</div>
      <input type="number" v-model="spacingX" class="input__field" />
    </div>
    <div class="input flex">
      <div class="label">How far apart in Y?</div>
      <input type="number" v-model="spacingY" class="input__field" />
    </div>
    <div class="flex gap-4 justify-center">
      <button class="button button--primary" @click="create()">Create</button>
      <button class="button button--primary-destructive" @click="cancel()">
        Cancel
      </button>
    </div>
  </section>
</template>
