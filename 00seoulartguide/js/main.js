$(document).ready(function(){
    
    
    const exhibition_swiper = new Swiper('.exhibition .swiper', {
        slidesPerView: "auto",
        spaceBetween: 16,
        breakpoints: {
            
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
    
    let news_btn = $('.news .tab_area .news_btn ul li')
    let tab_name
    let tab_cnt = $('.news .tab_area .tab_cnt div[role="tabpanel"]')
    let tab_cnt_parent = $('.news .tab_area .tab_cnt')

    news_btn.on('click', function(){
        news_btn.removeClass('active')
        $(this).addClass('active')
        news_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tab_name = $(this).attr('aria-controls')
        tab_name = '#'+tab_name //id 선택자를 추가로 삽입
        console.log(tab_name)
        tab_cnt.removeClass('active')
        tab_cnt_parent.find(tab_name).addClass('active')
    })

    let column_btn = $('.column .tab_area .column_btn ul li')
    let c_tab_name
    let column_cnt = $('.column .tab_area .column_cnt div[role="tabpanel"]')
    let column_cnt_parent = $('.column .tab_area .column_cnt')

    column_btn.on('click', function(){
        column_btn.removeClass('active')
        $(this).addClass('active')
        column_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        c_tab_name = $(this).attr('aria-controls')
        c_tab_name = '#'+c_tab_name //id 선택자를 추가로 삽입
        console.log(c_tab_name)
        column_cnt.removeClass('active')
        column_cnt_parent.find(c_tab_name).addClass('active')
    })

    let book_btn = $('.book .tab_area .book_btn ul li')
    let b_tab_name
    let book_cnt = $('.book .tab_area .book_cnt div[role="tabpanel"]')
    let book_cnt_parent = $('.book .tab_area .book_cnt')

    book_btn.on('click', function(){
        book_btn.removeClass('active')
        $(this).addClass('active')
        book_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        b_tab_name = $(this).attr('aria-controls')
        b_tab_name = '#'+b_tab_name //id 선택자를 추가로 삽입
        console.log(b_tab_name)
        book_cnt.removeClass('active')
        book_cnt_parent.find(b_tab_name).addClass('active')
    })

    let community_btn = $('.community .tab_area .community_btn ul li')
    let com_tab_name
    let community_cnt = $('.community .tab_area .community_cnt div[role="tabpanel"]')
    let community_cnt_parent = $('.community .tab_area .community_cnt')

    community_btn.on('click', function(){
        community_btn.removeClass('active')
        $(this).addClass('active')
        community_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        com_tab_name = $(this).attr('aria-controls')
        com_tab_name = '#'+com_tab_name //id 선택자를 추가로 삽입
        console.log(com_tab_name)
        community_cnt.removeClass('active')
        community_cnt_parent.find(com_tab_name).addClass('active')
    })

})//$(document).ready





