import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

let elems = document.getElementsByClassName('splide');
for (let i = 0; i < elems.length; i++) {
    let splide = new Splide(elems[i], {
        type: 'loop',
        height: '294px',
        focus: 'center',
        autoWidth: true,
        gap: '50px',
        mediaQuery: 'min',
        breakpoints: {
            1024: {
                width: '80%',
            },
            1728: {
                width: '90%',
            },
        },
    });

    splide.mount();
}
