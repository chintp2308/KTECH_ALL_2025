import { useEffect, useMemo, useState } from "react";
import {
  addRolesToUser,
  getUserById,
  getUsers,
  removeRoleFromUser,
} from "../services/users.service";
import { getRoles } from "../services/roles.service";
import type { User, Role, UserRole } from "../types/typesUsers";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingRoles, setLoadingRoles] = useState(true);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        const usersData = res.data || res;
        setUsers(Array.isArray(usersData) ? usersData : []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  // Fetch roles
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await getRoles();
        const rolesData = res.data || res;
        setRoles(Array.isArray(rolesData) ? rolesData : []);
      } catch (error) {
        console.error("Error fetching roles:", error);
      } finally {
        setLoadingRoles(false);
      }
    };
    fetchRoles();
  }, []);

  // Mở modal edit roles
  const handleEditRoles = async (user: User) => {
    setSelectedUser(user);
    setShowEditModal(true);

    try {
      const userData = await getUserById(user.id);
      console.log("User data:", userData);
      console.log("Roles from userData:", userData.roles);

      const roles: Role[] = userData.roles || [];

      const mappedRoles: UserRole[] = roles.map((role) => ({
        userId: user.id,
        roleId: role.id,
        roleCode: role.code,
        roleName: role.name,
      }));

      setUserRoles(mappedRoles);
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  };

  // Thêm role cho user
  const handleAddRole = (role: Role) => {
    if (!selectedUser) return;
    if (userRoles.some((ur) => ur.roleId === role.id)) return;

    const newRole: UserRole = {
      userId: selectedUser.id,
      roleId: role.id,
      roleCode: role.code,
      roleName: role.name,
    };

    setUserRoles((prev) => [...prev, newRole]);
  };

  // Xóa role khỏi user
  const handleRemoveRole = async (roleId: number) => {
    if (!selectedUser) return;
    const roleName = userRoles.find((r) => r.roleId === roleId)?.roleName;
    const confirmRemove = window.confirm(`Remove role ${roleName}?`);
    if (!confirmRemove) return;

    try {
      await removeRoleFromUser(selectedUser.id, roleId);
      setUserRoles((prev) => prev.filter((ur) => ur.roleId !== roleId));
    } catch (error) {
      console.error("Error removing role:", error);
    }
  };

  // Lưu role mới
  const handleSaveChanges = async () => {
    if (!selectedUser) return;
    try {
      const roleIds = userRoles.map((ur) => ur.roleId);
      await addRolesToUser(selectedUser.id, roleIds);
      alert("Roles updated successfully!");
      setShowEditModal(false);
    } catch (error) {
      console.error("Error saving roles:", error);
      alert("Failed to save roles!");
    }
  };

  const availableRoles = useMemo(() => {
    return roles.filter(
      (role) => !userRoles.some((ur) => ur.roleId === role.id)
    );
  }, [roles, userRoles]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (
        <>
          <p className="mb-4">Total users: {users.length}</p>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Full Name</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.fullName || "N/A"}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEditRoles(user)}
                    >
                      Edit Roles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Modal */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              Edit Roles for {selectedUser.username}
            </h2>

            {/* Current Roles */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Current Roles:</h3>
              {userRoles.length === 0 ? (
                <p className="text-gray-500">No roles assigned</p>
              ) : (
                <div className="space-y-2">
                  {userRoles.map((userRole) => (
                    <div
                      key={userRole.roleId}
                      className="flex items-center justify-between bg-gray-100 p-2 rounded"
                    >
                      <div>
                        <span className="font-medium">{userRole.roleName}</span>
                        <span className="text-sm text-gray-500 ml-2">
                          ({userRole.roleCode})
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveRole(userRole.roleId)}
                        className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Available Roles */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Available Roles:</h3>
              {loadingRoles ? (
                <p className="text-sm text-gray-400">Loading roles...</p>
              ) : (
                <div className="space-y-2">
                  {availableRoles.map((role) => (
                    <div
                      key={role.id}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded"
                    >
                      <div>
                        <span className="font-medium">{role.name}</span>
                        <span className="text-sm text-gray-500 ml-2">
                          ({role.code})
                        </span>
                        {role.description && (
                          <p className="text-xs text-gray-400 mt-1">
                            {role.description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddRole(role)}
                        className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={handleSaveChanges}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
