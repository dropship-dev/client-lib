import type { Permission } from './Permission';
import type { SellerPermission } from './SellerPermission';
import type { SuperAdminPermission } from './SuperAdminPermission';
export type CreateRoleRes = {
    updatedAt: string;
    createdAt: string;
    permissions: Array<(Permission | SuperAdminPermission | SellerPermission)>;
    name: string;
    id: number;
};
