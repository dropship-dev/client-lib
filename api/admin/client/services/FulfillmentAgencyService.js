"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentAgencyService = void 0;
class FulfillmentAgencyService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllFulfillmentAgency({ userId, search, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency',
            query: {
                'userId': userId,
                'search': search,
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
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
    getFulfillmentAgency({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}',
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
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    updateFulfillmentAgency({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fulfillment-agency/{id}',
            path: {
                'id': id,
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
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    deleteFulfillmentAgency({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fulfillment-agency/{id}',
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
     * @returns any Ok
     * @throws ApiError
     */
    getStoreDebtPayment({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}/store-debt-payment',
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
}
exports.FulfillmentAgencyService = FulfillmentAgencyService;
