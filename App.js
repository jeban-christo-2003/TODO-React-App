import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./Additem";
import "./App.css"; 

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  function handleDelete(id) {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  }

  const checkedCount = items.filter((item) => item.checked).length;

  const filteredItems = items.filter((item) =>
    item.item?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddItem items={items} setItems={setItems} />
      <Content items={filteredItems} handleClick={handleClick} handleDelete={handleDelete} />
      <Footer len={checkedCount} len1={items.length} />
    </div>
  );
}

export default App;
