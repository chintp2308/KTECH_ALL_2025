import { useForm } from "react-hook-form";
import type { Filter } from "../types";

// Filter form data interface
interface FormData {
  status: string;
  priority: string;
}

// Filter criteria interface for parent component

type Props = {
  onSearch: (filters: Filter) => void;
};

export default function TaskFilterForm({ onSearch }: Props) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      status: "",
      priority: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const filters: Filter = {};
    if (data.status) filters.status = data.status;
    if (data.priority) filters.priority = data.priority;
    onSearch(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-end gap-4">
          {/* Status */}
          <div className="flex-1">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              id="status"
              {...register("status")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            >
              <option value="">All Statuses</option>
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            {errors.status && (
              <p className="text-sm text-red-500 mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          {/* Priority */}
          <div className="flex-1">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Priority
            </label>
            <select
              id="priority"
              {...register("priority")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            >
              <option value="">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && (
              <p className="text-sm text-red-500 mt-1">
                {errors.priority.message}
              </p>
            )}
          </div>

          {/* Search Button */}
          <div className="lg:self-end">
            <button
              type="submit"
              className="w-full lg:w-auto px-6 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
