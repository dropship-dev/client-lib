import type { BatchPayload } from '../models/BatchPayload';
import type { CreatePlatformVariantsDto } from '../models/CreatePlatformVariantsDto';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { UpdatePlatformVariantDto } from '../models/UpdatePlatformVariantDto';
import type { UpdatePlatformVariantsDto } from '../models/UpdatePlatformVariantsDto';
import type { UpdatePlatformVariantStatusDto } from '../models/UpdatePlatformVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PlatformVariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    createPlatformVariants({ platformProductId, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        requestBody: CreatePlatformVariantsDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformVariants({ platformProductId, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        requestBody: UpdatePlatformVariantsDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePlatformVariants({ platformProductId, ids, fulfillmentAgencyId, }: {
        platformProductId: number;
        ids: Array<number>;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    getPlatformVariant({ platformProductId, id, fulfillmentAgencyId, }: {
        platformProductId: number;
        id: number;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariant({ platformProductId, id, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    deletePlatformVariant({ platformProductId, id, fulfillmentAgencyId, }: {
        platformProductId: number;
        id: number;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariantStatus({ platformProductId, id, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantStatusDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformVariant>;
}
