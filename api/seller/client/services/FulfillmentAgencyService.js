"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentAgencyService = void 0;
class FulfillmentAgencyService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAgencyByEmail({ email, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/get-agency-by-email',
            query: {
                'email': email,
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
    verifyJoinPlatform({ id, paymentType, onBoardingPaymentId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}/verify-join-platform/payment/{paymentType}/onBoardingPayment/{onBoardingPaymentId}',
            path: {
                'id': id,
                'paymentType': paymentType,
                'onBoardingPaymentId': onBoardingPaymentId,
            },
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.FulfillmentAgencyService = FulfillmentAgencyService;
