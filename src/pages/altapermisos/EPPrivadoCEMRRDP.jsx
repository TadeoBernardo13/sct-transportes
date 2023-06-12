import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Dashboard from "../../components/Dashboard";

import "../../css/dashboard.css";
import styles from "../../components/styles.module.scss";

function EPPrivadoCEMRRDP() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState();

  const [inputs, setInputs] = useState({
    noFolioSiaf: "",
    fechaRecepcion: Date(),
    nombrePermisionario: "",
    nombreATA:
      "EXPEDICION DE PERMISO PARA EL SERVICIO DE TRANSPORTE PRIVADO DE CARGA ESPECIALIZADA RESIDUOS PELIGROSOS",
    estado_P: "EN PROCESO DE REVISIÓN",
  });

  const {
    noFolioSiaf,
    fechaRecepcion,
    nombrePermisionario,
    nombreATA,
    estado_P,
  } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (noFolioSiaf !== "" && nombrePermisionario !== "" && nombreATA !== "") {
      const ATA = {
        fechaRecepcion,
        noFolioSiaf,
        nombrePermisionario,
        nombreATA,
        estado_P,
      };

      await axios
        .post(
          "https://sct-transportes.herokuapp.com/altavehiculosadicionales",
          ATA
        )
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({
            fechaRecepcion: "",
            noFolioSiaf: "",
            nombrePermisionario: "",
            nombreATA: "",
            estado_P: "",
          });
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Favor de llenar todos lo campos");
    }
  };

  return (
    <>
      <div className="d-flex">
        <Dashboard />
        <div className="content p-4">
          <h1 className="fs-3">
            EXPEDICION DE PERMISO PARA EL SERVICIO DE TRANSPORTE PRIVADO DE
            CARGA ESPECIALIZADA DE MATERIALES, RESIDUOS, REMANENTES Y DESECHOS
            PELIGROSOS
          </h1>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="d-flex justify-content-evenly">
              <div>
                <label htmlFor="numFolio">
                  <span className="asterisco">*</span> No. Folio SIAF:
                </label>
                <input
                  onChange={(e) => HandleChange(e)}
                  name="noFolioSiaf"
                  id="noFolioSiaf"
                  value={noFolioSiaf}
                  type="text"
                  placeholder="No. Folio SIAF"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="nombrePermisionario">
                  <span className="asterisco">*</span> Permisionario:
                </label>
                <input
                  onChange={(e) => HandleChange(e)}
                  name="nombrePermisionario"
                  id="nombrePermisionario"
                  value={nombrePermisionario}
                  type="text"
                  placeholder="Permisionario"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-info">
                Registrar
              </button>
            </div>
          </form>

          <hr />
          <button
            onClick={() =>
              navigate(`/expedidiondepermisosprivadosdecargaespecializadadresiduospeligrosos_p`)
            }
            className="btn btn-secondary mt-4"
          >
            Registrar en pendientes
          </button>
          {mensaje && <div className={styles.toast}>{mensaje}</div>}
        </div>
      </div>
    </>
  );
}

export default EPPrivadoCEMRRDP;
