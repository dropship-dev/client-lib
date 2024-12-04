"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleTagManagerService = void 0;
class GoogleTagManagerService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createGoogleTagManager({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/google-tag-manager',
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
    getAllGoogleTagManager({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/google-tag-manager',
            path: {
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
     * @returns any Ok
     * @throws ApiError
     */
    getGoogleTagManager({ storeId, tag, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/google-tag-manager/{tag}',
            path: {
                'storeId': storeId,
                'tag': tag,
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
    updateGoogleTagManager({ storeId, tag, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/google-tag-manager/{tag}',
            path: {
                'storeId': storeId,
                'tag': tag,
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
    deleteGoogleTagManager({ storeId, tag, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/google-tag-manager/{tag}',
            path: {
                'storeId': storeId,
                'tag': tag,
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
exports.GoogleTagManagerService = GoogleTagManagerService;
