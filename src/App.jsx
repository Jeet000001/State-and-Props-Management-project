import React from "react";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler";

/* ---------------- Navigation ---------------- */
const Navigation = () => {
  const { isDark } = useTheme();

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300
        ${isDark ? "bg-gray-900/90" : "bg-white/90"} shadow-lg`}
    >
      <div className="flex justify-center gap-3 py-3 flex-wrap">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-indigo-600 hover:scale-105"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
              }`}
          >
            {section.label}
            <span className="ml-2">{section.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

/* ---------------- App Content ---------------- */
const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-linear-to-br from-gray-50 via-gray-100 to-gray-200"
      }`}
    >
      <Navigation />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1
            className={`text-5xl font-extrabold mb-4 tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            A React Props Project
          </h1>

          <p
            className={`text-xl mb-3 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            A comprehensive guide to understanding props in React
          </p>

          <p
            className={`text-sm font-semibold tracking-wide uppercase ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Built with Node + Vite + React + Tailwind CSS
          </p>
        </header>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          <div id="basic" className="scroll-mt-28">
            <BasicProps />
          </div>

          <div id="children" className="scroll-mt-28">
            <ChildrenProps />
          </div>

          <div id="complex" className="scroll-mt-28">
            <ComplexProps />
          </div>

          <div id="ref" className="scroll-mt-28">
            <RefProps />
          </div>

          <div id="theme" className="scroll-mt-28">
            <ThemeToggler />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`mt-20 pb-8 text-center transition-colors ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <p className="text-sm">
          Made with ❤️ using Node, Vite, React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

/* ---------------- App Wrapper ---------------- */
const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
