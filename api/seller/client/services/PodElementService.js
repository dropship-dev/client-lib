"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodElementService = void 0;
class PodElementService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createElement({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/element',
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
    getAllElement({ page, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/element',
            query: {
                'page': page,
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
     * @returns Element Ok
     * @throws ApiError
     */
    updateElement({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/pod/element/{id}',
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
     * @returns Element Ok
     * @throws ApiError
     */
    deleteElement({ id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/pod/element/{id}',
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
exports.PodElementService = PodElementService;
