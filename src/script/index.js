const hamburger = document.getElementById('hamburger');
const dialogMobile = document.getElementById('dialog_mobile');
const whiteColor = 'white';
const darkBlueColor = '#002f52';
const cyanBlueColor = '#326589';
hamburger.addEventListener('click', () => {
    if (dialogMobile.hasAttribute('hidden')) {
        dialogMobile.removeAttribute('hidden');
        hamburger.style.color = whiteColor;
    } else {
        dialogMobile.setAttribute('hidden', 'true');
        hamburger.style.background = whiteColor;
        hamburger.style.color = 'darkBlueColor';
    }
});
const category = document.getElementById('category');
const dialogTab = document.getElementById('dialogTab');
category.addEventListener('click', () => {
    if (dialogTab.hasAttribute('hidden')) {
        dialogTab.removeAttribute('hidden');
        category.style.background = `linear-gradient(97.54deg, ${darkBlueColor} 35.49%, ${cyanBlueColor} 165.37%)`;
        category.style.color = whiteColor;
    } else {
        dialogTab.setAttribute('hidden', true);
        category.style.background = whiteColor;
        category.style.color = darkBlueColor;
    }
});
