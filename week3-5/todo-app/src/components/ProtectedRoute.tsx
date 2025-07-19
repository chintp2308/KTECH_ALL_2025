import React from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../useAuthStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { loggedInUser } = useAuthStore();

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  // Nếu có phân quyền, kiểm tra user có ít nhất 1 role hợp lệ
  if (
    allowedRoles &&
    !loggedInUser.roles.some((r) => allowedRoles.includes(r.name))
  ) {
    return <Navigate to="/access-denied" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
