export type Role = 'student' | 'professor';

export interface User {
  id: number;
  email: string;
  password: string;
  role: Role;
}