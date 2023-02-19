import { disableScroll } from '../../templates/disable-scroll';
import { enableScroll } from '../../templates/enable-scroll';

export const filters = () => {
    if (document.querySelector('.catalog__filters')) {

        const button = document.querySelector('.catalog__filters');
        const filters = document.querySelector('.catalog-navigation');
        const overlay = document.querySelector('.catalog .overlay');
        const buttonFilters = document.querySelector('.catalog__filters');

        const checkClass = () => {
            if (filters.classList.contains('catalog-navigation--open')) {
                button.setAttribute('aria-expanded', 'true');
                button.setAttribute('aria-label', 'Закрыть фильтры');
                disableScroll();
            } else {
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-label', 'Открыть фильтры');
                enableScroll();
            }
        }

        button.addEventListener('click', () => {
            filters.classList.toggle('catalog-navigation--open');
            overlay.classList.toggle('overlay--active');
            buttonFilters.classList.toggle('catalog__filters--active');
            checkClass();
        })

        overlay.addEventListener('click', () => {
            filters.classList.remove('catalog-navigation--open');
            overlay.classList.remove('overlay--active');
            buttonFilters.classList.remove('catalog__filters--active');
            checkClass();
        });
    };
};