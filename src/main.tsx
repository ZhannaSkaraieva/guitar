import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router";
import React from "react";
import ContextProvider from "./features/ContextProvider";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>,
  );
} else {
  throw new Error("Root element not found");
}
