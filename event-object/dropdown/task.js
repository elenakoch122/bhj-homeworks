// Для одной кнопки

// const dropdownValue = document.querySelector('.dropdown__value');
// const dropdownList = document.querySelector('.dropdown__list');
// const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

// const dropdownShowHide = () => {
//     dropdownList.classList.toggle('dropdown__list_active');
// };

// dropdownValue.addEventListener('click', dropdownShowHide);

// dropdownItem.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         event.preventDefault();
//         dropdownValue.textContent = item.textContent;
//         dropdownList.classList.remove('dropdown__list_active');
//     });
// });


// Для нескольких кнопок

const cards = Array.from(document.querySelectorAll('.card'));

cards.forEach((card) => {
    const dropdownValue = card.querySelector('.dropdown__value');
    const dropdownList = card.querySelector('.dropdown__list');
    const dropdownItem = Array.from(card.querySelectorAll('.dropdown__item'));
    
    const dropdownShowHide = () => {
        dropdownList.classList.toggle('dropdown__list_active');
    };
    
    dropdownValue.addEventListener('click', dropdownShowHide);
    
    dropdownItem.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownValue.textContent = item.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        });
    });
});
