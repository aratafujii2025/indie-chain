import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Following from "./pages/Following";
import Account from "./pages/Account/Account";
import EditAccount from "./pages/Account/EditAccount";
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
  {
    path: "/search",
    element: <Search></Search>,
  },
  {
    path: "/following",
    element: <Following></Following>,
  },
  {
    path: "/account",
    element: <Account></Account>,
  },
  {
    path: "/account/edit",
    element: <EditAccount></EditAccount>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
