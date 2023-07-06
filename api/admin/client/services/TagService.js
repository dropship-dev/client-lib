"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
class TagService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns AdminTag Ok
     * @throws ApiError
     */
    createTag({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tag',
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
     * @returns AdminTag Ok
     * @throws ApiError
     */
    getTags({ search, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag',
            query: {
                'search': search,
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
     * @returns AdminTag Ok
     * @throws ApiError
     */
    getTag({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tag/{id}',
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
exports.TagService = TagService;
