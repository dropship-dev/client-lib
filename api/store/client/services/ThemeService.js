"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeService = void 0;
class ThemeService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getActiveTheme({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/theme/active',
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
    getTheme({ storeId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/theme/{id}',
            path: {
                'storeId': storeId,
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
exports.ThemeService = ThemeService;
