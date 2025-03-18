import type { Permission } from './Permission';
export type EditRoleDto = {
    name?: string;
    permissions?: Array<Permission>;
    assignedUsersId?: Array<string>;
};
