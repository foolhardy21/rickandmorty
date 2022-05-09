import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider, PageProvider } from "contexts";
import { EpisodesProvider } from "contexts/episodes.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <PageProvider>
      <EpisodesProvider>
        <App />
      </EpisodesProvider>
    </PageProvider>
  </ModalProvider>
);