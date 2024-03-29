import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const userInfo = useSelector((state) => state.auth?.userInfo);
  if (!userInfo) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
