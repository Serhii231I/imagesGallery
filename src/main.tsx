import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import Modal from "react-modal";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

Modal.setAppElement(rootElement as unknown as HTMLElement);
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
