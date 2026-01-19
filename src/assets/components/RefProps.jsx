import { useRef, forwardRef } from "react";

//Input component that accept a ref prop

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };
  const getSecondInputValue = () => {
    if (secondInputRef.current) {
      alert(`Second Input Value: ${secondInputRef.current.value}`);
    }
  };
  const clearSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = "";
      secondInputRef.current.focus();
    }
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Ref Props</h2>
      <p className="text-gray-600 mb-5">
        Using refs to access DOM elements directly.
      </p>
      <div>
        <div className="bg-blue-50 p-5 rounded-md">
          <h3 className="text-lg text-gray-700 font-medium mb-5">
            Try it out:
          </h3>
          <CustomInput
            ref={inputRef}
            label="First Input (with Ref)"
            placeholder="Type something..."
          />
          <CustomInput
            ref={secondInputRef}
            label="Second Input (with Ref)"
            placeholder="Type something else..."
          />
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex flex-row gap-3">
              <button
                className="px-4 py-2 bg-blue-500 text-sm text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
                onClick={focusInput}
              >
                Focus First Input
              </button>

              <button
                className="px-4 py-2 bg-green-500 text-sm text-white rounded-md hover:bg-green-600 transition cursor-pointer"
                onClick={getInputValue}
              >
                Get First Input Value
              </button>
              <button
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
                onClick={clearInput}
              >
                Clear First Input
              </button>
            </div>

            <div className="flex flex-row gap-3">
              <button
                className="px-4 py-2 bg-blue-500 text-sm text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
                onClick={focusSecondInput}
              >
                Focus Second Input
              </button>

              <button
                className="px-4 py-2 bg-green-500 text-sm text-white rounded-md hover:bg-green-600 transition cursor-pointer"
                onClick={getSecondInputValue}
              >
                Get Second Input Value
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-sm text-white rounded-md hover:bg-red-600 transition cursor-pointer"
                onClick={clearSecondInput}
              >
                Clear Second Input
              </button>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5 mt-8 rounded-md">
          <h3 className="text-lg font-medium ">When to Use Refs:</h3>
          <ul className="text-gray-600  list-disc list-inside mt-2 space-y-1">
            <li>Accessing DOM elements directly</li>
            <li>Managing focus, text selection, or media playback</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>triggering imperative animations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
