import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.css";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
