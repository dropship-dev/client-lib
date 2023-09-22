import type { AddPlatformProductStoresDto } from '../models/AddPlatformProductStoresDto';
import type { PaymentType } from '../models/PaymentType';
import type { Prisma_SortOrder } from '../models/Prisma_SortOrder';
import type { Store } from '../models/Store';
import type { StoreOrderBy } from '../models/StoreOrderBy';
import type { StoreRevenue } from '../models/StoreRevenue';
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
    getAllStores({ fulfillmentAgencyId, pageSize, status, orderBy, order, periodFrom, periodTo, nextPageIndex, name, userId, revenueFrom, revenueTo, paymentGatewayId, }: {
        fulfillmentAgencyId?: number;
        /**
         * number of stores to return
         */
        pageSize?: number;
        status?: Array<StoreStatus>;
        orderBy?: StoreOrderBy;
        order?: Prisma_SortOrder;
        periodFrom?: string;
        periodTo?: string;
        /**
         * last store id of previous page. Set to 0 to get first page
         */
        nextPageIndex?: any;
        /**
         * filter by store name
         */
        name?: string;
        /**
         * filter by user id. This param is only available for admin
         */
        userId?: string;
        revenueFrom?: number;
        revenueTo?: number;
        paymentGatewayId?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number);
        prePageIndex: (string | number);
        total: number;
        data: Array<StoreRevenue>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    addProductToStores({ requestBody, }: {
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
            type: PaymentType;
            email: string;
            updatedAt: string;
            createdAt: string;
            name: string;
            id: number;
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
    approveStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStorePaymentMethod({ storeId, requestBody, }: {
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
        type: PaymentType;
        email: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
}
