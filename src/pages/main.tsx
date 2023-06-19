import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../components/Home/Homepage.tsx";
import ExpPage from "../components/Experience/ExpPage.js";
import ProjPage from "../components/Projects/ProjPage.tsx";
import NotesPage from "../components/Notes/NotesPage.tsx";
import MiscPage from "../components/Misc/MiscPage.tsx";
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
