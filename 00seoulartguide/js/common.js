$(document).ready(function(){

    let pc_mobile
    let window_w

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1200){
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

        // $('header .gnb .gnb_open').on('click',function(){
        //     if(pc_mobile == 'mobile'){
        //         $('header').addClass('mobile_open')
        //     }
        // })
        // $('header .gnb .gnb_close').on('click',function(){
        //     if(pc_mobile == 'mobile'){
        //         $('header').removeClass('mobile_open')
        //     }
        // })
        
})