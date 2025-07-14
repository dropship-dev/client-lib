import type { _36_Enums_FulfillmentPlatform } from './_36_Enums_FulfillmentPlatform';
export type GetPlatformProductDto = {
    fulfillmentAgencyId: number;
    pageSize?: number;
    nextPageIndex?: number;
    search?: string;
    tags?: Array<string>;
    isActive?: boolean;
    startPrice?: number;
    endPrice?: number;
    fulfillmentPlatform?: _36_Enums_FulfillmentPlatform | null;
    haveCollection?: boolean | null;
};
