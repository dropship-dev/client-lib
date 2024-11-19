"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiktokPixelService = void 0;
class TiktokPixelService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTiktokPixel({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/tiktok-pixel',
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
    getAllTiktokPixel({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/tiktok-pixel',
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
    getTiktokPixel({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/tiktok-pixel/{pixelId}',
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
     * @returns TiktokPixel Ok
     * @throws ApiError
     */
    updateTiktokPixel({ storeId, pixelId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/tiktok-pixel/{pixelId}',
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
     * @returns TiktokPixel Ok
     * @throws ApiError
     */
    deleteTiktokPixel({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/tiktok-pixel/{pixelId}',
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
exports.TiktokPixelService = TiktokPixelService;
