import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Photos } from '../models/Photos';
import type { UpdatePlatformProductDto } from '../models/UpdatePlatformProductDto';
import type { UpdatePlatformProductStatusDto } from '../models/UpdatePlatformProductStatusDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PlatformProductService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPlatformProduct({ requestBody, }: {
        requestBody: CreatePlatformProductDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPlatformProduct({ pageSize, nextPageIndex, name, tags, }: {
        pageSize?: number;
        nextPageIndex?: number;
        name?: string;
        tags?: Array<string>;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number | boolean | Photos | VariantOptions);
        total: number;
        data: Array<({
            Tag: Array<GetResult_any_any_any_>;
            PlatformVariant: Array<GetResult_any_any_any_>;
        } & GetResult_any_any_any_)>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformProduct({ platformProductId, }: {
        platformProductId: number;
    }): CancelablePromise<({
        Tag: Array<GetResult_any_any_any_>;
        PlatformVariant: Array<GetResult_any_any_any_>;
    } & GetResult_any_any_any_)>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePlatformProduct({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: UpdatePlatformProductDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deletePlatformProduct({ platformProductId, }: {
        platformProductId: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePlatformProductStatus({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: UpdatePlatformProductStatusDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    addPlatformProductTag({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: AddPlatformProductTagDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deletePlatformProductTag({ platformProductId, tagId, }: {
        platformProductId: number;
        tagId: string;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformProductStore({ platformProductId, }: {
        platformProductId: number;
    }): CancelablePromise<Array<GetResult_any_any_any_>>;
}
