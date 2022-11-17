import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

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

      {/* <input type="radio" id="button-4" name="radio-set" class="selecteur-4" />
      <label for="button-4" class="button-label-4"></label> */}

      <label for="button-1" class="sp-arrow sp-a1"></label>
      <label for="button-2" class="sp-arrow sp-a2"></label>
      <label for="button-3" class="sp-arrow sp-a3"></label>
      {/* <label for="button-4" class="sp-arrow sp-a4"></label> */}

      <div class="contenu">
        <ul class="slider clearfix">
          <li >
            <div>
              <div class="divSlide">
                <h5>Slide 1</h5>
              </div>
              <div>
                <p>
                  development was still available and it was necessary to create a permanent facility where any new development could be located.
                  A year and a half later the original project was started with construction of 625 units. These include a school, a restaurant, retail development, a swimming pool, a hospital, a shopping center, and an elementary school building. As construction started and the building was completed, the construction time for the project jumped to 4 years and 1 year, and was officially closed to public view and for public viewing only, according to the City's memorandum dated 21 June 2009 (PDF) to the Register of Historic Places dated 21 January 2009.
                  </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="divSlide">
                <h5>Slide 2</h5>
              </div>
              <div>
                <p>
                  development was still available and it was necessary to create a permanent facility where any new development could be located.
                  A year and a half later the original project was started with construction of 625 units. These include a school, a restaurant, retail development, a swimming pool, a hospital, a shopping center, and an elementary school building. As construction started and the building was completed, the construction time for the project jumped to 4 years and 1 year, and was officially closed to public view and for public viewing only, according to the City's memorandum dated 21 June 2009 (PDF) to the Register of Historic Places dated 21 January 2009.
                  </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="divSlide">
                <h5>Slide 3</h5>
              </div>
              <div>
                <p>
                  development was still available and it was necessary to create a permanent facility where any new development could be located.
                  A year and a half later the original project was started with construction of 625 units. These include a school, a restaurant, retail development, a swimming pool, a hospital, a shopping center, and an elementary school building. As construction started and the building was completed, the construction time for the project jumped to 4 years and 1 year, and was officially closed to public view and for public viewing only, according to the City's memorandum dated 21 June 2009 (PDF) to the Register of Historic Places dated 21 January 2009.
                  </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Slider;
