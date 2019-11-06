let taskInput = document.querySelector('.task-input'),
    taskBtn = document.querySelector('.add-task'),
    taskList = document.querySelector('.task-list'),
    item = document.createElement('li');

loadEventListeners();

function loadEventListeners () {
    taskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
}

function addTask () {
    let taskItem = taskInput.value;
    if (taskItem !== '') {
        let li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = taskItem + '<button class="delete">Delete</button> <button class="done">Done</button>';
        taskList.append(li);
        taskInput.value = '';
    }
}

function removeTask (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('done')) {
        e.target.parentElement.classList.add('task-done');
    }
}