import React from "react";

const TodoList = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
            <h2>{item.item}</h2>
            <button onClick={() => removeItem(item.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
