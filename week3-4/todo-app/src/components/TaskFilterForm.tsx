import { useForm } from "react-hook-form";
import type { Filter } from "../types";

interface FormData {
  title: string;
  status: string;
  priority: string;
}

type Props = {
  onSearch: (filters: Filter) => void;
};

export default function TaskFilterForm({ onSearch }: Props) {
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      title: "",
      status: "",
      priority: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const filters: Filter = {};
    if (data.title) filters.title = data.title;
    if (data.status) filters.status = data.status;
    if (data.priority) filters.priority = data.priority;
    onSearch(filters);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
            />
          </svg>
          Filter Tasks
        </h2>
        <p className="text-gray-600 text-sm">
          Search and filter your tasks by title, status, and priority
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex flex-row justify-between items-end">
          {/* Title */}
          <div className="w-full space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700"
            >
              Title
            </label>
            <div className="relative">
              <input
                id="title"
                type="text"
                placeholder="Search by title..."
                {...register("title")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm hover:shadow-md"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex flex-row gap-4 justify-between items-end">
            {/* Status */}
            <div className="w-full space-y-2">
              <label
                htmlFor="status"
                className="block text-sm font-semibold text-gray-700"
              >
                Status
              </label>
              <div className="relative">
                <select
                  id="status"
                  {...register("status")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm hover:shadow-md appearance-none"
                >
                  <option value="">All Statuses</option>
                  <option value="to_do">To Do</option>
                  <option value="in_progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Priority */}
            <div className="w-full space-y-2">
              <label
                htmlFor="priority"
                className="block text-sm font-semibold text-gray-700"
              >
                Priority
              </label>
              <div className="relative">
                <select
                  id="priority"
                  {...register("priority")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm hover:shadow-md appearance-none"
                >
                  <option value="">All Priorities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                disabled={isSubmitting}
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {isSubmitting ? "Searching..." : "Search"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
