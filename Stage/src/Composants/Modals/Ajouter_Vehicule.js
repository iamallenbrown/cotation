import { render } from "@testing-library/react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Axios from "axios";
import { format } from "date-fns";

function Ajouter_Vehicule({
  data,
  onHide,
  modalShow,
  type,
  handleClose,
  fetchData,
}) {
  const [IdVehicule, SetIdVehicule] = useState(data?.IdVehicule);
  const [Matricule, setMatricule] = useState(data?.Matricule);
  const [Marque, setMarque] = useState(data?.Marque);
  const [Version, setVersion] = useState(data?.Version);
  const [EtatVehicule, setEtatVehicule] = useState(data?.EtatVehicule);
  const [PoidsVehicule, setPoidsVehicule] = useState(data?.PoidsVehicule);
  const [PoidsColis, setPoidsColis] = useState(data?.PoidsColis);
  const [Amorcage, setAmorcage] = useState(data?.Amorcage);
  const [DateArriveeAuPort, setDateArriveeAuPort] = useState(
    data?.DateArriveeAuPort
  );
  const createVehicule = (
    Matricule,
    Marque,
    Version,
    EtatVehicule,
    PoidsVehicule,
    PoidsColis,
    Amorcage,
    DateArriveeAuPort
  ) => {
    Axios.post("http://localhost:5000/cars/create", {
      matricule: Matricule,
      marque: Marque,
      version: Version,
      etatvehicule: EtatVehicule,
      poidsvehicule: PoidsVehicule,
      poidscolis: PoidsColis,
      amorcage: Amorcage,
      datearr: DateArriveeAuPort,
    })
      .then((data) => {
        console.log(data);
        fetchData();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateVehicule = (
    IdVehicule,
    Matricule,
    Marque,
    Version,
    EtatVehicule,
    PoidsVehicule,
    PoidsColis,
    Amorcage,
    DateArriveeAuPort
  ) => {
    Axios.post("http://localhost:5000/cars/updateVoiture", {
      IdVehicule,
      Matricule,
      Marque,
      Version,
      EtatVehicule,
      PoidsVehicule,
      PoidsColis,
      Amorcage,
      DateArriveeAuPort,
    })
      .then((data) => {
        fetchData();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reset = () => {
    SetIdVehicule("");
    setMatricule("");
    setMarque("");
    setVersion("");
    setEtatVehicule("");
    setPoidsVehicule("");
    setPoidsColis("");
    setAmorcage("");
    setDateArriveeAuPort("");
  };

  return (
    <Modal show={modalShow} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Insertion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Matricule</Form.Label>
            <Form.Control
              type="text"
              placeholder="Matricule de la voiture"
              value={Matricule}
              onChange={(e) => setMatricule(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Marque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marque de la voiture"
              value={Marque}
              onChange={(e) => setMarque(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Modèle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Version"
              value={Version}
              onChange={(e) => setVersion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Etat de Véhicule</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              value={EtatVehicule}
              onChange={(e) => setEtatVehicule(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Poids Véhicule</Form.Label>
            <Form.Control
              type="number"
              placeholder="Password"
              min="0"
              value={PoidsVehicule}
              onChange={(e) => setPoidsVehicule(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Poids Colis</Form.Label>
            <Form.Control
              type="text"
              placeholder="Poids du Colis"
              min="0"
              value={PoidsColis}
              onChange={(e) => setPoidsColis(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Amorcage</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amorcage"
              min="0"
              value={Amorcage}
              onChange={(e) => setAmorcage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Date Arrivée</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date Arrivée"
              value={
                DateArriveeAuPort
                  ? format(new Date(DateArriveeAuPort), "yyyy-MM-dd")
                  : ""
              }
              onChange={(e) => {
                setDateArriveeAuPort(e.target.value);
                console.log(DateArriveeAuPort);
              }}
            />
          </Form.Group>
        </Form>
        {/* <h4>{data?.IdVehicule} </h4>
        <p>{data?.EtatVehicule}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button
          variant="primary"
          onClick={(e) => {
            console.log("ok");

            if (type && type === "create") {
              createVehicule(
                Matricule,
                Marque,
                Version,
                EtatVehicule,
                PoidsVehicule,
                PoidsColis,
                Amorcage,
                DateArriveeAuPort
              );
              reset();
            } else if (type && type === "update") {
              updateVehicule(
                IdVehicule,
                Matricule,
                Marque,
                Version,
                EtatVehicule,
                PoidsVehicule,
                PoidsColis,
                Amorcage,
                DateArriveeAuPort
              );
            }
          }}
        >
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ajouter_Vehicule;
