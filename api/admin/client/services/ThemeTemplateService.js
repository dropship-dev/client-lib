"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeTemplateService = void 0;
class ThemeTemplateService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    getAllThemeTemplate() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme-template',
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
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    getThemeTemplate({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme-template/{id}',
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
exports.ThemeTemplateService = ThemeTemplateService;
