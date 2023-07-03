import type { StoreRole } from './StoreRole';
/**
 * Model StoreUser
 */
export type StoreUser = {
    updatedAt: string;
    createdAt: string;
    role: StoreRole;
    userId: string;
    storeId: number;
    id: number;
};
