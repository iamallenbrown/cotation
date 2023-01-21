import React from "react";
import Box from "./box";
import Cards from "./cards";
import Calculator from "./Formulaire";
import Home from "./Home";
import About from "./About";
import Etat from "./Etat";
import Clients from "./Clients";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimeRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/box" exact element={<Box />} />
        <Route path="/Clients" exact element={<Clients />} />
        <Route path="/cards" exact element={<Cards />} />
        <Route path="/Calculator" exact element={<Calculator />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/card/:etat" exact element={<Etat />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimeRoutes;
