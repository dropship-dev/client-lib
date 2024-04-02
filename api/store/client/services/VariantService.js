"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantService = void 0;
class VariantService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllVariant({ storeId, productId, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/{productId}/variant',
            path: {
                'storeId': storeId,
                'productId': productId,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
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
    getVariant({ storeId, productId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/{productId}/variant/{id}',
            path: {
                'storeId': storeId,
                'productId': productId,
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
exports.VariantService = VariantService;
