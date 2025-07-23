"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPayoutService = void 0;
class RequestPayoutService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
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
    getAllRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }) {
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
     * @returns string Ok
     * @throws ApiError
     */
    getOtpForPayoutRequest({ storeId, fulfillmentAgencyId, payoutRequestId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/get-otp',
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'payoutRequestId': payoutRequestId,
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
     * @deprecated
     * @returns any Ok
     * @throws ApiError
     */
    getRequestPayoutV2({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/v2',
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
    getRequestHistory({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/request-history',
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
    waringRequest({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/warning-request',
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
     * @returns number Ok
     * @throws ApiError
     */
    getAmountRequestByStatus({ statusRequestPayout, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/requesting-amount',
            query: {
                'statusRequestPayout': statusRequestPayout,
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
     * @returns any Ok
     * @throws ApiError
     */
    getStatusCreateRequestPayout({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/status-create-request',
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
     * @returns any Ok
     * @throws ApiError
     */
    previewRequestPayout({ id, fulfillmentAgencyId, pingPongId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/{id}/preview-transfer',
            path: {
                'id': id,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'pingPongId': pingPongId,
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
     * @returns any Ok
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    changeToRequesting({ id, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-payout/{id}/change-to-requesting',
            path: {
                'id': id,
            },
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
     * @returns number Ok
     * @throws ApiError
     */
    getAllAmountRequestingStatus({ statusRequestPayout, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-payout/status/{statusRequestPayout}',
            path: {
                'statusRequestPayout': statusRequestPayout,
            },
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
}
exports.RequestPayoutService = RequestPayoutService;
