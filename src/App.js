
import React from "react";
import "swiper/css/bundle";
import "./style.css";
import Slider  from './Components/Content/Slides/slider';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      {/* <div class="test"> */}
        <Slider/>
        <Slider/>
        <Slider/>
        <Slider/>
      {/* </div> */}
      <Footer/>
    </div>
  );
}

export default App;
