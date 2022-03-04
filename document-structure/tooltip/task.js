const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach((tooltip) => {
    tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip" data-position="bottom">${tooltip.title}</div>`);
    
    tooltip.onclick = (event) => {
        event.preventDefault();
        let tooltipActive = Array.from(document.querySelectorAll('.tooltip')).find((item) => item.classList.contains('tooltip_active'));
        
        if (tooltipActive && tooltipActive !== tooltip.nextElementSibling) {
            tooltipActive.classList.remove('tooltip_active');
        }
        
        tooltip.nextElementSibling.classList.toggle('tooltip_active');
    };
});


// Повышенный уровень сложности #2 - не поняла про data-position: установила атрибут в подсказку, но ничего не поменялось.
// Не понимаю как программа должна понять, что data-position="bottom" - означает, что подсказка должна появиться под элементом.
// Или я неправильно поняла задание?
