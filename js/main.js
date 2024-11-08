$(document).ready(function(){

  var mySwiper = new Swiper ('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      
    },
    speed: 600,
    pagination: {
      el: 'swiper-pagination',
      // type: 'fraction',
    },
    navigation: {
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev',
    },
  })
})

// Card Swiper Slider>>>>>>==
var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
      });

// Thumbs Gallery Swiper>>>>===
