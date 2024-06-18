import { useState } from "react";
import { TodoProvider } from "../../Contexts/TodoContext";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";

export default function TodoCon() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo));
    });
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
  console.log(todos);
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, todoToggle }}
    >
      <div>
        <TodoForm />
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}
