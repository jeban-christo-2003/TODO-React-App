import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Content.css"; 

const Content = ({ items, handleClick, handleDelete }) => {
  return items.length > 0 ? (
    <div className="center">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              className="check"
              type="checkbox"
              checked={item.checked}
              onChange={() => handleClick(item.id)}
            />
            <label>{item.item}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Your list is empty</p>
  );
};

export default Content;
