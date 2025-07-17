import React, { useEffect } from "react";
import { getTasks } from "../services/service";
import type { Task } from "../types";
import { useNavigate } from "react-router-dom";

const OurTasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  const handleOnClick = (id: number) => {
    navigate(`/update-task/${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-500">Our Tasks</h1>
      <div className="w-full p-4">
        <table className="w-full">
          <thead className="bg-gray-100 text-center border border-green-300">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Assignee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task: Task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>
                  {task.start_date
                    ? new Date(task.start_date).toLocaleDateString()
                    : ""}
                </td>
                <td>
                  {task.due_date
                    ? new Date(task.due_date).toLocaleDateString()
                    : ""}
                </td>
                <td>{task.assignee_id}</td>
                <td>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleOnClick(task.id)}
                  >
                    Edit
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

export default OurTasks;
