import Users from "../pages/Users";
import Roles from "../pages/Roles";
import OurTasks from "../pages/OurTasks";
import MyTasks from "../pages/MyTasks";
import Login from "../pages/Login";

const routes = [
  {
    path: "/login",
    showOnMenu: false,
    isPublic: true,
    name: "Login",
    index: true,
    element: <Login />,
  },
  // {
  //   path: "/home",
  //   showOnMenu: true,
  //   name: "Home",
  //   index: true,
  //   element: <OurTasks />,
  //   roles: ["Users", "Managers", "Leaders"],
  // },
  {
    path: "/our-tasks",
    showOnMenu: true,
    name: "Tasks",
    index: true,
    element: <OurTasks />,
    roles: ["Managers", "Leaders", "Users"],
  },

  {
    path: "/my-tasks",
    showOnMenu: true,
    name: "My Tasks",
    index: true,
    element: <MyTasks />,
    roles: ["Users"],
  },
  {
    path: "/users",
    showOnMenu: true,
    name: "Users",
    // index: true,
    element: <Users />,
    roles: ["Administrators"],
  },
  {
    path: "/roles",
    showOnMenu: true,
    name: "Roles",
    // index: true,
    element: <Roles />,
    roles: ["Administrators"],
  },
];
export default routes;
