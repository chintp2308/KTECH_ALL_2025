import type { Task } from "../types";
import { apiBaseUrl, defaultHeaders } from "../constants";
import apiClient from "../libraries/api-client";

/**
 * Logs in a user with username and password
 * @param username - User's username
 * @param password - User's password
 * @returns Promise that resolves to user data
 * @throws Error if the request fails
 */
export const login = async (
  username: string,
  password: string
): Promise<any> => {
  const response = await fetch(`${apiBaseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return await response.json();
};

/**
 * Creates a new task
 * @param task - The task object to create
 * @returns Promise that resolves to the created task
 * @throws Error if the request fails
 */

export const createTask = async (task: Task): Promise<Task> => {
  const response = await apiClient.post("/workspaces/tasks", task);
  return response.data;
};

/**
 * Updates an existing task
 * @param task - The task object with updated data
 * @returns Promise that resolves to the updated task
 * @throws Error if the request fails
 */
export const updateTask = async (task: Task): Promise<Task> => {
  const { id, ...taskWithoutId } = task;
  const response = await apiClient.patch(
    `/workspaces/tasks/${id}`,
    taskWithoutId
  );
  return response.data;
};

/**
 * Deletes a task by its ID
 * @param taskId - The ID of the task to delete
 * @returns Promise that resolves when the task is deleted
 * @throws Error if the request fails
 */
export const deleteTask = async (taskId: string): Promise<void> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${taskId}`, {
    method: "DELETE",
    headers: defaultHeaders,
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};

/**
 * Retrieves all tasks
 * @returns Promise that resolves to an array of tasks
 * @throws Error if the request fails
 */
export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
    method: "GET",
    headers: defaultHeaders,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return await response.json();
};

/**
 * Retrieves a specific task by its ID
 * @param taskId - The ID of the task to retrieve
 * @returns Promise that resolves to the task object
 * @throws Error if the request fails
 */
export const getTaskById = async (taskId: string | number): Promise<Task> => {
  const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${taskId}`, {
    method: "GET",
    headers: defaultHeaders,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch task");
  }
  return await response.json();
};
// export const getTaskById = async (taskId: number) => {
//   const response = await apiClient.get(`/workspaces/tasks/${taskId}`);
//   return response.data;
// };

/**
 * Retrieves tasks assigned to a specific user
 * @param assignee_id - The ID of the user to get tasks for
 * @returns Promise that resolves to an array of tasks assigned to the user
 * @throws Error if the request fails
 */
export const getTasksByAssignee = async (
  assignee_id: string | number
): Promise<Task[]> => {
  const response = await fetch(
    `${apiBaseUrl}/workspaces/tasks/assignee/${assignee_id}`,
    {
      method: "GET",
      headers: defaultHeaders,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch tasks by assignee");
  }
  return await response.json();
};
