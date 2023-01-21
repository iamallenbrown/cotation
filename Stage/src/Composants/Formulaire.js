import React, { Component, useState } from "react";
import "../css/Formulaire.css";
import ReactDOM from "react-dom";
import Nav from "./Nav_bar";
import { motion } from "framer-motion";
import Hidden from "./Hidden";
import Cards from "./cards";
import Neuve from "./Neuve";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "0",
      poid: "1",
      nbr: "",
      colis: "",
      PU_debarquement: 0,
      PU_cession: 0,
      PU_visite_douane: 0,
      PU_assistance_civio: 0,
      PU_march_sous_condit: 0,
      PU_droit_port: 0,
      PU_redevence: 0,
      PU_droit_region: 0,
      PU_redevence_march: 0,
      PU_droit_region_march: 0,
      Qt_debarquement: 0,
      Qt_cession: 0,
      Qt_visite_douane: 0,
      Qt_assistance_civio: 0,
      Qt_march_sous_condit: 0,
      Qt_droit_port: 0,
      Qt_redevence: 0,
      Qt_droit_region: 0,
      Qt_redevence_march: 0,
      Qt_droit_region_march: 0,
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  //etat  du vehicule
  handleChange1(e) {
    console.log(e.target.value);
    {
      this.setState(() => ({ type: e.target.value }));
    }
  }

  //Poids du véhicule
  handleChange(e) {
    console.log(e.target.value);

    this.setState(() => ({
      poid: e.target.value,
    }));
    //Condition debarquement par rapport au poids
    if (parseInt(e.target.value) <= 0 || e.target.value == "") {
      this.setState(() => ({ PU_debarquement: 0 }));
    } else if (parseInt(e.target.value) == 1) {
      this.setState(() => ({ PU_debarquement: 100 }));
    } else if (parseInt(e.target.value) == 2) {
      this.setState(() => ({ PU_debarquement: 165 }));
    } else if (parseInt(e.target.value) == 4) {
      this.setState(() => ({ PU_debarquement: 260 }));
    } else if (parseInt(e.target.value) == 6) {
      this.setState(() => ({ PU_debarquement: 320 }));
    } else if (parseInt(e.target.value) == 10) {
      this.setState(() => ({ PU_debarquement: 450 }));
    } else if (parseInt(e.target.value) == 11) {
      this.setState(() => ({ PU_debarquement: 500 }));
    }
    //Suite
    if (parseInt(e.target.value) <= 0 || e.target.value === "") {
      this.setState(() => ({ PU_cession: 0 }));
      this.setState(() => ({ PU_visite_douane: 0 }));
      this.setState(() => ({ PU_assistance_civio: 0 }));
      this.setState(() => ({ PU_march_sous_condit: 0 }));
      this.setState(() => ({ PU_droit_port: 0 }));
      this.setState(() => ({ PU_redevence: 0 }));
      this.setState(() => ({ PU_droit_region: 0 }));
      this.setState(() => ({ PU_redevence_march: 0 }));
      this.setState(() => ({ PU_droit_region_march: 0 }));
    } else if (parseInt(e.target.value) > 0) {
      this.setState(() => ({ PU_cession: 0.5 }));
      this.setState(() => ({ PU_visite_douane: 0 }));
      this.setState(() => ({ PU_assistance_civio: 0 }));
      this.setState(() => ({ PU_march_sous_condit: 0 }));
      this.setState(() => ({ PU_droit_port: 2.4 }));
      this.setState(() => ({ PU_redevence: 2.25 }));
      this.setState(() => ({ PU_droit_region: 4.5 }));
      this.setState(() => ({ PU_redevence_march: 0 }));
      this.setState(() => ({ PU_droit_region_march: 0 }));
    }

    this.setState(() => ({ Qt_droit_port: +e.target.value }));

    console.log("ty le izy : ", this.state.Qt_droit_port);
  }

  //Nombre de véhicule
  handleChange2(e) {
    console.log(e.target.value);
    this.setState(() => ({
      nbr: e.target.value,
    }));

    if (parseInt(e.target.value) <= 0 || e.target.value === "") {
      this.setState(() => ({ Qt_debarquement: 0 }));
      this.setState(() => ({ Qt_cession: 0 }));
      this.setState(() => ({ Qt_visite_douane: 0 }));
      this.setState(() => ({ Qt_assistance_civio: 0 }));
      this.setState(() => ({ Qt_march_sous_condit: 0 }));

      this.setState(() => ({ Qt_droit_port: 0 }));
      this.setState(() => ({ Qt_redevence: 0 }));
      this.setState(() => ({ Qt_droit_region: 0 }));
      this.setState(() => ({ Qt_redevence_march: 0 }));
      this.setState(() => ({ Qt_droit_region_march: 0 }));
    } else if (parseInt(e.target.value) > 0) {
      this.setState(() => ({ Qt_debarquement: e.target.value }));
      this.setState(() => ({ Qt_cession: 2 }));
      this.setState(() => ({ Qt_visite_douane: 0 }));
      this.setState(() => ({ Qt_assistance_civio: 0 }));
      this.setState(() => ({ Qt_march_sous_condit: 0 }));
      this.setState(() => ({ Qt_redevence: 1 }));
      this.setState(() => ({ Qt_droit_region: 1 }));
      this.setState(() => ({ Qt_redevence_march: 0 }));
      this.setState(() => ({ Qt_droit_region_march: 0 }));
    }
  }

  //Poids du colis
  handleChange3(e) {
    console.log(e.target.value);
    this.setState(() => ({
      colis: e.target.value,
    }));
  }

  render() {
    function neuve(props, prop, propss) {
      if (props != "")
        return <Hidden type={props} nombre={prop} poid={propss} />;
    }

    function TVA(props) {
      const taxe = (props * 20) / 100;
      return props + taxe;
    }

    function ValTVA(props) {
      const taxe = (props * 20) / 100;
      return taxe;
    }

    const choix = neuve(this.state.type, this.state.nbr, this.state.poid);
    const poid = parseInt(this.state.poid);
    const pu_debarquement = parseInt(this.state.PU_debarquement);
    const pu_cession = parseFloat(this.state.PU_cession);
    const pu_visite_douane = parseFloat(this.state.PU_visite_douane);
    const pu_assistance_civio = parseFloat(this.state.PU_assistance_civio);
    const pu_march_sous_condit = parseFloat(this.state.PU_march_sous_condit);
    const pu_droit_port = parseFloat(this.state.PU_droit_port);
    const pu_droit_region = parseFloat(this.state.PU_droit_region);
    const pu_redevence = parseFloat(this.state.PU_redevence);
    const pu_redevence_march = parseFloat(this.state.PU_redevence_march);
    const pu_droit_region_march = parseFloat(this.state.PU_droit_region_march);

    const qt_debarquement = parseInt(this.state.Qt_debarquement);
    const qt_cession = parseInt(this.state.Qt_cession);
    const qt_visite_douane = parseInt(this.state.Qt_visite_douane);
    const qt_assistance_civio = parseInt(this.state.Qt_assistance_civio);
    const qt_march_sous_condit = parseInt(this.state.Qt_march_sous_condit);
    const qt_droit_port = parseInt(this.state.Qt_droit_port);
    const qt_droit_region = parseInt(this.state.Qt_droit_region);
    const qt_redevence = parseInt(this.state.Qt_redevence);
    const qt_redevence_march = parseInt(this.state.Qt_redevence_march);
    const qt_droit_region_march = parseInt(this.state.Qt_droit_region_march);

    const MontantDebarquement = pu_debarquement * qt_debarquement;
    const MontantCession = pu_cession * qt_cession;
    const MontantVisiteDouane = pu_visite_douane * qt_visite_douane;
    const MontantAssistanceCivio = pu_assistance_civio * qt_assistance_civio;
    const MontantMarchSousCondit = pu_march_sous_condit * qt_march_sous_condit;
    const MontantDroitPort = pu_droit_port * this.state.Qt_droit_port;
    const MontantDroitRegion = pu_droit_region * qt_droit_region;
    const MontantRedevence = pu_redevence * qt_redevence;
    const MontantRedevenceMarch = pu_redevence_march * qt_redevence_march;
    const MontantDroitRegionMarch =
      pu_droit_region_march * qt_droit_region_march;

    const htva1 =
      MontantDebarquement +
      MontantCession +
      MontantVisiteDouane +
      MontantAssistanceCivio +
      MontantMarchSousCondit;
    const val_tva1 = ValTVA(htva1);
    const tva1 = TVA(htva1);

    const htva2 =
      MontantDroitPort +
      MontantDroitRegion +
      MontantRedevence +
      MontantRedevenceMarch +
      MontantDroitRegionMarch;
    const val_tva2 = ValTVA(htva2);
    const tva2 = TVA(htva2);

    const grandTotal = htva1 + htva2;

    return (
      <div>
        <Nav />
        <div align="center">
          <div className="formulaire">
            <div className="form1">
              <label>
                <select onChange={this.handleChange1}>
                  <option value="" disabled selected>
                    Etat du véhicule
                  </option>
                  <option value="Neuve"> Neuve</option>
                  <option value="Occasion">Occasion</option>
                  <option value="Utilitaire">Utilitaire</option>
                  <option value="Camion">Camion</option>
                  <option value="Engin">Engin</option>
                  <option value="Remorque">Remorque</option>
                </select>
              </label>

              <label>
                <select onChange={this.handleChange}>
                  <option value="0" disabled selected>
                    Poids du véhicule
                  </option>
                  <option value="1">Inferieur à 1 tonne</option>
                  <option value="2">entre 1 à 2 tonne(s)</option>
                  <option value="4">entre 2 à 4 tonnes</option>
                  <option value="6">entre 4 à 6 tonnes</option>
                  <option value="8">entre 6 à 10 tonnes</option>
                  <option value="10"> Supérieur à 10 tonnes</option>
                </select>
              </label>

              <label>
                <input
                  type="number"
                  value={this.state.nbr}
                  onChange={this.handleChange2}
                  placeholder="Nombre de véhicule"
                  min={0}
                  max={100}
                  required
                />
              </label>
            </div>

            {choix}
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="ToutLesTab">
          <div class="tab1">
            <table class="tableau" align="right" id="tab1">
              <tr>
                <th class="designation">Désignation prestation</th>{" "}
                <th>Unite</th> <th>PU</th> <th>EN</th> <th>QT</th> <th>MAJ</th>{" "}
                <th class="total">Montant</th>
              </tr>
              <tr>
                <td class="left">DEBARQUEMENT </td> <td>Nbre</td>{" "}
                <td>{pu_debarquement}</td> <td>EURO</td>{" "}
                <td>{qt_debarquement}</td> <td>MAJ %</td>{" "}
                <td>{MontantDebarquement}</td>
              </tr>
              <tr>
                <td class="left">CESSION IMPRIMEES(BON D' ENLEVEMENT)</td>{" "}
                <td>Nbre</td> <td>{pu_cession}</td> <td>EURO</td>{" "}
                <td>{qt_cession}</td> <td></td> <td>{MontantCession}</td>
              </tr>
              <tr>
                <td class="left">VISITE DE DOUANES</td> <td>Nbre</td>{" "}
                <td>{pu_visite_douane}</td> <td>EURO</td>{" "}
                <td>{qt_visite_douane}</td> <td></td>{" "}
                <td>{MontantVisiteDouane}</td>
              </tr>
              <tr>
                <td class="left">ASSISTANCE AU CIVIO</td> <td>Nbre</td>{" "}
                <td>{pu_assistance_civio}</td> <td>EURO</td>{" "}
                <td>{qt_assistance_civio}</td> <td></td>{" "}
                <td>{MontantAssistanceCivio}</td>
              </tr>
              <tr>
                <td class="left">DEBARQUEMENT MARCH SOUS AUTRES CONDIT</td>{" "}
                <td>Nbre</td> <td>{pu_march_sous_condit}</td> <td>EURO</td>{" "}
                <td>{qt_march_sous_condit}</td> <td></td>{" "}
                <td>{MontantMarchSousCondit}</td>
              </tr>
            </table>
            <br />
          </div>

          <div className="tab2">
            <table className="tableauTotal" align="right" id="tab2">
              <tr>
                <td>Montant HTVA :</td> <td>{htva1}</td>
              </tr>
              <tr>
                <td>Montant TVA :</td> <td>{val_tva1}</td>
              </tr>
              <tr>
                <td>Net à payer :</td> <td>{tva1}</td>
              </tr>
            </table>

            <br />
          </div>

          <div className="tab3">
            <table class="tableau" align="right" id="tab3">
              <tr>
                <th class="designation">Designation prestation</th>{" "}
                <th>Unite</th> <th>PU</th> <th>EN</th> <th>QT</th> <th>MAJ</th>{" "}
                <th class="total">Montant</th>
              </tr>
              <tr>
                <td class="left">DROIT DE PORT A L' IMPORTATION </td>{" "}
                <td>Nbre</td> <td>{pu_droit_port}</td> <td>EURO</td>{" "}
                <td>{this.state.Qt_droit_port}</td> <td></td>{" "}
                <td>{this.state.Qt_droit_port * this.state.PU_droit_port}</td>
              </tr>
              <tr>
                <td class="left">REDEVANCE COMMUNALE SUR VEHICULE</td>{" "}
                <td>Nbre</td> <td>{pu_redevence}</td> <td>EURO</td>{" "}
                <td>{qt_redevence}</td> <td></td> <td>{MontantRedevence}</td>
              </tr>
              <tr>
                <td>DROIT DE REGION SUR VEHICULE</td> <td>Nbre</td>{" "}
                <td>{pu_droit_region}</td> <td>EURO</td>{" "}
                <td>{qt_droit_region}</td> <td></td>{" "}
                <td>{MontantDroitRegion}</td>
              </tr>
              <tr>
                <td>REDEVANCE COMMUNALE SUR MARCHANDISES</td> <td>Nbre</td>{" "}
                <td>{pu_redevence_march}</td> <td>EURO</td>{" "}
                <td>{qt_redevence_march}</td> <td></td>{" "}
                <td>{MontantRedevenceMarch}</td>
              </tr>
              <tr>
                <td>DROIT DE REGION SUR MARCHANDISES</td> <td>Nbre</td>{" "}
                <td>{pu_droit_region_march}</td> <td>EURO</td>{" "}
                <td>{qt_droit_region_march}</td> <td></td>{" "}
                <td>{MontantDroitRegionMarch}</td>
              </tr>
            </table>
            <br />
            <br />
          </div>

          <div className="tab4">
            <table class="tableauTotal" align="right" id="tab4">
              <tr>
                <td>Montant HTVA :</td> <td>{htva2}</td>
              </tr>
              <tr>
                <td>Montant TVA :</td> <td>{val_tva2}</td>
              </tr>
              <tr>
                <td>Net à payer :</td> <td>{tva2}</td>
              </tr>
            </table>
          </div>

          <div className="tab5">
            <table class="tableauTotalTout" align="right" id="tab5">
              <tr>
                <td>Montant HTVA :</td> <td>{htva1 + htva2}</td>
              </tr>
              <tr>
                <td>Montant TVA :</td> <td>{val_tva1 + val_tva2}</td>
              </tr>
              <tr>
                <td>Net à payer :</td> <td>{tva1 + tva2}</td>
              </tr>
            </table>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Calculator;
