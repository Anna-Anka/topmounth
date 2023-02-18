import './../_libs'

export const previewProductsSlider = () => {
    if (document.querySelector('.preview-products__swiper')) {
        return new Swiper('.preview-products__swiper', {
            spaceBetween: 20,
            navigation: {
                nextEl: '.preview-products__button--next',
                prevEl: '.preview-products__button--prev',
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