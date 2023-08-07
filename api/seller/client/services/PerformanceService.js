"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceService = void 0;
class PerformanceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns StoreRevenueOverTime Ok
     * @throws ApiError
     */
    getRevenueOverTime({ startDate = '2023-01-01T00:00:00.000Z', endDate = '2023-08-07T02:29:55.196Z', storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/revenue-over-time',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCrOverTime({ startDate = '2023-01-01T00:00:00.000Z', endDate = '2023-08-07T02:29:55.216Z', storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/cr-over-time',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns TopProductByOrder Ok
     * @throws ApiError
     */
    getTopProductsByOrders({ startDate = '2023-01-01T00:00:00.000Z', endDate = '2023-08-07T02:29:55.232Z', storeId, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-products-by-orders',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns TopStoreByRevenue Ok
     * @throws ApiError
     */
    getTopStoresByRevenue({ startDate = '2023-01-01T00:00:00.000Z', endDate = '2023-08-07T02:29:55.233Z', limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-store-by-revenue',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPerformanceSummary({ startDate = '2023-01-01T00:00:00.000Z', endDate = '2023-08-07T02:29:55.245Z', storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/summary',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductPerformance({ startDate = '2023-01-01T00:00:00.000Z', endDate = '2023-08-07T02:29:55.253Z', storeId, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/product',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.PerformanceService = PerformanceService;
