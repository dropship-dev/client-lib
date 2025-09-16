import type { PrismaJson_HoldSetting } from '../models/PrismaJson_HoldSetting';
import type { PrismaJson_SettingPayoutRequestDay } from '../models/PrismaJson_SettingPayoutRequestDay';
import type { PrismaJson_SettingPayoutRequestTime } from '../models/PrismaJson_SettingPayoutRequestTime';
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
        receiverRequestDay: PrismaJson_SettingPayoutRequestDay;
        receiverRequestTime: PrismaJson_SettingPayoutRequestTime;
        isDeductedProfit: boolean;
        serviceFee: number;
        othersFee: number;
        percentageCostPlatformFee: number;
        hold: PrismaJson_HoldSetting;
        sellerPolicy: string;
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    } | {
        sellerPolicy: any;
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
    })>;
}
