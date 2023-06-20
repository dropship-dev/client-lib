import type { CreateVariantDto } from '../models/CreateVariantDto';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PlatformVariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    createPlatformVariant({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: CreateVariantDto;
    }): CancelablePromise<PlatformVariant>;
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
        requestBody: UpdateVariantDto;
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
        requestBody: UpdateVariantStatusDto;
    }): CancelablePromise<PlatformVariant>;
}
