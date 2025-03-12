"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listStorePaymentMethods({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/payments',
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
    retrieveClientSecret({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/payments/secret',
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
    setStoreDefaultPaymentMethod({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/payments/set-primary',
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
    deleteStoreCard({ storeId, paymentMethodId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/payments/{paymentMethodId}',
            path: {
                'storeId': storeId,
                'paymentMethodId': paymentMethodId,
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
    addNewPaymentOnboarding({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/payment/add-new-payment-onboarding',
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
    createPaymentV2({ requestBody, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/payment/create-payment-v2',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPayment({ requestBody, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/payment',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment({ fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getAllPaymentOnboarding({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/onboarding',
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
    getPaymentOnboarding({ fulfillmentAgencyId, onBoardingId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/onboarding/{onBoardingId}',
            path: {
                'onBoardingId': onBoardingId,
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
     * @returns string Ok
     * @throws ApiError
     */
    deletePaymentOnboarding({ onBoardingId, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/payment/onboarding/{onBoardingId}',
            path: {
                'onBoardingId': onBoardingId,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getPayment({ id, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/{id}',
            path: {
                'id': id,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    updatePayment({ id, requestBody, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/payment/{id}',
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePayment({ id, fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/payment/{id}',
            path: {
                'id': id,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getPaymentStores({ fulfillmentAgencyId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payment/{id}/store',
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
     * @returns string Ok
     * @throws ApiError
     */
    addPaymentToStores({ fulfillmentAgencyId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/payment/{id}/store',
            path: {
                'id': id,
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
}
exports.PaymentService = PaymentService;
