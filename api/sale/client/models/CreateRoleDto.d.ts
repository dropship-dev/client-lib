import type { Permission } from './Permission';
export type CreateRoleDto = {
    name: string;
    permissions: Array<Permission>;
    assignedUsersId?: Array<string>;
};
