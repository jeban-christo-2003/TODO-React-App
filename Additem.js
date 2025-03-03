import React, { useState } from "react";
import "./AddItem.css"; 

const AddItem = ({ items, setItems }) => {
  const [inputText, setInputText] = useState("");

  const addItem = () => {
    if (!inputText.trim()) return;

    const newItem = {
      id: Date.now(),
      checked: false,
      item: inputText,
    };

    setItems([...items, newItem]);
    setInputText("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    addItem();
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleClick} className="add-item-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter item..."
          className="add-item-input"
        />
        <button type="submit" className="add-item-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
