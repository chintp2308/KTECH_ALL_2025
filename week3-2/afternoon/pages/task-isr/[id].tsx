// pages/task-isr/[id].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { getTasks, getTasksById } from "@/services/taskService";
import { Task } from "@/types/task";

export const revalidate = 60; // ISR revalidation period in seconds

// Generate static paths for valid task IDs
export const getStaticPaths: GetStaticPaths = async () => {
  const tasks: Task[] = await getTasks();
  const paths = tasks
    .filter((task) => typeof task.id === "number" && task.id > 0)
    .map((task) => ({
      params: { id: task.id?.toString() || "" },
    }));

  return {
    paths,
    fallback: "blocking", // Use 'blocking' for ISR with dynamic routes
  };
};

// Fetch task data for the page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Validate params and id
  if (!params || !params.id) {
    return { notFound: true };
  }

  const idNumber = Number(params.id);
  if (isNaN(idNumber) || idNumber <= 0) {
    return { notFound: true };
  }

  const task: Task | null = await getTasksById(idNumber);
  if (!task || typeof task.id !== "number") {
    return { notFound: true };
  }

  return {
    props: { task },
    revalidate: 60, // ISR revalidation
  };
};

// Component to render task details
export default function TaskISR({ task }: { task: Task }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Công việc (ISR)</h1>
      <ul className="space-y-3">
        <li>
          <strong>Tiêu đề:</strong> {task.title}
        </li>
        <li>
          <strong>Mô tả:</strong> {task.description}
        </li>
        <li>
          <strong>Bắt đầu:</strong> {task.start_date}
        </li>
        <li>
          <strong>Kết thúc:</strong> {task.due_date}
        </li>
        <li>
          <strong>Trạng thái:</strong> {task.status}
        </li>
        <li>
          <strong>Ưu tiên:</strong> {task.priority}
        </li>
        <li>
          <strong>Người được giao:</strong> {task.assignee_id}
        </li>
        <li>
          <strong>Người tạo:</strong> {task.created_by}
        </li>
      </ul>
    </div>
  );
}
