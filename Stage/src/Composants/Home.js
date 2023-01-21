import React from "react";
import "../css/Home.css";
import logo from "../image/FP_Gr_Tr.png";
import Nav from "./Nav_bar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <header className="headerHome">
        <Nav />
        <div class="banner">
          <div class="container">
            <p>
              <span> COTATION </span>
            </p>
            <p>
              <span>Bienvenue sur le site de cotation de la SMMC</span>
            </p>
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Home;
