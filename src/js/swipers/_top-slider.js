import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);

export const topSlider = () => {
    if (document.querySelector('.top-slider__swiper')) {
        return new Swiper('.top-slider__swiper', {
            centeredSlides: true,
            loop: true, 
            slidesPerView: 1.06,

            breakpoints: {

                1200: {
                    spaceBetween: -45,
                },

                992: {
                    spaceBetween: -35,
                },

                767: {
                    slidesPerView: 1.06,
                },

                320: {
                    slidesPerView: 1,
                    spaceBetween: -10,
                },
            },
        });
    }
};