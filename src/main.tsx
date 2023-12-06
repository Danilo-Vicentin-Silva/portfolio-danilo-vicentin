import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./services/i18n/index"
import ErrorPage from "./pages/ErrorPage.tsx"
import ScrollTop from "./components/BackOnTop/components/BackOnTop.tsx"
import { Analytics } from "@vercel/analytics/react"
import Blog from "./pages/Blog.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollTop />
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
)
