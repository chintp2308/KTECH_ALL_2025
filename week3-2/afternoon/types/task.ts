export interface Task {
  id?: string | number;

  title: string;
  description?: string;

  start_date: string;
  due_date?: string;

  status: "to_do" | "in_progress" | "done";
  completed_date?: string;
  priority: "low" | "medium" | "high";

  assignee_id?: number;

  created_by?: number;
  created_time: string;

  updated_by?: number;
  updated_time: string;
}

export interface Filter {
  status?: string;
  priority?: string;
  title?: string;
}

export interface User {
  id: number;
  email: string;
  access_token: string;
}
