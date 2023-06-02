import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./style.css";

let root = createRoot(document.getElementById("root"));
root.render(<App />);
