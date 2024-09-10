$(document).ready(function(){

    
    const exhibition_swiper = new Swiper('.exhibition .swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            1300: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        loop: true,
        
    });

    const book_swiper = new Swiper('.book .swiper', {
        slidesPerView: "auto",
        spaceBetween: 15,
        breakpoints: {
            640: {
                spaceBetween: 30, 
            },
        },
        loop: true,

        
    });
    
    let tab_btn = $('.news .tab_area .tab_btn ul li')
    let tab_name
    let tab_cnt = $('.news .tab_area .tab_cnt div[role="tabpanel"]')
    let tab_cnt_parent = $('.news .tab_area .tab_cnt')

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
    

})//$(document).ready



