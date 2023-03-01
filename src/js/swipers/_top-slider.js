import './../_libs'

export const topSlider = () => {
    if (document.querySelector('.top-slider__swiper')) {
        return new Swiper('.top-slider__swiper', {
            loop: true, 
            infinite: true,
            speed: 1000,
            slidesPerGroup: 1,
            centeredSlides: true,
            effect: 'slide',

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.top-slider__button--next',
                prevEl: '.top-slider__button--prev',
            },

            breakpoints: {

                1400: {
                    spaceBetween: -35,
                    slidesPerView: 1.47,
                },

                1200: {
                    spaceBetween: -25,
                    slidesPerView: 1.47,
                },

                992: {
                    spaceBetween: -35,
                    slidesPerView: 1.06,
                },

                767: {
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