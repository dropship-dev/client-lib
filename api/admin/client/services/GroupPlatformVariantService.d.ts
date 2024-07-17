import type { AddPlatformVariantToGroupDto } from '../models/AddPlatformVariantToGroupDto';
import type { CreateGroupPlatformVariantsDto } from '../models/CreateGroupPlatformVariantsDto';
import type { GroupPlatformVariant } from '../models/GroupPlatformVariant';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
import type { UpdateGroupPlatformVariantsDto } from '../models/UpdateGroupPlatformVariantsDto';
import type { VariantOptionValues } from '../models/VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class GroupPlatformVariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns GroupPlatformVariant Ok
     * @throws ApiError
     */
    createGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: CreateGroupPlatformVariantsDto;
    }): CancelablePromise<GroupPlatformVariant>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        groupPlatformVariantId: number;
    }): CancelablePromise<{
        cost: PlatformCostInfo;
        platformProductId: number;
        name: string;
        PlatformVariant: Array<{
            photo: string;
            variantOption: VariantOptionValues;
            SKU: string;
            name: string;
            id: number;
        }>;
        id: number;
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
     * @returns GroupPlatformVariant Ok
     * @throws ApiError
     */
    updateGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        groupPlatformVariantId: number;
        requestBody: UpdateGroupPlatformVariantsDto;
    }): CancelablePromise<GroupPlatformVariant>;
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
