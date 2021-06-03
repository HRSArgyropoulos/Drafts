/* Initialize new swiper slider */
const swiper = new Swiper('.swiper-container', {
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
    navigation: false,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    }
});