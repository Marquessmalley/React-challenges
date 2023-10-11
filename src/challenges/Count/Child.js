import React from "react";

const Child = ({ onClick }) => {
  console.log("Child component rendering");
  return (
    <div>
      <button onClick={onClick}>add</button>
    </div>
  );
};

export default Child;
