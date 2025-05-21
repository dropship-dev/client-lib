"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapChatPixelService = void 0;
class SnapChatPixelService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createSnapChatPixel({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/snapchat-pixel',
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
    getAllSnapChatPixel({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/snapchat-pixel',
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
    getSnapChatPixel({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/snapchat-pixel/{pixelId}',
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
     * @returns any Ok
     * @throws ApiError
     */
    updateSnapChatPixel({ storeId, pixelId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/snapchat-pixel/{pixelId}',
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
    deleteSnapChatPixel({ storeId, pixelId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/snapchat-pixel/{pixelId}',
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
exports.SnapChatPixelService = SnapChatPixelService;
