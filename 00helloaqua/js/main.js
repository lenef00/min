$(document).ready(function(){
  const visual_swiper = new Swiper('.visual .swiper', {

    autoplay: {
      delay: 3200,
      disableOnInteraction: true,
    },
    loop: true, 
    navigation: { 
            nextEl: '.visual .btn_next',
            prevEl: '.visual .btn_prev',  
        },
  });
  const content_swiper = new Swiper('.content .swiper', { 
    slidesPerView: "auto",
    spaceBetween: 24,
    breakpoints: {
      1024: {
        spaceBetween: 24,
      },
    },
    centeredSlides: false ,
    loop: false,
	
});

  const new_swiper = new Swiper('.new .swiper', {
    slidesPerView: "auto",
    spaceBetween: 12,
    breakpoints: {
      1024: { 
        spaceBetween: 24,
      },
    },
    centeredSlides: false, 
    loop: true,

    navigation: {
      nextEl: '.new .btn_next',
      prevEl: '.new .btn_prev',
    },
  });
    
  $('.quick .top').on('click', function(){
    $('html, body').animate({
      scrollTop : 0
    }, 500)
  })

  
})
