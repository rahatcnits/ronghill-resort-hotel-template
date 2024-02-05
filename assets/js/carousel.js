var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
