"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreTagService = void 0;
class StoreTagService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns void
     * @throws ApiError
     */
    connectProductTag({ storeId, productId, name, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/product/{productId}/tag/{name}',
            path: {
                'storeId': storeId,
                'productId': productId,
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
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    deleteProductTag({ storeId, productId, name, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/product/{productId}/tag/{name}',
            path: {
                'storeId': storeId,
                'productId': productId,
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
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    getProductTags({ storeId, productId, search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/{productId}/tag',
            path: {
                'storeId': storeId,
                'productId': productId,
            },
            query: {
                'search': search,
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
     * @returns Tag Ok
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
     * @returns Tag Ok
     * @throws ApiError
     */
    getStoreTags({ storeId, search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/tag',
            path: {
                'storeId': storeId,
            },
            query: {
                'search': search,
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
     * @returns Tag Ok
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
