"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTrackingService = void 0;
class OrderTrackingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createOrderTracking({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/marketing/orders/track',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
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
    updateOrderTracking({ trackingId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/marketing/orders/{trackingId}/track',
            path: {
                'trackingId': trackingId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.OrderTrackingService = OrderTrackingService;
