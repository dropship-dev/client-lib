"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagService = void 0;
class ProductTagService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    createProductTag({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/product-tag',
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
    getProductTag({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/product-tag/{id}',
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
exports.ProductTagService = ProductTagService;
