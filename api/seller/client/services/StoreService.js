"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
class StoreService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Store Ok
     * @throws ApiError
     */
    createStore({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store',
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
    getAllStores({ fulfillmentAgencyId = 1, pageSize = 20, status, orderBy, order, periodFrom = '2023-01-01T00:00:00.000Z', periodTo, nextPageIndex, name, userId, revenueFrom, revenueTo, paymentGatewayIds, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'pageSize': pageSize,
                'status': status,
                'orderBy': orderBy,
                'order': order,
                'periodFrom': periodFrom,
                'periodTo': periodTo,
                'nextPageIndex': nextPageIndex,
                'name': name,
                'userId': userId,
                'revenueFrom': revenueFrom,
                'revenueTo': revenueTo,
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
    updateStore({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}',
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
    deleteStore({ storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
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