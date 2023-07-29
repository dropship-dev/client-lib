"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FbPixelService = void 0;
class FbPixelService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns FbPixel Ok
     * @throws ApiError
     */
    createFbPixel({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/fb-pixel',
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
    getAllFbPixel({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/fb-pixel',
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
     * @returns FbPixel Ok
     * @throws ApiError
     */
    getFbPixel({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/fb-pixel/{pixelId}',
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
     * @returns FbPixel Ok
     * @throws ApiError
     */
    updateFbPixel({ storeId, pixelId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/fb-pixel/{pixelId}',
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
     * @returns FbPixel Ok
     * @throws ApiError
     */
    deleteFbPixel({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/fb-pixel/{pixelId}',
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
exports.FbPixelService = FbPixelService;
