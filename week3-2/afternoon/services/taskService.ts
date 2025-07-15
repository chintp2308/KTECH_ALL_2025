import type { Task } from "../types/task";

const baseUrl = "https://server.aptech.io";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getAuthHeader = (token?: string) => {
  return {
    ...defaultHeaders,
    Authorization: `Bearer ${
      token || process.env.NEXT_PUBLIC_ACCESS_TOKEN || ""
    }`,
  };
};
export const getTasks = async (token?: string) => {
  const res = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: getAuthHeader(token),
  });
  const data = await res.json();
  return Array.isArray(data) ? data.slice(0, 10) : [];
};


export const getTasksById = async (id: number, token?: string) => {
  const res = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    headers: getAuthHeader(token),
  });
  return res.json();
};

export const login = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const createTask = async (task: Task) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id: number, task: Task) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: "PUT",
    headers: defaultHeaders,
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (id: string) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: "DELETE",
    headers: defaultHeaders,
  });
  return response.json();
};

export const getTaskByAssignee = async (assigneeId: number) => {
  const response = await fetch(
    `${baseUrl}/workspaces/tasks/assignee/${assigneeId}`,
    {
      headers: defaultHeaders,
    }
  );
  return response.json();
};
