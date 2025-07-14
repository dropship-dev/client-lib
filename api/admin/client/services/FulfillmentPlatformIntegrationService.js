"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentPlatformIntegrationService = void 0;
class FulfillmentPlatformIntegrationService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns SearchBettaSupSellersResponse Ok
     * @throws ApiError
     */
    searchSellersOnBettaSup({ cursor, pageSize = 20, email, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-platform-integration/bettasup-sellers',
            query: {
                'cursor': cursor,
                'pageSize': pageSize,
                'email': email,
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
    getProductDataFromProductUrl({ xBettamaxApiKey, url, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillment-platform-integration/product-data-by-permalink',
            headers: {
                'x-bettamax-api-key': xBettamaxApiKey,
            },
            query: {
                'url': url,
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
exports.FulfillmentPlatformIntegrationService = FulfillmentPlatformIntegrationService;
