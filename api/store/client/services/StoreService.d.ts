import type { ContactFormDto } from '../models/ContactFormDto';
import type { Currency } from '../models/Currency';
import type { CustomDomain } from '../models/CustomDomain';
import type { EnvironmentType } from '../models/EnvironmentType';
import type { PaymentType } from '../models/PaymentType';
import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';
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
        subDomain: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        timezone: Timezone;
        phone: string;
        email: string;
        name: string;
        Currency: Currency;
        CustomDomain: Array<CustomDomain>;
        updatedAt: string;
        createdAt: string;
        id: string;
        fulfillmentAgencyId: number;
        Theme: (Theme & {
            ThemePage: Array<ThemePage>;
            ThemeTemplate: ThemeTemplate;
        });
        Payment: Array<{
            environment: EnvironmentType;
            UIVersion: number;
            publishableKey: string;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
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
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    contactStore({ storeId, requestBody, }: {
        storeId: string;
        requestBody: ContactFormDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getOrderTracking({ storeId, email, orderId, }: {
        storeId: string;
        email: string;
        orderId?: string;
    }): CancelablePromise<Array<{
        OrderItem: Array<{
            carrier: string;
            tracking: string;
            quantity: number;
            price: number;
            VariantCombo: {
                photo: string;
                name: string;
            };
            ProductVariant: {
                photo: string;
                name: string;
            };
            Product: {
                name: string;
                id: number;
            };
        }>;
        id: string;
    }>>;
}
