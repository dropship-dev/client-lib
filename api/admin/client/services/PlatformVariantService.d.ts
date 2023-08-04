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
    createPlatformVariants({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: CreatePlatformVariantsDto;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformVariants({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: UpdatePlatformVariantsDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePlatformVariants({ platformProductId, ids, }: {
        platformProductId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    getPlatformVariant({ platformProductId, id, }: {
        platformProductId: number;
        id: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariant({ platformProductId, id, requestBody, }: {
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantDto;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    deletePlatformVariant({ platformProductId, id, }: {
        platformProductId: number;
        id: number;
    }): CancelablePromise<PlatformVariant>;
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariantStatus({ platformProductId, id, requestBody, }: {
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantStatusDto;
    }): CancelablePromise<PlatformVariant>;
}
