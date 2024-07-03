"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodProductTypeService = void 0;
class PodProductTypeService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns ProductType Ok
     * @throws ApiError
     */
    createProductType({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/product-type',
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
     * @returns ProductType Ok
     * @throws ApiError
     */
    getAllProductType({ categoryId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/product-type',
            query: {
                'categoryId': categoryId,
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
     * @returns ProductType Ok
     * @throws ApiError
     */
    updateProductType({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/pod/product-type/{id}',
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
     * @returns ProductType Ok
     * @throws ApiError
     */
    deleteProductType({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/pod/product-type/{id}',
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
exports.PodProductTypeService = PodProductTypeService;
