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
    /**
     * @returns ExportOrderResponseDto Ok
     * @throws ApiError
     */
    exportAllOrders({ fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/export',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'storeId': storeId,
                'paymentStatus': paymentStatus,
                'fulfillmentStatus': fulfillmentStatus,
                'email': email,
                'productName': productName,
                'startDate': startDate,
                'endDate': endDate,
                'startTotal': startTotal,
                'endTotal': endTotal,
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
    updateFulfillmentStatus({ requestBody, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/order/fulfillmentStatus',
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
     * @returns UpdateFulFillmentStatusResp Ok
     * @throws ApiError
     */
    updateFulfillmentStatusForSup({ requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/order/fulfillmentStatusForSup',
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
     * @returns GetOrderResult Ok
     * @throws ApiError
     */
    getOrder({ fulfillmentAgencyId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/{id}',
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
     * @returns any Ok
     * @throws ApiError
     */
    getAllOrders({ fulfillmentAgencyId, pageSize = 20, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, search, disputeStatus, productName, startDate, endDate, startTotal, endTotal, gateway, fraudStatus, taxable, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order',
            query: {
                'pageSize': pageSize,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'nextPageIndex': nextPageIndex,
                'storeId': storeId,
                'paymentStatus': paymentStatus,
                'fulfillmentStatus': fulfillmentStatus,
                'search': search,
                'disputeStatus': disputeStatus,
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
     * @returns any Ok
     * @throws ApiError
     */
    manualFraudDetection({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/order/manual-fraud-detection',
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
    refundOrder({ fulfillmentAgencyId, orderId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/order/{orderId}/refund-order',
            path: {
                'orderId': orderId,
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
     * @returns HistoryItem Ok
     * @throws ApiError
     */
    getHistoriesTracking1({ orderId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/{orderId}/history-tracking',
            path: {
                'orderId': orderId,
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
exports.OrderService = OrderService;
