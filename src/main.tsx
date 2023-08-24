import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./services/i18n/index";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
