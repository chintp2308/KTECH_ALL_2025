import type { Task } from "../types";

const baseUrl = "https://server.aptech.io";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${
    localStorage.getItem("access_token") ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNDI3NjcyLCJleHAiOjE3ODM5ODUyNzJ9.xeuyxQqVpPnA7qcTYT7HsgtF9k5AVvnfvxO1zhz5FGo"
  }`,
};

export const login = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: defaultHeaders,
  });
  return response.json();
};

export const getTasksById = async (id: number) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    headers: defaultHeaders,
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
