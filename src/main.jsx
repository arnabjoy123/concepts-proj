import React from "react";
import ReactDOM from "react-dom/client";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
