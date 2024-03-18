"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeLibraryService = void 0;
class ThemeLibraryService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns ThemeLibrary Ok
     * @throws ApiError
     */
    getAllThemeLibrary() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme-library',
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
    getThemeLibrary({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme-library/{id}',
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
exports.ThemeLibraryService = ThemeLibraryService;
