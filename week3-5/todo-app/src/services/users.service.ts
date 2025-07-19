import apiClient from "../libraries/api-client";

export const getUsers = async () => {
  const result = await apiClient.get("/security/users");
  return result;
};

export const getUserById = async (id: number) => {
  return await apiClient.get(`/security/users/${id}`);
};

export const createUser = async (user: {
  username: string;
  password: string;
  fullName: string;
}) => {
  const result = await apiClient.post("/security/users", user);
  return result;
};

export const updateUser = async (
  id: number,
  user: { username: string; fullName: string }
) => {
  const result = await apiClient.patch(`/security/users/${id}`, user);
  return result;
};

export const deleteUser = async (id: number) => {
  const result = await apiClient.delete(`/security/users/${id}`);
  return result;
};

export const addRolesToUser = async (userId: number, roleIds: number[]) => {
  const payload = {
    role_ids: roleIds,
  };

  return await apiClient.put(
    `/security/users/${userId}/add-roles-to-user`,
    payload
  );
};
export const removeRoleFromUser = async (userId: number, roleId: number) => {
  const result = await apiClient.put(
    `/security/users/${userId}/remove-role-from-user`,
    { role_id: roleId }
  );
  return result;
};
