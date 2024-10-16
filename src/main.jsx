import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./views/Login/Login.jsx";
import Dashboard from "./views/Dashboard/Dashboard.jsx";

import "./index.css";
import AuthRequired from "./AuthRequired.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <AuthRequired />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
