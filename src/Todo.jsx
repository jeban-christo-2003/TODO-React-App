import React, { useState } from "react";
import './App.css'; // Use './Todo.css' if you have separate CSS for Todo.

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todo, inputValue]); // Add new todo to the list
      setInputValue(""); // Clear input field
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input value
  };

  const handleRemove = (indexToRemove) => {
    setTodo(todo.filter((_, index) => index !== indexToRemove)); // Remove the selected todo
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add TODO</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
