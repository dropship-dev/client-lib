"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
class SaleService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSaleInfo() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale',
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
    requestStatus({ userId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/request-status',
            query: {
                'userId': userId,
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
    updateRequest({ requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sale/request-status',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTrackingPerformance({ startDate = '2023-01-01T00:00:00.000Z', endDate, cursor, limit, search, status, sort, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/tracking-performance',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'cursor': cursor,
                'limit': limit,
                'search': search,
                'status': status,
                'sort': sort,
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
exports.SaleService = SaleService;
