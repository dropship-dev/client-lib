"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
class WalletService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getWallet({ id, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wallet/{id}',
            path: {
                'id': id,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns string Ok
     * @throws ApiError
     */
    withdrawToWallet({ id, fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/wallet/{id}/withdraw',
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
     * @returns string Ok
     * @throws ApiError
     */
    topUpToWallet({ id, fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/wallet/{id}/top-up',
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
}
exports.WalletService = WalletService;
