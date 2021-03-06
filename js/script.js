"use strict";

if(document.querySelector(".mainslider__container")){
    new Swiper('.mainslider__container', {
        speed: 800,
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.mainslider__btn-next',
            prevEl: '.mainslider__btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            1300: {
                slidesPerView: 1.6,
            }
        }
    });
}

/////////////////////////////////////////////////////////////////////////////

const menuBody = document.querySelector(".menu__body");
const logo = document.querySelector(".header__bottom-logo");
const headerTop = document.querySelector(".header__top");
const headerBottom = document.querySelector(".header__bottom");
const headerPhone = document.querySelector(".header__bottom-phone");

let md3 = window.matchMedia('(max-width: 767.98px)');

mediaQuery3(md3);

function mediaQuery3(e) {
    if (e.matches) {
        headerTop.append(logo);
        headerTop.append(headerPhone);
    } else {
        headerBottom.prepend(headerPhone);
        headerPhone.after(logo);
    }
  }
  
md3.addEventListener('change', mediaQuery3);

/////////////////////////////////////////////////////////////////////////////

const menuIcon = document.querySelector(".menu__icon");

menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    document.body.classList.toggle("_lock");
});