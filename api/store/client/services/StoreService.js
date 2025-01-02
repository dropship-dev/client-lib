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
    getStoreActiveTheme({ storeId, pageName, getFont, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/active-theme',
            path: {
                'storeId': storeId,
            },
            query: {
                'pageName': pageName,
                'getFont': getFont,
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethodClientToken({ storeId, clientId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/payment-method/client-token',
            path: {
                'storeId': storeId,
            },
            query: {
                'clientId': clientId,
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
    contactStore({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/contact',
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
    getOrderTracking({ storeId, email, orderId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/tracking',
            path: {
                'storeId': storeId,
            },
            query: {
                'email': email,
                'orderId': orderId,
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
    getDebtPayment({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/debt-payment',
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
     * @returns any Ok
     * @throws ApiError
     */
    getWarningStore({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/warning',
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
     * @returns string Ok
     * @throws ApiError
     */
    toggleWarningStore({ storeId, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/store/{storeId}/warning',
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
