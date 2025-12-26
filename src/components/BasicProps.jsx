import React, { useState } from "react";
import { useTheme } from "./ThemeToggler";

/* ---------------- Button Component ---------------- */
const Button = ({
  text,
  color = "primary",
  size = "medium",
  onClick,
  disabled,
}) => {
  const { isDark } = useTheme();

  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-5 py-2",
    large: "text-lg px-8 py-4",
  };

  const colorClasses = {
    primary: isDark
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-blue-500 hover:bg-blue-600 text-white",

    secondary: isDark
      ? "bg-gray-600 hover:bg-gray-700 text-white"
      : "bg-gray-500 hover:bg-gray-600 text-white",

    success: isDark
      ? "bg-green-600 hover:bg-green-700 text-white"
      : "bg-green-500 hover:bg-green-600 text-white",

    danger: isDark
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-medium
        transition-all duration-300
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:-translate-y-0.5 shadow-md hover:shadow-lg"
        }
      `}
    >
      {text}
    </button>
  );
};

/* ---------------- Main Component ---------------- */
const BasicProps = () => {
  const { isDark } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  return (
    <section
      className={`p-8 rounded-2xl shadow-xl transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-4 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        Basic Props
      </h2>

      <p
        className={`mb-6 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam at
        incidunt odio eveniet fugiat qui laboriosam omnis reprehenderit quaerat
        enim ad, quibusdam aperiam expedita.
      </p>

      {/* Different Colors */}
      <div className="space-y-4 mt-6">
        <h3
          className={`font-semibold ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Different Colors
        </h3>

        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4 mt-6">
        <h3
          className={`font-semibold ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Different Sizes
        </h3>

        <div className="flex flex-wrap gap-3">
          <Button
            text="Small"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Medium (default)"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Large"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-4 mt-6">
        <h3
          className={`font-semibold ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Disabled State
        </h3>

        <div className="flex flex-wrap gap-3">
          <Button
            text="Enabled Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Disabled Button"
            disabled
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      {/* Counter */}
      <div
        className={`mt-6 px-5 py-3 rounded-lg font-semibold ${
          isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
        }`}
      >
        Counter : {clickCount}
      </div>
    </section>
  );
};

export default BasicProps;
