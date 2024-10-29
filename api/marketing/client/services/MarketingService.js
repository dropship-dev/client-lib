"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingService = void 0;
class MarketingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns User Ok
     * @throws ApiError
     */
    createMarketingAccount({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/marketing',
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
    getListStoreMarketing({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/marketing/store',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    sendEmailToListStore({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/marketing/send-email',
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
exports.MarketingService = MarketingService;
