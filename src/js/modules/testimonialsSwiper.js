import Swiper from "swiper/bundle";
import "swiper/css/bundle";

let mySwiper;
let swiperHorizontal;

const breakpoint = window.matchMedia("(max-width:1023px)");

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    swiperHorizontal = new Swiper("#testimonials-horizontal-swiper", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 32,
      grabCursor: true,
      a11y: false,
      freeMode: true,
      loop: true,
    });
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    mySwiper = new Swiper(".testimonials-col", {
      direction: "vertical",
      slidesPerView: "auto",
      spaceBetween: 32,
      grabCursor: true,
      a11y: false,
      freeMode: true,
      loop: true,
    });
    if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);

    return;
  }
};



breakpoint.addListener(breakpointChecker);
breakpointChecker();
console.log(breakpoint.matches);
export default swiperFunction;
