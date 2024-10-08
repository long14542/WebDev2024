
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false, 
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 500,
    on: {
        slideChange: function () {
            if (this.activeIndex === 4) {
                this.autoplay.stop(); 

                setTimeout(() => {
                    this.slideTo(0); 
                    this.autoplay.start(); 
                }, 3000); 
            }
        },
        init: function () {
            checkNavigationState(this);
        },
        slideChange: function () {
            checkNavigationState(this);
        },
    },
});

function checkNavigationState(swiper) {
    if (swiper.activeIndex === 0) {
        swiper.navigation.prevEl.classList.add('swiper-button-disabled');
    } else {
        swiper.navigation.prevEl.classList.remove('swiper-button-disabled');
    }

    if (swiper.activeIndex === 4) {
        swiper.navigation.nextEl.classList.add('swiper-button-disabled');
    } else {
        swiper.navigation.nextEl.classList.remove('swiper-button-disabled');
    }
}
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

  



