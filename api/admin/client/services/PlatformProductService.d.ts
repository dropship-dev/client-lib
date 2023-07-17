import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { AdminTag } from '../models/AdminTag';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { Photos } from '../models/Photos';
import type { PlatformProduct } from '../models/PlatformProduct';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Store } from '../models/Store';
import type { UpdatePlatformProductDto } from '../models/UpdatePlatformProductDto';
import type { UpdatePlatformProductStatusDto } from '../models/UpdatePlatformProductStatusDto';
import type { UpdatePlatformProductStatusesDto } from '../models/UpdatePlatformProductStatusesDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PlatformProductService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    createPlatformProduct({ requestBody, }: {
        requestBody: CreatePlatformProductDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPlatformProduct({ pageSize, nextPageIndex, name, tags, isActive, startPrice, endPrice, }: {
        pageSize?: number;
        nextPageIndex?: number;
        name?: string;
        tags?: Array<string>;
        isActive?: boolean;
        startPrice?: number;
        endPrice?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            Product: Array<{
                id: number;
            }>;
            Tag: Array<AdminTag>;
            PlatformVariant: Array<PlatformVariant>;
            updatedAt: string;
            createdAt: string;
            isEnable: boolean;
            isActive: boolean;
            supplierContact: string;
            variantOption: VariantOptions;
            photos: Photos;
            details: string;
            description: string;
            name: string;
            SKU: string;
            id: number;
            noStores: number;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePlatformProducts({ ids, }: {
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformProductStatuses({ requestBody, }: {
        requestBody: UpdatePlatformProductStatusesDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformProduct({ platformProductId, }: {
        platformProductId: number;
    }): CancelablePromise<(PlatformProduct & {
        Tag: Array<AdminTag>;
        PlatformVariant: Array<PlatformVariant>;
    })>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProduct({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: UpdatePlatformProductDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProduct({ platformProductId, }: {
        platformProductId: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProductStatus({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: UpdatePlatformProductStatusDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    addPlatformProductTag({ platformProductId, requestBody, }: {
        platformProductId: number;
        requestBody: AddPlatformProductTagDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProductTag({ platformProductId, tagId, }: {
        platformProductId: number;
        tagId: string;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    getPlatformProductStore({ platformProductId, }: {
        platformProductId: number;
    }): CancelablePromise<Array<Store>>;
}
