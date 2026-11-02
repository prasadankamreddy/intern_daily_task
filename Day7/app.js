// app.js
const tasks = [
    { id: 1, title: "Review pull requests", completed: true },
    { id: 2, title: "Update database schema", completed: false },
    { id: 3, title: "Write unit tests", completed: false },
    { id: 4, title: "Deploy to staging", completed: true }
];

function showTaskStats(taskList) {
    console.log("--- All Tasks ---");
    taskList.forEach(task => {
        const status = task.completed ? "[Completed]" : "[Pending]";
        console.log(`${task.id}. ${task.title} ${status}`);
    });

    const total = taskList.length;
    const completed = taskList.filter(t => t.completed).length;
    const pending = total - completed;

    console.log("\n--- Task Summary ---");
    console.log(`Total: ${total}`);
    console.log(`Completed: ${completed}`);
    console.log(`Pending: ${pending}`);
}

showTaskStats(tasks);