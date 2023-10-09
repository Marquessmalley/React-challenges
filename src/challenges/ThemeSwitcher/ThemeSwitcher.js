import { createContext, useState } from "react";
import Home from "./Home";
export const ThemeContext = createContext();

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <Home />
    </ThemeContext.Provider>
  );
};

export default ThemeSwitcher;
