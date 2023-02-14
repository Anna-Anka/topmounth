import { disableScroll } from '../templates/disable-scroll';
import { enableScroll } from '../templates/enable-scroll';

export const burger = () => {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuLinks = document?.querySelectorAll('[data-menu-link]');
    const overlay = document?.querySelector('[data-menu-overlay]');

    burger?.addEventListener('click', (e) => {
        burger?.classList.toggle('burger-button--active');
        menu?.classList.toggle('burger-menu--active');

        if (menu?.classList.contains('burger-menu--active')) {
            burger?.setAttribute('aria-expanded', 'true');
            overlay?.classList.add('overlay--active');
            disableScroll();
        } else {
            burger?.setAttribute('aria-expanded', 'false');
            overlay?.classList.remove('overlay--active');
            enableScroll();
        }
    });

    overlay?.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
        enableScroll();
    });

    menuLinks?.forEach(el => {
        el.addEventListener('click', () => {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            burger.classList.remove('burger-menu--active');
            menu.classList.remove('burger-menu--active');
            enableScroll();
        });
    });
}
