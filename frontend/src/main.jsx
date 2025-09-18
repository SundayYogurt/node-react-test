import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./app.css";
import Hi from "./Hi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hi />
    <App />
  </StrictMode>
);
