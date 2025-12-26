import { Children, createContext, useState } from "react";

// Create a Context for the theme
const ThemeContext = createContext(); //step-1
// Theme Provider component
export const ThemeProvider = ({ Children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return <ThemeContext.Provider value={value}>{Children}</ThemeContext.Provider>;
};

const ThemeToggler = () => {
  return <div>ThemeToggler</div>;
};

export default ThemeToggler;
