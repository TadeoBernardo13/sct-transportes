import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";  

function TerminadosView() {
  const [data, setData] = useState([]);

  axios
    .get("https://sct-transportes.herokuapp.com/terminados/terminados")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No. Folio SIAF</th>
                <th scope="col">Nombre del permisionario</th>
                <th scope="col">Nombre del documento</th>
                <th scope="col">Fecha de recepcion</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr>
                    <th key={i} scope="row">
                      {d.noFolioSiaf_T}
                    </th>
                    <td>{d.nombrePermisionario_T}</td>
                    <td>{d.nombreATA_T}</td>
                    <td>{d.fechaRecepcion_T}</td>
                    <td>{d.estado_T}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TerminadosView;
