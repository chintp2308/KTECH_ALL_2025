import type { Task } from "../types";
import { useAuthStore } from "../useAuthStore";
import TaskDate from "./TaskDate";
import TaskPriority from "./TaskPriority";
import TaskStatus from "./TaskStatus";
import TaskTitle from "./TaskTitle";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  tasks: Task[];
  onEdit: (taskId: number) => void;
  onDelete: (taskId: number) => void;
};

const TaskList = ({ tasks, onEdit, onDelete }: Props) => {
  const { loggedInUser } = useAuthStore((state) => state);
  const isAdmin = loggedInUser?.roles?.some(
    (role) => role.name === "Administrators"
  );
  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 mt-10  mb-10">
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
          {tasks?.map((task: Task) => (
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
                <TaskDate date={task.start_date} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <TaskDate date={task.due_date} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 font-medium">
                {task.assignee_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                {isAdmin && (
                  <>
                    <button
                      type="button"
                      title="Edit"
                      className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      onClick={() => onEdit(task.id as number)}
                    >
                      <FaEdit size={14} />
                    </button>
                    <button
                      type="button"
                      title="Delete"
                      className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      onClick={() => onDelete(task.id as number)}
                    >
                      <FaTrash size={14} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
