// * Реализация бургер-меню
import { burger } from './templates/burger';

burger();

// * Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

if (document.querySelector('.modal-login')) {
    const btnLogin = document.querySelector('.modal-login')

    btnLogin.addEventListener('click', () => {
        const modal = new GraphModal('modal').open('modal-login');
    });

    //btnLogin.click();
}

if (document.querySelector('.modal-authorization')) {
    const btnAuthorization = document.querySelector('.modal-authorization')

    btnAuthorization.addEventListener('click', () => {
        const modal = new GraphModal('modal').open('modal-authorization');
    });

    // btnAuthorization.click();
}

// * Реализация табов
import GraphTabs from 'graph-tabs';
const menuLinks = document?.querySelectorAll('[data-menu-link]');

if (document.querySelector('[data-tabs="dealers"]')) {
    const tabs = new GraphTabs('dealers');
};
