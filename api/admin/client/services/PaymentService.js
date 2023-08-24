"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Payment Ok
     * @throws ApiError
     */
    createPayment({ requestBody, fulfillmentAgencyId = 1, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/payment',
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
    getAllPayment({ fulfillmentAgencyId = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment',
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
    getPayment({ id, fulfillmentAgencyId = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/{id}',
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
}
exports.PaymentService = PaymentService;
