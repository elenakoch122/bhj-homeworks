// Вариант с setInterval

// const divReveal = Array.from(document.querySelectorAll('.reveal'));

// divReveal.forEach((item) => {
//     setInterval(() => {
//         const {top, bottom} = item.getBoundingClientRect();
//         // console.log(divReveal.indexOf(item) + ": top - " + top + ', bottom - ' + bottom);
//         if (bottom < 0 || top > window.innerHeight) {
//             item.classList.remove('reveal_active');
//         } else {
//             item.classList.add('reveal_active');
//         }
//     }, 0);
// });


// Вариант со scroll

const divReveal = Array.from(document.querySelectorAll('.reveal'));

document.onscroll = () => {
    divReveal.forEach((item) => {
        const {top, bottom} = item.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            item.classList.remove('reveal_active');
        } else {
            item.classList.add('reveal_active');
        }
    });
};

