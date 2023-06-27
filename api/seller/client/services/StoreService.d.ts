import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Prisma_SortOrder } from '../models/Prisma_SortOrder';
import type { StoreOrderBy } from '../models/StoreOrderBy';
import type { StoreRevenue } from '../models/StoreRevenue';
import type { StoreStatus } from '../models/StoreStatus';
import type { UpdateStoreCustomDomainDto } from '../models/UpdateStoreCustomDomainDto';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
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
    createStore({ requestBody, }: {
        requestBody: CreateStoreDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStores({ pageSize, status, orderBy, order, periodFrom, periodTo, nextPageIndex, name, userId, revenueFrom, revenueTo, }: {
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
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number);
        total: number;
        data: Array<StoreRevenue>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }: {
        storeId: number;
    }): CancelablePromise<({
        _count?: {
            Order: number;
            RequestSourcing: number;
            Product: number;
            ActiveTheme: number;
            Transaction: number;
            Collection: number;
            Payment: number;
            Theme: number;
            StoreUser: number;
            Currency: number;
        };
        Order?: Array<GetResult_any_any_any_>;
        RequestSourcing?: Array<GetResult_any_any_any_>;
        Product?: Array<GetResult_any_any_any_>;
        ActiveTheme?: GetResult_any_any_any_;
        Transaction?: Array<GetResult_any_any_any_>;
        Collection?: Array<GetResult_any_any_any_>;
        Payment?: GetResult_any_any_any_;
        Theme?: Array<GetResult_any_any_any_>;
        Currency?: GetResult_any_any_any_;
        StoreUser: Array<GetResult_any_any_any_>;
    } & GetResult_any_any_any_)>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStore({ storeId, requestBody, }: {
        storeId: number;
        requestBody: UpdateStoreDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteStore({ storeId, }: {
        storeId: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStoreStatus({ storeId, requestBody, }: {
        storeId: number;
        requestBody: UpdateStoreStatusDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStoreCustomDomain({ storeId, requestBody, }: {
        storeId: number;
        requestBody: UpdateStoreCustomDomainDto;
    }): CancelablePromise<GetResult_any_any_any_>;
}
