import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React useState",
      completed: false
    },
    {
      id: 1,
      title: "Learn React useState",
      completed: true
    },
    {
      id: 1,
      title: "Learn React useState",
      completed: false
    }
  ]);

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Day 13 - Task Manager</h1>

      <h3>My Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks available.....</p>
      ) : (
        tasks.map((task) => (
          <div className="task" key={task.id}>
            <span
              className={task.completed ? "completed" : ""}
            >
              {task.title}
            </span>

            <button onClick={() => completeTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
