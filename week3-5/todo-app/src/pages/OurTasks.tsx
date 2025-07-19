import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { deleteTask } from "../services";
import type { Filter, Task } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TaskFilterForm from "../components/TaskFilterForm";
import apiClient from "../libraries/api-client";
import { useAuthStore } from "../useAuthStore";

const OurTasks = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useAuthStore((state) => state);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const tasks = await getTasks();
  //       setAllTasks(tasks);
  //       setFilteredTasks(tasks);
  //     } catch (error) {
  //       console.error("Error fetching tasks:", error);
  //     }
  //   };
  //   fetchTasks();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = (await apiClient.get("/workspaces/tasks")) as Task[];
        setAllTasks(tasks);
        setFilteredTasks(tasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (taskId: number) => {
    navigate(`/update-task/${taskId}`);
  };

  const handleDelete = async (taskId: number) => {
    await deleteTask(taskId.toString());
    const updatedTasks = allTasks.filter((task) => task.id !== taskId);
    setAllTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    toast.success("Task deleted successfully");
  };

  const handleSearch = (filters: Filter) => {
    const filtered = allTasks.filter((task) => {
      const matchStatus = !filters.status || task.status === filters.status;
      const matchPriority =
        !filters.priority || task.priority === filters.priority;
      const matchTitle = !filters.title || task.title.includes(filters.title);
      return matchStatus && matchPriority && matchTitle;
    });
    setFilteredTasks(filtered);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 ">Our Tasks</h1>
      <TaskFilterForm onSearch={handleSearch} />
      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default OurTasks;
