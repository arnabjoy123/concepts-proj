import { useState } from "react";
import { useTodo } from "../../Contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  function add() {
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  }

  return (
    <div className="flex items-center mb-4">
      <input
        className="border rounded-l py-2 px-4 w-full"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write todo..."
      />
      <button
        className="bg-blue-500 text-white rounded-r py-2 px-4 ml-2 hover:bg-blue-600"
        onClick={add}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
