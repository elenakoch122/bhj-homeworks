const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderDot = Array.from(document.querySelectorAll(".slider__dot"));
let timeout;

const removeSlide = (idx) => {
    clearTimeout(timeout);
    sliderItem[idx].classList.remove('slider__item_active');
    sliderDot[idx].classList.remove('slider__dot_active');
};

const addSlide = (idx, arrow) => {
    sliderItem[idx].classList.add('slider__item_active');
    sliderDot[idx].classList.add('slider__dot_active');
    timeout = setTimeout(arrow.onclick, 500);
};

sliderArrowPrev.onclick = () => {
    let idx = sliderItem.findIndex((item) => item.classList.contains('slider__item_active'));
    removeSlide(idx);
    idx--;
    if (idx === -1) {
        idx = sliderItem.length - 1;
    }
    addSlide(idx, sliderArrowPrev);
};

sliderArrowNext.onclick = () => {
    let idx = sliderItem.findIndex((item) => item.classList.contains('slider__item_active'));
    removeSlide(idx);
    idx++;
    if (idx === sliderItem.length) {
        idx = 0;
    }
    addSlide(idx, sliderArrowNext);
};

sliderDot.forEach((item, index) => {
    item.onclick = () => {
        let idx = sliderItem.findIndex((item) => item.classList.contains('slider__item_active'));
        removeSlide(idx);
        item.classList.add('slider__dot_active');
        sliderItem[index].classList.add('slider__item_active');
    };
});
