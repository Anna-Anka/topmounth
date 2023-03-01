import { filterToggle } from "./catalog/_filter-toggle";
filterToggle();

import { filters } from "./catalog/_filters";
filters();

if (document.querySelector('.title')) {
    const root = document.documentElement;
    const title = document.querySelectorAll('.title');
    title.forEach(element => {
        let height = element.clientHeight;
        root.style.setProperty('--height', height + "px");

        window.addEventListener('resize', () => {
            height = element.clientHeight;
            root.style.setProperty('--height', height + "px");
        })
    });
}