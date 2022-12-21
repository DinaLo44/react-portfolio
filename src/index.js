import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//Added HashRouter to be able to deploy in GitHub pages
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
