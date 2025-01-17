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
}
exports.StoreTagService = StoreTagService;
