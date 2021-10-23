import React, { useState } from "react";
import axios from "axios";

type InputComponentProps = {
  getAllTasks: () => void;
};

const InputComponent = ({ getAllTasks }: InputComponentProps) => {
  const [inputValue, inputValueSet] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValueSet(e.target.value);
  };

  const submitHandler = async () => {
    await axios.post("http://localhost:5000/api/v1/tasks", {
      name: inputValue,
    });
    await getAllTasks();
    inputValueSet("");
  };

  return (
    <div className="w-5/5 md:w-2/5 mx-auto bg-white h-40 mt-5 flex flex-col justify-evenly rounded-md">
      <div className="w-4/5 mx-auto">
        <h1 className="text-center text-2xl">Task Manager</h1>
        <div className="flex flex-2 mt-4">
          <input
            type="text"
            placeholder="e.g learn tailwind"
            className="bg-yellow-200 flex-1 p-2"
            onChange={inputHandler}
            value={inputValue}
          />
          <button
            onClick={submitHandler}
            className="bg-red-500 py-2  px-3 text-white text-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
