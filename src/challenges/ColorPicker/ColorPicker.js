import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  const handleColorPick = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ height: "100vh", background: color ? color : "" }}>
      <select onChange={handleColorPick}>
        <option defaultValue={""}></option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
    </div>
  );
};

export default ColorPicker;
