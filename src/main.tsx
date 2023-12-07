import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./services/i18n/index"
import ErrorPage from "./pages/ErrorPage.tsx"
import ScrollTop from "./components/BackOnTop/components/BackOnTop.tsx"
import { Analytics } from "@vercel/analytics/react"
import Blog from "./pages/Blog.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollTop />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/blog" element={<Blog />} errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
)
