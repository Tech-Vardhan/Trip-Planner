import { useState } from "react";
import PackingList from "./PackingList";
import States from "./States";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure want to delete all Items in the lise?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
        items={items}
      />
      <States items={items} />
    </div>
  );
}
