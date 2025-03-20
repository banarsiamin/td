import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("Please enter a valid TODO!");
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>TODO List</h1>
      <div style={styles.menu}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new TODO"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.button}>
          Add TODO
        </button>
      </div>
      <div style={styles.todoList}>
        <h2>Your TODOs:</h2>
        {todos.length === 0 ? (
          <p>No TODOs found. Add one above!</p>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index} style={styles.todoItem}>
                {todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    color: "#333",
  },
  menu: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  todoList: {
    marginTop: "20px",
  },
  todoItem: {
    listStyle: "none",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
  },
};

export default App;
