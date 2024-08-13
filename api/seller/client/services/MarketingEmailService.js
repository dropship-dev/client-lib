"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingEmailService = void 0;
class MarketingEmailService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsStoreAbandonmentCheckout({ storeId, startTime = '2023-01-02T00:00:00.000Z', endTime = '2024-08-13T02:51:06.872Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/statistics/abandonments-checkout/store/{storeId}',
            path: {
                'storeId': storeId,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
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
     * @returns void
     * @throws ApiError
     */
    updateAutomationEmailMarketing({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/marketing/email/abandonment/settings/{storeId}',
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
     * @returns void
     * @throws ApiError
     */
    updateActiveStatusAutomationEmailMarketing({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/marketing/email/abandonment/settings/{storeId}',
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
     * @returns any Ok
     * @throws ApiError
     */
    listAbandonmentSettings({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/email/abandonment/settings/{storeId}',
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
    listAbandonmentOrders({ storeId, pageSize, nextPageIndex, emailStatus, recoveryStatus, id, startDate, endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/email/abandonment/store/{storeId}/orders',
            path: {
                'storeId': storeId,
            },
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'emailStatus': emailStatus,
                'recoveryStatus': recoveryStatus,
                'id': id,
                'startDate': startDate,
                'endDate': endDate,
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
    getDetailAbandonmentCheckout({ storeId, orderTrackingId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/email/abandonment/store/{storeId}/orders/{orderTrackingId}',
            path: {
                'storeId': storeId,
                'orderTrackingId': orderTrackingId,
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
     * @returns void
     * @throws ApiError
     */
    createTemplate({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/marketing/email/template/settings',
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
    updateTemplate({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/marketing/email/template/settings/{id}',
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
}
exports.MarketingEmailService = MarketingEmailService;
