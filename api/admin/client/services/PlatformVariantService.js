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
    createPlatformVariants({ platformProductId, requestBody, fulfillmentAgencyId = 1, }) {
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
    updatePlatformVariants({ platformProductId, requestBody, fulfillmentAgencyId = 1, }) {
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
    deletePlatformVariants({ platformProductId, ids, fulfillmentAgencyId = 1, }) {
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
    getPlatformVariant({ platformProductId, id, fulfillmentAgencyId = 1, }) {
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
    updatePlatformVariant({ platformProductId, id, requestBody, fulfillmentAgencyId = 1, }) {
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
    deletePlatformVariant({ platformProductId, id, fulfillmentAgencyId = 1, }) {
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
    updatePlatformVariantStatus({ platformProductId, id, requestBody, fulfillmentAgencyId = 1, }) {
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