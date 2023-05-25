import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";
import styles from "../components/styles.module.scss";

function PendientesView() {
  const [data, setData] = useState([]);
  const [mensaje, setMensaje] = useState();

  axios
    .get("https://sct-transportes.herokuapp.com/pendientes/pendientes")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

  const deletePost = (id, e) => {
    e.preventDefault();
    axios
      .delete(
        `https://sct-transportes.herokuapp.com/pendientes/pendientes/${id}`
      )
      .then((res) => console.log("Deleted!", res))
      .catch((err) => console.log(err));
  };

  const testOnchange = async (
    id,
    noFolioSiaf_P,
    nombrePermisionario_P,
    nombreATA_P,
    fechaRecepcion_P,
    e
  ) => {
    e.preventDefault();
    const inputs = {
      noFolioSiaf: noFolioSiaf_P,
      fechaRecepcion: fechaRecepcion_P,
      nombrePermisionario: nombrePermisionario_P,
      nombreATA: nombreATA_P,
      estado_P: "EN PROCESO",
    };

    await axios
      .post(
        "https://sct-transportes.herokuapp.com/altavehiculosadicionales",
        inputs
      )
      .then((res) => {
        const { data } = res;
        setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
          }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });

    await axios
      .delete(
        `https://sct-transportes.herokuapp.com/pendientes/pendientes/${id}`
      )
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
                <th scope="col">Justificacion</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr>
                    <th key={i} scope="row">
                      {d.noFolioSiaf_P}
                    </th>
                    <td>{d.nombrePermisionario_P}</td>
                    <td>{d.nombreATA_P}</td>
                    <td>{d.fechaRecepcion_P}</td>
                    <td>{d.justificacion_P}</td>
                    <td>{d.estado}</td>
                    <td>
                      <button
                        onClick={(e) => deletePost(d._id, e)}
                        className="btn btn-danger"
                      >
                        Descartar permiso
                      </button>
                      <button
                        onClick={(e) =>
                          testOnchange(
                            d._id,
                            d.noFolioSiaf_P,
                            d.nombrePermisionario_P,
                            d.nombreATA_P,
                            d.fechaRecepcion_P,
                            e
                          )
                        }
                        className="btn btn-success"
                      >
                        Cambiar a "En Proceso de revisión"
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {mensaje && <div className={styles.toast}>{mensaje}</div>}
        </div>
      </div>
    </>
  );
}

export default PendientesView;
