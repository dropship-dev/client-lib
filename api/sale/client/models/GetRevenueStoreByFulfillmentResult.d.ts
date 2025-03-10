import type { _36_Enums_StoreStatus } from './_36_Enums_StoreStatus';
export type GetRevenueStoreByFulfillmentResult = {
    data: Array<{
        revenue: number;
        status: _36_Enums_StoreStatus;
        name: string;
        id: string;
    }>;
    total: number;
};
