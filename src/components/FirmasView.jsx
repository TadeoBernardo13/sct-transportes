import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

import "../css/dashboard.css";
import styles from "../components/styles.module.scss";

function FirmasView() {
  const [data, setData] = useState([]);
  const [mensaje, setMensaje] = useState();

  axios
    .get("https://sct-transportes.herokuapp.com/firmas/firmas")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

  const deletePost = (id, e) => {
    e.preventDefault();
    axios
      .delete(`https://sct-transportes.herokuapp.com/firmas/firmas/${id}`)
      .then((res) => console.log("Deleted!", res))
      .catch((err) => console.log(err));
  };

  const testOnchange = async (
    id,
    noFolioSiaf_F,
    nombrePermisionario_F,
    nombreATA_F,
    fechaRecepcion_F,
    e
  ) => {
    e.preventDefault();
    const inputs = {
      noFolioSiaf_T: noFolioSiaf_F,
      fechaRecepcion_T: fechaRecepcion_F,
      nombrePermisionario_T: nombrePermisionario_F,
      nombreATA_T: nombreATA_F,
      estado_T: "TERMINADO",
    };

    await axios
      .post("https://sct-transportes.herokuapp.com/terminados/terminados", inputs)
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
      .delete(`https://sct-transportes.herokuapp.com/firmas/firmas/${id}`)
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
                      {d.noFolioSiaf_F}
                    </th>
                    <td>{d.nombrePermisionario_F}</td>
                    <td>{d.nombreATA_F}</td>
                    <td>{d.fechaRecepcion_F}</td>
                    <td>{d.estado_F}</td>
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
                            d.noFolioSiaf_F,
                            d.nombrePermisionario_F,
                            d.nombreATA_F,
                            d.fechaRecepcion_F,
                            e
                          )
                        }
                        className="btn btn-success"
                      >
                        Cambiar a "Terminado"
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

export default FirmasView;
