$(document).ready(function(){

    
    const exhibition_swiper = new Swiper('.exhibition .swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            1024: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,
        
    });

    const book_swiper = new Swiper('.book .swiper', {
        slidesPerView: "auto",
        spaceBetween: 30,
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 30, 
            },
            // 1024: {  /* 1024px 이상이 되면 적용 */
            //     spaceBetween: 40,
            // },
        },
        loop: true,
    });

    $('.news .tab > ul > li').on('click', function(){
        $('.news .tab > ul > li').removeClass('on')
        $(this).addClass('on')
    })

    $('.column .tab > ul > li').on('click', function(){
        $('.column .tab > ul > li').removeClass('on') 
        $(this).addClass('on')
    })

    $('.book .tab > ul > li').on('click', function(){
        $('.book .tab > ul > li').removeClass('on')  
        $(this).addClass('on')
    })

    $('.community .tab > ul > li').on('click', function(){
        $('.community .tab > ul > li').removeClass('on')  
        $(this).addClass('on')
    })


     $('footer .family_site .family_open').on('click', function(){
        $('footer .family_site').addClass('open')
        $('footer .family_site ul').slideDown()
    })
    $('footer .family_site .family_close').on('click', function(){
        $('footer .family_site').removeClass('open')
        $('footer .family_site ul').slideUp()
    })
    

})//$(document).ready



