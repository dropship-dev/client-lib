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
}
exports.SaleService = SaleService;
