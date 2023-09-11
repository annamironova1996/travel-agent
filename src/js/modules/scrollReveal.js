import ScrollReveal from "scrollreveal";

ScrollReveal({
  distance: "60px",
  duration: 2800,
});

function scrollRevealFunc() {
  ScrollReveal().reveal(`.header, .partners, .popular__title`, {
    origin: "top",
  });

  ScrollReveal().reveal(`.discover__picture-hint, .discover__title`, {
    origin: "left",
  });

  ScrollReveal().reveal(
    `.discover__text, .discover__picture-scroll, .popular__controls`,
    {
      origin: "right",
    }
  );

  ScrollReveal().reveal(`.discover__form, .discover__picture-img`, {
    origin: "bottom",
  });
}

export default scrollRevealFunc;
