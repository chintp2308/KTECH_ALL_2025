import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurTasks from "./OurTasks";
import MyTasks from "./MyTasks";
import Login from "./Login";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import MainLayout from "../components/MainLayout";

const TasksManagement = () => {
  const user = localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />}>
          {user && (
            <>
              <Route path="/our-tasks" element={<OurTasks />} />
              <Route path="/my-tasks" element={<MyTasks />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="/update-task/:id" element={<UpdateTask />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default TasksManagement;
