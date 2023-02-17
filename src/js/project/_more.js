export const more = () => {
    if (document.querySelector('.more')) {
        const more = document.querySelectorAll('.more')
        more.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('more--active');
            });
        });
    };
};