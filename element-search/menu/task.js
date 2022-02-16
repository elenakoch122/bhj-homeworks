const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach((item) => {
    let menuSub = item.closest('.menu__item').querySelector('.menu_sub');

    if (menuSub) {
        item.onclick = () => {
            let menuActive = document.querySelector('.menu_active');
            if (menuActive && menuActive !== menuSub) {
                menuActive.classList.remove('menu_active');
            }
            menuSub.classList.toggle('menu_active');
            return false;
        };
    }
});
