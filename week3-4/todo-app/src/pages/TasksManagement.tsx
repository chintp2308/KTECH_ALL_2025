import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurTasks from "./OurTasks";
import MyTasks from "./MyTasks";
import Login from "./Login";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import MainLayout from "../components/MainLayout";
import AccessDenied from "./AccessDenied";

const TasksManagement = () => {
  // const loggedInUser = useAuthStore((state) => state.loggedInUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <>
            <Route path="/our-tasks" element={<OurTasks />} />
            <Route path="/my-tasks" element={<MyTasks />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/update-task/:id" element={<UpdateTask />} />
            <Route path="/access-denied" element={<AccessDenied />} />
            <Route path="*" element={<AccessDenied />} />
          </>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default TasksManagement;
