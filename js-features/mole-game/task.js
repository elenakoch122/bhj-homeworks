const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


for (let index = 1; index <= 9; index++) {
    const hole = document.getElementById(`hole${index}`);

    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if (dead.textContent === "10") {
            alert("Победа!");
            dead.textContent = 0;
            lost.textContent = 0;
        } 
        if (lost.textContent === "5") {
            alert("Вы проиграли!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}
