"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantComboService = void 0;
class VariantComboService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCombo({ storeId, productId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/product/{productId}/combo',
            path: {
                'storeId': storeId,
                'productId': productId,
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
    getAllCombo({ storeId, productId, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/{productId}/combo',
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
     * @returns string Ok
     * @throws ApiError
     */
    updateCombos({ storeId, productId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/product/{productId}/combo',
            path: {
                'storeId': storeId,
                'productId': productId,
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
    deleteCombos({ storeId, productId, ids, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/product/{productId}/combo',
            path: {
                'storeId': storeId,
                'productId': productId,
            },
            query: {
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
     * @returns Prisma_BatchPayload Ok
     * @throws ApiError
     */
    createCombos({ storeId, productId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/product/{productId}/combo/createCombos',
            path: {
                'storeId': storeId,
                'productId': productId,
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
    getCombo({ storeId, productId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/{productId}/combo/{id}',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCombo({ storeId, productId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/product/{productId}/combo/{id}',
            path: {
                'storeId': storeId,
                'productId': productId,
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
     * @returns any Ok
     * @throws ApiError
     */
    deleteCombo({ storeId, productId, id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/product/{productId}/combo/{id}',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateComboStatus({ storeId, productId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/product/{productId}/combo/{id}/status',
            path: {
                'storeId': storeId,
                'productId': productId,
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
}
exports.VariantComboService = VariantComboService;
