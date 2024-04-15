import type { CostCalculationMethod } from '../models/CostCalculationMethod';
import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { PaymentType } from '../models/PaymentType';
import type { Store } from '../models/Store';
import type { StoreRole } from '../models/StoreRole';
import type { StoreStatus } from '../models/StoreStatus';
import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';
import type { Timezone } from '../models/Timezone';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    createStore({ requestBody, }: {
        requestBody: CreateStoreDto;
    }): CancelablePromise<Store>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStores({ fulfillmentAgencyId, pageSize, status, periodFrom, nextPageIndex, name, userId, paymentGatewayIds, platformProductId, referralCode, }: {
        fulfillmentAgencyId?: number;
        /**
         * number of stores to return
         */
        pageSize?: number;
        status?: Array<StoreStatus>;
        periodFrom?: string;
        /**
         * last store id of previous page. Set to 0 to get first page
         */
        nextPageIndex?: string;
        /**
         * filter by store name
         */
        name?: string;
        /**
         * filter by user id. This param is only available for admin
         */
        userId?: string;
        paymentGatewayIds?: Array<number>;
        platformProductId?: number;
        referralCode?: string;
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
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<(Store & {
        Wallet: Array<Wallet>;
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
        Theme: Array<(Theme & {
            ThemePage: Array<ThemePage>;
        })>;
    })>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStore({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateStoreDto;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    deleteStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStoreStatus({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateStoreStatusDto;
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
