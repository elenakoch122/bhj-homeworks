const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menu = Array.from(document.querySelectorAll(".menu"));

menuLink.forEach((item) => {
    item.onclick = () => {
        let notLinked = false;
        menu.forEach((element) => {
            element.classList.remove('menu_active');
            if (element.parentElement === item.parentElement) {
                element.classList.add('menu_active');
                notLinked = true;            
            }
        });
        if (notLinked) {
            return false;
        }
    };
});
