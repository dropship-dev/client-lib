"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformVariantService = void 0;
class PlatformVariantService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    createPlatformVariant({ platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/platform-product/{platformProductId}/variant',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    getPlatformVariant({ platformProductId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/platform-product/{platformProductId}/variant/{id}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariant({ platformProductId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/variant/{id}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    deletePlatformVariant({ platformProductId, id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product/{platformProductId}/variant/{id}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariantStatus({ platformProductId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/variant/{id}/status',
            path: {
                'platformProductId': platformProductId,
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
exports.PlatformVariantService = PlatformVariantService;
