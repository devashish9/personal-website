import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage.tsx";
import ExpPage from "./ExpPage.js";
import ProjPage from "./ProjPage.tsx";
import NotesPage from "./NotesPage.tsx";
import MiscPage from "./MiscPage.tsx";
import "../styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/exp",
    element: <ExpPage />,
  },
  {
    path: "/projects",
    element: <ProjPage />,
  },
  {
    path: "/notes",
    element: <NotesPage />,
  },
  {
    path: "/misc",
    element: <MiscPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
