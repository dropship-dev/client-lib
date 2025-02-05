"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceService = void 0;
class PerformanceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns LocationResult Ok
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
    getProductPerformance({ fulfillmentAgencyId, startDate = '2023-01-01T00:00:00.000Z', endDate, storeId, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/product',
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
    /**
     * @returns ResponseTrackingPie Ok
     * @throws ApiError
     */
    getTopCountry({ storeId, startDate = '2023-01-01T00:00:00.000Z', endDate = '2025-02-05T02:02:29.225Z', select, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-country',
            query: {
                'storeId': storeId,
                'startDate': startDate,
                'endDate': endDate,
                'select': select,
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
     * @returns ResponseTrackingPie Ok
     * @throws ApiError
     */
    statsDevice({ storeId, startDate = '2023-01-01T00:00:00.000Z', endDate = '2025-02-05T02:02:29.226Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/stats-device',
            query: {
                'storeId': storeId,
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
     * @returns ResponseTrackingPie Ok
     * @throws ApiError
     */
    statsReferrer({ storeId, startDate = '2023-01-01T00:00:00.000Z', endDate = '2025-02-05T02:02:29.226Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/stats-referrer',
            query: {
                'storeId': storeId,
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
     * @returns GetCustomerTrackingResultDto Ok
     * @throws ApiError
     */
    getCustomerTracking({ storeId, startDate = '2023-01-01T00:00:00.000Z', endDate, filterBy, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/customer-tracking',
            query: {
                'storeId': storeId,
                'startDate': startDate,
                'endDate': endDate,
                'filterBy': filterBy,
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
     * @returns GetTrackingRetentionRateResultDto Ok
     * @throws ApiError
     */
    getTrackingRetentionRate({ storeId, startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/tracking-retention-rate',
            query: {
                'storeId': storeId,
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
     * @returns GetPaginateTopLandingPageResultDto Ok
     * @throws ApiError
     */
    getTopLandingPage({ storeId, startDate = '2023-01-01T00:00:00.000Z', endDate, pageSize = 6, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/top-landing-page',
            query: {
                'storeId': storeId,
                'startDate': startDate,
                'endDate': endDate,
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
