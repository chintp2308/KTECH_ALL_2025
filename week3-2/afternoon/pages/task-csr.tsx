"use client";
import { getTasks } from "@/services/taskService";
import { Task } from "@/types/task";
import Link from "next/link";
import { useEffect, useState } from "react";

const TaskCSR = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      const tasks = await getTasks(token);
      setTasks(tasks);
    };
    fetchTasks();
  }, []);
  return (
    <Link href={`/task-isr/${tasks[0]?.id}`}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">
          📋 Danh sách công việc (CSR) {tasks.length}
        </h1>

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
                  📅 Từ: {new Date(task.start_date).toLocaleDateString("vi-VN")}{" "}
                  →{" "}
                  {task.due_date
                    ? new Date(task.due_date).toLocaleDateString("vi-VN")
                    : "Chưa có"}
                </p>
                <p className="text-sm">Ưu tiên: {task.priority}</p>
                <p className="text-sm">Trạng thái: {task.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

export default TaskCSR;
