import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
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
        <p className="text-green-600">Welcome, {user.loggedInUser?.email}</p>{" "}
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-gray-200 transition duration-200 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
