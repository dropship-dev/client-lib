import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { SearchBettaSupSellersResponse } from '../models/SearchBettaSupSellersResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentPlatformIntegrationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns SearchBettaSupSellersResponse Ok
     * @throws ApiError
     */
    searchSellersOnBettaSup({ cursor, pageSize, email, }: {
        cursor?: string;
        pageSize?: number;
        email?: string;
    }): CancelablePromise<SearchBettaSupSellersResponse>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductDataFromProductUrl({ xBettamaxApiKey, url, }: {
        xBettamaxApiKey: string;
        url: string;
    }): CancelablePromise<{
        variantOptions: PrismaJson_VariantOptions;
        description: string;
        photos: PrismaJson_Photos;
        name: string;
    }>;
}
