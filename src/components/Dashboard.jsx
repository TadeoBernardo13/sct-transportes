import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../css/dashboard.css";

function Dashboard() {
  const [name, setName] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`https://sct-transportes.herokuapp.com/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);
  return (
    <div className="main-container d-flex">
      <div className="sidebar" id="side_nav">
        <div className="header-box px-2 pt-3 pb-4">
          <h1 className="fs-4">
            <span className="bg-white text-dark rounded shadow px-2 me-2">
              SCT
            </span>{" "}
            <span className="text-white">Control de permisos</span>
          </h1>
          <h3 className="text-white">{name}</h3>
        </div>
        <ul className="list-unstyled px-2">
          <h5 className="text-white mt-2">
            AVA. AL PERMISO PARA EL SERVICIO DE AUTOTRANSPORTE FEDERAL
          </h5>
          <li className="p-2">
            <NavLink
              className="text-decoration-none nav__link"
              to="/altavehiculoadicionalcargaespecializadaresiduospeligrosos"
            >
              CETMRP
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalcargageneral"
              className="text-decoration-none nav__link"
            >
              CARGA GENERAL
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalfederalpasaje"
              className="text-decoration-none nav__link"
            >
              PASAJE
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalfederalturismo"
              className="text-decoration-none nav__link"
            >
              TURISMO
            </NavLink>
          </li>

          <h5 className="text-white mt-4">
            AVA. AL PERMISO PARA EL SERVICIO DE TRANSPORTE PRIVADO
          </h5>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalprivadocargaespecilizadaresiduosremanentesdesechospeligrosos"
              className="text-decoration-none nav__link"
            >
              CEMRRDP
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalprivadocargageneral"
              className="text-decoration-none nav__link"
            >
              CARGA GENERAL
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/altavehiculoadicionalprivadopersonas"
              className="text-decoration-none nav__link"
            >
              PERSONAS
            </NavLink>
          </li>

          <h5 className="text-white mt-4">VER REPORTES</h5>
          <li className="p-2">
            <NavLink
              to="/terminados"
              className="text-decoration-none nav__link"
            >
              Ver Reportes en Terminados
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/firmas" className="text-decoration-none nav__link">
              Ver Reportes en firma
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/dashboard" className="text-decoration-none nav__link">
              Ver Reportes en revisión
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/pendientes"
              className="text-decoration-none nav__link"
            >
              Ver Reportes pendientes
            </NavLink>
          </li>
        </ul>
        <hr className="h-color mx-2" />
        <ul className="list-unstyled">
          <li className="">
            <NavLink to="/" className="text-decoration-none nav__link">
              Salir
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
