"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodCategoryService = void 0;
class PodCategoryService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCategory({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/category',
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
    getListCategory({ fulfillmentAgencyId, storeId, search, startDate, endDate, layout, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/category',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'storeId': storeId,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
                'layout': layout,
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
    updateCategory({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/pod/category/{id}',
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
     * @returns any Ok
     * @throws ApiError
     */
    deleteCategory({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/pod/category/{id}',
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listAllCategory({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/category/list',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
exports.PodCategoryService = PodCategoryService;
