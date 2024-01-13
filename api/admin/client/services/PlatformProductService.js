"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformProductService = void 0;
class PlatformProductService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    createPlatformProduct({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/platform-product',
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
    getAllPlatformProduct({ fulfillmentAgencyId, pageSize = 20, nextPageIndex, name, tags, isActive, startPrice, endPrice, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/platform-product',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'name': name,
                'tags': tags,
                'isActive': isActive,
                'startPrice': startPrice,
                'endPrice': endPrice,
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
    deletePlatformProducts({ fulfillmentAgencyId, ids, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product',
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
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformProductStatuses({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/status',
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
    getPlatformProduct({ fulfillmentAgencyId, platformProductId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/platform-product/{platformProductId}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProduct({ fulfillmentAgencyId, platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}',
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
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProduct({ fulfillmentAgencyId, platformProductId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product/{platformProductId}',
            path: {
                'platformProductId': platformProductId,
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
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    updatePlatformProductStatus({ fulfillmentAgencyId, platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/status',
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
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    addPlatformProductTag({ fulfillmentAgencyId, platformProductId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/platform-product/{platformProductId}/tag',
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
     * @returns PlatformProduct Ok
     * @throws ApiError
     */
    deletePlatformProductTag({ fulfillmentAgencyId, platformProductId, tagId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/platform-product/{platformProductId}/tag/{tagId}',
            path: {
                'platformProductId': platformProductId,
                'tagId': tagId,
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
     * @returns PlatformProductStore Ok
     * @throws ApiError
     */
    getPlatformProductStore({ fulfillmentAgencyId, platformProductId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/platform-product/{platformProductId}/store',
            path: {
                'platformProductId': platformProductId,
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
}
exports.PlatformProductService = PlatformProductService;
