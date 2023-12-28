"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceService = void 0;
class PerformanceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRevenueOverTime({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/revenue-over-time',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getCrOverTime({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/cr-over-time',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getTopProductsByOrders({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-products-by-orders',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getTopStoresByRevenue({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-store-by-revenue',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getPerformanceSummary({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/summary',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getProductPerformance({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, productName, orderBy = 'revenue', order = 'DESC', pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/product',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
                'productName': productName,
                'orderBy': orderBy,
                'order': order,
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreProductPerformance({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, pageSize, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/store-product',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentAgencyPerformanceSummary({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/fulfillment-agency/summary',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
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
    getFulfillmentAgencyRevenueOverTime({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/fulfillment-agency/revenue-over-time',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
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
     * @returns SQLResult Ok
     * @throws ApiError
     */
    getFulfillmentAgencyStatistic({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/fulfillment-agency/statistic',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
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
