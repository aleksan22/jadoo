let openMenu = document.querySelector('.header__dots');
let menu = document.querySelector('.header__list');
document.querySelector('active');
let closeMenu = document.querySelector('.header__list-close')
let body = document.querySelector('body')

openMenu.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.add('hidden')
})
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    body.classList.remove('hidden')
})




const slider = document.querySelector('.slider');

let mySwiper = new Swiper(slider, {
    effect: "coverflow",
    // effect: 'creative',
	slidesPerView: 1.5,
	spaceBetween: 3,
	loop: true,
    breakpoint:{
        768:{
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
      },
    // creativeEffect: {
    //     next: {
    //         // will set `translateX(100%)` on next slides
    //         translate: ['110%', '110%', 0],
    //       },
    // }
    coverflowEffect: {
        rotate: -2,
        scale: 0.5,
        stretch: "-30%",
        depth: 50,
        modifier: -0.5,
        slideShadows: true
      },
     
})
// $(document).ready(function(){
//     $('.center').slick({
//         centerMode: true,
//         centerPadding: '60px',
//         slidesToShow: 3,

//     });
//   });
const swiper = document.querySelector('.swiper-container');
let mySlider = new Swiper(swiper, {
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    slideClass: 'slide',
    wrapperClass: 'slides-wrap',
    slidesPerView: 3,
    effect: "coverflow",
    coverflowEffect: {
        // rotate: -2,
        scale: 0.5,
        stretch: "-10%",
        depth: 100,
        modifier: -0.5,
        slideShadows: false
      },
})

document.querySelector('.header__link');
let popup = document.querySelector('.popup')
let content = document.querySelector('.popup__content');
let popupClose = document.querySelector('.popup__content-btn')
document.querySelector('popup--active');
document.querySelector('active');

document.querySelector('.header__link').addEventListener('click', () => {
    popup.classList.add('popup--active')
    content.classList.add('active')
})
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup--active')
    content.classList.remove('active')
})
popup.addEventListener('click', () => {
    popup.classList.remove('popup--active')
    content.classList.remove('active')
})