import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

const thumbs = new Swiper('.hero__thumbs', {
  slidesPerView: 4,
  spaceBetween: 15,
  watchSlidesProgress: true,
});

new Swiper('.hero', {
  modules: [Navigation, Pagination, Thumbs],
  loop: true,

  navigation: {
    nextEl: '.hero__navigation_next',
    prevEl: '.hero__navigation_prev',
  },

  pagination: {
    el: '.hero__paginations',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="hero__pagination ${className}" type="button"></button>`;
    },
  },

  thumbs: {
    swiper: thumbs,
  },
});
