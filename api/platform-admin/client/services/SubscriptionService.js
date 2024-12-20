"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
class SubscriptionService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listSubscriptionPlans() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscriptions',
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
    createSubscriptionPlan({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/subscriptions',
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
    listSubscriptionFeatures() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscriptions/features',
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
    createSubscriptionFeature({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/subscriptions/features',
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
     * @returns void
     * @throws ApiError
     */
    getSubscriptionPlan({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subscriptions/{id}',
            path: {
                'id': id,
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
     * @returns void
     * @throws ApiError
     */
    updateSubscriptionPlan({ id, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/subscriptions/{id}',
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
     * @returns string Ok
     * @throws ApiError
     */
    seedSubscriptionPlans() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/subscriptions/seeding',
            errors: {
                400: `Bad request`,
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
    apply14DayFreeTrialForExistedStores({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/subscriptions/apply-14-day-free-trial',
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
    updateSubscriptionFeature({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/subscriptions/features/{id}',
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
     * @returns void
     * @throws ApiError
     */
    deleteSubscriptionFeature({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/subscriptions/features/{id}',
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
}
exports.SubscriptionService = SubscriptionService;
