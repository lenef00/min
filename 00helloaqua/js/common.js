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

})