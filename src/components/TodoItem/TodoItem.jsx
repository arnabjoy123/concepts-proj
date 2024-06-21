import { useState } from "react";
import { useTodo } from "../../Contexts/TodoContext";

function TodoItem({ todo }) {
  const { updateTodo, removeTodo, todoToggle } = useTodo();

  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [editable, setEditable] = useState(false);

  function delTodo() {
    removeTodo(todo.id);
  }

  function toggle() {
    todoToggle(todo.id);
    if (editable === true) {
      setEditable(false);
    }
  }

  function edit() {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setEditable(false);
  }

  return (
    <div className="flex items-center justify-between border p-2 rounded mb-2 bg-white">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggle}
        className="mr-2"
      />
      <input
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`border w-full py-1 px-2 ${editable ? "" : "bg-gray-100"}`}
        readOnly={!editable}
        placeholder="Test"
      />
      <button
        className={`bg-blue-500 text-white rounded py-1 px-2 ml-2 ${
          todo.completed ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        onClick={() => {
          if (todo.completed) return;
          if (editable) {
            edit();
          } else setEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {editable ? "Save" : "Edit"}
      </button>
      <button
        className="bg-red-500 text-white rounded py-1 px-2 ml-2 hover:bg-red-600"
        onClick={delTodo}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
