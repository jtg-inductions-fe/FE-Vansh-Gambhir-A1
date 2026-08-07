const hamburger = document.getElementsByClassName(
    'navbar__hamburger--open-dialog',
)[0];
const dialogMobile = document.getElementsByClassName(
    'navbar__dialog--mobile',
)[0];
hamburger.addEventListener('click', () => {
    if (dialogMobile.hasAttribute('hidden')) {
        dialogMobile.removeAttribute('hidden');
        hamburger.style.color = 'white';
    } else {
        dialogMobile.setAttribute('hidden', 'true');
        hamburger.style.background = 'white';
        hamburger.style.color = '#002f52';
    }
});
const category = document.getElementsByClassName(
    'navbar__navigationitem--heading',
)[0];
const dialogTab = document.getElementsByClassName('navbar__dialog--tablet')[0];
category.addEventListener('click', () => {
    if (dialogTab.hasAttribute('hidden')) {
        dialogTab.removeAttribute('hidden');
        category.style.background =
            'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)';
        category.style.color = 'white';
    } else {
        dialogTab.setAttribute('hidden', true);
        category.style.background = 'white';
        category.style.color = '#002f52';
    }
});
