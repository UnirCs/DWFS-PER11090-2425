import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/global.css";
import CinemaUnir from "@/views/UnirCinema.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CinemaUnir />
  </StrictMode>
);
