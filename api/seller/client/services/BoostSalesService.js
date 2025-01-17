"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostSalesService = void 0;
class BoostSalesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createBoostSale({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/boost-sales',
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
    getAllBoostSale({ storeId, pageSize = 20, nextPageIndex, startDate, endDate, search, crossSellType, crossSellStatus, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/boost-sales',
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
    getBoostSaleByPermalinkSideStore({ storeId, permalink, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/boost-sales/get-boost-sale-permalink-side-store',
            path: {
                'storeId': storeId,
            },
            query: {
                'permalink': permalink,
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
    getBoostSales({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/boost-sales/{id}',
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
    updateBoostSales({ id, storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/boost-sales/{id}',
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
    deleteBoostSales({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/boost-sales/{id}',
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
    updateStatusesBoostSales({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/boost-sales/{id}/status',
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
     * @returns Prisma_BatchPayload Ok
     * @throws ApiError
     */
    deleteManyBoostSales({ id, storeId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/boost-sales/delete-many-boost-sales',
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
exports.BoostSalesService = BoostSalesService;
