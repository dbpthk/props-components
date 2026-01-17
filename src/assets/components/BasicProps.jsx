import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-md font-medium transition-all duration-300
        ${size === "small" && "text-xs h-8 px-3"}
${size === "medium" && "text-base h-10 px-6"}
${size === "large" && "text-lg h-12 px-8"}


        ${color === "primary" && "bg-blue-600 text-white hover:bg-blue-700"}
        ${color === "secondary" && "bg-gray-600 text-white hover:bg-gray-700"}
        ${color === "danger" && "bg-red-500 text-white hover:bg-red-700"}
        ${color === "success" && "bg-green-500 text-white hover:bg-green-700"}

        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => setClickCount((prev) => prev + 1);

  return (
    <section className="bg-white p-8 rounded-md shadow-2xl">
      <h2 className="text-3xl mb-2 font-medium">Basic Props</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure fugiat
        tempora quam eius, accusamus quia distinctio, quo architecto vel porro
        fuga dolor inventore at ullam iste optio id aliquid laudantium. Quia
        nobis voluptas quisquam aperiam quibusdam. Iusto blanditiis a esse
        impedit, velit tempore culpa animi! Accusantium possimus quaerat nulla
        eos repellat maxime nemo optio, nesciunt quis veritatis alias,
        voluptatibus quam?
      </p>
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <h3>Different Colors</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button
              text="Primary Button"
              color="primary"
              size="medium"
              onClick={() => {
                handleClick();
              }}
            />
            <Button
              text="Secondary Button"
              color="secondary"
              size="medium"
              onClick={() => {
                handleClick();
              }}
            />
            <Button
              text="Danger Button"
              color="danger"
              size="medium"
              onClick={() => {
                handleClick();
              }}
            />
            <Button
              text="Success Button"
              color="success"
              size="medium"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>

        <div>
          <h3>Different Sizes</h3>
          <div className="flex flex-row items-center flex-wrap gap-3 mt-2">
            <Button
              text="Small Button"
              size="small"
              color="primary"
              onClick={() => handleClick()}
            />

            <Button
              text="Default Medium Button"
              size="medium"
              color="secondary"
              onClick={() => handleClick()}
            />

            <Button
              text="Large Button"
              size="large"
              color="danger"
              onClick={() => handleClick()}
            />
          </div>
        </div>

        <div>
          <h3>Disabled State</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button
              text="Enabled Button"
              size="large"
              color="primary"
              onClick={() => {
                handleClick();
              }}
            />
            <Button
              text="Disabled Button"
              size="large"
              color="primary"
              disabled={true}
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>

        <div className="w-full bg-blue-50 pl-5 py-3 rounded-md">
          <p className="text-sm">
            Click Count: {"  "}
            <span className="text-blue-500">{clickCount}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BasicProps;
