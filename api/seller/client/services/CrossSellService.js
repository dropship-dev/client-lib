"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossSellService = void 0;
class CrossSellService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    createCrossSell({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/cross-sell',
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
    getAllCrossSell({ storeId, pageSize = 20, nextPageIndex, startDate, endDate, search, crossSellType, crossSellStatus, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/cross-sell',
            path: {
                'storeId': storeId,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'startDate': startDate,
                'endDate': endDate,
                'search': search,
                'crossSellType': crossSellType,
                'crossSellStatus': crossSellStatus,
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
    getCrossSell({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/cross-sell/{id}',
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
     * @returns string Ok
     * @throws ApiError
     */
    updateCrossSell({ id, storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/cross-sell/{id}',
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
     * @returns any Ok
     * @throws ApiError
     */
    deleteCrossSell({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/cross-sell/{id}',
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
    updateStatusesCrossSell({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/cross-sell/{id}/status',
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
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    deleteManyCrossSell({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/cross-sell/delete-many-cross-sells',
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
}
exports.CrossSellService = CrossSellService;
