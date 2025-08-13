import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Pokemon from "./pages/Pokemon.jsx";
import { PokemonProvider } from "./context/pokemonProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Pokemon />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  </StrictMode>
);
