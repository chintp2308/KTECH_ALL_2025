import React, { useContext, useEffect } from "react";
import { getTaskByAssignee } from "../services/service";
import type { Task } from "../types";
import AuthContext from "../context";

const MyTasks = () => {
  const [tasks, setTasks] = React.useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchTasks = async () => {
      if (user?.id === undefined) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const tasks = await getTaskByAssignee(user.id);
        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-500">My Tasks</h1>
      <div className="w-full p-4 ">
        <table className="w-full">
          <thead className="bg-gray-100  text-center border border-green-300">
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
                  <button>Edit</button>
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
