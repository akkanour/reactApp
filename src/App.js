/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "swiper/css/bundle";
import "./style.css";
import Slider  from './Components/Content/Slides/slider';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Partenaire from "./Components/Content/Partenaires/partenaire";
import Service from "./Components/Content/ServicesAgora/service";
import Audit_consulting from "./Components/Content/Audit_Consulting/audit_consulting";
import Valeur from "./Components/Content/Partenaires/partenaire";
import OffreEmploi from "./Components/Content/OffresEmploi/offreEmploi";
import TestingCenter from "./Components/Content/TestingCenter/testingCenter";
import Formation from "./Components/Content/formation/formation";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<div><Slider/><Partenaire/></div>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/audit_consulting" element={<Audit_consulting/>}/>
        <Route exact path="/valeur" element={<Valeur/>}/>
        <Route exact path="/partenaire" element={<Partenaire/>}/>
        <Route exact path="/testing-center" element={<TestingCenter/>}/>
        <Route exact path="/offre-emploi" element={<OffreEmploi/>}/>
        <Route exact path="/formation" element={<Formation/>}/>
      </Routes>
      <Footer/>
    </Router>   
  );
}
export default App;
