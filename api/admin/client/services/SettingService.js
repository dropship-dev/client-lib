"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingService = void 0;
class SettingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns Setting Ok
     * @throws ApiError
     */
    getSetting() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/setting',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    updateSetting({ requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/setting/{id}',
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
}
exports.SettingService = SettingService;
