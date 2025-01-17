import type { Campaign } from '../models/Campaign';
import type { CreateDiscountDto } from '../models/CreateDiscountDto';
import type { Discount } from '../models/Discount';
import type { UpdateCampaignDto } from '../models/UpdateCampaignDto';
import type { UpdateDiscountDto } from '../models/UpdateDiscountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CampaignService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateCampaign({ storeId, campaignId, requestBody, }: {
        storeId: string;
        campaignId: string;
        requestBody: UpdateCampaignDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCampaign({ storeId, campaignId, }: {
        storeId: string;
        campaignId: string;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCampaignById({ storeId, campaignId, }: {
        storeId: string;
        campaignId: string;
    }): CancelablePromise<(Campaign & {
        listDiscount: Array<Discount>;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCampaignDeleted({ storeId, campaignId, productId, }: {
        storeId: string;
        campaignId: string;
        productId: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteDiscount({ storeId, campaignId, discountId, productIds, }: {
        storeId: string;
        campaignId: string;
        discountId: string;
        productIds: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyDiscount({ storeId, campaignId, discountId, }: {
        storeId: string;
        campaignId: string;
        discountId: Array<string>;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    createManyDiscount({ storeId, campaignId, requestBody, }: {
        storeId: string;
        campaignId: string;
        requestBody: Array<CreateDiscountDto>;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateManyDiscount({ storeId, campaignId, requestBody, }: {
        storeId: string;
        campaignId: string;
        requestBody: Array<UpdateDiscountDto>;
    }): CancelablePromise<'OK' | 'Nothing to update'>;
}
