import React from "react";
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
      <Navbar/>
      <Slider/>
      <Solution/>
      <Partenaire/>
      <Footer/>
    </div>
  );
}

export default App;
