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
   slidesPerView: 1,
   spaceBetween: 20,
   lazyLoading: true,
   mousewheel: {
      invert: true,
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 35
      },

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

// 100VH MOBILE FIX
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener, ('resize', () => {
   // We execute the same script as before
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
});