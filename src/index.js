import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider, PageProvider } from "contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <PageProvider>
      <App />
    </PageProvider>
  </ModalProvider>
);