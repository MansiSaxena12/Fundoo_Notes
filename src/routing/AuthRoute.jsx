import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const storedJsonString = localStorage.getItem("userData");
  const storedData = storedJsonString
    ? JSON.parse(storedJsonString)
    : null;

  // already logged in → block auth pages
  if (storedData) {
    return <Navigate to="/signin" replace />;
  }

  // not logged in → allow signin/signup
  return children;
};
