import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { SaleInfoResponsive } from '../models/SaleInfoResponsive';
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
