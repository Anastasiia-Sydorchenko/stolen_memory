// Import jQuery module (npm i jquery)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// import Swiper JS
import Swiper from 'swiper';

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

const swiper = new Swiper('.people_gallery__slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 2,
   spaceBetween: 20,
   lazyLoading: true,
   mousewheel: {
      invert: true,
   },
   breakpoints: {   
      991: {
         slidesPerView: 3,
         spaceBetween: 35
      },

      1599: {
         slidesPerView: 4,
         spaceBetween: 35
      },
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
 
});

// SLOW ANCHOR BUTTON to-down
var $page = $('html, body');
 $('a[href*="#"]').click(function() {
     $page.animate({
         scrollTop: $($.attr(this, 'href')).offset().top
     }, 800);
     return false;
});