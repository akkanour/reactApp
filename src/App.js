
import React from "react";

import "swiper/css/bundle";
import "./style.css";

import Slider  from './slider';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
