import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";
import styles from "../components/styles.module.scss";

function DashboardView() {
  const [data, setData] = useState([]);
  const [mensaje, setMensaje] = useState();

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

  const testOnchange = async (
    id,
    noFolioSiaf,
    nombrePermisionario,
    nombreATA,
    fechaRecepcion,
    e
  ) => {
    e.preventDefault();
    const inputs = {
      noFolioSiaf_F: noFolioSiaf,
      fechaRecepcion_F: fechaRecepcion,
      nombrePermisionario_F: nombrePermisionario,
      nombreATA_F: nombreATA,
      estado_F: "EN PROCESO DE FIRMA",
    };

    await axios
      .post("https://sct-transportes.herokuapp.com/firmas/firmas", inputs)
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
                            d.noFolioSiaf,
                            d.nombrePermisionario,
                            d.nombreATA,
                            d.fechaRecepcion,
                            e
                          )
                        }
                        className="btn btn-success"
                      >
                        Cambiar a "En Proceso de firma"
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

export default DashboardView;
