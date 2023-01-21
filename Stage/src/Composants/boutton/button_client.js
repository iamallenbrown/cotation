import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Ajouter_Clients from "../Modals/Ajouter_Clients";
import Axios from "axios";

export default function ButtonModal({ name, data, fetchData, type }) {
  const [modalShow, setModalShow] = React.useState(false);

  const item = {
    NomClient: "",
    PrenomsClient: "",
    UsernameClient: "",
    PwdClient: "",
    EmailClient: "",
  };

  const handleClose = () => setModalShow(!modalShow);

  // const createVehicule = (
  //   Marque,
  //   Version,
  //   EtatVehicule,
  //   PoidsVehicule,
  //   PoidsColis,
  //   Amorcage,
  //   DateArriveeAuPort
  // ) => {
  //   Axios.post("http://localhost:5000/cars/create", {
  //     marque: Marque,
  //     version: Version,
  //     etatvehicule: EtatVehicule,
  //     poidsvehicule: PoidsVehicule,
  //     poidscolis: PoidsColis,
  //     amorcage: Amorcage,
  //     datearr: DateArriveeAuPort,
  //   })
  //     .then((data) => {
  //       fetchData();
  //       handleClose();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        {name}
      </Button>

      <Ajouter_Clients
        data={data}
        modalShow={modalShow}
        onHide={() => setModalShow(false)}
        handleClose={handleClose}
        // updateVehicule={}
        type={type}
        fetchData={fetchData}
      />
    </>
  );
}
