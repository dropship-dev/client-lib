import type { CreateVariantDto } from '../models/CreateVariantDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PlatformVariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPlatformVariant({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: CreateVariantDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformVariant({ platformProductId, id, }: {
        platformProductId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePlatformVariant({ platformProductId, id, requestBody, }: {
        platformProductId: number;
        id: number;
        requestBody: UpdateVariantDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deletePlatformVariant({ platformProductId, id, }: {
        platformProductId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePlatformVariantStatus({ platformProductId, id, requestBody, }: {
        platformProductId: number;
        id: number;
        requestBody: UpdateVariantStatusDto;
    }): CancelablePromise<GetResult_any_any_any_>;
}
