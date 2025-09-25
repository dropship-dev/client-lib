"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAdwordsService = void 0;
class GoogleAdwordsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns CreateGoogleAdWordsResponse Ok
     * @throws ApiError
     */
    createGoogleAdWords({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/google-adwords',
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
     * @returns GetGoogleAdWordsResponse Ok
     * @throws ApiError
     */
    listGoogleAdWords({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/google-adwords',
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
     * @returns GetGoogleAdWordsResponse Ok
     * @throws ApiError
     */
    getGoogleAdWords({ storeId, conversionId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/google-adwords/{conversionId}',
            path: {
                'storeId': storeId,
                'conversionId': conversionId,
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
    updateGoogleAdWords({ storeId, conversionId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/google-adwords/{conversionId}',
            path: {
                'storeId': storeId,
                'conversionId': conversionId,
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
     * @returns string Ok
     * @throws ApiError
     */
    deleteGoogleAdWords({ storeId, conversionId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/google-adwords/{conversionId}',
            path: {
                'storeId': storeId,
                'conversionId': conversionId,
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
exports.GoogleAdwordsService = GoogleAdwordsService;
