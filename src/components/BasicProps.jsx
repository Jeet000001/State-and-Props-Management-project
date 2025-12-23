import React, { useState } from "react";

const Button = ({ text, color, size, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg transition-all duration-300 
        ${size === "small" ? "text-sm px-4 py-1" : ""} 
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
        ${
          color === "secondary"
            ? "bg-gray-500 text-white hover:bg-gray-600"
            : ""
        }
        ${color === "danger" ? "bg-red-500 text-white hover:bg-red-600 " : ""}
        ${color === "success" ? "bg-green-500 text-white hover:bg-green-600": ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {text}
    </button>
  );
};

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Basic Props</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam at
        incidunt odio eveniet fugiat qui laboriosam omnis reprehenderit quaerat
        enim ad, quibusdam aperiam expedita.
      </p>
      <div className="space-y-4">
        <h3>Different Colors</h3>
        <p> Counter : <span className="text-blue-700">{clickCount}</span></p>
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
    </section>
  );
};

export default BasicProps;
