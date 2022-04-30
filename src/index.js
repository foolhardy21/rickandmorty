import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./contexts/modal.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);