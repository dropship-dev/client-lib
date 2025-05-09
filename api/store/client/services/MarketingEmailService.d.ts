import type { PrismaJson_CreateComboItems } from '../models/PrismaJson_CreateComboItems';
import type { UnsubscribeEmailMarketingDto } from '../models/UnsubscribeEmailMarketingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MarketingEmailService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    get1X1PixelImage({ data, token, }: {
        data: string;
        token: string;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    unsubscribeEmail({ requestBody, }: {
        requestBody: UnsubscribeEmailMarketingDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    getOrder({ data, token, }: {
        data: string;
        token: string;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTrackingOrderCheckout({ data, token, }: {
        data: string;
        token: string;
    }): CancelablePromise<{
        permalink: string;
        storeId: string;
        comboItems: PrismaJson_CreateComboItems;
        orderItems: Array<{
            productId: number;
            isMainProduct: boolean;
            boostSaleId?: number;
            quantity: number;
            productVariantId: number;
        }>;
    }>;
}
