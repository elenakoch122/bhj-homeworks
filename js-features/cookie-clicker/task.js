const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
const clickerCounter = () => {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
};

// Исходное задание
// cookie.onclick = () => {
//     if (Number(clicker__counter.textContent) % 2 === 0) {
//         cookie.width += 20;
//         cookie.height += 20;
//         clickerCounter();
//     } else {
//         cookie.width -= 20;
//         cookie.height -= 20;
//         clickerCounter();
//     }
// };

// Повышенный уровень сложности
const clicker__speed = document.getElementById("clicker__speed");
const clickerSpeed = () => {
    clicker__speed.textContent = (1000/(end - start)).toFixed(2);
};
let start = Date.now(), end;

cookie.onclick = () => {
    end = Date.now();
    if (Number(clicker__counter.textContent) % 2 === 0) {
        cookie.width += 20;
        cookie.height += 20;
        clickerCounter();
        clickerSpeed();
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
        clickerCounter();
        clickerSpeed();
    }
    start = Date.now();
};
