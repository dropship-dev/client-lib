"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingService = void 0;
class SettingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSetting({ fulfillmentAgencyId, storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/setting',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'storeId': storeId,
            },
            errors: {
                400: `Bad request`,
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
    getPlatformRevenueLimit() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/setting/revenue-limit',
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
    updatePlatformRevenueLimit({ requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/setting/revenue-limit',
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
    updateSetting({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/setting/{id}',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
}
exports.SettingService = SettingService;
