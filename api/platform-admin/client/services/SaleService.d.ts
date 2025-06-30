import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_SaleUserTrackingType } from '../models/_36_Enums_SaleUserTrackingType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SaleService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    getDetailSaleInfo({ id, }: {
        id: number;
    }): CancelablePromise<{
        referralInfo: {
            gmvPerSale: number;
            gmv: number;
            totalOrder: number;
            totalStore: number;
        };
        sale: {
            code: string;
            id: number;
            SaleUserTracking: Array<{
                actionById: string;
                saleId: number;
                type: _36_Enums_SaleUserTrackingType;
                updatedAt: string;
                createdAt: string;
                id: number;
            }>;
            User: {
                email: string;
                name: string;
                id: string;
            };
        };
    }>;
}
