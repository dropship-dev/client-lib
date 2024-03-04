"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPayoutService = void 0;
class RequestPayoutService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns RequestPayout Ok
     * @throws ApiError
     */
    createRequestPayout({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-payout',
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
    getAllRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout',
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
                'statusRequest': statusRequest,
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
    countRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/count-request-payout',
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
                'statusRequest': statusRequest,
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
    getRequestPayout({ storeId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * @returns RequestPayout Ok
     * @throws ApiError
     */
    updateRequestPayout({ id, fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/request-payout/{id}',
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
    toolSyncBalanceAmountForSeller() {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/request-payout/tool-sync-balance-amount-for-seller',
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
exports.RequestPayoutService = RequestPayoutService;
