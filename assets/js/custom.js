wow = new WOW({
    animateClass: 'animated',
    boxClass: 'wow'
});

wow.init();

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


$(window).scroll(function(e) {
    console.log($('#home')[0].offsetHeight);
    console.log(e.currentTarget.scrollY);
    var tinggiHome = $('#home')[0].offsetHeight;
    var tinggiScroll = e.currentTarget.scrollY;
    var btnToTop = $('.to-top');
    var btnToBottom = $('.to-bottom');

    if (tinggiScroll >= tinggiHome) {
        btnToTop.show();
        btnToBottom.hide();
    } else{
        btnToTop.hide();
        btnToBottom.show();
    }

 });