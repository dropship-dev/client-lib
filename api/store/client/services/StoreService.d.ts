import type { Currency } from '../models/Currency';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
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
        storeId: number;
    }): CancelablePromise<{
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        timezone: number;
        customDomain: string;
        domain: string;
        email: string;
        address: string;
        phone: string;
        updatedAt: string;
        createdAt: string;
        name: string;
        id: number;
        Currency: Currency;
        Payment: Array<Payment>;
        ActiveTheme: {
            updatedAt: string;
            createdAt: string;
            themeTemplateId: number;
            storeId: number;
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
        storeId: number;
    }): CancelablePromise<Array<{
        publishableKey: string;
        type: PaymentType;
        email: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
}
