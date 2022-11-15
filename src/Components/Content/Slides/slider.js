import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";
// import required modules
// import { Pagination , Autoplay , Navigation } from "swiper";

function Slider() {
  return (
    <div class="slideshow">
      <input
        type="radio"
        id="button-1"
        name="radio-set"
        class="selecteur-1"
        checked="checked"
      />
      <label for="button-1" class="button-label-1"></label>

      <input type="radio" id="button-2" name="radio-set" class="selecteur-2" />
      <label for="button-2" class="button-label-2"></label>

      <input type="radio" id="button-3" name="radio-set" class="selecteur-3" />
      <label for="button-3" class="button-label-3"></label>

      <input type="radio" id="button-4" name="radio-set" class="selecteur-4" />
      <label for="button-4" class="button-label-4"></label>

      <label for="button-1" class="sp-arrow sp-a1"></label>
      <label for="button-2" class="sp-arrow sp-a2"></label>
      <label for="button-3" class="sp-arrow sp-a3"></label>
      <label for="button-4" class="sp-arrow sp-a4"></label>

      <div class="contenu">
        <ul class="slider clearfix">
          <li>
            <img src="URimageHERE.jpg" alt="image01" />
          </li>
          <li>
            <img src="URimageHERE.jpg" alt="image02" />
          </li>
          <li>
            <img src="URimageHERE.jpg" alt="image03" />
          </li>
          <li>
            <img src="URimageHERE.jpg" alt="image04" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Slider;
