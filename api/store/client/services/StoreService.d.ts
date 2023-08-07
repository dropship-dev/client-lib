import type { Currency } from '../models/Currency';
import type { CustomDomain } from '../models/CustomDomain';
import type { PaymentType } from '../models/PaymentType';
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
        updatedAt: string;
        createdAt: string;
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
        email: string;
        phone: string;
        name: string;
        id: string;
        Currency: Currency;
        Payment: Array<{
            publishableKey: string;
            type: PaymentType;
            updatedAt: string;
            createdAt: string;
            email: string;
            id: number;
        }>;
        CustomDomain: Array<CustomDomain>;
        Theme: (Theme & {
            ThemeTemplate: ThemeTemplate;
        });
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
        updatedAt: string;
        createdAt: string;
        email: string;
        id: number;
    }>>;
}
