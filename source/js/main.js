import initMenu from './menu.js';
import initLeaflet from './map.js';
import initRangeBar from './range-bar.js';

initMenu();
initLeaflet();
initRangeBar();


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
