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
    createPlatformVariants({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: CreatePlatformVariantsDto;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformVariants({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: UpdatePlatformVariantsDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePlatformVariants({ fulfillmentAgencyId, platformProductId, ids, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    getPlatformVariant({ fulfillmentAgencyId, platformProductId, id, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariant({ fulfillmentAgencyId, platformProductId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantDto;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    deletePlatformVariant({ fulfillmentAgencyId, platformProductId, id, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariantStatus({ fulfillmentAgencyId, platformProductId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantStatusDto;
    }): CancelablePromise<PlatformVariant>;
}
