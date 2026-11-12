import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("All");

  function addTask(e) {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter a task title.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category: category.trim() || "General",
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("");
    setMessage("Task added successfully!");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      <form onSubmit={addTask}>
        <input type="text" placeholder="Enter task title" value={title}  onChange={(e) => setTitle(e.target.value)}/>

        <input type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}/>

        <button type="submit">Add Task</button>
      </form>

      <p>{message}</p>

      <div className="filters">
        {["All", "Pending", "Completed"].map((item) => (
          <button key={item} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      <h3>{filter} Tasks</h3>

      {filteredTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        filteredTasks.map((task) => (
          <div key={task.id} className="task">
            <span>
              {task.title} - {task.category}
            </span>

            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Completed" : "Complete"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
