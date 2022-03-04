// С использованием рекурсии

const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

function checkChildren(children) {
    let childrenArray = Array.from(children.children);

    childrenArray.forEach((child) => {
        child.querySelector('.interest__check').checked = children.previousElementSibling.querySelector('.interest__check').checked;
        
        if (child.querySelector('.interests_active')) {
            checkChildren(child.querySelector('.interests_active'));
        }
    });
}

function checkParent(parent) {
    let parentInput = parent.previousElementSibling.querySelector('.interest__check');
    let neighbours = Array.from(parent.children);

    if (neighbours.some((neighbour) => neighbour.querySelector('.interest__check').checked === true || neighbour.querySelector('.interest__check').indeterminate === true)) {
        parentInput.indeterminate = true;
        parentInput.checked = false;
    }
    
    if (neighbours.every((neighbour) => neighbour.querySelector('.interest__check').checked === true)) {
        parentInput.indeterminate = false;
        parentInput.checked = true;
    }

    if (neighbours.every((neighbour) => neighbour.querySelector('.interest__check').checked === false && neighbour.querySelector('.interest__check').indeterminate === false)) {
        parentInput.indeterminate = false;
        parentInput.checked = false;
    }

    if (parentInput.closest('.interests_active')) {
        checkParent(parentInput.closest('.interests_active'));
    }
}

interestCheck.forEach((item) => {
    item.addEventListener('change', () => {
        let parent = item.closest('.interests_active');
        let children = item.parentElement.nextElementSibling;
        
        if (parent) {
            checkParent(parent);
        }

        if (children) {
            checkChildren(children);
        }
    });
});
