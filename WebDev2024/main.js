
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

// Hàm để đóng tất cả các popup
function closeAllPopups() {
    loginPopup.style.display = 'none';
    forgotPasswordPopup.style.display = 'none';
    signupPopup.style.display = 'none';
}

// Xử lý sự kiện click trên toàn bộ cửa sổ
window.onclick = function(event) {
    // Kiểm tra nếu người dùng nhấp bên ngoài popup
    if (event.target === loginPopup || event.target === forgotPasswordPopup || event.target === signupPopup) {
        closeAllPopups(); // Gọi hàm để đóng tất cả popup
    }
};

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







  