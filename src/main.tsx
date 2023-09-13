import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "./Global.ts";
import { GlobalProvider } from "./providers/global/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
