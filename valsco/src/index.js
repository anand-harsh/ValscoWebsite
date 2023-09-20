import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";
import { AppProvider } from "../src/components/Blogs/context/BlogContext";

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(
    <AppProvider>
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    </AppProvider>,
    root
  );
} else {
  render(
    <AppProvider>
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    </AppProvider>,
    root
  );
}

if (module.hot) {
  module.hot.accept();
}
reportWebVitals();
