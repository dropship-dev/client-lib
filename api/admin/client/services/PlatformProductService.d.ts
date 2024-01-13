import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { AdminTag } from '../models/AdminTag';
import type { AvailableSet } from '../models/AvailableSet';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { GroupPlatformVariant } from '../models/GroupPlatformVariant';
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
    createPlatformProduct({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreatePlatformProductDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPlatformProduct({ fulfillmentAgencyId, pageSize, nextPageIndex, name, tags, isActive, startPrice, endPrice, }: {
        fulfillmentAgencyId: number;
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
                platformProductId: number;
                id: number;
                storeId: string;
            }>;
            Tag: Array<AdminTag>;
            GroupPlatformVariant: Array<(GroupPlatformVariant & {
                PlatformVariant: Array<{
                    photo: string;
                    SKU: string;
                    name: string;
                    id: number;
                }>;
            })>;
            PlatformVariant: Array<PlatformVariant>;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            deleted: boolean;
            isEnable: boolean;
            isActive: boolean;
            supplierContact: string;
            availableSet: AvailableSet;
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
    deletePlatformProducts({ fulfillmentAgencyId, ids, }: {
        fulfillmentAgencyId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformProductStatuses({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdatePlatformProductStatusesDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformProduct({ fulfillmentAgencyId, platformProductId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
    }): CancelablePromise<(PlatformProduct & {
        Tag: Array<AdminTag>;
        GroupPlatformVariant: Array<(GroupPlatformVariant & {
            PlatformVariant: Array<{
                photo: string;
                SKU: string;
                name: string;
                id: number;
            }>;
        })>;
        PlatformVariant: Array<PlatformVariant>;
    })>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProduct({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: UpdatePlatformProductDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProduct({ fulfillmentAgencyId, platformProductId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProductStatus({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: UpdatePlatformProductStatusDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    addPlatformProductTag({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: AddPlatformProductTagDto;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProductTag({ fulfillmentAgencyId, platformProductId, tagId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        tagId: string;
    }): CancelablePromise<PlatformProduct>;
    /**
     * @returns PlatformProductStore Ok
     * @throws ApiError
     */
    getPlatformProductStore({ fulfillmentAgencyId, platformProductId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
    }): CancelablePromise<Array<PlatformProductStore>>;
}
