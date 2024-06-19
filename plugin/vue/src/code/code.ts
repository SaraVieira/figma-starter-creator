figma.showUI(__html__, {
  width: 300,
  height: 320,
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "array-modifier") {
    const nodes = [];

    const selection = figma.currentPage.selection;
    nodes.push(...figma.currentPage.selection);
    selection.forEach((currentSelection) => {
      for (let i = 0; i < msg.count; i++) {
        const node = currentSelection.clone();
        if (msg.spacingX) {
          node.x += (node.width + msg.spacingX) * (i + 1);
        }
        if (msg.spacingY) {
          node.y += (node.height + msg.spacingY) * (i + 1);
        }
        nodes.push(node);
        figma.currentPage.appendChild(node);
      }
    });

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
