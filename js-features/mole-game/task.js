const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const endGame = msg => {
    alert(msg);
    dead.textContent = 0;
    lost.textContent = 0;
};

for (let index = 1; index <= 9; index++) {
    const hole = document.getElementById(`hole${index}`);

    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }        

        if (dead.textContent === "10") {
            endGame("Победа!");
        } 
        if (lost.textContent === "5") {
            endGame("Вы проиграли!");
        }
    };
}
