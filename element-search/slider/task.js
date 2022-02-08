const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderDot = Array.from(document.querySelectorAll(".slider__dot"));
let slideOrder = 0, timeout;
const removeSlide = () => {
    clearTimeout(timeout);
    slideOrder = sliderItem.findIndex((item) => item.classList.contains('slider__item_active'));
    sliderItem[slideOrder].classList.remove('slider__item_active');
    sliderDot[slideOrder].classList.remove('slider__dot_active');
};
const addSlide = (arrow) => {
    sliderItem[slideOrder].classList.add('slider__item_active');
    sliderDot[slideOrder].classList.add('slider__dot_active');
    timeout = setTimeout(arrow.onclick, 500);
};

sliderArrowPrev.onclick = () => {
    removeSlide();
    slideOrder--;
    if (slideOrder === -1) {
        slideOrder = sliderItem.length - 1;
    }
    addSlide(sliderArrowPrev);
};

sliderArrowNext.onclick = () => {
    removeSlide();
    slideOrder++;
    if (slideOrder === sliderItem.length) {
        slideOrder = 0;
    }
    addSlide(sliderArrowNext);
};

sliderDot.forEach((item, idx) => {
    item.onclick = () => {
        removeSlide();
        item.classList.add('slider__dot_active');
        sliderItem[idx].classList.add('slider__item_active');
    };
});
