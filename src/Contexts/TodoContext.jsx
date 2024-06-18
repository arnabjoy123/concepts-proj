import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "HIIIII", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  todoToggle: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
