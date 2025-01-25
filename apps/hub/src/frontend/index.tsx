import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Home } from "@/frontend/pages/home";
import { About } from "@/frontend/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
