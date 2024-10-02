"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    createProductForStoreJoinFa({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/product/seller-dependence',
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
    getAllProduct({ storeId, pageSize = 20, nextPageIndex, name, tags, isActive, startPrice, endPrice, isCheckRootProductCrossSell, }) {
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
    getStatusOrderItems({ storeId, variantIds, comboIds, boostSaleIds, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/getStatusOrderItems',
            path: {
                'storeId': storeId,
            },
            query: {
                'variantIds': variantIds,
                'comboIds': comboIds,
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
    getProduct({ storeId, productId, isGetAllPlatformProductStore, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/product/{productId}',
            path: {
                'storeId': storeId,
                'productId': productId,
            },
            query: {
                'isGetAllPlatformProductStore': isGetAllPlatformProductStore,
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
    deleteProduct({ storeId, productId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/product/{productId}',
            path: {
                'storeId': storeId,
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
}
exports.ProductService = ProductService;
