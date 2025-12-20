import React from "react";
import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler from "./components/ThemeToggler"

const Navigation = () => {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme,", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md">
      <div>
        <div className="flex justify-center gap-3">
          {sections.map((section) => (
            <button
              className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 my-2"
              key={section.id}
            >
              {section.label}
              <span className="ml-2">{section.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const AppContent = () => {
  const isDark = true;

  return (
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <div className="mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">A React Props Project</h1>
          <p
            className={`text-xl mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            A Comprehensive guide to understanding props in React
          </p>
          <p
            className={`font-bold text-sm ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Build with Node+Vite+React+Tailwind CSS
          </p>
        </header>
        <div className="scroll-mt-200">
          <BasicProps />
        </div>
        <div className="scroll-mt-200">
          <ChildrenProps />
        </div>
        <div className="scroll-mt-200">
          <ComplexProps />
        </div>
        <div className="scroll-mt-200">
          <RefProps />
        </div>
        <div className="scroll-mt-200">
          <ThemeToggler />
        </div>
      </div>
      <footer className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
        <p>
          Made with ❤️ using Node, Vite, React and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <AppContent />
    </div>
  );
};

export default App;
