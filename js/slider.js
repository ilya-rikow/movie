const slider = document.querySelector('.swiper-container');
const sliderCard = document.querySelector('.slider-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 3,
	spaceBetween: 5,
	loop: false,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})





/*let mySwiper1;

function mobileSlider() {
  if (window.innerWidth <= 600 && sliderCard.dataset.mobile == 'false') {
    mySwiper1 = new Swiper(sliderCard, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      slideClass: 'card-item',
    });

      sliderCard.dataset.mobile = 'true';
  }

  if (window.innerWidth > 600) {
    sliderCard.dataset.mobile = 'false';
    if (sliderCard.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});*/