import React, { Component } from "react";
import "../css/card.css";
import car from "./car.jpg";
import Nav from "./Nav_bar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export class Cards extends Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <Nav />
        <div className="box">
          <Link to="/card/NEUVE">
            <div className="card">
              <div className="face front">
                <img src={car} alt="" />
                <h3>Véhicules neufs</h3>
              </div>
              <div className="face back">
                <h3>Véhicules neufs</h3>
                <p>So Fresh So Clean Yeah !!!</p>
                <div className="link">
                  <p>Détails</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/card/OCCASION">
            <div className="card">
              <div className="face front">
                <img src={car} alt="" />
                <h3>Occasion</h3>
              </div>
              <div className="face back">
                <h3>Occasion</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                  harum molestiae iste,{" "}
                </p>
                <div className="link"></div>
              </div>
            </div>
          </Link>

          <Link to="/card/ENGIN">
            <div className="card">
              <div className="face front">
                <img src={car} alt="" />
                <h3>Engin</h3>
              </div>
              <div className="face back">
                <h3>Particulier</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                  harum molestiae iste,{" "}
                </p>
                <div className="link"></div>
              </div>
            </div>
          </Link>

          <Link to="/card/REMORQUE">
            <div className="card">
              <div className="face front">
                <img src={car} alt="" />
                <h3>Remorque</h3>
              </div>
              <div className="face back">
                <h3>Particulier</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                  harum molestiae iste,{" "}
                </p>
                <div className="link"></div>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    );
  }
}

export default Cards;
