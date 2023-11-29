"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
class StoreService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStores({ fulfillmentAgencyId, pageSize = 20, status, periodFrom = '2023-01-01T00:00:00.000Z', nextPageIndex, name, userId, paymentGatewayIds, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'pageSize': pageSize,
                'status': status,
                'periodFrom': periodFrom,
                'nextPageIndex': nextPageIndex,
                'name': name,
                'userId': userId,
                'paymentGatewayIds': paymentGatewayIds,
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
     * @returns Product Ok
     * @throws ApiError
     */
    addProductToStores({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/product',
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
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}',
            path: {
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
     * @returns Store Ok
     * @throws ApiError
     */
    updateStoreStatus({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/status',
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
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    approveStore({ fulfillmentAgencyId, storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/status/approve',
            path: {
                'storeId': storeId,
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
     * @returns Store Ok
     * @throws ApiError
     */
    updateStorePaymentMethod({ fulfillmentAgencyId, storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/payment-method',
            path: {
                'storeId': storeId,
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
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethod({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/payment-method',
            path: {
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
exports.StoreService = StoreService;
