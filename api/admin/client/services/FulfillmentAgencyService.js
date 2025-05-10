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
    getAllFulfillmentAgency({ userId, search, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency',
            query: {
                'userId': userId,
                'search': search,
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
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
    generatePartnerReferrals({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfillment-agency/partner-referrals',
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
    getPaymentOnboarding({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/payment-onboarding',
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
     * @returns boolean Ok
     * @throws ApiError
     */
    getPermissionDisconnect({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/permission-disconnect',
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
    getFulfillmentAgency({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}',
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
    updateFulfillmentAgency({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fulfillment-agency/{id}',
            path: {
                'id': id,
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
    deleteFulfillmentAgency({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fulfillment-agency/{id}',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    verifyJoinPlatformV2({ paymentType, onBoardingPaymentId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/verify-join-platformV2/payment/{paymentType}/onBoardingPayment/{onBoardingPaymentId}',
            path: {
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreDebtPayment({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}/store-debt-payment',
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
    getFulfillmentPlatformIntegration({ id, platform, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}/fulfillment-platform-integration',
            path: {
                'id': id,
            },
            query: {
                'platform': platform,
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
    integrateWithFulfillmentPlatform({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fulfillment-agency/{id}/fulfillment-platform-integration',
            path: {
                'id': id,
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
    checkUnfulfilledOrdersFromFulfillmentPlatform({ id, platform, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}/check-unfulfilled-orders-from-fulfillment-platform',
            path: {
                'id': id,
            },
            query: {
                'platform': platform,
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
    changeFulfillmentPlatformSeller({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fulfillment-agency/{id}/change-fulfillment-platform-seller',
            path: {
                'id': id,
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
    disconnectPayment({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfillment-agency/{id}/disconnect-payment',
            path: {
                'id': id,
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
    reconnectPayment({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfillment-agency/{id}/reconnect-payment',
            path: {
                'id': id,
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
     * @returns GetStoreReportResultDto Ok
     * @throws ApiError
     */
    storeReport({ id, pageSize = 20, nextPageIndex, startDate, endDate, search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-agency/{id}/store-report',
            path: {
                'id': id,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'startDate': startDate,
                'endDate': endDate,
                'search': search,
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
exports.FulfillmentAgencyService = FulfillmentAgencyService;
