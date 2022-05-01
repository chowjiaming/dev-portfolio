import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "portfolio-theme",
    defaultDark ? "dark" : "light"
  );

  const handleToggleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
