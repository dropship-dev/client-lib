import type { StoreStatus } from './StoreStatus';
export type TopStoreByRevenue = {
    status: StoreStatus;
    revenue: number;
    phone: string;
    email: string;
    primaryDomain: string;
    name: string;
    storeId: string;
};
