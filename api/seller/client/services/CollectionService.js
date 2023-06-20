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
    createCollection({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/collection',
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
     * @returns Collection Ok
     * @throws ApiError
     */
    getCollection({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/collection/{id}',
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
     * @returns Collection Ok
     * @throws ApiError
     */
    updateCollection({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/collection/{id}',
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
     * @returns Collection Ok
     * @throws ApiError
     */
    deleteCollection({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/collection/{id}',
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
exports.CollectionService = CollectionService;
