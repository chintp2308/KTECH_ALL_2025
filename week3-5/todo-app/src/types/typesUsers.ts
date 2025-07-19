export interface Role {
  id: number;
  name: string;
  code: string;
  description?: string;
}

export interface User {
  id: number;
  fullName: string;
  username: string;
  status: string;
  roles?: Role[];
}

export interface UserRole {
  userId: number;
  roleId: number;
  roleName: string;
  roleCode: string;
}
