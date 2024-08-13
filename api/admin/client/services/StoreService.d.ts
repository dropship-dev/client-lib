import type { AddPlatformProductStoresDto } from '../models/AddPlatformProductStoresDto';
import type { ApproveStoreDto } from '../models/ApproveStoreDto';
import type { CostCalculationMethod } from '../models/CostCalculationMethod';
import type { FraudDetection } from '../models/FraudDetection';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { PaymentType } from '../models/PaymentType';
import type { Store } from '../models/Store';
import type { StoreRole } from '../models/StoreRole';
import type { StoreStatus } from '../models/StoreStatus';
import type { StoreType } from '../models/StoreType';
import type { StoreUser } from '../models/StoreUser';
import type { Timezone } from '../models/Timezone';
import type { UpdateManyStorePaymentMethodDto } from '../models/UpdateManyStorePaymentMethodDto';
import type { UpdateStorePaymentMethodDto } from '../models/UpdateStorePaymentMethodDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStores({ fulfillmentAgencyId, pageSize, status, periodFrom, nextPageIndex, name, userId, paymentGatewayIds, platformProductId, referralCode, fraudStatus, }: {
        fulfillmentAgencyId?: number;
        pageSize?: number;
        status?: Array<StoreStatus>;
        periodFrom?: string;
        nextPageIndex?: string;
        name?: string;
        userId?: string;
        paymentGatewayIds?: Array<number>;
        platformProductId?: number;
        referralCode?: string;
        fraudStatus?: Array<FraudStatusType>;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            referralCode: string;
            primaryDomain: string;
            subDomain: string;
            avatar: string;
            timezone: Timezone;
            phone: string;
            email: string;
            name: string;
            FraudDetection: Array<FraudDetection>;
            Wallet: Array<Wallet>;
            FulfillmentAgency: {
                costCalculationMethod: CostCalculationMethod;
            };
            Payment: Array<{
                name: string;
                type: PaymentType;
                id: number;
            }>;
            StoreUser: Array<{
                role: StoreRole;
            }>;
            createdAt: string;
            status: StoreStatus;
            id: string;
            fulfillmentAgencyId: number;
            userRole: StoreRole;
            fraudStatus: FraudStatusType;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    addProductToStores({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: AddPlatformProductStoresDto;
    }): CancelablePromise<Array<Array<any>>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateProductToStores({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: AddPlatformProductStoresDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateManyStorePaymentMethod({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateManyStorePaymentMethodDto;
    }): CancelablePromise<Array<{
        Payment: Array<{
            publishableKey: string;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            email: string;
            name: string;
            createdAt: string;
            type: PaymentType;
            id: number;
        }>;
        id: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        FraudDetection: Array<FraudDetection>;
        Wallet: Array<Wallet>;
        FulfillmentAgency: FulfillmentAgency;
        Payment: Array<{
            publishableKey: string;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            type: PaymentType;
            id: number;
            fulfillmentAgencyId: number;
        }>;
        StoreUser: Array<StoreUser>;
        updatedAt: string;
        createdAt: string;
        currencyId: number;
        fulfillmentAgencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        type: StoreType;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        timezone: Timezone;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        status: StoreStatus;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        email: string;
        phone: string;
        name: string;
        id: string;
        fraudStatus: FraudStatusType;
    }>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStoreStatus({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateStoreStatusDto;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    approveStore({ fulfillmentAgencyId, storeId, requestBody, }: {
        fulfillmentAgencyId: number;
        storeId: string;
        requestBody: ApproveStoreDto;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStorePaymentMethod({ fulfillmentAgencyId, storeId, requestBody, }: {
        fulfillmentAgencyId: number;
        storeId: string;
        requestBody: UpdateStorePaymentMethodDto;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    deleteStorePaymentMethod({ fulfillmentAgencyId, storeId, paymentId, }: {
        fulfillmentAgencyId: number;
        storeId: string;
        paymentId: number;
    }): CancelablePromise<Store>;
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
}
