import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";

import DashboardView from "./components/DashboardView";
import PendientesView from "./components/PendientesView";
import FirmasView from "./components/FirmasView";
import TerminadosView from "./components/TerminadosView";

/* Permisos alta de vehiculos adicionales */
import ATAFederalCargaEResiduos from "./pages/altavehiculos/ATAFederalCargaEMRP";
import ATAFederalCargaGeneral from "./pages/altavehiculos/ATAFederalCargaGeneral";
import ATAFederalPasaje from "./pages/altavehiculos/ATAFederalPasaje";
import AltaTransporteFederalTurismo from "./pages/altavehiculos/ATAFederalTurismo";
import ATAPrivadoCargaERRDP from "./pages/altavehiculos/ATAPrivadoCargaEMRRDP";
import ATAPrivadoCargaGeneral from "./pages/altavehiculos/ATAPrivadoCargaGeneral";
import AltaTransportePrivadoPersonas from "./pages/altavehiculos/ATAPrivadoPersonas";

/* Permisos alta de vehiculos adicionales PENDIENTES */
import ATAFederalCargaEResiduosP from "./pages/altavehiculos/ATAFederalCargaEMRP_P";
import ATAFederalCargaGeneralP from "./pages/altavehiculos/ATAFederalCargaGeneral_P";
import ATAFederalPasajeP from "./pages/altavehiculos/ATAFederalPasaje_P";
import ATAFederalTurismoP from "./pages/altavehiculos/ATAFederalTurismo_P";
import ATAPrivadoCargaEMRRDPp from "./pages/altavehiculos/ATAPrivadoCargaEMRRDP_P";
import ATAPrivadoCargaGeneralP from "./pages/altavehiculos/ATAPrivadoCargaGeneral_P";
import ATAPrivadoPersonasP from "./pages/altavehiculos/ATAPrivadoPersonas_P";

/* Alta de Expedicion de Permisos */
import EPFederalPasaje from "./pages/altapermisos/EPFederalPasaje";
import EPFederalTurismo from "./pages/altapermisos/EPFederalTurismo";
import EPFederalCETMRPCF from "./pages/altapermisos/EPFederalCETMRPCF";
import EPFederalCETMRP from "./pages/altapermisos/EPFederalCETMRP";
import EPFederalCargaGeneral from "./pages/altapermisos/EPFederalCargaGeneral";
import EPFederalCargaGeneralFrontera from "./pages/altapermisos/EPFederalCargaGeneralFrontera";
import EPPrivadoCargaGeneral from "./pages/altapermisos/EPPrivadoCargaGeneral";
import EPPrivadoCEMRRDP from "./pages/altapermisos/EPPrivadoCEMRRDP";
import EPPrivadoPersonas from "./pages/altapermisos/EPPrivadoPersonas";

