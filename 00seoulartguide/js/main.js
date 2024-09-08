$(document).ready(function(){

    
    const exhibition_swiper = new Swiper('.exhibition .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {  /* 768px 이상이 되면 적용 */
                slidesPerView: 'auto',
                spaceBetween: 0, 
            },
            // 640: {    /* 640px 이상일때 적용 */
            //     slidesPerView: 3,
            //     spaceBetween: 20,
            // },
            // 768: {    /* 768px 이상일때 적용 */
            //     slidesPerView: 4,
            //     spaceBetween: 30,
            // },
            // 1024: {   /* 1024px 이상일때 적용 */
            //     slidesPerView: 5,
            //     spaceBetween: 40,
            // },
            // 1260: {    /* 1280px 이상일때 적용 */
            //     slidesPerView: 6,
            //     spaceBetween: 40,
            // },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
    });



    $('.news .tab > ul > li').on('click', function(){
        /* 모든 li에 있는 on클래스를 모두 지웠다가 */
        $('.news .tab > ul > li').removeClass('on')  
        /* click한 li에만 e다시 on클래스를 줌 */
        $(this).addClass('on')
    })

    $('.column .tab > ul > li').on('click', function(){
        /* 모든 li에 있는 on클래스를 모두 지웠다가 */
        $('.column .tab > ul > li').removeClass('on')  
        /* click한 li에만 e다시 on클래스를 줌 */
        $(this).addClass('on')
    })

})//$(document).ready



