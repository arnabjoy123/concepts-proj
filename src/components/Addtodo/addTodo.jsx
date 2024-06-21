import React, { useState } from "react";
import { addTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function HandleAdd() {
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div className="w-full max-w-md mx-auto flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow border border-gray-300 p-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a todo"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={HandleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
