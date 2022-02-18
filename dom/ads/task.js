const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

function changeCase(array, activeClass) {
    let idx = array.findIndex((item) => item.classList.contains(activeClass));
    array[idx].classList.remove(activeClass);
    if (idx === array.length - 1) {
        idx = -1;
    }
    idx++;
    array[idx].classList.add(activeClass);
    array[idx].style.color = array[idx].dataset.color;
    setTimeout(changeCase, array[idx].dataset.speed, rotatorCases, 'rotator__case_active');
};

setTimeout(changeCase, 0, rotatorCases, 'rotator__case_active');
