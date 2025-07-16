import type { SellerPermission } from './SellerPermission';
export type InviteStoreStaffDto = {
    userName: string;
    email: string;
    permissions: Array<SellerPermission>;
};
