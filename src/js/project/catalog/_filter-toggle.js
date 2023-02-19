export const filterToggle = () => {
    if (document.querySelector('.filter__toggle')) {
        const buttons = document.querySelectorAll('.filter__toggle');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.closest('.filter');

                const checkClass = () => {
                    if (button.classList.contains('filter__toggle--close')) {
                        button.setAttribute('aria-expanded', 'false');
                        button.setAttribute('aria-label', 'Открыть');
                        disableScroll();
                    } else {
                        button.setAttribute('aria-expanded', 'true');
                        button.setAttribute('aria-label', 'Закрыть');
                        enableScroll();
                    }
                };

                filter.classList.toggle('filter--close');
                button.classList.toggle('filter__toggle--close');
                checkClass();
            });
        });
    };
};