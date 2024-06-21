import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import CurrencyConv from "./pages/CurrConv/CurrencyConv.jsx";
import Pass from "./pages/PasswordGen/pass.jsx";
import TodoCon from "./pages/TodoCon/todoCon.jsx";
import TodoRed from "./pages/TodoRed/todoRed.jsx";
import { store } from "./app/store.js";
import { ThemeProvider } from "./Contexts/theme.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Pass />} />
      <Route path="curr" element={<CurrencyConv />} />
      <Route path="todo1" element={<TodoCon />} />
      <Route path="todo2" element={<TodoRed />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

function App() {
  const [theme, setTheme] = useState("light");

  function darkTheme() {
    setTheme("dark");
  }

  function lightTheme() {
    setTheme("light");
  }

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
