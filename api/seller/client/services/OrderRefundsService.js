"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRefundsService = void 0;
class OrderRefundsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateHistoryOrderRefund({ id, requestBody, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/order-refunds/{id}',
            path: {
                'id': id,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
}
exports.OrderRefundsService = OrderRefundsService;
