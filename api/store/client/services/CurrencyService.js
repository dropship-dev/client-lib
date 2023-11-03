"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
class CurrencyService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Currency Ok
     * @throws ApiError
     */
    getCurrency({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/currency/{id}',
            path: {
                'id': id,
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
    createEvents({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/events',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.CurrencyService = CurrencyService;
