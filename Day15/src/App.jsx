import { useState } from "react";
import "./App.css";

function App() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  function recordForm(event) {
    event.preventDefault();

    if (!name.trim() || !category.trim()) {
      setMessage("Please fill all fields.");
      return;
    }

    const newRecord = {
      id: Date.now(),
      name: name.trim(),
      category: category.trim(),
      createdAt: new Date().toLocaleString()
    };

    setRecords((previous) => [...previous, newRecord]);

    setName("");
    setCategory("");
    setMessage("Record added successfully!");
  }

  function deleteRecord(id) {
    setRecords((previous) =>
      previous.filter((record) => record.id !== id)
    );
    setMessage("Record deleted successfully!");
  }

  return (
    <div className="container">
      <h1>Record Tracker</h1>

      <form onSubmit={recordForm}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>

        <input type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}/>

        <button type="submit">Add Record</button>
      </form>

      <p>{message}</p>

      <h2>Records List ({records.length})</h2>

      {records.length === 0 ? (
        <p>No records available.</p>
      ) : (
        records.map((record) => (
          <div className="record-card" key={record.id}>
            <h3>{record.name}</h3>
            <p>Category: {record.category}</p>
            <small>{record.createdAt}</small>

            <button onClick={() => deleteRecord(record.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
