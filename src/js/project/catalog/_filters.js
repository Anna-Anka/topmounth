import { disableScroll } from '../../templates/disable-scroll';
import { enableScroll } from '../../templates/enable-scroll';

export const filters = () => {
    if (document.querySelector('.catalog__filters')) {

        const button = document.querySelector('.catalog__filters');
        const filters = document.querySelector('.catalog-navigation');
        const buttonClose = document.querySelector('.catalog-navigation__close');
        const overlay = document.querySelector('.catalog .overlay');


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
            checkClass();
        });

        overlay.addEventListener('click', () => {
            filters.classList.remove('catalog-navigation--open');
            overlay.classList.remove('overlay--active');
            checkClass();
        });

        buttonClose.addEventListener('click', () => {
            filters.classList.remove('catalog-navigation--open');
            overlay.classList.remove('overlay--active');
            checkClass();
        })
    };
};