import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-3xl font-bold text-green-500">To do App</h1>
      <div className="flex gap-6 ">
        <NavLink
          to="/our-tasks"
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border-b-2 border-green-400  py-1 text-xl"
              : "text-green-500"
          }
        >
          Our Tasks
        </NavLink>
        <NavLink
          to="/my-task"
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border-b-2 border-green-400  py-1 text-xl"
              : "text-green-500"
          }
        >
          My Tasks
        </NavLink>
        <NavLink
          to="/create-task"
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border-b-2 border-green-400  py-1 text-xl"
              : "text-green-500"
          }
        >
          Create Task
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border-b-2 border-green-500  py-1 text-xl"
              : "text-green-500"
          }
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
