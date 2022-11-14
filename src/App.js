
import React from "react";
import "swiper/css/bundle";
import "./style.css";

import Slider  from './Components/Content/Slides/slider';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Content/ServicesAgora/service"

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Slider/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
