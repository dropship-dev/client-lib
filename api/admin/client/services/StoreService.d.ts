import type { ActiveTheme } from '../models/ActiveTheme';
import type { Collection } from '../models/Collection';
import type { Currency } from '../models/Currency';
import type { Order } from '../models/Order';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { Prisma_SortOrder } from '../models/Prisma_SortOrder';
import type { Product } from '../models/Product';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { Store } from '../models/Store';
import type { StoreCountOutputType } from '../models/StoreCountOutputType';
import type { StoreOrderBy } from '../models/StoreOrderBy';
import type { StoreRevenue } from '../models/StoreRevenue';
import type { StoreStatus } from '../models/StoreStatus';
import type { StoreUser } from '../models/StoreUser';
import type { Theme } from '../models/Theme';
import type { Transaction } from '../models/Transaction';
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
        prePageIndex: (string | number);
        total: number;
        data: Array<StoreRevenue>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }: {
        storeId: number;
    }): CancelablePromise<(Store & {
        _count?: StoreCountOutputType;
        Currency?: Currency;
        Order?: Array<Order>;
        Transaction?: Array<Transaction>;
        RequestSourcing?: Array<RequestSourcing>;
        Product?: Array<Product>;
        Payment?: Array<Payment>;
        Collection?: Array<Collection>;
        Theme?: Array<Theme>;
        ActiveTheme?: ActiveTheme;
        StoreUser: Array<StoreUser>;
    })>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStoreStatus({ storeId, requestBody, }: {
        storeId: number;
        requestBody: UpdateStoreStatusDto;
    }): CancelablePromise<Store>;
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    updateStorePaymentMethod({ storeId, requestBody, }: {
        storeId: number;
        requestBody: UpdateStorePaymentMethodDto;
    }): CancelablePromise<Store>;
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
