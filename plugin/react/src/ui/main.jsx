import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import "figma-plugin-ds/dist/figma-plugin-ds.css";
import { UI } from "./UI";

console.log("HERE");

ReactDOM.createRoot(document.getElementById("ui")).render(<UI />);
