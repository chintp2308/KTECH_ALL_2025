// pages/task-ssr.tsx

import { getTasks } from "@/services/taskService";
import { Task } from "@/types/task";
import Link from "next/link";
import React from "react";

type Props = {
  tasks: Task[];
};

const TaskSSR = ({ tasks }: Props) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Danh sách công việc (SSR)</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">Không có task nào.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border rounded p-4 shadow hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg">{task.title}</h2>
              <p className="text-sm text-gray-600">
                📅 Từ: {new Date(task.start_date).toLocaleDateString("vi-VN")} →{" "}
                {task.due_date
                  ? new Date(task.due_date).toLocaleDateString("vi-VN")
                  : "Chưa có"}
              </p>
              <p className="text-sm">Ưu tiên: {task.priority}</p>
              <p className="text-sm">Trạng thái: {task.status}</p>
              <Link
                href={`/task-isr/${task.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Chi tiết{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskSSR;

export async function getServerSideProps() {
  try {
    const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const data = await getTasks(token);

    const tasks = Array.isArray(data)
      ? data
      : Array.isArray(data?.data)
      ? data.data
      : [];

    return {
      props: {
        tasks,
      },
    };
  } catch (error) {
    console.error("Lỗi khi fetch task SSR:", error);
    return {
      props: {
        tasks: [],
      },
    };
  }
}
