import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
  slidesPerView: 4,
  spaceBetween: 30,
});

/* import datePicker from "./modules/datePicker";
datePicker();

import autoCompleteFunction from "./modules/autoComplete";
autoCompleteFunction(); */

/* import mobileNav from './modules/mobile-nav.js';
mobileNav(); */
