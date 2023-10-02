import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoChallenge = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      item: "Clean House",
    },
  ]);
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addItem = (e) => {
    setItems((items) => [...items, { id: uuidv4(), item: todo }]);
    setTodo("");
  };
  const removeItem = (id) => {
    setItems((state) => state.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <input type="text" onChange={handleInput} value={todo} />
      <button onClick={addItem}>Add Item</button>
      <TodoList items={items} removeItem={removeItem} />
    </div>
  );
};

export default TodoChallenge;
