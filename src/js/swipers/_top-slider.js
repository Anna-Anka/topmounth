import './../_libs'

export const topSlider = () => {
    if (document.querySelector('.top-slider__swiper')) {
        return new Swiper('.top-slider__swiper', {
            // centeredSlides: true,
            loop: true, 

            breakpoints: {

                1200: {
                    spaceBetween: -45,
                    initialSlide: 1,
                    slidesPerView: 1.50,

                },

                992: {
                    spaceBetween: -35,
                },

                767: {
                    slidesPerView: 1.06,
                    spaceBetween: -30,
                },

                320: {
                    slidesPerView: 1,
                    spaceBetween: -10,
                },
            },
        });
    }
};