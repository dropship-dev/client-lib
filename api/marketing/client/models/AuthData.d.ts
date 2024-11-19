import type { UserRole } from './UserRole';
export type AuthData = {
    id: string;
    role: UserRole;
    email?: string;
};
