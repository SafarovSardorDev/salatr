'use strict'



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30
      }

    }
  });

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector('.header_menu')
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle('menu-active');
});

  AOS.init({once: true, disable: 'mobile'});