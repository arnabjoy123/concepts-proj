import { useEffect, useState } from "react";
import { TodoProvider } from "../../Contexts/TodoContext";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";

export default function TodoCon() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? { ...prevtodo, ...updatedTodo } : prevtodo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  };

  const todoToggle = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, todoToggle }}
    >
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="max-w-md mx-auto mt-8 flex-grow">
          <TodoForm />
          {todos.map((todo) => (
            <div key={todo.id} className="my-4">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}
