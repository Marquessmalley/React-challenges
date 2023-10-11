import { useState, useCallback } from "react";

const ColorPalette = () => {
  const [generatedColors, setGeneratedColors] = useState([]);
  const [palette, setPalette] = useState([]);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setGeneratedColors((prevColors) => [...prevColors, randomColor]);
  };

  const addToPalette = useCallback((color) => {
    setPalette((prevPalette) => [...prevPalette, color]);
  }, []);

  console.log(palette);
  return (
    <div>
      <h1>Color Palette</h1>
      <div className="color-generator">
        <button onClick={generateRandomColor}>Generate Color</button>
        {generatedColors.map((color, index) => (
          <div
            key={index}
            className="generated-color"
            style={{ display: "flex" }}
          >
            <div style={{ backgroundColor: color }}>{color}</div>
            <button onClick={() => addToPalette(color)}>Add to Palette</button>
          </div>
        ))}
      </div>
      <div className="color-palette">
        <h1>Palette: </h1>
        {palette.map((color, index) => (
          <div
            key={index}
            className="palette-color"
            style={{ backgroundColor: color, padding: "2rem" }}
          >
            {/* Render the colors from the palette array */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
