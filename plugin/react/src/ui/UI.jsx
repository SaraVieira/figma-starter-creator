import { useState } from "react";

export const UI = () => {
  const [count, setCount] = useState(5);
  const [spacingX, setSpacingX] = useState(20);
  const [spacingY, setSpacingY] = useState(0);

  const create = () => {
    window.parent.postMessage(
      {
        pluginMessage: {
          type: "create-rectangles",
          count,
          spacingX,
          spacingY,
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
      <div class="input flex">
        <div class="label">How far apart in X?</div>
        <input
          type="number"
          value={spacingX}
          onChange={(e) => setSpacingX(e.target.value)}
          class="input__field"
        />
      </div>
      <div class="input flex">
        <div class="label">How far apart in Y?</div>
        <input
          type="number"
          value={spacingY}
          onChange={(e) => setSpacingY(e.target.value)}
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
