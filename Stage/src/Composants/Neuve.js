import React from "react";
import "../css/Neuve.css";
class Neuve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PU_debarquement: this.props.debarquement,
      PU_cession: 0.5,
      PU_visite_douane: 0,
      PU_assistance_civio: 0,
      PU_march_sous_condit: 0,
      PU_droit_port: 2.4,
      PU_redevence: 2.25,
      PU_droit_region: 4.5,
      PU_redevence_march: 0,
      PU_droit_region_march: 0,
      Qt_debarquement: this.props.nombre,
      Qt_cession: 2,
      Qt_visite_douane: 0,
      Qt_assistance_civio: 0,
      Qt_march_sous_condit: 0,
      Qt_droit_port: this.props.poid,
      Qt_redevence: 1,
      Qt_droit_region: 1,
      Qt_redevence_march: 0,
      Qt_droit_region_march: 0,
    };
  }

  render() {
    function TVA(props) {
      const taxe = (props * 20) / 100;
      return props + taxe;
    }

    function ValTVA(props) {
      const taxe = (props * 20) / 100;
      return taxe;
    }

    const pu_debarquement = parseInt(this.props.debarquement);
    const pu_cession = parseFloat(this.state.PU_cession);
    const pu_visite_douane = parseFloat(this.state.PU_visite_douane);
    const pu_assistance_civio = parseFloat(this.state.PU_assistance_civio);
    const pu_march_sous_condit = parseFloat(this.state.PU_march_sous_condit);
    const pu_droit_port = parseFloat(this.state.PU_droit_port);
    const pu_droit_region = parseFloat(this.state.PU_droit_region);
    const pu_redevence = parseFloat(this.state.PU_redevence);
    const pu_redevence_march = parseFloat(this.state.PU_redevence_march);
    const pu_droit_region_march = parseFloat(this.state.PU_droit_region_march);

    const qt_debarquement = parseInt(this.props.nombre);
    const qt_cession = parseInt(this.state.Qt_cession);
    const qt_visite_douane = parseInt(this.state.Qt_visite_douane);
    const qt_assistance_civio = parseInt(this.state.Qt_assistance_civio);
    const qt_march_sous_condit = parseInt(this.state.Qt_march_sous_condit);
    const qt_droit_port = parseInt(this.props.poid);
    const qt_droit_region = parseInt(this.state.Qt_droit_region);
    const qt_redevence = parseInt(this.state.Qt_redevence);
    const qt_redevence_march = parseInt(this.state.Qt_redevence_march);
    const qt_droit_region_march = parseInt(this.state.Qt_droit_region_march);

    const MontantDebarquement = pu_debarquement * qt_debarquement;
    const MontantCession = pu_cession * qt_cession;
    const MontantVisiteDouane = pu_visite_douane * qt_visite_douane;
    const MontantAssistanceCivio = pu_assistance_civio * qt_assistance_civio;
    const MontantMarchSousCondit = pu_march_sous_condit * qt_march_sous_condit;
    const MontantDroitPort = pu_droit_port * qt_droit_port;
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

    const grandTotal = tva1 + tva2;

    return (
      <div>
        <div className="formneuve">
          <input type="number" value={grandTotal} />
          <input type="number" value={grandTotal} />
        </div>
      </div>
    );
  }
}

export default Neuve;
