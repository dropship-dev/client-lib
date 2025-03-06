"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralService = void 0;
class ReferralService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns GetSummaryReferralResult Ok
     * @throws ApiError
     */
    getSummary({ startDate = '2023-01-01T00:00:00.000Z', endDate, search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/summary',
            query: {
                'startDate': startDate,
                'endDate': endDate,
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
     * @returns GetRevenueStoreByFulfillmentResult Ok
     * @throws ApiError
     */
    getRevenueStoreByFulfillment({ fulfillmentAgencyId, search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/revenue-store-by-fulfillment',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns GetTopRevenueStore Ok
     * @throws ApiError
     */
    getTopRevenueStore({ startDate = '2023-01-01T00:00:00.000Z', endDate, search, topK = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/top-revenue-store',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'search': search,
                'topK': topK,
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
exports.ReferralService = ReferralService;
