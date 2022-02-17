const tab = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

function onclick() {
    tab.forEach((elem) => elem.classList.remove('tab_active'));
    tabContents.forEach((elem) => elem.classList.remove('tab__content_active'));
    this.classList.add('tab_active');
    let idx = tab.indexOf(this);
    tabContents[idx].classList.add('tab__content_active');
};

tab.forEach((item) => item.addEventListener('click', onclick));
