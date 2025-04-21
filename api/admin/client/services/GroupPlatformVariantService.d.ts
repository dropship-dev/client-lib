import type { AddPlatformVariantToGroupDto } from '../models/AddPlatformVariantToGroupDto';
import type { CreateGroupPlatformVariantsDto } from '../models/CreateGroupPlatformVariantsDto';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdateGroupPlatformVariantsDto } from '../models/UpdateGroupPlatformVariantsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class GroupPlatformVariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: CreateGroupPlatformVariantsDto;
    }): CancelablePromise<{
        cost: PrismaJson_PlatformCostInfo;
        platformProductId: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        groupPlatformVariantId: number;
    }): CancelablePromise<{
        cost: PrismaJson_PlatformCostInfo;
        platformProductId: number;
        name: string;
        id: number;
        PlatformVariant: Array<{
            photo: string;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            name: string;
            id: number;
        }>;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    deleteGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        groupPlatformVariantId: number;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        groupPlatformVariantId: number;
        requestBody: UpdateGroupPlatformVariantsDto;
    }): CancelablePromise<{
        cost: PrismaJson_PlatformCostInfo;
        platformProductId: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    addPlatformVariantToGroupDto({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        groupPlatformVariantId: number;
        requestBody: AddPlatformVariantToGroupDto;
    }): CancelablePromise<string>;
}
