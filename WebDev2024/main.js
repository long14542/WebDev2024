
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (className) {
            if (index < 5) {
                return '<span class="' + className + '"></span>';
            }
            return ''; 
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 500,
    on: {
        slideChange: function () {

            if (this.activeIndex === 0) {
                this.navigation.$nextEl.addClass('swiper-button-disabled'); 
            } else {
                this.navigation.$nextEl.removeClass('swiper-button-disabled'); 
            }

            if (this.activeIndex === 4) {
                this.navigation.$prevEl.addClass('swiper-button-disabled'); 
            } else {
                this.navigation.$prevEl.removeClass('swiper-button-disabled'); 
            }

            if (this.activeIndex === 4) {
                this.autoplay.stop();
                setTimeout(() => {
                    this.slideTo(0); 
                    this.autoplay.start(); 
                }, 3000); 
            }
        },
    },
});
// Swiper for Reviews
var swiperReviews = new Swiper(".reviews-container", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 3, 
    spaceBetween: 20, 
    
});

  



