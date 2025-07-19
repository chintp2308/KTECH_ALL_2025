import { Routes, Route } from "react-router-dom";
import routes from "../routes/index";
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../components/MainLayout";
import AccessDenied from "./AccessDenied";
import Login from "./Login";

const TasksManagement = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/access-denied" element={<AccessDenied />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.roles ? (
                <ProtectedRoute allowedRoles={route.roles}>
                  {route.element}
                </ProtectedRoute>
              ) : (
                route.element
              )
            }
          />
        ))}
      </Route>
    </Routes>
  );
};
export default TasksManagement;
