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
     * @returns Currency Ok
     * @throws ApiError
     */
    updateCurrency({ fulfillmentAgencyId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/currency/{id}',
            path: {
                'id': id,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
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
     * @returns Currency Ok
     * @throws ApiError
     */
    createCurrency({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/currency',
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
exports.CurrencyService = CurrencyService;
