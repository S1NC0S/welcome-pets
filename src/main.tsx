import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home/Home.tsx";
import StyleGuide from "./pages/StyleGuide/StyleGuide.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <div>asd</div>,
  },
  {
    path: "/styleguide",
    element: <StyleGuide />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="font-fredoka bg-wp-white text-wp-gray min-h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
