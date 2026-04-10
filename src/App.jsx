import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([
    { text: "Buy Clothes", date: "2025-10-04" },
    { text: "Go to office", date: "2025-12-13" }
  ]);

  const addTodo = () => {
    if (!task || !date) return;

    setTodos([...todos, { text: task, date }]);
    setTask("");
    setDate("");
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="container">
      <h1>TODO List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Add ToDo here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="list">
        {todos.map((todo, index) => (
          <div className="item" key={index}>
            <span>{todo.text}</span>
            <span>{todo.date}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;