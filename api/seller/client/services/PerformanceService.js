"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceService = void 0;
class PerformanceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Response Ok
     * @throws ApiError
     */
    getProductByLocation({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-locations',
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
    getLiveVisitor({ storeId, fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/visitor',
            query: {
                'storeId': storeId,
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
    getRevenueOverTime({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, referralCode, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/revenue-over-time',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
                'referralCode': referralCode,
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
     * @returns StoreProductProfit Ok
     * @throws ApiError
     */
    getStoreProductProfit({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/store-product/profit',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
                'search': search,
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
    getStoreProductPerformance({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, search, pageSize, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/store-product',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
                'search': search,
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
