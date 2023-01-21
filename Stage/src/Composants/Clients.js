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
import ButtonModal1 from "./boutton/button_client";

export default function Clients() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await Axios.get(`http://localhost:5000/clients/findAll`);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const supprimer = async (IdClient) => {
    const res = await Axios.delete(
      `http://localhost:5000/clients/deleteClient/${IdClient}`
    );
    fetchData();
    console.log(res);
  };

  return (
    <div>
      <Nav />
      <h1>Ajouter Clients</h1>

      <ButtonModal1
        name="Ajouter cli"
        type="createclient"
        fetchData={fetchData}
      />

      <table className="table-auto">
        <thead>
          <tr>
            <th>Nom du client</th>
            <th>Prénoms du client</th>
            <th>Username du client</th>
            <th>Mot de passe</th>
            <th>Email du client</th>
            <th>Action</th>
          </tr>
        </thead>
        {data &&
          data.map((item) => {
            return (
              <tbody key={item.IdClient}>
                <tr>
                  <td>{item.NomClient}</td>
                  <td>{item.PrenomsClient}</td>
                  <td>{item.UsernameClient}</td>
                  <td>{item.PwdClient}</td>
                  <td>{item.EmailClient}</td>
                  <td>
                    <ButtonModal1
                      name="Modifier cli"
                      data={item}
                      color="green"
                      type="updateclient"
                      fetchData={fetchData}
                    />
                    <button
                      onClick={() => {
                        supprimer(item.IdClient);
                      }}
                      name=""
                      id=""
                      className="btn btn-primary"
                      role="button"
                    >
                      Supprimer
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
}
