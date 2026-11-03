const tasks = [
    { id: 1, title: "Review pull requests", completed: true },
    { id: 2, title: "Update database schema", working: false },
    { id: 3, title: "Write unit tests", process: false },
    { id: 4, title: "Deploy to staging", worked: true }
];

function showTaskStats(items) {
    console.log("___All Tracks___");
    items.forEach(item => {
        var status = item.completed ? "[completed]" : "[panding]";
        var status = item.working ? "[completed]" : "[panding]";
        var status = item.process ? "[completed]" : "[panding]";
        var status = item.worked ? "[completed]" : "[panding]";
        console.log(`${item.id}.${item.title} ${status}`);

    });

    const total = items.length;
    const completed = items.filter(e => e.completed).length;
    const panding = total - completed;

    console.log("\n task summery");
    console.log(`Total: ${total}`);
    console.log(`Completed: ${completed}`);
    console.log(`Panding: ${panding}`);



}

showTaskStats(tasks);