import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { deleteTask, getTasks } from "../services";
import type { Filter, Task } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TaskFilterForm from "../components/TaskFilterForm";

const OurTasks = () => {
  const navigate = useNavigate();

  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setAllTasks(tasks);
        setFilteredTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleEdit = (taskId: number) => {
    navigate(`/update-task/${taskId}`);
  };

  const handleDelete = async (taskId: number) => {
    try {
      await deleteTask(taskId.toString());
      const updatedTasks = allTasks.filter((task) => task.id !== taskId);
      setAllTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Error deleting task");
    }
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
