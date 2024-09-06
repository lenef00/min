$(document).ready(function(){

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
        	$("header").addClass("on");
        	$(this).siblings().find(".depth2").hide();
        	$(this).find(".depth2").stop().slideDown();		
        });
        $("header").mouseleave(function(){
        	$("header").removeClass("on");
        	$(".gnb_wrap .depth2").stop().slideUp();
        });
})