let tasks = [];
let currentFilter = 'all';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const taskName = taskInput.value.trim();
    
    if (taskName === '') {
        alert('Task name cannot be blank!');
        return;
    }

    const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'pending') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true; // 'all'
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        const span = document.createElement('span');
        span.textContent = task.name;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => toggleComplete(task.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTask(task.id);

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);
    });
}

function toggleComplete(id) {
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderTasks();
    });
});