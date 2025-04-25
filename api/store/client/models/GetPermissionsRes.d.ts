import type { Permission } from './Permission';
import type { SuperAdminPermission } from './SuperAdminPermission';
export type GetPermissionsRes = {
    superAdminPermissions: Array<SuperAdminPermission>;
    permissions: Array<Permission>;
};
