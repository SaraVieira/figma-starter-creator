figma.showUI(__html__, {
  width: 300,
  height: 320,
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes: SceneNode[] = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 100 + msg.spacingX * i;
      if (msg.spacingY) {
        rect.y = i + msg.spacingY * i;
      }
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
