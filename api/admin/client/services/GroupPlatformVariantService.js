"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupPlatformVariantService = void 0;
class GroupPlatformVariantService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/platform-product/{platformProductId}/group',
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
     * @returns any Ok
     * @throws ApiError
     */
    getGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}',
            path: {
                'platformProductId': platformProductId,
                'groupPlatformVariantId': groupPlatformVariantId,
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
     * @returns void
     * @throws ApiError
     */
    deleteGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}',
            path: {
                'platformProductId': platformProductId,
                'groupPlatformVariantId': groupPlatformVariantId,
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
     * @returns any Ok
     * @throws ApiError
     */
    updateGroupPlatformVariant({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}',
            path: {
                'platformProductId': platformProductId,
                'groupPlatformVariantId': groupPlatformVariantId,
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
    addPlatformVariantToGroupDto({ fulfillmentAgencyId, platformProductId, groupPlatformVariantId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}/variants',
            path: {
                'platformProductId': platformProductId,
                'groupPlatformVariantId': groupPlatformVariantId,
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
exports.GroupPlatformVariantService = GroupPlatformVariantService;
