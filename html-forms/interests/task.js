const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

interestCheck.forEach((item) => {
    item.addEventListener('change', () => {
        let parent = item.closest('.interests_active');
        let children = item.parentElement.nextElementSibling;
        
        if (parent) {
            let parentInput = parent.previousElementSibling.querySelector('.interest__check');
            let neighbours = Array.from(item.closest('.interests_active').children);

            if (neighbours.some((neighbour) => neighbour.querySelector('.interest__check').checked === true)) {
                parentInput.indeterminate = true;
            }
            
            if (neighbours.every((neighbour) => neighbour.querySelector('.interest__check').checked === true)) {
                parentInput.indeterminate = false;
                parentInput.checked = true;
            }

            if (neighbours.every((neighbour) => neighbour.querySelector('.interest__check').checked === false)) {
                parentInput.indeterminate = false;
                parentInput.checked = false;
            }
        }

        if (children) {
            let childrenArray = Array.from(children.children);
            childrenArray.forEach((child) => child.querySelector('.interest__check').checked = item.checked);
        }
    });
});


// Не реализована многоуровневая вложенность