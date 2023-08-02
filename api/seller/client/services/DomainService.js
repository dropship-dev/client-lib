"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainService = void 0;
class DomainService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    createDomain({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/domain',
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
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    getAllDomain({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/domain',
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
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    getDomain({ storeId, domain, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/domain/{domain}',
            path: {
                'storeId': storeId,
                'domain': domain,
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
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    verifyDomain({ storeId, domain, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/domain/{domain}',
            path: {
                'storeId': storeId,
                'domain': domain,
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
    updateToPrimaryDomain({ storeId, domain, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/domain/{domain}',
            path: {
                'storeId': storeId,
                'domain': domain,
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
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    deleteDomain({ storeId, domain, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/domain/{domain}',
            path: {
                'storeId': storeId,
                'domain': domain,
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
exports.DomainService = DomainService;
