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
    getAllStoreOrder({ storeId, pageSize = 20, nextPageIndex, paymentStatus, fulfillmentStatus, disputeStatus, search, productName, startDate, endDate, startTotal, endTotal, gateway, fraudStatus, taxable, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order',
            path: {
                'storeId': storeId,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'paymentStatus': paymentStatus,
                'fulfillmentStatus': fulfillmentStatus,
                'disputeStatus': disputeStatus,
                'search': search,
                'productName': productName,
                'startDate': startDate,
                'endDate': endDate,
                'startTotal': startTotal,
                'endTotal': endTotal,
                'gateway': gateway,
                'fraudStatus': fraudStatus,
                'taxable': taxable,
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
     * @returns DetailOrderDto Ok
     * @throws ApiError
     */
    getStoreOrder({ storeId, orderId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/{orderId}',
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
     * @returns UpdateFulFillmentStatusResp Ok
     * @throws ApiError
     */
    updateOrderOfStoreStatus({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/order/orderStatus',
            query: {
                'StoreId': storeId,
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
    refundOrderForSeller({ storeId, orderId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/{orderId}/refund-order',
            path: {
                'orderId': orderId,
            },
            query: {
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
    resendEmailConfirmOrder({ storeId, orderId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/{orderId}/resend-email-confirm-order',
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
     * @returns string Ok
     * @throws ApiError
     */
    createHistoryTrackingOrder({ storeId, orderId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/order/{orderId}/history-tracking',
            path: {
                'storeId': storeId,
                'orderId': orderId,
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
     * @returns HistoryItem Ok
     * @throws ApiError
     */
    getHistoriesTracking({ orderId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/order/{orderId}/history-tracking',
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
