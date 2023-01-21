import React from "react";
import logo from "../image/FP_Gr_Tr.png";
import "../css/Nav_bar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav_bar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="navbar-nav">
            <Link to="/">ACCUEIL</Link>
            <Link to="/box">BOX</Link>
            <Link to="/Clients">CLIENTS</Link>
            <Link to="/cards">CARTES VOITURES</Link>
            <Link to="/Calculator">FACTURATION</Link>
            <a href="http://smmc-company.com/">ABOUT</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav_bar;
