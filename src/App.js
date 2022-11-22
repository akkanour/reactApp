
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "swiper/css/bundle";
import "./style.css";
import Slider  from './Components/Content/Slides/slider';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Solution from "./Components/Content/Solutions/solution";
import Partenaire from "./Components/Content/Partenaires/partenaire";


function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Slider/>}/>
        <Route exact path="/solution" element={<Solution/>}/>
        <Route exact path="/partenaire" element={<Partenaire/>}/>
        <Route path="*" element={<Slider/>}/>
      </Routes>
    </Router>
    <Navbar/>
    <Footer/>
    </div>
  );
}

export default App;
