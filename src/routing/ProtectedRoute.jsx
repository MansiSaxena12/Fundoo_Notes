import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const storedJsonString = localStorage.getItem("userData");
  const storedData = storedJsonString
    ? JSON.parse(storedJsonString)
    : null;

  // not logged in → go to signin
  if (!storedData) {
    return <Navigate to="/signin" replace />;
  }

  // logged in → allow access
  return children;
};
