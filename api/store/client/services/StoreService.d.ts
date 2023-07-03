import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
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
        updatedAt: string;
        createdAt: string;
        Payment: Array<GetResult_any_any_any_>;
        Currency: GetResult_any_any_any_;
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
        name: string;
        id: number;
        ActiveTheme: {
            themeTemplateId: number;
            coverImage: string;
            logo: string;
            icon: string;
            storeId: number;
            name: string;
            updatedAt: string;
            createdAt: string;
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
        updatedAt: string;
        createdAt: string;
        email: string;
        publishableKey: string;
        type: PaymentType;
        id: number;
    }>>;
}
