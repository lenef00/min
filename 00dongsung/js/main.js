$(document).ready(function(){

    AOS.init({
        once: true,
    });
    $(window).on('load', function () {
        AOS.refresh();
    });
    
    gsap.registerPlugin(ScrollTrigger);
    const sections =  document.querySelector(".best");  //좌우요소를 감싸는 요소
    const large =  document.querySelector(".best .cont_wrap .list_box"); //스크롤될 요소
    let mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => { 
        gsap.to(large, {
            y: () => (window.innerHeight - large.clientHeight - 20),  /* 실제 스크롤 값보다 더 스크롤 할 값 - 필요없으면 0 */
            ease: "none",
            scrollTrigger: {
                trigger: sections,
                pin: true,
                start: "top 30px", /* 좌우로 스크롤 될 동안의 위치, top top 상단에 고정, top 20% 상단에서 20% 떨어져서 */
                end: () => "+=500",
                scrub: 0.5, 
                markers: false,
                invalidateOnRefresh: true,
            }
        });
    })

})