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
    getAllOrder({ pageSize = 20, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order',
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
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
     * @returns any Ok
     * @throws ApiError
     */
    getOrder({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/order/{id}',
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
    getAllStoreOrder({ storeId, pageSize = 20, nextPageIndex, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }) {
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
}
exports.OrderService = OrderService;
