import type { Permission } from './Permission';
import type { SuperAdminPermission } from './SuperAdminPermission';
export type CreateRoleRes = {
    updatedAt: string;
    createdAt: string;
    permissions: Array<(Permission | SuperAdminPermission)>;
    name: string;
    id: number;
};
