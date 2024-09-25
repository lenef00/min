$(document).ready(function(){
    const visual_popup_swiper = new Swiper('.visual_popup .swiper', { 

        effect: "fade",

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,

        navigation: { 
            nextEl: '.visual_popup .btn_next',
            prevEl: '.visual_popup .btn_prev',  
        },

    });

    let tab_btn = $('.thema .tab_area .tab_btn ul li')
    let tab_name
    let tab_cnt = $('.thema .tab_area .tab_cnt div[role="tabpanel"]')
    let tab_cnt_parent = $('.thema .tab_area .tab_cnt')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')
        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tab_name = $(this).attr('aria-controls')
        tab_name = '#'+tab_name //id 선택자를 추가로 삽입
        console.log(tab_name)
        tab_cnt.removeClass('active')
        tab_cnt_parent.find(tab_name).addClass('active')
    })

    const thema_swiper = new Swiper('.thema #panel_01 .swiper', {
        slidesPerView: 3,
        spaceBetween: 32, 
        breakpoints: {
            
        },
        navigation: {
            nextEl: '.thema #panel_01 .btn_next',
            prevEl: '.thema #panel_01 .btn_prev',
        },
    });
    const thema2_swiper = new Swiper('.thema #panel_02 .swiper', {
        slidesPerView: 3,
        spaceBetween: 32,
        breakpoints: {
        },
        navigation: {
            nextEl: '.thema #panel_02 .btn_next',
            prevEl: '.thema #panel_02 .btn_prev',
        },
    });
    const thema3_swiper = new Swiper('.thema #panel_03 .swiper', { 
        slidesPerView: 3,
        spaceBetween: 32,
        breakpoints: {
        },
        navigation: {
            nextEl: '.thema #panel_03 .btn_next',
            prevEl: '.thema #panel_03 .btn_prev',
        },
    });
    const thema4_swiper = new Swiper('.thema #panel_04 .swiper', { 
        slidesPerView: 3,
        spaceBetween: 32,
        breakpoints: {
        },
        navigation: {
            nextEl: '.thema #panel_04 .btn_next',
            prevEl: '.thema #panel_04 .btn_prev',
        },
    });
 
})