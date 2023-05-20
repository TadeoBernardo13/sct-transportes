import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";

function DashboardView() {
  const [data, setData] = useState([]);
  axios
    .get("https://sct-transportes.herokuapp.com/altavehiculosadicionales")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  const deletePost = (id, e) => {
    e.preventDefault();
    axios
      .delete(`https://sct-transportes.herokuapp.com/altavehiculosadicionales/${id}`)
      .then((res) => console.log("Deleted!", res))
      .catch((err) => console.log(err));
  };
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
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr>
                    <th key={i} scope="row">
                      {d.noFolioSiaf}
                    </th>
                    <td>{d.nombrePermisionario}</td>
                    <td>{d.nombreATA}</td>
                    <td>{d.fechaRecepcion}</td>
                    <td>{d.estado_P}</td>
                    <td>
                      <button onClick={(e) => deletePost(d._id, e)} className="btn btn-info">
                        Terminado
                      </button>
                    </td>
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

export default DashboardView;
