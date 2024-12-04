"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreTagService = void 0;
class StoreTagService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStoreTag({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/tag',
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
    getStoreTags({ storeId, search, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/tag',
            path: {
                'storeId': storeId,
            },
            query: {
                'search': search,
                'limit': limit,
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
    deleteStoreTag({ storeId, name, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/tag/{name}',
            path: {
                'storeId': storeId,
                'name': name,
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
exports.StoreTagService = StoreTagService;
