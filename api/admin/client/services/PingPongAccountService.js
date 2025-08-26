"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingPongAccountService = void 0;
class PingPongAccountService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPingPongAccount({ fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pingpong-account',
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
     * @returns any Ok
     * @throws ApiError
     */
    connectWithPingPongAccount({ requestBody, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pingpong-account/connect',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'storeId': storeId,
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
     * @returns any Ok
     * @throws ApiError
     */
    getPingPongAccount({ id, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pingpong-account/{id}',
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
}
exports.PingPongAccountService = PingPongAccountService;
