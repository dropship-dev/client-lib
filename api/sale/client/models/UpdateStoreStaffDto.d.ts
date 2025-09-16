import type { SellerPermission } from './SellerPermission';
export type UpdateStoreStaffDto = {
    userName?: string;
    permissions?: Array<SellerPermission>;
};
