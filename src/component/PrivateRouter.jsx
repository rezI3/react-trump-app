import React from "react";
import { Router, Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const PrivateRouter = ({ path, element }) => {
  const user = useAuthContext();

  return (
    <>
      {user ? (
        <Router path={path} element={element} />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRouter;
