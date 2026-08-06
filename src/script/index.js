const hamburger = document.getElementById('hamburger');
const dialog = document.getElementsByClassName('dialog')[0];
const category = document.getElementById('category');
const dialogMdLg = document.getElementsByClassName('dialog-md-lg')[0];
hamburger.addEventListener('click', () => {
    if (dialog.hasAttribute('hidden')) {
        dialog.removeAttribute('hidden');
    } else {
        dialog.setAttribute('hidden', true);
    }
});
category.addEventListener('click', () => {
    if (dialogMdLg.hasAttribute('hidden')) {
        dialogMdLg.removeAttribute('hidden');
    } else {
        dialogMdLg.setAttribute('hidden', true);
    }
});
