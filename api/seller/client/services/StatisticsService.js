"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
class StatisticsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsStoreAbandonmentCheckout({ storeId, startTime = '2023-01-02T00:00:00.000Z', endTime = '2024-08-09T03:35:41.124Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/statistics/abandonments-checkout/store/{storeId}',
            path: {
                'storeId': storeId,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
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
exports.StatisticsService = StatisticsService;
