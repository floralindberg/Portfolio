import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@flaticon/flaticon-uicons/css/all/all.straight.css";
import "./index.css";
import App from "./App.tsx";
import Projects from "./projects/page.tsx";
import Contact from "./contact/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
