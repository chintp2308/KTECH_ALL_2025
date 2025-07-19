import { useEffect, useState } from "react";
import { getRoles, createRole, deleteRole } from "../services/roles.service";
import type { Role } from "../types/typesUsers";

const Roles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
  });

  const fetchRoles = async () => {
    try {
      const res = await getRoles();
      const rolesData = res.data || res;
      setRoles(Array.isArray(rolesData) ? rolesData : []);
    } catch (error) {
      console.error("Error fetching roles:", error);
      setRoles([]);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateRole = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createRole(formData);
      await fetchRoles();
      setFormData({ code: "", name: "", description: "" });
    } catch (err) {
      console.error("Failed to create role", err);
    }
  };

  const handleDeleteRole = async (id: number) => {
    if (window.confirm("Delete this role?")) {
      try {
        await deleteRole(id);
        await fetchRoles();
      } catch (err) {
        console.error("Failed to delete role", err);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>

      <form onSubmit={handleCreateRole} className="space-y-3 mb-6">
        <input
          type="text"
          name="code"
          value={formData.code}
          onChange={handleInputChange}
          placeholder="Role code"
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Role name"
          className="border w-full px-3 py-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border w-full px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Role
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Code</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="border px-4 py-2">{role.id}</td>
              <td className="border px-4 py-2">{role.code}</td>
              <td className="border px-4 py-2">{role.name}</td>
              <td className="border px-4 py-2">{role.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteRole(role.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
