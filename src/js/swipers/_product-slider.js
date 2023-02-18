import './../_libs'

export const productSlider = () => {
    if (document.querySelector('.product-about__main')) {
        const sliderMain = document.querySelector('.slider-main');
        const sliderNav = document.querySelector('.slider-nav');

        const swiperSmall = new Swiper(sliderNav, {
            slidesPerView: 4,
            spaceBetween: 12,
            loopedSlides: 4,
            freeMode: true,
            direction: 'vertical',
        });

        const swiperMain = new Swiper(sliderMain, {
            spaceBetween: 10,
            loopedSlides: 4,

            thumbs: {
                swiper: swiperSmall,
            },

            navigation: {
                nextEl: '.product-about__button--next',
                prevEl: '.product-about__button--prev',
            },
        });
    };
};