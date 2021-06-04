/* Initialize new swiper slider */
const swiper = new Swiper('.main-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 2000,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: false
});

/* Hotels slider */

const roomsSwiper = new Swiper('.sections-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 50,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* modification for buttons */
