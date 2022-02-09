const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloseTimes = Array.from(document.getElementsByClassName("modal__close_times"));
const showSuccess = document.querySelector(".show-success");

modalMain.classList.add('modal_active');

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

modalCloseTimes.forEach((item) => {
    item.onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    };
});
