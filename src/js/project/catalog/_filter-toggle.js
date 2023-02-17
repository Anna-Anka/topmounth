export const filterToggle = () => {
    if (document.querySelector('.filter__toggle')) {
        const buttons = document.querySelectorAll('.filter__toggle');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.closest('.filter');
                filter.classList.toggle('filter--close');
            });
        });
    };
};