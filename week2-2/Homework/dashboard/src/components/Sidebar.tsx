import { NavLink } from "react-router-dom";
import {
  Hospital,
  Map,
  SquareKanban,
  Users,
  Warehouse,
  History,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="flex flex-col h-screen w-[300px] p-4 gap-6 border-t border-gray-200 mt-0 ">
          <NavLink
            to="/patients"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
          >
            <Users />
            Patients
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition 
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
            end
          >
            <SquareKanban />
            Overview
          </NavLink>
          <NavLink
            to="/map"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
            end
          >
            <Map />
            Map
          </NavLink>
          <NavLink
            to="/departments"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
          >
            {" "}
            <Warehouse />
            Departments
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
          >
            <Hospital />
            Doctors
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
          >
            <History />
            History
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }: { isActive: boolean }) => `
            flex items-center gap-3 p-3 rounded transition
             ${
               isActive
                 ? "text-blue-500 border border-blue-500 bg-blue-500/10"
                 : "text-gray-500 "
             }`}
          >
            <Settings />
            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
