"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingEmailService = void 0;
class MarketingEmailService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns void
     * @throws ApiError
     */
    get1X1PixelImage({ data, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/email/tracking/images',
            query: {
                'data': data,
                'token': token,
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
     * @returns void
     * @throws ApiError
     */
    unsubscribeEmail({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/marketing/email/unsubscribe',
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
     * @returns void
     * @throws ApiError
     */
    getOrder({ data, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/email/click',
            query: {
                'data': data,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.MarketingEmailService = MarketingEmailService;
