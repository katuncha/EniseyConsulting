const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.arrows__item--next',
    prevEl: '.arrows__item--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

  simulateTouch: true,
  grabCursor: true,

  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: ".swiper-slide"
  // },

  slidesPerView: "auto",

  watchOverflow: true,

  spaceBetween: 20,

  slidesPerGroup: 2,

  speed: 600,

  breakpoints: {
    320: {
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerGroup: 2,
    }
  },



});