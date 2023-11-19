import "bootstrap/dist/css/bootstrap.min.css";

import "./services/init";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";

const container = document.getElementById("root");
const root = createRoot(container);

if (typeof window !== "undefined" && typeof window.global === "undefined") {
  window.global = window;
}

root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>,
);
