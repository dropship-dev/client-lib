"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxService = void 0;
class TaxService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns void
     * @throws ApiError
     */
    connectQuaderno({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tax/connect/quaderno',
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
     * @returns void
     * @throws ApiError
     */
    clearCache({ requestBody, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tax/cache',
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
     * @returns TaxProviderItem Ok
     * @throws ApiError
     */
    getListTaxProvider({ storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tax',
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getDetailTaxProvider({ taxProviderId, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tax/{taxProviderId}',
            path: {
                'taxProviderId': taxProviderId,
            },
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns void
     * @throws ApiError
     */
    removeTaxProviderCache({ taxProviderId, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tax/{taxProviderId}',
            path: {
                'taxProviderId': taxProviderId,
            },
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns void
     * @throws ApiError
     */
    validateQuaderno({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tax/validate',
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
     * @returns void
     * @throws ApiError
     */
    updateNameTaxProvider({ taxProviderId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tax/{taxProviderId}/name',
            path: {
                'taxProviderId': taxProviderId,
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
     * @returns void
     * @throws ApiError
     */
    updateConfigTaxProvider({ taxProviderId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tax/{taxProviderId}/config',
            path: {
                'taxProviderId': taxProviderId,
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
exports.TaxService = TaxService;
