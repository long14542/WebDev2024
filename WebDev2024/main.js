
// navbar scroll

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

//New arrival swiper
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

// Login 
const loginPopup = document.getElementById("loginPopup");
const forgotPasswordPopup = document.getElementById("forgotPasswordPopup");
const signupPopup = document.getElementById("registerPopup");
const forgotPasswordLink = document.getElementById("forgotPassword"); 
const backToLoginButton = document.getElementById("backToLogin");
const signupLink = document.getElementById("signUpLink");
const signInLink = document.getElementById("signInLink");
const userIcon = document.querySelector('#user-icons');

userIcon.onclick = () => {
    loginPopup.style.display = 'flex';
    
};

forgotPasswordLink.addEventListener("click", function() {
  loginPopup.style.display = "none";
  forgotPasswordPopup.style.display = "flex";
});

backToLoginButton.addEventListener("click", function() {
  forgotPasswordPopup.style.display = "none";
  loginPopup.style.display = "flex";
});

signupLink.addEventListener("click", function() {
  loginPopup.style.display = "none";
  signupPopup.style.display = "flex";
});

signInLink.addEventListener("click", function() {
  signupPopup.style.display = "none";
  loginPopup.style.display = "flex";
});

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

var popup = document.getElementById('popup');
var closeBtn = document.getElementsByClassName("close-btn");
const pagination = document.querySelector('.swiper-pagination.pagiarrival');
const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');
// Function to show popup and pass product details
function showPopup(productImageSrc) {
    var productImage = document.getElementById('productImage');
    productImage.src = productImageSrc;
    popup.style.display = 'block'; 
    pagination.style.display = 'none';
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
}
// Close popup when clicking the close button
closeBtn.onclick = function() {
    
    popup.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === loginPopup || e.target === forgotPasswordPopup || e.target === signupPopup||e.target == popup) {
        e.target.style.display = 'none';
        // Show the Swiper pagination and navigation buttons again
        pagination.style.display = 'block';
        nextButton.style.display = 'block';
        prevButton.style.display = 'block';
    }
};



  