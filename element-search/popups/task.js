const modal = Array.from(document.getElementsByClassName("modal"));
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = Array.from(document.getElementsByClassName("modal__close"));
const showSuccess = document.querySelector(".show-success");

modalMain.classList.add('modal_active');

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
        if (modalClose[i] === showSuccess) {
            modalSuccess.classList.add("modal_active");
        } else {
            modal.forEach((item) => {
                item.classList.remove('modal_active');
            });
        }
    };
}
