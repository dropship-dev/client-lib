"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingPongAccountV2Service = void 0;
class PingPongAccountV2Service {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    bulkCreatePingPongAccount({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/pingpong-account',
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
    bulkUpdatePingPongAccount({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v2/pingpong-account',
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
    bulkDeletePingPongAccount({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/pingpong-account',
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
    getAllAccountPingpong({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/pingpong-account',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns ResponseStoreAddPingpong Ok
     * @throws ApiError
     */
    getStoreAddPingpongAccount({ fulfillmentAgencyId, emailPingpong, name, limit, cursor, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/pingpong-account/store',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'emailPingpong': emailPingpong,
                'name': name,
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
     * @returns ResponseGetStoreByPingpong Ok
     * @throws ApiError
     */
    getStoreByPingpongAccount({ fulfillmentAgencyId, emailPingpong, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/pingpong-account/{email}',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'emailPingpong': emailPingpong,
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
exports.PingPongAccountV2Service = PingPongAccountV2Service;
