import type { PrismaJson_HoldSetting } from '../models/PrismaJson_HoldSetting';
import type { UpdateSettingDto } from '../models/UpdateSettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SettingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSetting({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<({
        percentageCostPlatformFee: number;
        hold: PrismaJson_HoldSetting;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        customerSupportMailFee: number;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    } | {
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateSetting({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateSettingDto;
    }): CancelablePromise<{
        percentageCostPlatformFee: number;
        hold: PrismaJson_HoldSetting;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        customerSupportMailFee: number;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
}
