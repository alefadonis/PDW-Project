import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  _id: string;
  name: string;
  role: string;
  exp: number;
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("token");

  if (!token) return <Navigate to="/" replace />;

  try {
    const decoded = jwtDecode<TokenPayload>(token);

    if (decoded.exp * 1000 < Date.now()) {
      Cookies.remove("token");
      return <Navigate to="/" replace />;
    }

    return <>{children}</>;
  } catch {
    Cookies.remove("token");
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
