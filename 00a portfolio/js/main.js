$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
        
    });

    $('header .gnb ul li.about').on('click', function(){
        swiper.slideTo(1);
    })
    $('header .gnb ul li.g_index').on('click', function(){
        swiper.slideTo(2);
    })
    $('header .gnb ul li.helloaqua').on('click', function(){
        swiper.slideTo(3);
    })
    $('header .gnb ul li.artguaide').on('click', function(){
        swiper.slideTo(4);
    })
    $('header .gnb ul li.donsung').on('click', function(){
        swiper.slideTo(5);
    })

    $('.index ul li.index_1').on('click', function(){
        swiper.slideTo(3);
    })
    $('.index ul li.index_2').on('click', function(){
        swiper.slideTo(4);
    })
    $('.index ul li.index_3').on('click', function(){
        swiper.slideTo(5);
    })

})