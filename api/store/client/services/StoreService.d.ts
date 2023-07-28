import type { Currency } from '../models/Currency';
import type { CustomDomain } from '../models/CustomDomain';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
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
        address: string;
        email: string;
        phone: string;
        updatedAt: string;
        createdAt: string;
        name: string;
        id: string;
        Currency: Currency;
        Payment: Array<Payment>;
        CustomDomain: Array<CustomDomain>;
        ActiveTheme: {
            updatedAt: string;
            createdAt: string;
            themeTemplateId: number;
            storeId: string;
            coverImage: string;
            logo: string;
            icon: string;
            name: string;
            id: number;
            colors: any;
            typos: any;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethod({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        publishableKey: string;
        type: PaymentType;
        email: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
}
