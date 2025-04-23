import type { FilterStoreReferral } from './FilterStoreReferral';
export type GetStoreManagementDto = {
    search?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    cursor?: string;
    type?: FilterStoreReferral;
};
