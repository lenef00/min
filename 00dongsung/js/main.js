$(document).ready(function(){

    window.addEventListener(
        'scroll',
        throttle(() => {
            handleScroll($aosElements, options.once);
      }, options.throttleDelay)
    );
    
})