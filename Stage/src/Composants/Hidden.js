import React from "react";
import "../css/Hidden.css";
import Neuve from "./Neuve";

class Hidden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Colis: "",
      Volume: "",
      Amorcage: "",
    };
  }

  render() {
    function debarquement(props, prop) {
      if (props === "Neuve") {
        if (prop === "1") {
          return 100;
        } else if (prop === "2") {
          return 165;
        } else if (prop === "4") {
          return 260;
        } else if (prop === "6") {
          return 320;
        } else if (prop === "8") {
          return 450;
        } else if (prop === "10") {
          return 500;
        }
      } else {
        return 0;
      }
    }

    function poid(prop, props) {
      if (prop === "Neuve") {
        if (props === "1") {
          return 1;
        } else if (props === "2") {
          return 2;
        } else if (props === "4") {
          return 4;
        } else if (props === "6") {
          return 6;
        } else if (props === "8") {
          return 10;
        } else if (props === "10") {
          return 10;
        }
      } else {
        return 0;
      }
    }
    const b = poid(this.props.type, this.props.poid);
    const a = debarquement(this.props.type, this.props.poid);

    if (this.props.type === "Neuve") {
      return (
        <div>
          <div className="form2">
            <input
              className="desable"
              type="number"
              placeholder="Poids du colis"
              disabled
            />
            <input
              className="desable"
              type="number"
              placeholder="Volume du véhicule"
              disabled
            />
            <input
              className="desable"
              type="number"
              placeholder="Taux d'amorçage (en %)"
              disabled
            />
          </div>

          <div className="form3">
            <Neuve
              type={this.props.type}
              nombre={this.props.nombre}
              debarquement={a}
              poid={b}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="form2">
          <input type="number" placeholder="Poids du colis" />
          <input type="number" placeholder="Volume du véhicule" />
          <input type="number" placeholder="Taux d'amorçage (en %)" />
          {a}
        </div>
      );
    }
  }
}

export default Hidden;
