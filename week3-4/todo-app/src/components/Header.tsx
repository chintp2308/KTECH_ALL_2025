import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../useAuthStore";

const Header = () => {
  const navigate = useNavigate();
  const { loggedInUser, logOut } = useAuthStore((state) => state);

  // Check if the user has the Administrators role
  const isAdmin = loggedInUser?.roles?.some(
    (role) => role.name === "Administrators"
  );

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10 border-b border-gray-200">
      <h1 className="text-3xl font-extrabold text-green-600 tracking-wide">
        Todo App
      </h1>

      <nav className="flex gap-6">
        <NavLink
          to="/our-tasks"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 border-b-2 border-green-600 font-semibold"
              : "text-gray-600 hover:text-green-500 transition duration-200"
          }
        >
          Our Tasks
        </NavLink>
        <NavLink
          to="/my-tasks"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 border-b-2 border-green-600 font-semibold"
              : "text-gray-600 hover:text-green-500 transition duration-200"
          }
        >
          My Tasks
        </NavLink>
        {isAdmin && (
          <NavLink
            to="/create-task"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b-2 border-green-600 font-semibold"
                : "text-gray-600 hover:text-green-500 transition duration-200"
            }
          >
            Create Task
          </NavLink>
        )}
        <p className="text-green-600">
          Welcome, {loggedInUser?.email || "Guest"}
        </p>
        <button
          onClick={() => {
            logOut();
            navigate("/login");
          }}
          className="text-white transition duration-200 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md cursor-pointer"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
