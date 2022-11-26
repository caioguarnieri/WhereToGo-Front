import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

import Providers from "./providers";
import { BrowserRouter } from "react-router-dom";

import "./styles/reset.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Providers>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Providers>
);
