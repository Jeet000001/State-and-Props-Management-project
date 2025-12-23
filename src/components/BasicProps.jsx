import React, { useState } from "react";

const Button = ({ text, color, size = "medium", onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg transition-all duration-300 
        ${
          size === "small" &&
          "text-sm px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white"
        }
        ${
          size === "medium" &&
          "text-base px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white"
        }
        ${
          size === "large" &&
          "text-lg px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white"
        }

        ${color === "primary" && "bg-blue-500 text-white hover:bg-blue-600"}
        ${color === "secondary" && "bg-gray-500 text-white hover:bg-gray-600"}
        ${color === "danger" && "bg-red-500 text-white hover:bg-red-600"}
        ${color === "success" && "bg-green-500 text-white hover:bg-green-600"}

        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
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
      {/* Different Colors */}
      <div className="space-y-4 mt-5">
        <h3>Different Colors</h3>
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
      <div className="space-y-4 mt-5">
        <h3>Different Sizes</h3>

        <div className="flex flex-wrap gap-3">
          <Button
            text="small"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Medium
            (default)"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      {/* Disable Button */}
      <div className="space-y-4 mt-5">
        <h3>Disable State</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Enabled Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Disabled Button"
            disabled={true}
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      <div className="bg-blue-300 rounded-md px-5 py-2 mt-5">
        <h1 className="text-white">Counter : {clickCount}</h1>
      </div>
    </section>
  );
};

export default BasicProps;
