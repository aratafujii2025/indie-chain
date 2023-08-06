import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCardsPage from "./pages/MyCardsPage";
import "./index.css";
import "./styles.css";
import "./pages/RoundedCard";
import Register from "./pages/Register";
import "./resgisterstyle.css";

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
    path:"/mycardspage",
    element: <MyCardsPage></MyCardsPage>,

  }

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
