import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

// Toggle Button
const ThemeToggleButton = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-130 right-3 p-3 rounded-full shadow-lg 
                 bg-indigo-600 hover:bg-indigo-700 text-white
                 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      <span className="text-xl">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
};

// Card Component
const ThemeCard = ({ title, children }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`max-w-md mx-auto p-6 rounded-2xl shadow-xl transition-all duration-300
        ${
          isDark
            ? "bg-gray-800 text-white border border-gray-700"
            : "bg-white text-gray-800 border border-gray-200"
        }`}
    >
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
};

// Main Component
const ThemeToggler = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <ThemeToggleButton />

      <ThemeCard title="Theme Context Example">
        This card changes its appearance based on the selected theme.  
        Click the toggle button to switch between Light and Dark mode.
      </ThemeCard>
    </div>
  );
};

export default ThemeToggler;
