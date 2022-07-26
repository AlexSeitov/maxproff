import Swiper, { Autoplay, Navigation, Thumbs } from 'swiper';
import 'swiper/css';

/* eslint-disable no-unused-vars */

export default function multipleSliders() {
  const sliders = document.querySelectorAll('.works-slider');
  const thumbs = document.querySelectorAll('.works-thumbs');

  sliders.forEach((slider, i) => {
    const worksThumbs = new Swiper(thumbs[i], {
      modules: [Autoplay],
      loop: true,
      speed: 700,
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'vertical',
      observer: true,
      observeParents: true
    });

    const worksSlider = new Swiper(slider, {
      modules: [Navigation, Thumbs, Autoplay],
      loop: true,
      speed: 700,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: worksThumbs
      }
    });
  });
}
