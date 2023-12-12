import type { Currency } from '../models/Currency';
import type { CustomDomain } from '../models/CustomDomain';
import type { PaymentType } from '../models/PaymentType';
import type { Photos } from '../models/Photos';
import type { Theme } from '../models/Theme';
import type { ThemeTemplate } from '../models/ThemeTemplate';
import type { Timezone } from '../models/Timezone';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreActiveTheme({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        timezone: Timezone;
        subDomain: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        Currency: Currency;
        Product: Array<{
            permalink: string;
            photos: Photos;
            SKU: string;
            name: string;
            id: number;
        }>;
        CustomDomain: Array<CustomDomain>;
        updatedAt: string;
        createdAt: string;
        id: string;
        fulfillmentAgencyId: number;
        Theme: (Theme & {
            ThemeTemplate: ThemeTemplate;
        });
        Payment: Array<{
            UIVersion: number;
            publishableKey: string;
            companyName: string;
            email: string;
            updatedAt: string;
            createdAt: string;
            type: PaymentType;
            id: number;
            clientToken: string;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethod({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        publishableKey: string;
        companyName: string;
        email: string;
        updatedAt: string;
        createdAt: string;
        type: PaymentType;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethodClientToken({ storeId, clientId, }: {
        storeId: string;
        clientId?: string;
    }): CancelablePromise<{
        clientToken: string;
    }>;
}
