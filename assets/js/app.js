// Navbar
const navbtn = () => {
  document.getElementById("navlinks").classList.toggle("max-md:top-0");
  document.getElementById("navlinks").classList.toggle('max-md:left-0');
  document.getElementById("roated-one").classList.toggle("rotate-45");
  document.getElementById("roated-two").classList.toggle("-rotate-45");
  document.getElementById("transperent").classList.toggle("opacity-0");
  document.body.classList.toggle("overflow-hidden")
}
// slider-one
$(".slider-parent-one").slick({
  dots: true,
  infinite: true,
  speed: 2000,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// slider-two
$(".slick-parent-two").slick({
  infinite: true,
  slidesToShow: 7.99,
  slidesToScroll: 2,
  nextArrow: ".next",
  prevArrow: ".prev",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});
