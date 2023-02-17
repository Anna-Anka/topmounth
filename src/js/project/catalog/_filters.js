export const filters = () => {
    if (document.querySelector('.catalog__filters')) {
        const button = document.querySelector('.catalog__filters');
        const filters = document.querySelector('.catalog-navigation');
        const overlay = document.querySelector('.catalog .overlay');
        const buttonFilters = document.querySelector('.catalog__filters');

        button.addEventListener('click', () => {
            filters.classList.toggle('catalog-navigation--open');
            overlay.classList.toggle('overlay--active');
            buttonFilters.classList.toggle('catalog__filters--active');
        })

        overlay.addEventListener('click', () => {
            filters.classList.remove('catalog-navigation--open');
            overlay.classList.remove('overlay--active');
            buttonFilters.classList.remove('catalog__filters--active');
        })
    };
};