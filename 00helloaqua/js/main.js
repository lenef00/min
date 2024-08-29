$(document).ready(function(){
  const visual_swiper = new Swiper('.visual .swiper', {

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    loop: true, 
    navigation: { 
            nextEl: '.visual .btn_next',
            prevEl: '.visual .btn_prev',  
        },
  });

  const new_swiper = new Swiper('.new .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
    spaceBetween: 24, /* li와 li사이 - 제일 작은 여백 */
    breakpoints: {
      640: {  /* 640px 이상이 되면 적용 */
        spaceBetween: 30, 
      },
      1024: {  /* 1024px 이상이 되면 적용 */
        spaceBetween: 40,
      },
    },
    centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
    loop: true,

    navigation: {
      nextEl: '.new .btn_next',
      prevEl: '.new .btn_prev',
    },
  });
    

})
