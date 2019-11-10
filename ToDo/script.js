let taskInput = document.querySelector('.task-input'),
    taskBtn = document.querySelector('.add-task'),
    taskList = document.querySelector('.task-list');

function loadEventListeners () {
    taskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
    taskList.addEventListener('click', doneTask);
}

loadEventListeners();

function addTask () {
    let taskItem = taskInput.value;
    if (taskItem !== '') {
        let li = document.createElement('li'),
            deleteBtn = document.createElement('button'),
            doneBtn = document.createElement('button');
        li.className = 'task-item';
        li.innerHTML = '<span class="task-value">' + taskItem + '</span>';
        deleteBtn.classList = 'delete btn-small red';
        deleteBtn.textContent = 'Delete';
        doneBtn.classList = 'done btn-small green';
        doneBtn.textContent = 'Done';
        taskList.append(li);
        li.append(deleteBtn);
        li.append(doneBtn);
        taskInput.value = '';
    }
}

function removeTask (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        completedCount();
    }
}

function doneTask (e) {
    if (e.target.classList.contains('done')) {
        e.target.parentElement.classList.toggle('task-done');
        completedCount();
    }
}

function completedCount () {
    let count = document.getElementsByClassName('task-done').length;
    let completed = document.querySelector('.completed-tasks');
    completed.textContent = count;
}