import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { AdminTag } from '../models/AdminTag';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { Photos } from '../models/Photos';
import type { PlatformProduct } from '../models/PlatformProduct';
import type { PlatformProductStore } from '../models/PlatformProductStore';
import type { PlatformVariant } from '../models/PlatformVariant';
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
    createPlatformProduct({ requestBody, fulfillmentAgencyId, }: {
        requestBody: CreatePlatformProductDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPlatformProduct({ fulfillmentAgencyId, pageSize, nextPageIndex, name, tags, isActive, startPrice, endPrice, }: {
        fulfillmentAgencyId?: number;
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
            fulfillmentAgencyId: number;
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
    deletePlatformProducts({ ids, fulfillmentAgencyId, }: {
        ids: Array<number>;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformProductStatuses({ requestBody, fulfillmentAgencyId, }: {
        requestBody: UpdatePlatformProductStatusesDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformProduct({ platformProductId, fulfillmentAgencyId, }: {
        platformProductId: number;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<(PlatformProduct & {
        Tag: Array<AdminTag>;
        PlatformVariant: Array<PlatformVariant>;
    })>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProduct({ platformProductId, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        requestBody: UpdatePlatformProductDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProduct({ platformProductId, fulfillmentAgencyId, }: {
        platformProductId: number;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProductStatus({ platformProductId, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        requestBody: UpdatePlatformProductStatusDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    addPlatformProductTag({ platformProductId, requestBody, fulfillmentAgencyId, }: {
        platformProductId: number;
        requestBody: AddPlatformProductTagDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProductTag({ platformProductId, tagId, fulfillmentAgencyId, }: {
        platformProductId: number;
        tagId: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProductStore Ok
     * @throws ApiError
     */
    getPlatformProductStore({ platformProductId, fulfillmentAgencyId, }: {
        platformProductId: number;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<Array<PlatformProductStore>>;
}
