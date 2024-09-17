$(document).ready(function(){

    // console = {};
    // console.log = function(){};
    // console.warn = function(){};
    // console.error = function(){};

    let pc_mobile 
    let window_w 

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){
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

    $('header .gnb_wrap .depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만
                $('header').addClass('menu_over')
                $('header .gnb_wrap .depth1 > li').removeClass('on')
                $(this).addClass('on')//마우스를 오버한 li만
            }     
        })
        $('header').on('mouseleave', function(){
            if(pc_mobile == 'pc'){ //pc일 경우에만
                $('header').removeClass('menu_over')
                $('header .gnb_wrap .depth1 > li').removeClass('on')
            }
        })

})