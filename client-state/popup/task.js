const subscribeModal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close_times');

if (document.cookie === '') {
    subscribeModal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'subscribeModal=close';
});
