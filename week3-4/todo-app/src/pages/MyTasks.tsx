import { useEffect, useState } from "react";
import { deleteTask } from "../services";
import type { Filter, Task } from "../types";
import { FaEdit, FaTrash } from "react-icons/fa";
import TaskTitle from "../components/TaskTitle";
import TaskStatus from "../components/TaskStatus";
import TaskPriority from "../components/TaskPriority";
import TaskDate from "../components/TaskDate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TaskFilterForm from "../components/TaskFilterForm";
import apiClient from "../libraries/api-client";
import { useAuthStore } from "../useAuthStore";

const MyTasks = () => {
  const { loggedInUser } = useAuthStore((state) => state);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = (await apiClient.get(
          "/workspaces/tasks/assignee/1"
        )) as any[];
        setAllTasks(data);
        setFilteredTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
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
      return matchStatus && matchPriority;
    });
    setFilteredTasks(filtered);
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 ">My Tasks</h1>
      <TaskFilterForm onSearch={handleSearch} />
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 mt-10">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 uppercase text-xs tracking-wider">
              <th className="px-6 py-3">Task</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Priority</th>
              <th className="px-6 py-3">Start Date</th>
              <th className="px-6 py-3">Due Date</th>
              <th className="px-6 py-3">Assignee</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredTasks.map((task: Task) => (
              <tr
                key={task.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  <TaskTitle
                    task={{ title: task.title, description: task.description }}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <TaskStatus task={task} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <TaskPriority priority={task.priority} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <TaskDate date={task.start_date as Date} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <TaskDate date={task.due_date as Date} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 font-medium">
                  {task.assignee_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                  <button
                    type="button"
                    title="Edit"
                    className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    onClick={() => handleEdit(task.id as number)}
                  >
                    <FaEdit size={14} />
                  </button>
                  <button
                    type="button"
                    title="Delete"
                    className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(task.id as number)}
                  >
                    <FaTrash size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTasks;
