"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    countProduct({ storeId, isActive, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/count',
            path: {
                'storeId': storeId,
            },
            query: {
                'isActive': isActive,
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
    getAllProduct({ storeId, pageSize = 20, nextPageIndex, name, tags, isActive, isInactive, haveDiscount, startPrice, endPrice, isCheckRootProductCrossSell, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product',
            path: {
                'storeId': storeId,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'name': name,
                'tags': tags,
                'isActive': isActive,
                'isInactive': isInactive,
                'haveDiscount': haveDiscount,
                'startPrice': startPrice,
                'endPrice': endPrice,
                'isCheckRootProductCrossSell': isCheckRootProductCrossSell,
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
    getProductByPermalink({ storeId, permalink, productId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/permalink',
            path: {
                'storeId': storeId,
            },
            query: {
                'permalink': permalink,
                'productId': productId,
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
    getProductByPermalinkSideStore({ storeId, permalink, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/permalink-side-store',
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
    getStatusOrderItems({ storeId, variantIds, comboIds, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/getStatusOrderItems',
            path: {
                'storeId': storeId,
            },
            query: {
                'variantIds': variantIds,
                'comboIds': comboIds,
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
    getStatusBoostSale({ storeId, boostSaleIds, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/getStatusBoostSales',
            path: {
                'storeId': storeId,
            },
            query: {
                'boostSaleIds': boostSaleIds,
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
    getUpSellByProductIds({ storeId, productIds, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/getUpSellByProductIds',
            path: {
                'storeId': storeId,
            },
            query: {
                'productIds': productIds,
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
exports.ProductService = ProductService;
