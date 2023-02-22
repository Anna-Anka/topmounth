export const filterToggle = () => {
    if (document.querySelector('.filter__toggle')) {

        const buttons = document.querySelectorAll('.filter__toggle');

        buttons.forEach(button => {
            
            button.addEventListener('click', () => {
                const filter = button.closest('.filter');
                const box = filter.querySelector('.filter__box');
                box.classList.toggle('filter__box--close');
                button.classList.toggle('filter__toggle--close');
                
                if (button.classList.contains('filter__toggle--close')) {
                    button.setAttribute('aria-expanded', 'false');
                    button.setAttribute('aria-label', 'Открыть');

                } else {
                    button.setAttribute('aria-expanded', 'true');
                    button.setAttribute('aria-label', 'Закрыть');
                }

                if (box.classList.contains('filter__box--close')) {
                    box.style.maxHeight = '0';
                    
                } else {
                    box.style.maxHeight = 'none';
                };
            });
        });
    };
};