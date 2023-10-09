import { useContext } from "react";
import { ThemeContext } from "./ThemeSwitcher";
const Home = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      style={
        theme === "light"
          ? { background: "#fff", height: "100vh" }
          : { background: "black", height: "100vh" }
      }
    >
      <h1 style={theme === "light" ? { color: "black" } : { color: "#fff" }}>
        Theme Swicther
      </h1>
      <p style={theme === "light" ? { color: "black" } : { color: "#fff" }}>
        {theme}
      </p>
      <button onClick={toggleTheme}>switch</button>
    </div>
  );
};

export default Home;
