import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Dashboard from "../../components/Dashboard";

import "../../css/dashboard.css";
import styles from "../../components/styles.module.scss";

function EPFederalPasaje_P() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState();

  const [inputs_P, setInputs_P] = useState({
    noFolioSiaf_P: "",
    fechaRecepcion_P: Date(),
    nombrePermisionario_P: "",
    nombreATA_P: "EXPEDICION DE PERMISO PARA EL SERVICIO DE A.F. DE PASAJE",
    justificacion_P: "",
    estado: "PENDIENTE",
  });
  const {
    noFolioSiaf_P,
    fechaRecepcion_P,
    nombrePermisionario_P,
    nombreATA_P,
    justificacion_P,
    estado,
  } = inputs_P;

  const HandleChange_P = (e) => {
    setInputs_P({ ...inputs_P, [e.target.name]: e.target.value });
  };

  const onSubmit_P = async (e) => {
    e.preventDefault();
    if (
      noFolioSiaf_P !== "" &&
      nombrePermisionario_P !== "" &&
      justificacion_P !== ""
    ) {
      const Pendiente = {
        fechaRecepcion_P,
        noFolioSiaf_P,
        nombrePermisionario_P,
        nombreATA_P,
        justificacion_P,
        estado,
      };

      await axios
        .post(
          "https://sct-transportes.herokuapp.com/pendientes/pendientes",
          Pendiente
        )
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs_P({
            fechaRecepcion_P: "",
            noFolioSiaf_P: "",
            nombrePermisionario_P: "",
            nombreATA_P: "",
            justificacion_P: "",
            estado,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Favor de llenar todos los campos");
    }
  };
  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div className="content p-4">
          <h1 className="fs-3">
            EXPEDICION DE PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL DE
            PASAJE
          </h1>

          <hr />

          <form onSubmit={(e) => onSubmit_P(e)}>
            <div>
              <div className="mb-3">
                <div className="d-flex justify-content-evenly">
                  <div>
                    <label htmlFor="noFolioSiaf_P">
                      <span className="asterisco">*</span> No. Folio SIAF:
                    </label>
                    <input
                      onChange={(e) => HandleChange_P(e)}
                      name="noFolioSiaf_P"
                      id="noFolioSiaf_P"
                      value={noFolioSiaf_P}
                      type="text"
                      placeholder="No. Folio SIAF"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="nombrePermisionario_P">
                      <span className="asterisco">*</span> Permisionario:
                    </label>
                    <input
                      onChange={(e) => HandleChange_P(e)}
                      name="nombrePermisionario_P"
                      id="nombrePermisionario_P"
                      value={nombrePermisionario_P}
                      type="text"
                      placeholder="Permisionario"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <label htmlFor="justificacion_P" className="form-label">
                  <span className="asterisco">*</span> Escriba una justificacion
                  o documentacion faltante
                </label>
                <textarea
                  onChange={(e) => HandleChange_P(e)}
                  value={justificacion_P}
                  className="form-control"
                  id="justificacion_P"
                  name="justificacion_P"
                  rows="3"
                  as="textarea"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info">
                Mandar a pendientes
              </button>
              {mensaje && <div className={styles.toast}>{mensaje}</div>}
            </div>
          </form>
          <button
            onClick={() =>
              navigate(
                "/expedidiondepermisosfederaldepasaje"
              )
            }
            className="btn btn-secondary mt-4"
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
}

export default EPFederalPasaje_P;
