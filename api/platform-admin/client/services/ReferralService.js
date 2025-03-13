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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGmvPerFulfillmentAgency({ startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/gmv-per-fulfillment',
            query: {
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
    detailGmvPerFulfillmentAgency({ fulfillmentId, search, cursor, limit, status, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/gmv-per-fulfillment/{fulfillmentId}',
            path: {
                'fulfillmentId': fulfillmentId,
            },
            query: {
                'search': search,
                'cursor': cursor,
                'limit': limit,
                'status': status,
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
    getGmvByStore({ startDate = '2023-01-01T00:00:00.000Z', endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/gmv-by-store',
            query: {
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
    topReferralSale({ search, startDate = '2023-01-01T00:00:00.000Z', endDate, limit, cursor, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/referral/top-referral-sale',
            query: {
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
                'limit': limit,
                'cursor': cursor,
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
     * @returns string Ok
     * @throws ApiError
     */
    addRefCode({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/referral/add-ref-code',
            body: requestBody,
            mediaType: 'application/json',
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
