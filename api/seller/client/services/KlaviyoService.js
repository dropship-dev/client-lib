"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KlaviyoService = void 0;
class KlaviyoService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    createKlaviyo({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/klaviyo',
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
    getKlaviyo({ storeId, klaviyoId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/klaviyo/{klaviyoId}',
            path: {
                'storeId': storeId,
                'klaviyoId': klaviyoId,
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
    updateKlaviyo({ storeId, klaviyoId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/klaviyo/{klaviyoId}',
            path: {
                'storeId': storeId,
                'klaviyoId': klaviyoId,
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
    deleteKlaviyo({ storeId, klaviyoId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/klaviyo/{klaviyoId}',
            path: {
                'storeId': storeId,
                'klaviyoId': klaviyoId,
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
exports.KlaviyoService = KlaviyoService;
