import { useRef, forwardRef } from "react";
import { useTheme } from "./ThemeToggler";

/* ---------------- Custom Input ---------------- */
const CustomInput = forwardRef(
  ({ label, placeholder, className }, ref) => {
    const { isDark } = useTheme();

    return (
      <div className="mb-5">
        <label
          className={`block text-sm font-semibold mb-2 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {label}
        </label>

        <input
          ref={ref}
          placeholder={placeholder}
          type="text"
          className={`w-full px-4 py-3 rounded-xl text-sm
            transition-all duration-200
            focus:outline-none focus:ring-2
            ${
              isDark
                ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                : "bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            }
            ${className}
          `}
        />
      </div>
    );
  }
);

/* ---------------- Main Component ---------------- */
const RefProps = () => {
  const { isDark } = useTheme();

  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focuseInput = () => inputRef.current?.focus();

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focuseSecondInput = () => secondInputRef.current?.focus();

  return (
    <section
      className={`max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl
        transition-colors duration-300
        ${isDark ? "bg-gray-800" : "bg-white"}
      `}
    >
      {/* Header */}
      <div className="mb-6">
        <h2
          className={`text-2xl font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Ref Props Demo
        </h2>

        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          This example demonstrates how to use{" "}
          <span className="font-medium">forwardRef</span> and{" "}
          <span className="font-medium">useRef</span> to control input elements.
        </p>
      </div>

      {/* Inputs Card */}
      <div
        className={`p-6 rounded-xl border transition-colors duration-300
          ${
            isDark
              ? "bg-gray-900 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }
        `}
      >
        <h3
          className={`text-lg font-semibold mb-4 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Try it out
        </h3>

        <CustomInput
          ref={inputRef}
          label="First Input"
          placeholder="Type something..."
        />

        <CustomInput
          ref={secondInputRef}
          label="Second Input"
          placeholder="Type something..."
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={focuseInput}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
              bg-blue-600 hover:bg-blue-700
              focus:ring-2 focus:ring-blue-400
              transition"
          >
            Focus First
          </button>

          <button
            onClick={getInputValue}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
              bg-emerald-600 hover:bg-emerald-700
              focus:ring-2 focus:ring-emerald-400
              transition"
          >
            Get Value
          </button>

          <button
            onClick={clearInputValue}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
              bg-rose-600 hover:bg-rose-700
              focus:ring-2 focus:ring-rose-400
              transition"
          >
            Clear Input
          </button>

          <button
            onClick={focuseSecondInput}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
              bg-purple-600 hover:bg-purple-700
              focus:ring-2 focus:ring-purple-400
              transition"
          >
            Focus Second
          </button>
        </div>
      </div>
    </section>
  );
};

export default RefProps;
