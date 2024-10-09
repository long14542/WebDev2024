
// swiper for new arrival

let search = document.querySelector('.search-box');

document.querySelector('#search-icons').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');


}


let cart = document.querySelector('.cart');

document.querySelector('#cart-icons').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');


}


let user = document.querySelector('.user');

document.querySelector('#user-icons').onclick = () =>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

window.onscroll = () =>{
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

//Navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll',( )=>{
    header.classList.toggle('shadow', window.scrollY > 0);l
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false, 
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.pagiarrival',
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
        el: ".reviews-container .swiper-pagination",
        clickable: false,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 3, 
    spaceBetween: 20, 
    
});
// Get popup elements
var popup = document.getElementById('popup');
var closeBtn = document.getElementsByClassName("close-btn");

// Function to show popup and pass product details
function showPopup(productImageSrc) {
    var productImage = document.getElementById('productImage');
    productImage.src = productImageSrc; // Set product image in the popup
    popup.style.display = 'block'; // Show popup
}

// Close popup when clicking the close button
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Close popup when clicking outside of the content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}


  