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
    <div>
      <input
        className="border"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="write todo...."
      />
      <button className="border" onClick={add}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
