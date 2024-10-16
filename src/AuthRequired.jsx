import React from "react";
import { useAuth } from "./context/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace={true} />;

  return <Outlet />;
}
