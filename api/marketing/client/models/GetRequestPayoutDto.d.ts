import type { _36_Enums_RequestPayoutStatus } from './_36_Enums_RequestPayoutStatus';
export type GetRequestPayoutDto = {
    storeId?: string;
    fulfillmentAgencyId?: number;
    search?: string;
    startDate?: string;
    endDate?: string;
    statusRequest?: Array<_36_Enums_RequestPayoutStatus>;
    pageSize?: number;
    nextPageIndex?: string;
};
