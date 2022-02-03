const timer = document.getElementById("timer");

// Исходное задание
// const interval = setInterval(() => {
//     timer.textContent = Number(timer.textContent) - 1;
//     if (timer.textContent === "0") {
//         alert("Вы победили в конкурсе!");
//         clearInterval(interval);
//     }
// }, 1000);


// Повышенный уровень сложности #1
// let ss = Number(timer.textContent);

// if (ss < 10) {
//     timer.textContent = "00:00:0" + ss;
// } else {
//     timer.textContent = "00:00:" + ss;
// }    

// const interval = setInterval(() => {
//     ss--;
//     if (ss < 10) {
//         timer.textContent = "00:00:0" + ss;
//     } else {
//         timer.textContent = "00:00:" + ss;
//     } 
//     if (timer.textContent === "00:00:00") {
//         alert("Вы победили в конкурсе!");
//         clearInterval(interval);
//     }    
// }, 1000);


// Повышенный уровень сложности #2
let ss = Number(timer.textContent);

if (ss < 10) {
    timer.textContent = "00:00:0" + ss;
} else {
    timer.textContent = "00:00:" + ss;
}    

const interval = setInterval(() => {
    ss--;
    if (ss < 10) {
        timer.textContent = "00:00:0" + ss;
    } else {
        timer.textContent = "00:00:" + ss;
    } 
    if (timer.textContent === "00:00:00") {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
        location.replace('https://netology.ru');
    }    
}, 1000);
