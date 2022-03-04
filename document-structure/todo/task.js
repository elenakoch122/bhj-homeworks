const taskInput = document.getElementById('task__input');
const tasksListContainer = document.getElementById('tasks__list');

function enterTask(event) {
    if (taskInput.value !== '' && event.key === 'Enter') {
        tasksListContainer.innerHTML += `
            <div class="task">
                <div class="task__title">
                ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        taskInput.value = '';
        event.preventDefault();

        Array.from(tasksListContainer.children).forEach((task) => {
            const taskRemove = task.querySelector('.task__remove');
            taskRemove.onclick = () => task.remove();
        });
    }
}

taskInput.addEventListener('keydown', enterTask);
