import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css"
// import required modules
import { Pagination , Autoplay , Navigation } from "swiper";

 function Slider () {
  return (
    <>
    <div class="test">
      <Swiper

spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}

navigation={true}
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"

      >
        <SwiperSlide>
          <img className="cadre" src={process.env.PUBLIC_URL + "img/img1.png" } alt="img1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cadre" src={process.env.PUBLIC_URL + "img/img2.png" } alt="img2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cadre" src={process.env.PUBLIC_URL + "img/img3.jpg" } alt="img3.png" />
        </SwiperSlide>

      </Swiper>
      </div>
    </>
  );
    }
  export default Slider ;
