"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailDomainService = void 0;
class EmailDomainService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createEmailDomain({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/email-domain',
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
    getListEmailDomain({ storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/email-domain',
            query: {
                'storeId': storeId,
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
    getListEmailUsername({ storeId, fulfillmentAgencyId, keyword, isActiveEmailDomain, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/email-domain/username',
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'keyword': keyword,
                'isActiveEmailDomain': isActiveEmailDomain,
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
    getListEmailFlowByStore({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/email-domain/email-flow',
            query: {
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
    sendTestEmail({ requestBody, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/email-domain/test-email',
            query: {
                'storeId': storeId,
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
     * @returns string Ok
     * @throws ApiError
     */
    updateEmailFlowAbandonedCheckout({ requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/email-domain/abandoned-checkout',
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
    deleteEmailDomain({ id, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/email-domain/{id}',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
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
    verifyEmailDomain({ id, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/email-domain/{id}/verify',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
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
    getRecordsEmailDomain({ id, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/email-domain/{id}/records',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
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
    addEmailUsername({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/email-domain/{id}/username',
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
    updateEmailUsername({ domainId, emailUsernameId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/email-domain/{domainId}/username/{emailUsernameId}',
            path: {
                'domainId': domainId,
                'emailUsernameId': emailUsernameId,
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
    deleteEmailUsername({ emailUsernameId, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/email-domain/{domainId}/username/{emailUsernameId}',
            path: {
                'emailUsernameId': emailUsernameId,
            },
            query: {
                'storeId': storeId,
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
exports.EmailDomainService = EmailDomainService;
