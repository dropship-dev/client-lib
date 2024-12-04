"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAnalyticService = void 0;
class GoogleAnalyticService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createGa({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/ga',
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
    getAllGa({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/ga',
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
    getGa({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/ga/{pixelId}',
            path: {
                'storeId': storeId,
                'pixelId': pixelId,
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
     * @returns GoogleAnalytic Ok
     * @throws ApiError
     */
    updateGa({ storeId, pixelId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/ga/{pixelId}',
            path: {
                'storeId': storeId,
                'pixelId': pixelId,
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
    deleteGa({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/ga/{pixelId}',
            path: {
                'storeId': storeId,
                'pixelId': pixelId,
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
exports.GoogleAnalyticService = GoogleAnalyticService;
