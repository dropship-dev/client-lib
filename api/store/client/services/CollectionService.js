"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionService = void 0;
class CollectionService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    createCollection({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/collection',
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
    getAllCollection({ storeId, pageSize = 20, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/collection',
            path: {
                'storeId': storeId,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'startDate': startDate,
                'endDate': endDate,
                'search': search,
                'collectionType': collectionType,
                'collectionStatus': collectionStatus,
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
    getCollection({ id, storeId, isActiveProduct, isEnableProduct, deletedProduct, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/collection/{id}',
            path: {
                'id': id,
                'storeId': storeId,
            },
            query: {
                'isActiveProduct': isActiveProduct,
                'isEnableProduct': isEnableProduct,
                'deletedProduct': deletedProduct,
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
    deleteCollection({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/collection/{id}',
            path: {
                'id': id,
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
     * @returns void
     * @throws ApiError
     */
    updateCollection({ id, storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/collection/{id}',
            path: {
                'id': id,
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
     * @returns Product Ok
     * @throws ApiError
     */
    getProductByConditions({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/collection/get-products-by-conditions-collection',
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
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/collection/delete-many-collection',
            path: {
                'storeId': storeId,
            },
            query: {
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
     * @returns void
     * @throws ApiError
     */
    updateStatusesCollection({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/collection/status',
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
}
exports.CollectionService = CollectionService;
