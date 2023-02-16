import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);

export const newSlider = () => {
    if (document.querySelector('.new-products__swiper')) {
        return new Swiper('.new-products__swiper', {
            spaceBetween: 20,
            navigation: {
                nextEl: '.new-products__button--next',
                prevEl: '.new-products__button--prev',
            },

            breakpoints: {

                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },

                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },

                580: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },

                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
            },
        });
    }
};