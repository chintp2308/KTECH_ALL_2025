import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import OurTasks from "./pages/OurTasks";
import MainLayout from "./components/MainLayout";
import { useEffect, useState } from "react";
import AuthContext from "./context";
import CreateTask from "./pages/CreateTask";
import UpdateTask from "./pages/UpdateTask";
import MyTasks from "./pages/MyTasks";
import type { User } from "./types";

function TaskManagement() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<MainLayout />}>
              {user && <Route path="/our-tasks" element={<OurTasks />} />}
              {user && <Route path="/create-task" element={<CreateTask />} />}
              {user && <Route path="/update-task" element={<UpdateTask />} />}
              {user && <Route path="/my-task" element={<MyTasks />} />}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default TaskManagement;
