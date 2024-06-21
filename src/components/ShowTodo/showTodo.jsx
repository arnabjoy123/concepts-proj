import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todoSlice";

function ShowTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
      <div className="space-y-4">
        {todos &&
          todos.map((todo) => (
            <div
              className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-md"
              key={todo.id}
            >
              <div className="text-lg">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShowTodo;
