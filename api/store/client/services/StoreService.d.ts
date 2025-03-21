import type { _36_Enums_CustomDomainStatus } from '../models/_36_Enums_CustomDomainStatus';
import type { _36_Enums_DomainOrigin } from '../models/_36_Enums_DomainOrigin';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { ContactFormDto } from '../models/ContactFormDto';
import type { PageNameType } from '../models/PageNameType';
import type { PrismaJson_DomainContactInfo } from '../models/PrismaJson_DomainContactInfo';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreActiveTheme({ storeId, pageName, getFont, }: {
        storeId: string;
        pageName?: PageNameType;
        getFont?: boolean;
    }): CancelablePromise<{
        CustomDomain: Array<{
            isPrimary: boolean;
            contactInfo: PrismaJson_DomainContactInfo;
            renewable: boolean;
            renewalPrice: number;
            purchasePrice: number;
            domainOrigin: _36_Enums_DomainOrigin;
            autoRenew: boolean;
            expirationDate: string;
            target: string;
            domain: string;
            status: _36_Enums_CustomDomainStatus;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        }>;
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
        Currency: {
            isSupported: boolean;
            rateToUSD: number;
            name: string;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
            symbol: string;
        };
        timezone: PrismaJson_Timezone;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
        fontPage: Array<any>;
        Klaviyo: {
            publishableKey: string;
        };
        Theme: {
            themeTemplateId: number;
            isActivated: boolean;
            components: any;
            colors: any;
            font: string;
            heroBanner: string;
            logoSize: _36_Enums_LogoSize;
            logo: string;
            nodes: PrismaJson_ThemeNodes;
            setting: PrismaJson_ThemeSetting;
            style: PrismaJson_ThemeStyle;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
            ThemeTemplate: {
                link: string;
                image: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
            ThemePage: Array<{
                themeId: number;
                themeLibraryId: number;
                content: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            }>;
        };
        Payment: Array<{
            salt: string;
            environment: _36_Enums_EnvironmentType;
            UIVersion: number;
            BNcode: string;
            publishableKey: string;
            isPlatform: boolean;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            merchantId: string;
            type: _36_Enums_PaymentType;
            email: string;
            updatedAt: string;
            createdAt: string;
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
        type: _36_Enums_PaymentType;
        email: string;
        updatedAt: string;
        createdAt: string;
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDebtPayment({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        balanceDebt: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getWarningStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        warning: boolean;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    toggleWarningStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<string>;
}
