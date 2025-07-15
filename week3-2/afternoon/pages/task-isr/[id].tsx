// pages/task-isr/[id].tsx

import { GetStaticPaths, GetStaticProps } from "next";
import { getTasks, getTasksById } from "@/services/taskService";
import { Task } from "@/types/task";

type Props = {
  task: Task;
};

const TaskISRPage = ({ task }: Props) => {
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
};

export default TaskISRPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const allTasks = await getTasks(token);
  const tasks = Array.isArray(allTasks?.data) ? allTasks.data : allTasks;

  const paths = tasks.slice(0, 10).map((task: Task) => ({
    params: { id: task.id?.toString() ?? "" },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params ?? {};

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const task = await getTasksById(Number(id), token);

  if (!task?.id) {
    return { notFound: true };
  }

  return {
    props: { task },
    revalidate: 60,
  };
};
