// Исходное задание

// const fontSizes = Array.from(document.querySelectorAll('.font-size'));
// const book = document.querySelector('.book');

// function changeFontSize(event) {
//     event.preventDefault();
//     fontSizes.forEach((elem) => elem.classList.remove('font-size_active'));
//     book.className = 'book';
//     this.classList.add('font-size_active');
//     if (this.dataset.size) {
//         book.classList.add('book_fs-' + this.dataset.size);
//     }
// }

// fontSizes.forEach((item) => {
//     item.addEventListener('click', changeFontSize);
// });



// Повышенной сложности 1 вариант

// const book = document.querySelector('.book');
// const bookControl = Array.from(document.querySelectorAll('.book__control'));

// bookControl.forEach((item) => {
//     const arrayOfA = Array.from(item.querySelectorAll('a'));

//     arrayOfA.forEach((elem) => {
//         elem.addEventListener('click', (event) => {
//             event.preventDefault();
//             arrayOfA.forEach((elem) => elem.classList.remove(elem.classList[0] + '_active'));
//             elem.classList.add(elem.classList[0] + '_active');
            
//             if (elem.classList.contains('font-size')) {
//                 let removeSize = Array.from(book.classList).find((name) => name.includes('book_fs-'));
//                 book.classList.remove(removeSize);
//                 if (elem.dataset.size) {
//                     book.classList.add('book_fs-' + elem.dataset.size);
//                 }
//             }

//             if (elem.classList.contains('color')) {
//                 if (elem.dataset.textColor) {
//                     let removeTextColor = Array.from(book.classList).find((name) => name.includes('book_color-'));
//                     book.classList.remove(removeTextColor);
//                     book.classList.add('book_color-' + elem.dataset.textColor);
//                 }
                
//                 if (elem.dataset.bgColor) {
//                     let removeBgColor = Array.from(book.classList).find((name) => name.includes('book_bg-'));
//                     book.classList.remove(removeBgColor);
//                     book.classList.add('book_bg-' + elem.dataset.bgColor);
//                 }
//             }
//         });
//     });
// });



// Повышенной сложности 2 вариант

const book = document.querySelector('.book');
const arrayOfSettings = Array.from(document.querySelector('.book__controls').querySelectorAll('a'));

function changeSettings(event) {
    event.preventDefault();
    let arrayOfVariants = Array.from(this.closest('.book__control').querySelectorAll('a'));
    arrayOfVariants.forEach((variant) => variant.classList.remove(this.classList[0] + '_active'));
    this.classList.add(this.classList[0] + '_active');
    
    if (this.classList.contains('font-size')) {
        let removeSize = Array.from(book.classList).find((name) => name.includes('book_fs-'));
        book.classList.remove(removeSize);
        if (this.dataset.size) {
            book.classList.add('book_fs-' + this.dataset.size);
        }
    }

    if (this.classList.contains('color')) {
        if (this.dataset.textColor) {
            let removeTextColor = Array.from(book.classList).find((name) => name.includes('book_color-'));
            book.classList.remove(removeTextColor);
            book.classList.add('book_color-' + this.dataset.textColor);
        }
        
        if (this.dataset.bgColor) {
            let removeBgColor = Array.from(book.classList).find((name) => name.includes('book_bg-'));
            book.classList.remove(removeBgColor);
            book.classList.add('book_bg-' + this.dataset.bgColor);
        }
    }
}

arrayOfSettings.forEach((setting) => setting.addEventListener('click', changeSettings));
