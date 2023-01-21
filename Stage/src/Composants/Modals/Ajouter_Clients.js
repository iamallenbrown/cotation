import { render } from "@testing-library/react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Axios from "axios";
import { format } from "date-fns";

function Ajouter_Clients({
  data,
  onHide,
  modalShow,
  type,
  handleClose,
  fetchData,
}) {
  const [IdClient, SetIdClient] = useState(data?.IdClient);
  const [NomClient, setNomClient] = useState(data?.NomClient);
  const [PrenomsClient, setPrenomsClient] = useState(data?.PrenomsClient);
  const [UsernameClient, setUsernameClient] = useState(data?.UsernameClient);
  const [PwdClient, setPwdClient] = useState(data?.PwdClient);
  const [EmailClient, setEmailClient] = useState(data?.EmailClient);
  const createClient = (
    NomClient,
    PrenomsClient,
    UsernameClient,
    PwdClient,
    EmailClient
  ) => {
    Axios.post("http://localhost:5000/clients/create", {
      nomclient: NomClient,
      prenomsclient: PrenomsClient,
      usernameclient: UsernameClient,
      pwdclient: PwdClient,
      emailclient: EmailClient,
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

  const updateClient = (
    IdClient,
    NomClient,
    PrenomsClient,
    UsernameClient,
    PwdClient,
    EmailClient
  ) => {
    Axios.post("http://localhost:5000/clients/updateClient", {
      IdClient,
      NomClient,
      PrenomsClient,
      UsernameClient,
      PwdClient,
      EmailClient,
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
    SetIdClient("");
    setNomClient("");
    setPrenomsClient("");
    setUsernameClient("");
    setPwdClient("");
    setEmailClient("");
  };

  return (
    <Modal show={modalShow} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Insertion des nouveaux clients
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Nom du client</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom du client"
              value={NomClient}
              onChange={(e) => setNomClient(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Prénoms du client</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prénoms du client"
              value={PrenomsClient}
              onChange={(e) => setPrenomsClient(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom d'utilisateur"
              value={UsernameClient}
              onChange={(e) => setUsernameClient(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={PwdClient}
              onChange={(e) => setPwdClient(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>E-mail du client</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail du client"
              value={EmailClient}
              onChange={(e) => setEmailClient(e.target.value)}
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

            if (type && type === "createclient") {
              createClient(
                NomClient,
                PrenomsClient,
                UsernameClient,
                PwdClient,
                EmailClient
              );
              reset();
            } else if (type && type === "updateclient") {
              updateClient(
                IdClient,
                NomClient,
                PrenomsClient,
                UsernameClient,
                PwdClient,
                EmailClient
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

export default Ajouter_Clients;
