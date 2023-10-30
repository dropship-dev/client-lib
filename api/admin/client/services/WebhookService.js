"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookService = void 0;
class WebhookService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    handleEventPaypalService({ agencyId, paymentId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/webhook/paypal-service/{agencyId}/payment/{paymentId}',
            path: {
                'agencyId': agencyId,
                'paymentId': paymentId,
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
exports.WebhookService = WebhookService;
