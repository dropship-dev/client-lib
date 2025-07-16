import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { CheckRejectStatusDto } from '../models/CheckRejectStatusDto';
import type { CheckVerifyEmailDto } from '../models/CheckVerifyEmailDto';
import type { ResponsePaginateCursor_StoreTrackingPerformance_ } from '../models/ResponsePaginateCursor_StoreTrackingPerformance_';
import type { SaleInfoResponsive } from '../models/SaleInfoResponsive';
import type { sortTrackingPerformance } from '../models/sortTrackingPerformance';
import type { UpdateRequestStatusDto } from '../models/UpdateRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SaleService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSaleInfo(): CancelablePromise<{
        name: string;
        referralLink: string;
        code: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    requestStatus({ userId, }: {
        userId: string;
    }): CancelablePromise<{
        email: string;
        name: string;
        status: _36_Enums_SaleStatus;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateRequest({ requestBody, }: {
        requestBody: UpdateRequestStatusDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTrackingPerformance({ startDate, endDate, cursor, limit, search, status, sort, }: {
        startDate?: string;
        endDate?: string;
        cursor?: string;
        limit?: number;
        search?: string;
        status?: Array<_36_Enums_StoreStatus>;
        sort?: sortTrackingPerformance;
    }): CancelablePromise<(ResponsePaginateCursor_StoreTrackingPerformance_ & {
        total: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListSellerInvitedBySale({ nextPageIndex, pageSize, keyword, startDate, endDate, }: {
        nextPageIndex?: string;
        pageSize?: number;
        keyword?: string;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            totalStore: number;
            revenue: number;
            createdAt: string;
            phone: string;
            name: string;
            email: string;
            id: string;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDetailSellerInvited({ id, }: {
        id: string;
    }): CancelablePromise<{
        gmv: number;
        createdAt: string;
        email: string;
        phone: string;
        name: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoresOpenedBySellerViaSale({ id, nextPageIndex, pageSize, }: {
        id: string;
        nextPageIndex?: string;
        pageSize?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        data: Array<{
            name: string;
            createdAt: string;
            id: string;
        }>;
        total: number;
    }>;
    /**
     * @returns boolean Ok
     * @throws ApiError
     */
    checkVerifyEmailSale({ requestBody, }: {
        requestBody: CheckVerifyEmailDto;
    }): CancelablePromise<boolean>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    checkRejectStatus({ requestBody, }: {
        requestBody: CheckRejectStatusDto;
    }): CancelablePromise<{
        rejectedAt: string;
        status: boolean;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAccountRequest({ nextPageIndex, pageSize, keyword, }: {
        nextPageIndex?: string;
        pageSize?: number;
        keyword?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            email: string;
            name: string;
            createdAt: string;
            id: string;
            SaleUser: {
                status: _36_Enums_SaleStatus;
                id: number;
            };
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    trackingOpenRequest({ data, token, }: {
        data: string;
        token: string;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    searchSale({ nextPageIndex, keyword, pageSize, }: {
        nextPageIndex?: string;
        keyword?: string;
        pageSize?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            name: string;
            createdAt: string;
            id: string;
            SaleUser: {
                code: string;
            };
        }>;
    }>;
    /**
     * @returns SaleInfoResponsive Ok
     * @throws ApiError
     */
    getDetailSaleInfo({ id, }: {
        id: number;
    }): CancelablePromise<SaleInfoResponsive>;
}
