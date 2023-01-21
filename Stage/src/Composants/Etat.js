import React, { useEffect, useState } from "react";
import "../css/card.css";
// import car from "./car.jpg";
import Nav from "./Nav_bar";
// import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { format } from "date-fns";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ButtonModal from "./boutton/button";

const Etat = () => {
  const { etat } = useParams();
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await Axios.get(`http://localhost:5000/cars/find/${etat}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data, etat);
  }, [etat]);

  const supprimer = async (IdVehicule) => {
    const res = await Axios.delete(
      `http://localhost:5000/cars/deleteVoiture/${IdVehicule}`
    );
    fetchData();
    console.log(res);
  };

  return (
    <div>
      <Nav />

      <h1>Ajouter Véhicule</h1>

      <ButtonModal name="Ajouter" type="create" fetchData={fetchData} />

      <table>
        <thead>
          <tr>
            <th>Numéro d'immatriculation</th>
            <th>Marque</th>
            <th>Modèle de la marque</th>
            <th>Etat du véhicule</th>
            <th>Poids</th>
            <th>Poids de son colis</th>
            <th>Taux d'amorçage</th>
            <th>Date d'arrivée au Port Tve</th>
            <th>Action</th>
          </tr>
        </thead>
        {data &&
          data.map((item) => {
            return (
              <tbody key={item.IdVehicule}>
                <tr>
                  <td>{item.Matricule}</td>
                  <td>{item.Marque}</td>
                  <td>{item.Version}</td>
                  <td>{item.EtatVehicule}</td>
                  <td>{item.PoidsVehicule}</td>
                  <td>{item.PoidsColis}</td>
                  <td>{item.Amorcage}</td>
                  <td>
                    {format(new Date(item.DateArriveeAuPort), "dd-MM-yyyy")}
                  </td>
                  <td>
                    <ButtonModal
                      name="Modifier"
                      data={item}
                      color="green"
                      type="update"
                      fetchData={fetchData}
                    />
                    <button
                      onClick={() => {
                        supprimer(item.IdVehicule);
                      }}
                      name=""
                      id=""
                      className="btn btn-primary"
                      role="button"
                    >
                      Supprimer
                    </button>
                    <button
                      name=""
                      id=""
                      className="btn btn-primary"
                      role="button"
                    >
                      Cotation de manutention
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <div></div>
      {data &&
        data.map((item) => {
          return <div key=""></div>;
        })}
    </div>
  );
};

export default Etat;
