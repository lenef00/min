$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
        
    });

})