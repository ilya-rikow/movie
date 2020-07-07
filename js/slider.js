const slider = document.querySelector('.swiper-container');
const sliderCard = document.querySelector('.slider-container');

var mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	slidesOffsetAfter: 40,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    },
    breakpoints:{
    	480:{
    		slidesPerView: 2,
    		spaceBetween: 10,
    		slidesOffsetAfter: 0,
    	},
    	576:{
    		slidesPerView: 2,
    		spaceBetween: 10,
    	},
    	768:{
    		slidesPerView: 3,
    		spaceBetween: 20,
    	}
    }

});




var mySwiper1;

function mobileSlider() {
  if (window.innerWidth <= 767 && sliderCard.dataset.mobile == 'false') {
  mySwiper1 = new Swiper(sliderCard, {
      slidesPerView: 1,
      spaceBetween: 0,
      slideClass: 'card-item',
      loop: false,
      centeredSlides: true,
       breakpoints:{
    	321:{
    		slidesPerView: 1,
    		spaceBetween: 30,
    		}
    	}
    });

      sliderCard.dataset.mobile = 'true';

  }

  if (window.innerWidth > 767) {
    sliderCard.dataset.mobile = 'false';
    if (sliderCard.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});