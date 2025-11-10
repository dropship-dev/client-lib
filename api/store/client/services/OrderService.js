"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
class OrderService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStoreOrder({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order',
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
     * @returns string Ok
     * @throws ApiError
     */
    updateStoreOrder({ storeId, tokenClientInfo, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/update-order',
            path: {
                'storeId': storeId,
            },
            headers: {
                'Token-Client-Info': tokenClientInfo,
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
    previewStoreOrder({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/preview',
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
    firstTimePreviewInit({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/preview-v2',
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
    suggestionCrossSell({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/suggestion-cross-sell',
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
    suggestionCrossSellV2({ storeId, productId, isRootProduct, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/suggestion-cross-sell',
            path: {
                'storeId': storeId,
            },
            query: {
                'productId': productId,
                'isRootProduct': isRootProduct,
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
     * @returns SuggestionResponseDto Ok
     * @throws ApiError
     */
    suggestionBoostSale({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/suggestion-boost-sales',
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
     * @returns SuggestionResponseDto Ok
     * @throws ApiError
     */
    suggestionBoostSaleV2({ storeId, productId, boostSaleId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/suggestion-boost-sales',
            path: {
                'storeId': storeId,
            },
            query: {
                'productId': productId,
                'boostSaleId': boostSaleId,
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
    captureStoreOrder({ storeId, orderId, paymentType, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/{orderId}/capture',
            path: {
                'storeId': storeId,
                'orderId': orderId,
            },
            query: {
                'paymentType': paymentType,
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
    revertWhenCaptureFailed({ storeId, orderId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/{orderId}/capture-failed',
            path: {
                'storeId': storeId,
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
    getCustomerInfoForThankYouPage({ storeId, orderId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/{orderId}/info',
            path: {
                'storeId': storeId,
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
    getRevenueOrder({ orderId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/{orderId}/revenue',
            path: {
                'orderId': orderId,
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
exports.OrderService = OrderService;
