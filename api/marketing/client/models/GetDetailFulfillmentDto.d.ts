import type { FilterStoreStatus } from './FilterStoreStatus';
export type GetDetailFulfillmentDto = {
    search?: string;
    cursor?: string;
    limit?: number;
    status: FilterStoreStatus;
};
