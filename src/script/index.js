const hamburger = document.getElementById('hamburger');
const dialogMobile = document.getElementById('dialog_mobile');
hamburger.addEventListener('click', () => {
    if (dialogMobile.classList.contains('fade_hidden')) {
        dialogMobile.classList.remove('fade_hidden');
        dialogMobile.classList.add('fade');
    } else {
        dialogMobile.classList.add('fade_hidden');
        dialogMobile.classList.remove('fade');
    }
});
const category = document.getElementById('category');
const dialogTab = document.getElementById('dialogTab');
category.addEventListener('click', () => {
    if (dialogTab.hasAttribute('hidden')) {
        dialogTab.removeAttribute('hidden');
        category.classList.add('navbar__clickbg');
    } else {
        dialogTab.setAttribute('hidden', true);
        category.classList.remove('navbar__clickbg');
    }
});
const lastElement = document.getElementById('navbar_item_last');
const categoryBtn = document.getElementById('category_button');
lastElement.addEventListener('focusout', () => {
    categoryBtn.focus();
});
const lastElementMobile = document.getElementById('navbar_item_last_mobile');
lastElementMobile.addEventListener('focusout', () => {
    hamburger.focus();
});
