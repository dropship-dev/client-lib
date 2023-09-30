"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformVariantService = void 0;
class PlatformVariantService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    createPlatformVariants({ fulfillmentAgencyId, platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/platform-product/{platformProductId}/variant',
            path: {
                'platformProductId': platformProductId,
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformVariants({ fulfillmentAgencyId, platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/variant',
            path: {
                'platformProductId': platformProductId,
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePlatformVariants({ fulfillmentAgencyId, platformProductId, ids, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product/{platformProductId}/variant',
            path: {
                'platformProductId': platformProductId,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'ids': ids,
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
    getPlatformVariant({ fulfillmentAgencyId, platformProductId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/platform-product/{platformProductId}/variant/{id}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariant({ fulfillmentAgencyId, platformProductId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/variant/{id}',
            path: {
                'platformProductId': platformProductId,
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
    /**
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    deletePlatformVariant({ fulfillmentAgencyId, platformProductId, id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product/{platformProductId}/variant/{id}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformVariant Ok
     * @throws ApiError
     */
    updatePlatformVariantStatus({ fulfillmentAgencyId, platformProductId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/variant/{id}/status',
            path: {
                'platformProductId': platformProductId,
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
exports.PlatformVariantService = PlatformVariantService;
