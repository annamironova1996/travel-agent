import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

function swiperFunc() {
  const swiper = new Swiper("#swiper-popular", {
    modules: [Navigation],
    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      871: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    slidesPerView: 1,
    spaceBetween: 30,
  });
}

export default swiperFunc;
