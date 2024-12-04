"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingPongAccountV2Service = void 0;
class PingPongAccountV2Service {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPingPongAccountV2({ requestBody, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/pingpong-account',
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
     * @returns string Ok
     * @throws ApiError
     */
    deletePingPongAccountV2({ id, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/pingpong-account/{id}',
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
    updateDefaultV2({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v2/pingpong-account/{storeId}',
            path: {
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
}
exports.PingPongAccountV2Service = PingPongAccountV2Service;
