import type { StoreEmailLogStatus } from './StoreEmailLogStatus';
export type GetListStoreMarketingDto = {
    search?: string;
    rangeDate?: {
        endDate: string;
        startDate: string;
    };
    rangeRevenue?: {
        to: number;
        from: number;
    };
    cursor?: string;
    limit?: number;
    status?: Array<StoreEmailLogStatus>;
};
