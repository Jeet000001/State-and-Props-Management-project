import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-600 mb-2">
        {label}
      </label>
      <input
        ref={ref}
        placeholder={placeholder}
        type="text"
        className={`w-full px-4 py-3 border border-gray-300 rounded-xl text-sm 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition-all duration-200 ${className}`}
      />
    </div>
  );
});

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focuseInput = () => {
    inputRef.current.focus();
  };

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

  const focuseSecondInput = () => {
    secondInputRef.current.focus();
  };

  return (
    <section className="max-w-3xl mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Ref Props Demo
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          This example demonstrates how to use <span className="font-medium">forwardRef</span> 
          and <span className="font-medium">useRef</span> to control input elements.
        </p>
      </div>

      {/* Inputs */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
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
            className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium 
            rounded-xl hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 
            transition"
          >
            Focus First
          </button>

          <button
            onClick={getInputValue}
            className="px-5 py-2.5 bg-emerald-500 text-white text-sm font-medium 
            rounded-xl hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 
            transition"
          >
            Get Value
          </button>

          <button
            onClick={clearInputValue}
            className="px-5 py-2.5 bg-rose-500 text-white text-sm font-medium 
            rounded-xl hover:bg-rose-600 focus:ring-2 focus:ring-rose-400 
            transition"
          >
            Clear Input
          </button>

          <button
            onClick={focuseSecondInput}
            className="px-5 py-2.5 bg-purple-500 text-white text-sm font-medium 
            rounded-xl hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 
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