/* Alta de Expedicion de Permisos PENDIENTES*/
import EPFederalPasajeP from "./pages/altapermisos/EPFederalPasaje_P";
import EPFederalTurismoP from "./pages/altapermisos/EPFederalTurismo_P";
import EPFederalCETMRPCFP from "./pages/altapermisos/EPFederalCETMRPCF_P";
import EPFederalCETMRPP from "./pages/altapermisos/EPFederalCETMRP_P";
import EPFederalCargaGeneralP from "./pages/altapermisos/EPFederalCargaGeneral_P";
import EPFederalCargaGeneralFronteraP from "./pages/altapermisos/EPFederalCargaGeneralFrontera_P";
import EPPrivadoCargaGeneralP from "./pages/altapermisos/EPPrivadoCargaGeneral_P";
import EPPrivadoCEMRRDPP from "./pages/altapermisos/EPPrivadoCEMRRDP_P";
import EPPrivadoPersonasP from "./pages/altapermisos/EPPrivadoPersonas_P";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/admin" element={<Admin />} />

        {/* Permisos alta de vehiculos adicionales */}
        <Route
          path="/altavehiculoadicionalcargaespecializadaresiduospeligrosos"
          element={<ATAFederalCargaEResiduos />}
        />
        <Route
          path="/altavehiculoadicionalcargageneral"
          element={<ATAFederalCargaGeneral />}
        />
        <Route
          path="/altavehiculoadicionalfederalpasaje"
          element={<ATAFederalPasaje />}
        />
        <Route
          path="/altavehiculoadicionalfederalturismo"
          element={<AltaTransporteFederalTurismo />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargaespecilizadaresiduosremanentesdesechospeligrosos"
          element={<ATAPrivadoCargaERRDP />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargageneral"
          element={<ATAPrivadoCargaGeneral />}
        />
        <Route
          path="/altavehiculoadicionalprivadopersonas"
          element={<AltaTransportePrivadoPersonas />}
        />

        {/* Permisos alta de vehiculos adicionales PENDIENTES */}
        <Route
          path="/altavehiculoadicionalcargaespecializadaresiduospeligrosos_p"
          element={<ATAFederalCargaEResiduosP />}
        />
        <Route
          path="/altavehiculoadicionalcargageneral_p"
          element={<ATAFederalCargaGeneralP />}
        />
        <Route
          path="/altavehiculoadicionalfederalpasaje_p"
          element={<ATAFederalPasajeP />}
        />
        <Route
          path="/altavehiculoadicionalfederalturismo_p"
          element={<ATAFederalTurismoP />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargaespecilizadaresiduosremanentesdesechospeligrosos_p"
          element={<ATAPrivadoCargaEMRRDPp />}
        />
        <Route
          path="/altavehiculoadicionalprivadocargageneral_p"
          element={<ATAPrivadoCargaGeneralP />}
        />
        <Route
          path="/altavehiculoadicionalprivadopersonas_p"
          element={<ATAPrivadoPersonasP />}
        />

        {/* Alta de Expedicion de Permisos */}
        <Route
          path="/expedidiondepermisosfederaldepasaje"
          element={<EPFederalPasaje />}
        />
        <Route
          path="/expedidiondepermisosfederaldeturismo"
          element={<EPFederalTurismo />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargaespecializadaenfranjafronteriza"
          element={<EPFederalCETMRPCF />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargaespecializadaenmatpeligrosos"
          element={<EPFederalCETMRP />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargageneral"
          element={<EPFederalCargaGeneral />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargageneralfranjafronteriza"
          element={<EPFederalCargaGeneralFrontera />}
        />
        <Route
          path="/expedidiondepermisosprivadosdecargageneral"
          element={<EPPrivadoCargaGeneral />}
        />
        <Route
          path="/expedidiondepermisosprivadosdecargaespecializadadresiduospeligrosos"
          element={<EPPrivadoCEMRRDP />}
        />
        <Route
          path="/expedidiondepermisosprivadosdepersonas"
          element={<EPPrivadoPersonas />}
        />

        {/* Alta de Expedicion de Permisos PENDIENTES*/}
        <Route
          path="/expedidiondepermisosfederaldepasaje_p"
          element={<EPFederalPasajeP />}
        />
        <Route
          path="/expedidiondepermisosfederaldeturismo_p"
          element={<EPFederalTurismoP />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargaespecializadaenfranjafronteriza_p"
          element={<EPFederalCETMRPCFP />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargaespecializadaenmatpeligrosos_p"
          element={<EPFederalCETMRPP />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargageneral_p"
          element={<EPFederalCargaGeneralP />}
        />
        <Route
          path="/expedidiondepermisosfederaldecargageneralfranjafronteriza_p"
          element={<EPFederalCargaGeneralFronteraP />}
        />
        <Route
          path="/expedidiondepermisosprivadosdecargageneral_p"
          element={<EPPrivadoCargaGeneralP />}
        />
        <Route
          path="/expedidiondepermisosprivadosdecargaespecializadadresiduospeligrosos_p"
          element={<EPPrivadoCEMRRDPP />}
        />
        <Route
          path="/expedidiondepermisosprivadosdepersonas_p"
          element={<EPPrivadoPersonasP />}
        />

        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/pendientes" element={<PendientesView />} />
        <Route path="/firmas" element={<FirmasView />} />
        <Route path="/terminados" element={<TerminadosView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
