import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTask } from "../services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { Task } from "../types";
import * as yup from "yup";

interface TaskFormData {
  title: string;
  start_date: string;
  due_date?: string;
  description?: string;
  status: "to_do" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  assignee_id?: number;
}

const schema: yup.ObjectSchema<TaskFormData> = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be less than 100 characters"),
  start_date: yup
    .string()
    .required("Start date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date"),
  due_date: yup
    .string()
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date")
    .test(
      "due_date-after-start_date",
      "Due date must be after start date",
      function (value) {
        if (!value) return true;
        const { start_date } = this.parent;
        return new Date(value) >= new Date(start_date);
      }
    ),
  description: yup
    .string()
    .optional()
    .max(500, "Description must be less than 500 characters"),
  status: yup
    .mixed<"to_do" | "in_progress" | "done">()
    .required("Status is required")
    .oneOf(["to_do", "in_progress", "done"], "Please select a valid status"),
  priority: yup
    .mixed<"low" | "medium" | "high">()
    .required("Priority is required")
    .oneOf(["low", "medium", "high"], "Please select a valid priority"),
  assignee_id: yup
    .number()
    .optional()
    .min(1, "Assignee ID cannot be empty if provided"),
});

const CreateTask = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: TaskFormData): Promise<void> => {
    try {
      const taskData: Task = {
        ...data,
        start_date: new Date(data.start_date),
        due_date: data.due_date ? new Date(data.due_date) : undefined,
        completed_date: data.status === "done" ? new Date() : undefined,
        created_time: new Date(),
        updated_time: new Date(),
      };
      await createTask(taskData);
      navigate("/our-tasks");
      toast.success("Task created successfully");
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to create task");
    }
  };

  const handleCancel = () => {
    navigate("/our-tasks");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Task</h1>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Priority
          </label>
          <select
            id="priority"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("priority")}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 text-sm">{errors.priority.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="start_date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("start_date")}
          />
          {errors.start_date && (
            <p className="text-red-500 text-sm">{errors.start_date.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="due_date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Due Date
          </label>
          <input
            type="date"
            id="due_date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("due_date")}
          />
          {errors.due_date && (
            <p className="text-red-500 text-sm">{errors.due_date.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="assignee_id"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Assignee
          </label>
          <input
            type="text"
            id="assignee_id"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("assignee_id")}
          />
          {errors.assignee_id && (
            <p className="text-red-500 text-sm">{errors.assignee_id.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("status")}
          >
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status.message}</p>
          )}
        </div>

        <div className="text-right space-x-4">
          <button
            type="submit"
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
