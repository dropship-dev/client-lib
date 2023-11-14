import type { AddPlatformProductStoresDto } from '../models/AddPlatformProductStoresDto';
import type { ApproveStoreDto } from '../models/ApproveStoreDto';
import type { PaymentType } from '../models/PaymentType';
import type { Store } from '../models/Store';
import type { StoreStatus } from '../models/StoreStatus';
import type { Theme } from '../models/Theme';
import type { UpdateStorePaymentMethodDto } from '../models/UpdateStorePaymentMethodDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStores({ fulfillmentAgencyId, pageSize, status, periodFrom, nextPageIndex, name, userId, paymentGatewayIds, }: {
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
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            primaryDomain: string;
            subDomain: string;
            avatar: string;
            phone: string;
            email: string;
            name: string;
            Payment: Array<{
                name: string;
                type: PaymentType;
                id: number;
            }>;
            createdAt: string;
            status: StoreStatus;
            id: string;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    addProductToStores({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: AddPlatformProductStoresDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<(Store & {
        Payment: Array<{
            publishableKey: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            type: PaymentType;
            id: number;
            fulfillmentAgencyId: number;
        }>;
        Theme: Array<Theme>;
    })>;
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
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethod({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        publishableKey: string;
        email: string;
        updatedAt: string;
        createdAt: string;
        type: PaymentType;
        id: number;
    }>>;
}
