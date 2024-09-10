$(document).ready(function(){

    let pc_mobile
    let window_w

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1182){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }

    resize_chk()
    $(window).resize(function(){
        resize_chk() 
    })

    $(window).scroll(function(){
        $(window).scrollTop()
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    })

    $(".gnb_wrap > ul > li").mouseover(function(){
        if(pc_mobile == 'pc'){
            $("header").addClass("on");
            $(this).siblings().find(".depth2").hide();
            $(this).find(".depth2").stop().slideDown();	
        }
            
    });
    $("header").mouseleave(function(){
        if(pc_mobile == 'pc'){
            $("header").removeClass("on");
            $(".gnb_wrap .depth2").stop().slideUp();  
        }
    });
    

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $('header').addClass('fixed')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();
            $(this).parent().toggleClass('open')
        }
    });

    $('footer .family_site .family_open').on('click', function(){
        $('footer .family_site').addClass('open')
        $('footer .family_site ul').slideDown()
    })
    $('footer .family_site .family_close').on('click', function(){
        $('footer .family_site').removeClass('open')
        $('footer .family_site ul').slideUp()
    })
        
})